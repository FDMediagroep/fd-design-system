import React from 'react';
import styles from './HybridCard2.module.scss';

export type Variants = 'default' | 'variant-1';

interface Props {
    id: string;
    url: string;
    imageUrl?: string;
    imageUrlS?: string;
    imageUrlM?: string;
    imageUrlL?: string;
    caption?: string;
    label: string;
    isRead?: boolean;
    title: string;
    variant?: Variants;
    [x: string]: any;
}

/**
 * Used on homepage.
 * This is called a hybrid card because on small screens its layout is similar to
 * Horizontal Card 2 and on wider screens similar to Vertical Card 1.
 * @param props
 */
function HybridCard2(props: Props) {
    return (
        <article
            style={props.style}
            data-variant={props.variant}
            className={`${styles.hybridCard2}${
                props.className ? ` ${props.className}` : ''
            }${props.isRead ? ` ${styles.isRead}` : ''} xs__p+4`}
            id={props.id}
        >
            <a
                className="s__p-0 s__p+4"
                href={props.url}
                aria-label={props.title}
            >
                {props.imageUrl && (
                    <figure className="xs__m-0 s__mt-4 s__mr-4 s__mb+3 s__ml-4">
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

                <div
                    className={`${styles.teaserText} xs__pl+4 s__pr-0 s__pb-0 s__pl-0`}
                >
                    <div className={`${styles.meta} xs__mb+2`}>
                        <span className={styles.prefix}>{props.label}</span>
                    </div>

                    <div className={styles.textContainer}>
                        <h1 className="heading serif xs xs__m-0">
                            {props.title}
                        </h1>
                    </div>
                </div>
            </a>
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.hybridCard2];
}

export { HybridCard2, getCssClassNames };
