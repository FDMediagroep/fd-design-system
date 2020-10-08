import React, { useState, useEffect } from 'react';
import ThemeStore, { Theme } from '../stores/ThemeStore';
import { Radio } from './input/Radio';
import styles from './Themes.module.scss';

interface Props {
    groupName?: string;
    [x: string]: any;
}

function Themes(props: Props) {
    const [theme, setTheme] = useState(ThemeStore.getTheme());

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

    return (
        <section
            data-checked={theme}
            className={`${styles.themeControls}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <Radio
                id="systemTheme"
                type="radio"
                name="theme"
                radioGroup={props.groupName ?? 'themes'}
                value={Theme.SYSTEM}
                checked={Theme.SYSTEM === theme}
                onChange={handleThemeChange.bind(null, Theme.SYSTEM)}
                label="system"
            />
            <Radio
                id="lightTheme"
                type="radio"
                name="theme"
                radioGroup={props.groupName ?? 'themes'}
                value={Theme.LIGHT}
                checked={Theme.LIGHT === theme}
                onChange={handleThemeChange.bind(null, Theme.LIGHT)}
                label="☀️"
            />
            <Radio
                id="darkTheme"
                type="radio"
                name="theme"
                radioGroup={props.groupName ?? 'themes'}
                value={Theme.DARK}
                checked={Theme.DARK === theme}
                onChange={handleThemeChange.bind(null, Theme.DARK)}
                label="🌒"
            />
        </section>
    );
}

export { Themes };
