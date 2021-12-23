import Link from 'next/link';
import React from 'react';
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
    const sizeClass = props.size === 'm' ? styles.m : '';

    return (
        <button
            {...props}
            className={`${styles.fdDropdown} ${sizeClass}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <span>{props.children}</span>
            {props.expanded ? (
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
            {props.expanded ? (
                <nav>
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
        </button>
    );
}

function getCssClassNames(): string[] {
    return [styles.fdDropdown];
}

export { Dropdown, getCssClassNames };
