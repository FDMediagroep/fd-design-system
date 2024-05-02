import React from 'react';
import * as styles from './VerticalCard2.module.scss';

interface Props {
    style?: React.CSSProperties;
    className?: string;
    id: string;
    url: string;
    imageUrl: string;
    imageUrlS?: string;
    imageUrlM?: string;
    imageUrlL?: string;
    caption?: string;
    label?: string;
    title: string;
}

/**
 * Used on Interests page.
 * @param props
 */
function VerticalCard2(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles['verticalCard2']}${
                props.className ? ` ${props.className}` : ''
            }`}
            id={props.id}
            aria-label={props.title}
        >
            <a href={props.url} aria-label={props.title}>
                <figure>
                    <picture>
                        {props.imageUrlS && (
                            <source
                                media="(max-width:639px)"
                                srcSet={`${props.imageUrlS}`}
                            />
                        )}
                        {props.imageUrlM && (
                            <source
                                media="(max-width:860px)"
                                srcSet={`${props.imageUrlM}`}
                            />
                        )}
                        {props.imageUrlL && (
                            <source
                                media="(min-width:861px)"
                                srcSet={`${props.imageUrlL}`}
                            />
                        )}
                        <img
                            src={`${props.imageUrl}`}
                            alt={props.caption ?? props.title}
                        />
                    </picture>
                    <div className={styles['gradient-overlay']} />
                </figure>

                <h2 className="heading sans xs regular xs__m+4">
                    {props.title}
                </h2>
                {props.label ? (
                    <span
                        className={`${styles['unseen-count']} xs__pt+3 xs__pb+3 xs__pr+4 xs__pl+4 body-text sans xs`}
                    >
                        {props.label}
                    </span>
                ) : null}
            </a>
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles['verticalCard2']];
}

export { VerticalCard2, getCssClassNames };
