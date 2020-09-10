import React from 'react';
import { Explain } from '../../components/Explain';
import { Button, getCssClassNames } from '../../components/button/Button';
import Head from 'next/head';
import { EnvelopeIcon } from '../../design-tokens/icons';
import styles from './buttons.module.scss';

const metaTitle = 'Button';
const metaDescription =
    'Button, used to interact with the content: comment, share and vote';

function DefaultButton() {
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
                legend="Button (default)"
                reactComponentName="Button"
                description={
                    <>
                        <p>
                            Used to interact with the content: comment, share
                            and vote.
                        </p>
                        <p>
                            Supportive: button supports editorial content, but
                            is not the most important item on the page.
                        </p>
                    </>
                }
            >
                <>
                    <Button id="demoButtonS">Button (small)</Button>
                    <Button id="demoButtonSIcon">
                        <span
                            dangerouslySetInnerHTML={{ __html: EnvelopeIcon }}
                        />
                        <span>Icon (small)</span>
                    </Button>

                    <Button id="demoButtonDisabled" disabled="disabled">
                        <span
                            dangerouslySetInnerHTML={{ __html: EnvelopeIcon }}
                        />
                        <span>Disabled (small)</span>
                    </Button>
                </>
            </Explain>

            <Explain
                anchor="m"
                cssClassNames={getCssClassNames()}
                legend="Button (M)"
                reactComponentName="Button"
                description={
                    <>
                        <p>
                            Used to interact with the content: comment, share
                            and vote.
                        </p>
                        <p>
                            Supportive: button supports editorial content, but
                            is not the most important item on the page.
                        </p>
                    </>
                }
            >
                <Button id="demoButtonM" size="m">
                    Button (medium)
                </Button>
            </Explain>
        </>
    );
}

export default DefaultButton;
