import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Menu.module.scss';
import { Themes } from './Themes';

interface Props {
    onVisibilityChange?: (closed: boolean) => void;
}

function Menu(props: Props) {
    const [closed, setClosed] = useState(false);

    function toggle() {
        const newState = !closed;
        props?.onVisibilityChange?.(newState);
        setClosed(newState);
    }

    return (
        <nav className={`${styles.menu} ${closed && styles.menuClosed}`}>
            <div className={styles.toggle} onClick={toggle}>
                {closed ? '▶️' : '◀️'}
            </div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <a
                href="https://fd.nl/brandbook"
                target="_blank"
                rel="noopener noreferrer nofollow"
            >
                Brandbook 📤
            </a>
            <a
                href="https://fdmediagroep.atlassian.net/wiki/spaces/FDMT/pages/771162327/Colors"
                target="_blank"
                rel="noopener noreferrer nofollow"
            >
                Colors 📤
            </a>
            <Link href="/tokens">
                <a>Design Tokens</a>
            </Link>
            <a
                href="https://fdmediagroep.atlassian.net/wiki/spaces/SHAR/pages/729186428/Bestandslijsten"
                target="_blank"
                rel="noopener noreferrer nofollow"
            >
                Downloads 📤
            </a>

            <section>
                <h3>Article</h3>
                <Link href="/article-bullet-point">
                    <a>BulletPoint</a>
                </Link>
                <Link href="/financial-agenda">
                    <a>Financial Agenda</a>
                </Link>
                <Link href="/article-image">
                    <a>Image</a>
                </Link>
                <Link href="/article-infographic">
                    <a>Infographic</a>
                </Link>
                <Link href="/article-latest-news">
                    <a>Latest News</a>
                </Link>
                <Link href="/article-link-block">
                    <a>LinkBlock</a>
                </Link>
                <Link href="/article-link-card">
                    <a>LinkCard</a>
                </Link>
                <Link href="/numberframe">
                    <a>NumberFrame</a>
                </Link>
                <Link href="/quote">
                    <a>Quote</a>
                </Link>
                <Link href="/readmore">
                    <a>ReadMore</a>
                </Link>
                <Link href="/article-summary">
                    <a>Summary</a>
                </Link>
                <Link href="/article-tags">
                    <a>Tags</a>
                </Link>
                <Link href="/textframe">
                    <a>TextFrame</a>
                </Link>
                <Link href="/wordframe">
                    <a>WordFrame</a>
                </Link>
            </section>
            <section>
                <h3>Controls</h3>
                <Link href="/input/breaking-switch">
                    <a>Breaking Switch</a>
                </Link>
                <Link href="/button/default">
                    <a>Button</a>
                </Link>
                <Link href="/button/cta">
                    <a>Button CTA</a>
                </Link>
                <Link href="/button/follow">
                    <a>Button Follow</a>
                </Link>
                <Link href="/button/ghost">
                    <a>Ghost Button</a>
                </Link>
                <Link href="/input/checkbox">
                    <a>Checkbox</a>
                </Link>
                <Link href="/input/dateinput">
                    <a>Date</a>
                </Link>
                <Link href="/input/emailinput">
                    <a>E-mail</a>
                </Link>
                <Link href="/input/mobileinput">
                    <a>Mobile (tel)</a>
                </Link>
                <Link href="/input/radio">
                    <a>Radio</a>
                </Link>
                <Link href="/input/switch">
                    <a>Switch</a>
                </Link>
                <Link href="/input/textarea">
                    <a>TextArea</a>
                </Link>
                <Link href="/input/textinput">
                    <a>Text</a>
                </Link>
            </section>
            <section>
                <h3>Cards</h3>
                <Link href="/cards">
                    <a>Cards</a>
                </Link>
                <Link href="/card/horizontal-1">
                    <a>Horizontal 1</a>
                </Link>
                <Link href="/card/horizontal-2">
                    <a>Horizontal 2</a>
                </Link>
                <Link href="/card/horizontal-3">
                    <a>Horizontal 3</a>
                </Link>
                <Link href="/card/hybrid-1">
                    <a>Hybrid 1</a>
                </Link>
                <Link href="/card/hybrid-2">
                    <a>Hybrid 2</a>
                </Link>
                <Link href="/card/link-card">
                    <a>LinkCard</a>
                </Link>
                <Link href="/card/vertical-1">
                    <a>Vertical 1</a>
                </Link>
                <Link href="/card/vertical-2">
                    <a>Vertical 2</a>
                </Link>
                <Link href="/card/vertical-3">
                    <a>Vertical 3</a>
                </Link>
            </section>
            <section>
                <h3>Misc.</h3>
                <Link href="/ab">
                    <a>A/B Testing component</a>
                </Link>
                <Link href="/accordion">
                    <a>Accordion</a>
                </Link>
                <Link href="/author-info">
                    <a>Author Info</a>
                </Link>
                <Link href="/cookieconsent#cookie-consent">
                    <a>Cookie Consent</a>
                </Link>
                <Link href="/cookieconsent#locked-content">
                    <a>Locked content</a>
                </Link>
                <Link href="/modal">
                    <a>Modal</a>
                </Link>
                <Link href="/stock-ticker">
                    <a>Stock Ticker</a>
                </Link>
            </section>
            <a
                className={styles.image}
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

            <Themes className={styles.themeControls} />

            <Link
                href="/[section]/[id]/[title]"
                as="/achtergrond/1324449/alle-verrijking-op-een-rijtje"
            >
                <a rel="nofollow">Test article</a>
            </Link>
            <Link href="/fd-web">
                <a rel="nofollow">Test page</a>
            </Link>
        </nav>
    );
}

export { Menu };
