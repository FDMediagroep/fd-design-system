import React from 'react';
import styles from './Infographic.module.scss';

interface Props {
    height?: string;
    src: string;
}

function Infographic(props: Props) {
    return (
        <iframe
            className={styles.infographic}
            src={props.src}
            height={props.height ?? 500}
        />
    );
}

function getCssClassNames(): string[] {
    return [styles.youtube];
}

export { Infographic, getCssClassNames };
