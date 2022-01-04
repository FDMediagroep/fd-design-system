import React, { useEffect, useState } from 'react';
import '@fdmg/css-grid/css/flex.css';
import '@fdmg/css-grid/css/grid.css';
import '@fdmg/css-grid/GridContainer.css';
import '../src/design-tokens/design-tokens.scss';
import './_app.scss';
import './_app_markdown.scss';
import './_app_a11y-dark.scss';
import styles from './_app.module.scss';
import PageStore, { Page } from '../src/stores/PageStore';
import Head from 'next/head';
import { Tooltip } from '../src/components/Tooltip';
import { Menu } from '../src/components/menu/Menu';
import { debounce } from '../src/utils/debounce';
import { Footer } from '../src/components/footer/Footer';
import { Profile } from '../src/components/menu/Profile';
import { Aside } from '../src/components/Aside';

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
