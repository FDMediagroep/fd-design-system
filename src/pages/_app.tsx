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
        require('@webcomponents/webcomponentsjs');

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
                        href: '/',
                        component: (
                            <span
                                className={styles.logo}
                                dangerouslySetInnerHTML={{ __html: FdIcon }}
                                aria-label="FD Design System"
                            />
                        ),
                    },
                    {
                        text: 'Main',
                        isToggle: true,
                        menuItems: [
                            {
                                text: 'Home',
                                href: '/',
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
                                href: '/tokens',
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
                                href: '/article-bullet-point',
                            },
                            {
                                text: 'Financial Agenda',
                                href: '/financial-agenda',
                            },
                            {
                                text: 'Image',
                                href: '/article-image',
                            },
                            {
                                text: 'Infographic',
                                href: '/article-infographic',
                            },
                            {
                                text: 'Latest News',
                                href: '/article-latest-news',
                            },
                            {
                                text: 'LinkBlock',
                                href: '/article-link-block',
                            },
                            {
                                text: 'LinkCard',
                                href: '/article-link-card',
                            },
                            {
                                text: 'NumberFrame',
                                href: '/numberframe',
                            },
                            {
                                text: 'Quote',
                                href: '/quote',
                            },
                            {
                                text: 'ReadMore',
                                href: '/readmore',
                            },
                            {
                                text: 'Summary',
                                href: '/article-summary',
                            },
                            {
                                text: 'Tags',
                                href: '/article-tags',
                            },
                            {
                                text: 'TextFrame',
                                href: '/textframe',
                            },
                            {
                                text: 'Toolbar',
                                isToggle: true,
                                menuItems: [
                                    {
                                        text: 'Horizontal',
                                        href: '/toolbar/horizontal',
                                    },
                                    {
                                        text: 'Vertical',
                                        href: '/toolbar/vertical',
                                    },
                                ],
                            },
                            {
                                text: 'WordFrame',
                                href: '/wordframe',
                            },
                        ],
                    },
                    {
                        text: 'Controls',
                        isToggle: true,
                        menuItems: [
                            {
                                text: 'Breaking Switch',
                                href: '/input/breaking-switch',
                            },
                            {
                                text: 'Button',
                                href: '/button/default',
                            },
                            { text: 'Button CTA', href: '/button/cta' },
                            {
                                text: 'Button Follow',
                                href: '/button/follow',
                            },
                            {
                                text: 'Ghost Button',
                                href: '/button/ghost',
                            },
                            { text: 'Checkbox', href: '/input/checkbox' },
                            { text: 'Date', href: '/input/dateinput' },
                            { text: 'E-mail', href: '/input/emailinput' },
                            {
                                text: 'Mobile (tel)',
                                href: '/input/mobileinput',
                            },
                            { text: 'Radio', href: '/input/radio' },
                            { text: 'Select', href: '/input/select' },
                            { text: 'Switch', href: '/input/switch' },
                            { text: 'TextArea', href: '/input/textarea' },
                            { text: 'Text', href: '/input/textinput' },
                        ],
                    },
                    {
                        text: 'Cards',
                        href: '/cards',
                        menuItems: [
                            {
                                text: 'Horizontal',
                                isToggle: true,
                                menuItems: [
                                    {
                                        text: 'Horizontal 1',
                                        href: '/card/horizontal-1',
                                    },
                                    {
                                        text: 'Horizontal 2',
                                        href: '/card/horizontal-2',
                                    },
                                    {
                                        text: 'Horizontal 3',
                                        href: '/card/horizontal-3',
                                    },
                                ],
                            },
                            {
                                text: 'Hybrid',
                                isToggle: true,
                                menuItems: [
                                    {
                                        text: 'Hybrid 1',
                                        href: '/card/hybrid-1',
                                    },
                                    {
                                        text: 'Hybrid 2',
                                        href: '/card/hybrid-2',
                                    },
                                ],
                            },
                            {
                                text: 'LinkCard',
                                href: '/card/link-card',
                            },
                            {
                                text: 'Vertical',
                                isToggle: true,
                                menuItems: [
                                    {
                                        text: 'Vertical 1',
                                        href: '/card/horizontal-1',
                                    },
                                    {
                                        text: 'Vertical 2',
                                        href: '/card/horizontal-2',
                                    },
                                    {
                                        text: 'Vertical 3',
                                        href: '/card/horizontal-3',
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
                                href: '/ab',
                            },
                            {
                                text: 'Accordion',
                                href: '/accordion',
                            },
                            { text: 'Author Info', href: '/author-info' },
                            {
                                text: 'Cookie Consent',
                                href: '/cookieconsent#cookie-consent',
                                menuItems: [
                                    {
                                        text: 'Locked Content',
                                        href: '/cookieconsent#locked-content',
                                    },
                                ],
                            },
                            { text: 'Modal', href: '/modal' },
                            {
                                text: 'Stock Ticker',
                                href: '/stock-ticker',
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
                            {
                                text: 'Test article',
                                href: '/[section]/[id]/[title]',
                                rel: 'nofollow',
                                as:
                                    '/achtergrond/1324449/alle-verrijking-op-een-rijtje',
                            },
                            {
                                text: 'Test page',
                                href: '/fd-web',
                                rel: 'nofollow',
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
