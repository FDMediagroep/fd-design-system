import React from 'react';
import styles from './Radio.module.scss';

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
     * When multiple same-named radio inputs exists they will act as a switch.
     */
    name?: string;

    /**
     * Optional value for the input field. Default is 1.
     */
    value?: string;

    [x: string]: any;
}

function Radio(props: Props) {
    const {
        className,
        defaultChecked,
        id,
        label,
        name,
        value,
        ...rest
    } = props;

    return (
        <label
            className={`${styles.fdRadio}${className ? ` ${className}` : ''}`}
        >
            <input
                {...rest}
                id={id}
                type="radio"
                name={name ? name : id}
                value={value}
                defaultChecked={defaultChecked}
                aria-label={label}
            />
            <span className={styles.radio}>{label}</span>
        </label>
    );
}

function getCssClassNames(): string[] {
    return [styles.fdRadio];
}

export { Radio, getCssClassNames };
