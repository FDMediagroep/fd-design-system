import React from 'react';
import { Explain } from '../../components/Explain';
import Head from 'next/head';
import {
    getCssClassNames,
    HybridCard3,
} from '../../components/card/HybridCard3';

const hybridCards3: any = [
    {
        id: '1345386',
        label: 'Markten',
        title: "'Beleggers verwachten nieuwe klap op beurzen'",
        imageUrl:
            'https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlS:
            'https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlM:
            'https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=320',
        imageUrlL:
            'https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=320',
        url: 'https://fd.nl/beurs/1345386/amerikaanse-technologiebeurs-nasdaq-wordt-mogelijk-strenger-dan-euronext',
        intro: `Een tweede coronagolf staat bovenaan de lijst met zorgen van fondsmanagers, volgens een enquête van Bank of America.`,
    },
    {
        id: '1345186',
        label: 'Markten',
        title: `Deloitte krijgt met Rianne Jans een onverstoorbare cfo in huis`,
        imageUrl:
            'https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlS:
            'https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlM:
            'https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?fit=crop&crop=faces&auto=format&q=45&w=320',
        imageUrlL:
            'https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?fit=crop&crop=faces&auto=format&q=45&w=320',
        url: 'https://fd.nl/profiel/1345186/deloitte-krijgt-met-rianne-jans-een-onverstoorbare-cfo-in-huis',
        intro: `Na een kortstondig avontuur bij het ruziënde Centric vindt financieel bestuurder Rianne Jans onderdak bij accountants. `,
        time: '11:20',
    },
    {
        id: '1345444',
        label: 'Arbeidsmarkt',
        title: 'Bulk van de werklozen komt in de komende maanden',
        imageUrl:
            'https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlS:
            'https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlM:
            'https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=320',
        imageUrlL:
            'https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=320',
        url: 'https://fd.nl/economie-politiek/1345444/grootste-toename-werkloosheid-sinds-2003',
    },
];

export const metaTitle = 'Hybrid Card 3';
export const metaDescription = 'Hybrid Card 3, used for breaking news';

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
                anchor="hybrid3"
                cssClassNames={getCssClassNames()}
                legend="Hybrid Card 3"
                reactComponentName="HybridCard3"
                description={
                    <>
                        <p>Used for breaking news.</p>
                        <ul>
                            <li>default</li>
                        </ul>
                    </>
                }
            >
                <HybridCard3 {...hybridCards3[0]} />
            </Explain>

            <Explain
                anchor="hybrid3time"
                cssClassNames={getCssClassNames()}
                legend="Hybrid Card 3"
                reactComponentName="HybridCard3"
                description={
                    <>
                        <p>Used for breaking news.</p>
                        <ul>
                            <li>time</li>
                        </ul>
                    </>
                }
            >
                <HybridCard3 {...hybridCards3[1]} />
            </Explain>

            <Explain
                anchor="hybrid3nointro"
                cssClassNames={getCssClassNames()}
                legend="Hybrid Card 3"
                reactComponentName="HybridCard3"
                description={
                    <>
                        <p>Used for breaking news.</p>
                        <ul>
                            <li>no intro</li>
                        </ul>
                    </>
                }
            >
                <HybridCard3 {...hybridCards3[2]} />
            </Explain>
        </>
    );
}

export default Page;
