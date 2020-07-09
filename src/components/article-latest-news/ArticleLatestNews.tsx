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
            <h3>{props.title ?? 'Laatste nieuws'}</h3>
            <nav>
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
            <a href={props.link ?? '/laatste-nieuws'}>
                {props.linkText ?? 'Lees al het laatste nieuws'}
                <span
                    className={styles.icon}
                    dangerouslySetInnerHTML={{ __html: ChevronRightIcon }}
                />
            </a>
        </div>
    );
}

function getCssClassNames() {
    return [styles.fdLatestNews];
}

export { ArticleLatestNews, getCssClassNames };
