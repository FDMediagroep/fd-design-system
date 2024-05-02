import React, { CSSProperties } from 'react';
import * as styles from './HorizontalCard3.module.scss';

interface Props {
    id: string;
    url: string;
    imageUrl?: string;
    caption?: string;
    className?: string;
    /**
     * Custom image component. When set this will replace the default img-element.
     */
    imageComponent?: JSX.Element;
    title: string;
    isRead?: boolean;
}

/**
 * Used on category, dossier pages.
 * @param props
 */
function HorizontalCard3(props: Props) {
    return (
        <article
            className={`${styles['horizontalCard3']}${
                props.className ? ` ${props.className}` : ''
            }${props.isRead ? ` ${styles['isRead']}` : ''} xs__p+4`}
            id={props.id}
        >
            <a href={props.url} aria-label={props.title}>
                {(props.imageUrl || props.imageComponent) && (
                    <figure className="xs__m-0">
                        <picture>
                            {props.imageComponent ?? (
                                <img
                                    src={`${props.imageUrl}`}
                                    alt={props.caption ?? props.title}
                                />
                            )}
                        </picture>
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

                <div className={`${styles['teaserText']} xs__pl+4 s__p+4`}>
                    <h1 className="heading serif xs xs__m-0">{props.title}</h1>
                </div>
            </a>
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles['horizontalCard3']];
}

export { HorizontalCard3, getCssClassNames };
