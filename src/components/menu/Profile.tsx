import React from 'react';
import {
    AuthorIcon,
    BookmarkOIcon,
    MailIcon,
    PrivacyIcon,
} from '../../design-tokens/icons';
import { Button } from '../button/Button';
import { ButtonCta } from '../button/ButtonCta';
import { ButtonGhost } from '../button/ButtonGhost';
import { Themes } from '../Themes';
import * as styles from './Menu.module.scss';
import * as buttonStyles from './MenuButton.module.scss';

interface ProgressBlock {
    faded?: boolean;
}

export interface Props {
    access?: boolean;
    className?: string;
    companyName?: string;
    hasQuotum?: boolean;
    fullName?: string;
    freeArticlesCount?: number;
    loggedIn?: boolean;
    logoUrl?: string;
    noSubscription?: boolean;
    progressBlocks?: ProgressBlock[];
    onClose?: (e?: React.MouseEvent) => void;
    onLogin?: (e?: React.MouseEvent) => void;
    onLogout?: (e?: React.MouseEvent) => void;
    onRegister?: (e?: React.MouseEvent) => void;
    [x: string]: any;
}

function Profile(props: Props) {
    return (
        <div
            className={`${styles['profile']}${
                props.className ? ` ${props.className}` : ''
            } xs__p+4`}
        >
            {props.access ? (
                props.loggedIn ? (
                    <>
                        <div
                            className={`${styles['user-info']} heading sans xs xs__m-0 xs__mt+2 xs__mb+2`}
                        >
                            <span
                                className={`${styles['user']} heading sans xs`}
                            >
                                {props.fullName}
                            </span>
                            {props.companyName ? (
                                <span
                                    className={`${styles['company']} body-text sans xs`}
                                >
                                    {props.companyName}
                                </span>
                            ) : null}
                        </div>

                        <menu className="xs__m-0 xs__p-0">
                            {props.hasQuotum ? (
                                <div
                                    className={`${styles['credit']} xs__pt+2 xs__pb+2`}
                                >
                                    <span className="heading sans xs">
                                        Nog {props.freeArticlesCount}{' '}
                                        {props.freeArticlesCount === 1
                                            ? 'artikel'
                                            : 'artikelen'}{' '}
                                        over
                                    </span>
                                    <div className={styles['progress']}>
                                        {props.progressBlocks?.map(
                                            (block, idx) => (
                                                <span
                                                    key={`progress-block-${idx}`}
                                                    className={`${
                                                        styles['progress-block']
                                                    }${
                                                        block.faded
                                                            ? ` ${styles['faded']}`
                                                            : ''
                                                    }`}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            ) : null}

                            <a
                                className={`${styles['menu-item']} heading sans xs xs__pt+3 xs__pb+2`}
                                href="https://fd.nl/mijn-fd"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/mijn-fd"
                            >
                                <span className="icon">
                                    <AuthorIcon />
                                </span>
                                <span
                                    className={`${styles['button-text']} xs__ml+3`}
                                >
                                    Mijn FD
                                </span>
                            </a>
                            <a
                                className={`${styles['menu-item']} heading sans xs xs__pt+3 xs__pb+2`}
                                href="https://fd.nl/mijn-fd/nieuwsbrieven"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/mijn-fd/nieuwsbrieven"
                            >
                                <span className="icon">
                                    <MailIcon />
                                </span>
                                <span
                                    className={`${styles['button-text']} xs__ml+3`}
                                >
                                    Mijn nieuwsbrieven
                                </span>
                            </a>
                            <a
                                className={`${styles['menu-item']} heading sans xs xs__pt+3 xs__pb+3`}
                                href="https://fd.nl/bewaarde-artikelen"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/bewaarde-artikelen"
                            >
                                <span className="icon">
                                    <BookmarkOIcon />
                                </span>
                                <span
                                    className={`${styles['button-text']} xs__ml+3`}
                                >
                                    Bewaarde artikelen
                                </span>
                            </a>
                            <a
                                className={`${styles['menu-item']} heading sans xs xs__pt+3 xs__pb+2`}
                                href="https://fd.nl/cookiebeleid"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/cookiebeleid"
                            >
                                <span className="icon">
                                    <PrivacyIcon />
                                </span>
                                <span
                                    className={`${styles['button-text']} xs__ml+3`}
                                >
                                    Privacy instellingen
                                </span>
                            </a>

                            <span
                                className={`${styles['menu-item']} xs__pt+3 xs__pb+2`}
                            >
                                <ButtonGhost
                                    className={styles['menu-item-button']}
                                    size="m"
                                    data-ga-name="menu_click"
                                    data-ga-category="user interactions"
                                    data-ga-action="menu click"
                                    data-ga-label="https://fd.nl/logout"
                                    data-dynamic-import="true"
                                    onClick={props.onLogout}
                                >
                                    Uitloggen
                                </ButtonGhost>
                            </span>
                        </menu>

                        {props.noSubscription ? (
                            <div
                                className={`${styles['credit']} xs__m-0 xs__mt+2 xs__mb+2`}
                            >
                                U heeft geen abonnement op Het Financieele
                                Dagblad
                            </div>
                        ) : null}
                    </>
                ) : (
                    <>
                        <div
                            className={`${styles['user-info']} xs__m-0 xs__mt+2 xs__mb+2`}
                        >
                            {props.fullName ? (
                                <span className={styles['user']}>
                                    {props.fullName}
                                </span>
                            ) : null}
                            {props.companyName ? (
                                <span className={styles['company']}>
                                    {props.companyName}
                                </span>
                            ) : null}
                        </div>

                        <div
                            className={`${styles['button-group']} xs__m-0 xs__mt+2 xs__mb+2`}
                        >
                            <ButtonCta
                                href="https://fd.nl/abonneren"
                                className={`${styles['mobile-register-button']} ${buttonStyles['profile-button-cta']}`}
                                size={'m'}
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/abonneren"
                                data-dynamic-import="true"
                                onClick={props.onRegister}
                            >
                                <span>Abonneren</span>
                            </ButtonCta>
                            <Button
                                className={styles['profile-button']}
                                size="m"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/login?ref={{ref}}"
                                data-dynamic-import="true"
                                onClick={props.onLogin}
                            >
                                <span>Inloggen</span>
                            </Button>
                        </div>
                    </>
                )
            ) : null}
            {!props.access ? (
                <div
                    className={`${styles['button-group']} xs__m-0 xs__mt+2 xs__mb+2`}
                >
                    <ButtonCta
                        size="m"
                        href="https://fd.nl/abonneren"
                        className={`${styles['mobile-register-button']} ${buttonStyles['profile-button-cta']}`}
                        data-ga-name="menu_click"
                        data-ga-category="user interactions"
                        data-ga-action="menu click"
                        data-ga-label="https://fd.nl/abonneren"
                        data-dynamic-import="true"
                        onClick={props.onRegister}
                    >
                        <span>Abonneren</span>
                    </ButtonCta>
                    <Button
                        className={buttonStyles['profile-button']}
                        size="m"
                        data-ga-name="menu_click"
                        data-ga-category="user interactions"
                        data-ga-action="menu click"
                        data-ga-label="https://fd.nl/login?ref={{ref}}"
                        data-dynamic-import="true"
                        onClick={props.onLogin}
                    >
                        <span>Inloggen</span>
                    </Button>
                </div>
            ) : null}
            <hr className="xs__m-0 xs__mt+2 xs__mb+2 xs__mr-4 xs__ml-4" />
            <a
                href="https://fd.nl/service"
                className={`${styles['service']} heading sans xxs xs__m-0 xs__pt+2 xs__pb+2`}
                data-ga-name="menu_click"
                data-ga-category="user interactions"
                data-ga-action="menu click"
                data-ga-label="https://fd.nl/service"
            >
                <span>Service & Contact</span>
            </a>
            <hr className="xs__m-0 xs__mt+2 xs__mr-4 xs__ml-4" />

            <Themes groupName="sub-menu-themes" />
        </div>
    );
}
export { Profile };
