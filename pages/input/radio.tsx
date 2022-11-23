import React from 'react';
import { Explain } from '../../src/components/Explain';
import { Radio, getCssClassNames } from '../../src/components/input/Radio';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';

export const metaTitle = 'Radio input';
export const metaDescription = 'Radio input, used in forms';

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
                anchor="default"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
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
                anchor="checked"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
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
