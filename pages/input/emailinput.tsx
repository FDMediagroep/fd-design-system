import React from 'react';
import { Explain } from '../../src/components/Explain';
import {
    TextInput,
    getCssClassNames,
    Patterns,
} from '../../src/components/input/TextInput';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';

export const metaTitle = 'E-mail input';
export const metaDescription = 'E-mail input, used in forms';

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
                legend="E-mail (mandatory)"
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
                            upon pressing enter or when trying to submit the
                            form.
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
                    id="demoEmailInput1"
                    type="email"
                    label="E-mail"
                    errorMessage="Enter correct e-mail address"
                    pattern={Patterns.EMAIL}
                    required={true}
                />
            </Explain>

            <Explain
                anchor="mandatory-description"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                previewFlexDirection="row"
                legend="E-mail (mandatory, description)"
                reactComponentName="TextInput"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of a mandatory field with a
                            description.
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
                            upon pressing enter or when trying to submit the
                            form.
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
                    id="demoEmailInput2"
                    type="email"
                    label="E-mail"
                    errorMessage="Enter correct e-mail address"
                    pattern={Patterns.EMAIL}
                    description="mandatory text area"
                    required={true}
                />
            </Explain>

            <Explain
                anchor="mandatory-description-error"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                previewFlexDirection="row"
                legend="E-mail (mandatory, description, error)"
                reactComponentName="TextInput"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of a mandatory field with a
                            description.
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
                            upon pressing enter or when trying to submit the
                            form.
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
                    id="demoEmailInput3"
                    type="email"
                    label="E-mail"
                    errorMessage="Enter correct e-mail address"
                    pattern={Patterns.EMAIL}
                    defaultValue="Wrong value"
                    description="mandatory text area"
                    required={true}
                />
            </Explain>
        </>
    );
}

export default Page;
