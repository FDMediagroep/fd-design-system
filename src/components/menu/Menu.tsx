import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    ChevronDownThinIcon,
    ChevronUpThinIcon,
} from '../../design-tokens/icons';
import { debounce } from '../../utils/debounce';
import styles from './Menu.module.scss';

declare let ResizeObserver: any;

export interface MenuItem {
    /**
     * This ID is auto-generated. No need to pass this along.
     */
    id?: string;
    /**
     * Set to true if the menu has sub-menu items and it should be initially be opened.
     */
    expanded?: boolean;
    /**
     * (aria-)label of the menu item.
     */
    label: string;
    /**
     * Custom component as menu-item.
     * Setting this will override the label.
     */
    component?: JSX.Element | JSX.Element[];
    /**
     * Link where the menu item should navigate to.
     */
    link?: string;
    /**
     * Link as shown in the browser. Can differ from link.
     */
    as?: string;
    /**
     * Link relationship.
     * e.g.: noopener noreferrer nofollow
     */
    rel?: string;
    /**
     * target window.
     */
    target?: string;
    /**
     * Sub-menu items.
     */
    menuItems?: MenuItem[];
}

interface Props {
    /**
     * Label of the menu which will be pronounced by text-to-voice
     * browsers.
     */
    label: string;
    /**
     * Menu items. Use a nested structure to create sub-menus.
     */
    menuItems?: MenuItem[];
    /**
     * Menu items shown under the More sub-menu.
     */
    moreMenuItems?: MenuItem[];
    /**
     * Label of the `More` menu-item.
     * Default: Meer
     */
    moreLabel?: string;
    [x: string]: any;
}

/**
 * Generate ids for menu items.
 * @param menuItems this will be modified as-is to increase performance
 * @param parent
 */
function generateIds(menuItems: MenuItem[], parent?: string) {
    menuItems?.forEach((menuItem, idx) => {
        if (menuItem.id) {
            return true;
        }
        menuItem.id = `${
            parent ? `${parent}-${idx + 1}` : `menu-item-${idx + 1}`
        }`;
        if (menuItem.menuItems && menuItem.menuItems.length) {
            menuItem.menuItems = generateIds(menuItem.menuItems, menuItem.id);
        }
    });
    return menuItems;
}

/**
 * Generate ids for more menu sub-items.
 * @param menuItems this will be modified as-is to increase performance
 * @param parent
 */
function generateMoreIds(menuItems: MenuItem[], parent?: string) {
    menuItems?.forEach((menuItem, idx) => {
        menuItem.id = `more-${
            parent ? `${parent}-${idx + 1}` : `menu-item-${idx + 1}`
        }`;
        if (menuItem.menuItems && menuItem.menuItems.length) {
            menuItem.menuItems = generateMoreIds(
                menuItem.menuItems,
                menuItem.id.replace('more-', '')
            );
        }
    });
    return menuItems;
}

/**
 * Copy menu-items recursively.
 * @param menuItems
 */
function copyMenuItem(menuItems: MenuItem[]) {
    const cloned = [...menuItems];
    cloned.forEach((clonedItem) => {
        if (clonedItem?.menuItems?.length) {
            clonedItem.menuItems = copyMenuItem(clonedItem.menuItems);
        }
    });
    return cloned;
}

/**
 * Check overlap and re-order menu-items.
 */
