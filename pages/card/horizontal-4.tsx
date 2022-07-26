import React from 'react';
import { Explain } from '../../src/components/Explain';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';
import styles from './cards.module.scss';
import {
    HorizontalCard4,
    getCssClassNames,
} from '../../src/components/card/HorizontalCard4';
import { FdImgix } from '../../src/components/utils/image/FdImgix';

const horizontalCards4: any = [
    {
        id: '1343052a',
        url: 'https://fd.nl/futures/1343052/levensgevaarlijk-libanon',
        label: 'Omgekeerde kruistocht',
        imageUrl:
            'https://fd-internal-development.imgix.net/XSsvNsfpytwq-OQdMRmsCm7J1i8.jpg?auto=format',
        time: '13:11',
        title: 'Levensgevaarlijk Libanon',
        intro: 'Ondanks een op het eerste gezicht veel gevaarlijker levensstijl, verschilt de levensverwachting van Libanezen nog maar drie jaar met die van ons.',
    },
    {
        id: '1343823b',
        url: 'https://fd.nl/economie-politiek/1343823/vvd-botst-met-kabinet-en-coalitie-over-steuneisen-klm',
        label: 'Politiek',
        imageUrl:
            'https://fd-internal-development.imgix.net/XSsvNsfpytwq-OQdMRmsCm7J1i8.jpg?auto=format',
        time: '12:49',
        title: 'VVD botst met kabinet en coalitie over steuneisen KLM',
        intro: "Liberalen hekelen duurzaamheidsvoorwaarden. 'Het is een reddingsoperatie, geen strafexpeditie', vindt Tweede Kamerlid Roald van der Linde.",
        isRead: true,
    },
    {
        id: '1343823c',
        url: 'https://fd.nl/economie-politiek/1343823/vvd-botst-met-kabinet-en-coalitie-over-steuneisen-klm',
        label: 'Politiek',
        time: '12:49',
        title: 'VVD botst met kabinet en coalitie over steuneisen KLM',
        intro: "Liberalen hekelen duurzaamheidsvoorwaarden. 'Het is een reddingsoperatie, geen strafexpeditie', vindt Tweede Kamerlid Roald van der Linde.",
        isRead: false,
    },
];

export const metaTitle = 'Horizontal Card 4';
export const metaDescription =
    'Horizontal (special) Card 4, used in "Mijn nieuws" and "Net binnen"';

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
                previewClassName={`${styles.horizontalGrid} ${styles.autoMinHeight} grid`}
                anchor="horizontal4"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Horizontal Card 4"
                reactComponentName="HorizontalCard4"
                description={
                    <>
                        <p>Used on 'Mijn nieuws' and 'Net binnen'</p>
                        <ul>
                            <li>default</li>
                            <li>Visited</li>
                            <li>Without an image</li>
                        </ul>
                    </>
                }
            >
                <>
                    <HorizontalCard4
                        className="xs-12"
                        imageComponent={
                            <FdImgix
                                src={horizontalCards4[0].imageUrl}
                                imageSizes={{
                                    widthS: '160px',
                                    widthM: '244px',
                                    widthL: '244px',
                                }}
                            />
                        }
                        {...horizontalCards4[0]}
                    />
                    <HorizontalCard4
                        className="xs-12"
                        imageComponent={
                            <FdImgix
                                src={horizontalCards4[1].imageUrl}
                                imageSizes={{
                                    widthS: '160px',
                                    widthM: '244px',
                                    widthL: '244px',
                                }}
                            />
                        }
                        {...horizontalCards4[1]}
                    />
                    <HorizontalCard4
                        className="xs-12"
                        {...horizontalCards4[2]}
                    />
                </>
            </Explain>
        </>
    );
}

export default Page;
