import React, { JSX } from 'react';
import * as styles from './Accordion.module.scss';
import { MinimiseIcon, ExpandIcon } from '../../design-tokens/icons';

export interface Item {
    anchor?: string;
    checked?: boolean;
    title: string;
    content: JSX.Element;
}

interface Props {
    items: Item[];
    [x: string]: any;
}

function Accordion(props: Props) {
    return (
        <div
            className={`${styles['fdAccordion']}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            {props.items.map((item, idx) => (
                <section
                    key={`${item.title}-${idx}`}
                    id={`section-${item.anchor ?? `q-${idx}`}`}
                >
                    <input
                        id={item.anchor ?? `q-${idx}`}
                        type="checkbox"
                        name={item.anchor ?? `q-${idx}`}
                        onChange={console.log}
                        defaultChecked={item.checked}
                        aria-label={item.title}
                    />
                    <label
                        htmlFor={item.anchor ?? `q-${idx}`}
                        className={`${styles['icon']} ${styles['minimise']}`}
                    >
                        <MinimiseIcon />
                    </label>
                    <label
                        htmlFor={item.anchor ?? `q-${idx}`}
                        className={`${styles['icon']} ${styles['expand']}`}
                    >
                        <ExpandIcon />
                    </label>
                    <div className={styles['textContent']}>
                        <label htmlFor={item.anchor ?? `q-${idx}`}>
                            <h2>{item.title}</h2>
                        </label>
                        <div>{item.content}</div>
                    </div>
                </section>
            ))}
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles['fdAccordion']];
}

export { Accordion, getCssClassNames };
