import React, { useState, useCallback, useEffect, useRef } from 'react';
import styles from './cookieconsent.module.scss';
import { Explain } from '../components/Explain';
import Head from 'next/head';
import { Switch } from '../components/input/Switch';
import {
    CookieConsent,
    getCssClassNames,
    LockedContent,
    CookieConsentApi,
    CookieConsentStore,
} from '../components/cookieconsent/CookieConsent';
import { FdmgIcon } from '../design-tokens/icons';
import PageStore from '../stores/PageStore';
import ReactMD from 'react-markdown/with-html';

const metaTitle = 'CookieConsent';
const metaDescription =
    'CookieConsent, used to display a cookie consent overlay';

const cookieConsentApi = new CookieConsentApi();

function Page() {
    const refIFrame = useRef<HTMLIFrameElement>(null);
    const [opened, setOpened] = useState(false);

    /**
     * Use article background.
     */
    useEffect(() => {
        PageStore.setPageType('article');

        return () => {
            PageStore.setPageType('overview');
        };
    }, []);

    const handleOverlayToggle = useCallback(() => {
        setOpened(!opened);
    }, [opened]);

    const handleModalClose = useCallback(() => {
        setOpened(false);
    }, [opened]);

    useEffect(() => {
        if (refIFrame?.current) {
            console.info('iframe loaded');
            cookieConsentApi.setResponder(refIFrame.current).then(() => {
                cookieConsentApi.get().then((event) => {
                    console.log('EVENT MESSAGE', event);
                    if (!event?.data?.consents) {
                        setOpened(true);
                    }
                    CookieConsentStore.setVendorNames(
                        event?.data?.consents ?? []
                    );
                });
            });
            refIFrame.current.src = `https://responder.vercel.app?${+new Date()}`;
        }
    }, [refIFrame.current]);

    const handleUnlock = useCallback(() => {
        console.log(CookieConsentStore.getVendorNames());
        cookieConsentApi.store();
    }, []);

    return (
        <div className={styles.cookieConsent}>
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
                anchor="locked-content"
                cssClassNames={getCssClassNames()}
                legend="Locked content"
                reactComponentName="LockedContent"
                description={
                    <>
                        <p>
                            Used as locked content which can be unlocked by
                            giving cookie consents.
                        </p>
                        <Switch
                            id="cookieConsentSwitch"
                            label={opened ? 'Hide overlay' : 'Show overlay'}
                            onChange={handleOverlayToggle}
                            checked={opened}
                        />
                    </>
                }
            >
                <>
                    <LockedContent
                        onUnlock={handleUnlock}
                        vendorName="youtube"
                        lockDescription={
                            <p>
                                In verband met de door u gekozen
                                cookievoorkeuren kunnen wij deze Youtube-video
                                niet tonen. Klik hier om akkoord te gaan met de
                                cookievoorkeuren die nodig zijn om deze
                                Youtube-video te laden.
                            </p>
                        }
                    >
                        <div className="embed-container">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube-nocookie.com/embed/T_tN4CnushY"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </LockedContent>

                    <LockedContent
                        onUnlock={handleUnlock}
                        vendorName="twitter"
                        lockDescription={
                            <p>
                                In verband met de door u gekozen
                                cookievoorkeuren kunnen wij deze tweet niet
                                tonen. Klik hier om akkoord te gaan met de
                                cookievoorkeuren die nodig zijn om deze tweet te
                                laden.
                            </p>
                        }
                    >
                        <>
                            <blockquote
                                className="twitter-tweet"
                                data-lang="en"
                            >
                                <p lang="en" dir="ltr">
                                    Thermo-nuclear performance today by Annemiek
                                    van Vleuten in Giro Rosa! 🚀 She attacked on
                                    the very first meters of the Torri di Fraele
                                    climb, for 1 min 20 sec out of the saddle.
                                    After climbing at ~5,7 w/kg for 24 min 45
                                    sec, she won by...3 minutes! 😱👏
                                    <a href="https://twitter.com/hashtag/GiroRosa?src=hash&amp;ref_src=twsrc%5Etfw">
                                        #GiroRosa
                                    </a>
                                    <a href="https://t.co/FVYYWgybHD">
                                        pic.twitter.com/FVYYWgybHD
                                    </a>
                                </p>
                                &mdash; Mihai Cazacu (@faustocoppi60)
                                <a href="https://twitter.com/faustocoppi60/status/1148687621255827458?ref_src=twsrc%5Etfw">
                                    July 9, 2019
                                </a>
                            </blockquote>
                            <script
                                async
                                src="https://platform.twitter.com/widgets.js"
                                charSet="utf-8"
                            ></script>
                        </>
                    </LockedContent>

                    <LockedContent
                        onUnlock={handleUnlock}
                        vendorName="instagram"
                        lockDescription={
                            <p>
                                In verband met de door u gekozen
                                cookievoorkeuren kunnen wij deze Instagram-foto
                                niet tonen. Klik hier om akkoord te gaan met de
                                cookievoorkeuren die nodig zijn om deze
                                Instagram-foto te laden.
                            </p>
                        }
                    >
                        <iframe
                            width="320"
                            height="440"
                            src="https://instagram.com/p/BitdRRzBnYm/embed"
                            frameBorder="0"
                        ></iframe>
                    </LockedContent>

                    <LockedContent
                        onUnlock={handleUnlock}
                        vendorName="soundcloud"
                        lockDescription={
                            <p>
                                In verband met de door u gekozen
                                cookievoorkeuren kunnen wij deze
                                SoundCloud-fragment niet tonen. Klik hier om
                                akkoord te gaan met de cookievoorkeuren die
                                nodig zijn om dit SoundCloud-fragment te laden.
                            </p>
                        }
                    >
                        <iframe
                            width="100%"
                            height="300"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/618097452&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                        ></iframe>
                    </LockedContent>

                    <LockedContent
                        onUnlock={handleUnlock}
                        vendorName="vimeo"
                        lockDescription={
                            <p>
                                In verband met de door u gekozen
                                cookievoorkeuren kunnen wij deze Vimeo-video
                                niet tonen. Klik hier om akkoord te gaan met de
                                cookievoorkeuren die nodig zijn om deze
                                Vimeo-video te laden.
                            </p>
                        }
                    >
                        <div className="embed-container">
                            <iframe
                                src="https://player.vimeo.com/video/84058621"
                                width="640"
                                height="360"
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </LockedContent>
                    <LockedContent
                        onUnlock={handleUnlock}
                        vendorName="inline-html"
                        lockDescription={
                            <p>
                                In verband met de door u gekozen
                                cookievoorkeuren kunnen wij dit artikel niet
                                tonen. Klik hier om akkoord te gaan met de
                                cookievoorkeuren die nodig zijn om dit artikel
                                te laden.
                            </p>
                        }
                    >
                        <h1>SIKE!</h1>
                    </LockedContent>
                    <LockedContent
                        onUnlock={handleUnlock}
                        vendorName="inline-html"
                        lockDescription={
                            <p>
                                In verband met de door u gekozen
                                cookievoorkeuren kunnen wij dit artikel niet
                                tonen. Klik hier om akkoord te gaan met de
                                cookievoorkeuren die nodig zijn om dit artikel
                                te laden.
                            </p>
                        }
                    >
                        <>
                            <h3>
                                console.log('Inline script has been correctly
                                executed!');
                            </h3>
                            <script>
                                console.log('Inline script has been correctly
                                executed!');
                            </script>
                        </>
                    </LockedContent>
                    <LockedContent
                        onUnlock={handleUnlock}
                        vendorName="inline-html"
                        lockDescription={
                            <p>
                                In verband met de door u gekozen
                                cookievoorkeuren kunnen wij dit artikel niet
                                tonen. Klik hier om akkoord te gaan met de
                                cookievoorkeuren die nodig zijn om dit artikel
                                te laden.
                            </p>
                        }
                    >
                        <>
                            <h3>
                                &lt;script
                                src="static/test.js"&gt;&lt;/script&gt; //
                                console.log('External script loaded and run')
                            </h3>
                            <script src="/static/test.js"></script>
                        </>
                    </LockedContent>
                    <LockedContent
                        onUnlock={handleUnlock}
                        vendorName="fdmg-personalized"
                        lockDescription={
                            <p>
                                In verband met de door u gekozen
                                cookievoorkeuren kunnen wij deze
                                gepersonaliseerde content niet tonen. Klik hier
                                om akkoord te gaan met de cookievoorkeuren die
                                nodig zijn om deze gepersonaliseerde content te
                                laden.
                            </p>
                        }
                    >
                        <div id="section-last-seven-days">
                            <div className="section-header">
                                <h3>Gemist de afgelopen 7 dagen?</h3>
                                <a
                                    href="/aanbevolen"
                                    className="section-more last-seven-days"
                                >
                                    <img
                                        src="//static-dev.fd.nl/assets/4.1-SNAPSHOT/img/fd/static/alpha/info-circle-solid.svg"
                                        width="24"
                                        height="24"
                                    />
                                </a>
                            </div>
                            <hr />
                            <div className="message">
                                <span>Bezig met ophalen ...</span>
                            </div>
                            <a
                                href="/aanbevolen"
                                className="section-more bottom last-seven-days"
                            >
                                <img
                                    src="//static-dev.fd.nl/assets/4.1-SNAPSHOT/img/fd/static/alpha/info-circle-solid.svg"
                                    width="24"
                                    height="24"
                                />
                            </a>
                        </div>
                    </LockedContent>
                </>
            </Explain>

            <Explain
                anchor="cookie-consent"
                cssClassNames={getCssClassNames()}
                hideExternalCodeEditors={true}
                hidePreview={!opened}
                legend="Cookie consent"
                reactComponentName="CookieConsent"
                description={
                    <>
                        <p>Used as cookie consent overlay.</p>
                        <Switch
                            id="cookieConsentSwitch"
                            label={opened ? 'Hide overlay' : 'Show overlay'}
                            onChange={handleOverlayToggle}
                            checked={opened}
                        />
                        <p>
                            The code snippet below shows how you can
                            automatically show the Cookie Consent modal when the
                            user has never finished setting up the cookie
                            consents.
                        </p>
                        <p>
                            If the user did finish setting up the cookie
                            consents then the Cookie Consent modal will not be
                            shown again.
                        </p>
                        <p>
                            This Cookie Consent component makes use of
                            Responder. Responder is a static web page with{' '}
                            <span style={{ whiteSpace: 'nowrap' }}>
                                parent &lt;-&gt; child
                            </span>{' '}
                            iFrame communication built in. Messages sent to
                            Responder are stored in localStorage and can be
                            retrieved again.
                        </p>
                        <p>
                            Using the CookieConsentApi you can get, delete, post
                            your messages to Responder.
                        </p>
                        <p>
                            In order to remove your consents completely, to
                            retrigger the automatic Cookie Consent modal upon
                            revisit, you simply navigate to{' '}
                            <a
                                href="https://responder.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://responder.vercel.app
                            </a>{' '}
                            and delete your consents from that page.
                        </p>
                        <ReactMD
                            className="markdown"
                            source={`
\`\`\`javascript
import { 
    CookieConsentApi, 
    CookieConsentStore
} from '@fdmg/design-system/components/cookieconsent/CookieConsent';

const cookieConsentApi = new CookieConsentApi();

async function checkCookieconsent() {
    // Iframe to https://responder.vercel.app
    const responderIframe = document.querySelector('#responderIframe');

    // Set the responder iframe in the consent API so it can exchange messages with it
    await cookieConsentApi.setResponder(responderIframe);

    // Get the cookie consents from Responder.
    const event = await cookieConsentApi.get();

    // Check if the consents array exists. If it doesn't we can assume.
    // the user never completed the cookie consent setup and we show the
    // cookie consent modal.
    //
    // The data property of the event follows this interface:
    //
    // interface MessageData {
    //    consents?: string[];
    //    method: 'GET' | 'POST' | 'DELETE';
    //    hostname?: string;
    //    timestamp?: number;
    // }
    if (!event?.data?.consents) {
        setOpened(true);
    }

    // We store the retrieved consents in the CookieConsentStore.
    CookieConsentStore.setVendorNames(
        event?.data?.consents ?? []
    );
}
\`\`\`
`}
                            escapeHtml={false}
                        />
                    </>
                }
            >
                <CookieConsent
                    acceptAllLabel="Accepteer alles"
                    closeLabel="Sluiten"
                    denyAllLabel="Weiger alles"
                    description={
                        <>
                            <p>
                                FD Mediagroep (FDMG) en de daarbij horende
                                website: FD.nl en door haar geselecteerde
                                Partners hebben toegang tot uw gegevens en
                                gebruiken deze informatie voor de onderstaande
                                doeleinden. Klik op een doel om uw voorkeuren
                                aan te passen en om meer te weten te komen over
                                wie er om uw toestemming vraagt en/of rechtmatig
                                belang claimt om uw gegevens voor dat doel te
                                verwerken. Houd er rekening mee dat wanneer alle
                                doeleinden zijn geweigerd, dit een negatief
                                effect op bepaalde functies van de website kan
                                hebben.
                            </p>
                            <p>
                                Voor sommige doeleinden kunnen jouw
                                persoonsgegevens worden verwerkt op de
                                juridische grond van rechtmatig belang
                            </p>
                        </>
                    }
                    title={
                        <header className={styles.header}>
                            <span
                                className={styles.icon}
                                dangerouslySetInnerHTML={{
                                    __html: FdmgIcon,
                                }}
                            />
                        </header>
                    }
                    opened={opened}
                    onClose={handleModalClose}
                />
            </Explain>

            <iframe
                id="page-frame"
                ref={refIFrame}
                width="0"
                height="0"
                frameBorder="none"
                style={{ display: 'block' }}
            />
        </div>
    );
}

export default Page;
