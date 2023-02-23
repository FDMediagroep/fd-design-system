import React from 'react';
import styles from './cards.module.scss';
import Link from 'next/link';
import Head from 'next/head';

export const metaTitle = 'Cards';
export const metaDescription = 'Collection of all cards';

function Page() {
    return (
        <>
            <Head>
                <title>
                    {`${metaTitle} - Design System - Het Financieele Dagblad`}
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
            <h1>Table of Contents</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Card</td>
                        <td>Page</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Link href="/card/horizontal-1">
                                Horizontal Card 1
                            </Link>
                        </td>
                        <td>
                            <ul>
                                <li>Author</li>
                                <li>Beurs</li>
                                <li>Category</li>
                                <li>Dossier</li>
                                <li>Tag</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/card/horizontal-2">
                                Horizontal Card 2
                            </Link>
                        </td>
                        <td>
                            <ul>
                                <li>Author pages</li>
                                <li>Search</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/card/horizontal-4">
                                Horizontal Card 4
                            </Link>
                        </td>
                        <td>
                            <ul>
                                <li>My news</li>
                                <li>Latest news</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/card/hybrid-1">Hybrid Card 1</Link>
                        </td>
                        <td>
                            <ul>
                                <li>Home</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/card/hybrid-2">Hybrid Card 2</Link>
                        </td>
                        <td>
                            <ul>
                                <li>Home specials/categories</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/card/hybrid-4">Hybrid Card 4</Link>
                        </td>
                        <td>
                            <ul>
                                <li>Home</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/card/vertical-1">Vertical Card 1</Link>
                        </td>
                        <td>
                            <ul>
                                <li>Home</li>
                                <li>Dossier overview</li>
                                <li>Persoonlijk Home</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/card/vertical-5">Vertical Card 5</Link>
                        </td>
                        <td>
                            <ul>
                                <li>Podcasts overview</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/card/vertical-6">Vertical Card 6</Link>
                        </td>
                        <td>
                            <ul>
                                <li>Home</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Page;
