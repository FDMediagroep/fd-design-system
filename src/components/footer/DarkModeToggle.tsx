import React, { useEffect, useState } from 'react';
import ThemeStore, { Theme } from '../../stores/ThemeStore';
import styles from './Footer.module.scss';

export function DarkModeToggle() {
    const [theme, setTheme] = useState(ThemeStore.getTheme());

    useEffect(() => {
        const subscriptionId = ThemeStore.subscribe(() => {
            setTheme(ThemeStore.getTheme());
        });

        // Initially use state from localStorage or ThemeStore
        document.documentElement.style.backgroundColor = '';
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme as Theme);
        }

        return () => {
            ThemeStore.unsubscribe(subscriptionId);
        };
    }, []);

    function handleThemeChange(theme: Theme) {
        ThemeStore.setTheme(theme);
    }

    return (
        <div
            className={`body-text sans xs ${styles['fd-dark-mode-toggle']} xs__mb+4`}
        >
            <label>Theme:</label>
            <button
                className={`body-text sans xs system${
                    theme === 'system' ? ` ${styles['active']}` : ''
                }`}
                onClick={handleThemeChange.bind(null, 'system')}
            >
                System
            </button>
            <span>&nbsp;|&nbsp;</span>
            <button
                className={`body-text sans xs light${
                    theme === 'light' ? ` ${styles['active']}` : ''
                }`}
                onClick={handleThemeChange.bind(null, 'light')}
            >
                Light
            </button>
            <span>&nbsp;|&nbsp;</span>
            <button
                className={`body-text sans xs dark${
                    theme === 'dark' ? ` ${styles['active']}` : ''
                }`}
                onClick={handleThemeChange.bind(null, 'dark')}
            >
                Dark
            </button>
        </div>
    );
}
