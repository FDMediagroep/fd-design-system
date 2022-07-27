import React from 'react';
import styles from './HorizontalCard2.module.scss';

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
 * Used on latest news, my news pages.
 * @param props
 */
function HorizontalCard2(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles.horizontalCard2}${
                props.className ? ` ${props.className}` : ''
            }${props.isRead ? ` ${styles.isRead}` : ''}`}
            id={props.id}
        >
            <a className="xs__p+4" href={props.url} aria-label={props.title}>
                <div className={styles.teaserText}>
                    <div className={`${styles.meta} xs__m-0 xs__mb+2`}>
                        <span className={styles.prefix}>{props.label}</span>
                        <time>{props.time}</time>
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
    return [styles.horizontalCard2];
}

export { HorizontalCard2, getCssClassNames };
