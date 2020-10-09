import React from 'react';
import styles from './ButtonGhost.module.scss';

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
function ButtonGhost(props: Props) {
    const sizeClass = props.size === 'm' ? styles.m : '';

    return (
        <button
            {...props}
            className={`${styles.fdButtonGhost} ${sizeClass}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            {props.children}
        </button>
    );
}

function getCssClassNames(): string[] {
    return [styles.fdButtonGhost];
}

export { ButtonGhost, getCssClassNames };
