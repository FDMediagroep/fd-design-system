import React from 'react';
import { Explain } from '../../src/components/Explain';
import {
    HorizontalCard1,
    getCssClassNames,
} from '../../src/components/card/HorizontalCard1';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';
import styles from './cards.module.scss';
import { FdImgix } from '../../src/components/utils/image/FdImgix';

const horizontalCards1: any = [
    {
        id: '1343811',
        url: 'https://fd.nl/ondernemen/1343811/omzet-alfen-in-eerste-coronakwartaal-58',
        imageUrl:
            'https://images.fd.nl/C_yJRp_QqzybEdlK4D6SibEUxiA.jpg?rect=.0,.0,.73375,.9999999999999999&fit=crop&crop=faces&auto=format&q=45&w=300',
        label: 'Energie',
        time: '08:10',
        title: 'Omzet Alfen stijgt in eerste coronakwartaal met 58%',
        readingTime: 3,
    },
    {
        id: '1343728',
        url: 'https://fd.nl/economie-politiek/1343620/leraren-hebben-straks-geen-klassen-van-32-leerlingen-meer',
        imageUrl:
            'https://images.fd.nl/-wbqLswT8IrCcrXMrWXEnzrd3lg.jpg?fit=crop&crop=faces&auto=format&q=45&w=300',
        time: '07:18',
        title: "'Leraren hebben straks geen klassen van 32 leerlingen meer'",
        readingTime: 7,
    },
    {
        id: '1343728',
        url: 'https://fd.nl/economie-politiek/1343620/leraren-hebben-straks-geen-klassen-van-32-leerlingen-meer',
        imageUrl:
            'https://images.fd.nl/-wbqLswT8IrCcrXMrWXEnzrd3lg.jpg?fit=crop&crop=faces&auto=format&q=45&w=300',
        label: 'Coronakronieken',
        time: '07:18',
        title: "'Leraren hebben straks geen klassen van 32 leerlingen meer'",
        isRead: true,
        readingTime: 7,
    },
    {
        id: '1334870',
        url: 'http://local.fd.nl:8888/opinie/1334870/een-europese-rente',
        imageUrl:
            'https://fd-external-development.imgix.net/bd426d8e140cd2b07ee8e4ee8e4c70e4bc9dd3b4.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=300&h=300',
        label: 'Kleintje groot',
        time: '1 aug',
        title: 'Eén Europese rente',
        variant: 'variant-1',
    },
    {
        id: '1353344',
        url: 'https://fd.nl/economie-politiek/1353344/huiseigenaren-minder-bezorgd-over-kanteling-op-woningmarkt',
        label: 'Woningmarkt',
        time: '6 aug',
        title: 'Huiseigenaren minder bezorgd over kanteling op woningmarkt',
    },
    {
        id: '1343811',
        url: 'https://fd.nl/ondernemen/1343811/omzet-alfen-in-eerste-coronakwartaal-58',
        imageUrl:
            'https://images.fd.nl/C_yJRp_QqzybEdlK4D6SibEUxiA.jpg?rect=.0,.0,.73375,.9999999999999999&fit=crop&crop=faces&auto=format&q=45&w=300',
        label: 'Energie',
        title: 'Omzet Alfen stijgt in eerste coronakwartaal met 58%',
        readingTime: 3,
    },
];

export const metaTitle = 'Horizontal Card 1';
export const metaDescription =
    'Horizontal Card 1, used on category, dossier pages';

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
                previewClassName={`${styles.horizontalGrid} grid`}
                anchor="horizontal1"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Horizontal Card 1"
                reactComponentName="HorizontalCard1"
                description={
                    <>
                        <p>Used on category, dossier pages.</p>
                        <ul>
                            <li>default</li>
                            <li>without a label</li>
                            <li>visited</li>
                            <li>no image</li>
                        </ul>
                    </>
                }
            >
                <>
                    <HorizontalCard1
                        className="xs-12"
                        {...horizontalCards1[0]}
                        imageComponent={
                            <FdImgix
                                src={horizontalCards1[0].imageUrl}
                                imageSizes={{ widthS: '300px' }}
                            />
                        }
                    />
                    <HorizontalCard1
                        className="xs-12"
                        {...horizontalCards1[1]}
                        imageComponent={
                            <FdImgix
                                src={horizontalCards1[1].imageUrl}
                                imageSizes={{ widthS: '300px' }}
                            />
                        }
                    />
                    <HorizontalCard1
                        className="xs-12"
                        {...horizontalCards1[2]}
                        imageComponent={
                            <FdImgix
                                src={horizontalCards1[2].imageUrl}
                                imageSizes={{ widthS: '300px' }}
                            />
                        }
                    />
                    <HorizontalCard1
                        className="xs-12"
                        {...horizontalCards1[3]}
                    />
                </>
            </Explain>
        </>
    );
}

export default Page;
