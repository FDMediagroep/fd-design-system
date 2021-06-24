import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import {
    LinkCard,
    getCssClassNames,
} from '../components/article-link-card/LinkCard';
import PageStore from '../stores/PageStore';
import Head from 'next/head';
import { globalCssClassNames } from '../utils/globalCssClassNames';

export const metaTitle = 'Link card';
export const metaDescription =
    'Link card, used to display a link card in articles';

function Page() {
    /**
     * Use article background.
     */
    useEffect(() => {
        PageStore.setPageType('article');

        return () => {
            PageStore.setPageType('overview');
        };
    }, []);

    return (
        <>
            <Head>
                <title>
                    {metaTitle} - Design System - Het Financieele Dagblad
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
                legend="Link Card"
                reactComponentName="LinkCard"
                description={
                    <>
                        <p>Used to show the LinkCard on the article page.</p>
                        <p>This element is used to display LinkCard.</p>
                    </>
                }
            >
                <LinkCard
                    link="/mijn-nieuws"
                    title="Beheer"
                    linkText="Ga naar laatste nieuws"
                />
            </Explain>
        </>
    );
}

export default Page;
