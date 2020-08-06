import React from 'react';
import { Explain } from '../../components/Explain';
import { ButtonCta, getCssClassNames } from '../../components/button/ButtonCta';
import Head from 'next/head';

const metaTitle = 'Button call-to-action';
const metaDescription =
    'Button call-to-action, used for e-mails, registration, subscription or sign-up-flows, log-in, banners and other non-editorial elements';

function CTA() {
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
