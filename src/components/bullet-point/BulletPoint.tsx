import React from 'react';
import styles from './BulletPoint.module.scss';
import { BulletIcon, BulletRedIcon } from '../../design-tokens/icons';

export type Alignment = 'block' | 'right';

interface Props {
    bullets: string[];
    variant?: 'variant-1';
    alignment?: Alignment;
}

/**
 * Render a list of bullet-points with arrow-icon for use in an article.
 * @param props
 */
function BulletPoint(props: Props) {
    return (
        <div
            data-variant={props.variant}
            className={`${styles.bulletPoint} ${
                props.alignment === 'right' ? styles.right : ''
            }`}
        >
            {props.bullets.map((bullet, idx) => (
                <p key={idx}>
                    {props.variant ? (
                        <span className={styles.icon}>
                            <BulletRedIcon />
                        </span>
                    ) : (
                        <span className={styles.icon}>
                            <BulletIcon />
                        </span>
                    )}
                    <span dangerouslySetInnerHTML={{ __html: bullet }} />
                </p>
            ))}
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles.bulletPoint];
}

export { BulletPoint, getCssClassNames };
