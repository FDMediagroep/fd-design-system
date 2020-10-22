import Link from 'next/link';
import React from 'react';
import { MenuItem } from './Menu';

interface Props {
    menuItem: MenuItem;
    [x: string]: any;
}

function MenuLink(props: Props) {
    const hasPopup = props.menuItem?.menuItems?.length > 0;
    const { menuItem, onClick, onMouseEnter } = props;

    return (
        <a
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            href={menuItem.href}
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
    );
}

function getCssClassNames(): string[] {
    return [];
}

export { MenuLink, getCssClassNames };
