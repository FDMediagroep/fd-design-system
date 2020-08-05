import React from 'react';
import { Explain } from '../../components/Explain';
import { ButtonCta, getCssClassNames } from '../../components/button/ButtonCta';
import Head from 'next/head';

function CTA() {
    return (
        <>
            <Head>
                <title>
                    Button call-to-action - Design System - Het Financieele
                    Dagblad
                </title>
                <meta
                    name="description"
                    content="Button call-to-action, used for e-mails, registration, subscription or sign-up-flows, log-in, banners and other non-editorial elements"
                />
            </Head>

            <Explain
                cssClassNames={getCssClassNames()}
                legend="Button CTA (default)"
                reactComponentName="ButtonCta"
                description={
                    <>
                        <p>
                            Use for emails, registration, subscription or
                            sign-up-flows, log-in, banners and all other
                            FD-elements that are not editorial.
                        </p>
                        <p>
                            Call to action: Button is most import element on the
                            page.
                        </p>
                    </>
                }
            >
                <ButtonCta id="demoButtonCtaS">
                    Button call-to-action (small)
                </ButtonCta>
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                legend="Button CTA (M)"
                reactComponentName="ButtonCta"
                description={
                    <>
                        <p>
                            Use for emails, registration, subscription or
                            sign-up-flows, log-in, banners and all other
                            FD-elements that are not editorial.
                        </p>
                        <p>
                            Call to action: Button is most import element on the
                            page.
                        </p>
                    </>
                }
            >
                <ButtonCta id="demoButtonCtaM" size="m">
                    Button call-to-action (medium)
                </ButtonCta>
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                legend="Button CTA (L)"
                reactComponentName="ButtonCta"
                description={
                    <>
                        <p>
                            Use for emails, registration, subscription or
                            sign-up-flows, log-in, banners and all other
                            FD-elements that are not editorial.
                        </p>
                        <p>
                            Call to action: Button is most import element on the
                            page.
                        </p>
                    </>
                }
            >
                <ButtonCta id="demoButtonCtaL" size="l">
                    Button call-to-action (large)
                </ButtonCta>
            </Explain>
        </>
    );
}

export default CTA;
