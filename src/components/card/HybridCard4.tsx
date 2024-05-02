import React from 'react';
import * as styles from './HybridCard4.module.scss';

interface Props {
    style?: React.CSSProperties;
    className?: string;
    id: string;
    url: string;
    imageUrl?: string;
    label: string;
    imageComponent?: JSX.Element;
    caption?: string;
    title: string;
    readingTime?: number;
}

/**
 * Used as Special hybrid card
 * @param props
 */
function HybridCard4(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles['hybridCard4']}${
                props.className ? ` ${props.className}` : ''
            } xs__p+4 s__p-0`}
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

                <div
                    className={`${styles['teaserText']} xs__pl+4 s__p+4 m__p+4`}
                >
                    {props.label && (
                        <span className={`xs__mb+2  body-text sans xs`}>
                            {props.readingTime && (
                                <span className={styles['reading-time']}>
                                    {props.readingTime} min leestijd •{' '}
                                </span>
                            )}
                            {props.label}
                        </span>
                    )}
                    {!props.label && props.readingTime && (
                        <span className={`xs__mb+2 body-text sans xs`}>
                            <span className={styles['reading-time']}>
                                {props.readingTime} min leestijd
                            </span>
                        </span>
                    )}

                    <h1 className="heading serif xs xs__m-0">{props.title}</h1>
                </div>
            </a>
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles['hybridCard4']];
}

export { HybridCard4, getCssClassNames };
