import React from 'react';
import { BookmarkIcon, BookmarkOIcon } from '../../../design-tokens/icons';
import styles from './Footer.module.scss';
import { ReadingTime } from './ReadingTime';
import { getCssClassNames as getReadingTimeCssClassNames } from './ReadingTime';

interface Props {
    className?: string;
    iconSpanClassName?: string;
    bookmarked?: boolean;
    onBookmark?: (e: React.MouseEvent<HTMLElement>) => void;
    /**
     * Reading time in minutes.
     */
    readingTime?: number;
}

function Footer(props: Props) {
    return (
        <footer
            className={`${styles.footer}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <menu>
                {props.readingTime && (
                    <ReadingTime readingTime={props.readingTime} />
                )}

                <a onClick={props.onBookmark}>
                    {props.bookmarked ? (
                        <span
                            className={`${styles.icon}${
                                props.iconSpanClassName
                                    ? ` ${props.iconSpanClassName}`
                                    : ''
                            }`}
                            dangerouslySetInnerHTML={{
                                __html: BookmarkIcon,
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
                                __html: BookmarkOIcon,
                            }}
                        />
                    )}
                    <span data-bookmark="bookmark">Bewaren</span>
                </a>
            </menu>
        </footer>
    );
}

function getCssClassNames() {
    return [styles.footer, ...getReadingTimeCssClassNames()];
}

export { Footer, getCssClassNames };
