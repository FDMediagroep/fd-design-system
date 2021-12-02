import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    CollapseIcon,
    ExpandIcon,
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    RssIcon,
    TwitterIcon,
} from '../../design-tokens/icons';
import { DarkModeToggle } from './DarkModeToggle';
import styles from './Footer.module.scss';

function Footer() {
    const footerRef = useRef<HTMLElement>();
    const [controls, setControls] = useState([]);

    useEffect(() => {
        if (footerRef.current) {
            setControls(
                [].slice.call(
                    footerRef.current.querySelectorAll('[aria-expanded]')
                )
            );
        }
    }, [footerRef]);

    const handleClick = (e: React.MouseEvent) => {
        const accordion = e.currentTarget;
        const accordionPanel = document.getElementById(
            accordion.getAttribute('aria-controls')
        );
        if (accordion.getAttribute('aria-expanded') === 'true') {
            accordion.setAttribute('aria-expanded', 'false');
            accordionPanel.setAttribute('hidden', 'true');
        } else {
            accordion.setAttribute('aria-expanded', 'true');
            accordionPanel.removeAttribute('hidden');
        }
    };

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            const currentIndex = controls.indexOf(
                e.currentTarget as HTMLElement
            );
            const previousIndex =
                currentIndex > 0 ? currentIndex - 1 : controls.length - 1;
            const nextIndex =
                currentIndex < controls.length - 1 ? currentIndex + 1 : 0;
            switch (e.key) {
                case 'ArrowUp':
                    e.preventDefault();
                    controls[previousIndex]?.focus();
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    controls[nextIndex]?.focus();
                    break;
                case 'Home':
                    e.preventDefault();
                    controls[0]?.focus();
                    break;
                case 'End':
                    e.preventDefault();
                    controls[controls.length - 1]?.focus();
                    break;
            }
        },
        [controls]
    );

    return (
        <footer ref={footerRef} className={styles['fd-footer']}>
            <ul className="grid xs__p-0 xs__pt+6 xs__pr+4 xs__pl+4">
                <li className="xs-12 xl-2 xs__pb+4">
                    <h3 className="xs__m-0">
                        <button
                            className="heading sans xs"
                            aria-controls="footerAbout"
                            aria-expanded={false}
                            onClick={handleClick}
                            onKeyDown={handleKeyDown}
                        >
                            <span>Over FD</span>
                            <span className={styles.icon}>
                                <span
                                    className={styles.collapse}
                                    dangerouslySetInnerHTML={{
                                        __html: CollapseIcon as any,
                                    }}
                                />
                                <span
                                    className={styles.expand}
                                    dangerouslySetInnerHTML={{
                                        __html: ExpandIcon as any,
                                    }}
                                />
                            </span>
                        </button>
                    </h3>
                    <section
                        id="footerAbout"
                        role="region"
                        className="body-text sans xs"
                        hidden={true}
                    >
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://fd.nl/redactie"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fd.nl/redactie"
                            >
                                FD Redactie
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://fd.nl/dossier/fd-gazellen"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fd.nl/dossier/fd-gazellen"
                            >
                                FD Gazellen
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://fd.nl/dossier/henri-sijthoff-prijs"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fd.nl/dossier/henri-sijthoff-prijs"
                            >
                                FD Henri Sijthoff Prijs
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://werkenbijhetfinancieeledagblad.nl/"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://werkenbijhetfinancieeledagblad.nl/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Werken bij FD
                            </a>
                        </div>
                        <div className="xs__mt+3">
                            <a
                                href="https://fd.nl/colofon"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fd.nl/colofon"
                            >
                                Colofon
                            </a>
                        </div>
                    </section>
                </li>
                <li className="xs-12 xl-2 xs__pb+4">
                    <h3 className="xs__m-0">
                        <button
                            className="heading sans xs"
                            aria-controls="footerGeneral"
                            aria-expanded={false}
                            onClick={handleClick}
                            onKeyDown={handleKeyDown}
                        >
                            <span>Algemeen</span>
                            <span className={styles.icon}>
                                <span
                                    className={styles.collapse}
                                    dangerouslySetInnerHTML={{
                                        __html: CollapseIcon as any,
                                    }}
                                />
                                <span
                                    className={styles.expand}
                                    dangerouslySetInnerHTML={{
                                        __html: ExpandIcon as any,
                                    }}
                                />
                            </span>
                        </button>
                    </h3>
                    <section
                        id="footerGeneral"
                        role="region"
                        className="body-text sans xs"
                        hidden={true}
                    >
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://fdmg.nl/wp-content/uploads/AV_Abonnementen.pdf"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fdmg.nl/wp-content/uploads/AV_Abonnementen.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Algemene voorwaarden
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://fd.nl/privacy"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fd.nl/privacy"
                            >
                                Privacy
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://fd.nl/cookiebeleid"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fd.nl/cookiebeleid"
                            >
                                Cookies
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://fd.nl/copyright"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fd.nl/copyright"
                            >
                                Copyright
                            </a>
                        </div>
                        <div className="xs__mt+3">
                            <a
                                href="https://fdmg.nl/wp-content/uploads/Responsible_Disclosure.pdf"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fdmg.nl/wp-content/uploads/Responsible_Disclosure.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Responsible disclosure
                            </a>
                        </div>
                    </section>
                </li>
                <li className="xs-12 xl-2 xs__pb+4">
                    <h3 className="xs__m-0">
                        <button
                            className="heading sans xs"
                            aria-controls="footerService"
                            aria-expanded={false}
                            onClick={handleClick}
                            onKeyDown={handleKeyDown}
                        >
                            <span>Service</span>
                            <span className={styles.icon}>
                                <span
                                    className={styles.collapse}
                                    dangerouslySetInnerHTML={{
                                        __html: CollapseIcon as any,
                                    }}
                                />
                                <span
                                    className={styles.expand}
                                    dangerouslySetInnerHTML={{
                                        __html: ExpandIcon as any,
                                    }}
                                />
                            </span>
                        </button>
                    </h3>
                    <section
                        id="footerService"
                        role="region"
                        className="body-text sans xs"
                        hidden={true}
                    >
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://fd.nl/service"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fd.nl/service"
                            >
                                Service & contact
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://fd.nl/registreren"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fd.nl/registreren"
                            >
                                Account aanmaken
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://fd.nl/service#mijn-abonnement"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fd.nl/service#mijn-abonnement"
                            >
                                Hulp bij inloggen
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://fd.nl/mijn-fd"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fd.nl/mijn-fd"
                            >
                                Mijn FD
                            </a>
                        </div>
                        <div className="xs__mt+3">
                            <a
                                href="https://fd.nl/adverteren"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fd.nl/adverteren"
                            >
                                Adverteren
                            </a>
                        </div>
                    </section>
                </li>
                <li className="xs-12 xl-2 xs__pb+4">
                    <h3 className="xs__m-0">
                        <button
                            className="heading sans xs"
                            aria-controls="footerProducts"
                            aria-expanded={false}
                            onClick={handleClick}
                            onKeyDown={handleKeyDown}
                        >
                            <span>Producten</span>
                            <span className={styles.icon}>
                                <span
                                    className={styles.collapse}
                                    dangerouslySetInnerHTML={{
                                        __html: CollapseIcon as any,
                                    }}
                                />
                                <span
                                    className={styles.expand}
                                    dangerouslySetInnerHTML={{
                                        __html: ExpandIcon as any,
                                    }}
                                />
                            </span>
                        </button>
                    </h3>
                    <section
                        id="footerProducts"
                        role="region"
                        className="body-text sans xs"
                        hidden={true}
                    >
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://fd.nl/abonnementen"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fd.nl/abonnementen"
                            >
                                Abonnementen
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://zakelijk.fd.nl/licenties/?utm_source=fd.nl&utm_medium=referral&utm_campaign=fd-zakelijk-intern&utm_term=footer&_ga=2.199948070.961982956.1628492599-583086712.1623146076"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://zakelijk.fd.nl/licenties/?utm_source=fd.nl&utm_medium=referral&utm_campaign=fd-zakelijk-intern&utm_term=footer&_ga=2.199948070.961982956.1628492599-583086712.1623146076"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Groepslicenties
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://fd.nl/mijn-fd/nieuwsbrieven"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fd.nl/mijn-fd/nieuwsbrieven"
                            >
                                Nieuwsbrieven
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://fd.nl/app"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://fd.nl/app"
                            >
                                FD App
                            </a>
                        </div>
                        <div className="xs__mt+3">
                            <a
                                href="http://onelink.to/e-paper"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="http://onelink.to/e-paper"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                FD E-paper App
                            </a>
                        </div>
                    </section>
                </li>
                <li className="xs-12 xl-2 xs__pb+4">
                    <h3 className="xs__m-0">
                        <button
                            className="heading sans xs"
                            aria-controls="footerPartners"
                            aria-expanded={false}
                            onClick={handleClick}
                            onKeyDown={handleKeyDown}
                        >
                            <span>Van onze partners</span>
                            <span className={styles.icon}>
                                <span
                                    className={styles.collapse}
                                    dangerouslySetInnerHTML={{
                                        __html: CollapseIcon as any,
                                    }}
                                />
                                <span
                                    className={styles.expand}
                                    dangerouslySetInnerHTML={{
                                        __html: ExpandIcon as any,
                                    }}
                                />
                            </span>
                        </button>
                    </h3>
                    <section
                        id="footerPartners"
                        role="region"
                        className="body-text sans xs"
                        hidden={true}
                    >
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="http://vacatures.fd.nl/"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="http://vacatures.fd.nl/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Vacatures
                            </a>
                        </div>
                        <div className="xs__mt+3">
                            <a
                                href="https://www.fdwijnwinkel.nl/"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://www.fdwijnwinkel.nl/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Wijnen
                            </a>
                        </div>
                    </section>
                </li>
                <li className="xs-12 xl-2 xs__pb+4">
                    <h3 className="xs__m-0">
                        <button
                            className="heading sans xs"
                            aria-controls="footerMoreFDMG"
                            aria-expanded={false}
                            onClick={handleClick}
                            onKeyDown={handleKeyDown}
                        >
                            <span>Meer van FDMG</span>
                            <span className={styles.icon}>
                                <span
                                    className={styles.collapse}
                                    dangerouslySetInnerHTML={{
                                        __html: CollapseIcon as any,
                                    }}
                                />
                                <span
                                    className={styles.expand}
                                    dangerouslySetInnerHTML={{
                                        __html: ExpandIcon as any,
                                    }}
                                />
                            </span>
                        </button>
                    </h3>
                    <section
                        id="footerMoreFDMG"
                        role="region"
                        className="body-text sans xs"
                        hidden={true}
                    >
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="http://www.fdmg.nl/"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="http://www.fdmg.nl/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                FD Mediagroep
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="http://www.bnr.nl/"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="http://www.bnr.nl/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                BNR Nieuwsradio
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="http://www.companyinfo.nl/"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="http://www.companyinfo.nl/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Company.info
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="http://energeia.nl/?utm_source=fd.nl&utm_medium=site-tekstlink-footer&utm_campaign=energienieuws"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="http://energeia.nl/?utm_source=fd.nl&utm_medium=site-tekstlink-footer&utm_campaign=energienieuws"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Energeia
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="http://pensioenpro.nl/"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="http://pensioenpro.nl/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Pensioen Pro
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://www.esb.nu/"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://www.esb.nu/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ESB
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://dejurist.com/"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://dejurist.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                De Jurist
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="https://newsletter.impact-investor.com/"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://newsletter.impact-investor.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Impactinvestor
                            </a>
                        </div>
                        <div className="xs__mt+3 xs__mb+3">
                            <a
                                href="http://www.fondsnieuws.nl/"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="http://www.fondsnieuws.nl/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fondsnieuws
                            </a>
                        </div>
                        <div className="xs__mt+3">
                            <a
                                href="https://www.springest.nl/"
                                data-ga-name="footer_menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="footer menu click"
                                data-ga-label="https://www.springest.nl/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Springest
                            </a>
                        </div>
                    </section>
                </li>
            </ul>

            <section className={`${styles.social} xs__ml+4 xs__mr+4`}>
                <a
                    href="?rss"
                    className={`${styles.icon} xs__p+4`}
                    title="FD.nl RSS feed"
                    dangerouslySetInnerHTML={{
                        __html: RssIcon as any,
                    }}
                />
                <a
                    href="https://www.linkedin.com/company/het-financieele-dagblad"
                    data-ga-name="footer_menu_click"
                    data-ga-category="user interactions"
                    data-ga-action="footer menu click"
                    data-ga-label="https://www.linkedin.com/company/het-financieele-dagblad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.icon} xs__p+4`}
                    dangerouslySetInnerHTML={{
                        __html: LinkedInIcon as any,
                    }}
                />
                <a
                    href="https://twitter.com/FD_Nieuws"
                    data-ga-name="footer_menu_click"
                    data-ga-category="user interactions"
                    data-ga-action="footer menu click"
                    data-ga-label="https://twitter.com/FD_Nieuws"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.icon} xs__p+4`}
                    dangerouslySetInnerHTML={{
                        __html: TwitterIcon as any,
                    }}
                />
                <a
                    href="https://nl-nl.facebook.com/Hetfd"
                    data-ga-name="footer_menu_click"
                    data-ga-category="user interactions"
                    data-ga-action="footer menu click"
                    data-ga-label="https://nl-nl.facebook.com/Hetfd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.icon} xs__p+4`}
                    dangerouslySetInnerHTML={{
                        __html: FacebookIcon as any,
                    }}
                />
                <a
                    href="https://www.instagram.com/financieeledagblad/"
                    data-ga-name="footer_menu_click"
                    data-ga-category="user interactions"
                    data-ga-action="footer menu click"
                    data-ga-label="https://www.instagram.com/financieeledagblad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.icon} xs__p+4`}
                    dangerouslySetInnerHTML={{
                        __html: InstagramIcon as any,
                    }}
                />
            </section>

            <div className={`${styles['fd-copyright-footer']} xs__mb+4`}>
                <a
                    rel="noopener"
                    href="https://fd.nl/copyright"
                    target="_blank"
                    className="body-text sans xs"
                >
                    &copy; Het Financieele Dagblad {new Date().getFullYear()}
                </a>
            </div>

            <DarkModeToggle />
        </footer>
    );
}

export { Footer };
