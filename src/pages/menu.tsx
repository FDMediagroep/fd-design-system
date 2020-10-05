import React from 'react';
import { Explain } from '../components/Explain';
import { Menu, getCssClassNames } from '../components/menu/Menu';
import Head from 'next/head';
import styles from './menu.module.scss';
import { SpyglassIcon } from '../design-tokens/icons';

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
                cssClassNames={getCssClassNames()}
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
                            label: 'Menu 1',
                            link: '#Menu-1',
                        },
                        {
                            label: 'Menu 2',
                            link: '#Menu-2',
                            menuItems: [
                                { label: 'Menu 2.1', link: '#Menu-2.1' },
                                {
                                    label: 'Menu 2.2',
                                    link: '#Menu-2.2',
                                    menuItems: [
                                        {
                                            label: 'Menu 2.2.1',
                                            link: '#Menu-2.2.1',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            label: 'Menu 3',
                            link: '#Menu-3',
                            menuItems: [
                                { label: 'Menu 3.1', link: '#Menu-3.1' },
                                {
                                    label: 'Menu 3.2',
                                    link: '#Menu-3.2',
                                    menuItems: [
                                        {
                                            label: 'Menu 3.2.1',
                                            link: '#Menu-3.2.1',
                                            menuItems: [
                                                {
                                                    label: 'Menu 3.2.1.1',
                                                    link: '#Menu-3.2.1.1',
                                                },
                                                {
                                                    label: 'Menu 3.2.1.2',
                                                    link: '#Menu-3.2.1.2',
                                                },
                                            ],
                                        },
                                    ],
                                },
                                { label: 'Menu 3.3', link: '#Menu-3.3' },
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
