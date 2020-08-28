import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import {
    LinkBlock,
    getCssClassNames,
} from '../components/article-link-block/LinkBlock';
import PageStore from '../stores/PageStore';
import styles from './article-link-block.module.scss';
import Head from 'next/head';

const metaTitle = 'Link block';
const metaDescription = 'Link block, used to display a link block in articles';

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
                previewClassName={styles.preview}
                legend="Link Block"
                reactComponentName="LinkBlock"
                description={
                    <>
                        <p>Used to show the link block on article page.</p>
                        <p>This element is used to display link block.</p>
                    </>
                }
            >
                <LinkBlock
                    title="Lees ook"
                    description="Honderden ambtenaren vragen Blok: maak ons departement diverser"
                    url="https://dev.fd.nl/ondernemen/1254849/douane-20-tot-30-meer-aangiftes-door-groei-in-webwinkelen"
                />
            </Explain>

            <Explain
                anchor="align-right"
                cssClassNames={getCssClassNames()}
                previewClassName={styles.preview}
                legend="Link Block (align: right)"
                reactComponentName="LinkBlock"
                description={
                    <>
                        <p>Used to show the link block on article page.</p>
                        <p>This element is used to display link block.</p>
                    </>
                }
            >
                <LinkBlock
                    title="Lees ook"
                    description="Honderden ambtenaren vragen Blok: maak ons departement diverser"
                    url="https://dev.fd.nl/ondernemen/1254849/douane-20-tot-30-meer-aangiftes-door-groei-in-webwinkelen"
                    position="right"
                />
            </Explain>
        </>
    );
}

export default Page;
