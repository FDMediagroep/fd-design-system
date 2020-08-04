import React from 'react';
import { Explain } from '../../components/Explain';
import {
    HorizontalCard2,
    getCssClassNames,
} from '../../components/card/HorizontalCard2';

const horizontalCards2: any = [
    {
        id: '1343052',
        url: 'https://fd.nl/futures/1343052/levensgevaarlijk-libanon',
        label: 'Omgekeerde kruistocht',
        time: '13:11',
        title: 'Levensgevaarlijk Libanon',
        intro:
            'Ondanks een op het eerste gezicht veel gevaarlijker levensstijl, verschilt de levensverwachting van Libanezen nog maar drie jaar met die van ons.',
        readingTime: 3,
    },
    {
        id: '1343825',
        url:
            'https://fd.nl/economie-politiek/1343825/door-crisis-veel-meer-publiek-geld-nodig-voor-green-deal',
        label: 'Europa',
        time: '13:08',
        title:
            "Diederik Samsom: 'Door crisis veel meer publiek geld nodig voor Green Deal'",
        intro:
            "De rechterhand van klimaatcommissaris Frans Timmerman waarschuwt voor een 'investeringsgat'. De private sector kan door coronacrisis veel minder bijdragen.",
        isRead: true,
    },
    {
        id: '1343823',
        url:
            'https://fd.nl/economie-politiek/1343823/vvd-botst-met-kabinet-en-coalitie-over-steuneisen-klm',
        label: 'Politiek',
        time: '12:49',
        title: 'VVD botst met kabinet en coalitie over steuneisen KLM',
        intro:
            "Liberalen hekelen duurzaamheidsvoorwaarden. 'Het is een reddingsoperatie, geen strafexpeditie', vindt Tweede Kamerlid Roald van der Linde.",
        readingTime: 7,
    },
];

function Page() {
    return (
        <>
            <Explain
                anchor="horizontal2"
                cssClassNames={getCssClassNames()}
                legend="Horizontal Card 2"
                reactComponentName="HorizontalCard2"
                description={
                    <>
                        <p>Used on latest news, my news pages.</p>
                        <ul>
                            <li>default</li>
                            <li>is read</li>
                            <li>default</li>
                        </ul>
                    </>
                }
            >
                <>
                    <HorizontalCard2 {...horizontalCards2[0]} />
                    <HorizontalCard2 {...horizontalCards2[1]} />
                    <HorizontalCard2 {...horizontalCards2[2]} />
                </>
            </Explain>
        </>
    );
}

export default Page;
