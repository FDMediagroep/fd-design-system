import React from 'react';
import styles from './Button.module.scss';

type Sizes = 's' | 'm' | 'l';

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
    let sizeClass = '';

    switch (props.size) {
        case 'm':
            sizeClass = styles.m;
            break;
        case 'l':
            sizeClass = styles.l;
            break;
        default:
            sizeClass = '';
    }

    return (
        <button
            {...props}
            className={`${styles.fdButton} ${sizeClass}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            {props.children}
        </button>
    );
}

function getCssClassNames() {
    return [styles.fdButton];
}

export { Button, getCssClassNames };
