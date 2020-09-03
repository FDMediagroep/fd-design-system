import React, { useState, useCallback, useEffect } from 'react';
import styles from './cookieconsent.module.scss';
import { Explain } from '../components/Explain';
import Head from 'next/head';
import { Switch } from '../components/input/Switch';
import {
    CookieConsent,
    getCssClassNames,
} from '../components/cookieconsent/CookieConsent';
import { FdmgIcon } from '../design-tokens/icons';
import { LockedContent } from '../components/cookieconsent/LockedContent';
import PageStore from '../stores/PageStore';

const metaTitle = 'CookieConsent';
const metaDescription =
    'CookieConsent, used to display a cookie consent overlay';

function Page() {
    /**
     * Use article background.
     */
    useEffect(() => {
        PageStore.setPageType('article');

        return () => {
            PageStore.setPageType('overview');
        };
    }, []);

    const [opened, setOpened] = useState(false);

    const handleOverlayToggle = useCallback(() => {
        setOpened(!opened);
    }, [opened]);

    const handleModalClose = useCallback(() => {
        setOpened(false);
    }, [opened]);

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
                    </>
                }
            >
                <CookieConsent
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
        </div>
    );
}

export default Page;
