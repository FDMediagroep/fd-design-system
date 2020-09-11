import React from 'react';
import { Explain } from '../../components/Explain';
import { ButtonCta, getCssClassNames } from '../../components/button/ButtonCta';
import Head from 'next/head';
import { EnvelopeIcon } from '../../design-tokens/icons';
import styles from './buttons.module.scss';

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
                previewClassName={styles.buttons}
                anchor="default"
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
                <>
                    <ButtonCta id="demoButtonCtaS">
                        Button call-to-action (small)
                    </ButtonCta>
                    <ButtonCta id="demoButtonCtaSIcon">
                        <span
                            dangerouslySetInnerHTML={{ __html: EnvelopeIcon }}
                        />
                        <span>Icon call-to-action (small)</span>
                    </ButtonCta>
                    <ButtonCta id="demoButtonCtaSDisabled" disabled="disabled">
                        <span
                            dangerouslySetInnerHTML={{ __html: EnvelopeIcon }}
                        />
                        <span>Disabled call-to-action (small)</span>
                    </ButtonCta>
                </>
            </Explain>

            <Explain
                previewClassName={styles.buttons}
                anchor="m"
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
                <>
                    <ButtonCta id="demoButtonCtaM" size="m">
                        Button call-to-action (medium)
                    </ButtonCta>
                    <ButtonCta id="demoButtonCtaMIcon" size="m">
                        <span
                            dangerouslySetInnerHTML={{ __html: EnvelopeIcon }}
                        />
                        <span>Icon call-to-action (medium)</span>
                    </ButtonCta>
                    <ButtonCta
                        id="demoButtonCtaMDisabled"
                        disabled="disabled"
                        size="m"
                    >
                        <span
                            dangerouslySetInnerHTML={{ __html: EnvelopeIcon }}
                        />
                        <span>Disabled call-to-action (medium)</span>
                    </ButtonCta>
                </>
            </Explain>
        </>
    );
}

export default CTA;
