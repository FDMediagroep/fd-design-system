import React, { useEffect, useState } from 'react';
import { Dropdown } from '../button/Dropdown';
import styles from './VerticalCard5.module.scss';

interface Props {
    id: string;
    url: string;
    dropdownLabel?: string;
    imageUrl: string;
    imageUrlS?: string;
    imageUrlM?: string;
    imageUrlL?: string;
    caption?: string;
    label: string;
    title: string;
    intro: string;
    onBookmark?: (e: React.MouseEvent<HTMLElement>) => void;
    [x: string]: any;
}

/**
 * Used on podcasts overview page.
 * @param props
 */
function VerticalCard5(props: Props) {
    return (
        <article
            style={props.style}
            data-variant={props.variant}
            className={`xs__p+4 l__p+6 ${styles.verticalCard5}${
                props.className ? ` ${props.className}` : ''
            }${props.isRead ? ` ${styles.isRead}` : ''}`}
            id={props.id}
        >
            <div className={styles.cardContent}>
                <div className="xs__m-0-auto xs__mb+4 l__mb+6">
                    <figure className="xs__m-0">
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
                </div>
                <div className={styles.textContent}>
                    <div className={styles.teaserText}>
                        <h1 className="heading serif s xs__m-0">
                            {props.title}
                        </h1>

                        {styles.intro ? (
                            <p
                                className={`${styles.intro} body-text sans s xs__mt+2 l__mt+4`}
                            >
                                {props.intro}
                            </p>
                        ) : null}
                    </div>
                </div>
            </div>
            <Dropdown size="m">{props.dropdownLabel || 'Luister via'}</Dropdown>
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.verticalCard5];
}

export { VerticalCard5, getCssClassNames };
