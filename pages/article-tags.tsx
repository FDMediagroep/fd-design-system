import React, { useState, useEffect } from 'react';
import { Explain } from '../src/components/Explain';
import {
    ArticleTags,
    getCssClassNames,
} from '../src/components/article-tags/ArticleTags';
import * as styles from './article-link-block.module.scss';
import PageStore from '../src/stores/PageStore';
import Head from 'next/head';
import { globalCssClassNames } from '../src/utils/globalCssClassNames';

export const metaTitle = 'Article tags';
export const metaDescription = 'Article tags, used to display tags in articles';

function Page() {
    const [tags, setTags] = useState([
        {
            tag: 'Detailhandel',
            uuid: '1',
        },
        {
            selected: true,
            tag: 'Eten & Drinken',
            uuid: '2',
        },
        {
            alertSelected: true,
            selected: true,
            tag: 'Supermarkt',
            uuid: '3',
        },
    ]);

    /**
     * Use article background.
     */
    useEffect(() => {
        PageStore.setPageType('article');

        return () => {
            PageStore.setPageType('overview');
        };
    }, []);

    const onDisableAlertClick = (theTag: string) => {
        setTags(
            tags.map((tag: any) => {
                if (tag.tag === theTag) {
                    return { ...tag, alertSelected: false };
                } else {
                    return tag;
                }
            })
        );
    };

    const onEnableAlertClick = (theTag: string) => {
        setTags(
            tags.map((tag: any) => {
                if (tag.tag === theTag) {
                    return { ...tag, alertSelected: true };
                } else {
                    return tag;
                }
            })
        );
    };

    const onFollowClick = (theTag: string) => {
        setTags(
            tags.map((tag: any) => {
                if (tag.tag === theTag) {
                    return { ...tag, selected: true };
                } else {
                    return tag;
                }
            })
        );
    };

    const onUnfollowClick = (theTag: string) => {
        setTags(
            tags.map((tag: any) => {
                if (tag.tag === theTag) {
                    return {
                        ...tag,
                        selected: false,
                        alertSelected: false,
                    };
                } else {
                    return tag;
                }
            })
        );
    };

    return (
        <>
            <Head>
                <title>
                    {`${metaTitle} - Design System - Het Financieele Dagblad`}
                </title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="twitter:title" content={metaTitle} />
                <meta
                    property="twitter:description"
                    content={metaDescription}
                />
            </Head>

            <Explain
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                previewClassName={styles['preview']}
                legend="Article tags"
                description={
                    <>
                        <p>
                            Used to show the article tags on the article page.
                        </p>
                        <p>This element is used to display article tags.</p>
                    </>
                }
            >
                <ArticleTags
                    onDisableAlertClick={onDisableAlertClick}
                    onEnableAlertClick={onEnableAlertClick}
                    onFollowClick={onFollowClick}
                    onUnfollowClick={onUnfollowClick}
                    title="Volgen via mijn nieuws"
                    titleLink="https://fd.nl/mijn-nieuws"
                    tags={tags}
                />
            </Explain>
        </>
    );
}

export default Page;
