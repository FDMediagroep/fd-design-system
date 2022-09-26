import React from 'react';
import styles from './HorizontalCard1.module.scss';

interface Props {
    id: string;
    url: string;
    imageUrl?: string;
    /**
     * Custom image component. When set this will replace the default img-element.
     */
    imageComponent?: JSX.Element;
    label: string;
    time: string;
    title: string;
    isRead?: boolean;
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
                props.className ? ` ${props.className}` : ''
            }${props.isRead ? ` ${styles.isRead}` : ''} xs__p+4`}
            id={props.id}
        >
            <a href={props.url} aria-label={props.title}>
                {(props.imageUrl || props.imageComponent) && (
                    <figure className="xs__m-0">
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
                    <div className={`${styles.figure} ${styles.empty} xs__m-0`}>
                        <img src="/assets/images/fd-logo.svg" alt="FD-Logo" />
                    </div>
                )}

                <div className={`${styles.teaserText} xs__pl+4 s__p+4`}>
                    <div
                        className={`${styles.meta} xs__m-0 xs__mb+2 body-text sans s`}
                    >
                        <span className={styles.prefix}>{props.label}</span>
                        <time>&nbsp;•&nbsp;{props.time}</time>
                    </div>

                    <div className={styles.textContainer}>
                        <h1 className="heading serif s xs__m-0">
                            {props.title}
                        </h1>
                    </div>
                </div>
            </a>
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.horizontalCard1];
}

export { HorizontalCard1, getCssClassNames };
