import React, { useState } from 'react';
import { Explain } from '../../src/components/Explain';
import {
    VerticalCard1,
    getCssClassNames,
} from '../../src/components/card/VerticalCard1';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';

const verticalCards1: any = [
    {
        id: '1345422',
        label: 'Arbeidsmarkt',
        title: 'Lockdown leidt tot recordstijging aantal WW-uitkeringen in april',
        imageUrl:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlS:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlM:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=351&h=234',
        imageUrlL:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        url: 'https://fd.nl/economie-politiek/1345422/lockdown-leidt-tot-recordstijging-aantal-ww-uitkeringen-in-april',
        intro: `Scherpe stijging met 17% tot 292.000 uitkeringen, blijkt uit cijfers van het UWV. Tijdens de kredietcrisis in 2008 liep de werkloosheid veel geleidelijker op.`,
        readingTime: 3,
    },
    {
        id: '1357440',
        label: 'Fiscaal',
        title: 'Kabinet verwacht bijna €1 mrd aan dividendbelasting te moeten terugbetalen',
        imageUrl:
            'https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=599&h=399',
        imageUrlS:
            'https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=599&h=399',
        imageUrlM:
            'https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=351&h=234',
        imageUrlL:
            'https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=599&h=399',
        url: 'https://fd.nl/economie-politiek/1357440/europees-arrest-dividendbelasting-kost-schatkist-910-mln',
        intro: `Nederlands bedrijf met aandelenportefeuille betaalt het gelag.`,
        readingTime: 2,
        isRead: true,
    },

    {
        id: '1345422',
        title: 'Lockdown leidt tot recordstijging aantal WW-uitkeringen in april',
        imageUrl:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlS:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlM:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=351&h=234',
        imageUrlL:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        url: 'https://fd.nl/economie-politiek/1345422/lockdown-leidt-tot-recordstijging-aantal-ww-uitkeringen-in-april',
        intro: `Scherpe stijging met 17% tot 292.000 uitkeringen, blijkt uit cijfers van het UWV. Tijdens de kredietcrisis in 2008 liep de werkloosheid veel geleidelijker op.`,
        readingTime: 3,
    },
];

export const metaTitle = 'Vertical Card 1';
export const metaDescription = 'Vertical Card 1, used on the homepage';

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
                previewClassName="grid"
                anchor="vertical1"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Vertical Card 1"
                reactComponentName="VerticalCard1"
                description={
                    <>
                        <p>Used on homepage.</p>
                        <ul>
                            <li>default</li>
                            <li>visited</li>
                            <li>without a label</li>
                        </ul>
                    </>
                }
            >
                <>
                    <VerticalCard1
                        className="xs-12 s-6 m-4 l-3"
                        {...verticalCards1[0]}
                    />
                    <VerticalCard1
                        className="xs-12 s-6 m-4 l-3"
                        {...verticalCards1[1]}
                    />
                    <VerticalCard1
                        className="xs-12 s-6 m-4 l-3"
                        {...verticalCards1[2]}
                    />
                </>
            </Explain>
        </>
    );
}

export default Page;
