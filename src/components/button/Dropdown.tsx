import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import {
    ApplePodcastsIcon,
    CollapseIcon,
    ExpandIcon,
    GooglePodcastsIcon,
    SpotifyIcon,
} from '../../design-tokens/icons';
import styles from './Dropdown.module.scss';

type Sizes = 's' | 'm';

interface Props {
    className?: string;
    spotifyUrl?: string;
    applePodcastsUrl?: string;
    googlePodcastsUrl?: string;

    /**
     * Button sizes. [default: s]
     */
    size?: Sizes;
    [x: string]: any;
}

/**
 * Render a dropdown.
 * @param props
 */
function Dropdown(props: Props) {
    const buttonRef = useRef();
    const [expanded, setExpanded] = useState(false);
    const sizeClass = props.size === 'm' ? styles.m : '';

    useEffect(() => {
        if (buttonRef.current) {
            document.documentElement.addEventListener(
                'click',
                (e: MouseEvent) => {
                    if (e.target !== buttonRef.current) {
                        setExpanded(false);
                    }
                }
            );
        }
    }, [buttonRef]);

    function handleClick() {
        setExpanded((prev) => !prev);
    }

    return (
        <div
            {...props}
            className={`${styles['fd-dropdown']} grid${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <button
                ref={buttonRef}
                className={`xs-12 ${sizeClass} ${styles['fd-dropdown-button']}`}
                aria-expanded={expanded}
                onClick={handleClick}
            >
                <span className="xs__mr+1">{props.children}</span>
                <span className={styles['collapse-icon']}>
                    <CollapseIcon />
                </span>
                <span className={styles['expand-icon']}>
                    <ExpandIcon />
                </span>
            </button>
            <nav className={styles['fd-dropdown-items']}>
                <ul>
                    <li>
                        <Link
                            href={props.spotifyUrl || 'https://fd.nl'}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className={styles['podcast-icon']}>
                                <SpotifyIcon />
                            </span>

                            <span>Spotify</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={props.applePodcastsUrl || 'https://fd.nl'}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className={styles['podcast-icon']}>
                                <ApplePodcastsIcon />
                            </span>

                            <span>Apple Podcasts</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={props.googlePodcastsUrl || 'https://fd.nl'}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className={styles['podcast-icon']}>
                                <GooglePodcastsIcon />
                            </span>

                            <span>Google Podcasts</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles.fdDropdown];
}

export { Dropdown, getCssClassNames };
