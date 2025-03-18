import React, { useEffect, useState } from 'react';
import * as styles from './TextInput.module.scss';
import { CheckIcon } from '../../design-tokens/icons';

declare let localStorage: any;

export interface Props {
    /**
     * Mandatory id of the input element.
     */
    id: string;

    /**
     * Optional name of the input element. Id is used when name is unset.
     */
    name?: string;

    /**
     * Optional className is set as the className of the outmost container element.
     */
    className?: string;

    /**
     * Optional description is set as description text for the input field.
     * Use this to describe the purpose of the field to the user.
     */
    description?: string;

    /**
     * Optional default value of the input element.
     */
    defaultValue?: string | number;

    /**
     * Optional value of the input element.
     */
    value?: string | number;

    /**
     * Optional. When true the default input validation kicks in. Tip: use in combination with pattern.
     */
    required?: boolean;

    /**
     * Optional. The pattern to which the input value is validated. Only works when required is set to true.
     * Tip: the exported Patterns enum already contains some validation rules for common use-cases.
     */
    pattern?: Patterns | string;

    /**
     * Optional. The label shown in the input field.
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
     * Optional. Type of the input field. Default is `text`.
     */
    type?: string;

    /**
     * The min attribute specifies the minimum value for an <input> element.
     */
    min?: string;

    /**
     * The min attribute specifies the maximum value for an <input> element.
     */
    max?: string;

    /**
     * Optional minimum length of the input field.
     */
    minLength?: number;

    /**
     * Optional maximum length of the input field.
     */
    maxLength?: number;

    /**
     * Hide the number spinner arrows for number inputs.
     */
    hideNumberSpinners?: boolean;

    /**
     * Optional callback hook triggered when a change event occured in the input field.
     */
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;

    onFocus?: (value: React.FocusEvent<HTMLInputElement>) => void;

    onBlur?: (value: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * Optional placeholder text which is alway shown when the input value is empty. Default value is an empty space ' ' needed for specific styling hacks.
     */
    placeholder?: string;

    /**
     * Optional. Store the value to localStorage which will be used as default value upon subsequent visits of the page.
     * Tip: `id` is used as suffix for the property name.
     */
    localStorage?: boolean;

    /**
     * Custom validator
     * @param input
     * @returns `true` if valid and `false` if otherwise
     */
    customValidator?: (input: HTMLInputElement) => boolean;

    /**
     * Misc. properties.
     */
    [x: string]: any;
}

export enum Patterns {
    MOBILE = '06[0-9]{8}',
    EMAIL = '.+@.+\\.[a-z]{2,3}',
}

function TextInput(props: Props) {
    const { localStorage: pLocalStorage, id: pId, value: pValue } = props;
    const [value, setValue] = useState(null);
    const errorMessage = props.errorMessage ?? 'Voer een geldige waarde in';

    useEffect(() => {
        const val = pLocalStorage
            ? localStorage.getItem(`fd-input-${pId}`)
            : pValue || '';
        if (val) {
            setValue(val);
        }
    }, [pLocalStorage, pId, pValue]);

    useEffect(() => {
        if (pValue !== value) {
            setValue(pValue);
        }
    }, [pValue, value]);

    function store(value: string) {
        if (value) {
            localStorage.setItem(`fd-input-${props.id}`, value);
        } else {
            localStorage.removeItem(`fd-input-${props.id}`);
        }
    }

    function checkValue(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        if (value) {
            (event.currentTarget as HTMLInputElement).setCustomValidity('');
            setValue(value);
        } else {
            setValue('');
        }
        if (props.customValidator) {
            if (props.customValidator(event.target)) {
                (event.currentTarget as HTMLInputElement).setCustomValidity('');
            } else {
                (event.currentTarget as HTMLInputElement).setCustomValidity(
                    errorMessage
                );
            }
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
            className={`${styles['fdInput']}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <div className={styles['input']}>
                <input
                    {...props}
                    id={props.id}
                    data-hide-number-spinners={props.hideNumberSpinners}
                    name={props.name ?? props.id}
                    defaultValue={props.defaultValue}
                    type={props.type ?? 'text'}
                    min={props.min}
                    max={props.max}
                    minLength={props.minLength}
                    maxLength={props.maxLength}
                    onChange={checkValue}
                    value={props.value}
                    required={props.required}
                    pattern={props.pattern}
                    onInvalid={handleInvalid}
                    title={props.title ?? props.label ?? 'Value'}
                    onFocus={props.onFocus}
                    onBlur={props.onBlur}
                    placeholder={props.placeholder ? props.placeholder : ' '}
                    aria-label={props.label ?? props.title ?? 'Value'}
                />
                <div>
                    <label htmlFor={props.id}>{props.label ?? 'Value'}</label>
                    <span className={styles['iconCheck']}>
                        <CheckIcon />
                    </span>
                </div>
                {props.type !== 'date' && props.type !== 'datetime' ? (
                    <div
                        className={`${styles['inputMessage']} ${styles['errorMessage']}`}
                    >
                        {props.errorMessage}
                    </div>
                ) : null}
                <div className={styles['inputMessage']}>
                    {props.description}
                </div>
            </div>
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles['fdInput']];
}

export { TextInput, getCssClassNames };
