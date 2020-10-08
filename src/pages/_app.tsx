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
        // require('@webcomponents/webcomponentsjs');

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
                label="Main menu"
                menuItems={[
                    {
                        label: 'FD Design System',
                        link: '/',
                        component: (
                            <span
                                className={styles.logo}
                                dangerouslySetInnerHTML={{ __html: FdIcon }}
                            />
                        ),
                    },
                    {
                        label: 'Main',
                        link: '#',
                        menuItems: [
                            {
                                label: 'Home',
                                link: '/',
                            },
                            {
                                label: 'Brandbook 📤',
                                link: 'https://fd.nl/brandbook',
                                target: '_blank',
                            },
                            {
                                label: 'Colors 📤',
                                link:
                                    'https://fdmediagroep.atlassian.net/wiki/spaces/FDMT/pages/771162327/Colors',
                                target: '_blank',
                            },
                            {
                                label: 'Design Tokens',
                                link: '/tokens',
                            },
                            {
                                label: 'Downloads 📤',
                                link:
                                    'https://fdmediagroep.atlassian.net/wiki/spaces/SHAR/pages/729186428/Bestandslijsten',
                                target: '_blank',
                            },
                        ],
                    },
                    {
                        label: 'Article',
                        link: '#',
                        menuItems: [
                            {
                                label: 'BulletPoint',
                                link: '/article-bullet-point',
                            },
                            {
                                label: 'Financial Agenda',
                                link: '/financial-agenda',
                            },
                            {
                                label: 'Image',
                                link: '/article-image',
                            },
                            {
                                label: 'Infographic',
                                link: '/article-infographic',
                            },
                            {
                                label: 'Latest News',
                                link: '/article-latest-news',
                            },
                            {
                                label: 'LinkBlock',
                                link: '/article-link-block',
                            },
                            {
                                label: 'LinkCard',
                                link: '/article-link-card',
                            },
                            {
                                label: 'NumberFrame',
                                link: '/numberframe',
                            },
                            {
                                label: 'Quote',
                                link: '/quote',
                            },
                            {
                                label: 'ReadMore',
                                link: '/readmore',
                            },
                            {
                                label: 'Summary',
                                link: '/article-summary',
                            },
                            {
                                label: 'Tags',
                                link: '/article-tags',
                            },
                            {
                                label: 'TextFrame',
                                link: '/textframe',
                            },
                            {
                                label: 'WordFrame',
                                link: '/wordframe',
                            },
                        ],
                    },
                    {
                        label: 'Controls',
                        link: '#',
                        menuItems: [
                            {
                                label: 'Breaking Switch',
                                link: '/input/breaking-switch',
                            },
                            {
                                label: 'Button',
                                link: '/button/default',
                            },
                            { label: 'Button CTA', link: '/button/cta' },
                            {
                                label: 'Button Follow',
                                link: '/button/follow',
                            },
                            {
                                label: 'Ghost Button',
                                link: '/button/ghost',
                            },
                            { label: 'Checkbox', link: '/input/checkbox' },
                            { label: 'Date', link: '/input/dateinput' },
                            { label: 'E-mail', link: '/input/emailinput' },
                            {
                                label: 'Mobile (tel)',
                                link: '/input/mobileinput',
                            },
                            { label: 'Radio', link: '/input/radio' },
                            { label: 'Select', link: '/input/select' },
                            { label: 'Switch', link: '/input/switch' },
                            { label: 'TextArea', link: '/input/textarea' },
                            { label: 'Text', link: '/input/textinput' },
                        ],
                    },
                    {
                        label: 'Cards',
                        link: '/cards',
                        menuItems: [
                            {
                                label: 'Horizontal',
                                link: '/cards',
                                menuItems: [
                                    {
                                        label: 'Horizontal 1',
                                        link: '/card/horizontal-1',
                                    },
                                    {
                                        label: 'Horizontal 2',
                                        link: '/card/horizontal-2',
                                    },
                                    {
                                        label: 'Horizontal 3',
                                        link: '/card/horizontal-3',
                                    },
                                ],
                            },
                            {
                                label: 'Hybrid',
                                link: '/cards',
                                menuItems: [
                                    {
                                        label: 'Hybrid 1',
                                        link: '/card/hybrid-1',
                                    },
                                    {
                                        label: 'Hybrid 2',
                                        link: '/card/hybrod-2',
                                    },
                                ],
                            },
                            {
                                label: 'LinkCard',
                                link: '/card/link-card',
                                menuItems: [
                                    {
                                        label: 'LinkCard',
                                        link: '/card/link-card',
                                    },
                                ],
                            },
                            {
                                label: 'Vertical',
                                link: '/cards',
                                menuItems: [
                                    {
                                        label: 'Vertical 1',
                                        link: '/card/horizontal-1',
                                    },
                                    {
                                        label: 'Vertical 2',
                                        link: '/card/horizontal-2',
                                    },
                                    {
                                        label: 'Vertical 3',
                                        link: '/card/horizontal-3',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: 'Misc.',
                        link: '#',
                        menuItems: [
                            {
                                label: 'A/B Testing component',
                                link: '/ab',
                            },
                            {
                                label: 'Accordion',
                                link: '/accordion',
                            },
                            { label: 'Author Info', link: '/author-info' },
                            {
                                label: 'Cookie Consent',
                                link: '/cookieconsent#cookie-consent',
                                menuItems: [
                                    {
                                        label: 'Locked Content',
                                        link: '/cookieconsent#locked-content',
                                    },
                                ],
                            },
                            {
                                label: 'Menu',
                                link: '/menu',
                            },
                            { label: 'Modal', link: '/modal' },
                            {
                                label: 'Stock Ticker',
                                link: '/stock-ticker',
                            },
                        ],
                    },
                ]}
                moreMenuItems={[
                    {
                        label: 'About',
                        link: '#',
                        menuItems: [
                            {
                                label: 'GitHub',
                                link:
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
                                label: 'Themes',
                                component: (
                                    <Themes groupName="sub-menu-themes" />
                                ),
                            },
                            {
                                label: 'Test article',
                                link: '/[section]/[id]/[title]',
                                rel: 'nofollow',
                                as:
                                    '/achtergrond/1324449/alle-verrijking-op-een-rijtje',
                            },
                            {
                                label: 'Test page',
                                link: '/fd-web',
                                rel: 'nofollow',
                            },
                        ],
                    },
                ]}
            >
                <>
                    <form onSubmit={handleSearchSubmit}>
                        <div className={styles.search}>
                            <input
                                name="search"
                                placeholder="Zoeken..."
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
                    <ButtonCta className={styles.customButton}>
                        Abonneren
                    </ButtonCta>
                    <ButtonGhost className={styles.customButton}>
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
    // console.log(metric);
}

export default App;
