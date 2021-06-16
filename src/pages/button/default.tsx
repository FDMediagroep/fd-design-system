import React from 'react';
import { Explain } from '../../components/Explain';
import { Button, getCssClassNames } from '../../components/button/Button';
import Head from 'next/head';
import { EnvelopeIcon } from '../../design-tokens/icons';
import styles from './buttons.module.scss';

export const metaTitle = 'Neutral Button';
export const metaDescription =
    'Neutral button, used to interact with the content: comment, share and vote';

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
                previewClassName={styles.buttons}
                anchor="default"
                cssClassNames={getCssClassNames()}
                legend="Button Neutral (default)"
                reactComponentName="Button"
                description={
                    <>
                        <p>
                            Used for secondary or regular non-mandatory actions.
                        </p>
                        <p>Example use:</p>
                        <ul>
                            <li>Save actions on form edits</li>
                            <li>Close modal window</li>
                        </ul>
                    </>
                }
            >
                <>
                    <Button id="demoButtonS">Button (small)</Button>
                    <Button id="demoButtonSIcon">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: EnvelopeIcon as any,
                            }}
                        />
                        <span>Icon (small)</span>
                    </Button>

                    <Button id="demoButtonSDisabled" disabled="disabled">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: EnvelopeIcon as any,
                            }}
                        />
                        <span>Disabled (small)</span>
                    </Button>
                </>
            </Explain>

            <Explain
                previewClassName={styles.buttons}
                anchor="m"
                cssClassNames={getCssClassNames()}
                legend="Button Neutral (M)"
                reactComponentName="Button"
                description={
                    <>
                        <p>
                            Used for secondary or regular non-mandatory actions.
                        </p>
                        <p>Example use:</p>
                        <ul>
                            <li>Save actions on form edits</li>
                            <li>Close modal window</li>
                        </ul>
                    </>
                }
            >
                <>
                    <Button id="demoButtonM" size="m">
                        Button (medium)
                    </Button>
                    <Button id="demoButtonMIcon" size="m">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: EnvelopeIcon as any,
                            }}
                        />
                        <span>Icon (medium)</span>
                    </Button>

                    <Button
                        id="demoButtonMDisabled"
                        disabled="disabled"
                        size="m"
                    >
                        <span
                            dangerouslySetInnerHTML={{
                                __html: EnvelopeIcon as any,
                            }}
                        />
                        <span>Disabled (medium)</span>
                    </Button>
                </>
            </Explain>
        </>
    );
}

export default Page;
