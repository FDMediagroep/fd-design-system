import styles from './Menu.module.scss';
import {
    ClockIcon,
    CloseIcon,
    CollapseIcon,
    EditionsIcon,
    ExpandIcon,
    GraphIcon,
    GraphOIcon,
    HeartOIcon,
    LookingGlassIcon,
} from '../../design-tokens/icons';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
    className?: string;
    onClose?: (e?: React.MouseEvent) => void;
    [x: string]: any;
}

function Aside(props: Props) {
    const router = useRouter();
    const [expanded, setExpanded] = useState([]);

    const handleToggle = (id: string) => {
        setExpanded((ids) => {
            if (ids.indexOf(id) > -1) {
                return ids.filter((val) => val != id);
            } else {
                return [...ids, id];
            }
        });
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        router.push(
            `/search?q=${encodeURIComponent(formData.get('q').toString())}`
        );
        props?.onClose?.(e as any);
    };

    return (
        <aside className={styles['expandable-menu-item']}>
            <ul className="xs__p-0 xs__m-0">
                <li>
                    <button
                        className={`${styles['close-aside-menu-button']} xs__m+4 xs__p-0`}
                        aria-label="Close menu"
                        data-ga-name="menu_click"
                        data-ga-category="user interactions"
                        data-ga-action="menu click"
                        data-ga-label="close sub menu via button"
                        onClick={props.onClose}
                    >
                        <span>
                            <CloseIcon />
                        </span>
                        <span className={styles['aria-label']}>Close menu</span>
                    </button>
                </li>

                <li>
                    <form
                        className={`${styles['search']} xs__m+4`}
                        action="/search"
                        onSubmit={handleSearch}
                    >
                        <label htmlFor="searchInput" className="xs__p-0">
                            <LookingGlassIcon />
                        </label>
                        <input
                            id="searchInput"
                            type="search"
                            name="q"
                            placeholder="Zoeken..."
                            defaultValue=""
                        />
                    </form>
                </li>

                <li
                    className={`${styles['menu-item']} xs__pt+2 xs__pr+4 xs__pb+2 xs__pl+4`}
                >
                    <a
                        href="https://fd.nl/mijn-nieuws"
                        data-ga-name="menu_click"
                        data-ga-category="user interactions"
                        data-ga-action="menu click"
                        data-ga-label="https://fd.nl/mijn-nieuws"
                    >
                        <span className={styles['icon']}>
                            <HeartOIcon />
                        </span>
                        <span
                            className={`heading ${styles['button-text']} sans xs xs__ml+3`}
                        >
                            Mijn nieuws
                        </span>
                    </a>
                </li>
                <li
                    className={`${styles['menu-item']} xs__pt+3 xs__pr+4 xs__pb+2 xs__pl+4`}
                >
                    <a
                        href="https://fd.nl/net-binnen"
                        data-ga-name="menu_click"
                        data-ga-category="user interactions"
                        data-ga-action="menu click"
                        data-ga-label="https://fd.nl/net-binnen"
                    >
                        <span className={styles['icon']}>
                            <ClockIcon />
                        </span>
                        <span
                            className={`heading ${styles['button-text']} sans xs xs__ml+3`}
                        >
                            Net binnen
                        </span>
                    </a>
                </li>
                <li
                    className={`${styles['menu-item']} ${
                        expanded.indexOf('beurs') > -1 ? 'expanded' : ''
                    } xs__pt+3 xs__pr+4 xs__pb+2 xs__pl+4`}
                >
                    <button
                        className={`${styles['expand-toggle']} xs__p-0`}
                        aria-expanded={expanded.indexOf('beurs') > -1}
                        aria-label="Toggle Beurs sub-menu"
                        onClick={handleToggle.bind(null, 'beurs')}
                    >
                        <span
                            className={`${styles['icon']} ${styles['collapsed-icon']}`}
                        >
                            <GraphOIcon />
                        </span>
                        <span
                            className={`${styles['icon']} ${styles['expanded-icon']}`}
                        >
                            <GraphIcon />
                        </span>
                        <span
                            className={`heading ${styles['button-text']} sans xs xs__ml+3`}
                        >
                            Beurs
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
                                href="https://fd.nl/beurs"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/beurs"
                            >
                                <span className="heading sans xxs">
                                    Overview
                                </span>
                            </a>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+2`}
                        >
                            <a
                                href="https://beurs.fd.nl/aandelen/amsterdam/aex/"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://beurs.fd.nl/aandelen/amsterdam/aex"
                            >
                                <span className="heading sans xxs">
                                    Nationaal
                                </span>
                            </a>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+1`}
                        >
                            <a
                                href="https://beurs.fd.nl/aandelen/nyse/dj30/"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://beurs.fd.nl/aandelen/nyse/dj30"
                            >
                                <span className="heading sans xxs">
                                    Internationaal
                                </span>
                            </a>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+1`}
                        >
                            <a
                                href="https://beurs.fd.nl/analyse/amsterdam/aex/"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://beurs.fd.nl/analyse/amsterdam/aex"
                            >
                                <span className="heading sans xxs">
                                    Analyse
                                </span>
                            </a>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+1`}
                        >
                            <a
                                href="https://beurs.fd.nl/rente-valuta/"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://beurs.fd.nl/rente-valuta"
                            >
                                <span className="heading sans xxs">
                                    Rente en valuta
                                </span>
                            </a>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+1`}
                        >
                            <a
                                href="https://beurs.fd.nl/grondstoffen/"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://beurs.fd.nl/grondstoffen"
                            >
                                <span className="heading sans xxs">
                                    Grondstoffen
                                </span>
                            </a>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+1`}
                        >
                            <a
                                href="https://beurs.fd.nl/derivaten/opties/?call=AEX.AEX/O/"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://beurs.fd.nl/derivaten/opties/?call=AEX.AEX/O"
                            >
                                <span className="heading sans xxs">
                                    Derivaten
                                </span>
                            </a>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+1`}
                        >
                            <a
                                href="https://beurs.fd.nl/aandelen/amsterdam/beleggingsfondsen/"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://beurs.fd.nl/aandelen/amsterdam/beleggingsfondsen"
                            >
                                <span className="heading sans xxs">
                                    Beleggingsfondsen
                                </span>
                            </a>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+1`}
                        >
                            <a
                                href="https://beurs.fd.nl/indices/amsterdam/"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://beurs.fd.nl/indices/amsterdam"
                            >
                                <span className="heading sans xxs">
                                    Indices
                                </span>
                            </a>
                        </li>
                        <li
                            className={`${styles['menu-item']} xs__p+3 xs__pb+1`}
                        >
                            <a
                                href="https://beurs.fd.nl/obligaties/binnenland/"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://beurs.fd.nl/obligaties/binnenland"
                            >
                                <span className="heading sans xxs">
                                    Obligaties
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li
                    className={`${styles['menu-item']} xs__pt+3 xs__pr+4 xs__pb+2 xs__pl+4`}
                >
                    <a
                        href="https://fd.nl/krant"
                        data-ga-name="menu_click"
                        data-ga-category="user interactions"
                        data-ga-action="menu click"
                        data-ga-label="https://fd.nl/krant"
                    >
                        <span className={styles['icon']}>
                            <EditionsIcon />
                        </span>
                        <span
                            className={`heading ${styles['button-text']} sans xs xs__ml+3`}
                        >
                            Krant
                        </span>
                    </a>
                </li>
                <li
                    className={`${styles['menu-divider']} xs__p-0 xs__pt+1 xs__pb+1`}
                >
                    <hr className="xs__m-0" />
                </li>

                <li>
                    <ul className="xs__p-0  xs__p+4">
                        <li className=" xs__mb+4">
                            <h3
                                className={`heading sans xxs xs__m-0 ${styles['label']}`}
                            >
                                SECTIES
                            </h3>
                        </li>
                        <li className="xs__mb+4">
                            <a
                                href="https://fd.nl/economie"
                                className="heading sans xs"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/economie"
                            >
                                Economie
                            </a>
                        </li>
                        <li className="xs__mb+4">
                            <a
                                href="https://fd.nl/politiek"
                                className="heading sans xs"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/politiek"
                            >
                                Politiek
                            </a>
                        </li>
                        <li className="xs__mb+4">
                            <a
                                href="https://fd.nl/bedrijfsleven"
                                className="heading sans xs"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/bedrijfsleven"
                            >
                                Bedrijfsleven
                            </a>
                        </li>
                        <li className="xs__mb+4">
                            <a
                                href="https://fd.nl/financiele-markten"
                                className="heading sans xs"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/financiele-markten"
                            >
                                Financiële markten
                            </a>
                        </li>
                        <li className="xs__mb+4">
                            <a
                                href="https://fd.nl/samenleving"
                                className="heading sans xs"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/samenleving"
                            >
                                Samenleving
                            </a>
                        </li>
                        <li className="xs__mb+4">
                            <a
                                href="https://fd.nl/tech-en-innovatie"
                                className="heading sans xs"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/tech-en-innovatie"
                            >
                                Tech & Innovatie
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://fd.nl/opinie"
                                className="heading sans xs"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/opinie"
                            >
                                Opinie
                            </a>
                        </li>
                    </ul>
                </li>

                <li
                    className={`${styles['menu-divider']} xs__p-0 xs__pt+1 xs__pb+1`}
                >
                    <hr className="xs__m-0" />
                </li>
                <li
                    className={`${styles['menu-item']} xs__pt+3 xs__pr+4 xs__pb+2 xs__pl+4`}
                >
                    <a
                        href="https://fd.nl/persoonlijk"
                        className={`${styles['persoonlijk-link']} xs__mb+4`}
                        data-ga-name="menu_click"
                        data-ga-category="user interactions"
                        data-ga-action="menu click"
                        data-ga-label="https://fd.nl/persoonlijk"
                    >
                        <div className="heading sans xxs">FD PERSOONLIJK</div>
                        <img
                            className="xs__mt+2"
                            src="https://static.fd.nl/digikrant/persoonlijk-cover/cover.jpg"
                            title="FD Persoonlijk"
                            alt="FD Persoonlijk"
                        />
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export { Aside };
