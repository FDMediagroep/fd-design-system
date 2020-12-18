import React from 'react';
import styles from './VerticalCard2.module.scss';

interface Props {
    id: string;
    url: string;
    imageUrl: string;
    imageUrlS?: string;
    imageUrlM?: string;
    imageUrlL?: string;
    caption?: string;
    isRead?: boolean;
    time: string;
    title: string;
    printTitle?: string;
    intro: string;
    [x: string]: any;
}

/**
 * Used on dossier overview page.
 * @param props
 */
function VerticalCard2(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles.verticalCard2}${
                props.className ? ` ${props.className}` : ''
            }${props.isRead ? ` ${styles.isRead}` : ''}`}
            id={props.id}
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
                    <figcaption>{props.caption}</figcaption>
                </figure>

                <div className={styles.teaserText}>
                    <div>
                        <h1 className="heading serif s">{props.title}</h1>

                        <p className={`${styles.intro} body-text sans s`}>
                            {props.intro}
                        </p>
                    </div>
                </div>
            </a>
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.verticalCard2];
}

export { VerticalCard2, getCssClassNames };
