import React from 'react';
import styles from './HorizontalCard2.module.scss';

interface Props {
    style?: React.CSSProperties;
    className?: string;
    id: string;
    url: string;
    label: string;
    time: string;
    title: string;
    intro: string;
    isRead?: boolean;
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
                <div className={`${styles.teaserText} xs__pl+4 s__p+4`}>
                    <div
                        className={`${styles.meta} xs__m-0 xs__mb+2 body-text sans xs`}
                    >
                        <time>{props.time}</time>

                        {props.label && (
                            <>
                                <span className={styles.dot}>•</span>
                                <span className={styles.prefix}>
                                    {props.label}
                                </span>
                            </>
                        )}
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
