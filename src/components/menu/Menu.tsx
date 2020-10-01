import React, { useCallback, useEffect, useState } from 'react';
import {
    ChevronDownThinIcon,
    ChevronUpThinIcon,
} from '../../design-tokens/icons';
import styles from './Menu.module.scss';

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
    [x: string]: any;
}

function Menu(props: Props) {
    /**
     * Generate ids for menu items.
     * @param menuItems
     * @param parent
     */
    function generateIds(menuItems: MenuItem[], parent?: string) {
        const menuItemsCopy = [...menuItems];
        menuItemsCopy.forEach((menuItem, idx) => {
            menuItem.id = `${
                parent ? `${parent}-${idx + 1}` : `menu-item-${idx + 1}`
            }`;
            if (menuItem.menuItems && menuItem.menuItems.length) {
                menuItem.menuItems = generateIds(
                    menuItem.menuItems,
                    menuItem.id
                );
            }
        });
        return menuItemsCopy;
    }

    const [menuItems, setMenuItems] = useState<MenuItem[]>(
        generateIds(props.menuItems)
    );

    useEffect(() => {
        setMenuItems(generateIds(props.menuItems));
    }, [props.menuItems]);

    function toggle(id: string, subMenuItems?: MenuItem[]) {
        if (!menuItems.length) {
            return;
        }
        const menuItemsCopy =
            subMenuItems && subMenuItems.length ? subMenuItems : [...menuItems];
        menuItemsCopy.forEach((menuItem) => {
            if (id === menuItem.id) {
                menuItem.expanded = !menuItem.expanded;
            } else if (menuItem?.menuItems?.length) {
                toggle(id, menuItem.menuItems);
            }
        });
        if (!subMenuItems.length) {
            // only call for the root
            setMenuItems(menuItemsCopy);
        }
    }

    const expand = useCallback(
        (id: string, subMenuItems?: MenuItem[]) => {
            if (!menuItems.length) {
                return;
            }
            const menuItemsCopy =
                subMenuItems && subMenuItems.length
                    ? subMenuItems
                    : [...menuItems];
            menuItemsCopy.forEach((menuItem) => {
                if (id === menuItem.id) {
                    menuItem.expanded = true;
                } else if (menuItem?.menuItems?.length) {
                    expand(id, menuItem.menuItems);
                }
            });
            if (!subMenuItems.length) {
                // only call for the root
                setMenuItems(menuItemsCopy);
            }
        },
        [menuItems]
    );

    const contract = useCallback(
        (id?: string, subMenuItems?: MenuItem[]) => {
            if (!menuItems.length) {
                return;
            }
            setTimeout(() => {
                const menuItemsCopy =
                    subMenuItems && subMenuItems.length
                        ? subMenuItems
                        : [...menuItems];
                menuItemsCopy.forEach((menuItem) => {
                    if (!id || id === menuItem.id) {
                        console.log(`contract ${menuItem.id}`);
                        // menuItem.expanded = false;
                        if (menuItem?.menuItems?.length) {
                            contract(null, menuItem.menuItems);
                        }
                    }
                });
                if (!subMenuItems.length) {
                    // only call for the root
                    setMenuItems(menuItemsCopy);
                }
            }, 100);
        },
        [menuItems]
    );

    /**
     * Render the menu items.
     * @param menuItems
     */
    const renderMenu = useCallback(
        (menuItems: MenuItem[], hidden?: boolean, isRoot?: boolean) => {
            return (
                <ul className={hidden ? 'visuallyhidden' : ''}>
                    {menuItems.map((menuItem) => {
                        const hasPopup =
                            menuItem.menuItems && menuItem.menuItems.length > 0;
                        return (
                            <li
                                id={menuItem.id}
                                key={menuItem.id}
                                className={styles.hasItems}
                                onMouseEnter={
                                    isRoot
                                        ? expand.bind(null, menuItem.id)
                                        : null
                                }
                                onMouseLeave={
                                    isRoot
                                        ? contract.bind(null, menuItem.id)
                                        : null
                                }
                            >
                                <a
                                    href={menuItem.link}
                                    title={menuItem.id}
                                    aria-expanded={menuItem.expanded}
                                    aria-haspopup={hasPopup}
                                >
                                    {menuItem.label}
                                </a>
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
                                    />
                                )}
                                {menuItem.menuItems &&
                                    menuItem.menuItems.length &&
                                    renderMenu(
                                        menuItem.menuItems,
                                        !menuItem.expanded
                                    )}
                            </li>
                        );
                    })}
                </ul>
            );
        },
        [props.menuItems]
    );

    return (
        <nav
            className={`${styles.menu}${
                props.className ? ` ${props.className}` : ''
            }`}
            aria-label={props.label}
        >
            {renderMenu(menuItems, false, true)}
        </nav>
    );
}

function getCssClassNames() {
    return [styles.menu];
}

export { Menu, getCssClassNames };
