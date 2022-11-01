import React from 'react';
import styles from './LinkBlock.module.scss';
import { ChevronRightIcon } from '../../design-tokens/icons';

interface Props {
    title: string;
    description: string;
    url: string;
    position?: 'right';
}

/**
 * Render a Link block in an article.
 * @deprecated
 * @param props
 */
function LinkBlock(props: Props) {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.fdLinkBlock} ${
                props.position === 'right' ? styles.right : ''
            }`}
            href={props.url}
        >
            <p>{props.title}</p>
            <h2>{props.description}</h2>
            <span className={styles.icon}>
                <ChevronRightIcon />
            </span>
        </a>
    );
}

function getCssClassNames(): string[] {
    return [styles.fdLinkBlock];
}

export { LinkBlock, getCssClassNames };