const handleOverlapBackup = (
    menuRef: any,
    customMenuRef: any,
    menuItems: MenuItem[],
    moreMenuItem: MenuItem
) => {
    let results: MenuItem[] = [];
    if (menuRef.current && customMenuRef.current) {
        let newMenuItems: MenuItem[] = [];
        let overlappedItems: MenuItem[] = [];
        let overlappedMoreMenuItems: MenuItem[] = [];
        const availableWidth =
            menuRef.current.getBoundingClientRect().width -
            customMenuRef.current.getBoundingClientRect().width;
        const moreMenu = menuRef.current.querySelector(`#${moreMenuItem.id}`);
        let accumulatedWidth = moreMenu
            ? moreMenu?.getBoundingClientRect()?.width
            : 0;

        menuItems?.forEach((menuItem) => {
            const menuItemCopy = menuItem;
            if (menuItemCopy.id !== styles['more-menu']) {
                const cur = menuRef.current.querySelector(
                    `#${menuItemCopy.id}`
                );

                console.log(
                    menuItemCopy.id,
                    window.getComputedStyle(cur).visibility,
                    cur,
                    accumulatedWidth,
                    cur?.getBoundingClientRect().width,
                    availableWidth,
                    accumulatedWidth + cur?.getBoundingClientRect().width <
                        availableWidth
                );

                if (
                    cur?.getBoundingClientRect().width === 0 ||
                    accumulatedWidth + cur?.getBoundingClientRect().width <
                        availableWidth
                ) {
                    newMenuItems.push(menuItemCopy);
                    /**
                     * Remove the newMenuItem from the more menu sub-menu.
                     */
                    moreMenuItem.menuItems = moreMenuItem.menuItems.filter(
                        (moreMenuItem) => moreMenuItem.id !== menuItemCopy.id
                    );
                    accumulatedWidth += cur?.getBoundingClientRect().width;
                } else {
                    overlappedItems.push(menuItemCopy);
                    overlappedMoreMenuItems.push(
                        ...copyMenuItem([menuItemCopy])
                    );
                }
            }
        });

        /**
         * Reversed unshift of overlapping items into the more-menu.
         */
        for (let i = overlappedMoreMenuItems.length - 1; i >= 0; --i) {
            const overlappedItem = overlappedMoreMenuItems[i];
            const found = moreMenuItem.menuItems.find(
                (moreItem) => moreItem.id === overlappedItem.id
            );
            if (!found) {
                moreMenuItem.menuItems.unshift(overlappedItem);
            }
        }

        results = results.concat(newMenuItems, moreMenuItem, overlappedItems);
    }

    return results;
};

const expandTimeouts = {};
let previousOverlap;

