import React, { useEffect, useState } from 'react';
import styles from './Select.module.scss';
import { CheckIcon, DownThinIcon } from '../../design-tokens/icons';

declare let localStorage: any;

export interface Props {
    /**
     * Mandatory id of the select element.
     */
    id: string;

    /**
     * Optional name of the select element. Id is used when name is unset.
     */
    name?: string;

    /**
     * Optional className is set as the className of the outmost container element.
     */
    className?: string;

    /**
     * Optional description is set as description text for the select field.
     * Use this to describe the purpose of the field to the user.
     */
    description?: string;

    /**
     * Optional default value of the select element.
     */
    defaultValue?: string | number;

    /**
     * Optional value of the select element.
     */
    value?: string | number;

    /**
     * Optional. When true the default select validation kicks in. Tip: use in combination with pattern.
     */
    required?: boolean;

    /**
     * Optional. The label shown in the select field.
     */
    label?: string;

    /**
     * Optional. The native browser tooltip text shown on hover. When omitted then the label is used.
     */
    title?: string;

    /**
     * Optional. Custom error message shown when the value does fit the pattern.
     */
    errorMessage?: string;

    /**
     * Optional callback hook triggered when a change event occured in the input field.
     */
    onChange?: (value: React.ChangeEvent<HTMLSelectElement>) => void;

    onFocus?: (value: React.FocusEvent<HTMLSelectElement>) => void;

    onBlur?: (value: React.FocusEvent<HTMLSelectElement>) => void;

    /**
     * Optional. Store the value to localStorage which will be used as default value upon subsequent visits of the page.
     * Tip: `id` is used as suffix for the property name.
     */
    localStorage?: boolean;

    /**
     * Misc. properties.
     */
    [x: string]: any;
}

export enum Patterns {
    MOBILE = '06[0-9]{8}',
    EMAIL = '.+@.+\\.[a-z]{2,3}',
}

function Select(props: Props) {
    const { value: pValue } = props;
    const [value, setValue] = useState(null);
    const errorMessage = props.errorMessage ?? 'Voer een geldige waarde in';

    useEffect(() => {
        if (pValue !== value) {
            setValue(pValue);
        }
    }, [value, pValue]);

    function store(value: string) {
        if (value) {
            localStorage.setItem(`fd-select-${props.id}`, value);
        } else {
            localStorage.removeItem(`fd-select-${props.id}`);
        }
    }

    function checkValue(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value;
        if (value) {
            (event.currentTarget as HTMLSelectElement).setCustomValidity('');
            setValue(value);
        } else {
            setValue('');
        }
        if (props.onChange) {
            props.onChange(event);
        }
        if (props.localStorage) {
            store(value);
        }
    }

    function handleInvalid(event: React.FormEvent) {
        (event.currentTarget as HTMLInputElement).setCustomValidity(
            errorMessage
        );
    }

    return (
        <div
            className={`${styles.fdSelect}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <div className={styles.select}>
                <select
                    {...props}
                    id={props.id}
                    name={props.name ?? props.id}
                    defaultValue={props.defaultValue}
                    onChange={checkValue}
                    value={props.value}
                    required={props.required}
                    onInvalid={handleInvalid}
                    title={props.title ?? props.label ?? 'Value'}
                    onFocus={props.onFocus}
                    onBlur={props.onBlur}
                    placeholder={props.placeholder ? props.placeholder : ' '}
                    aria-label={props.label ?? props.title ?? 'Value'}
                >
                    {props.children}
                </select>
                <div>
                    <label htmlFor={props.id}>{props.label ?? 'Value'}</label>
                    <span className={styles.iconCheck}>
                        <CheckIcon />
                    </span>
                    <label htmlFor={props.id} className={styles.arrow}>
                        <DownThinIcon />
                    </label>
                </div>
                {props.type !== 'date' && props.type !== 'datetime' ? (
                    <div
                        className={`${styles.selectMessage} ${styles.errorMessage}`}
                    >
                        {props.errorMessage}
                    </div>
                ) : null}
                <div className={styles.selectMessage}>{props.description}</div>
            </div>
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles.fdSelect];
}

export { Select, getCssClassNames };
