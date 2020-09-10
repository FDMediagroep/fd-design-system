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
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <label>
                <input
                    {...rest}
                    id={props.id}
                    type="checkbox"
                    name={props.name ? props.name : props.id}
                    value={props.value ? props.value : '1'}
                    defaultChecked={props.defaultChecked}
                    aria-label={props.label}
                />
                <span className={styles.switch}></span>
                <span className={styles.switchLabel}>{props.label}</span>
            </label>
        </div>
    );
}

function getCssClassNames() {
    return [styles.fdInputSwitch];
}

export { Switch, getCssClassNames };
