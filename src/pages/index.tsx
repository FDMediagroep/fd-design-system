import React from 'react';
import styles from './index.module.scss';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import ReactMD from 'react-markdown/with-html';

const metaTitle = 'FD Design System';
const metaDescription = 'Collection of all the styled components for FD.nl';

interface Props {
    readme: string;
}

function Page(props: Props) {
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
            <ReactMD source={props.readme} escapeHtml={false} />
        </section>
    );
}

export async function getStaticProps() {
    const readme = fs.readFileSync(
        path.join(process.cwd(), 'README.md'),
        'utf-8'
    );

    return {
        props: {
            readme,
        },
    };
}

export default Page;
