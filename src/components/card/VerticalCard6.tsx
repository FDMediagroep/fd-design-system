import React from 'react';
import styles from './VerticalCard6.module.scss';

interface Props {
    id: string;
    url: string;
    imageComponent?: JSX.Element;
    caption?: string;
    title: string;
    [x: string]: any;
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
                    className={`${styles.teaserText}  xs__p+4 m__p-0 xs__p+2 m__p+4 `}
                >
                    {props.label && (
                        <div
                            className={`${styles.prefix} xs__mb+2 body-text sans s`}
                        >
                            {props.label}
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
