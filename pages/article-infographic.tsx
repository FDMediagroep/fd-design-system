import React, { useEffect } from 'react';
import { Explain } from '../src/components/Explain';
import {
    InfographicExtended,
    getCssClassNames,
} from '../src/components/article-image/InfographicExtended';
import PageStore from '../src/stores/PageStore';
import Head from 'next/head';
import { globalCssClassNames } from '../src/utils/globalCssClassNames';

const initialProps = {
    smallImageUrl:
        'https://fd-external-development.imgix.net/4b0ae3bd28b53f3330a894d02fceda9cba789e79.png',
    largeImageUrl:
        'https://fd-external-development.imgix.net/83122edfd074e501eb2bccec93df979e64942b26.png',
};

export const metaTitle = 'Infographic extended';
export const metaDescription =
    'Infographic extended, used to display an inline infographic in articles';

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
                legend="Infographic"
                reactComponentName="InfographicExtended"
                description={
                    <>
                        <p>Used as inline infographic in articles.</p>
                        <p>This element is used to display an infographic.</p>
                    </>
                }
            >
                <InfographicExtended {...initialProps} />
            </Explain>
        </>
    );
}

export default Page;
