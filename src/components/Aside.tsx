import * as styles from './menu/Menu.module.scss';
import * as asideStyles from './Aside.module.scss';
import {
    CloseIcon,
    CollapseIcon,
    EnvelopeIcon,
    ExpandIcon,
    GithubIcon,
    HamburgerIcon,
    LinkWebsiteIcon,
    LogoFdIcon,
    NewspaperIcon,
    PaperclipIcon,
    PencilIcon,
    Windows8Icon,
} from '../design-tokens/icons';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
    className?: string;
    onClose?: (e?: React.MouseEvent) => void;
    [x: string]: any;
}

function Aside(props: Props) {
    const asideRef = useRef<HTMLElement>();
    const router = useRouter();
    const [expanded, setExpanded] = useState([]);

    const handleNavigation = (e?: React.MouseEvent) => {
        asideRef.current?.scrollTo?.(0, 0);
        setExpanded([]);
        props.onClose?.(e);
    };

    const handleToggle = (id: string) => {
        setExpanded((ids) => {
            if (ids.indexOf(id) > -1) {
                return ids.filter((val) => val != id);
            } else {
                return [...ids, id];
            }
        });
    };

    return (
        <aside ref={asideRef} className={styles['expandable-menu-item']}>
            <ul className="xs__p-0 xs__m-0">
                <li>
                    <button
                        className={`${styles['close-aside-menu-button']} xs__m+4 xs__p-0`}
                        aria-label="Close menu"
                        data-ga-name="menu_click"
                        data-ga-category="user interactions"
                        data-ga-action="menu click"
                        data-ga-label="close sub menu via button"
                        onClick={handleNavigation}
                    >
                        <span>
                            <CloseIcon />
                        </span>
                        <span className={styles['aria-label']}>Close menu</span>
                    </button>
                </li>
                <li
                    className={`${styles['menu-item']} ${
                        expanded.indexOf('main') > -1 ? 'expanded' : ''
                    } xs__pt+3 xs__pr+4 xs__pb+2 xs__pl+4`}
                >
                    <button
                        className={`${styles['expand-toggle']} xs__p-0`}
                        aria-expanded={expanded.indexOf('main') > -1}
                        aria-label="Toggle Main sub-menu"
                        onClick={handleToggle.bind(null, 'main')}
                    >
                        <span className={styles['icon']}>
                            <LogoFdIcon />
                        </span>
                        <span
                            className={`heading ${styles['button-text']} sans xs xs__ml+3`}
                        >
                            Main
                        </span>
                        <span className={styles['expand-icon']}>
                            <ExpandIcon />
                        </span>
                        <span className={styles['collapse-icon']}>
                            <CollapseIcon />
                        </span>
                    </button>
                    <ul
                        className={`${styles['expandable-menu-item']} xs__p-0 xs__pt+1 xs__pr+4 xs__pl+6 s__pl+7`}
                    >
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <a
                                href="https://fd.nl/brandbook"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/brandbook"
                                target="_blank"
                                rel="noreferrer noopener"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Brandbook
                                </span>
                                <span className={asideStyles['popup']}>
                                    <LinkWebsiteIcon />
                                </span>
                            </a>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <a
                                href="https://fdmediagroep.atlassian.net/wiki/spaces/FDMT/pages/771162327/Colors"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fdmediagroep.atlassian.net/wiki/spaces/FDMT/pages/771162327/Colors"
                                target="_blank"
                                rel="noreferrer noopener"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">Colors</span>
                                <span className={asideStyles['popup']}>
                                    <LinkWebsiteIcon />
                                </span>
                            </a>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+1`}
                        >
                            <a
                                href="https://fdmediagroep.atlassian.net/wiki/spaces/SHAR/pages/729186428/Bestandslijsten"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fdmediagroep.atlassian.net/wiki/spaces/SHAR/pages/729186428/Bestandslijsten"
                                target="_blank"
                                rel="noreferrer noopener"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Downloads
                                </span>
                                <span className={asideStyles['popup']}>
                                    <LinkWebsiteIcon />
                                </span>
                            </a>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+1`}
                        >
                            <Link
                                href="/tokens"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/tokens"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">Tokens</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li
                    className={`${styles['menu-item']} ${
                        expanded.indexOf('article') > -1 ? 'expanded' : ''
                    } xs__pt+3 xs__pr+4 xs__pb+2 xs__pl+4`}
                >
                    <button
                        className={`${styles['expand-toggle']} xs__p-0`}
                        aria-expanded={expanded.indexOf('article') > -1}
                        aria-label="Toggle Article sub-menu"
                        onClick={handleToggle.bind(null, 'article')}
                    >
                        <span className={styles['icon']}>
                            <NewspaperIcon />
                        </span>
                        <span
                            className={`heading ${styles['button-text']} sans xs xs__ml+3`}
                        >
                            Article
                        </span>
                        <span className={styles['expand-icon']}>
                            <ExpandIcon />
                        </span>
                        <span className={styles['collapse-icon']}>
                            <CollapseIcon />
                        </span>
                    </button>
                    <ul
                        className={`${styles['expandable-menu-item']} xs__p-0 xs__pt+1 xs__pr+4 xs__pl+6 s__pl+7`}
                    >
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/article-bullet-point"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/article-bullet-point"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Bulletpoint
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/financial-agenda"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/financial-agenda"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Financial Agenda
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/article-image"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/article-image"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">Image</span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/article-infographic"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/article-infographic"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Infographic
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/article-latest-news"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/article-latest-news"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Latest news
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/article-link-block"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/article-link-block"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    LinkBlock
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/article-link-card"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/article-link-card"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    LinkCard
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/numberframe"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/numberframe"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    NumberFrame
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/quote"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/quote"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">Quote</span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/readmore"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/readmore"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    ReadMore
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/article-related-topics"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/article-related-topics"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    RelatedTopics
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/summary"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/summary"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Summary
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/tags"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/tags"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">Tags</span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/textframe"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/textframe"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    TextFrame
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/toolbar/horizontal"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/toolbar/horizontal"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Toolbar (horizontal)
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/toolbar/vertical"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/toolbar/vertical"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Toolbar (vertical)
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/wordframe"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/wordframe"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    WordFrame
                                </span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li
                    className={`${styles['menu-item']} ${
                        expanded.indexOf('controls') > -1 ? 'expanded' : ''
                    } xs__pt+3 xs__pr+4 xs__pb+2 xs__pl+4`}
                >
                    <button
                        className={`${styles['expand-toggle']} xs__p-0`}
                        aria-expanded={expanded.indexOf('controls') > -1}
                        aria-label="Toggle Controls sub-menu"
                        onClick={handleToggle.bind(null, 'controls')}
                    >
                        <span className={styles['icon']}>
                            <PencilIcon />
                        </span>
                        <span
                            className={`heading ${styles['button-text']} sans xs xs__ml+3`}
                        >
                            Controls
                        </span>
                        <span className={styles['expand-icon']}>
                            <ExpandIcon />
                        </span>
                        <span className={styles['collapse-icon']}>
                            <CollapseIcon />
                        </span>
                    </button>
                    <ul
                        className={`${styles['expandable-menu-item']} xs__p-0 xs__pt+1 xs__pr+4 xs__pl+6 s__pl+7`}
                    >
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/input/breaking-switch"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/input/breaking-switch"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Breaking Switch
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/button/button"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/button/button"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Button (default)
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/button/cta"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/button/cta"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Button CTA
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/button/follow"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/button/follow"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Button Follow
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/button/ghost"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/button/ghost"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Button Ghost
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/input/checkbox"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/input/checkbox"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Checkbox
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/input/dateinput"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/input/dateinput"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">Date</span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/button/dropdown"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/button/dropdown"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Dropdown
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/input/emailinput"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/input/emailinput"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">E-mail</span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/input/mobileinput"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/input/mobileinput"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Mobile (tel)
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/input/radio"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/input/radio"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">Radio</span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/input/select"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/input/select"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">Select</span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/input/switch"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/input/switch"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">Switch</span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/input/textarea"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/input/textarea"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    TextArea
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/input/textinput"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/input/textinput"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">Text</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li
                    className={`${styles['menu-item']} ${
                        expanded.indexOf('cards') > -1 ? 'expanded' : ''
                    } xs__pt+3 xs__pr+4 xs__pb+2 xs__pl+4`}
                >
                    <button
                        className={`${styles['expand-toggle']} xs__p-0`}
                        aria-expanded={expanded.indexOf('cards') > -1}
                        aria-label="Toggle Cards sub-menu"
                        onClick={handleToggle.bind(null, 'cards')}
                    >
                        <span className={styles['icon']}>
                            <EnvelopeIcon />
                        </span>
                        <span
                            className={`heading ${styles['button-text']} sans xs xs__ml+3`}
                        >
                            Cards
                        </span>
                        <span className={styles['expand-icon']}>
                            <ExpandIcon />
                        </span>
                        <span className={styles['collapse-icon']}>
                            <CollapseIcon />
                        </span>
                    </button>
                    <ul
                        className={`${styles['expandable-menu-item']} xs__p-0 xs__pt+1 xs__pr+4 xs__pl+6 s__pl+7`}
                    >
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/cards"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/cards"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Overview
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/card/horizontal-1"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/card/horizontal-1"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Horizontal 1
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/card/horizontal-2"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/card/horizontal-2"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Horizontal 2
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/card/horizontal-3"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/card/horizontal-3"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Horizontal 3
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/card/horizontal-4"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/card/horizontal-4"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Horizontal 4
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/card/hybrid-1"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/card/hybrid-1"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Hybrid 1
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/card/hybrid-2"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/card/hybrid-2"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Hybrid 2
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/card/hybrid-4"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/card/hybrid-4"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Hybrid 4
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/card/vertical-1"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/card/vertical-1"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Vertical 1
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/card/vertical-2"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/card/vertical-2"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Vertical 2
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/card/vertical-5"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/card/vertical-5"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Vertical 5
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/card/vertical-6"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/card/vertical-6"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Vertical 6
                                </span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li
                    className={`${styles['menu-item']} ${
                        expanded.indexOf('grid') > -1 ? 'expanded' : ''
                    } xs__pt+3 xs__pr+4 xs__pb+2 xs__pl+4`}
                >
                    <button
                        className={`${styles['expand-toggle']} xs__p-0`}
                        aria-expanded={expanded.indexOf('grid') > -1}
                        aria-label="Toggle Grid sub-menu"
                        onClick={handleToggle.bind(null, 'grid')}
                    >
                        <span className={styles['icon']}>
                            <Windows8Icon />
                        </span>
                        <span
                            className={`heading ${styles['button-text']} sans xs xs__ml+3`}
                        >
                            Grid
                        </span>
                        <span className={styles['expand-icon']}>
                            <ExpandIcon />
                        </span>
                        <span className={styles['collapse-icon']}>
                            <CollapseIcon />
                        </span>
                    </button>
                    <ul
                        className={`${styles['expandable-menu-item']} xs__p-0 xs__pt+1 xs__pr+4 xs__pl+6 s__pl+7`}
                    >
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <a
                                href="https://github.com/FDMediagroep/fdmg-css-grid"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://github.com/FDMediagroep/fdmg-css-grid"
                                onClick={handleNavigation}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <span className="heading sans xxs">
                                    CSS Grid
                                </span>
                                <span className={asideStyles['popup']}>
                                    <LinkWebsiteIcon />
                                </span>
                            </a>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/grid"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/grid"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Test page
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/achtergrond/1324449/alle-verrijking-op-een-rijtje"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/achtergrond/1324449/alle-verrijking-op-een-rijtje"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Test article page
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/fd-web"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/fd-web"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Test home page
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <a
                                href="https://github.com/FDMediagroep/fdmg-css-grid#paddingsmargins-system"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://github.com/FDMediagroep/fdmg-css-grid#paddingsmargins-system"
                                onClick={handleNavigation}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <span className="heading sans xxs">
                                    Paddings/Margins system
                                </span>
                                <span className={asideStyles['popup']}>
                                    <LinkWebsiteIcon />
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li
                    className={`${styles['menu-item']} ${
                        expanded.indexOf('typography') > -1 ? 'expanded' : ''
                    } xs__pt+3 xs__pr+4 xs__pb+2 xs__pl+4`}
                >
                    <button
                        className={`${styles['expand-toggle']} xs__p-0`}
                        aria-expanded={expanded.indexOf('typography') > -1}
                        aria-label="Toggle Typography sub-menu"
                        onClick={handleToggle.bind(null, 'typography')}
                    >
                        <span className={styles['icon']}>
                            <HamburgerIcon />
                        </span>
                        <span
                            className={`heading ${styles['button-text']} sans xs xs__ml+3`}
                        >
                            Typography
                        </span>
                        <span className={styles['expand-icon']}>
                            <ExpandIcon />
                        </span>
                        <span className={styles['collapse-icon']}>
                            <CollapseIcon />
                        </span>
                    </button>
                    <ul
                        className={`${styles['expandable-menu-item']} xs__p-0 xs__pt+1 xs__pr+4 xs__pl+6 s__pl+7`}
                    >
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/typography"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/typography"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Overview
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <a
                                href="https://fdmediagroep.atlassian.net/wiki/spaces/FDMT/pages/1406861318/Typography"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fdmediagroep.atlassian.net/wiki/spaces/FDMT/pages/1406861318/Typography"
                                onClick={handleNavigation}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <span className="heading sans xxs">Docs</span>
                                <span className={asideStyles['popup']}>
                                    <LinkWebsiteIcon />
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li
                    className={`${styles['menu-item']} ${
                        expanded.indexOf('misc') > -1 ? 'expanded' : ''
                    } xs__pt+3 xs__pr+4 xs__pb+2 xs__pl+4`}
                >
                    <button
                        className={`${styles['expand-toggle']} xs__p-0`}
                        aria-expanded={expanded.indexOf('misc') > -1}
                        aria-label="Toggle miscellaneous sub-menu"
                        onClick={handleToggle.bind(null, 'misc')}
                    >
                        <span className={styles['icon']}>
                            <PaperclipIcon />
                        </span>
                        <span
                            className={`heading ${styles['button-text']} sans xs xs__ml+3`}
                        >
                            Miscellaneous
                        </span>
                        <span className={styles['expand-icon']}>
                            <ExpandIcon />
                        </span>
                        <span className={styles['collapse-icon']}>
                            <CollapseIcon />
                        </span>
                    </button>
                    <ul
                        className={`${styles['expandable-menu-item']} xs__p-0 xs__pt+1 xs__pr+4 xs__pl+6 s__pl+7`}
                    >
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/ab"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/ab"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    A/B Testing component
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/accordion"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/accordion"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Accordion
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/author-info"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/author-info"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Author Info
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/cookieconsent#cookie-consent"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/cookieconsent#cookie-consent"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Cookie consent
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/cookieconsent#locked-content"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/cookieconsent#locked-content"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Locked content
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/modal"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/modal"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">Modal</span>
                            </Link>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <Link
                                href="/stock-ticker"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="/stock-ticker"
                                onClick={handleNavigation}
                            >
                                <span className="heading sans xxs">
                                    Stock Ticker
                                </span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li
                    className={`${styles['menu-item']} xs__pt+2 xs__pr+4 xs__pb+2 xs__pl+4`}
                >
                    <a
                        href="https://github.com/FDMediagroep/fd-design-system"
                        data-ga-name="menu_click"
                        data-ga-category="user interactions"
                        data-ga-action="menu click"
                        data-ga-label="https://github.com/FDMediagroep/fd-design-system"
                        onClick={handleNavigation}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <span className={styles['icon']}>
                            <GithubIcon />
                        </span>
                        <span
                            className={`heading ${styles['button-text']} sans xs xs__ml+3`}
                        >
                            GitHub
                        </span>
                        <span className={asideStyles['popup']}>
                            <LinkWebsiteIcon />
                        </span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export { Aside };
