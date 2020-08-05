import React from 'react';
import { Explain } from '../../components/Explain';
import { Switch, getCssClassNames } from '../../components/input/Switch';
import Head from 'next/head';

function Page() {
    return (
        <>
            <Head>
                <title>Switch - Design System - Het Financieele Dagblad</title>
                <meta
                    name="description"
                    content="Switch, used in forms. Functions like a checkbox but differs visually"
                />
            </Head>

            <Explain
                cssClassNames={getCssClassNames()}
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
                cssClassNames={getCssClassNames()}
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
