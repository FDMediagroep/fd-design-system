import React, { useEffect, useState } from 'react';
import styles from './TextArea.module.scss';
import { wordCount } from '../../utils/words';
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
    value?: string;

    /**
     * Optional. When true the default input validation kicks in. Tip: use in combination with pattern.
     */
    required?: boolean;

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
     * Optional. Number of rows.
     */
    rows?: number;

    /**
     * Optional. Number of cols.
     */
    cols?: number;

    /**
     * Optional minimum length of the input field.
     */
    minLength?: number;

    /**
     * Optional maximum length of the input field.
     */
    maxLength?: number;

    /**
     * Optional. Maximum number of words.
     */
    maxWords?: number;

    /**
     * Optional callback hook triggered when a change event occured in the input field.
     */
    onChange?: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;

    onFocus?: (value: React.FocusEvent<HTMLTextAreaElement>) => void;

    onBlur?: (value: React.FocusEvent<HTMLTextAreaElement>) => void;

    /**
     * Optional placeholder text which is alway shown when the input value is empty. Default value is an empty space ' ' needed for specific styling hacks.
     */
    placeholder?: string;

    /**
     * Optional. Store the value to localStorage which will be used as default value upon subsequent visits of the page.
     * Tip: `id` is used as suffix for the property name.
     */
    localStorage?: boolean;

    [x: string]: any;
}

function TextArea(props: Props) {
    const [value, setValue] = useState(props.value ?? '');
    const errorMessage = props.errorMessage ?? 'Voer een geldige waarde in';
    const showMaxWordsError = props.maxWords
        ? wordCount(value) > props.maxWords
        : false;

    const preventWordsOverflow = props.maxWords
        ? wordCount(value) >= props.maxWords
        : false;

    useEffect(() => {
        const val = props.localStorage
            ? localStorage.getItem(`fd-textarea-${props.id}`)
            : props.value || '';
        if (val) {
            setValue(val);
        }
    }, [props.value]);

    function store(value: string) {
        if (value) {
            localStorage.setItem(`fd-textarea-${props.id}`, value);
        } else {
            localStorage.removeItem(`fd-textarea-${props.id}`);
        }
    }

    function checkValue(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const value = event.target.value;
        if (value) {
            (event.currentTarget as HTMLTextAreaElement).setCustomValidity('');
            setValue(value);
        } else {
            setValue('');
        }
        props?.onChange?.(event);
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
            className={`${styles.fdTextArea}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <div className={styles.textArea}>
                <textarea
                    {...props}
                    data-show-error={showMaxWordsError}
                    id={props.id}
                    name={props.name ?? props.id}
                    minLength={props.minLength}
                    maxLength={preventWordsOverflow ? 0 : props.maxLength}
                    onChange={checkValue}
                    defaultValue={props.defaultValue}
                    value={value}
                    required={props.required}
                    onInvalid={handleInvalid}
                    title={props.title ?? props.label ?? 'Value'}
                    rows={props.rows}
                    cols={props.cols}
                    onFocus={props.onFocus}
                    onBlur={props.onBlur}
                    placeholder={props.placeholder ? props.placeholder : ' '}
                    aria-label={props.label ?? props.title ?? 'Value'}
                />
                <div>
                    <label htmlFor={props.id}>{props.label ?? 'Value'}</label>
                    <span
                        className={styles.iconCheck}
                        dangerouslySetInnerHTML={{ __html: CheckIcon }}
                    />
                </div>
                <div
                    className={`${styles.textareaMessage} ${styles.errorMessage}`}
                >
                    {errorMessage}
                </div>
                <div className={styles.textareaMessage}>
                    {props.description}
                </div>
            </div>
        </div>
    );
}

function getCssClassNames() {
    return [styles.fdTextArea];
}

export { TextArea, getCssClassNames };
