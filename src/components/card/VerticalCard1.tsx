import React from 'react';
import styles from './VerticalCard1.module.scss';
import {
    Footer,
    getCssClassNames as getFooterCssClassNames,
} from './shared/Footer';

interface Props {
    id: string;
    bookmarked?: boolean;
    url: string;
    imageUrl: string;
    imageUrlS?: string;
    imageUrlM?: string;
    imageUrlL?: string;
    caption?: string;
    label: string;
    isRead?: boolean;
    title: string;
    printTitle?: string;
    intro: string;
    onBookmark?: (e: React.MouseEvent<HTMLElement>) => void;
    [x: string]: any;
}

/**
 * Used on homepage.
 * @param props
 */
function VerticalCard1(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles.verticalCard1}${
                props.className ? ` ${props.className}` : ''
            }${props.isRead ? ` ${styles.isRead}` : ''}`}
            id={props.id}
            aria-label={props.title}
        >
            <a
                className="xs__p-0 xs__pt+4 xs__pr+4 xs__pl+4"
                href={props.url}
                aria-label={props.title}
            >
                <figure className="xs__mt-4 xs__mr-4 xs__mb+3 xs__ml-4">
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
                    <div className={`${styles.meta} xs__mb+2`}>
                        <span className={styles.prefix}>{props.label}</span>
                    </div>

                    <div>
                        <h1 className="heading serif s xs__m-0">
                            {props.title}
                        </h1>

                        <p
                            className={`${styles.intro} body-text sans s xs__m-0 xs__mt+2`}
                        >
                            {props.intro}
                        </p>
                    </div>
                </div>
            </a>

            <Footer
                className={styles.footer}
                bookmarked={props.bookmarked}
                onBookmark={props.onBookmark}
            />
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.verticalCard1, ...getFooterCssClassNames()];
}

export { VerticalCard1, getCssClassNames };
