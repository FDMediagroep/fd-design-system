import Link from 'next/link';
import React, { useState } from 'react';
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
    expanded?: boolean;

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
    const [expanded, setExpanded] = useState(props.expanded);
    const sizeClass = props.size === 'm' ? styles.m : '';

    function handleMouseEnter() {
        setExpanded(true);
    }

    function handleMouseLeave() {
        setExpanded(false);
    }

    return (
        <div
            {...props}
            className={`${styles['fd-dropdown']} grid${
                props.className ? ` ${props.className}` : ''
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className={`xs-12 ${sizeClass} ${styles['fd-dropdown-button']}`}
                aria-expanded={expanded ? 'true' : 'false'}
            >
                <span>{props.children}</span>
                {expanded ? (
                    <span
                        className={styles['collapse-icon']}
                        dangerouslySetInnerHTML={{
                            __html: CollapseIcon as any,
                        }}
                    />
                ) : (
                    <span
                        className={styles['expand-icon']}
                        dangerouslySetInnerHTML={{
                            __html: ExpandIcon as any,
                        }}
                    />
                )}
            </button>
            {expanded ? (
                <nav className={styles['fd-dropdown-items']}>
                    <ul>
                        <li>
                            <Link href={props.spotifyUrl || 'https://fd.nl'}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <span
                                        className={styles['podcast-icon']}
                                        dangerouslySetInnerHTML={{
                                            __html: SpotifyIcon as any,
                                        }}
                                    />

                                    <span>Spotify</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={props.applePodcastsUrl || 'https://fd.nl'}
                            >
                                <a target="_blank" rel="noopener noreferrer">
                                    <span
                                        className={styles['podcast-icon']}
                                        dangerouslySetInnerHTML={{
                                            __html: ApplePodcastsIcon as any,
                                        }}
                                    />

                                    <span>Apple Podcasts</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={
                                    props.googlePodcastsUrl || 'https://fd.nl'
                                }
                            >
                                <a target="_blank" rel="noopener noreferrer">
                                    <span
                                        className={styles['podcast-icon']}
                                        dangerouslySetInnerHTML={{
                                            __html: GooglePodcastsIcon as any,
                                        }}
                                    />

                                    <span>Google Podcasts</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            ) : null}
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles.fdDropdown];
}

export { Dropdown, getCssClassNames };
