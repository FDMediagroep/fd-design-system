import React from 'react';
import * as styles from './HybridCard2.module.scss';

export type Variants = 'default' | 'variant-1';

interface Props {
    style?: React.CSSProperties;
    className?: string;
    id: string;
    url: string;
    caption?: string;
    imageUrl?: string;
    imageUrlS?: string;
    imageUrlM?: string;
    imageUrlL?: string;
    label?: string;
    isRead?: boolean;
    readingTime?: number;
    title: string;
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
            className={`${styles['hybridCard2']}${
                props.className ? ` ${props.className}` : ''
            }${props.isRead ? ` ${styles['isRead']}` : ''}`}
            id={props.id}
        >
            <a className="xs__p+4" href={props.url} aria-label={props.title}>
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
                    className={`${styles['teaserText']} xs__pl+4 s__pr-0 s__pb-0 s__pl-0`}
                >
                    {props.label && (
                        <div
                            className={`${styles['meta']} xs__mb+2 body-text sans xs`}
                        >
                            <span className={styles['prefix']}>
                                {props.readingTime && (
                                    <span className={styles['reading-time']}>
                                        {props.readingTime} min leestijd •{' '}
                                    </span>
                                )}
                                {props.label}
                            </span>
                        </div>
                    )}
                    {!props.label && props.readingTime && (
                        <div
                            className={`${styles['meta']} xs__mb+2 body-text sans xs`}
                        >
                            <span className={styles['prefix']}>
                                <span className={styles['reading-time']}>
                                    {props.readingTime} min leestijd
                                </span>
                            </span>
                        </div>
                    )}

                    <div className={styles['textContainer']}>
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
    return [styles['hybridCard2']];
}

export { HybridCard2, getCssClassNames };
