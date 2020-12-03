import React from 'react';
import styles from './HorizontalCard4.module.scss';

interface Props {
    id: string;
    url: string;
    imageUrl?: string;
    /**
     * Custom image component. When set this will replace the default img-element.
     */
    imageComponent?: JSX.Element;
    time?: string;
    title: string;
    isRead?: boolean;
    [x: string]: any;
}

/**
 * Used on category, dossier pages.
 * @param props
 */
function HorizontalCard4(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles.horizontalCard4}${
                props.isRead ? ` ${styles.isRead}` : ''
            }`}
            id={props.id}
        >
            <a href={props.url} aria-label={props.title}>
                {(props.imageUrl || props.imageComponent) && (
                    <figure>
                        <picture>
                            {props.imageComponent ?? (
                                <img
                                    src={`${props.imageUrl}`}
                                    alt={props.caption ?? props.title}
                                />
                            )}
                        </picture>
                        <figcaption>{props.caption}</figcaption>
                    </figure>
                )}

                {!props.imageUrl && !props.imageComponent && (
                    <div className={`${styles.figure} ${styles.empty}`}>
                        <img src="/assets/images/fd-logo.svg" />
                    </div>
                )}

                <div className={styles.teaserText}>
                    <div className={styles.meta}>
                        <span className={styles.breaking}>Breaking</span>
                    </div>

                    <div className={styles.textContainer}>
                        <h1 className="heading serif m">{props.title}</h1>
                    </div>
                </div>
            </a>
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.horizontalCard4];
}

export { HorizontalCard4, getCssClassNames };
