import React from 'react';
import * as styles from './cards.module.scss';
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
            <table className={styles['table']}>
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
                                <li>Account</li>
                                <li>Beurs</li>
                                <li>Dossier</li>
                                <li>Error</li>
                                <li>My News</li>
                                <li>Net Binnen</li>
                                <li>Section</li>
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
                            <Link href="/card/horizontal-3">
                                Horizontal Card 3
                            </Link>
                        </td>
                        <td>
                            <ul>
                                <li>Homepage podcast card</li>
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
                                <li>Net Binnen</li>
                                <li>Section</li>
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
                                <li>Persoonlijk</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/card/hybrid-2">Hybrid Card 2</Link>
                        </td>
                        <td>
                            <ul>
                                <li>Home</li>
                                <li>Article</li>
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
                                <li>Article</li>
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
                                <li>Persoonlijk</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/card/vertical-2">Vertical Card 2</Link>
                        </td>
                        <td>
                            <ul>
                                <li>Interests</li>
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
