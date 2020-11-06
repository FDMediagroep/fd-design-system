import React from 'react';
import { Explain } from '../components/Explain';
import Head from 'next/head';

const metaTitle = 'Typograhpy';
const metaDescription =
    'Typograhpy, examples of all supported types of typography';

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
                cssClassNames={['heading']}
                legend="Heading serif"
                hideReact={true}
                description={
                    <>
                        <p>Example of serif headings.</p>
                    </>
                }
            >
                <>
                    <h1 className="heading serif xs">Heading xs</h1>
                    <h1 className="heading serif s">Heading s</h1>
                    <h1 className="heading serif m">Heading m</h1>
                    <h1 className="heading serif l">Heading l</h1>
                    <h1 className="heading serif xl">Heading xl</h1>
                    <h1 className="heading serif xxl">Heading xxl</h1>
                </>
            </Explain>

            <Explain
                cssClassNames={['heading']}
                legend="Heading sans-serif"
                hideReact={true}
                description={
                    <>
                        <p>Example of sans-serif headings.</p>
                    </>
                }
            >
                <>
                    <h1 className="heading sans xs">Heading xs</h1>
                    <h1 className="heading sans s">Heading s</h1>
                    <h1 className="heading sans m">Heading m</h1>
                    <h1 className="heading sans l">Heading l</h1>
                    <h1 className="heading sans xl">Heading xl</h1>
                    <h1 className="heading sans xxl">Heading xxl</h1>
                </>
            </Explain>

            <Explain
                cssClassNames={['body-text']}
                legend="Body text serif"
                hideReact={true}
                description={
                    <>
                        <p>Example of serif body text.</p>
                    </>
                }
            >
                <>
                    <h1 className="body-text serif xs">Body xs</h1>
                    <h1 className="body-text serif s">Body s</h1>
                    <h1 className="body-text serif m">Body m</h1>
                    <h1 className="body-text serif l">Body l</h1>
                    <h1 className="body-text serif xl">Body xl</h1>
                    <h1 className="body-text serif xxl">Body xxl</h1>
                </>
            </Explain>

            <Explain
                cssClassNames={['body-text']}
                legend="Body text sans-serif"
                hideReact={true}
                description={
                    <>
                        <p>Example of sans-serif body text.</p>
                    </>
                }
            >
                <>
                    <h1 className="body-text sans xs">Body xs</h1>
                    <h1 className="body-text sans s">Body s</h1>
                    <h1 className="body-text sans m">Body m</h1>
                    <h1 className="body-text sans l">Body l</h1>
                    <h1 className="body-text sans xl">Body xl</h1>
                    <h1 className="body-text sans xxl">Body xxl</h1>
                </>
            </Explain>
        </>
    );
}

export default Page;
