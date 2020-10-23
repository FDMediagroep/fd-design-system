import React, { useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from '../../utils/debounce';
import styles from './Menu.module.scss';
import ResizeObserver from 'resize-observer-polyfill';
import { ToggleButton } from './ToggleButton';
import { ToggleIconButton } from './ToggleIconButton';
import { MenuLink } from './MenuLink';

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
     * ARIA-label of the menu item.
     */
    ariaLabel?: string;
    /**
     * Visible text of the menu item.
     */
    text?: string;
    /**
     * Custom component as menu-item.
     * Setting this will override the linkText.
     */
    component?: JSX.Element | JSX.Element[];
    /**
     * Is a toggle only. Setting this to true will render this menu
     * item as a button whose function is to toggle the sub-menu.
     */
    isToggle?: boolean;
    /**
     * Link where the menu item should navigate to.
     */
    href?: string;
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

    [x: string]: any;
}

interface Props {
    /**
     * ARIA-label of the menu.
     */
    ariaLabel: string;
    /**
     * Class name for the centered part of the menu items container.
     */
    contentClassName?: string;
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
function copyMenuItems(menuItems: MenuItem[]) {
    const cloned = [];
    menuItems.forEach((clonedItem) => {
        cloned.push({ ...clonedItem });
        if (clonedItem?.menuItems?.length) {
            clonedItem.menuItems = copyMenuItems(clonedItem.menuItems);
        }
    });
    return cloned;
}

let previousOverlap;
let touchSupport = false;
function detector(event) {
    touchSupport = 'touchstart' == event.type;
    if (touchSupport) {
        /**
         * We keep this listener until touch support has been confirmed.
         * In case the user started by using a mouse and later uses touch again.
         */
        document.removeEventListener('touchstart', detector);
    }
    document.removeEventListener('mousemove', detector);
}

function Menu(props: Props) {
    const menuRef = useRef(null);
    const customMenuRef = useRef(null);

    const [moreMenuItem, setMoreMenuItem] = useState<MenuItem>({
        id: styles['more-menu'],
        isToggle: true,
        text: props.moreLabel ?? 'Meer',
        href: '',
        menuItems: generateMoreIds(props.moreMenuItems) ?? [],
    });
    const [menuItems, setMenuItems] = useState<MenuItem[]>(
        generateIds(props.menuItems)
    );
    const [sortedMenuItems, setSortedMenuItems] = useState<MenuItem[]>(
        menuItems
    );

    /**
     * Touch detection.
     */
    useEffect(() => {
        touchSupport =
            'ontouchstart' in window ||
            navigator['MaxTouchPoints'] > 0 ||
            navigator.msMaxTouchPoints > 0;

        document.addEventListener('touchstart', detector);
        document.addEventListener('mousemove', detector);
    }, []);

    const handleOverlap = useCallback(() => {
        if (menuRef.current && customMenuRef.current) {
            const newMenuItems: MenuItem[] = [];
            let moreMenuItems: MenuItem[] = copyMenuItems(
                moreMenuItem.menuItems
            );
            const overlappedItems: MenuItem[] = [];
            const overlappedMoreMenuItems: MenuItem[] = [];
            const availableWidth =
                menuRef.current.getBoundingClientRect().width -
                customMenuRef.current.getBoundingClientRect().width;
            let moreMenuWidth =
                menuRef.current
                    .querySelector(`#${moreMenuItem.id}`)
                    ?.getBoundingClientRect()?.width ?? 0;

            menuItems?.forEach((menuItem) => {
                if (menuItem.id !== styles['more-menu']) {
                    const cur = menuRef.current.querySelector(
                        `#${menuItem.id}`
                    );
                    const itemWidth = Math.max(
                        cur?.getBoundingClientRect().width,
                        100
                    );
                    if (itemWidth < availableWidth - moreMenuWidth) {
                        newMenuItems.push(menuItem);
                        /**
                         * Remove the newMenuItem from the more menu sub-menu.
                         */
                        moreMenuItems = moreMenuItems.filter(
                            (moreMenuItem) => moreMenuItem.id !== menuItem.id
                        );
                        moreMenuWidth += itemWidth;
                    } else {
                        overlappedItems.push(menuItem);
                        overlappedMoreMenuItems.push(
                            ...copyMenuItems([menuItem])
                        );
                        return false;
                    }
                }
            });

            /**
             * Reversed unshift of overlapping items into the more-menu.
             */
            for (let i = overlappedMoreMenuItems.length - 1; i >= 0; --i) {
                const overlappedItem = overlappedMoreMenuItems[i];
                const found = moreMenuItems.find(
                    (moreItem) => moreItem.id === overlappedItem.id
                );
                if (!found) {
                    moreMenuItems.unshift(overlappedItem);
                }
            }

            setSortedMenuItems([
                ...newMenuItems,
                { ...moreMenuItem, menuItems: moreMenuItems },
                ...overlappedItems,
            ]);
        }
    }, [menuRef, customMenuRef, menuItems, moreMenuItem]);

    useEffect(() => {
        setMenuItems(generateIds(props.menuItems));
        setMoreMenuItem({
            id: styles['more-menu'],
            isToggle: true,
            text: props.moreLabel ?? 'Meer',
            href: '',
            menuItems: generateMoreIds(props.moreMenuItems) ?? [],
        });
    }, [props.menuItems, props.moreMenuItems, props.moreLabel]);

    /**
     * Check if menu items are being overlapped by the custom menu.
     * Overlapped items are then placed in the more-menu.
     */
    useEffect(() => {
        if (previousOverlap) {
            window.removeEventListener('resize', previousOverlap);
        }
        previousOverlap = () => {
            debounce(() => {
                handleOverlap();
            }, 50);
        };
        window.addEventListener('resize', previousOverlap);
        handleOverlap(); // Initial check
    }, [handleOverlap]);

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
    function toggle(id: string, isRoot?: boolean) {
        if (!sortedMenuItems.length) {
            return;
        }
        setSortedMenuItems((prevState) => {
            const subToggle = (
                id?: string,
                isRoot?: boolean,
                subMenuItems?: MenuItem[]
            ) => {
                const menuItemsCopy = subMenuItems?.length
                    ? subMenuItems
                    : copyMenuItems(prevState);
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
                        subToggle(id, false, menuItem.menuItems);
                    }
                });
                return menuItemsCopy;
            };
            return subToggle(id, isRoot);
        });
    }

    /**
     * Expand sub-menu.
     * @param id
     * @param subMenuItems
     */
    function expand(id: string) {
        if (!sortedMenuItems.length) {
            return;
        }
        setSortedMenuItems((prevState) => {
            const menuItemsCopy = copyMenuItems(prevState);
            menuItemsCopy.forEach((menuItem) => {
                if (id === menuItem.id) {
                    menuItem.expanded = true;
                }
            });
            return menuItemsCopy;
        });
    }

    function contractAll() {
        setSortedMenuItems((prevState) => {
            const subContract = (subMenuItems?: MenuItem[]) => {
                const menuItemsCopy = subMenuItems?.length
                    ? subMenuItems
                    : copyMenuItems(prevState);
                menuItemsCopy.forEach((menuItem) => {
                    if (menuItem.expanded) {
                        console.log(menuItem.id);
                    }
                    menuItem.expanded = false;
                    if (menuItem?.menuItems?.length) {
                        subContract(menuItem.menuItems);
                    }
                });
                return menuItemsCopy;
            };
            return subContract();
        });
    }

    /**
     * Contract sub-menu.
     * @param id
     * @param subMenuItems
     */
    function contract(id?: string) {
        if (!sortedMenuItems.length) {
            return;
        }
        setSortedMenuItems((prevState) => {
            const subContract = (id?: string, subMenuItems?: MenuItem[]) => {
                const menuItemsCopy = subMenuItems?.length
                    ? subMenuItems
                    : copyMenuItems(prevState);
                menuItemsCopy.forEach((menuItem) => {
                    if (!id || id === menuItem.id) {
                        menuItem.expanded = false;
                        if (menuItem?.menuItems?.length) {
                            subContract(null, menuItem.menuItems);
                        }
                    }
                });
                return menuItemsCopy;
            };
            return subContract(id);
        });
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
                (!menuItem.text && !menuItem.component) ||
                (menuItem.id === styles['more-menu'] &&
                    !menuItem?.menuItems?.length)
            ) {
                return 'no text, component or child menu items found';
            }

            const hasPopup = menuItem?.menuItems?.length > 0;

            return (
                <li
                    data-key={menuItem.id ?? menuItem.text}
                    key={menuItem.id ?? menuItem.text}
                    id={menuItem.id}
                    className={menuItem.className}
                    onMouseLeave={
                        isRoot ? contract.bind(null, menuItem.id) : null
                    }
                >
                    {!menuItem.isToggle ? (
                        menuItem.href ? (
                            <MenuLink
                                menuItem={menuItem}
                                key={menuItem.id ?? menuItem.text}
                                onMouseEnter={
                                    isRoot && !touchSupport
                                        ? expand.bind(null, menuItem.id)
                                        : null
                                }
                                onClick={contractAll}
                                className={
                                    menuItem.component
                                        ? styles.customComponent
                                        : ''
                                }
                            />
                        ) : (
                            menuItem.component ?? <a>{menuItem.text}</a>
                        )
                    ) : (
                        <ToggleButton
                            menuItem={menuItem}
                            className={`${styles.moreMenuToggleButton}${
                                menuItem.component
                                    ? ` ${styles.customComponent}`
                                    : ''
                            }`}
                            onClick={toggle.bind(null, menuItem.id, isRoot)}
                            onMouseEnter={
                                isRoot && !touchSupport
                                    ? expand.bind(null, menuItem.id)
                                    : null
                            }
                        />
                    )}
                    {hasPopup && (
                        <ToggleIconButton
                            menuItem={menuItem}
                            className={styles.subMenuToggleButton}
                            onClick={toggle.bind(null, menuItem.id, isRoot)}
                        />
                    )}
                    {hasPopup &&
                        /**
                         * Sub-menu
                         */
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
            className={`${styles.menuContainer}${
                props.className ? ` ${props.className}` : ''
            }`}
            aria-label={props.ariaLabel}
        >
            <div
                className={`${styles.menuCenter}${
                    props.contentClassName ? ` ${props.contentClassName}` : ''
                }`}
                ref={menuRef}
            >
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

function getCssClassNames(): string[] {
    return [styles.menu];
}

export { Menu, getCssClassNames };
