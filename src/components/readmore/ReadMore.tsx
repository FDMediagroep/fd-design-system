import React from 'react';
import styles from './ReadMore.module.scss';

export type Variants = 'default' | 'variant-1' | 'variant-2';

interface Props {
    variant?: Variants;
    title: string;
    links: string[];
}

function ReadMore(props: Props) {
    return (
        <div data-variant={props.variant} className={styles.readMore}>
            <h3>{props.title}</h3>
            {props.links.map((link) => (
                <p key={link} dangerouslySetInnerHTML={{ __html: link }} />
            ))}
        </div>
    );
}

function getCssClassNames() {
    return [styles.readMore];
}

export { ReadMore, getCssClassNames };
