import React from 'react';
import styles from './tokens.module.scss';
import fs from 'fs';
import path from 'path';
import Head from 'next/dist/next-server/lib/head';
import colors from '../../public/assets/design-tokens/colors.json';
import media from '../../public/assets/design-tokens/media.json';
import typography from '../../public/assets/design-tokens/typography.json';

interface Props {
    icons: any;
    [x: string]: any;
}

export const metaTitle = 'Design tokens';
export const metaDescription =
    'Design tokens, collection of design tokens used by the components in this Design System';

function Tokens(props: Props) {
    function handleFocusColor(e: React.FocusEvent<HTMLInputElement>) {
        e.currentTarget.select();
    }

    const colorGroups = Object.entries(colors.colors).map((colors) => (
        <div key={colors[0]} className={styles.group}>
            <h2>{colors[0]}</h2>
            <div>
                {Object.entries(colors[1]).map((value) => {
                    return (
                        <div key={`${colors[0]}-${value[0]}`}>
                            <label
                                htmlFor={`${colors[0]}-${value[0]}`}
                                className={styles.colorTile}
                                style={{ backgroundColor: value[1] }}
                            />
                            <label htmlFor={`${colors[0]}-${value[0]}`}>
                                {value[0]}:
                            </label>
                            <input
                                id={`${colors[0]}-${value[0]}`}
                                readOnly={true}
                                value={value[1]}
                                onFocus={handleFocusColor}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    ));

    const fonts = Object.entries(typography['font-family']).map((fonts) => (
        <div key={fonts[0]} className={styles.group}>
            <div>
                <label
                    htmlFor={`${fonts[0]}-${fonts[0]}`}
                    style={{ fontFamily: fonts[1] }}
                >
                    {fonts[0]}:
                </label>
                <input
                    id={`${fonts[0]}-${fonts[0]}`}
                    readOnly={true}
                    value={fonts[1]}
                    onFocus={handleFocusColor}
                    style={{ fontFamily: fonts[1] }}
                />
            </div>
        </div>
    ));

    return (
        <section className={styles.tokens}>
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

            <h1>Design tokens</h1>
            <small>Page generated on: {props.updated}</small>
            <fieldset>
                <legend>Colors:</legend>
                <textarea
                    defaultValue={JSON.stringify(colors, null, 2)}
                    readOnly={true}
                />
            </fieldset>

            <div className={styles.groupContainer}>{colorGroups}</div>

            <fieldset>
                <legend>Typography:</legend>
                <textarea
                    defaultValue={JSON.stringify(typography, null, 2)}
                    readOnly={true}
                />
            </fieldset>

            <div className={styles.fontsContainer}>
                <h2>Fonts</h2>
                {fonts}
            </div>

            <fieldset>
                <legend>Media query sizes:</legend>
                <textarea
                    defaultValue={JSON.stringify(media, null, 2)}
                    readOnly={true}
                />
            </fieldset>

            <div className={styles.fontsContainer}>
                <h2>SVG Icons</h2>
                <div>
                    {props.icons.map((icon, idx) => (
                        <span
                            key={idx}
                            className={`${styles.icon}`}
                            dangerouslySetInnerHTML={{ __html: icon }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export async function getStaticProps() {
    const dirents = fs.readdirSync(
        path.join(process.cwd(), 'public', 'assets', 'icons'),
        { encoding: 'utf-8', withFileTypes: true }
    );
    const iconNames = dirents
        .filter((dirent) => dirent.isFile() && dirent.name.endsWith('.svg'))
        .map((dirent) => dirent.name);
    const icons = iconNames.map((iconFileName) => {
        return fs.readFileSync(
            path.join(process.cwd(), 'public', 'assets', 'icons', iconFileName),
            'utf-8'
        );
    });

    const updated = new Date().toLocaleString();
    return {
        props: {
            icons,
            updated,
        },
        // we will attempt to re-generate the page:
        // - when a request comes in
        // - at most once every 10 seconds
        // revalidate: 10,
    };
}

export default Tokens;
