import React from 'react';
import styles from './Switch.module.scss';

export interface Props {
    /**
     * Optional class name(s). Space delimited.
     */
    className?: string;

    /**
     * Optional defaultChecked property is to set the initial state of the switch. Default is false.
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
     * Optional name is used as name of the input field. When omitted the id is used instead.
     */
    name?: string;

    /**
     * Optional value of the input field. Default is 1.
     */
    value?: string;

    [x: string]: any;
}

function Switch(props: Props) {
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
        <div
            className={`${styles.fdInputSwitch}${
                className ? ` ${className}` : ''
            }`}
        >
            <label>
                <input
                    {...rest}
                    id={id}
                    type="checkbox"
                    name={name ? name : id}
                    value={value ? value : '1'}
                    defaultChecked={defaultChecked}
                    aria-label={label}
                />
                <span className={styles.switch}></span>
                <span className={styles.switchLabel}>{label}</span>
            </label>
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles.fdInputSwitch];
}

export { Switch, getCssClassNames };
