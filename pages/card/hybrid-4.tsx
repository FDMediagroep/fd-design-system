import React from 'react';
import { Explain } from '../../src/components/Explain';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';
import styles from './cards.module.scss';
import {
    HybridCard4,
    getCssClassNames,
} from '../../src/components/card/HybridCard4';
import { FdImgix } from '../../src/components/utils/image/FdImgix';

const hybridCards4: any = [
    {
        id: '1345386',
        label: 'Markten',
        title: "'Beleggers verwachten nieuwe klap op beurzen'",
        imageUrl:
            'https://fd-internal-development.imgix.net/XSsvNsfpytwq-OQdMRmsCm7J1i8.jpg?auto=format',

        url: 'https://fd.nl/beurs/1345386/amerikaanse-technologiebeurs-nasdaq-wordt-mogelijk-strenger-dan-euronext',
        intro: `Een tweede coronagolf staat bovenaan de lijst met zorgen van fondsmanagers, volgens een enquête van Bank of America.`,
        readingTime: 13,
    },
    {
        id: '1345186',
        label: 'Markten',
        title: `Deloitte krijgt met Rianne Jans een onverstoorbare cfo in huis`,
        imageUrl:
            'https://fd-internal-development.imgix.net/XSsvNsfpytwq-OQdMRmsCm7J1i8.jpg?auto=format',
        url: 'https://fd.nl/profiel/1345186/deloitte-krijgt-met-rianne-jans-een-onverstoorbare-cfo-in-huis',
        intro: `Na een kortstondig avontuur bij het ruziënde Centric vindt financieel bestuurder Rianne Jans onderdak bij accountants. `,
    },
    {
        id: '1345186',
        title: `Deloitte krijgt met Rianne Jans een onverstoorbare cfo in huis`,
        url: 'https://fd.nl/profiel/1345186/deloitte-krijgt-met-rianne-jans-een-onverstoorbare-cfo-in-huis',
        intro: `Na een kortstondig avontuur bij het ruziënde Centric vindt financieel bestuurder Rianne Jans onderdak bij accountants. `,
        readingTime: 11,
    },
];

export const metaTitle = 'Hybrid Card 4';
export const metaDescription = 'Hybrid (special) Card 4, special card on home';

function Page() {
    return (
        <>
            <Head>
                <title>
                    {`${metaTitle} - Design System - Het Financieele Dagblad`}
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
                anchor="hybrid4"
                previewClassName={`${styles.autoMinHeight} grid`}
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Hybrid Card 4"
                reactComponentName="HybridCard4"
                description={
                    <>
                        <p>
                            Used as a more attention seeking way to provide
                            information spread out horizontally on larger
                            screens and vertically on smaller screens.
                        </p>
                        <ul>
                            <li>default</li>
                            <li>Without an image</li>
                        </ul>
                    </>
                }
            >
                <>
                    <div className="xs-12 s-6 gap-1 gap-bottom full-height">
                        <HybridCard4
                            {...hybridCards4[0]}
                            imageComponent={
                                <FdImgix
                                    src={hybridCards4[1].imageUrl}
                                    imageSizes={{
                                        widthS: '300px',
                                        widthM: '351px',
                                        widthL: '599px',
                                    }}
                                />
                            }
                        />
                    </div>
                    <div className="xs-12 s-6 gap-1 gap-bottom full-height">
                        <HybridCard4
                            {...hybridCards4[1]}
                            imageComponent={
                                <FdImgix
                                    src={hybridCards4[1].imageUrl}
                                    imageSizes={{
                                        widthS: '300px',
                                        widthM: '351px',
                                        widthL: '599px',
                                    }}
                                />
                            }
                        />
                    </div>
                    <div className="xs-12 s-6 gap-1 gap-bottom full-height">
                        <HybridCard4 {...hybridCards4[2]} />
                    </div>
                </>
            </Explain>
        </>
    );
}

export default Page;
