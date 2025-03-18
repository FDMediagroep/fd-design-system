import React from 'react';
import * as styles from './WordFrame.module.scss';

interface Props {
    title: string;
    description?: string;
}

function WordFrame(props: Props) {
    return (
        <div className={styles['wordFrame']}>
            <h3>{props.title}</h3>
            {props.description ? <p>{props.description}</p> : null}
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles['wordFrame']];
}

export { WordFrame, getCssClassNames };
