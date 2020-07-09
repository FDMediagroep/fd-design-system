import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import {
    ArticleLatestNews,
    getCssClassNames,
} from '../components/article-latest-news/ArticleLatestNews';
import PageStore from '../stores/PageStore';

const initialProps = {
    news: [
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
    ],
};

function Page() {
    /**
     * Use article background.
     */
    useEffect(() => {
        PageStore.setPageType('article');

        return () => {
            PageStore.setPageType('overview');
        };
    }, []);

    return (
        <>
            <Explain
                cssClassNames={getCssClassNames()}
                legend="Latest news"
                description={
                    <>
                        <p>Used to show the latest news on article page.</p>
                        <p>This element is used to display latest news.</p>
                    </>
                }
            >
                <ArticleLatestNews {...initialProps} />
            </Explain>
        </>
    );
}

export default Page;
