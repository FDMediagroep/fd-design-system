import React from 'react';
import { Explain } from '../../components/Explain';
import { TextArea, getCssClassNames } from '../../components/input/TextArea';
import Head from 'next/head';

const metaTitle = 'Text area';
const metaDescription = 'Text area, used in forms';

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
                previewFlexDirection="column"
                legend="TextArea (mandatory)"
                reactComponentName="TextArea"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>This is an example of a mandatory text area.</p>
                        <p>
                            When the value meets the requirement of the text
                            area a green checkmark will be shown.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            text area along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <TextArea
                    id="demoTextArea1"
                    label="Biography"
                    required={true}
                />
            </Explain>

            <Explain
                anchor="description"
                cssClassNames={getCssClassNames()}
                previewFlexDirection="column"
                legend="TextArea (description)"
                reactComponentName="TextArea"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of an optional text area with a
                            description.
                        </p>
                        <p>
                            Checkmark will be shown upon focus even when no
                            value is entered. Border is green by default.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            text area along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <TextArea
                    id="demoTextArea2"
                    label="Biography"
                    description="optional text area"
                />
            </Explain>

            <Explain
                anchor="mandatory-placeholder"
                cssClassNames={getCssClassNames()}
                previewFlexDirection="column"
                legend="TextArea (mandatory, placeholder)"
                reactComponentName="TextArea"
                description={
                    <>
                        <p>Can be used in forms.</p>

                        <p>
                            This is an example of a mandatory text area with a
                            placeholder.
                        </p>

                        <p>
                            When the value meets the requirement of the text
                            area a green checkmark will be shown.
                        </p>

                        <p>
                            Only the HTML and CSS are necessary to create the
                            text area along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <TextArea
                    id="demoTextArea3"
                    label="Biography"
                    placeholder="This is a placeholder text"
                    required={true}
                />
            </Explain>

            <Explain
                anchor="description-placeholder"
                cssClassNames={getCssClassNames()}
                previewFlexDirection="column"
                legend="TextArea (description, placeholder)"
                reactComponentName="TextArea"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of an optional text area with a
                            description and a placeholder text.
                        </p>
                        <p>
                            Checkmark will be shown upon focus even when no
                            value is entered. Border is green by default.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            text area along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <TextArea
                    id="demoTextArea4"
                    label="Biography"
                    description="optional text area"
                    placeholder="This is a placeholder text"
                />
            </Explain>

            <Explain
                anchor="mandatory-default-value"
                cssClassNames={getCssClassNames()}
                previewFlexDirection="column"
                legend="TextArea (mandatory, default value)"
                reactComponentName="TextArea"
                description={
                    <>
                        <p>Can be used in forms.</p>

                        <p>
                            This is an example of a mandatory text area with a
                            default value.
                        </p>

                        <p>
                            When the value meets the requirement of the text
                            area a green checkmark will be shown.
                        </p>

                        <p>
                            Only the HTML and CSS are necessary to create the
                            text area along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <TextArea
                    id="demoTextArea5"
                    label="Biography"
                    value="Default value"
                    required={true}
                />
            </Explain>

            <Explain
                anchor="default-value"
                cssClassNames={getCssClassNames()}
                previewFlexDirection="column"
                legend="TextArea (default value)"
                reactComponentName="TextArea"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of an optional text area with a
                            default value.
                        </p>
                        <p>
                            When the value meets the requirement of the text
                            area a green checkmark will be shown.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            text area along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <TextArea
                    id="demoTextArea6"
                    label="Biography"
                    value="Default value"
                    description="optional text area"
                />
            </Explain>

            <Explain
                anchor="max-words"
                cssClassNames={getCssClassNames()}
                previewFlexDirection="column"
                legend="TextArea (max words)"
                reactComponentName="TextArea"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of an optional text area with a
                            maximum number of words allowed.
                        </p>
                        <p>
                            When the value meets the requirement of the text
                            area a green checkmark will be shown.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            text area along with all the interactions.{' '}
                            <b>
                                JavaScript required for setting
                                `data-show-error='true'` attribute.
                            </b>
                        </p>
                    </>
                }
            >
                <TextArea
                    id="demoTextArea7"
                    label="Biography"
                    value="This is a biography which only allows a maximum of 10 words"
                    maxWords={10}
                />
            </Explain>

            <Explain
                anchor="disabled"
                cssClassNames={getCssClassNames()}
                previewFlexDirection="column"
                legend="TextArea (disabled)"
                reactComponentName="TextArea"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>This is an example of a disabled text area.</p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            text area along with all the interactions.
                        </p>
                    </>
                }
            >
                <TextArea
                    disabled={true}
                    id="demoTextArea8"
                    label="Biography"
                    value="This text area has been disabled"
                    description="disabled text area"
                />
            </Explain>

            <Explain
                anchor="localStorage"
                cssClassNames={getCssClassNames()}
                previewFlexDirection="column"
                legend="TextArea (localStorage)"
                reactComponentName="TextArea"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of a text area whose value is
                            kept in localStorage for subsequent visits.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            text area along with all the interactions.
                        </p>
                    </>
                }
            >
                <TextArea
                    id="demoTextArea9"
                    localStorage={true}
                    label="Biography"
                    description="Entered value will remain upon revisits"
                />
            </Explain>
        </>
    );
}

export default Page;
