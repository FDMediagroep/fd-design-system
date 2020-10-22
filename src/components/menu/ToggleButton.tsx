import React from 'react';
import { MenuItem } from './Menu';

interface Props {
    menuItem: MenuItem;
    [x: string]: any;
}

function ToggleButton(props: Props) {
    const hasPopup = props.menuItem?.menuItems?.length > 0;
    const { menuItem, onClick, onMouseEnter } = props;

    return (
        <button
            onClick={onClick}
            onMouseEnter={onMouseEnter}
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
        </button>
    );
}

function getCssClassNames(): string[] {
    return [];
}

export { ToggleButton, getCssClassNames };
