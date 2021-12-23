import React, { useState } from 'react';
import { Explain } from '../../components/Explain';
import Head from 'next/head';
import { globalCssClassNames } from '../../utils/globalCssClassNames';
import { Dropdown, getCssClassNames } from '../../components/button/Dropdown';

export const metaTitle = 'Dropdown';
export const metaDescription = 'Dropdown, used to show multiple choices';

function Page() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);

    const handleToggle1 = () => {
        setExpanded1((isExpanded) => !isExpanded);
    };

    const handleToggle2 = () => {
        setExpanded2((isExpanded) => !isExpanded);
    };

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
                legend="Dropdown (default)"
                reactComponentName="Dropdown"
                description={
                    <>
                        <p>Used for selecting from a list of choices.</p>
                    </>
                }
            >
                <>
                    <Dropdown
                        id="demoDropdownS"
                        expanded={expanded1}
                        onClick={handleToggle1}
                    >
                        Dropdown (small)
                    </Dropdown>
                </>
            </Explain>

            <Explain
                anchor="m"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Dropdown (M)"
                reactComponentName="Dropdown"
                description={
                    <>
                        <p>Used for selecting from a list of choices.</p>
                    </>
                }
            >
                <>
                    <Dropdown
                        id="demoDropdownM"
                        expanded={expanded2}
                        size="m"
                        onClick={handleToggle2}
                    >
                        Dropdown (medium)
                    </Dropdown>
                </>
            </Explain>
        </>
    );
}

export default Page;
