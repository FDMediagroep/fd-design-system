import React from 'react';
import {
    TextArea,
    getCssClassNames,
} from '../../../src/components/input/TextArea';
import { render, act, fireEvent } from '@testing-library/react';

describe('TextArea', () => {
    test('should render correctly', () => {
        const {
            getByText,
            container,
            getByPlaceholderText,
            getByDisplayValue,
        } = render(
            <TextArea
                id="TextAreaId"
                className="TextAreaClass"
                label="Label of the TextArea"
                placeholder="TextArea placeholder"
                title="Title of the TextArea"
                description="Description of the TextArea"
                errorMessage="Error message of the TextArea"
                name="Name of the TextArea"
                value="1"
            />
        );

        expect(getByText('Label of the TextArea')).toBeTruthy();
        expect(container.querySelector('#TextAreaId')).toBeTruthy();
        expect(container.querySelector('.TextAreaClass')).toBeTruthy();
        expect(
            (container.querySelector('#TextAreaId') as HTMLInputElement).checked
        ).toBeFalsy();
        expect(getByPlaceholderText('TextArea placeholder')).toBeTruthy();
        expect(getByDisplayValue('1')).toBeTruthy();
    });

    test('should use name instead of id when exists', () => {
        const { getByText, container } = render(
            <TextArea
                id="TextAreaId"
                name="TextAreaName"
                className="TextAreaClass"
                label="Label of the TextArea"
            />
        );

        expect(getByText('Label of the TextArea')).toBeTruthy();
        expect(container.querySelector('#TextAreaId')).toBeTruthy();
        expect(container.querySelector('.TextAreaClass')).toBeTruthy();
        expect(container.querySelector("[name='TextAreaId'")).toBeFalsy();
        expect(container.querySelector("[name='TextAreaName'")).toBeTruthy();
    });

    test('should use given value', () => {
        const { getByText, container } = render(
            <TextArea
                id="TextAreaId"
                name="TextAreaName"
                className="TextAreaClass"
                label="Label of the TextArea"
                value="TextAreaValue"
            />
        );

        expect(getByText('Label of the TextArea')).toBeTruthy();
        expect(container.querySelector('#TextAreaId')).toBeTruthy();
        expect(container.querySelector('.TextAreaClass')).toBeTruthy();
        expect(container.querySelector("[name='TextAreaId'")).toBeFalsy();
        expect(container.querySelector("[name='TextAreaName'")).toBeTruthy();
        expect(
            (container.querySelector('#TextAreaId') as HTMLInputElement).value
        ).toEqual('TextAreaValue');
    });

    test('should have correct class name', () => {
        const { container } = render(
            <TextArea id="TextAreaId" label="Label of the TextArea" />
        );

        expect(
            container?.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });

    test('should use localStorage', () => {
        localStorage.setItem(
            `fd-textarea-TextAreaId`,
            'value from localStorage'
        );
        const { container, findByDisplayValue } = render(
            <TextArea
                id="TextAreaId"
                label="Label of the TextArea"
                localStorage={true}
            />
        );

        expect(findByDisplayValue('value from localStorage')).toBeTruthy();
        fireEvent.change(container.querySelector('#TextAreaId'), {
            target: { value: 'changed value' },
        });
        expect(localStorage.getItem('fd-textarea-TextAreaId')).toBe(
            'changed value'
        );
        fireEvent.change(container.querySelector('#TextAreaId'), {
            target: { value: '' },
        });
        expect(localStorage.getItem('fd-textarea-TextAreaId')).toBeFalsy();
    });
});
