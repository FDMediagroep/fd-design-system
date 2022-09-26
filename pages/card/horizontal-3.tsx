import React from 'react';
import { Explain } from '../../src/components/Explain';
import {
    HorizontalCard3,
    getCssClassNames,
} from '../../src/components/card/HorizontalCard3';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';
import styles from './cards.module.scss';

const horizontalCards3: any = [
    {
        id: '1343052a',
        url: 'https://fd.nl/futures/1343052/levensgevaarlijk-libanon',
        label: 'Omgekeerde kruistocht',
        time: '13:11',
        title: 'Levensgevaarlijk Libanon',
        intro: 'Ondanks een op het eerste gezicht veel gevaarlijker levensstijl, verschilt de levensverwachting van Libanezen nog maar drie jaar met die van ons.',
    },
    {
        id: '1343823a',
        url: 'https://fd.nl/economie-politiek/1343823/vvd-botst-met-kabinet-en-coalitie-over-steuneisen-klm',
        label: 'Politiek',
        time: '12:49',
        title: 'VVD botst met kabinet en coalitie over steuneisen KLM',
        intro: "Liberalen hekelen duurzaamheidsvoorwaarden. 'Het is een reddingsoperatie, geen strafexpeditie', vindt Tweede Kamerlid Roald van der Linde.",
        isRead: true,
        readingTime: 7,
    },
];

export const metaTitle = 'Horizontal Card 3';
export const metaDescription = 'Horizontal Card 3, used in the search results';

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
                previewClassName={`${styles.horizontalGrid} grid`}
                anchor="horizontal3"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Horizontal Card 3"
                reactComponentName="HorizontalCard3"
                description={
                    <>
                        <p>Used in the search results.</p>
                        <ul>
                            <li>default</li>
                            <li>visited</li>
                        </ul>
                    </>
                }
            >
                <>
                    <HorizontalCard3
                        className="xs-12"
                        {...horizontalCards3[0]}
                    />
                    <HorizontalCard3
                        className="xs-12"
                        {...horizontalCards3[1]}
                    />
                </>
            </Explain>
        </>
    );
}

export default Page;
