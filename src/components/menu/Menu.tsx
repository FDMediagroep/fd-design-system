import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Menu.module.scss';
import {
    CloseIcon,
    GithubIcon,
    HamburgerIcon,
    LookingGlassIcon,
    ProfileIcon,
    ProfileOIcon,
} from '../../design-tokens/icons';
import { ButtonCta } from '../button/ButtonCta';
import Link from 'next/link';

export interface Props {
    aside?: JSX.Element;
    className?: string;
    logoUrl?: string;
    profile?: JSX.Element;
    onClose?: (e?: React.MouseEvent) => void;
    [x: string]: any;
}

const getOffsetTop = (el: HTMLElement) => {
    return el.getBoundingClientRect().top;
};

function Menu(props: Props) {
    const { onClose } = props;
    const menuRef = useRef<HTMLDivElement>(null);
    const [stickyState, setStickyState] = useState(false);
    const [backgroundOverlay, setBackgroundOverlay] = useState(false);
    const [hiding, setHiding] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [showProfile, setShowProfile] = useState(false);
    const [showAside, setShowAside] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

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
        setShowSearch(false);
    }, []);

    const handleAside = useCallback(
        (show?: boolean) => {
            hideAll();
            setShowAside(show);
            showBackgroundOverlay(show);
        },
        [hideAll, showBackgroundOverlay]
    );
    const handleAsideButtonClick = () => {
        handleAside(!showAside);
    };

    const handleProfile = useCallback(
        (show?: boolean) => {
            hideAll();
            setShowProfile(show);
            showBackgroundOverlay(show);
        },
        [hideAll, showBackgroundOverlay]
    );
    const handleProfileButtonClick = () => {
        handleProfile(!showProfile);
    };

    const handleSearch = useCallback(
        (show?: boolean) => {
            hideAll();
            setShowSearch(show);
            showBackgroundOverlay(show);
        },
        [hideAll, showBackgroundOverlay]
    );
    const handleSearchButtonClick = () => {
        handleSearch(!showSearch);
    };

    /**
     * Close and hide all sub menu's
     */
    const closeAll = useCallback(() => {
        onClose?.();
        hideAll();
        showBackgroundOverlay(false);
        [].slice
            .call(menuRef?.current?.querySelectorAll('[aria-expanded=true]'))
            .forEach((expandedEl) => {
                expandedEl.parentElement.classList.remove('expanded');
                expandedEl.setAttribute('aria-expanded', 'false');
            });
    }, [hideAll, showBackgroundOverlay, onClose]);

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

    const aside = React.cloneElement(props.aside, { onClose: closeAll });
    const profile = React.cloneElement(props.profile, { onClose: closeAll });

    return (
        <div
            ref={menuRef}
            className={`${styles['header-placeholder']}${
                stickyState ? ` ${styles.stickied}` : ''
            }${props.className ? ` ${props.className}` : ''}`}
        >
            <header
                className={`${showProfile ? ` ${styles['show-profile']}` : ''}${
                    showAside ? ` ${styles['show-aside-menu']}` : ''
                }${showSearch ? ` ${styles['show-search-menu']}` : ''}`}
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
                                {aside}
                            </li>
                            <li>
                                <Link
                                    passHref={true}
                                    href={props.logoUrl ?? '/'}
                                >
                                    <a
                                        className={`${styles['home-button']} xs__pl+3 xs__pr+3`}
                                        data-ga-name="menu_click"
                                        data-ga-category="user interactions"
                                        data-ga-action="menu click"
                                        data-ga-label={props.logoUrl ?? '/'}
                                        aria-label="Home"
                                        title="Home"
                                    >
                                        <span className={styles.logo} />
                                        <span className={styles['aria-label']}>
                                            Home
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li
                                className={`${styles['v-align']} ${styles['menu-button']}`}
                            >
                                <a
                                    href="https://github.com/FDMediagroep/fdmg-css-grid"
                                    className={`${styles['v-align']} heading sans xs ${styles['main-link']} xs__pl+3 xs__pr+3`}
                                    data-ga-name="menu_click"
                                    data-ga-category="user interactions"
                                    data-ga-action="menu click"
                                    data-ga-label="https://github.com/FDMediagroep/fdmg-css-grid"
                                    aria-label="GitHub"
                                    title="GitHub"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <span
                                        className={styles['menu-bar-icon']}
                                        dangerouslySetInnerHTML={{
                                            __html: GithubIcon as any,
                                        }}
                                    />
                                </a>
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
                                    <li>{profile}</li>
                                </ul>
                            </li>
                            <li
                                className={`${
                                    styles['show-search-highlight']
                                } ${showSearch ? styles.expanded : ''}`}
                            >
                                <button
                                    className={`${styles['search-button']} ${styles['menu-button']}`}
                                    data-ga-name="menu_click"
                                    data-ga-category="user interactions"
                                    data-ga-action="menu click"
                                    data-ga-label="search menu"
                                    aria-label="Zoeken"
                                    aria-haspopup="true"
                                    aria-expanded={showSearch}
                                    onClick={handleSearchButtonClick}
                                >
                                    <span
                                        className={styles['collapsed-icon']}
                                        dangerouslySetInnerHTML={{
                                            __html: LookingGlassIcon as any,
                                        }}
                                    />
                                    <span
                                        className={styles['expanded-icon']}
                                        dangerouslySetInnerHTML={{
                                            __html: CloseIcon as any,
                                        }}
                                    />
                                    <span className={styles['aria-label']}>
                                        Zoeken
                                    </span>
                                </button>
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
                <div className={styles['search-bar']}>
                    <form
                        className={`${styles['search']} ${styles['centered']} xs__m-0-auto xs__p-0 xs__pl+4 xs__pr+4`}
                        action="/search"
                    >
                        <label
                            htmlFor="searchInput"
                            className="xs__p-0 xs__mr+2 m__mr+6"
                            dangerouslySetInnerHTML={{
                                __html: LookingGlassIcon as any,
                            }}
                        />
                        <input
                            id="searchInput"
                            type="search"
                            name="q"
                            placeholder="Zoeken..."
                            autoComplete="off"
                            className="body-text sans s"
                        />
                    </form>
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
