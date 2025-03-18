import React from 'react';
import { Explain } from '../../src/components/Explain';
import { Button, getCssClassNames } from '../../src/components/button/Button';
import Head from 'next/head';
import { EnvelopeIcon } from '../../src/design-tokens/icons';
import styles from './buttons.module.scss';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';

export const metaTitle = 'Neutral Button';
export const metaDescription =
    'Neutral button, used to interact with the content: comment, share and vote';

function Page() {
    return (
        <>
            <Head>
                <title>
                    {`${metaTitle} - Design System - Het Financieele Dagblad`}
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
                previewClassName={styles['buttons']}
                anchor="default"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
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
                        <span>
                            <EnvelopeIcon />
                        </span>
                        <span>Icon (small)</span>
                    </Button>

                    <Button id="demoButtonSDisabled" disabled="disabled">
                        <span>
                            <EnvelopeIcon />
                        </span>
                        <span>Disabled (small)</span>
                    </Button>
                </>
            </Explain>

            <Explain
                previewClassName={styles['buttons']}
                anchor="m"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
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
                        <span>
                            <EnvelopeIcon />
                        </span>
                        <span>Icon (medium)</span>
                    </Button>

                    <Button
                        id="demoButtonMDisabled"
                        disabled="disabled"
                        size="m"
                    >
                        <span>
                            <EnvelopeIcon />
                        </span>
                        <span>Disabled (medium)</span>
                    </Button>
                </>
            </Explain>
        </>
    );
}

export default Page;
