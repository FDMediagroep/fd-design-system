import React from 'react';
import styles from './HybridCard4.module.scss';

interface Props {
    id: string;
    url: string;
    imageUrl?: string;
    imageUrlS?: string;
    imageUrlM?: string;
    imageUrlL?: string;
    caption?: string;
    time?: string;
    title: string;
    intro?: string;
    isRead?: boolean;
    [x: string]: any;
}

/**
 * Used as breaking.
 * @param props
 */
function HybridCard4(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles.hybridCard4}${
                props.className ? ` ${props.className}` : ''
            }${props.isRead ? ` ${styles.isRead}` : ''} xs__p-0`}
            id={props.id}
        >
            <a href={props.url} aria-label={props.title}>
                {props.imageUrl && (
                    <figure className="xs__m-0">
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

                <div className={`${styles.teaserText} xs__p+4 s__pr+6 s__pl+6`}>
                    <div className={`${styles.meta} xs__m-0 xs__mb+2`}>
                        <span className={styles.breaking}>Breaking</span>

                        {props.time && <time>{props.time}</time>}
                    </div>

                    <div className={styles.textContainer}>
                        <h1 className="heading serif m xs__m-0">
                            {props.title}
                        </h1>

                        {props.intro && (
                            <p
                                className={`${styles.intro} body-text sans s xs__m-0 xs__mt+2`}
                            >
                                {props.intro}
                            </p>
                        )}
                    </div>
                </div>
            </a>
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.hybridCard4];
}

export { HybridCard4, getCssClassNames };
