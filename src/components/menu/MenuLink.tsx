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
        <Link
            href={menuItem.href}
            as={menuItem.as}
            prefetch={menuItem.prefetch === true}
        >
            <a
                {...rest}
                rel={menuItem.rel}
                {...(menuItem.target
                    ? {
                          target: menuItem.target,
                          rel: menuItem.rel ?? 'noopener noreferrer nofollow',
                      }
                    : {})}
                title={menuItem.text ?? menuItem.ariaLabel}
                {...(hasPopup
                    ? {
                          'aria-expanded': !!menuItem.expanded,
                      }
                    : {})}
                aria-haspopup={hasPopup}
                aria-label={menuItem.ariaLabel ?? menuItem.text}
                className={props.className}
            >
                {menuItem.component ?? menuItem.text}
            </a>
        </Link>
    );
}

function getCssClassNames(): string[] {
    return [];
}

export { MenuLink, getCssClassNames };
