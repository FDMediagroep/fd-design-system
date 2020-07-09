import React from 'react';
import styles from './Checkbox.module.scss';

export interface Props {
    /**
     * Optional class name(s). Space delimited.
     */
    className?: string;

    /**
     * Optional defaultChecked property is to set the initial state of the checkbox. Default is false.
     */
    defaultChecked?: boolean;

    /**
     * Mandatory id.
     */
    id: string;

    /**
     * Optional label.
     */
    label?: string;

    /**
     * Optional name used as name for the input field. When omitted the id is used.
     */
    name?: string;

    /**
     * Optional value for the input field. Default is 1.
     */
    value?: string;

    [x: string]: any;
}

export default function Checkbox(props: Props) {
    return (
        <label
            className={`${styles.fdCheckbox}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <input
                {...props}
                id={props.id}
                type="checkbox"
                name={props.name ? props.name : props.id}
                value={props.value ? props.value : '1'}
                defaultChecked={props.defaultChecked}
            />
            <span className={styles.checkbox}>{props.label}</span>
        </label>
    );
}

function getCssClassNames() {
    return [styles.fdCheckbox];
}

export { Checkbox, getCssClassNames };
