import React from 'react';
import * as styles from './Button.module.scss';

type Sizes = 's' | 'm';

interface Props {
    className?: string;
    /**
     * Button sizes. [default: s]
     */
    size?: Sizes;
    [x: string]: any;
}

/**
 * Render a default button.
 * @param props
 */
function Button(props: Props) {
    const sizeClass = props.size === 'm' ? styles['m'] : '';

    return (
        <button
            {...props}
            className={`${styles['fdButton']} ${sizeClass}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            {props.children}
        </button>
    );
}

function getCssClassNames(): string[] {
    return [styles['fdButton']];
}

export { Button, getCssClassNames };
