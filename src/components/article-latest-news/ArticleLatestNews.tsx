import React from 'react';
import styles from './ArticleLatestNews.module.scss';
import { ChevronRightIcon } from '../../design-tokens/icons';

interface NewsItem {
    uuid: string;
    dateTime: string;
    isRead?: boolean;
    target?: string;
    title: string;
    url: string;
}

export interface Props {
    className?: string;
    link?: string;
    linkText?: string;
    news: NewsItem[];
    title?: string;
}
/**
 * Render a Link block in an article.
 * @deprecated
 * @param props
 */
function ArticleLatestNews(props: Props) {
    return (
        <div className={styles.fdLatestNews}>
            <h3 className="heading sans xs">
                {props.title ?? 'Laatste nieuws'}
            </h3>
            <nav className="body-text sans s">
                {props.news.map((newsItem) => {
                    return (
                        <a
                            key={newsItem.uuid}
                            href={newsItem.url}
                            target={newsItem.target}
                        >
                            <time>{newsItem.dateTime}</time>
                            <span
                                className={
                                    newsItem.isRead ? styles.isRead : null
                                }
                            >
                                {newsItem.title}
                            </span>
                        </a>
                    );
                })}
            </nav>
            <a
                href={props.link ?? '/laatste-nieuws'}
                className="body-text sans s"
            >
                {props.linkText ?? 'Lees al het laatste nieuws'}
                <span className={styles.icon}>
                    <ChevronRightIcon />
                </span>
            </a>
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles.fdLatestNews, 'heading', 'body-text'];
}

export { ArticleLatestNews, getCssClassNames };
