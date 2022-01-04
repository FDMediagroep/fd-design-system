import React, { useEffect } from 'react';
import { Explain } from '../src/components/Explain';
import {
    NumberFrame,
    getCssClassNames,
} from '../src/components/numberframe/NumberFrame';
import PageStore from '../src/stores/PageStore';
import Head from 'next/head';
import { globalCssClassNames } from '../src/utils/globalCssClassNames';

const initialProps = {
    number: `57%`,
    description: `Nama betaalde €31,8 mrd voor bankleningen en onderpand met een boekwaarde van €74 mrd, een korting van 57%`,
};

export const metaTitle = 'Number frame';
export const metaDescription =
    'Number frame, used to display an inline number frame in articles';

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
                legend="NumberFrame"
                reactComponentName="NumberFrame"
                description={
                    <>
                        <p>Used as inline content in articles.</p>
                        <p>
                            This element is used to display an important number
                            with a description.
                        </p>
                    </>
                }
            >
                <NumberFrame {...initialProps} />
            </Explain>
        </>
    );
}

export default Page;
