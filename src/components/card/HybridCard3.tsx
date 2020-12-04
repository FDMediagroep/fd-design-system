import React from 'react';
import styles from './HybridCard3.module.scss';

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
function HybridCard3(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles.horizontalCard4}${
                props.isRead ? ` ${styles.isRead}` : ''
            }`}
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
                        <span className={styles.breaking}>Breaking</span>

                        {props.time && <time>{props.time}</time>}
                    </div>

                    <div className={styles.textContainer}>
                        <h1 className="heading serif m">{props.title}</h1>

                        {props.intro && (
                            <p className={`${styles.intro} body-text sans s`}>
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
    return [styles.horizontalCard4];
}

export { HybridCard3, getCssClassNames };
