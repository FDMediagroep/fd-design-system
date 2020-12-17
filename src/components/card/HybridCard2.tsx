import React from 'react';
import styles from './HybridCard2.module.scss';
import {
    Footer,
    getCssClassNames as getFooterCssClassNames,
} from './shared/Footer';

export type Variants = 'default' | 'variant-1';

interface Props {
    id: string;
    bookmarked?: boolean;
    url: string;
    label: string;
    time?: string;
    isRead?: boolean;
    title: string;
    intro: string;
    onBookmark?: (e: React.MouseEvent<HTMLElement>) => void;
    variant?: Variants;
    [x: string]: any;
}

/**
 * Used on homepage. This version has no image.
 * This is called a hybrid card because on small screens its layout is similar to
 * Horizontal Card 1 and on wider screens similar to Vertical Card 1.
 * @param props
 */
function HybridCard2(props: Props) {
    return (
        <article
            style={props.style}
            data-variant={props.variant}
            className={`${styles.hybridCard2}${
                props.className ? ` ${props.className}` : ''
            }${props.isRead ? ` ${styles.isRead}` : ''}`}
            id={props.id}
        >
            <a href={props.url} aria-label={props.title}>
                <div className={styles.teaserText}>
                    <div className={styles.meta}>
                        <span className={styles.prefix}>{props.label}</span>
                    </div>

                    <div className={styles.textContainer}>
                        <h1 className="heading serif s">{props.title}</h1>

                        {props.intro && (
                            <p className={`${styles.intro} body-text sans xs`}>
                                {props.intro}
                            </p>
                        )}
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
    return [styles.hybridCard2, ...getFooterCssClassNames()];
}

export { HybridCard2, getCssClassNames };
