import React, { useState, useEffect } from 'react';
import '@fdmg/css-grid/css/grid.css';
import '@fdmg/css-grid/css/flex.css';
import styles from './Article.module.scss';
import { mergeInlineContent } from '../../../utils/articleContent';
import { DOMParser } from 'xmldom';
import PageStore from '../../../stores/PageStore';
import { OEmbedLoader } from '../../../utils/OEmbedLoader';
import { ArticleMeta } from '../../../components/article-meta/ArticleMeta';
import { getPayload } from '../../api/[section]/[id]/[title]';
import Head from 'next/head';
import { GridContainer } from '@fdmg/css-grid/GridContainer';
import { VerticalToolbar } from '../../../components/toolbar/VerticalToolbar';

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

    try {
        return (
            <article className={styles.article}>
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>

                <GridContainer attributes={['grid']}>
                    <GridContainer
                        attributes={[
                            'm-1',
                            'hide-lt-m',
                            'gap-1',
                            'gap-2',
                            'gap-bottom',
                        ]}
                    />
                    <GridContainer
                        attributes={[
                            'xs-12',
                            's-12',
                            'm-10',
                            'l-7',
                            'gap-1',
                            'gap-2',
                            'gap-bottom',
                        ]}
                    >
                        <GridContainer
                            className={styles.content}
                            attributes={['grid']}
                        >
                            <GridContainer attributes={['xs-12', 'gap-bottom']}>
                                <header>
                                    <ArticleMeta
                                        authors={props.authors}
                                        date={props.formattedPublicationDate}
                                    />

                                    <h1>{props.article.title}</h1>
                                    <p className={styles.intro}>
                                        {props.article.intro}
                                    </p>
                                </header>
                            </GridContainer>
                        </GridContainer>
                    </GridContainer>
                    <GridContainer
                        attributes={[
                            'hide-lt-m',
                            'm-1',
                            'l-4',
                            'gap-2',
                            'gap-bottom',
                        ]}
                    />

                    <GridContainer
                        className={styles.fullHeight}
                        attributes={['m-1', 'hide-lt-m', 'gap-1', 'gap-2']}
                    >
                        <VerticalToolbar
                            id="12345"
                            className={`${styles.left} ${styles.sticky}`}
                            bookmarked={false}
                            onClick={console.log}
                        />
                    </GridContainer>
                    <GridContainer
                        attributes={[
                            'xs-12',
                            's-12',
                            'm-10',
                            'l-7',
                            'gap-1',
                            'gap-2',
                        ]}
                    >
                        <GridContainer
                            className={styles.content}
                            attributes={['grid']}
                        >
                            <GridContainer attributes={['xs-12', 'gap-bottom']}>
                                {jsxContent}
                            </GridContainer>
                        </GridContainer>
                    </GridContainer>
                    <GridContainer
                        className={styles.fullHeight}
                        attributes={['l-4', 'hide-lt-l', 'gap-2']}
                    >
                        <span className={`${styles.right} ${styles.sticky}`}>
                            AD
                        </span>
                    </GridContainer>
                    <GridContainer
                        attributes={[
                            'hide-lt-m',
                            'm-1',
                            'l-hide',
                            'xl-hide',
                            'gap-2',
                        ]}
                    />
                </GridContainer>
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
    const data = await getPayload(params);
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
