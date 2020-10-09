import React from 'react';
import styles from './RelatedPdf.module.scss';

interface Props {
    fileId: string;
    fileName: string;
    title: string;
}
function RelatedPdf(props: Props) {
    return (
        <a
            className={styles.pdf}
            href={`https://fd-binary-external-development.imgix.net/${props.fileName}?dl=${props.title}`}
        >
            <i className="ico ico-download">📎</i>
            <h2>{props.title}</h2>
        </a>
    );
}

function getCssClassNames(): string[] {
    return [styles.pdf];
}

export { RelatedPdf, getCssClassNames };
