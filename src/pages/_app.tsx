import React, { useEffect, useState } from 'react';
import '@fdmg/css-grid/css/flex.css';
import '@fdmg/css-grid/css/grid.css';
import '@fdmg/css-grid/GridContainer.css';
import '../design-tokens/design-tokens.scss';
import './_app.scss';
import './_app_markdown.scss';
import './_app_a11y-dark.scss';
import styles from './_app.module.scss';
import PageStore, { Page } from '../stores/PageStore';
import Head from 'next/head';
import { Tooltip } from '../components/Tooltip';
import { Menu } from '../components/menu/Menu';
import { debounce } from '../utils/debounce';
import { Footer } from '../components/footer/Footer';
import { Profile } from '../components/menu/Profile';
import { Aside } from '../components/Aside';

/**
 * Make sibling elements same height as its tallest sibling with the given CSS Class Name.
 */

function resizeSiblings(cssClassName: string) {
    console.debug('resizeSiblings');
    [].slice
        .call(document.querySelectorAll(`.${cssClassName}`))
        .forEach((el: HTMLElement) => {
            let siblingHeight = 0;
            const siblings: HTMLElement[] = [];
            [].slice.call(el.parentElement.childNodes).forEach((child) => {
                if (child.classList.contains(cssClassName)) {
                    siblingHeight = Math.max(
                        siblingHeight,
                        child.getBoundingClientRect().height
                    );
                    siblings.push(child);
                }
            });
            siblings.forEach((child) => {
                if (child.classList.contains(cssClassName)) {
                    child.style.height = `${siblingHeight}px`;
                }
            });
        });
}

function handleIE11FullHeight(cssClassName: string) {
    console.debug('handleIE11FullHeight');
    [].slice
        .call(document.querySelectorAll(`.${cssClassName}`))
        .forEach((el: HTMLElement) => {
            el.style.height = 'auto';
        });
    debounce(resizeSiblings.bind(null, cssClassName), 300);
}

function isIE() {
    const ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
    const msie = ua.indexOf('MSIE '); // IE 10 or older
    const trident = ua.indexOf('Trident/'); //IE 11

    return msie > 0 || trident > 0;
}

