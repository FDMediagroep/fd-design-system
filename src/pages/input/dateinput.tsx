import React from 'react';
import { Explain } from '../../components/Explain';
import { TextInput, getCssClassNames } from '../../components/input/TextInput';

function Page() {
    return (
        <>
            <Explain
                cssClassNames={getCssClassNames()}
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
                cssClassNames={getCssClassNames()}
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
                cssClassNames={getCssClassNames()}
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
