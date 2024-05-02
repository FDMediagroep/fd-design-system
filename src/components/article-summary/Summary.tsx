import React from 'react';
import * as styles from './Summary.module.scss';

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
        <div data-variant={props.variant} className={styles['summary']}>
            <h3 className="heading sans s">{props.title ?? 'In het kort'}</h3>
            <ul className="body-text sans s">
                {props.summaries.map((summary) => (
                    <li
                        key={summary}
                        dangerouslySetInnerHTML={{ __html: summary }}
                    />
                ))}
            </ul>
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles['summary']];
}

export { Summary, getCssClassNames };
