import React from 'react';
import { BookmarkIcon, BookmarkOIcon } from '../../../design-tokens/icons';
import styles from './Footer.module.scss';

interface Props {
    className?: string;
    iconSpanClassName?: string;
    bookmarked?: boolean;
    onBookmark?: (e: React.MouseEvent<HTMLElement>) => void;
}

function Footer(props: Props) {
    return (
        <footer
            className={`${styles['footer']}${
                props.className ? ` ${props.className}` : ''
            } xs__p-0 xs__pr+4 xs__pb+4 xs__pl+4`}
        >
            <menu className="xs__m-0">
                <a onClick={props.onBookmark} className="xs__mt+2">
                    {props.bookmarked ? (
                        <span
                            className={`${styles['icon']}${
                                props.iconSpanClassName
                                    ? ` ${props.iconSpanClassName}`
                                    : ''
                            }`}
                        >
                            <BookmarkIcon />
                        </span>
                    ) : (
                        <span
                            className={`${styles['icon']}${
                                props.iconSpanClassName
                                    ? ` ${props.iconSpanClassName}`
                                    : ''
                            }`}
                        >
                            <BookmarkOIcon />
                        </span>
                    )}
                    <span data-bookmark="bookmark">Bewaren</span>
                </a>
            </menu>
        </footer>
    );
}

function getCssClassNames(): string[] {
    return [styles['footer']];
}

export { Footer, getCssClassNames };
