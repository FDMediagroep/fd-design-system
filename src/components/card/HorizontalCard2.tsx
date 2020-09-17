import React from 'react';
import styles from './HorizontalCard2.module.scss';
import { ReadingTime } from './shared/ReadingTime';

interface Props {
    id: string;
    url: string;
    label: string;
    /**
     * Reading time in minutes.
     */
    readingTime?: number;
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
            <a href={props.url}>
                <div className={styles.teaserText}>
                    <div className={styles.meta}>
                        <span className={styles.prefix}>{props.label}</span>

                        <time>{props.time}</time>
                    </div>

                    <div className={styles.textContainer}>
                        <h1>{props.title}</h1>
                        <p className={styles.intro}>{props.intro}</p>
                    </div>

                    {props.readingTime && (
                        <ReadingTime
                            className={styles.readingTime}
                            readingTime={props.readingTime}
                        />
                    )}
                </div>
            </a>
        </article>
    );
}

function getCssClassNames() {
    return [styles.horizontalCard2];
}

export { HorizontalCard2, getCssClassNames };
