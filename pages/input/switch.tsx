import React from 'react';
import { Explain } from '../../src/components/Explain';
import { Switch, getCssClassNames } from '../../src/components/input/Switch';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';

export const metaTitle = 'Switch';
export const metaDescription =
    'Switch, used in forms. Functions like a checkbox but differs visually';

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
                anchor="default"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Switch"
                reactComponentName="Switch"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>This is an example of a switch.</p>
                        <p>
                            Although visually different its functionality is the
                            same as a checkbox.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <Switch
                    id="demoSwitch"
                    label="This is a switch. You can turn me on or off."
                />
            </Explain>

            <Explain
                anchor="switch-default-checked"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Switch (default: checked)"
                reactComponentName="Switch"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>This is an example of a switch.</p>
                        <p>
                            Although visually different its functionality is the
                            same as a checkbox.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <Switch
                    id="demoSwitch"
                    defaultChecked={true}
                    label="Born ready!"
                />
            </Explain>
        </>
    );
}

export default Page;
