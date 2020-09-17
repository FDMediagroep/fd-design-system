import React from 'react';
import styles from './HorizontalCard1.module.scss';
import { ReadingTime } from './shared/ReadingTime';
import { getCssClassNames as getReadingTimeCssClassNames } from './shared/ReadingTime';

export type Themes =
    | 'theme1'
    | 'theme-1'
    | 'theme2'
    | 'theme-2'
    | 'theme3'
    | 'theme-3'
    | 'theme4'
    | 'theme-4'
    | 'theme5'
    | 'theme-5'
    | 'theme6'
    | 'theme-6'
    | 'theme7'
    | 'theme-7'
    | 'theme8'
    | 'theme-8';

interface Props {
    id: string;
    url: string;
    imageUrl?: string;
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
    theme?: Themes;
    [x: string]: any;
}

/**
 * Used on category, dossier pages.
 * @param props
 */
function HorizontalCard1(props: Props) {
    let theme: string;
    switch (props.theme) {
        case 'theme1':
        case 'theme-1':
            theme = styles.theme1;
            break;
        case 'theme2':
        case 'theme-2':
            theme = styles.theme2;
            break;
        case 'theme3':
        case 'theme-3':
            theme = styles.theme3;
            break;
        case 'theme4':
        case 'theme-4':
            theme = styles.theme4;
            break;
        case 'theme5':
        case 'theme-5':
            theme = styles.theme5;
            break;
        case 'theme6':
        case 'theme-6':
            theme = styles.theme6;
            break;
        case 'theme7':
        case 'theme-7':
            theme = styles.theme7;
            break;
        case 'theme8':
        case 'theme-8':
            theme = styles.theme8;
            break;
    }
    return (
        <article
            style={props.style}
            className={`${styles.horizontalCard1}${
                props.isRead ? ` ${styles.isRead}` : ''
            }${props.variant === 'variant-1' ? ` ${styles.longread}` : ''}`}
            id={props.id}
        >
            <a href={props.url}>
                {!theme && props.imageUrl && (
                    <figure>
                        <picture>
                            <img
                                src={`${props.imageUrl}`}
                                alt={props.caption ?? props.title}
                            />
                        </picture>
                        <figcaption>{props.caption}</figcaption>
                    </figure>
                )}

                {theme && (
                    <figure className={`${styles.themed} ${theme}`}>
                        <picture>
                            <img
                                src={`${props.imageUrl}`}
                                alt={props.caption}
                            />
                        </picture>
                        <figcaption>{props.caption}</figcaption>
                    </figure>
                )}

                {!props.imageUrl && (
                    <div className={`${styles.figure} ${styles.empty}`}>
                        <img src="/assets/images/fd-logo.svg" />
                    </div>
                )}

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
    return [styles.horizontalCard1, ...getReadingTimeCssClassNames()];
}

export { HorizontalCard1, getCssClassNames };
