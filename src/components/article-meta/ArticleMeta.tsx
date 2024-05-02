import React from 'react';
import * as styles from './ArticleMeta.module.scss';

type Author = {
    id: number;
    fullName: string;
    directory?: string;
};

interface Props {
    authors: Author[];
    date?: string;
}

/**
 * Render article meta information like authors and publish date.
 * @param props
 */
function ArticleMeta(props: Props) {
    return (
        <section className={styles['meta']}>
            <span>
                {props.authors.map((author) => {
                    if (author?.directory) {
                        return (
                            <a
                                key={author.fullName}
                                href={`/auteur/${author.directory}`}
                                className={styles['author']}
                            >
                                {author.fullName}
                            </a>
                        );
                    } else {
                        return (
                            <span
                                key={author.fullName}
                                className={styles['author']}
                            >
                                {author.fullName}
                            </span>
                        );
                    }
                })}
            </span>
            {props.date && <span>{props.date}</span>}
        </section>
    );
}

function getCssClassNames(): string[] {
    return [styles['meta']];
}

export { ArticleMeta, getCssClassNames };
