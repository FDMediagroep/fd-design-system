import React from 'react';
import { Radio, getCssClassNames } from '../../../src/components/input/Radio';
import { render, fireEvent } from '@testing-library/react';

describe('Radio', () => {
    test('should render correctly', () => {
        const { getByText, container, getByDisplayValue } = render(
            <Radio
                id="radioId"
                className="radioClass"
                label="Label of the radio"
                value="1"
            />
        );

        expect(getByText('Label of the radio')).toBeTruthy();
        expect(container.querySelector('#radioId')).toBeTruthy();
        expect(container.querySelector('.radioClass')).toBeTruthy();
        expect(
            (container.querySelector('#radioId') as HTMLInputElement).checked
        ).toBeFalsy();
        expect(getByDisplayValue('1')).toBeTruthy();
    });

    test('should render default checked correctly', () => {
        const { getByText, container, getByDisplayValue } = render(
            <>
                <Radio
                    id="radioId"
                    name="radio"
                    className="radioClass"
                    label="Label of the radio"
                    value="1"
                />
                <Radio
                    id="radioId2"
                    name="radio"
                    label="Label 2 of the radio"
                    defaultChecked={true}
                    value="2"
                />
            </>
        );

        expect(getByText('Label of the radio')).toBeTruthy();
        expect(container.querySelector('#radioId')).toBeTruthy();
        expect(container.querySelector('#radioId2')).toBeTruthy();
        expect(container.querySelector('.radioClass')).toBeTruthy();
        expect(
            (container.querySelector('#radioId') as HTMLInputElement).checked
        ).toBeFalsy();
        expect(
            (container.querySelector('#radioId2') as HTMLInputElement).checked
        ).toBeTruthy();
        expect(getByDisplayValue('1')).toBeTruthy();
        expect(getByDisplayValue('2')).toBeTruthy();

        fireEvent.click(container.querySelector('#radioId'));
        expect(
            (container.querySelector('#radioId') as HTMLInputElement).checked
        ).toBeTruthy();
        expect(
            (container.querySelector('#radioId2') as HTMLInputElement).checked
        ).toBeFalsy();
    });

    test('should use name instead of id when exists', () => {
        const { getByText, container, getByDisplayValue } = render(
            <Radio
                id="radioId"
                name="radioName"
                className="radioClass"
                label="Label of the radio"
                defaultChecked={true}
                value="1"
            />
        );

        expect(getByText('Label of the radio')).toBeTruthy();
        expect(container.querySelector('#radioId')).toBeTruthy();
        expect(container.querySelector('.radioClass')).toBeTruthy();
        expect(container.querySelector("[name='radioId'")).toBeFalsy();
        expect(container.querySelector("[name='radioName'")).toBeTruthy();
        expect(
            (container.querySelector('#radioId') as HTMLInputElement).checked
        ).toBeTruthy();
        expect(getByDisplayValue('1')).toBeTruthy();
    });

    test('should use given value', () => {
        const { getByText, container, getByDisplayValue } = render(
            <Radio
                id="radioId"
                name="radioName"
                className="radioClass"
                label="Label of the radio"
                value="switchValue"
                defaultChecked={true}
            />
        );

        expect(getByText('Label of the radio')).toBeTruthy();
        expect(container.querySelector('#radioId')).toBeTruthy();
        expect(container.querySelector('.radioClass')).toBeTruthy();
        expect(container.querySelector("[name='radioId'")).toBeFalsy();
        expect(container.querySelector("[name='radioName'")).toBeTruthy();
        expect(
            (container.querySelector('#radioId') as HTMLInputElement).checked
        ).toBeTruthy();
        expect(getByDisplayValue('switchValue')).toBeTruthy();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <Radio
                id="radioId"
                label="Label of the radio"
                defaultChecked={true}
                value="1"
            />
        );

        expect(
            container.firstElementChild.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
