import React, { useState } from 'react';
import styles from './cards.module.scss';
import { Explain } from '../../components/Explain';
import {
    HybridCard2,
    getCssClassNames,
} from '../../components/card/HybridCard2';
import Head from 'next/head';

const hybridCards1: any = [
    {
        id: '1345386',
        label: 'Markten',
        title: "'Beleggers verwachten nieuwe klap op beurzen'",
        url:
            'https://fd.nl/beurs/1345386/amerikaanse-technologiebeurs-nasdaq-wordt-mogelijk-strenger-dan-euronext',
        intro: `Een tweede coronagolf staat bovenaan de lijst met zorgen van fondsmanagers, volgens een enquête van Bank of America.`,
        readingTime: 3,
    },
    {
        id: '1345186',
        label: 'Markten',
        title: `Deloitte krijgt met Rianne Jans een onverstoorbare cfo in huis`,
        url:
            'https://fd.nl/profiel/1345186/deloitte-krijgt-met-rianne-jans-een-onverstoorbare-cfo-in-huis',
        intro: `Na een kortstondig avontuur bij het ruziënde Centric vindt financieel bestuurder Rianne Jans onderdak bij accountants. `,
        variant: 'variant-1',
    },
    {
        id: '1345444',
        label: 'Arbeidsmarkt',
        title: 'Bulk van de werklozen komt in de komende maanden',
        url:
            'https://fd.nl/economie-politiek/1345444/grootste-toename-werkloosheid-sinds-2003',
        readingTime: 11,
        isRead: true,
    },
];

const metaTitle = 'Hybrid Card 2';
const metaDescription =
    'Hybrid Card 2, without image, on small screens its similar to Horizontal Card 1 and wider screens similar to Vertical Card 1';

function Page() {
    const [bookmarked, setBookmarked] = useState(false);

    function toggleBookmark() {
        setBookmarked(!bookmarked);
    }

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
                previewClassName={styles.horizontalFlexPreview}
                anchor="hybrid2"
                cssClassNames={getCssClassNames()}
                legend="Hybrid Card 2"
                reactComponentName="HybridCard2"
                description={
                    <>
                        <p>Used on homepage. This card has no image.</p>
                        <p>
                            This is called a hybrid card because on small
                            screens its layout is similar to Horizontal Card 1
                            and on wider screens similar to Vertical Card 1.
                        </p>
                        <ul>
                            <li>default</li>
                            <li>variant-1</li>
                            <li>visited</li>
                        </ul>
                    </>
                }
            >
                <>
                    <HybridCard2
                        className={styles.hybridCard2}
                        onBookmark={toggleBookmark}
                        bookmarked={bookmarked}
                        {...hybridCards1[0]}
                    />
                    <HybridCard2
                        className={styles.hybridCard2}
                        onBookmark={toggleBookmark}
                        bookmarked={bookmarked}
                        {...hybridCards1[1]}
                    />
                    <HybridCard2
                        className={styles.hybridCard2}
                        onBookmark={toggleBookmark}
                        bookmarked={bookmarked}
                        {...hybridCards1[2]}
                    />
                </>
            </Explain>
        </>
    );
}

export default Page;
