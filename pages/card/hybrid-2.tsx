import React, { useState } from 'react';
import styles from './cards.module.scss';
import { Explain } from '../../src/components/Explain';
import {
    HybridCard2,
    getCssClassNames,
} from '../../src/components/card/HybridCard2';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';

const hybridCards2: any = [
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
        readingTime: 3,
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
        readingTime: 11,
        isRead: true,
    },

    {
        id: '1345444',
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
        readingTime: 11,
    },
];

export const metaTitle = 'Hybrid Card 2';
export const metaDescription =
    'Hybrid Card 2, without intro, on small screens its similar to Horizontal Card 1 and wider screens similar to Vertical Card 1';

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
                previewClassName={`${styles.hybrid2Grid} grid`}
                anchor="hybrid2"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
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
                            <li>visited</li>
                            <li>without a label</li>
                        </ul>
                    </>
                }
            >
                <>
                    <HybridCard2
                        className="xs-12 s-6 m-4 l-3"
                        {...hybridCards2[0]}
                    />
                    <HybridCard2
                        className="xs-12 s-6 m-4 l-3"
                        {...hybridCards2[1]}
                    />
                    <HybridCard2
                        className="xs-12 s-6 m-4 l-3"
                        {...hybridCards2[2]}
                    />
                </>
            </Explain>
        </>
    );
}

export default Page;
