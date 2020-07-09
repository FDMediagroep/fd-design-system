import React from 'react';
import styles from './Quote.module.scss';

interface Props {
    blockquote: string;
    figcaption: string;
}

function Quote(props: Props) {
    return (
        <figure className={styles.quote}>
            <blockquote>‘{props.blockquote}’</blockquote>
            <figcaption>• {props.figcaption}</figcaption>
        </figure>
    );
}

function getCssClassNames() {
    return [styles.quote];
}

export { Quote, getCssClassNames };
