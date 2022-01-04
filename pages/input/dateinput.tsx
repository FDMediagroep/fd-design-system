import React from 'react';
import { Explain } from '../../src/components/Explain';
import {
    TextInput,
    getCssClassNames,
} from '../../src/components/input/TextInput';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';

export const metaTitle = 'Date input';
export const metaDescription = 'Date input, used in forms';

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
                legend="Date (mandatory)"
                reactComponentName="TextInput"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>This is an example of a mandatory date field.</p>
                        <p>
                            When the value meets the requirement of the input
                            field a green checkmark will be shown.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                        <p>
                            However, not all browsers support the HTML5
                            input[type=date] field. Older browsers like IE will
                            not show a datepicker.
                        </p>
                        <p>
                            In order to have a date picker show for such
                            browsers you'll need a Polyfill.
                        </p>
                    </>
                }
            >
                <TextInput
                    id="demoDateInput1"
                    type="date"
                    label="Birthday"
                    errorMessage="Please pick a date"
                    required={true}
                />
            </Explain>

            <Explain
                anchor="description"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                previewFlexDirection="row"
                legend="Date (description)"
                reactComponentName="TextInput"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>This is an example of an optional date field.</p>
                        <p>
                            Checkmark will be shown upon focus even when no
                            value is entered. Border is green by default.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                        <p>
                            However, not all browsers support the HTML5
                            input[type=date] field. Older browsers like IE will
                            not show a datepicker.
                        </p>
                        <p>
                            In order to have a date picker show for such
                            browsers you'll need a Polyfill.
                        </p>
                    </>
                }
            >
                <TextInput
                    id="demoDateInput2"
                    type="date"
                    label="Marriage date"
                    errorMessage="Please pick a date"
                    description="optional text area"
                />
            </Explain>

            <Explain
                anchor="yyyy-mm"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                previewFlexDirection="row"
                legend="Date YYYY-MM (mandatory)"
                reactComponentName="TextInput"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of a mandatory year-month field.
                        </p>
                        <p>
                            When the value meets the requirement of the input
                            field a green checkmark will be shown.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                        <p>
                            However, not all browsers support the HTML5
                            input[type=date] field. Older browsers like IE will
                            not show a datepicker.
                        </p>
                        <p>
                            In order to have a date picker show for such
                            browsers you'll need a Polyfill.
                        </p>
                    </>
                }
            >
                <TextInput
                    id="demoYearMonthInput1"
                    type="month"
                    label="Actief sinds maand/jaar"
                    errorMessage="Please pick a date"
                    required={true}
                />
            </Explain>
        </>
    );
}

export default Page;
