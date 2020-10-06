import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    ChevronDownThinIcon,
    ChevronUpThinIcon,
} from '../../design-tokens/icons';
import { debounce } from '../../utils/debounce';
import styles from './Menu.module.scss';

declare let ResizeObserver: any;

interface MenuItem {
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
     * Image.
     */
    logo?: string;
    /**
     * Link where the menu item should navigate to.
     */
    link: string;
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
     * Label of the `More` menu-item.
     * Default: Meer
     */
    moreLabel?: string;
    [x: string]: any;
}

/**
 * Generate ids for menu items.
 * @param menuItems
 * @param parent
 */
function generateIds(menuItems: MenuItem[], parent?: string) {
    const menuItemsCopy = [...menuItems];
    menuItemsCopy.forEach((menuItem, idx) => {
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
    return menuItemsCopy;
}

const expandTimeouts = {};

function Menu(props: Props) {
    const menuRef = useRef(null);
    const customMenuRef = useRef(null);

    const [moreMenuItem, setMoreMenuItem] = useState<MenuItem>({
        id: styles['more-menu'],
        label: props.moreLabel ?? 'Meer',
        link: '',
        menuItems: [{ id: 'test', label: 'test', link: '/test' }],
    });
    const [menuItems, setMenuItems] = useState<MenuItem[]>(
        generateIds(props.menuItems)
    );
    const [sortedMenuItems, setSortedMenuItems] = useState<MenuItem[]>(
        menuItems
    );

    useEffect(() => {
        const renderMenuItems = generateIds(
            moreMenuItem.menuItems.length
                ? [...props.menuItems, moreMenuItem]
                : props.menuItems
        );
        setMenuItems(renderMenuItems);
        setSortedMenuItems(renderMenuItems);
    }, [props.menuItems, moreMenuItem]);

    /**
     * Check overlap and re-order menu-items.
     */
    const handleOverlap = useCallback(() => {
        if (menuRef.current && customMenuRef.current) {
            let newMenuItems: MenuItem[] = [];
            let overlappedItems: MenuItem[] = [];
            let overlappedMoreMenuItems: MenuItem[] = [];
            let newMoreMenuItem = JSON.parse(JSON.stringify(moreMenuItem));
            const availableWidth =
                menuRef.current.getBoundingClientRect().width -
                customMenuRef.current.getBoundingClientRect().width;
            const moreMenu = menuRef.current.querySelector(
                `#${newMoreMenuItem.id}`
            );
            let accumulativeWidth = moreMenu?.getBoundingClientRect()?.width;

            menuItems.forEach((menuItem) => {
                if (menuItem.id !== styles['more-menu']) {
                    const newMenuItem = JSON.parse(JSON.stringify(menuItem));
                    const cur = menuRef.current.querySelector(
                        `#${menuItem.id}`
                    );
                    if (
                        cur &&
                        accumulativeWidth + cur?.getBoundingClientRect().width <
                            availableWidth
                    ) {
                        newMenuItems.push(newMenuItem);
                        /**
                         * Filter the newMenuItem from the more menu sub-menu.
                         */
                        newMoreMenuItem.menuItems = [
                            ...newMoreMenuItem.menuItems.filter(
                                (menuItem) => menuItem.id !== newMenuItem.id
                            ),
                        ];
                        accumulativeWidth += cur?.getBoundingClientRect().width;
                    } else {
                        overlappedItems.push(newMenuItem);
                        overlappedMoreMenuItems.push({
                            ...JSON.parse(JSON.stringify(newMenuItem)),
                            id: `more-${newMenuItem.id}`,
                        });
                    }
                }
            });

            newMoreMenuItem.menuItems.unshift(...overlappedMoreMenuItems);

            setSortedMenuItems([
                ...newMenuItems,
                newMoreMenuItem,
                ...overlappedItems,
            ]);
        }
    }, [menuRef.current, customMenuRef.current, menuItems, moreMenuItem]);

    useEffect(() => {
        window.addEventListener('resize', () => debounce(handleOverlap, 50));
        handleOverlap(); // Initial check
    }, [handleOverlap]);

    /**
     * Determine which menu items don't fit anymore and hide them.
     * If there is enough space to show them again they will be displayed again.
     */
    useEffect(() => {
        if (customMenuRef.current) {
            const observer = new ResizeObserver(() => {
                window.dispatchEvent(new CustomEvent('resize'));
            });
            observer.observe(customMenuRef.current);
        }
    }, [customMenuRef.current]);

    function toggle(id: string, subMenuItems?: MenuItem[]) {
        if (!sortedMenuItems.length) {
            return;
        }
        if (expandTimeouts[id]) {
            clearTimeout(expandTimeouts[id]);
            delete expandTimeouts[id];
        }
        const menuItemsCopy =
            subMenuItems && subMenuItems.length
                ? subMenuItems
                : [...sortedMenuItems];
        menuItemsCopy.forEach((menuItem) => {
            if (id === menuItem.id) {
                menuItem.expanded = !menuItem.expanded;
            } else if (menuItem?.menuItems?.length) {
                toggle(id, menuItem.menuItems);
            }
        });
        if (!subMenuItems.length) {
            // only call for the root
            setSortedMenuItems(menuItemsCopy);
        }
    }

    const expand = (id: string, subMenuItems?: MenuItem[]) => {
        if (!sortedMenuItems.length) {
            return;
        }
        if (expandTimeouts[id]) {
            clearTimeout(expandTimeouts[id]);
            delete expandTimeouts[id];
        }
        const menuItemsCopy =
            subMenuItems && subMenuItems.length
                ? subMenuItems
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
    };

    const contract = (id?: string, subMenuItems?: MenuItem[]) => {
        if (!sortedMenuItems.length) {
            return;
        }
        expandTimeouts[id] = setTimeout(() => {
            const menuItemsCopy =
                subMenuItems && subMenuItems.length
                    ? subMenuItems
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
    };

    /**
     * Render all the menu-items.
     * @param menuItems
     * @param hidden
     * @param isRoot true when the item is the root menu-item
     */
    const renderMenu = (
        menuItems: MenuItem[],
        hidden = false,
        isRoot = true
    ) => {
        const items = menuItems.map((menuItem) => {
            const hasPopup =
                menuItem.menuItems && menuItem.menuItems.length > 0;

            return (
                <li
                    id={menuItem.id}
                    key={menuItem.id}
                    className={styles.hasItems}
                    onMouseLeave={
                        isRoot ? contract.bind(null, menuItem.id) : null
                    }
                >
                    <Link href={menuItem.link}>
                        <a
                            {...(menuItem.target
                                ? {
                                      target: menuItem.target,
                                      rel: 'noopener noreferrer nofollow',
                                  }
                                : {})}
                            title={menuItem.id}
                            {...(hasPopup
                                ? {
                                      'aria-expanded': !!menuItem.expanded,
                                  }
                                : {})}
                            aria-haspopup={hasPopup}
                            onMouseEnter={
                                isRoot ? expand.bind(null, menuItem.id) : null
                            }
                        >
                            {menuItem.label}
                        </a>
                    </Link>
                    {hasPopup && (
                        <button
                            onClick={toggle.bind(null, menuItem.id)}
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
                            onMouseLeave={
                                isRoot ? contract.bind(null, menuItem.id) : null
                            }
                        />
                    )}
                    {menuItem.menuItems &&
                        menuItem.menuItems.length > 0 &&
                        renderMenu(
                            menuItem.menuItems,
                            !menuItem.expanded,
                            false
                        )}
                </li>
            );
        });

        return <ul className={hidden ? 'hidden' : ''}>{items}</ul>;
    };

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