function App({ Component, pageProps }) {
    const [loggedIn, setLoggedIn] = useState(false);

    const [pageType, setPageType] = useState<Page>(PageStore.getPageType());
    const [pageStyle, setPageStyle] = useState(styles.overview);
    const darkModeMediaQuery =
        typeof window !== 'undefined'
            ? window?.matchMedia('(prefers-color-scheme: dark)')
            : { matches: false };
    if (darkModeMediaQuery.matches) {
        console.log(`System is 🌒`);
    } else {
        console.log(`System is ☀️`);
    }

    useEffect(() => {
        if (isIE()) {
            window.addEventListener(
                'resize',
                debounce.bind(
                    null,
                    () => handleIE11FullHeight('ie-full-height'),
                    300
                )
            );
            handleIE11FullHeight('ie-full-height');
        }

        const subscriptionId = PageStore.subscribe(() => {
            setPageType(PageStore.getPageType());
        });
        setPageType(PageStore.getPageType());

        return () => {
            PageStore.unsubscribe(subscriptionId);
        };
    }, []);

    useEffect(() => {
        switch (pageType) {
            case 'article':
                setPageStyle(styles.article);
                break;
            case 'overview':
            default:
                setPageStyle(styles.overview);
        }
    }, [pageType]);

    const handleLogout = () => {
        setLoggedIn(false);
    };
    const handleLogin = () => {
        setLoggedIn(true);
    };
    const handleRegister = (e: React.MouseEvent) => {
        console.log(e);
    };

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,viewport-fit=cover"
                />
            </Head>

            <Menu
                loggedIn={loggedIn}
                aside={<Aside />}
                profile={
                    <Profile
                        access={loggedIn}
                        companyName={'FD Mediagroep'}
                        hasQuotum={loggedIn}
                        freeArticlesCount={3}
                        fullName={'W. L.'}
                        loggedIn={loggedIn}
                        noSubscription={!loggedIn}
                        progressBlocks={
                            loggedIn
                                ? [
                                      { faded: false },
                                      { faded: false },
                                      { faded: false },
                                      { faded: true },
                                      { faded: true },
                                  ]
                                : null
                        }
                        onLogin={handleLogin}
                        onLogout={handleLogout}
                        onRegister={handleRegister}
                    />
                }
            />

            {/* <Menu
                className={styles.menu}
                ariaLabel="Main menu"
                menuItems={[
                    {
                        text: 'Misc.',
                        isToggle: true,
                        menuItems: [
                            {
                                text: 'Typography',
                                isToggle: true,
                                menuItems: [
                                    {
                                        component: (
                                            <Link href="/typography">
                                                <a>Demo</a>
                                            </Link>
                                        ),
                                    },
                                    {
                                        component: (
                                            <Link href="https://fdmediagroep.atlassian.net/wiki/spaces/FDMT/pages/1406861318/Typography">
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer nofollow"
                                                >
                                                    Docs 📤
                                                </a>
                                            </Link>
                                        ),
                                    },
                                ],
                            },
                        ],
                    },
                ]}
                moreMenuItems={[
                    {
                        text: 'About',
                        isToggle: true,
                        menuItems: [
                            {
                                text: 'GitHub',
                                component: (
                                    <a
                                        href="https://github.com/FDMediagroep/fd-design-system"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.invertable} ${styles.github}`}
                                        title="Open GitHub"
                                    >
                                        <figure>
                                            <picture>
                                                <source
                                                    media="(max-width: 640px)"
                                                    srcSet={`/assets/github/GitHub-Mark-32px.png, /assets/github/GitHub-Mark-64px.png 2x`}
                                                />
                                                <source
                                                    media="(min-width:641px)"
                                                    srcSet={`/assets/github/GitHub-Mark-32px.png, /assets/github/GitHub-Mark-64px.png 2x, /assets/github/GitHub-Mark-120px-plus.png 3x`}
                                                />
                                                <img
                                                    alt="GitHub"
                                                    src={`/assets/github/GitHub-Mark-32px.png`}
                                                />
                                            </picture>
                                            <figcaption>GitHub</figcaption>
                                        </figure>
                                    </a>
                                ),
                            },
                            {
                                text: 'Themes',
                                component: (
                                    <Themes
                                        className={styles.themes}
                                        groupName="sub-menu-themes"
                                    />
                                ),
                            },
                        ],
                    },
                    {
                        text: '',
                        className: styles.showForMobile,
                        component: (
                            <ButtonCta
                                aria-label="Dummy button"
                                title="Dummy button"
                            >
                                Abonneren
                            </ButtonCta>
                        ),
                    },
                    {
                        text: '',
                        className: styles.showForMobile,
                        component: (
                            <ButtonGhost
                                aria-label="Dummy button"
                                title="Dummy button"
                            >
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: ProfileIcon as any,
                                    }}
                                />{' '}
                                Inloggen
                            </ButtonGhost>
                        ),
                    },
                ]}
            >
                <>
                    <form
                        method="GET"
                        action="/search"
                        onSubmit={handleSearchSubmit}
                    >
                        <div className={styles.search}>
                            <input
                                name="q"
                                placeholder="Search..."
                                onBlur={handleSearchBlur}
                                aria-label="Search text"
                            />
                            <button
                                type="submit"
                                name="search"
                                dangerouslySetInnerHTML={{
                                    __html: SpyglassIcon as any,
                                }}
                                aria-label="Search submit"
                            />
                        </div>
                    </form>
                    <ButtonCta
                        className={styles.customButton}
                        aria-label="Dummy button"
                        title="Dummy button"
                    >
                        Abonneren
                    </ButtonCta>
                    <ButtonGhost
                        className={styles.customButton}
                        aria-label="Dummy button"
                        title="Dummy button"
                    >
                        <span
                            dangerouslySetInnerHTML={{
                                __html: ProfileIcon as any,
                            }}
                        />{' '}
                        Inloggen
                    </ButtonGhost>
                </>
            </Menu> */}

            <section className={pageStyle}>
                <main>
                    <Component {...pageProps} />
                </main>
                <Tooltip />
            </section>

            <Footer />
        </>
    );
}

// Will be called once for every metric that has to be reported.
export function reportWebVitals(metric) {
    // These metrics can be sent to any analytics service
    console.log(metric);
}

export default App;
