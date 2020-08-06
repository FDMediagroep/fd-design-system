import React from 'react';
import { Explain } from '../../components/Explain';
import {
    HorizontalCard1,
    getCssClassNames,
} from '../../components/card/HorizontalCard1';
import Head from 'next/head';

const horizontalCards1: any = [
    {
        id: '1343811',
        url:
            'https://fd.nl/ondernemen/1343811/omzet-alfen-in-eerste-coronakwartaal-58',
        imageUrl:
            'https://images.fd.nl/C_yJRp_QqzybEdlK4D6SibEUxiA.jpg?rect=.0,.0,.73375,.9999999999999999&fit=crop&crop=faces&auto=format&q=45&w=300',
        label: 'Energie',
        time: '08:10',
        title: 'Omzet Alfen stijgt in eerste coronakwartaal met 58%',
        readingTime: 3,
    },
    {
        id: '1343728',
        url:
            'https://fd.nl/ondernemen/1343728/staalfabrikant-aperam-verwacht-forse-daling-verkopen',
        imageUrl:
            'https://images.fd.nl/e1WriKURP_DsmApltLu08mPgcQ0.jpg?rect=.2175,.0,.665,.9999999999999999&fit=crop&crop=faces&auto=format&q=45&w=300',
        label: 'Industrie',
        time: '07:49',
        title: 'Staalfabrikant Aperam verwacht forse daling verkopen',
        updated: true,
        readingTime: 5,
    },
    {
        id: '1343728',
        url:
            'https://fd.nl/economie-politiek/1343620/leraren-hebben-straks-geen-klassen-van-32-leerlingen-meer',
        imageUrl:
            'https://images.fd.nl/-wbqLswT8IrCcrXMrWXEnzrd3lg.jpg?fit=crop&crop=faces&auto=format&q=45&w=300',
        label: 'Coronakronieken',
        time: '07:18',
        title: "'Leraren hebben straks geen klassen van 32 leerlingen meer'",
        isRead: true,
        readingTime: 7,
    },
    {
        id: '1343780',
        url:
            'https://fd.nl/economie-politiek/1343780/maak-meer-gebruik-van-het-placebo-effect-in-het-coronabeleid',
        imageUrl:
            'https://images.fd.nl/tB2lwMoC_9MPDyo28ovDjM-YPz8.jpg?fit=crop&crop=faces&auto=format&q=45&w=300',
        label: 'Coronaspreekuur',
        time: '06:00',
        title: "'Maak meer gebruik van het placebo-effect in het coronabeleid'",
        variant: 'variant-1',
    },
];

const metaTitle = 'Horizontal Card 1';
const metaDescription = 'Horizontal Card 1, used on category, dossier pages';

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
                anchor="horizontal1"
                cssClassNames={getCssClassNames()}
                legend="Horizontal Card 1"
                reactComponentName="HorizontalCard1"
                description={
                    <>
                        <p>Used on category, dossier pages.</p>
                        <ul>
                            <li>default</li>
                            <li>updated</li>
                            <li>is read</li>
                            <li>variant-1</li>
                        </ul>
                    </>
                }
            >
                <>
                    <HorizontalCard1 {...horizontalCards1[0]} />
                    <HorizontalCard1 {...horizontalCards1[1]} />
                    <HorizontalCard1 {...horizontalCards1[2]} />
                    <HorizontalCard1 {...horizontalCards1[3]} />
                </>
            </Explain>
        </>
    );
}

export default Page;
