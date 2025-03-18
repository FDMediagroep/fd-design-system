import React from 'react';
import styles from './Youtube.module.scss';

interface Props {
    id: string;
}
function Youtube(props: Props) {
    return (
        <div className={styles['youtube']}>
            <iframe
                src={`https://www.youtube.com/embed/${props.id}`}
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles['youtube']];
}

export { Youtube, getCssClassNames };
