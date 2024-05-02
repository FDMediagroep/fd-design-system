import React from 'react';
import { Explain } from '../../src/components/Explain';
import {
    HorizontalCard3,
    getCssClassNames,
} from '../../src/components/card/HorizontalCard3';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';
import * as styles from './cards.module.scss';
import { FdImgix } from '../../src/components/utils/image/FdImgix';

const horizontalCards3: any = [
    {
        id: '1343811',
        url: 'https://fd.nl/podcasts/fd-achter-gesloten-deuren',
        imageUrl:
            'https://images.fd.nl/TH70Ic_7GBPn0vcNxQLf9Q9M4j8.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=300',
        title: 'Achter Gesloten Deuren: wat is er gebeurd met Gerard Sanderink?',
    },
    {
        id: '1343728',
        url: 'https://fd.nl/podcasts/fd-dagkoers',
        imageUrl:
            'https://images.fd.nl/q5j62hGBLpQWOmFeNrlHp5bRT6E.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=300',
        title: 'Dagkoers: in een kwartier op de hoogte van wat er speelt in de wereld van het FD',
    },
    {
        id: '1343728',
        url: 'https://fd.nl/podcasts/fd-de-week-voorbij',
        imageUrl:
            'https://images.fd.nl/Bcf9iiBg8tL9Qq1_gVHwDFGdFIg.jpg?rect=.0775%2c.0%2c.845%2c.9999999999999999&fit=crop&crop=faces&auto=format,compress&q=45&w=300',
        title: 'De week voorbij: achtergronden bij het nieuws van het FD',
        isRead: true,
    },
    {
        id: '1334870',
        url: 'https://fd.nl/podcasts/de-fd-gazellen-podcast',
        title: 'FD Gazellen Podcast: verhalen over de snelst groeiende bedrijven van Nederland',
    },
];

export const metaTitle = 'Horizontal Card 3';
export const metaDescription = 'Horizontal Card 3, used on the homepage';

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
                previewClassName={`${styles['horizontalGrid']} grid`}
                anchor="horizontal3"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Horizontal Card 3"
                reactComponentName="HorizontalCard3"
                description={
                    <>
                        <p>Used for podcasts on the homepage</p>
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
                    <HorizontalCard3
                        className="xs-12"
                        {...horizontalCards3[0]}
                        imageComponent={
                            <FdImgix
                                src={horizontalCards3[0].imageUrl}
                                imageSizes={{
                                    widthS: '80px',
                                    widthM: '96px',
                                    widthL: '120px',
                                }}
                            />
                        }
                    />
                    <HorizontalCard3
                        className="xs-12"
                        {...horizontalCards3[1]}
                        imageComponent={
                            <FdImgix
                                src={horizontalCards3[1].imageUrl}
                                imageSizes={{
                                    widthS: '80px',
                                    widthM: '96px',
                                    widthL: '120px',
                                }}
                            />
                        }
                    />
                    <HorizontalCard3
                        className="xs-12"
                        {...horizontalCards3[2]}
                        imageComponent={
                            <FdImgix
                                src={horizontalCards3[2].imageUrl}
                                imageSizes={{
                                    widthS: '80px',
                                    widthM: '96px',
                                    widthL: '120px',
                                }}
                            />
                        }
                    />
                    <HorizontalCard3
                        className="xs-12"
                        {...horizontalCards3[3]}
                    />
                    <div
                        className={`${styles['horizontal3-grid']} ${styles['autoMinHeight']} grid m__mt+3 xs-12 s-12 m-12 l-12`}
                    >
                        <div className={` xs-12 s-6 m-6 l-6`}>
                            <HorizontalCard3
                                {...horizontalCards3[0]}
                                imageComponent={
                                    <FdImgix
                                        src={horizontalCards3[0].imageUrl}
                                        imageSizes={{
                                            widthS: '80px',
                                            widthM: '96px',
                                            widthL: '120px',
                                        }}
                                    />
                                }
                            />
                        </div>
                        <div className={`xs-12 s-6 m-6 l-6`}>
                            <HorizontalCard3
                                {...horizontalCards3[1]}
                                imageComponent={
                                    <FdImgix
                                        src={horizontalCards3[1].imageUrl}
                                        imageSizes={{
                                            widthS: '80px',
                                            widthM: '96px',
                                            widthL: '120px',
                                        }}
                                    />
                                }
                            />
                        </div>
                        <div className={` xs-12 s-6 m-6 l-6`}>
                            <HorizontalCard3
                                {...horizontalCards3[2]}
                                imageComponent={
                                    <FdImgix
                                        src={horizontalCards3[2].imageUrl}
                                        imageSizes={{
                                            widthS: '80px',
                                            widthM: '96px',
                                            widthL: '120px',
                                        }}
                                    />
                                }
                            />
                        </div>
                        <div className={` xs-12 s-6 m-6 l-6`}>
                            <HorizontalCard3 {...horizontalCards3[3]} />
                        </div>
                    </div>
                </>
            </Explain>
        </>
    );
}

export default Page;
