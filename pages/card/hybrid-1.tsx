import React, { useState } from 'react';
import styles from './cards.module.scss';
import { Explain } from '../../src/components/Explain';
import {
    HybridCard1,
    getCssClassNames,
} from '../../src/components/card/HybridCard1';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';

const hybridCards1: any = [
    {
        id: '1345386',
        label: 'Markten',
        title: "'Beleggers verwachten nieuwe klap op beurzen'",
        imageUrl:
            'https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=300',
        imageUrlS:
            'https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=300',
        imageUrlM:
            'https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=351&h=234',
        imageUrlL:
            'https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        url: 'https://fd.nl/beurs/1345386/amerikaanse-technologiebeurs-nasdaq-wordt-mogelijk-strenger-dan-euronext',
        intro: `Een tweede coronagolf staat bovenaan de lijst met zorgen van fondsmanagers, volgens een enquête van Bank of America.`,
        readingTime: 3,
    },
    {
        id: '1345186',
        label: 'Markten',
        title: `Deloitte krijgt met Rianne Jans een onverstoorbare cfo in huis`,
        imageUrl:
            'https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.21625%2c.1125703564727955%2c.50625%2c.7598499061913696&fit=crop&crop=faces&auto=format&q=45&w=300',
        imageUrlS:
            'https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.21625%2c.1125703564727955%2c.50625%2c.7598499061913696&fit=crop&crop=faces&auto=format&q=45&w=300',
        imageUrlM:
            'https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.095%2c.1069418386491557%2c.79625%2c.7954971857410882&fit=crop&crop=faces&auto=format&q=45&w=351&h=234',
        imageUrlL:
            'https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.095%2c.1069418386491557%2c.79625%2c.7954971857410882&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        url: 'https://fd.nl/profiel/1345186/deloitte-krijgt-met-rianne-jans-een-onverstoorbare-cfo-in-huis',
        intro: `Na een kortstondig avontuur bij het ruziënde Centric vindt financieel bestuurder Rianne Jans onderdak bij accountants. `,
        variant: 'variant-1',
        readingTime: 5,
    },
    {
        id: '1345444',
        label: 'Arbeidsmarkt',
        title: 'Bulk van de werklozen komt in de komende maanden',
        imageUrl:
            'https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=300',
        imageUrlS:
            'https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=300',
        imageUrlM:
            'https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=351&h=234',
        imageUrlL:
            'https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        url: 'https://fd.nl/economie-politiek/1345444/grootste-toename-werkloosheid-sinds-2003',
        readingTime: 7,
    },
];

export const metaTitle = 'Hybrid Card 1';
export const metaDescription =
    'Hybrid Card 1, on small screens its similar to Horizontal Card 1 and wider screens similar to Vertical Card 1';

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
                previewClassName={`${styles.hybrid1Grid} grid`}
                anchor="hybrid1"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Hybrid Card 1"
                reactComponentName="HybridCard1"
                description={
                    <>
                        <p>Used on homepage.</p>
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
                    <HybridCard1
                        className="xs-12 s-6 m-4 l-3"
                        onBookmark={toggleBookmark}
                        bookmarked={bookmarked}
                        {...hybridCards1[0]}
                    />
                    <HybridCard1
                        className="xs-12 s-6 m-4 l-3"
                        onBookmark={toggleBookmark}
                        bookmarked={bookmarked}
                        {...hybridCards1[1]}
                    />
                    <HybridCard1
                        isRead={true}
                        className="xs-12 s-6 m-4 l-3"
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
