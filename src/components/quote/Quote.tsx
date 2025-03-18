import React from 'react';
import styles from './Quote.module.scss';

interface Props {
    className?: string;
    blockquote: string;
    figcaption: string;
}

function Quote(props: Props) {
    return (
        <figure
            className={`${styles['quote']}${
                props.className ? ` ${props.className}` : ``
            }`}
        >
            <blockquote>‘{props.blockquote}’</blockquote>
            <figcaption>• {props.figcaption}</figcaption>
        </figure>
    );
}

function getCssClassNames(): string[] {
    return [styles['quote']];
}

export { Quote, getCssClassNames };
