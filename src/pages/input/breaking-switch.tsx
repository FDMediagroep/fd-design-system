import React, { useState } from 'react';
import { Explain } from '../../components/Explain';
import {
    BreakingSwitch,
    getCssClassNames,
} from '../../components/input/BreakingSwitch';
import Head from 'next/head';

function Page() {
    const [checked, setChecked] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setChecked(e.currentTarget.checked);
    }

    return (
        <>
            <Head>
                <title>
                    Breaking Switch - Design System - Het Financieele Dagblad
                </title>
                <meta
                    name="description"
                    content="Breaking Switch, used on the My News page to turn breaking alerts on/off"
                />
            </Head>

            <Explain
                cssClassNames={getCssClassNames()}
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
