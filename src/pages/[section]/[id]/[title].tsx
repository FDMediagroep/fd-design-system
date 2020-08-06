import React, { useState, useEffect } from 'react';
import styles from './Article.module.scss';
import { mergeInlineContent } from '../../../utils/articleContent';
import { DOMParser } from 'xmldom';
import PageStore from '../../../stores/PageStore';
import { OEmbedLoader } from '../../../utils/OEmbedLoader';
import { ArticleMeta } from '../../../components/article-meta/ArticleMeta';
import { getPayload } from '../../api/[section]/[id]/[title]';
import Head from 'next/head';

interface Props {
    section: string;
    id: number;
    title: string;
    authors: any;
    article: any;
    articleXml: string;
    data: string;
    formattedPublicationDate: string;
}

function Article(props: Props) {
    try {
        const [jsxContent] = useState(
            mergeInlineContent(
                new DOMParser().parseFromString(props.articleXml, 'text/xml')
            )
        );

        useEffect(() => {
            PageStore.setPageType('article');

            new OEmbedLoader(
                '.soundcloud-embed',
                'jsonp',
                'https://soundcloud.com/oembed?format=js&url='
            );
            new OEmbedLoader(
                '.twitter-embed',
                'jsonp',
                'https://api.twitter.com/1/statuses/oembed.json?url='
            );
            new OEmbedLoader(
                '.instagram-embed',
                'json',
                'https://api.instagram.com/oembed?url='
            );

            return () => {
                PageStore.setPageType('overview');
            };
        }, []);

        return (
            <article className={styles.article}>
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>

                <header>
                    <ArticleMeta
                        authors={props.authors}
                        date={props.formattedPublicationDate}
                    />

                    <h1>{props.article.title}</h1>
                    <p className={styles.intro}>{props.article.intro}</p>
                </header>
                {jsxContent}
            </article>
        );
    } catch (e) {
        console.error(e);
        return (
            <textarea
                defaultValue={props.data}
                style={{ width: '100%' }}
                rows={15}
            />
        );
    }
}

export async function getServerSideProps({ params }) {
    let data = await getPayload(params);
    let article: any;
    let authors: any[] = [];
    let formattedPublicationDate: string;

    try {
        article = data.accessModel.pageContext.analyticsParameters.article;
        authors = data.articleDetailsModel.authorInfoList;
        formattedPublicationDate =
            data.articleDetailsModel.formattedPublicationDate;
    } catch (e) {
        console.error(e);
    }

    return {
        props: {
            section: params.section,
            id: params.id,
            title: params.title,
            data,
            formattedPublicationDate,
            authors,
            article: article ?? null,
            articleXml: `<xml>${article?.content}</xml>`,
        },
    };
}

export default Article;
