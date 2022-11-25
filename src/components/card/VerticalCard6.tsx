import React from 'react';
import styles from './VerticalCard6.module.scss';

interface Props {
    style?: React.CSSProperties;
    className?: string;
    id: string;
    imageUrl?: string;
    url: string;
    imageComponent?: JSX.Element;
    caption?: string;
    title: string;
    label?: string;
    readingTime?: number;
}

/**
 * Used as breaking.
 * @param props
 */
function VerticalCard6(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles.verticalCard6}${
                props.className ? ` ${props.className}` : ''
            }`}
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
                        className={`${styles.figure} ${styles.empty} xs__m-0 s__mt-4 s__mb-0`}
                    >
                        <img src="/assets/images/fd-logo.svg" alt="FD-Logo" />
                    </div>
                )}

                <div
                    className={`${styles.teaserText} xs__p+4 m__p-0 xs__p+2 m__p+4`}
                >
                    {props.label && (
                        <div className={`xs__mb+2 body-text sans xs`}>
                            {props.readingTime && (
                                <span className={styles['reading-time']}>
                                    {props.readingTime} min leestijd •{' '}
                                </span>
                            )}
                            {props.label}
                        </div>
                    )}
                    {!props.label && props.readingTime && (
                        <div className={`xs__mb+2 body-text sans xs`}>
                            <span className={styles['reading-time']}>
                                {props.readingTime} min leestijd
                            </span>
                        </div>
                    )}
                    <h1 className="heading serif s xs__m-0">{props.title}</h1>
                </div>
            </a>
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.verticalCard6];
}

export { VerticalCard6, getCssClassNames };
