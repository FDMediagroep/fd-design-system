import React from 'react';
import {
    BreakingSwitch,
    getCssClassNames,
} from '../../../src/components/input/BreakingSwitch';
import { render } from '@testing-library/react';

describe('BreakingSwitch', () => {
    test('should render correctly', () => {
        const { getByText, container } = render(
            <BreakingSwitch className="switchClass" onChange={() => {}} />
        );

        expect(getByText('Breaking nieuws alert')).toBeTruthy();
        expect(container.querySelector('.switchClass')).toBeTruthy();
        expect(
            (container.querySelector('input') as HTMLInputElement).checked
        ).toBeFalsy();
    });

    test('should render checked correctly', () => {
        const { getByText, container } = render(
            <BreakingSwitch
                label={'Another title'}
                className="switchClass"
                checked={true}
                onChange={() => {}}
            />
        );

        expect(getByText('Another title')).toBeTruthy();
        expect(container.querySelector('.switchClass')).toBeTruthy();
        expect(
            (container.querySelector('input') as HTMLInputElement).checked
        ).toBeTruthy();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <BreakingSwitch
                label="Label of the switch"
                checked={true}
                onChange={() => {}}
            />
        );

        expect(
            container?.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
