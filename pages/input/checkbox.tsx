import React from 'react';
import { Explain } from '../../src/components/Explain';
import {
    Checkbox,
    getCssClassNames,
} from '../../src/components/input/Checkbox';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';

export const metaTitle = 'Checkbox';
export const metaDescription = 'Checkbox, used in forms';

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
                legend="Checkbox"
                reactComponentName="Checkbox"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>This is an example of a checkbox.</p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <Checkbox
                    id="demoCheckbox"
                    label="This is a checkbox. You can turn me on or off."
                />
            </Explain>

            <Explain
                anchor="checked"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Checkbox (default: checked)"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>This is an example of a checkbox.</p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <Checkbox
                    id="demoCheckbox"
                    defaultChecked={true}
                    label="Born ready!"
                />
            </Explain>
        </>
    );
}

export default Page;
