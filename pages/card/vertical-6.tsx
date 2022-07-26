import React, { useState } from 'react';
import { Explain } from '../../src/components/Explain';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';
import {
    getCssClassNames,
    VerticalCard6,
} from '../../src/components/card/VerticalCard6';
import { FdImgix } from '../../src/components/utils/image/FdImgix';

const verticalCards6: any = [
    {
        id: '1345422',
        label: 'Arbeidsmarkt',
        title: 'Lockdown leidt tot recordstijging aantal WW-uitkeringen in april',
        imageUrl:
            'https://fd-internal-development.imgix.net/XSsvNsfpytwq-OQdMRmsCm7J1i8.jpg?auto=format',
        url: 'https://fd.nl/economie-politiek/1345422/lockdown-leidt-tot-recordstijging-aantal-ww-uitkeringen-in-april',
        readingTime: 11,
    },
];

export const metaTitle = 'Vertical Card 6';
export const metaDescription =
    'Vertical (special) Card 6, used on the homepage';

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
                anchor="vertical6"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Vertical Card 6"
                reactComponentName="VerticalCard6"
                description={
                    <>
                        <p>Vertical card used on the homepage</p>
                    </>
                }
            >
                <>
                    <VerticalCard6
                        className="xs-12 s-6 m-4 l-3"
                        imageComponent={
                            <FdImgix
                                src={verticalCards6[0].imageUrl}
                                imageSizes={{
                                    widthS: '300px',
                                    widthM: '351px',
                                    widthL: '599px',
                                }}
                            />
                        }
                        {...verticalCards6[0]}
                    />
                </>
            </Explain>
        </>
    );
}

export default Page;
