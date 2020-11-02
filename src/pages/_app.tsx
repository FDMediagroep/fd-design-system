import React, { useEffect, useState } from 'react';
import '../design-tokens/design-tokens.scss';
import './_app.scss';
import './_app_markdown.scss';
import './_app_a11y-dark.scss';
import styles from './_app.module.scss';
import PageStore, { Page } from '../stores/PageStore';
import Head from 'next/head';
import { Tooltip } from '../components/Tooltip';
import { Menu } from '../components/menu/Menu';
import { ButtonGhost } from '../components/button/ButtonGhost';
import { FdIcon, ProfileIcon, SpyglassIcon } from '../design-tokens/icons';
import { ButtonCta } from '../components/button/ButtonCta';
import { Themes } from '../components/Themes';
import Link from 'next/link';
import { debounce } from '../utils/debounce';

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
            require('@webcomponents/webcomponentsjs');

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

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (formData.get('search').toString().length === 0) {
            const input: HTMLInputElement = e.currentTarget.querySelector(
                '[name="search"]'
            );
            input.focus();
        } else {
            e.currentTarget.submit();
        }
    };

    const handleSearchBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        setTimeout(() => {
            target.value = '';
        }, 300);
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
                className={styles.menu}
                ariaLabel="Main menu"
                menuItems={[
                    {
                        text: 'FD Design System',
                        component: (
                            <Link href="/">
                                <a style={{ padding: '0' }}>
                                    <span
                                        className={styles.logo}
                                        dangerouslySetInnerHTML={{
                                            __html: FdIcon,
                                        }}
                                        aria-label="FD Design System"
                                    />
                                </a>
                            </Link>
                        ),
                    },
                    {
                        text: 'Main',
                        isToggle: true,
                        menuItems: [
                            {
                                text: 'Home',
                                component: (
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Brandbook 📤',
                                href: 'https://fd.nl/brandbook',
                                target: '_blank',
                            },
                            {
                                text: 'Colors 📤',
                                href:
                                    'https://fdmediagroep.atlassian.net/wiki/spaces/FDMT/pages/771162327/Colors',
                                target: '_blank',
                            },
                            {
                                text: 'Design Tokens',
                                component: (
                                    <Link href="/tokens">
                                        <a>Design Tokens</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Downloads 📤',
                                href:
                                    'https://fdmediagroep.atlassian.net/wiki/spaces/SHAR/pages/729186428/Bestandslijsten',
                                target: '_blank',
                            },
                        ],
                    },
                    {
                        text: 'Article',
                        isToggle: true,
                        menuItems: [
                            {
                                text: 'BulletPoint',
                                component: (
                                    <Link href="/article-bullet-point">
                                        <a>BulletPoint</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Financial Agenda',
                                component: (
                                    <Link href="/financial-agenda">
                                        <a>Financial Agenda</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Image',
                                component: (
                                    <Link href="/article-image">
                                        <a>Image</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Infographic',
                                component: (
                                    <Link href="/article-infographic">
                                        <a>Infographic</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Latest News',
                                component: (
                                    <Link href="/article-latest-news">
                                        <a>Latest News</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'LinkBlock',
                                component: (
                                    <Link href="/article-link-block">
                                        <a>LinkBlock</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'LinkCard',
                                component: (
                                    <Link href="/article-link-card">
                                        <a>LinkCard</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'NumberFrame',
                                component: (
                                    <Link href="/numberframe">
                                        <a>NumberFrame</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Quote',
                                component: (
                                    <Link href="/quote">
                                        <a>Quote</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'ReadMore',
                                component: (
                                    <Link href="/readmore">
                                        <a>ReadMore</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Summary',
                                component: (
                                    <Link href="/article-summary">
                                        <a>Summary</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Tags',
                                component: (
                                    <Link href="/article-tags">
                                        <a>Tags</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'TextFrame',
                                component: (
                                    <Link href="/textframe">
                                        <a>TextFrame</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Toolbar',
                                isToggle: true,
                                menuItems: [
                                    {
                                        text: 'Horizontal',
                                        component: (
                                            <Link href="/toolbar/horizontal">
                                                <a>Horizontal</a>
                                            </Link>
                                        ),
                                    },
                                    {
                                        text: 'Vertical',
                                        component: (
                                            <Link href="/toolbar/vertical">
                                                <a>Vertical</a>
                                            </Link>
                                        ),
                                    },
                                ],
                            },
                            {
                                text: 'WordFrame',
                                component: (
                                    <Link href="/wordframe">
                                        <a>WordFrame</a>
                                    </Link>
                                ),
                            },
                        ],
                    },
                    {
                        text: 'Controls',
                        isToggle: true,
                        menuItems: [
                            {
                                text: 'Breaking Switch',
                                component: (
                                    <Link href="/input/breaking-switch">
                                        <a>Breaking Switch</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Button',
                                component: (
                                    <Link href="/button/default">
                                        <a>Button</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Button CTA',
                                component: (
                                    <Link href="/button/cta">
                                        <a>Button CTA</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Button Follow',
                                component: (
                                    <Link href="/button/follow">
                                        <a>Button Follow</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Ghost Button',
                                component: (
                                    <Link href="/button/ghost">
                                        <a>Ghost Button</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Checkbox',
                                component: (
                                    <Link href="/input/checkbox">
                                        <a>Checkbox</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Date',
                                component: (
                                    <Link href="/input/dateinput">
                                        <a>Date</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'E-mail',
                                component: (
                                    <Link href="/input/emailinput">
                                        <a>E-mail</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Mobile (tel)',
                                component: (
                                    <Link href="/input/mobileinput">
                                        <a>Mobile (tel)</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Radio',
                                component: (
                                    <Link href="/input/radio">
                                        <a>Radio</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Select',
                                component: (
                                    <Link href="/input/select">
                                        <a>Select</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Switch',
                                component: (
                                    <Link href="/input/switch">
                                        <a>Switch</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'TextArea',
                                component: (
                                    <Link href="/input/textarea">
                                        <a>TextArea</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Text',
                                component: (
                                    <Link href="/input/textinput">
                                        <a>Text</a>
                                    </Link>
                                ),
                            },
                        ],
                    },
                    {
                        text: 'Cards',
                        component: (
                            <Link href="/cards">
                                <a>Cards</a>
                            </Link>
                        ),
                        menuItems: [
                            {
                                text: 'Horizontal',
                                isToggle: true,
                                menuItems: [
                                    {
                                        text: 'Horizontal 1',
                                        component: (
                                            <Link href="/card/horizontal-1">
                                                <a>Horizontal 1</a>
                                            </Link>
                                        ),
                                    },
                                    {
                                        text: 'Horizontal 2',
                                        component: (
                                            <Link href="/card/horizontal-2">
                                                <a>Horizontal 2</a>
                                            </Link>
                                        ),
                                    },
                                    {
                                        text: 'Horizontal 3',
                                        component: (
                                            <Link href="/card/horizontal-3">
                                                <a>Horizontal 3</a>
                                            </Link>
                                        ),
                                    },
                                ],
                            },
                            {
                                text: 'Hybrid',
                                isToggle: true,
                                menuItems: [
                                    {
                                        text: 'Hybrid 1',
                                        component: (
                                            <Link href="/card/hybrid-1">
                                                <a>Hybrid 1</a>
                                            </Link>
                                        ),
                                    },
                                    {
                                        text: 'Hybrid 2',
                                        component: (
                                            <Link href="/card/hybrid-2">
                                                <a>Hybrid 2</a>
                                            </Link>
                                        ),
                                    },
                                ],
                            },
                            {
                                text: 'LinkCard',
                                component: (
                                    <Link href="/card/link-card">
                                        <a>LinkCard</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Vertical',
                                isToggle: true,
                                menuItems: [
                                    {
                                        text: 'Vertical 1',
                                        component: (
                                            <Link href="/card/vertical-1">
                                                <a>Vertical 1</a>
                                            </Link>
                                        ),
                                    },
                                    {
                                        text: 'Vertical 2',
                                        component: (
                                            <Link href="/card/vertical-2">
                                                <a>Vertical 2</a>
                                            </Link>
                                        ),
                                    },
                                    {
                                        text: 'Vertical 3',
                                        component: (
                                            <Link href="/card/vertical-3">
                                                <a>Vertical 3</a>
                                            </Link>
                                        ),
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        text: 'Misc.',
                        isToggle: true,
                        menuItems: [
                            {
                                text: 'A/B Testing component',
                                component: (
                                    <Link href="/ab">
                                        <a>A/B Testing component</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Accordion',
                                component: (
                                    <Link href="/accordion">
                                        <a>Accordion</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Author Info',
                                component: (
                                    <Link href="/author-info">
                                        <a>Author Info</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Cookie Consent',
                                component: (
                                    <Link href="/cookieconsent#cookie-consent">
                                        <a>Cookie Consent</a>
                                    </Link>
                                ),
                                menuItems: [
                                    {
                                        text: 'Locked Content',
                                        component: (
                                            <Link href="/cookieconsent#locked-content">
                                                <a>Locked Content</a>
                                            </Link>
                                        ),
                                    },
                                ],
                            },
                            {
                                text: 'Grid',
                                component: (
                                    <Link href="/grid">
                                        <a>Grid</a>
                                    </Link>
                                ),
                                menuItems: [
                                    {
                                        text: 'Test article',
                                        component: (
                                            <Link href="/achtergrond/1324449/alle-verrijking-op-een-rijtje">
                                                <a rel="nofollow">
                                                    Test article
                                                </a>
                                            </Link>
                                        ),
                                    },
                                    {
                                        text: 'Test page',
                                        component: (
                                            <Link href="/fd-web">
                                                <a rel="nofollow">Test page</a>
                                            </Link>
                                        ),
                                    },
                                ],
                            },
                            {
                                text: 'Modal',
                                component: (
                                    <Link href="/modal">
                                        <a>Modal</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Stock Ticker',
                                component: (
                                    <Link href="/stock-ticker">
                                        <a>Stock Ticker</a>
                                    </Link>
                                ),
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
                                        __html: ProfileIcon,
                                    }}
                                />{' '}
                                Inloggen
                            </ButtonGhost>
                        ),
                    },
                ]}
            >
                <>
                    <form onSubmit={handleSearchSubmit}>
                        <div className={styles.search}>
                            <input
                                name="search"
                                placeholder="Dummy zoekbalk..."
                                onBlur={handleSearchBlur}
                                aria-label="Search text"
                            />
                            <button
                                type="submit"
                                name="search"
                                dangerouslySetInnerHTML={{
                                    __html: SpyglassIcon,
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
                                __html: ProfileIcon,
                            }}
                        />{' '}
                        Inloggen
                    </ButtonGhost>
                </>
            </Menu>

            <section className={pageStyle}>
                <main>
                    <Component {...pageProps} />
                </main>
                <Tooltip />
            </section>
        </>
    );
}

// Will be called once for every metric that has to be reported.
export function reportWebVitals(metric) {
    // These metrics can be sent to any analytics service
    console.log(metric);
}

export default App;
