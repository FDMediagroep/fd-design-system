import React from 'react';
import {
    BookmarkIcon,
    BookmarkOIcon,
    DownloadIcon,
    EnvelopeIcon,
    FacebookIcon,
    LinkedInIcon,
    NewspaperIcon,
    TwitterIcon,
    WhatsAppIcon,
} from '../../design-tokens/icons';
import {
    Button,
    getCssClassNames as getButtonCssClassNames,
} from '../button/Button';
import styles from './VerticalToolbar.module.scss';

export enum EventType {
    BOOKMARK = 'BOOKMARK',
    DOWNLOAD = 'DOWNLOAD',
    EMAIL = 'EMAIL',
    FACEBOOK = 'FACEBOOK',
    LINKED_IN = 'LINKED_IN',
    NEWSPAPER = 'NEWSPAPER',
    TWITTER = 'TWITTER',
    WHATSAPP = 'WHATSAPP',
}

export interface Props {
    bookmarked?: boolean;
    id: string;
    whatsappUrl?: string;
    facebookUrl?: string;
    twitterUrl?: string;
    linkedInUrl?: string;
    emailUrl?: string;
    title?: string;
    description?: string;
    hashTags?: string;

    onClick: (type: EventType, props: Props) => void;

    [x: string]: any;
}

function VerticalToolbar(props: Props) {
    return (
        <section
            className={`${props.className ?? ''} ${styles['verticalToolbar']}`}
        >
            <Button
                title="Deel via WhatsApp"
                size="s"
                onClick={props.onClick.bind(null, EventType.WHATSAPP, props)}
            >
                <span className={styles['icon']}>
                    <WhatsAppIcon />
                </span>
                <span className={styles['ariaLabel']}>Deel via WhatsApp</span>
            </Button>
            <Button
                title="Deel via Twitter"
                size="s"
                onClick={props.onClick.bind(null, EventType.TWITTER, props)}
            >
                <span className={styles['icon']}>
                    <TwitterIcon />
                </span>
                <span className={styles['ariaLabel']}>Deel via Twitter</span>
            </Button>
            <Button
                title="Deel via LinkedIn"
                size="s"
                onClick={props.onClick.bind(null, EventType.LINKED_IN, props)}
            >
                <span className={styles['icon']}>
                    <LinkedInIcon />
                </span>
                <span className={styles['ariaLabel']}>Deel via LinkedIn</span>
            </Button>
            <Button
                title="Deel via Facebook"
                size="s"
                onClick={props.onClick.bind(null, EventType.FACEBOOK, props)}
            >
                <span className={styles['icon']}>
                    <FacebookIcon />
                </span>
                <span className={styles['ariaLabel']}>Deel via Facebook</span>
            </Button>
            <Button
                title="Deel via E-mail"
                size="s"
                onClick={props.onClick.bind(null, EventType.EMAIL, props)}
            >
                <span className={styles['icon']}>
                    <EnvelopeIcon />
                </span>
                <span className={styles['ariaLabel']}>Deel via E-mail</span>
            </Button>
            <hr />
            <Button
                size="s"
                title="Bewaren"
                className={props.bookmarked && `active`}
                onClick={props.onClick.bind(null, EventType.BOOKMARK, props)}
            >
                <span className={`${styles['icon']} ${styles['bookmarkFill']}`}>
                    <BookmarkIcon />
                </span>
                <span
                    className={`${styles['icon']} ${styles['bookmarkClear']}`}
                >
                    <BookmarkOIcon />
                </span>
                <span className={styles['ariaLabel']}>Bewaren</span>
            </Button>
            <Button
                title="Download PDF"
                size="s"
                onClick={props.onClick.bind(null, EventType.DOWNLOAD, props)}
            >
                <span className={styles['icon']}>
                    <DownloadIcon />
                </span>
                <span className={styles['ariaLabel']}>Download PDF</span>
            </Button>
            <Button
                title="Krant weergave"
                size="s"
                onClick={props.onClick.bind(null, EventType.NEWSPAPER, props)}
            >
                <span className={styles['icon']}>
                    <NewspaperIcon />
                </span>
                <span className={styles['ariaLabel']}>Krant weergave</span>
            </Button>
        </section>
    );
}

function getCssClassNames(): string[] {
    return [styles['verticalToolbar'], ...getButtonCssClassNames()];
}

export { VerticalToolbar, getCssClassNames };
