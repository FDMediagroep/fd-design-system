import React, { useEffect } from 'react';
import { Explain } from '../src/components/Explain';
import {
    RelatedTopics,
    getCssClassNames,
} from '../src/components/article-related-topics/RelatedTopics';
import PageStore from '../src/stores/PageStore';
import Head from 'next/head';
import { globalCssClassNames } from '../src/utils/globalCssClassNames';

const initialProps = {
    topics: [
        { topic: 'Topic 1', href: '/tag/topic1' },
        { topic: 'Topic 2', href: '/tag/topic2', selected: true },
        { topic: 'Topic 3', href: '/tag/topic3' },
    ],
};

export const metaTitle = 'Related Topics';
export const metaDescription =
    'Related Topics, used to display related topics in articles';

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
                anchor="default"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Related Topics"
                reactComponentName="RelatedTopics"
                description={
                    <>
                        <p>Used as related topics in articles.</p>
                        <p>This element is used to display related topics.</p>
                    </>
                }
            >
                <RelatedTopics {...initialProps} />
            </Explain>
        </>
    );
}

export default Page;
