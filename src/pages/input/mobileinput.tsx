import React from 'react';
import { Explain } from '../../components/Explain';
import {
    TextInput,
    getCssClassNames,
    Patterns,
} from '../../components/input/TextInput';
import Head from 'next/head';

function Page() {
    return (
        <>
            <Head>
                <title>
                    Mobile number input - Design System - Het Financieele
                    Dagblad
                </title>
                <meta
                    name="description"
                    content="Mobile number input, used in forms"
                />
            </Head>

            <Explain
                cssClassNames={getCssClassNames()}
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
                cssClassNames={getCssClassNames()}
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
