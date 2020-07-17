import React from 'react';
import styles from './Accordion.module.scss';

export interface Item {
    anchor?: string;
    title: string;
    content: JSX.Element;
}

interface Props {
    id: string;
    items: Item[];
    [x: string]: any;
}

function Accordion(props: Props) {
    return (
        <div
            className={`${styles.fdAccordion}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            {props.items.map((item, idx) => (
                <section
                    key={`${item.title}-${idx}`}
                    id={item.anchor ?? `q-${idx}`}
                >
                    <input
                        id={encodeURIComponent(item.title)}
                        type="radio"
                        name={props.id}
                    />
                    <label htmlFor={encodeURIComponent(item.title)}>
                        <h2>{item.title}</h2>
                    </label>
                    <div>{item.content}</div>
                </section>
            ))}
        </div>
    );
}

function getCssClassNames() {
    return [styles.fdAccordion];
}

export { Accordion, getCssClassNames };
