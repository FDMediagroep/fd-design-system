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
            className={`${styles.footer}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <menu>
                <a onClick={props.onBookmark}>
                    {props.bookmarked ? (
                        <span
                            className={`${styles.icon}${
                                props.iconSpanClassName
                                    ? ` ${props.iconSpanClassName}`
                                    : ''
                            }`}
                            dangerouslySetInnerHTML={{
                                __html: BookmarkIcon as any,
                            }}
                        />
                    ) : (
                        <span
                            className={`${styles.icon}${
                                props.iconSpanClassName
                                    ? ` ${props.iconSpanClassName}`
                                    : ''
                            }`}
                            dangerouslySetInnerHTML={{
                                __html: BookmarkOIcon as any,
                            }}
                        />
                    )}
                    <span data-bookmark="bookmark">Bewaren</span>
                </a>
            </menu>
        </footer>
    );
}

function getCssClassNames(): string[] {
    return [styles.footer];
}

export { Footer, getCssClassNames };
