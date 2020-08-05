import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import {
    BulletPoint,
    getCssClassNames,
} from '../components/bullet-point/BulletPoint';
import PageStore from '../stores/PageStore';
import styles from './article-bullet-point.module.scss';
import Head from 'next/head';

const initialProps = {
    bullets: [
        'Ierse Nama geldt als schoolvoorbeeld van een succesvolle ‘bad bank’.',
        'Nama dwong de Ierse banken direct hun verlies te nemen.',
        'De ‘bad bank’ kon zelf de verkoop van slechte leningen timen, waardoor het een betere prijs kon bedingen.',
        'Nama is ook een bron van irritatie vanwege schandalen rond vastgoed en belangenverstrengeling.',
    ],
};

const metaTitle = 'Bullet point';
const metaDescription = 'Bullet point, used in articles';

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
                <meta property="twitter:title" content="FD Design System" />
                <meta
                    property="twitter:description"
                    content={metaDescription}
                />
            </Head>

            <Explain
                cssClassNames={getCssClassNames()}
                previewClassName={styles.preview}
                legend="Bullet point"
                reactComponentName="BulletPoint"
                description={
                    <>
                        <p>Used as bullet points in articles.</p>
                        <p>This element is used to display bullet points.</p>
                    </>
                }
            >
                <BulletPoint {...initialProps} />
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                previewClassName={styles.preview}
                legend="Bullet point (align: right)"
                reactComponentName="BulletPoint"
                description={
                    <>
                        <p>Used as right-aligned bullet points in articles.</p>
                        <p>This element is used to display bullet points.</p>
                    </>
                }
            >
                <BulletPoint {...initialProps} alignment="right" />
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                previewClassName={styles.preview}
                legend="Summary (variant-1)"
                reactComponentName="BulletPoint"
                description={
                    <>
                        <p>Used as bullet points in longread articles.</p>
                        <p>This element is used to display bullet points.</p>
                    </>
                }
            >
                <BulletPoint {...initialProps} variant="variant-1" />
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                previewClassName={styles.preview}
                legend="Bullet point (variant-1, align: right)"
                reactComponentName="BulletPoint"
                description={
                    <>
                        <p>
                            Used as right-aligned bullet points in longread
                            articles.
                        </p>
                        <p>This element is used to display bullet points.</p>
                    </>
                }
            >
                <BulletPoint
                    {...initialProps}
                    variant="variant-1"
                    alignment="right"
                />
            </Explain>
        </>
    );
}

export default Page;
