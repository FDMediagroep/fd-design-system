import React from 'react';
import styles from './VerticalCard2.module.scss';
import { ReadingTime } from './shared/ReadingTime';

interface Props {
    id: string;
    url: string;
    imageUrl: string;
    imageUrlS?: string;
    imageUrlM?: string;
    imageUrlL?: string;
    caption?: string;
    /**
     * Reading time in minutes.
     */
    readingTime?: number;
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
            }`}
            id={props.id}
        >
            <a href={props.url}>
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
                        <h1>{props.title}</h1>

                        <p className={styles.intro}>{props.intro}</p>

                        {props.readingTime && (
                            <ReadingTime readingTime={props.readingTime} />
                        )}
                    </div>
                </div>
            </a>
        </article>
    );
}

function getCssClassNames() {
    return [styles.verticalCard2];
}

export { VerticalCard2, getCssClassNames };
