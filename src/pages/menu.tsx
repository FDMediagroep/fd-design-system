import React from 'react';
import { Explain } from '../components/Explain';
import { Menu, getCssClassNames } from '../components/menu/Menu';
import Head from 'next/head';
import styles from './menu.module.scss';
import { FdIcon, SpyglassIcon } from '../design-tokens/icons';

const metaTitle = 'Menu';
const metaDescription = 'Menu, used to display a navigational menu';

function Page() {
    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
                previewClassName={styles.menu}
                cssClassNames={[
                    ...getCssClassNames(),
                    styles.search,
                    styles.logo,
                ]}
                hideCSS={true}
                hideHTML={true}
                hideExternalCodeEditors={true}
                legend="Menu"
                reactComponentName="Menu"
                description={
                    <>
                        <p>Used as navigational menu.</p>
                        <p>This element is solely used to display menu.</p>
                    </>
                }
            >
                <Menu
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
                            link: '#',
                            menuItems: [
                                {
                                    label: 'Cards',
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
                                        {
                                            label: 'Hybrid 1',
                                            link: '/card/hybrid-1',
                                        },
                                        {
                                            label: 'Hybrid 2',
                                            link: '/card/hybrod-2',
                                        },
                                        {
                                            label: 'LinkCard',
                                            link: '/card/link-card',
                                        },
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
                                            link:
                                                '/cookieconsent#locked-content',
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
                >
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
                </Menu>
            </Explain>
        </>
    );
}

export default Page;
