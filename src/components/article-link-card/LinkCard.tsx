import React from 'react';
import * as styles from './LinkCard.module.scss';
import { ChevronRightIcon } from '../../design-tokens/icons';

export interface Props {
    className?: string;
    link: string;
    linkText?: string;
    title?: string;
}

export default function LinkCard(props: Props) {
    return (
        <>
            <div
                className={`${styles['linkCard']}${
                    props.className ? ` ${props.className}` : ''
                }`}
            >
                <h3>{props.title ? props.title : 'Beheer'}</h3>
                <a href={props.link}>
                    {props.linkText
                        ? props.linkText
                        : 'Beheer uw nieuwsbriefinstellingen'}{' '}
                    <span className={styles['icon']}>
                        <ChevronRightIcon />
                    </span>
                </a>
            </div>
        </>
    );
}

function getCssClassNames(): string[] {
    return [styles['linkCard']];
}

export { LinkCard, getCssClassNames };
