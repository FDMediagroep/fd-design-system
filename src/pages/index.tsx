import React, { useEffect } from 'react';
import styles from './index.module.scss';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import ReactMD from 'react-markdown/with-html';
import { useRouter } from 'next/router';

const metaTitle = 'FD Design System';
const metaDescription = 'Collection of all the styled components for FD.nl';

interface Props {
    readme: string;
}

const baseUrl = 'https://design-system.fd.nl';

function Page(props: Props) {
    const router = useRouter();

    useEffect(() => {
        /**
         * Add id attribute to heading elements so anchors still work.
         */
        [].slice
            .call(document.querySelectorAll('h2'))
            .forEach((heading: HTMLHeadingElement) => {
                heading.setAttribute(
                    'id',
                    heading.innerHTML.toLowerCase().replace(' ', '-')
                );
            });

        /**
         * Intercept all links starting with `baseUrl`.
         * Convert them to Next.js `router.push` calls to enforce SPA behaviour.
         */
        [].slice
            .call(document.querySelectorAll(`a[href^="${baseUrl}"]`))
            .forEach((link: HTMLAnchorElement) => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const url = (e.currentTarget as HTMLAnchorElement).getAttribute(
                        'href'
                    );
                    const route = url.replace(baseUrl, '');
                    route && router.push(route);
                });
            });
    }, []);

    return (
        <section className={styles.index}>
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
            <ReactMD source={props.readme} escapeHtml={false} />
            <a
                className={styles.github}
                href="https://github.com/FDMediagroep/fd-design-system"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
            >
                <figure className={styles.invertable}>
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
                </figure>
            </a>
        </section>
    );
}

export async function getStaticProps() {
    const readme = fs.readFileSync(
        path.join(process.cwd(), 'README.md'),
        'utf-8'
    );

    return {
        props: {
            readme,
        },
    };
}

export default Page;
