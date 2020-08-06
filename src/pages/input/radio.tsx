import React from 'react';
import { Explain } from '../../components/Explain';
import { Radio, getCssClassNames } from '../../components/input/Radio';
import Head from 'next/head';

const metaTitle = 'Radio input';
const metaDescription = 'Radio input, used in forms';

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
                cssClassNames={getCssClassNames()}
                previewFlexDirection="row"
                legend="Radio"
                reactComponentName="Radio"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of a radio button group without
                            initial selection. Radio buttons gives the user
                            options of which only one can be chosen.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <>
                    <Radio id="bluePill" name="pills" label="Blue pill" />
                    <Radio id="redPill" name="pills" label="Red pill" />
                </>
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                previewFlexDirection="row"
                legend="Radio (default: checked)"
                reactComponentName="Radio"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of a radio button group. Radio
                            buttons gives the user options of which only one can
                            be chosen.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <>
                    <Radio id="left" name="directions" label="Left" />
                    <Radio
                        id="redPill"
                        name="directions"
                        label="Right"
                        defaultChecked={true}
                    />
                </>
            </Explain>
        </>
    );
}

export default Page;
