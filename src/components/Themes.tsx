import React, { useState, useEffect, useRef } from 'react';
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
    const [userMenuThemeExpanded, setUserMenuThemeExpanded] = useState(false);
    const toggleButtonRef = useRef<HTMLButtonElement>();

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
        if (toggleButtonRef.current) {
            const mutationObserver = new MutationObserver((mutations) => {
                mutations.forEach((mutationRecord) => {
                    setUserMenuThemeExpanded(
                        (mutationRecord.target as HTMLElement).getAttribute(
                            'aria-expanded'
                        ) === 'true'
                    );
                });
            });
            mutationObserver.observe(toggleButtonRef.current, {
                childList: true,
                subtree: true,
                attributes: true,
            });
        }
    }, [toggleButtonRef.current]);

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
        setUserMenuThemeExpanded((prev) => !prev);
    }

    return (
        <section
            className={`${styles.theme} xs__m-0 xs__pt+4 xs__pb+4 xs__ml-4 xs__mr-4 xs__mb-4`}
        >
            <div className="xs__pl+4 xs__pr+4">
                <button
                    ref={toggleButtonRef}
                    className={`${styles['expand-toggle']} heading sans xxs`}
                    aria-controls="userMenuTheme"
                    aria-expanded={userMenuThemeExpanded}
                    title="Display options"
                    onClick={handleUserMenuThemeClick}
                >
                    <span>
                        Display options {JSON.stringify(userMenuThemeExpanded)}
                    </span>
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
                            label="System (device setting)"
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
                            label="Light theme"
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
                            label="Dark theme"
                        />
                    </div>
                </section>
            </div>
        </section>
    );
}

export { Themes };
