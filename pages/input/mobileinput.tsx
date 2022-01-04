import React from 'react';
import { Explain } from '../../src/components/Explain';
import {
    TextInput,
    getCssClassNames,
    Patterns,
} from '../../src/components/input/TextInput';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';

export const metaTitle = 'Mobile number input';
export const metaDescription = 'Mobile number input, used in forms';

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
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                previewFlexDirection="row"
                legend="Mobile (mandatory)"
                reactComponentName="TextInput"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of a mandatory field with a
                            pattern.
                        </p>
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
                <TextInput
                    id="demoMobileInput1"
                    type="tel"
                    label="Mobile"
                    errorMessage="Enter valid mobile number (NL)"
                    minLength={10}
                    maxLength={10}
                    pattern={Patterns.MOBILE}
                    required={true}
                />
            </Explain>

            <Explain
                anchor="mandatory-default-value"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                previewFlexDirection="row"
                legend="Mobile (mandatory, default value)"
                reactComponentName="TextInput"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of a mandatory field with a
                            pattern and a default value.
                        </p>
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
                <TextInput
                    id="demoMobileInput2"
                    type="tel"
                    label="Mobile"
                    errorMessage="Enter valid mobile number (NL)"
                    minLength={10}
                    maxLength={10}
                    pattern={Patterns.MOBILE}
                    value="0612345678"
                    required={true}
                />
            </Explain>
        </>
    );
}

export default Page;
