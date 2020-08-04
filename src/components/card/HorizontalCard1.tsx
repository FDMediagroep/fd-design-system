import React from 'react';
import styles from './HorizontalCard1.module.scss';
import { ReadingTime } from './shared/ReadingTime';
import { getCssClassNames as getReadingTimeCssClassNames } from './shared/ReadingTime';

interface Props {
    id: string;
    url: string;
    imageUrl: string;
    label: string;
    /**
     * Reading time in minutes.
     */
    readingTime?: number;
    time: string;
    title: string;
    isRead?: boolean;
    updated?: boolean;
    variant?: 'variant-1';
    [x: string]: any;
}

/**
 * Used on category, dossier pages.
 * @param props
 */
function HorizontalCard1(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles.horizontalCard1}${
                props.isRead ? ` ${styles.isRead}` : ''
            }${props.variant === 'variant-1' ? ` ${styles.longread}` : ''}`}
            id={props.id}
        >
            <a href={props.url}>
                <div
                    className={styles.figure}
                    style={{
                        backgroundImage: `url(${props.imageUrl})`,
                    }}
                ></div>

                <div className={styles.teaserText}>
                    <div className={styles.meta}>
                        {props.updated && (
                            <span className={styles.update}>Update</span>
                        )}
                        {!props.updated && (
                            <span className={styles.prefix}>{props.label}</span>
                        )}

                        <time>{props.time}</time>
                    </div>

                    <div className={styles.textContainer}>
                        <h1>{props.title}</h1>
                    </div>

                    {props.readingTime && (
                        <ReadingTime readingTime={props.readingTime} />
                    )}
                </div>
            </a>
        </article>
    );
}

function getCssClassNames() {
    return [styles.horizontalCard1, ...getReadingTimeCssClassNames()];
}

export { HorizontalCard1, getCssClassNames };
