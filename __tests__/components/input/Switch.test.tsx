import React from 'react';
import { Switch, getCssClassNames } from '../../../src/components/input/Switch';
import { render } from '@testing-library/react';

describe('Switch', () => {
    test('should render correctly', () => {
        const { getByText, container } = render(
            <Switch
                id="switchId"
                className="switchClass"
                label="Label of the switch"
            />
        );

        expect(getByText('Label of the switch')).toBeTruthy();
        expect(container.querySelector('#switchId')).toBeTruthy();
        expect(container.querySelector('.switchClass')).toBeTruthy();
        expect(
            (container.querySelector('#switchId') as HTMLInputElement).checked
        ).toBeFalsy();
        expect(
            (container.querySelector('#switchId') as HTMLInputElement).value
        ).toEqual('1');
    });

    test('should render default checked correctly', () => {
        const { getByText, container } = render(
            <Switch
                id="switchId"
                className="switchClass"
                label="Label of the switch"
                defaultChecked={true}
            />
        );

        expect(getByText('Label of the switch')).toBeTruthy();
        expect(container.querySelector('#switchId')).toBeTruthy();
        expect(container.querySelector('.switchClass')).toBeTruthy();
        expect(
            (container.querySelector('#switchId') as HTMLInputElement).checked
        ).toBeTruthy();
        expect(
            (container.querySelector('#switchId') as HTMLInputElement).value
        ).toEqual('1');
    });

    test('should use name instead of id when exists', () => {
        const { getByText, container } = render(
            <Switch
                id="switchId"
                name="switchName"
                className="switchClass"
                label="Label of the switch"
                defaultChecked={true}
            />
        );

        expect(getByText('Label of the switch')).toBeTruthy();
        expect(container.querySelector('#switchId')).toBeTruthy();
        expect(container.querySelector('.switchClass')).toBeTruthy();
        expect(container.querySelector("[name='switchId'")).toBeFalsy();
        expect(container.querySelector("[name='switchName'")).toBeTruthy();
        expect(
            (container.querySelector('#switchId') as HTMLInputElement).checked
        ).toBeTruthy();
        expect(
            (container.querySelector('#switchId') as HTMLInputElement).value
        ).toEqual('1');
    });

    test('should use given value', () => {
        const { getByText, container } = render(
            <Switch
                id="switchId"
                name="switchName"
                className="switchClass"
                label="Label of the switch"
                value="switchValue"
                defaultChecked={true}
            />
        );

        expect(getByText('Label of the switch')).toBeTruthy();
        expect(container.querySelector('#switchId')).toBeTruthy();
        expect(container.querySelector('.switchClass')).toBeTruthy();
        expect(container.querySelector("[name='switchId'")).toBeFalsy();
        expect(container.querySelector("[name='switchName'")).toBeTruthy();
        expect(
            (container.querySelector('#switchId') as HTMLInputElement).checked
        ).toBeTruthy();
        expect(
            (container.querySelector('#switchId') as HTMLInputElement).value
        ).toEqual('switchValue');
    });

    test('should have correct class name', () => {
        const { container } = render(
            <Switch
                id="switchId"
                label="Label of the switch"
                defaultChecked={true}
            />
        );

        expect(
            container.firstElementChild.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
