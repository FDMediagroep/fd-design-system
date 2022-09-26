import React from 'react';
import styles from './HorizontalCard3.module.scss';

interface Props {
    id: string;
    url: string;
    label: string;
    time: string;
    title: string;
    intro: string;
    isRead?: boolean;
    [x: string]: any;
}

/**
 * Used in the search results. Note that the difference with the Horizontal Card 2 is that it supports `printTitle`.
 * @param props
 */
function HorizontalCard3(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles.horizontalCard3}${
                props.className ? ` ${props.className}` : ''
            }${props.isRead ? ` ${styles.isRead}` : ''}`}
            id={props.id}
        >
            <a className="xs__p+4" href={props.url} aria-label={props.title}>
                <div className={styles.teaserText}>
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
                        <p
                            className={`${styles.intro} body-text sans s xs__m-0 xs__mt+1`}
                        >
                            {props.intro}
                        </p>
                    </div>
                </div>
            </a>
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.horizontalCard3];
}

export { HorizontalCard3, getCssClassNames };
