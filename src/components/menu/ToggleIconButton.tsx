import React from 'react';
import {
    ChevronDownThinIcon,
    ChevronUpThinIcon,
} from '../../design-tokens/icons';
import { MenuItem } from './Menu';

interface Props {
    menuItem: MenuItem;
    [x: string]: any;
}

function ToggleIconButton(props: Props) {
    const hasPopup = props.menuItem?.menuItems?.length > 0;
    const { menuItem, onClick } = props;

    return (
        <button
            onClick={onClick}
            className={props.className}
            dangerouslySetInnerHTML={{
                __html: menuItem.expanded
                    ? (ChevronUpThinIcon as any)
                    : (ChevronDownThinIcon as any),
            }}
            aria-label={menuItem.expanded ? 'close sub-menu' : 'open sub-menu'}
            aria-expanded={menuItem.expanded}
            aria-haspopup={hasPopup}
        />
    );
}

function getCssClassNames(): string[] {
    return [];
}

export { ToggleIconButton, getCssClassNames };
