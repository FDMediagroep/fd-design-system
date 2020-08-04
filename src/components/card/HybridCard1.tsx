import React from 'react';
import styles from './HybridCard1.module.scss';
import {
    Footer,
    getCssClassNames as getFooterCssClassNames,
} from './shared/Footer';
import { ReadingTime } from './shared/ReadingTime';

export type Variants = 'default' | 'variant-1';
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
    bookmarked?: boolean;
    url: string;
    imageUrl?: string;
    imageUrlS?: string;
    imageUrlM?: string;
    imageUrlL?: string;
    caption?: string;
    label: string;
    /**
     * Reading time in minutes.
     */
    readingTime?: number;
    time?: string;
    title: string;
    intro: string;
    onBookmark?: (e: React.MouseEvent<HTMLElement>) => void;
    variant?: Variants;
    theme?: Themes;
    [x: string]: any;
}

/**
 * Used on homepage.
 * This is called a hybrid card because on small screens its layout is similar to
 * Horizontal Card 1 and on wider screens similar to Vertical Card 1.
 * @param props
 */
function HybridCard1(props: Props) {
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
            data-variant={props.variant}
            className={`${styles.hybridCard1}${
                props.className ? ` ${props.className}` : ''
            }`}
            id={props.id}
        >
            <a href={props.url}>
                {!theme && props.imageUrl && (
                    <figure>
                        <picture>
                            {props.imageUrlS && (
                                <source
                                    media="(max-width:639px)"
                                    srcSet={`${props.imageUrlS}`}
                                />
                            )}
                            {props.imageUrlM && (
                                <source
                                    media="(max-width:860px)"
                                    srcSet={`${props.imageUrlM}`}
                                />
                            )}
                            {props.imageUrlL && (
                                <source
                                    media="(min-width:861px)"
                                    srcSet={`${props.imageUrlL}`}
                                />
                            )}
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

                <div className={styles.teaserText}>
                    <div className={styles.meta}>
                        <span className={styles.prefix}>{props.label}</span>
                    </div>

                    <div className={styles.textContainer}>
                        <h1>{props.title}</h1>

                        {props.intro && (
                            <p className={styles.intro}>{props.intro}</p>
                        )}

                        {props.readingTime && (
                            <ReadingTime
                                className={styles.readingTime}
                                readingTime={props.readingTime}
                            />
                        )}
                    </div>
                </div>
            </a>

            <Footer
                className={styles.footer}
                bookmarked={props.bookmarked}
                onBookmark={props.onBookmark}
                readingTime={props.readingTime}
            />
        </article>
    );
}

function getCssClassNames() {
    return [styles.hybridCard1, ...getFooterCssClassNames()];
}

export { HybridCard1, getCssClassNames };
