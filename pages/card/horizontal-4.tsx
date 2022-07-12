import React from 'react';
import { Explain } from '../../src/components/Explain';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';
import styles from './cards.module.scss';
import {
    HorizontalCard4,
    getCssClassNames,
} from '../../src/components/card/HorizontalCard4';

const horizontalCards4: any = [
    {
        id: '1343052a',
        url: 'https://fd.nl/futures/1343052/levensgevaarlijk-libanon',
        label: 'Omgekeerde kruistocht',
        time: '13:11',
        title: 'Levensgevaarlijk Libanon',
        intro: 'Ondanks een op het eerste gezicht veel gevaarlijker levensstijl, verschilt de levensverwachting van Libanezen nog maar drie jaar met die van ons.',
    },
    {
        id: '1343825a',
        url: 'https://fd.nl/economie-politiek/1343825/door-crisis-veel-meer-publiek-geld-nodig-voor-green-deal',
        label: 'Europa',
        time: '13:08',
        title: "Diederik Samsom: 'Door crisis veel meer publiek geld nodig voor Green Deal'",
        printTitle: 'Door crisis veel meer publiek geld nodig voor Green Deal',
        intro: "De rechterhand van klimaatcommissaris Frans Timmerman waarschuwt voor een 'investeringsgat'. De private sector kan door coronacrisis veel minder bijdragen.",
        readingTime: 5,
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

export const metaTitle = 'Horizontal Card 4';
export const metaDescription = 'Horizontal Card 4, used in the search results';

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
                anchor="horizontal4"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Horizontal Card 4"
                reactComponentName="HorizontalCard4"
                description={
                    <>
                        <p>
                            Used in the search results. Note that the difference
                            with the Horizontal Card 2 is that it supports
                            `printTitle`.
                        </p>
                        <ul>
                            <li>default</li>
                            <li>with print title</li>
                            <li>visited</li>
                        </ul>
                    </>
                }
            >
                <>
                    <HorizontalCard4
                        className="xs-12"
                        {...horizontalCards4[0]}
                    />
                    <HorizontalCard4
                        className="xs-12"
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
