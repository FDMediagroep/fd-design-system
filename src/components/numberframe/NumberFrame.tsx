import React from 'react';
import styles from './NumberFrame.module.scss';

interface Props {
    number: string;
    description: string;
}

function NumberFrame(props: Props) {
    return (
        <div className={styles.numberFrame}>
            <h2>{props.number}</h2>
            <p>{props.description}</p>
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles.numberFrame];
}

export { NumberFrame, getCssClassNames };
