import React from 'react';
import styles from './OEmbed.module.scss';

interface Props {
    type: 'twitter-embed' | 'soundcloud-embed' | 'instagram-embed';
    url: string;
}
function OEmbed(props: Props) {
    return (
        <div
            className={`${styles['oembed']} ${props.type}`}
            data-url={props.url}
        />
    );
}

function getCssClassNames(): string[] {
    return [styles['oembed']];
}

export { OEmbed, getCssClassNames };
