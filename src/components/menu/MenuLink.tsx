import Link from 'next/link';
import React from 'react';
import { MenuItem } from './Menu';

interface Props {
    menuItem: MenuItem;
    [x: string]: any;
}

function MenuLink(props: Props) {
    const hasPopup = props.menuItem?.menuItems?.length > 0;
    const { menuItem, ...rest } = props;

    return (
        <Link href={menuItem.href} as={menuItem.as}>
            <a
                {...rest}
                rel={menuItem.rel}
                {...(menuItem.target
                    ? {
                          target: menuItem.target,
                          rel: menuItem.rel ?? 'noopener noreferrer nofollow',
                      }
                    : {})}
                title={menuItem.linkText ?? menuItem.ariaLabel}
                {...(hasPopup
                    ? {
                          'aria-expanded': !!menuItem.expanded,
                      }
                    : {})}
                aria-haspopup={hasPopup}
                aria-label={menuItem.ariaLabel ?? menuItem.linkText}
                className={props.className}
            >
                {menuItem.component ?? menuItem.linkText}
            </a>
        </Link>
    );
}

function getCssClassNames(): string[] {
    return [];
}

export { MenuLink, getCssClassNames };
