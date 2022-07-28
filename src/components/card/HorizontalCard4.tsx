import React from 'react';
import styles from './HorizontalCard4.module.scss';

interface Props {
    id: string;
    /**
     * Custom image component. When set this will replace the default img-element.
     */
    imageComponent?: JSX.Element;
    url: string;
    label: string;
    time: string;
    title: string;
    isRead?: boolean;
    [x: string]: any;
}

/**
 * Used in the search results. Note that the difference with the Horizontal Card 2 is that it supports `printTitle`.
 * @param props
 */
function HorizontalCard4(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles.fdHorizontalCard4}${
                props.className ? ` ${props.className}` : ''
            }${props.isRead ? ` ${styles.isRead}` : ''} xs__p+4`}
            id={props.id}
        >
            <a href={props.url} aria-label={props.title}>
                {(props.imageUrl || props.imageComponent) && (
                    <figure className="xs__m-0">
                        {props.imageComponent ?? (
                            <img
                                src={`${props.imageUrl}`}
                                alt={props.caption ?? props.title}
                            />
                        )}
                        <figcaption>{props.caption}</figcaption>
                    </figure>
                )}

                {!props.imageUrl && !props.imageComponent && (
                    <div className={`${styles.figure} ${styles.empty} xs__m-0`}>
                        <img src="/assets/images/fd-logo.svg" alt="FD-Logo" />
                    </div>
                )}

                <div className={`${styles.teaserText} xs__pl+4 s__p+4 s__pt-0`}>
                    <div className={`${styles.meta} xs__m-0 xs__mb+2`}>
                        <span className={`${styles.prefix}  xs__p+1 s__p+2`}>
                            {props.label}
                        </span>
                        <time>{props.time}</time>
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
    return [styles.fdHorizontalCard4];
}

export { HorizontalCard4, getCssClassNames };
