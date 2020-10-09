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
                        linkText: 'FD Design System',
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
                        linkText: 'Main',
                        href: '#',
                        menuItems: [
                            {
                                linkText: 'Home',
                                href: '/',
                            },
                            {
                                linkText: 'Brandbook 📤',
                                href: 'https://fd.nl/brandbook',
                                target: '_blank',
                            },
                            {
                                linkText: 'Colors 📤',
                                href:
                                    'https://fdmediagroep.atlassian.net/wiki/spaces/FDMT/pages/771162327/Colors',
                                target: '_blank',
                            },
                            {
                                linkText: 'Design Tokens',
                                href: '/tokens',
                            },
                            {
                                linkText: 'Downloads 📤',
                                href:
                                    'https://fdmediagroep.atlassian.net/wiki/spaces/SHAR/pages/729186428/Bestandslijsten',
                                target: '_blank',
                            },
                        ],
                    },
                    {
                        linkText: 'Article',
                        href: '#',
                        menuItems: [
                            {
                                linkText: 'BulletPoint',
                                href: '/article-bullet-point',
                            },
                            {
                                linkText: 'Financial Agenda',
                                href: '/financial-agenda',
                            },
                            {
                                linkText: 'Image',
                                href: '/article-image',
                            },
                            {
                                linkText: 'Infographic',
                                href: '/article-infographic',
                            },
                            {
                                linkText: 'Latest News',
                                href: '/article-latest-news',
                            },
                            {
                                linkText: 'LinkBlock',
                                href: '/article-link-block',
                            },
                            {
                                linkText: 'LinkCard',
                                href: '/article-link-card',
                            },
                            {
                                linkText: 'NumberFrame',
                                href: '/numberframe',
                            },
                            {
                                linkText: 'Quote',
                                href: '/quote',
                            },
                            {
                                linkText: 'ReadMore',
                                href: '/readmore',
                            },
                            {
                                linkText: 'Summary',
                                href: '/article-summary',
                            },
                            {
                                linkText: 'Tags',
                                href: '/article-tags',
                            },
                            {
                                linkText: 'TextFrame',
                                href: '/textframe',
                            },
                            {
                                linkText: 'WordFrame',
                                href: '/wordframe',
                            },
                        ],
                    },
                    {
                        linkText: 'Controls',
                        href: '#',
                        menuItems: [
                            {
                                linkText: 'Breaking Switch',
                                href: '/input/breaking-switch',
                            },
                            {
                                linkText: 'Button',
                                href: '/button/default',
                            },
                            { linkText: 'Button CTA', href: '/button/cta' },
                            {
                                linkText: 'Button Follow',
                                href: '/button/follow',
                            },
                            {
                                linkText: 'Ghost Button',
                                href: '/button/ghost',
                            },
                            { linkText: 'Checkbox', href: '/input/checkbox' },
                            { linkText: 'Date', href: '/input/dateinput' },
                            { linkText: 'E-mail', href: '/input/emailinput' },
                            {
                                linkText: 'Mobile (tel)',
                                href: '/input/mobileinput',
                            },
                            { linkText: 'Radio', href: '/input/radio' },
                            { linkText: 'Select', href: '/input/select' },
                            { linkText: 'Switch', href: '/input/switch' },
                            { linkText: 'TextArea', href: '/input/textarea' },
                            { linkText: 'Text', href: '/input/textinput' },
                        ],
                    },
                    {
                        linkText: 'Cards',
                        href: '/cards',
                        menuItems: [
                            {
                                linkText: 'Horizontal',
                                href: '/cards',
                                menuItems: [
                                    {
                                        linkText: 'Horizontal 1',
                                        href: '/card/horizontal-1',
                                    },
                                    {
                                        linkText: 'Horizontal 2',
                                        href: '/card/horizontal-2',
                                    },
                                    {
                                        linkText: 'Horizontal 3',
                                        href: '/card/horizontal-3',
                                    },
                                ],
                            },
                            {
                                linkText: 'Hybrid',
                                href: '/cards',
                                menuItems: [
                                    {
                                        linkText: 'Hybrid 1',
                                        href: '/card/hybrid-1',
                                    },
                                    {
                                        linkText: 'Hybrid 2',
                                        href: '/card/hybrid-2',
                                    },
                                ],
                            },
                            {
                                linkText: 'LinkCard',
                                href: '/card/link-card',
                                menuItems: [
                                    {
                                        linkText: 'LinkCard',
                                        href: '/card/link-card',
                                    },
                                ],
                            },
                            {
                                linkText: 'Vertical',
                                href: '/cards',
                                menuItems: [
                                    {
                                        linkText: 'Vertical 1',
                                        href: '/card/horizontal-1',
                                    },
                                    {
                                        linkText: 'Vertical 2',
                                        href: '/card/horizontal-2',
                                    },
                                    {
                                        linkText: 'Vertical 3',
                                        href: '/card/horizontal-3',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        linkText: 'Misc.',
                        href: '#',
                        menuItems: [
                            {
                                linkText: 'A/B Testing component',
                                href: '/ab',
                            },
                            {
                                linkText: 'Accordion',
                                href: '/accordion',
                            },
                            { linkText: 'Author Info', href: '/author-info' },
                            {
                                linkText: 'Cookie Consent',
                                href: '/cookieconsent#cookie-consent',
                                menuItems: [
                                    {
                                        linkText: 'Locked Content',
                                        href: '/cookieconsent#locked-content',
                                    },
                                ],
                            },
                            {
                                linkText: 'Menu',
                                href: '/menu',
                            },
                            { linkText: 'Modal', href: '/modal' },
                            {
                                linkText: 'Stock Ticker',
                                href: '/stock-ticker',
                            },
                        ],
                    },
                ]}
                moreMenuItems={[
                    {
                        linkText: 'About',
                        href: '#',
                        menuItems: [
                            {
                                linkText: 'GitHub',
                                href:
                                    'https://github.com/FDMediagroep/fd-design-system',
                                target: '_blank',
                                component: (
                                    <figure
                                        className={`${styles.invertable} ${styles.github}`}
                                    >
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
                                ),
                            },
                            {
                                linkText: 'Themes',
                                component: (
                                    <Themes groupName="sub-menu-themes" />
                                ),
                            },
                            {
                                linkText: 'Test article',
                                href: '/[section]/[id]/[title]',
                                rel: 'nofollow',
                                as:
                                    '/achtergrond/1324449/alle-verrijking-op-een-rijtje',
                            },
                            {
                                linkText: 'Test page',
                                href: '/fd-web',
                                rel: 'nofollow',
                            },
                        ],
                    },
                    {
                        linkText: '',
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
                        linkText: '',
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
