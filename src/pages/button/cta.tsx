import React from 'react';
import { Explain } from '../../components/Explain';
import { ButtonCta, getCssClassNames } from '../../components/button/ButtonCta';
import Head from 'next/head';
import { EnvelopeIcon } from '../../design-tokens/icons';
import styles from './buttons.module.scss';
import { globalCssClassNames } from '../../utils/globalCssClassNames';

export const metaTitle = 'Button call-to-action';
export const metaDescription =
    'Button call-to-action, used for e-mails, registration, subscription or sign-up-flows, log-in, banners and other non-editorial elements';

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
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Button CTA (default)"
                reactComponentName="ButtonCta"
                description={
                    <>
                        <p>
                            Most important call to action within the user
                            interface.
                        </p>
                        <ul>
                            <li>
                                Can be applied to indicate the only next step in
                                a process
                            </li>
                            <li>
                                Can be applied to persuade the user to buy
                                something
                            </li>
                            <li>
                                The use should be limited to only one instance
                                of this button per viewport, or more in the case
                                of similar actions
                            </li>
                            <li>
                                Example uses
                                <ul>
                                    <li>Call to register</li>
                                    <li>Login actions</li>
                                    <li>Confirmation actions in flows</li>
                                    <li>Cookiewall - accept cookies</li>
                                </ul>
                            </li>
                        </ul>
                    </>
                }
            >
                <>
                    <ButtonCta id="demoButtonCtaS">
                        Button call-to-action (small)
                    </ButtonCta>
                    <ButtonCta id="demoButtonCtaSIcon">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: EnvelopeIcon as any,
                            }}
                        />
                        <span>Icon call-to-action (small)</span>
                    </ButtonCta>
                    <ButtonCta id="demoButtonCtaSDisabled" disabled="disabled">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: EnvelopeIcon as any,
                            }}
                        />
                        <span>Disabled call-to-action (small)</span>
                    </ButtonCta>
                </>
            </Explain>

            <Explain
                previewClassName={styles.buttons}
                anchor="m"
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Button CTA (M)"
                reactComponentName="ButtonCta"
                description={
                    <>
                        <p>
                            Most important call to action within the user
                            interface.
                        </p>
                        <ul>
                            <li>
                                Can be applied to indicate the only next step in
                                a process
                            </li>
                            <li>
                                Can be applied to persuade the user to buy
                                something
                            </li>
                            <li>
                                The use should be limited to only one instance
                                of this button per viewport, or more in the case
                                of similar actions
                            </li>
                            <li>
                                Example uses
                                <ul>
                                    <li>Call to register</li>
                                    <li>Login actions</li>
                                    <li>Confirmation actions in flows</li>
                                    <li>Cookiewall - accept cookies</li>
                                </ul>
                            </li>
                        </ul>
                    </>
                }
            >
                <>
                    <ButtonCta id="demoButtonCtaM" size="m">
                        Button call-to-action (medium)
                    </ButtonCta>
                    <ButtonCta id="demoButtonCtaMIcon" size="m">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: EnvelopeIcon as any,
                            }}
                        />
                        <span>Icon call-to-action (medium)</span>
                    </ButtonCta>
                    <ButtonCta
                        id="demoButtonCtaMDisabled"
                        disabled="disabled"
                        size="m"
                    >
                        <span
                            dangerouslySetInnerHTML={{
                                __html: EnvelopeIcon as any,
                            }}
                        />
                        <span>Disabled call-to-action (medium)</span>
                    </ButtonCta>
                </>
            </Explain>
        </>
    );
}

export default Page;
