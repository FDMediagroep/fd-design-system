import React from 'react';
import { Explain } from '../../components/Explain';
import { TextInput, getCssClassNames } from '../../components/input/TextInput';

function Page() {
    return (
        <>
            <Explain
                cssClassNames={getCssClassNames()}
                previewFlexDirection="row"
                legend="Text (mandatory)"
                reactComponentName="TextInput"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>This is an example of a mandatory field.</p>
                        <p>
                            When the value meets the requirement of the input
                            field a green checkmark will be shown.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <TextInput id="demoTextInput1" label="Name" required={true} />
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                previewFlexDirection="row"
                legend="Text (description)"
                reactComponentName="TextInput"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of an optional field with a
                            description.
                        </p>
                        <p>
                            Checkmark will be shown upon focus even when no
                            value is entered. Border is green by default.
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
                    id="demoTextInput2"
                    label="Name"
                    description="optional text area"
                />
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                previewFlexDirection="row"
                legend="Text (description, placeholder)"
                reactComponentName="TextInput"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of an optional field with a
                            description and a placeholder text.
                        </p>
                        <p>
                            Checkmark will be shown upon focus even when no
                            value is entered. Border is green by default.
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
                    id="demoTextInput3"
                    label="Name"
                    description="Optional field with placeholder"
                    placeholder="Willem Liu"
                />
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                previewFlexDirection="row"
                legend="Number (description, default value)"
                reactComponentName="TextInput"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of an optional field with a
                            description and a placeholder text.
                        </p>
                        <p>
                            Checkmark will be shown upon focus even when no
                            value is entered. Border is green by default.
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
                    id="demoTextInput4"
                    label="Age"
                    type="number"
                    description="Optional field with placeholder"
                    defaultValue={999}
                    required={true}
                />
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                previewFlexDirection="row"
                legend="Number (description, default value, hidden spinners)"
                reactComponentName="TextInput"
                description={
                    <>
                        <p>
                            Can be used in forms. The number spinners are
                            hidden.
                        </p>
                        <p>
                            This is an example of an optional field with a
                            description and a placeholder text.
                        </p>
                        <p>
                            Checkmark will be shown upon focus even when no
                            value is entered. Border is green by default.
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
                    id="demoTextInput5"
                    label="Age"
                    type="number"
                    hideNumberSpinners={true}
                    description="Optional field with placeholder"
                    defaultValue={999}
                    required={true}
                />
            </Explain>
        </>
    );
}

export default Page;
