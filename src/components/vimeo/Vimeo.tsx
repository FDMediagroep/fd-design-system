import React from 'react';
import styles from './Vimeo.module.scss';

interface Props {
    id: string;
}
function Vimeo(props: Props) {
    return (
        <div className={styles['vimeo']}>
            <iframe
                src={`https://player.vimeo.com/video/${props.id}?badge=0`}
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles['vimeo']];
}

export { Vimeo, getCssClassNames };
