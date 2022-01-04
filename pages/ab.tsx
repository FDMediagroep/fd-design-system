import React, { useState } from 'react';
import { ABProvider, Experiment, Variant } from '../src/components/ab/ab';
import { parseCookies } from 'nookies';
import styles from './ab.module.scss';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';

interface Props {
    cookies: { [cookieName: string]: string };
}

export const metaTitle = 'A/B';
export const metaDescription = 'A/B, used to do multi-variate testing';

function Demo(props: Props) {
    const [cssVariant, setCssVariant] = useState(null);
    function handleRunExperiment(experimentName, variantName) {
        console.log(
            `Experiment [${experimentName}] change to variant [${variantName}]`
        );
        setCssVariant(variantName);
    }

    return (
        <div className={styles.ab}>
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

            <ABProvider initialState={props.cookies}>
                <Experiment
                    name="ab-headline-demo"
                    debugUriParam="debugAB=true"
                >
                    <Variant name="headline-variant-1">
                        <h1
                            className={
                                cssVariant ||
                                `css-variant-${
                                    parseInt(props.cookies['ab-color-demo']) + 1
                                }`
                            }
                        >
                            Headline variant 1
                        </h1>
                    </Variant>
                    <Variant name="headline-variant-2">
                        <h1
                            className={
                                cssVariant ||
                                `css-variant-${
                                    parseInt(props.cookies['ab-color-demo']) + 1
                                }`
                            }
                        >
                            Headline variant 2
                        </h1>
                    </Variant>
                    <Variant name="headline-variant-3">
                        <h1
                            className={
                                cssVariant ||
                                `css-variant-${
                                    parseInt(props.cookies['ab-color-demo']) + 1
                                }`
                            }
                        >
                            Headline variant 3
                        </h1>
                    </Variant>
                    <Variant name="headline-variant-4">
                        <h1
                            className={
                                cssVariant ||
                                `css-variant-${
                                    parseInt(props.cookies['ab-color-demo']) + 1
                                }`
                            }
                        >
                            Headline variant 4
                        </h1>
                    </Variant>
                </Experiment>
                <p>
                    Above headline is wrapped in an experiment. The possible
                    outcomes are the following with varying colors. Each of the
                    headlines can be any of any of the colors shown below.
                </p>
                <ul>
                    <li className="css-variant-1">Headline variant 1</li>
                    <li className="css-variant-2">Headline variant 2</li>
                    <li className="css-variant-3">Headline variant 3</li>
                    <li className="css-variant-4">Headline variant 4</li>
                </ul>
                <p>
                    Once you visit this page a variant will be chosen (
                    <strong>client-side</strong>) and the value set will be set
                    in a cookie. This makes sure that your subsequent visits
                    will show you the same outcome. If you want to re-roll the
                    outcome you can simply remove the cookie and revisit the
                    page.
                </p>
                <p>
                    You can also turn on the debug settings by adding `
                    <a href="?debugAB=true">debugAB=true</a>` as URL parameter
                    to the URL. This gives you buttons at the bottom of the page
                    which allow you to change to specific variants of the
                    experiment(s). You can also remove the cookie for an
                    experiment using the debug options (x-icon on the options
                    page).
                </p>
                <p>
                    Once the cookie has been set it is available{' '}
                    <strong>server-side</strong>. This allows us to pre-render
                    the chosen variant on the server-side. Giving the user a
                    faster first-meaningful-paint upon subsequent visits. You
                    can check this fact by opening the source of this page.
                </p>
                <Experiment
                    name="ab-color-demo"
                    debugUriParam="debugAB=true"
                    onRunExperiment={handleRunExperiment}
                >
                    <Variant name="css-variant-1" />
                    <Variant name="css-variant-2" />
                    <Variant name="css-variant-3" />
                    <Variant name="css-variant-4" />
                </Experiment>
                <h2>Usage:</h2>
                <textarea
                    readOnly={true}
                    value={`import { Experiment, Variant, ABProvider } from "@fdmg/design-system/components/ab/ab";
...
<ABProvider>
    <Experiment
        name="globally-unique-experiment-name"
        debugUriParam="ABdebug=true"
        onClick={console.log}
        onRunExperiment={console.log}
    >
        <Variant name="A" onClick={console.log}>
            <h1>Headline 1</h1>
        </Variant>
        <Variant name="B" onClick={console.log}>
            <h1>Headline 2</h1>
        </Variant>
    </Experiment>
</ABProvider>`}
                />
            </ABProvider>
        </div>
    );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    return { props: { cookies: parseCookies(ctx) } };
}

export default Demo;
