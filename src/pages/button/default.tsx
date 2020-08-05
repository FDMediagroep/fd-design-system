import React from 'react';
import { Explain } from '../../components/Explain';
import { Button, getCssClassNames } from '../../components/button/Button';
import Head from 'next/head';

function DefaultButton() {
    return (
        <>
            <Head>
                <title>Button - Design System - Het Financieele Dagblad</title>
                <meta
                    name="description"
                    content="Button, used to interact with the content: comment, share and vote"
                />
            </Head>

            <Explain
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
                <Button id="demoButtonS">Button (small)</Button>
            </Explain>

            <Explain
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

            <Explain
                cssClassNames={getCssClassNames()}
                legend="Button (L)"
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
                <Button id="demoButtonL" size="l">
                    Button (large)
                </Button>
            </Explain>
        </>
    );
}

export default DefaultButton;
