import React from 'react';
import { Explain } from '../../components/Explain';
import Head from 'next/head';
import Image from 'next/image';
import {
    getCssClassNames,
    HorizontalCard4,
} from '../../components/card/HorizontalCard4';

const horizontalCards1: any = [
    {
        id: '1343811',
        url:
            'https://fd.nl/ondernemen/1343811/omzet-alfen-in-eerste-coronakwartaal-58',
        imageUrl:
            'https://images.fd.nl/C_yJRp_QqzybEdlK4D6SibEUxiA.jpg?rect=.0,.0,.73375,.9999999999999999&fit=crop&crop=faces&auto=format&q=45&w=300',
        title: 'Omzet Alfen stijgt in eerste coronakwartaal met 58%',
    },
];

const metaTitle = 'Horizontal Card 4';
const metaDescription = 'Horizontal Card 4, used for breaking news';

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
                anchor="horizontal4"
                cssClassNames={getCssClassNames()}
                legend="Horizontal Card 4"
                reactComponentName="HorizontalCard4"
                description={
                    <>
                        <p>Used for breaking news.</p>
                    </>
                }
            >
                <>
                    <HorizontalCard4
                        {...horizontalCards1[0]}
                        imageComponent={
                            <Image
                                src={horizontalCards1[0].imageUrl}
                                alt={horizontalCards1[0].title}
                                layout="fill"
                                objectFit="cover"
                            />
                        }
                    />
                </>
            </Explain>
        </>
    );
}

export default Page;
