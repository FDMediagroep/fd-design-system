import React from 'react';
import styles from './HybridCard4.module.scss';

interface Props {
    id: string;
    url: string;
    label: string;
    imageComponent?: JSX.Element;
    caption?: string;
    title: string;
    [x: string]: any;
}

/**
 * Used as Special hybrid card
 * @param props
 */
function HybridCard4(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles.hybridCard4}${
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
                    <div className={`${styles.figure} ${styles.empty} xs__m-0`}>
                        <img src="/assets/images/fd-logo.svg" alt="FD-Logo" />
                    </div>
                )}

                <div className={`${styles.teaserText} xs__pl+4 s__p+4 m__p+4`}>
                    {props.label && (
                        <span
                            className={`${styles.prefix} xs__mb+2  body-text sans s`}
                        >
                            {props.label}
                        </span>
                    )}
                    <h1 className="heading serif s xs__m-0">{props.title}</h1>
                </div>
            </a>
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.hybridCard4];
}

export { HybridCard4, getCssClassNames };
