import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import {
    Summary,
    getCssClassNames,
} from '../components/article-summary/Summary';
import PageStore from '../stores/PageStore';
import Head from 'next/head';

const initialProps = {
    title: 'In het kort',
    summaries: [
        'Het kabinet vroeg softwarebouwers dit weekend mee te denken over een nieuwe app.',
        'De deadline voor plannen is dinsdag al, eind deze maand moet de oplossing klaar zijn voor productie.',
        'Experts zijn niet te spreken over die grote haast, zij vrezen een verlies aan draagvlak onder de bevolking.',
    ],
};

export const metaTitle = 'Summary';
export const metaDescription = 'Summary, used to display a summary in articles';

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
                anchor="default"
                cssClassNames={getCssClassNames()}
                legend="Summary"
                reactComponentName="Summary"
                description={
                    <>
                        <p>Used as summary in articles.</p>
                        <p>This element is used to display a summary.</p>
                    </>
                }
            >
                <Summary {...initialProps} />
            </Explain>

            <Explain
                anchor="variant-1"
                cssClassNames={getCssClassNames()}
                legend="Summary (variant-1)"
                reactComponentName="Summary"
                description={
                    <>
                        <p>Used as summary in longread articles.</p>
                        <p>This element is used to display a summary.</p>
                    </>
                }
            >
                <Summary {...initialProps} variant="variant-1" />
            </Explain>

            <Explain
                anchor="variant-2"
                cssClassNames={getCssClassNames()}
                legend="Summary (variant-2)"
                reactComponentName="Summary"
                description={
                    <>
                        <p>Used as summary in persoonlijk articles.</p>
                        <p>This element is used to display a summary.</p>
                    </>
                }
            >
                <Summary {...initialProps} variant="variant-2" />
            </Explain>
        </>
    );
}

export default Page;
