import React, { useState } from 'react';
import styles from './cards.module.scss';
import Link from 'next/link';

function Page() {
    const [bookmarked, setBookmarked] = useState(false);

    function toggleBookmark() {
        setBookmarked(!bookmarked);
    }

    return (
        <>
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
                                <a>Horizontal Card 1</a>
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
                                <a>Horizontal Card 2</a>
                            </Link>
                        </td>
                        <td>
                            <ul>
                                <li>Latest news</li>
                                <li>My News</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/card/horizontal-3">
                                <a>Horizontal Card 3</a>
                            </Link>
                        </td>
                        <td>
                            <ul>
                                <li>Search</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/card/hybrid-1">
                                <a>Hybrid Card 1</a>
                            </Link>
                        </td>
                        <td>
                            <ul>
                                <li>Home</li>
                                <li>Categories</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/card/hybrid-2">
                                <a>Hybrid Card 2</a>
                            </Link>
                        </td>
                        <td>
                            <ul>
                                <li>Home</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/card/vertical-1">
                                <a>Vertical Card 1</a>
                            </Link>
                        </td>
                        <td>
                            <ul>
                                <li>Home</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/card/vertical-2">
                                <a>Vertical Card 2</a>
                            </Link>
                        </td>
                        <td>
                            <ul>
                                <li>Dossier overview</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/card/vertical-3">
                                <a>Vertical Card 3</a>
                            </Link>
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
