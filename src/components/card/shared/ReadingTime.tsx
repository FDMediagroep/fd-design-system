import React from 'react';
import styles from './ReadingTime.module.scss';
import { ReadingTimeIcon } from '../../../design-tokens/icons';

interface Props {
    className?: string;
    readingTime: number;
}

function ReadingTime(props: Props) {
    return (
        <div
            className={`${styles.readingTime}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <span
                className={styles.icon}
                dangerouslySetInnerHTML={{ __html: ReadingTimeIcon }}
            />{' '}
            <span>leestijd {props.readingTime} min</span>
        </div>
    );
}

function getCssClassNames() {
    return [styles.readingTime];
}

export { ReadingTime, getCssClassNames };
