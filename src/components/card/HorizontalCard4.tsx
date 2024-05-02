import React from 'react';
import * as styles from './HorizontalCard4.module.scss';

interface Props {
    style?: React.CSSProperties;
    className?: string;
    id: string;
    /**
     * Custom image component. When set this will replace the default img-element.
     */
    imageComponent?: JSX.Element;
    url: string;
    imageUrl?: string;
    caption?: string;
    label: string;
    time: string;
    title: string;
    isRead?: boolean;
}

/**
 * Used in the search results. Note that the difference with the Horizontal Card 2 is that it supports `printTitle`.
 * @param props
 */
function HorizontalCard4(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles['fdHorizontalCard4']}${
                props.className ? ` ${props.className}` : ''
            }${props.isRead ? ` ${styles['isRead']}` : ''} xs__p+4`}
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
                    <div
                        className={`${styles['figure']} ${styles['empty']} xs__m-0`}
                    >
                        <img src="/assets/images/fd-logo.svg" alt="FD-Logo" />
                    </div>
                )}

                <div className={`${styles['teaserText']} xs__pl+4 s__p+4`}>
                    <div
                        className={`${styles['meta']} xs__m-0 xs__mb+2 body-text sans xs`}
                    >
                        <time>{props.time}</time>

                        {props.label && (
                            <>
                                <span className={styles['dot']}>•</span>
                                <span className={styles['prefix']}>
                                    {props.label}
                                </span>
                            </>
                        )}
                    </div>

                    <div className={styles['textContainer']}>
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
    return [styles['fdHorizontalCard4']];
}

export { HorizontalCard4, getCssClassNames };
