import React from 'react';
import styles from './ButtonFollow.module.scss';

interface Props {
    className?: string;
    addUrl?: string;
    removeUrl?: string;
    selected?: boolean;
    tag: string;
    addText?: string;
    removeText?: string;
    [x: string]: any;
}

/**
 * Render a follow button which is basically a toggle-button.
 * @param props
 */
function ButtonFollow(props: Props) {
    return (
        <>
            <button
                {...props}
                className={`${styles.fdFollowButton}${
                    props.className ? ` ${props.className}` : ''
                }`}
                data-tag={props.tag}
                data-selected={props.selected}
                data-addurl={props.addUrl ?? '/add-interest'}
                data-deleteurl={props.removeUrl ?? '/delete-interest'}
            >
                <span className={styles.cross} />{' '}
                <span className={`${styles.buttonText} ${styles.defaultText}`}>
                    {props.addText ?? 'Volg'}
                </span>
                <span className={`${styles.buttonText} ${styles.activeText}`}>
                    {props.removeText ?? 'Ontvolg'}
                </span>
            </button>
        </>
    );
}

function getCssClassNames(): string[] {
    return [styles.fdFollowButton];
}

export { ButtonFollow, getCssClassNames };
