import React from 'react';
import {
    ArticleLatestNews,
    getCssClassNames,
} from '../../src/components/article-latest-news/ArticleLatestNews';
import { render } from '@testing-library/react';

describe('ArticleLatestNews', () => {
    test('should render correctly', () => {
        const { getByText } = render(
            <ArticleLatestNews
                news={[
                    {
                        uuid: '1',
                        dateTime: `11:18`,
                        title: `Provinciale lijsttrekkers CDA: stop met 'drammen en dromen' over klimaat`,
                        url: `https://fd.nl/economie-politiek/1288207/provinciale-lijsttrekkers-cda-stop-met-drammen-en-dromen-over-klimaat`,
                    },
                    {
                        uuid: '2',
                        dateTime: `11:15`,
                        title: `Luchtvaartbedrijf Germania valt om`,
                        url: `https://fd.nl/ondernemen/1288215/luchtvaartbedrijf-germania-valt-om`,
                        isRead: true,
                    },
                    {
                        uuid: '3',
                        dateTime: `11:10`,
                        title: `Britse dienstensector krijgt harde tik van brexit`,
                        url: `https://fd.nl/economie-politiek/1288213/britse-dienstensector-krijgt-harde-tik-van-brexit`,
                    },
                    {
                        uuid: '4',
                        dateTime: `11:00`,
                        title: `DNB: Bovag-garantie toch geen verzekering`,
                        url: `https://fd.nl/ondernemen/1288299/dnb-bovag-garantie-toch-geen-verzekering`,
                    },
                ]}
            />
        );

        expect(
            getByText(
                `Provinciale lijsttrekkers CDA: stop met 'drammen en dromen' over klimaat`
            )
        ).toBeTruthy();
        expect(getByText('11:10')).toBeTruthy();
        expect(getByText('Laatste nieuws')).toBeTruthy();
        expect(getByText('Lees al het laatste nieuws')).toBeTruthy();
    });

    test('should render custom text correctly', () => {
        const { getByText, container } = render(
            <ArticleLatestNews
                title="Newest news"
                linkText="Read more"
                link="https://www.willemliu.nl"
                news={[
                    {
                        uuid: '1',
                        dateTime: `11:18`,
                        title: `Provinciale lijsttrekkers CDA: stop met 'drammen en dromen' over klimaat`,
                        url: `https://fd.nl/economie-politiek/1288207/provinciale-lijsttrekkers-cda-stop-met-drammen-en-dromen-over-klimaat`,
                    },
                    {
                        uuid: '2',
                        dateTime: `11:15`,
                        title: `Luchtvaartbedrijf Germania valt om`,
                        url: `https://fd.nl/ondernemen/1288215/luchtvaartbedrijf-germania-valt-om`,
                        isRead: true,
                    },
                    {
                        uuid: '3',
                        dateTime: `11:10`,
                        title: `Britse dienstensector krijgt harde tik van brexit`,
                        url: `https://fd.nl/economie-politiek/1288213/britse-dienstensector-krijgt-harde-tik-van-brexit`,
                    },
                    {
                        uuid: '4',
                        dateTime: `11:00`,
                        title: `DNB: Bovag-garantie toch geen verzekering`,
                        url: `https://fd.nl/ondernemen/1288299/dnb-bovag-garantie-toch-geen-verzekering`,
                    },
                ]}
            />
        );

        expect(
            getByText(`Britse dienstensector krijgt harde tik van brexit`)
        ).toBeTruthy();
        expect(getByText('11:00')).toBeTruthy();
        expect(getByText('Newest news')).toBeTruthy();
        expect(getByText('Read more')).toBeTruthy();
        expect(
            container.querySelector('[href="https://www.willemliu.nl"]')
        ).toBeTruthy();
    });
});
