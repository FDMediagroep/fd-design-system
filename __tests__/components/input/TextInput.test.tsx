import React from 'react';
import {
    TextInput,
    getCssClassNames,
} from '../../../src/components/input/TextInput';
import { render, act, fireEvent } from '@testing-library/react';

describe('TextInput', () => {
    test('should render correctly', () => {
        const {
            getByText,
            container,
            getByPlaceholderText,
            getByDisplayValue,
        } = render(
            <TextInput
                id="TextInputId"
                className="TextInputClass"
                label="Label of the TextInput"
                placeholder="TextInput placeholder"
                title="Title of the TextInput"
                description="Description of the TextInput"
                errorMessage="Error message of the TextInput"
                name="Name of the TextInput"
                value="1"
            />
        );

        expect(getByText('Label of the TextInput')).toBeTruthy();
        expect(container.querySelector('#TextInputId')).toBeTruthy();
        expect(container.querySelector('.TextInputClass')).toBeTruthy();
        expect(
            (container.querySelector('#TextInputId') as HTMLInputElement)
                .checked
        ).toBeFalsy();
        expect(getByPlaceholderText('TextInput placeholder')).toBeTruthy();
        expect(getByDisplayValue('1')).toBeTruthy();
    });

    test('should use name instead of id when exists', () => {
        const { getByText, container } = render(
            <TextInput
                id="TextInputId"
                name="TextInputName"
                className="TextInputClass"
                label="Label of the TextInput"
            />
        );

        expect(getByText('Label of the TextInput')).toBeTruthy();
        expect(container.querySelector('#TextInputId')).toBeTruthy();
        expect(container.querySelector('.TextInputClass')).toBeTruthy();
        expect(container.querySelector("[name='TextInputId'")).toBeFalsy();
        expect(container.querySelector("[name='TextInputName'")).toBeTruthy();
    });

    test('should use given value', () => {
        const { getByText, container } = render(
            <TextInput
                id="TextInputId"
                name="TextInputName"
                className="TextInputClass"
                label="Label of the TextInput"
                value="TextInputValue"
            />
        );

        expect(getByText('Label of the TextInput')).toBeTruthy();
        expect(container.querySelector('#TextInputId')).toBeTruthy();
        expect(container.querySelector('.TextInputClass')).toBeTruthy();
        expect(container.querySelector("[name='TextInputId'")).toBeFalsy();
        expect(container.querySelector("[name='TextInputName'")).toBeTruthy();
        expect(
            (container.querySelector('#TextInputId') as HTMLInputElement).value
        ).toEqual('TextInputValue');
    });

    test('should have correct class name', () => {
        const { container } = render(
            <TextInput id="TextInputId" label="Label of the TextInput" />
        );

        expect(
            container.firstElementChild.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });

    test('should use localStorage', () => {
        localStorage.setItem(`fd-input-TextInputId`, 'value from localStorage');
        const { container, findByDisplayValue } = render(
            <TextInput
                id="TextInputId"
                label="Label of the TextInput"
                localStorage={true}
            />
        );

        expect(findByDisplayValue('value from localStorage')).toBeTruthy();
        fireEvent.change(container.querySelector('#TextInputId'), {
            target: { value: 'changed value' },
        });
        expect(localStorage.getItem('fd-input-TextInputId')).toBe(
            'changed value'
        );
        fireEvent.change(container.querySelector('#TextInputId'), {
            target: { value: '' },
        });
        expect(localStorage.getItem('fd-input-TextInputId')).toBeFalsy();
    });
});
