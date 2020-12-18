import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import { WordFrame, getCssClassNames } from '../components/wordframe/WordFrame';
import PageStore from '../stores/PageStore';
import Head from 'next/head';

const initialProps = {
    title: `WordFrame test`,
    description: `Aenean lacinia bibendum nulla sed consectetur. Donec id elit non
mi porta gravida at eget metus. Cum sociis natoque penatibus et
magnis dis parturient montes, nascetur ridiculus mus.`,
};

export const metaTitle = 'Word frame';
export const metaDescription =
    'Word frame, used to display an inline word frame in articles';

function Index() {
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
                legend="WordFrame"
                reactComponentName="WordFrame"
                description={
                    <>
                        <p>Used as inline content in articles.</p>
                        <p>
                            Even though it's possible to pass a title and a
                            description. Nowadays only the title is used.
                        </p>
                    </>
                }
            >
                <WordFrame {...initialProps} />
            </Explain>
        </>
    );
}

export default Index;
