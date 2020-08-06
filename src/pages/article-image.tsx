import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import {
    ArticleImage,
    getCssClassNames,
} from '../components/article-image/ArticleImage';
import PageStore from '../stores/PageStore';
import Head from 'next/head';

const initialProps = {
    caption: `What a photo`,
    credit: `Foto: ANP`,
    fileName: '8de629dcb6211812af36b6824df2058f83deba9c.jpg',
};

const metaTitle = 'Article image';
const metaDescription =
    'Article image, used to display an inline image/photo in articles';

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
                cssClassNames={getCssClassNames()}
                legend="Image"
                reactComponentName="ArticleImage"
                description={
                    <>
                        <p>Used as inline image in articles.</p>
                        <p>This element is used to display an image/photo.</p>
                    </>
                }
            >
                <ArticleImage {...initialProps} />
            </Explain>
        </>
    );
}

export default Page;
