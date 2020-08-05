import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import {
    LinkCard,
    getCssClassNames,
} from '../components/article-link-card/LinkCard';
import PageStore from '../stores/PageStore';
import Head from 'next/head';

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
                    Link card - Design System - Het Financieele Dagblad
                </title>
                <meta
                    name="description"
                    content="Link card, used to display a link card in articles"
                />
            </Head>

            <Explain
                cssClassNames={getCssClassNames()}
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
