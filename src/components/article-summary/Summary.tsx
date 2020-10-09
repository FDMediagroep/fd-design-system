import React from 'react';
import styles from './Summary.module.scss';

export type Variants = 'default' | 'variant-1' | 'variant-2';

interface Props {
    variant?: Variants;
    title?: string;
    summaries: string[];
}

/**
 * Render a bullet-point summary for use in an article.
 * @param props
 */
function Summary(props: Props) {
    return (
        <div data-variant={props.variant} className={styles.summary}>
            <h3>{props.title ?? 'In het kort'}</h3>
            {props.summaries.map((summary) => {
                return <p key={summary}>{summary}</p>;
            })}
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles.summary];
}

export { Summary, getCssClassNames };
