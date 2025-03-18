import React from 'react';
import styles from './ArticleImage.module.scss';

interface Props {
    baseUrl?: string;
    fileName: string;
    caption: string;
    credit: string;
}

/**
 * Render an image in an article.
 * @param props
 */
function ArticleImage(props: Props) {
    return (
        <figure className={styles['articleImage']}>
            <picture>
                <source
                    media="(max-width:640px)"
                    srcSet={`${
                        props.baseUrl ??
                        'https://fd-external-development.imgix.net'
                    }/${props.fileName}?auto=format&q=45&cs=tinysrgb&w=640, ${
                        props.baseUrl ??
                        'https://fd-external-development.imgix.net'
                    }/${
                        props.fileName
                    }?auto=format&q=45&cs=tinysrgb&w=640&dpr=2 2x`}
                />
                <source
                    media="(max-width:860px)"
                    srcSet={`${
                        props.baseUrl ??
                        'https://fd-external-development.imgix.net'
                    }/${props.fileName}?auto=format&q=45&cs=tinysrgb&w=1280`}
                />
                <source
                    media="(min-width:861px)"
                    srcSet={`${
                        props.baseUrl ??
                        'https://fd-external-development.imgix.net'
                    }/${props.fileName}?auto=format&q=45&cs=tinysrgb&w=1280`}
                />
                <img
                    alt={props.caption}
                    src={`${
                        props.baseUrl ??
                        'https://fd-external-development.imgix.net'
                    }/${props.fileName}?auto=format&q=45&cs=tinysrgb&w=1280`}
                />
            </picture>
            <figcaption>
                {props.caption && (
                    <span className={styles['caption']}>{props.caption}</span>
                )}
                {props.credit && (
                    <span className={styles['credit']}>{props.credit}</span>
                )}
            </figcaption>
        </figure>
    );
}

function getCssClassNames(): string[] {
    return [styles['articleImage']];
}

export { ArticleImage, getCssClassNames };
