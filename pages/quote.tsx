import React, { useEffect } from 'react';
import { Explain } from '../src/components/Explain';
import { Quote, getCssClassNames } from '../src/components/quote/Quote';
import PageStore from '../src/stores/PageStore';
import Head from 'next/head';
import { globalCssClassNames } from '../src/utils/globalCssClassNames';

const initialProps = {
    blockquote: `Je moet je afvragen wat er gebeurt als je één partij hebt – in
de meeste gevallen de man – die geld heeft voor een advocaat en
de andere partij niet. Hoe werkt dat in een echtscheidingszaak?`,
    figcaption: `Bregje Dijksterhuis, rechtssocioloog VU`,
};

export const metaTitle = 'Quote';
export const metaDescription =
    'Quote, used to display an inline quote in articles';

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
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Inline Quote"
                reactComponentName="Quote"
                description={
                    <>
                        <p>Used as inline content in articles.</p>
                        <p>This element is solely used to display a quote.</p>
                    </>
                }
            >
                <Quote {...initialProps} />
            </Explain>
        </>
    );
}

export default Page;
