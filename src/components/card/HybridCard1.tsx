import React from 'react';
import styles from './HybridCard1.module.scss';
import {
    Footer,
    getCssClassNames as getFooterCssClassNames,
} from './shared/Footer';

export type Variants = 'default' | 'variant-1';

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
    time?: string;
    isRead?: boolean;
    title: string;
    intro: string;
    onBookmark?: (e: React.MouseEvent<HTMLElement>) => void;
    variant?: Variants;
    [x: string]: any;
}

/**
 * Used on homepage.
 * This is called a hybrid card because on small screens its layout is similar to
 * Horizontal Card 1 and on wider screens similar to Vertical Card 1.
 * @param props
 */
function HybridCard1(props: Props) {
    return (
        <article
            style={props.style}
            data-variant={props.variant}
            className={`${styles.hybridCard1}${
                props.className ? ` ${props.className}` : ''
            }${props.isRead ? ` ${styles.isRead}` : ''}`}
            id={props.id}
        >
            <a href={props.url} aria-label={props.title}>
                {props.imageUrl && (
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

                <div className={styles.teaserText}>
                    <div className={styles.meta}>
                        <span className={styles.prefix}>{props.label}</span>
                    </div>

                    <div className={styles.textContainer}>
                        <h1 className="heading serif xs">{props.title}</h1>

                        {props.intro && (
                            <p className={`${styles.intro} body-text sans s`}>
                                {props.intro}
                            </p>
                        )}
                    </div>
                </div>
            </a>

            <Footer
                className={styles.footer}
                bookmarked={props.bookmarked}
                onBookmark={props.onBookmark}
            />
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.hybridCard1, ...getFooterCssClassNames()];
}

export { HybridCard1, getCssClassNames };
