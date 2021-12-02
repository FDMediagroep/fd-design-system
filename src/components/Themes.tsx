import React, { useState, useEffect } from 'react';
import { CollapseIcon, ExpandIcon } from '../design-tokens/icons';
import ThemeStore, { Theme } from '../stores/ThemeStore';
import { Radio } from './input/Radio';
import styles from './menu/Menu.module.scss';

interface Props {
    groupName?: string;
    [x: string]: any;
}

function Themes(props: Props) {
    const [theme, setTheme] = useState(ThemeStore.getTheme());
    const [userMenuThemeExpanded, setUserMenuTheme] = useState(false);

    function changeTheme(theme: Theme) {
        switch (theme) {
            case Theme.LIGHT:
                document.querySelector('html').classList.remove('dark');
                document.querySelector('html').classList.remove('light');
                document.querySelector('html').classList.remove('system');
                document.querySelector('html').classList.add('light');
                break;
            case Theme.DARK:
                document.querySelector('html').classList.remove('dark');
                document.querySelector('html').classList.remove('light');
                document.querySelector('html').classList.remove('system');
                document.querySelector('html').classList.add('dark');
                break;
            case Theme.SYSTEM:
            default:
                document.querySelector('html').classList.remove('dark');
                document.querySelector('html').classList.remove('light');
                document.querySelector('html').classList.remove('system');
                document.querySelector('html').classList.add('system');
        }
        localStorage.setItem('theme', theme);
        setTheme(theme);
    }

    useEffect(() => {
        const subscriptionId = ThemeStore.subscribe(() => {
            changeTheme(ThemeStore.getTheme());
        });

        // Initially use state from localStorage or ThemeStore
        document.documentElement.style.backgroundColor = '';
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            ThemeStore.setTheme(savedTheme as Theme);
        } else {
            changeTheme(ThemeStore.getTheme());
        }

        return () => {
            ThemeStore.unsubscribe(subscriptionId);
        };
    }, []);

    function handleThemeChange(theme: Theme) {
        ThemeStore.setTheme(theme);
    }

    function handleUserMenuThemeClick() {
        setUserMenuTheme((prev) => !prev);
    }

    return (
        <section
            className={`${styles.theme} xs__m-0 xs__pt+4 xs__pb+4 xs__ml-4 xs__mr-4 xs__mb-4`}
        >
            <div className="xs__pl+4 xs__pr+4">
                <button
                    className={`${styles['expand-toggle']} heading sans xxs`}
                    aria-controls="userMenuTheme"
                    aria-expanded={userMenuThemeExpanded}
                    title="Weergaveopties"
                    onClick={handleUserMenuThemeClick}
                >
                    <span>Weergaveopties</span>
                    <span
                        className={styles['expand-icon']}
                        dangerouslySetInnerHTML={{
                            __html: ExpandIcon as any,
                        }}
                    />
                    <span
                        className={styles['collapse-icon']}
                        dangerouslySetInnerHTML={{
                            __html: CollapseIcon as any,
                        }}
                    />
                </button>
                <section
                    id="userMenuTheme"
                    role="region"
                    className={`body-text sans xs ${styles['expandable-menu-item']}`}
                >
                    <div className="xs__mt+3">
                        <Radio
                            id="systemTheme"
                            type="radio"
                            name="theme"
                            radioGroup={props.groupName ?? 'themes'}
                            value={Theme.SYSTEM}
                            checked={Theme.SYSTEM === theme}
                            onChange={handleThemeChange.bind(
                                null,
                                Theme.SYSTEM
                            )}
                            label="Systeem (instellingen apparaat)"
                        />
                    </div>
                    <div className="xs__mt+2">
                        <Radio
                            id="lightTheme"
                            type="radio"
                            name="theme"
                            radioGroup={props.groupName ?? 'themes'}
                            value={Theme.LIGHT}
                            checked={Theme.LIGHT === theme}
                            onChange={handleThemeChange.bind(null, Theme.LIGHT)}
                            label="Lichte weergave"
                        />
                    </div>
                    <div className="xs__mt+2">
                        <Radio
                            id="darkTheme"
                            type="radio"
                            name="theme"
                            radioGroup={props.groupName ?? 'themes'}
                            value={Theme.DARK}
                            checked={Theme.DARK === theme}
                            onChange={handleThemeChange.bind(null, Theme.DARK)}
                            label="Donkere weergave"
                        />
                    </div>
                </section>
            </div>
        </section>
    );
}

export { Themes };
