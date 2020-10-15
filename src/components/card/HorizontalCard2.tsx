import React from 'react';
import styles from './HorizontalCard2.module.scss';

interface Props {
    id: string;
    url: string;
    label: string;
    time: string;
    title: string;
    intro: string;
    isRead?: boolean;
    [x: string]: any;
}

/**
 * Used on latest news, my news pages.
 * @param props
 */
function HorizontalCard2(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles.horizontalCard2}${
                props.isRead ? ` ${styles.isRead}` : ''
            }`}
            id={props.id}
        >
            <a href={props.url} aria-label={props.title}>
                <div className={styles.teaserText}>
                    <div className={styles.meta}>
                        <span className={styles.prefix}>{props.label}</span>

                        <time>{props.time}</time>
                    </div>

                    <div className={styles.textContainer}>
                        <h1>{props.title}</h1>
                        <p className={styles.intro}>{props.intro}</p>
                    </div>
                </div>
            </a>
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.horizontalCard2];
}

export { HorizontalCard2, getCssClassNames };
