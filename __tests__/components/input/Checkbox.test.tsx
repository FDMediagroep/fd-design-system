import React from 'react';
import {
    Checkbox,
    getCssClassNames,
} from '../../../src/components/input/Checkbox';
import { render } from '@testing-library/react';

describe('Checkbox', () => {
    test('should render correctly', () => {
        const { getByText, container } = render(
            <Checkbox
                id="CheckboxId"
                className="CheckboxClass"
                label="Label of the Checkbox"
            />
        );

        expect(getByText('Label of the Checkbox')).toBeTruthy();
        expect(container.querySelector('#CheckboxId')).toBeTruthy();
        expect(container.querySelector('.CheckboxClass')).toBeTruthy();
        expect(
            (container.querySelector('#CheckboxId') as HTMLInputElement).checked
        ).toBeFalsy();
        expect(
            (container.querySelector('#CheckboxId') as HTMLInputElement).value
        ).toEqual('1');
    });

    test('should render default checked correctly', () => {
        const { getByText, container } = render(
            <Checkbox
                id="CheckboxId"
                className="CheckboxClass"
                label="Label of the Checkbox"
                defaultChecked={true}
            />
        );

        expect(getByText('Label of the Checkbox')).toBeTruthy();
        expect(container.querySelector('#CheckboxId')).toBeTruthy();
        expect(container.querySelector('.CheckboxClass')).toBeTruthy();
        expect(
            (container.querySelector('#CheckboxId') as HTMLInputElement).checked
        ).toBeTruthy();
        expect(
            (container.querySelector('#CheckboxId') as HTMLInputElement).value
        ).toEqual('1');
    });

    test('should use name instead of id when exists', () => {
        const { getByText, container } = render(
            <Checkbox
                id="CheckboxId"
                name="CheckboxName"
                className="CheckboxClass"
                label="Label of the Checkbox"
                defaultChecked={true}
            />
        );

        expect(getByText('Label of the Checkbox')).toBeTruthy();
        expect(container.querySelector('#CheckboxId')).toBeTruthy();
        expect(container.querySelector('.CheckboxClass')).toBeTruthy();
        expect(container.querySelector("[name='CheckboxId'")).toBeFalsy();
        expect(container.querySelector("[name='CheckboxName'")).toBeTruthy();
        expect(
            (container.querySelector('#CheckboxId') as HTMLInputElement).checked
        ).toBeTruthy();
        expect(
            (container.querySelector('#CheckboxId') as HTMLInputElement).value
        ).toEqual('1');
    });

    test('should use given value', () => {
        const { getByText, container } = render(
            <Checkbox
                id="CheckboxId"
                name="CheckboxName"
                className="CheckboxClass"
                label="Label of the Checkbox"
                value="CheckboxValue"
                defaultChecked={true}
            />
        );

        expect(getByText('Label of the Checkbox')).toBeTruthy();
        expect(container.querySelector('#CheckboxId')).toBeTruthy();
        expect(container.querySelector('.CheckboxClass')).toBeTruthy();
        expect(container.querySelector("[name='CheckboxId'")).toBeFalsy();
        expect(container.querySelector("[name='CheckboxName'")).toBeTruthy();
        expect(
            (container.querySelector('#CheckboxId') as HTMLInputElement).checked
        ).toBeTruthy();
        expect(
            (container.querySelector('#CheckboxId') as HTMLInputElement).value
        ).toEqual('CheckboxValue');
    });

    test('should have correct class name', () => {
        const { container } = render(
            <Checkbox
                id="CheckboxId"
                label="Label of the Checkbox"
                defaultChecked={true}
            />
        );

        expect(
            container.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
