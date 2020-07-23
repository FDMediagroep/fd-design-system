import React, { useState, useEffect } from 'react';
import styles from './Themes.module.scss';

type Theme = 'system' | 'dark' | 'light';

function Themes(props: any) {
    const [theme, setTheme] = useState<Theme>('system');

    function changeTheme(theme: Theme | string) {
        switch (theme) {
            case 'light':
                document.querySelector('html').classList.remove('dark');
                document.querySelector('html').classList.remove('light');
                document.querySelector('html').classList.remove('system');
                document.querySelector('html').classList.add('light');
                break;
            case 'dark':
                document.querySelector('html').classList.remove('dark');
                document.querySelector('html').classList.remove('light');
                document.querySelector('html').classList.remove('system');
                document.querySelector('html').classList.add('dark');
                break;
            case 'system':
            default:
                document.querySelector('html').classList.remove('dark');
                document.querySelector('html').classList.remove('light');
                document.querySelector('html').classList.remove('system');
                document.querySelector('html').classList.add('system');
        }
        localStorage.setItem('theme', theme);
        setTheme(theme as Theme);
    }

    useEffect(() => {
        document.documentElement.style.backgroundColor = '';
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            changeTheme(savedTheme);
        }
    }, []);

    function handleThemeChange(event: React.ChangeEvent<HTMLInputElement>) {
        changeTheme(event.currentTarget.value as Theme);
    }

    return (
        <section
            {...props}
            className={`${styles.themeControls}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <label>
                <input
                    type="radio"
                    name="theme"
                    radioGroup="themes"
                    value="system"
                    checked={theme === 'system'}
                    onChange={handleThemeChange}
                />{' '}
                system
            </label>
            <label>
                <input
                    type="radio"
                    name="theme"
                    radioGroup="themes"
                    value="light"
                    onChange={handleThemeChange}
                    checked={theme === 'light'}
                />{' '}
                ☀️
            </label>
            <label>
                <input
                    type="radio"
                    name="theme"
                    radioGroup="themes"
                    value="dark"
                    onChange={handleThemeChange}
                    checked={theme === 'dark'}
                />{' '}
                🌒
            </label>
        </section>
    );
}

export { Themes };
