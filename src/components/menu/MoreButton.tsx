import React from 'react';
import { MenuItem } from './Menu';

interface Props {
    menuItem: MenuItem;
    [x: string]: any;
}

function MoreButton(props: Props) {
    const hasPopup = props.menuItem?.menuItems?.length > 0;
    const { menuItem, ...rest } = props;

    return (
        <button
            {...rest}
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
        </button>
    );
}

function getCssClassNames(): string[] {
    return [];
}

export { MoreButton, getCssClassNames };
