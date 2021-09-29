import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Menu.module.scss';
import {
    CloseIcon,
    HamburgerIcon,
    ProfileIcon,
    ProfileOIcon,
} from '../../design-tokens/icons';
import { ButtonCta } from '../button/ButtonCta';
import Link from 'next/link';
import { Profile } from './Profile';
import { Aside } from './Aside';

interface ProgressBlock {
    faded?: boolean;
}

export interface Props {
    access?: boolean;
    companyName?: string;
    customerArticleQuotumModel?: string;
    fullName?: string;
    freeArticlesCount?: number;
    loggedIn?: boolean;
    noSubscription?: boolean;
    progressBlocks?: ProgressBlock[];
    onClose?: (e: React.MouseEvent) => void;
}

const getOffsetTop = (el: HTMLElement) => {
    return el.getBoundingClientRect().top;
};

function Menu(props: any) {
    const menuRef = useRef<HTMLDivElement>(null);
    const [stickyState, setStickyState] = useState(false);
    const [backgroundOverlay, setBackgroundOverlay] = useState(false);
    const [hiding, setHiding] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [showProfile, setShowProfile] = useState(false);
    const [showAside, setShowAside] = useState(false);

    useEffect(() => {
        const checkSticky = () => {
            /**
             * If el is not at the top of viewport or vertical scroll is at top.
             */
            if (
                Math.floor(getOffsetTop(menuRef.current)) > 0 ||
                window.scrollY === 0
            ) {
                requestAnimationFrame(() => {
                    setStickyState(false);
                });
            } else {
                requestAnimationFrame(() => {
                    setStickyState(true);
                });
            }
        };
        if (menuRef.current) {
            window.addEventListener('scroll', () => {
                checkSticky();
            });
            checkSticky();
        }
    }, []);

    const hideEl = useCallback(() => {
        setHiding(true);
        setTimeout(() => {
            setHidden(true);
            setBackgroundOverlay(false);
            setHiding(false);
        }, 150);
    }, []);

    const showEl = useCallback(() => {
        setHidden(false);
        setHiding(false);
        setBackgroundOverlay(true);
    }, []);

    const showBackgroundOverlay = useCallback(
        (show = true) => {
            if (show) {
                showEl();
            } else {
                hideEl();
            }
        },
        [hideEl, showEl]
    );

    const hideAll = useCallback(() => {
        setShowAside(false);
        setShowProfile(false);
    }, []);

    const handleAsideButtonClick = (e: React.MouseEvent) => {
        hideAll();
        const show = !showAside;
        setShowAside(show);
        showBackgroundOverlay(show);
    };

    const handleProfileButtonClick = (e: React.MouseEvent) => {
        hideAll();
        const show = !showProfile;
        setShowProfile(show);
        showBackgroundOverlay(show);
    };

    /**
     * Close and hide all sub menu's
     */
    const closeAll = useCallback(() => {
        hideAll();
        showBackgroundOverlay(false);
        [].slice
            .call(menuRef?.current?.querySelectorAll('[aria-expanded=true]'))
            .forEach((expandedEl) => {
                expandedEl.parentElement.classList.remove('expanded');
                expandedEl.setAttribute('aria-expanded', 'false');
            });
    }, [hideAll, showBackgroundOverlay]);

    useEffect(() => {
        [].slice
            .call(document.querySelectorAll('.close-aside-menu-button'))
            .forEach((el) => {
                el.addEventListener('click', closeAll);
            });

        document.addEventListener('keydown', (evt) => {
            if (menuRef?.current?.querySelector('[aria-expanded=true]')) {
                if (
                    evt?.key === 'Escape' ||
                    evt?.key === 'Esc' ||
                    evt?.keyCode === 27
                ) {
                    closeAll();
                }
            }
        });
    }, [closeAll]);

    return (
        <div
            ref={menuRef}
            className={`${styles['header-placeholder']}${
                stickyState ? ` ${styles.stickied}` : ''
            }`}
        >
            <header
                className={`s__pt+4${
                    props.loggedIn
                        ? props.onQuotum
                            ? ` ${styles['no-subscription']}`
                            : ` ${styles.subscribed}`
                        : ` ${styles['not-logged-in']}`
                }${showProfile ? ` ${styles['show-profile']}` : ''}${
                    showAside ? ` ${styles['show-aside-menu']}` : ''
                }`}
            >
                <div
                    className={`${styles['centered']} xs__m-0-auto xs__p-0 xs__pl+4 xs__pr+4`}
                >
                    <nav>
                        <ul
                            className={`${styles['left-menu']} xs__p-0 xs__m-0`}
                        >
                            <li className={showAside ? styles.expanded : ''}>
                                <button
                                    className={`${styles['aside-menu-button']} ${styles['menu-button']} ${styles['main-link']}`}
                                    data-ga-name="menu_click"
                                    data-ga-category="user interactions"
                                    data-ga-action="menu click"
                                    data-ga-label="hamburger"
                                    aria-haspopup="true"
                                    aria-expanded={showAside}
                                    aria-label="Sub menu"
                                    onClick={handleAsideButtonClick}
                                >
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: HamburgerIcon as any,
                                        }}
                                    />
                                    <span className={styles['aria-label']}>
                                        Sub menu
                                    </span>
                                </button>
                                <Aside onClose={closeAll} />
                            </li>
                        </ul>
                        <ul
                            className={`${styles['middle-menu']} xs__p-0 xs__m-0`}
                        >
                            <li>
                                <Link passHref={true} href="/">
                                    <a
                                        className={styles['home-button']}
                                        data-ga-name="menu_click"
                                        data-ga-category="user interactions"
                                        data-ga-action="menu click"
                                        data-ga-label="/"
                                        aria-label="Home"
                                    >
                                        <span className={styles.logo} />
                                        <span className={styles['aria-label']}>
                                            Home
                                        </span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <ul
                            className={`${styles['right-menu']} xs__p-0 xs__m-0`}
                        >
                            <li>
                                <span className={styles['v-align']}>
                                    <ButtonCta
                                        size="s"
                                        href="https://fd.nl/abo"
                                        className={`${styles['desktop-register-button']} xs__m-0 xs__ml+2 xs__mr+2`}
                                        data-ga-name="menu_click"
                                        data-ga-category="user interactions"
                                        data-ga-action="menu click"
                                        data-ga-label="https://fd.nl/abo"
                                        data-dynamic-import="true"
                                    >
                                        Abonneren
                                    </ButtonCta>
                                </span>
                            </li>
                            <li
                                className={`${
                                    styles['show-profile-highlight']
                                } ${showProfile ? styles.expanded : ''}`}
                            >
                                <button
                                    className={`${styles['profile-button']} ${styles['menu-button']}`}
                                    data-ga-name="menu_click"
                                    data-ga-category="user interactions"
                                    data-ga-action="menu click"
                                    data-ga-label="profiel sub menu"
                                    aria-label="Profiel menu"
                                    aria-haspopup="true"
                                    aria-expanded={showProfile}
                                    onClick={handleProfileButtonClick}
                                >
                                    <span
                                        className={styles['collapsed-icon']}
                                        dangerouslySetInnerHTML={{
                                            __html: props.loggedIn
                                                ? (ProfileIcon as any)
                                                : (ProfileOIcon as any),
                                        }}
                                    />
                                    <span
                                        className={styles['expanded-icon']}
                                        dangerouslySetInnerHTML={{
                                            __html: CloseIcon as any,
                                        }}
                                    />
                                    <span className={styles['aria-label']}>
                                        Profiel menu
                                    </span>
                                </button>
                                <ul
                                    className={`${styles['expandable-menu-item']} xs__p-0 xs__m-0`}
                                >
                                    <li>
                                        <Profile
                                            access={props.access}
                                            companyName={props.companyName}
                                            customerArticleQuotumModel={
                                                props.customerArticleQuotumModel
                                            }
                                            freeArticlesCount={
                                                props.freeArticlesCount
                                            }
                                            fullName={props.fullName}
                                            loggedIn={props.loggedIn}
                                            noSubscription={
                                                props.noSubscription
                                            }
                                            progressBlocks={
                                                props.progressBlocks
                                            }
                                        />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div
                            className={`${
                                styles['header-background-overlay']
                            } ${hidden ? styles['hidden-menu-item'] : ''} ${
                                backgroundOverlay ? styles.show : ''
                            } ${hiding ? styles.hiding : ''}`}
                            data-ga-name="menu_click"
                            data-ga-category="user interactions"
                            data-ga-action="menu click"
                            data-ga-label="close sub menu via overlay"
                            onClick={closeAll}
                        >
                            <div className={styles['aria-label']}>
                                Close sub menu
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div
                className={`${styles['mobile-header-background-overlay']} ${
                    hidden ? styles['hidden-menu-item'] : ''
                } ${backgroundOverlay ? styles.show : ''} ${
                    hiding ? styles.hiding : ''
                }`}
                data-ga-name="menu_click"
                data-ga-category="user interactions"
                data-ga-action="menu click"
                data-ga-label="close sub menu via overlay"
                onClick={closeAll}
            >
                <div className={styles['aria-label']}>Close sub menu</div>
            </div>
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles.menu];
}

export { Menu, getCssClassNames };