function Menu(props: Props) {
    const menuRef = useRef(null);
    const customMenuRef = useRef(null);

    const [moreMenuItem, setMoreMenuItem] = useState<MenuItem>({
        id: styles['more-menu'],
        label: props.moreLabel ?? 'Meer',
        link: '',
        menuItems: generateMoreIds(props.moreMenuItems) ?? [],
    });
    const [menuItems, setMenuItems] = useState<MenuItem[]>(
        generateIds(props.menuItems)
    );
    const [sortedMenuItems, setSortedMenuItems] = useState<MenuItem[]>(
        menuItems
    );

    const handleOverlap = useCallback(() => {
        if (menuRef.current && customMenuRef.current) {
            let results: MenuItem[] = [];
            let newMenuItems: MenuItem[] = [];
            let overlappedItems: MenuItem[] = [];
            let overlappedMoreMenuItems: MenuItem[] = [];
            const availableWidth =
                menuRef.current.getBoundingClientRect().width -
                customMenuRef.current.getBoundingClientRect().width;
            const moreMenu = menuRef.current.querySelector(
                `#${moreMenuItem.id}`
            );
            let accumulatedWidth = moreMenu
                ? moreMenu?.getBoundingClientRect()?.width
                : 0;

            menuItems?.forEach((menuItem) => {
                const menuItemCopy = menuItem;
                if (menuItemCopy.id !== styles['more-menu']) {
                    const cur = menuRef.current.querySelector(
                        `#${menuItemCopy.id}`
                    );
                    if (
                        cur?.getBoundingClientRect().width &&
                        accumulatedWidth + cur?.getBoundingClientRect().width <
                            availableWidth
                    ) {
                        newMenuItems.push(menuItemCopy);
                        /**
                         * Remove the newMenuItem from the more menu sub-menu.
                         */
                        moreMenuItem.menuItems = moreMenuItem.menuItems.filter(
                            (moreMenuItem) =>
                                moreMenuItem.id !== menuItemCopy.id
                        );
                        accumulatedWidth += cur?.getBoundingClientRect().width;
                    } else {
                        overlappedItems.push(menuItemCopy);
                        overlappedMoreMenuItems.push(
                            ...copyMenuItem([menuItemCopy])
                        );
                    }
                }
            });

            /**
             * Reversed unshift of overlapping items into the more-menu.
             */
            for (let i = overlappedMoreMenuItems.length - 1; i >= 0; --i) {
                const overlappedItem = overlappedMoreMenuItems[i];
                const found = moreMenuItem.menuItems.find(
                    (moreItem) => moreItem.id === overlappedItem.id
                );
                if (!found) {
                    moreMenuItem.menuItems.unshift(overlappedItem);
                }
            }

            results = results.concat(
                newMenuItems,
                moreMenuItem,
                overlappedItems
            );
            setSortedMenuItems(results);
        }
    }, [menuRef, customMenuRef, menuItems, moreMenuItem]);

    useEffect(() => {
        setMenuItems(generateIds(props.menuItems));
        setMoreMenuItem({
            id: styles['more-menu'],
            label: props.moreLabel ?? 'Meer',
            link: '',
            menuItems: props.moreMenuItems ?? [],
        });
        handleOverlap();
    }, [props.menuItems, props.moreMenuItems, props.moreLabel]);

    /**
     * Check if menu items are being overlapped by the custom menu.
     * Overlapped items are then placed in the more-menu.
     */
    useEffect(() => {
        if (!menuRef.current || !customMenuRef.current) {
            return;
        }
        if (previousOverlap) {
            window.removeEventListener('resize', previousOverlap);
        }
        previousOverlap = () => {
            debounce(() => {
                handleOverlap();
            }, 100);
        };
        window.addEventListener('resize', previousOverlap);
        handleOverlap(); // Initial check
    }, [menuRef, customMenuRef, menuItems, moreMenuItem]);

    /**
     * Observe if custom menu is being resized.
     */
    useEffect(() => {
        if (customMenuRef.current) {
            const observer = new ResizeObserver(() => {
                window.dispatchEvent(new CustomEvent('resize'));
            });
            observer.observe(customMenuRef.current);
        }
    }, [customMenuRef.current]);

    /**
     * Toggle sub-menu visibility.
     * @param id
     * @param isRoot
     * @param subMenuItems
     */
    function toggle(id: string, isRoot?: boolean, subMenuItems?: MenuItem[]) {
        if (!sortedMenuItems.length) {
            // No need to work if we don't have any menu items.
            return;
        }
        // Check if there are outstanding timeouts for the expansion of this menu-item.
        if (expandTimeouts[id]) {
            clearTimeout(expandTimeouts[id]);
            delete expandTimeouts[id];
        }

        // Shallow-copy menu items.
        const menuItemsCopy = subMenuItems?.length
            ? [...subMenuItems]
            : [...sortedMenuItems];
        menuItemsCopy.forEach((menuItem) => {
            if (id === menuItem.id) {
                // Toggle the menu-item.
                menuItem.expanded = !menuItem.expanded;
            } else if (menuItem?.menuItems?.length) {
                if (isRoot) {
                    /**
                     * In case we are toggeling a root menu item we want to close eventual
                     * other opened root menu-item(s)
                     */
                    menuItem.expanded = false;
                }
                // Recursively search for the menu-item matching id.
                toggle(id, false, menuItem.menuItems);
            }
        });
        if (!subMenuItems?.length) {
            setSortedMenuItems(menuItemsCopy);
        }
    }

    /**
     * Expand sub-menu.
     * @param id
     * @param subMenuItems
     */
    function expand(id: string, subMenuItems?: MenuItem[]) {
        if (!sortedMenuItems.length) {
            return;
        }
        if (expandTimeouts[id]) {
            clearTimeout(expandTimeouts[id]);
            delete expandTimeouts[id];
        }
        const menuItemsCopy =
            subMenuItems && subMenuItems.length
                ? [...subMenuItems]
                : [...sortedMenuItems];
        menuItemsCopy.forEach((menuItem) => {
            if (id === menuItem.id) {
                menuItem.expanded = true;
            } else if (menuItem?.menuItems?.length) {
                expand(id, menuItem.menuItems);
            }
        });
        if (!subMenuItems.length) {
            // only call for the root
            setSortedMenuItems(menuItemsCopy);
        }
    }

    /**
     * Contract sub-menu.
     * @param id
     * @param subMenuItems
     */
    function contract(id?: string, subMenuItems?: MenuItem[]) {
        if (!sortedMenuItems.length) {
            return;
        }
        expandTimeouts[id] = setTimeout(() => {
            const menuItemsCopy =
                subMenuItems && subMenuItems.length
                    ? [...subMenuItems]
                    : [...sortedMenuItems];
            menuItemsCopy.forEach((menuItem) => {
                if (!id || id === menuItem.id) {
                    menuItem.expanded = false;
                    if (menuItem?.menuItems?.length) {
                        contract(null, menuItem.menuItems);
                    }
                }
            });
            if (!subMenuItems.length) {
                // only call for the root
                setSortedMenuItems(menuItemsCopy);
            }
        }, 100);
    }

    /**
     * Render all the menu-items.
     * @param menuItems
     * @param hidden
     * @param isRoot true when the item is the root menu-item
     */
    function renderMenu(menuItems: MenuItem[], hidden = false, isRoot = true) {
        const items = menuItems?.map((menuItem) => {
            /**
             * Cancel rendering if no label or component is found.
             * Cancel rendering is menuItem is more-menu and it has not
             * sub-menu items.
             */
            if (
                (!menuItem.label && !menuItem.component) ||
                (menuItem.id === styles['more-menu'] &&
                    !menuItem?.menuItems?.length)
            ) {
                return true;
            }

            const hasPopup = menuItem?.menuItems?.length > 0;

            return (
                <li
                    data-key={menuItem.id ?? menuItem.label}
                    key={menuItem.id ?? menuItem.label}
                    id={menuItem.id}
                    className={styles.hasItems}
                    onMouseLeave={
                        isRoot ? contract.bind(null, menuItem.id) : null
                    }
                >
                    {menuItem.id !== styles['more-menu'] ? (
                        menuItem.link ? (
                            <Link href={menuItem.link} as={menuItem.as}>
                                <a
                                    key={menuItem.id ?? menuItem.label}
                                    rel={menuItem.rel}
                                    {...(menuItem.target
                                        ? {
                                              target: menuItem.target,
                                              rel:
                                                  menuItem.rel ??
                                                  'noopener noreferrer nofollow',
                                          }
                                        : {})}
                                    title={menuItem.label}
                                    {...(hasPopup
                                        ? {
                                              'aria-expanded': !!menuItem.expanded,
                                          }
                                        : {})}
                                    aria-haspopup={hasPopup}
                                    onMouseEnter={
                                        isRoot
                                            ? expand.bind(null, menuItem.id)
                                            : null
                                    }
                                    aria-label={menuItem.label}
                                    className={
                                        menuItem.component
                                            ? styles.customComponent
                                            : null
                                    }
                                >
                                    {menuItem.component ?? menuItem.label}
                                </a>
                            </Link>
                        ) : (
                            menuItem.component ?? <a>{menuItem.label}</a>
                        )
                    ) : (
                        <button
                            title={menuItem.label}
                            {...(hasPopup
                                ? {
                                      'aria-expanded': !!menuItem.expanded,
                                  }
                                : {})}
                            aria-haspopup={hasPopup}
                            onClick={toggle.bind(null, menuItem.id, isRoot)}
                            onMouseEnter={
                                isRoot ? expand.bind(null, menuItem.id) : null
                            }
                            aria-label={menuItem.label}
                            className={
                                menuItem.component
                                    ? styles.customComponent
                                    : null
                            }
                        >
                            {menuItem.component ?? menuItem.label}
                        </button>
                    )}
                    {hasPopup && (
                        <button
                            onClick={toggle.bind(null, menuItem.id, isRoot)}
                            onMouseEnter={
                                isRoot ? expand.bind(null, menuItem.id) : null
                            }
                            dangerouslySetInnerHTML={{
                                __html: menuItem.expanded
                                    ? ChevronUpThinIcon
                                    : ChevronDownThinIcon,
                            }}
                            aria-label={
                                menuItem.expanded
                                    ? 'close sub-menu'
                                    : 'open sub-menu'
                            }
                            aria-expanded={menuItem.expanded}
                            aria-haspopup={hasPopup}
                        />
                    )}
                    {hasPopup &&
                        renderMenu(
                            menuItem.menuItems,
                            !menuItem.expanded,
                            false
                        )}
                </li>
            );
        });

        return <ul className={hidden ? 'hidden' : ''}>{items}</ul>;
    }

    return (
        <header
            ref={menuRef}
            className={`${styles.menuContainer}${
                props.className ? ` ${props.className}` : ''
            }`}
            aria-label={props.label}
        >
            <div className={styles.menuCenter}>
                <nav className={styles.menu}>
                    {renderMenu(sortedMenuItems ?? menuItems)}
                </nav>
                <span
                    ref={customMenuRef}
                    className={styles.customComponentsContainer}
                >
                    {props.children}
                </span>
            </div>
        </header>
    );
}

function getCssClassNames() {
    return [styles.menu];
}

export { Menu, getCssClassNames };
