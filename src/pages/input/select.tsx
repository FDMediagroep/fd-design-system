import React from 'react';
import { Explain } from '../../components/Explain';
import Head from 'next/head';
import { Select, getCssClassNames } from '../../components/input/Select';

const metaTitle = 'Select drop-down';
const metaDescription = 'Select drop-down, used in forms';

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
                anchor="mandatory"
                cssClassNames={getCssClassNames()}
                previewFlexDirection="row"
                legend="Select (mandatory)"
                reactComponentName="Select"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>This is an example of a mandatory field.</p>
                        <p>
                            When the value meets the requirement of the input
                            field a green checkmark will be shown.
                        </p>
                        <p>
                            When the entered value is not empty and invalid then
                            an error message will be shown below the input.
                            (Only supported browsers)
                        </p>
                        <p>
                            For unsupported browsers the error message is shown
                            upon pressing enter or when trying to the form.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <Select
                    id="demoSelect1"
                    label="Aanhef"
                    errorMessage="Kies uw aanhef"
                    required={true}
                >
                    <option value="">-- aanhef --</option>
                    <option value="dhr">Dhr.</option>
                    <option value="mevr">Mevr.</option>
                    <option value="mw">Mw.</option>
                    <option value="drs">Drs.</option>
                    <option value="Prof">Prof.</option>
                </Select>
            </Explain>

            <Explain
                anchor="optional"
                cssClassNames={getCssClassNames()}
                previewFlexDirection="row"
                legend="Select (optional)"
                reactComponentName="Select"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>This is an example of a optional field.</p>
                        <p>Green checkmark will be shown.</p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <Select
                    id="demoSelect2"
                    label="Aanhef"
                    errorMessage="Kies uw aanhef"
                >
                    <option value="">-- aanhef --</option>
                    <option value="dhr">Dhr.</option>
                    <option value="mevr">Mevr.</option>
                    <option value="mw">Mw.</option>
                    <option value="drs">Drs.</option>
                    <option value="Prof">Prof.</option>
                </Select>
            </Explain>

            <Explain
                anchor="disabled"
                cssClassNames={getCssClassNames()}
                previewFlexDirection="row"
                legend="Select (disabled)"
                reactComponentName="Select"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>This is an example of a disabled field.</p>
                    </>
                }
            >
                <Select
                    id="demoSelect3"
                    label="Aanhef"
                    errorMessage="Kies uw aanhef"
                    disabled={true}
                    description="Disabled select field"
                >
                    <option value="">-- aanhef --</option>
                    <option value="dhr">Dhr.</option>
                    <option value="mevr">Mevr.</option>
                    <option value="mw">Mw.</option>
                    <option value="drs">Drs.</option>
                    <option value="Prof">Prof.</option>
                </Select>
            </Explain>
        </>
    );
}

export default Page;
