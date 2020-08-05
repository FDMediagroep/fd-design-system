import React from 'react';
import { Explain } from '../../components/Explain';
import { LinkCard, getCssClassNames } from '../../components/card/LinkCard';
import Head from 'next/head';

function Page() {
    return (
        <>
            <Head>
                <title>
                    Link Card - Design System - Het Financieele Dagblad
                </title>
                <meta
                    name="description"
                    content="Link Card, used on the My News page"
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
