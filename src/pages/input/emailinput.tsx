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
                    E-mail input - Design System - Het Financieele Dagblad
                </title>
                <meta
                    name="description"
                    content="E-mail input, used in forms"
                />
            </Head>

            <Explain
                cssClassNames={getCssClassNames()}
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
                cssClassNames={getCssClassNames()}
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
                    description="optional text area"
                    required={true}
                />
            </Explain>
        </>
    );
}

export default Page;
