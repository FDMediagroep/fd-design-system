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
                    <p className="body-text serif xs">body-text serif xs</p>
                    <p className="body-text serif s">body-text serif s</p>
                    <p className="body-text serif m">body-text serif m</p>
                    <p className="body-text serif l">Reserved</p>
                    <p className="body-text serif xl">Reserved</p>
                    <p className="body-text serif xxl">Reserved</p>
                </>
            </Explain>

            <Explain
                cssClassNames={['body-text']}
                legend="Body text serif bold"
                hideReact={true}
                description={
                    <>
                        <p>Example of serif bold body text.</p>
                    </>
                }
            >
                <>
                    <p className="body-text serif xs bold">
                        body-text serif xs bold
                    </p>
                    <p className="body-text serif s bold">
                        body-text serif s bold
                    </p>
                    <p className="body-text serif m bold">
                        body-text serif m bold
                    </p>
                    <p className="body-text serif l bold">Reserved</p>
                    <p className="body-text serif xl bold">Reserved</p>
                    <p className="body-text serif xxl bold">Reserved</p>
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
                    <p className="body-text sans xs">body-text sans xs</p>
                    <p className="body-text sans s">body-text sans s</p>
                    <p className="body-text sans m">body-text sans m</p>
                    <p className="body-text sans l">Reserved</p>
                    <p className="body-text sans xl">Reserved</p>
                    <p className="body-text sans xxl">Reserved</p>
                </>
            </Explain>

            <Explain
                cssClassNames={['body-text']}
                legend="Body text sans-serif bold"
                hideReact={true}
                description={
                    <>
                        <p>Example of sans-serif bold body text.</p>
                    </>
                }
            >
                <>
                    <p className="body-text sans xs bold">
                        body-text sans xs bold
                    </p>
                    <p className="body-text sans s bold">
                        body-text sans s bold
                    </p>
                    <p className="body-text sans m bold">
                        body-text sans m bold
                    </p>
                    <p className="body-text sans l bold">Reserved</p>
                    <p className="body-text sans xl bold">Reserved</p>
                    <p className="body-text sans xxl bold">Reserved</p>
                </>
            </Explain>
        </>
    );
}

export default Page;
