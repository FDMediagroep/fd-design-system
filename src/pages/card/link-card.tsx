import React from 'react';
import { Explain } from '../../components/Explain';
import { LinkCard, getCssClassNames } from '../../components/card/LinkCard';
import Head from 'next/head';

export const metaTitle = 'Link Card';
export const metaDescription = 'Link Card, used on the My News page';

function Page() {
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
                legend="Link Card"
                reactComponentName="LinkCard"
                description={
                    <>
                        <p>Used to show the LinkCard on the My News page.</p>
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
