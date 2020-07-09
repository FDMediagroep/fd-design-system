import React from 'react';
import { Explain } from '../../components/Explain';
import {
    HorizontalCard3,
    getCssClassNames,
} from '../../components/card/HorizontalCard3';

const horizontalCards3: any = [
    {
        id: '1343052a',
        url: 'https://fd.nl/futures/1343052/levensgevaarlijk-libanon',
        label: 'Omgekeerde kruistocht',
        time: '13:11',
        title: 'Levensgevaarlijk Libanon',
        intro:
            'Ondanks een op het eerste gezicht veel gevaarlijker levensstijl, verschilt de levensverwachting van Libanezen nog maar drie jaar met die van ons.',
    },
    {
        id: '1343825a',
        url:
            'https://fd.nl/economie-politiek/1343825/door-crisis-veel-meer-publiek-geld-nodig-voor-green-deal',
        label: 'Europa',
        time: '13:08',
        title:
            "Diederik Samsom: 'Door crisis veel meer publiek geld nodig voor Green Deal'",
        printTitle: 'Door crisis veel meer publiek geld nodig voor Green Deal',
        intro:
            "De rechterhand van klimaatcommissaris Frans Timmerman waarschuwt voor een 'investeringsgat'. De private sector kan door coronacrisis veel minder bijdragen.",
    },
    {
        id: '1343823a',
        url:
            'https://fd.nl/economie-politiek/1343823/vvd-botst-met-kabinet-en-coalitie-over-steuneisen-klm',
        label: 'Politiek',
        time: '12:49',
        title: 'VVD botst met kabinet en coalitie over steuneisen KLM',
        intro:
            "Liberalen hekelen duurzaamheidsvoorwaarden. 'Het is een reddingsoperatie, geen strafexpeditie', vindt Tweede Kamerlid Roald van der Linde.",
        isRead: true,
    },
];

function Page() {
    return (
        <>
            <Explain
                anchor="horizontal3"
                cssClassNames={getCssClassNames()}
                legend="Horizontal Card 3"
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
                            <li>is read</li>
                        </ul>
                    </>
                }
            >
                <>
                    <HorizontalCard3 {...horizontalCards3[0]} />
                    <HorizontalCard3 {...horizontalCards3[1]} />
                    <HorizontalCard3 {...horizontalCards3[2]} />
                </>
            </Explain>
        </>
    );
}

export default Page;
