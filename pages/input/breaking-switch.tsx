import React, { useState } from 'react';
import { Explain } from '../../src/components/Explain';
import {
    BreakingSwitch,
    getCssClassNames,
} from '../../src/components/input/BreakingSwitch';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';

export const metaTitle = 'Breaking Switch';
export const metaDescription =
    'Breaking Switch, used on the My News page to turn breaking alerts on/off';

function Page() {
    const [checked, setChecked] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setChecked(e.currentTarget.checked);
    }

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
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Breaking Switch"
                reactComponentName="BreakingSwitch"
                description={
                    <>
                        <p>Is used on the my news page.</p>
                        <p>This is an example of a Breaking Alert Switch.</p>
                    </>
                }
            >
                <BreakingSwitch checked={checked} onChange={handleChange} />
            </Explain>
        </>
    );
}

export default Page;
