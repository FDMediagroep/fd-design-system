import React from 'react';
import styles from './index.module.scss';
import Head from 'next/head';

const metaTitle = 'FD Design System';
const metaDescription = 'Collection of all the styled components for FD.nl';

function Page() {
    return (
        <section className={styles.index}>
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
            <h1>FD Design System</h1>
            <p>
                This is a collection of all the styled components for FD.nl.
                Components found here are styled according to the FD Style
                Guide.
            </p>
        </section>
    );
}

export default Page;
