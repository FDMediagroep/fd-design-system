import React from 'react';
import styles from './ButtonCta.module.scss';

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
 * Render a call-to-action button which is more prominent than the default button.
 * @param props
 */
function ButtonCta(props: Props) {
    let sizeClass = props.size ?? '';

    return (
        <button
            {...props}
            className={`${styles.fdButtonCta} ${sizeClass}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            {props.children}
        </button>
    );
}

function getCssClassNames() {
    return [styles.fdButtonCta];
}

export { ButtonCta, getCssClassNames };
