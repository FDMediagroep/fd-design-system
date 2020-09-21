import React from 'react';
import { Explain } from '../../components/Explain';
import {
    ButtonGhost,
    getCssClassNames,
} from '../../components/button/ButtonGhost';
import Head from 'next/head';
import { EnvelopeIcon } from '../../design-tokens/icons';
import styles from './buttons.module.scss';

const metaTitle = 'Ghost Button';
const metaDescription =
    'Ghost Button, used to interact with the content: comment, share and vote';

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
                legend="Ghost Button (default)"
                reactComponentName="ButtonGhost"
                description={
                    <>
                        <p>
                            Tertiary call to actions. Used for optional actions.
                        </p>
                        <ul>
                            <li>Can be used in multitude</li>
                            <li>
                                Can be applied in combination with main CTA
                                button, to indicate an alternative action
                            </li>
                            <li>
                                Example use
                                <ul>
                                    <li>Back or cancel actions</li>
                                    <li>Contact customer support</li>
                                    <li>Edit buttons</li>
                                    <li>Cookie wall - manage settings</li>
                                    <li>Filter search results</li>
                                </ul>
                            </li>
                        </ul>
                    </>
                }
            >
                <>
                    <ButtonGhost id="demoGhostButtonS">
                        Button (small)
                    </ButtonGhost>
                    <ButtonGhost id="demoGhostButtonSIcon">
                        <span
                            dangerouslySetInnerHTML={{ __html: EnvelopeIcon }}
                        />
                        <span>Icon (small)</span>
                    </ButtonGhost>

                    <ButtonGhost
                        id="demoGhostButtonSDisabled"
                        disabled="disabled"
                    >
                        <span
                            dangerouslySetInnerHTML={{ __html: EnvelopeIcon }}
                        />
                        <span>Disabled (small)</span>
                    </ButtonGhost>
                </>
            </Explain>

            <Explain
                previewClassName={styles.buttons}
                anchor="m"
                cssClassNames={getCssClassNames()}
                legend="Ghost Button (M)"
                reactComponentName="ButtonGhost"
                description={
                    <>
                        <p>
                            Tertiary call to actions. Used for optional actions.
                        </p>
                        <ul>
                            <li>Can be used in multitude</li>
                            <li>
                                Can be applied in combination with main CTA
                                button, to indicate an alternative action
                            </li>
                            <li>
                                Example use
                                <ul>
                                    <li>Back or cancel actions</li>
                                    <li>Contact customer support</li>
                                    <li>Edit buttons</li>
                                    <li>Cookie wall - manage settings</li>
                                    <li>Filter search results</li>
                                </ul>
                            </li>
                        </ul>
                    </>
                }
            >
                <>
                    <ButtonGhost id="demoGhostButtonM" size="m">
                        Button (medium)
                    </ButtonGhost>
                    <ButtonGhost id="demoGhostButtonMIcon" size="m">
                        <span
                            dangerouslySetInnerHTML={{ __html: EnvelopeIcon }}
                        />
                        <span>Icon (medium)</span>
                    </ButtonGhost>

                    <ButtonGhost
                        id="demoGhostButtonMDisabled"
                        disabled="disabled"
                        size="m"
                    >
                        <span
                            dangerouslySetInnerHTML={{ __html: EnvelopeIcon }}
                        />
                        <span>Disabled (medium)</span>
                    </ButtonGhost>
                </>
            </Explain>
        </>
    );
}

export default Page;
