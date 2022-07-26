import React from 'react';
import {
    Dropdown,
    getCssClassNames,
} from '../../../src/components/button/Dropdown';
import { render, fireEvent } from '@testing-library/react';

describe('Dropdown', () => {
    test('should render correctly', () => {
        const { getByText } = render(<Dropdown>Knopje</Dropdown>);

        expect(getByText('Knopje')).toBeTruthy();
    });

    test('should handle clicks correctly', () => {
        const spy = jest.fn();
        const { getByText, container } = render(
            <Dropdown onClick={spy}>Knopje</Dropdown>
        );

        expect(getByText('Knopje')).toBeTruthy();
        expect(spy).toBeCalledTimes(0);
        fireEvent.click(container.querySelector('button'));
        expect(spy).toBeCalledTimes(1);
        fireEvent.click(container.querySelector('button'));
        expect(spy).toBeCalledTimes(2);
    });

    test('should show dropdown correctly', () => {
        const { container, rerender, getByText } = render(
            <Dropdown>Knopje</Dropdown>
        );

        expect(
            container
                .querySelector('[aria-expanded]')
                .getAttribute('aria-expanded')
        ).toBe('false');

        fireEvent.click(container.querySelector('button'));

        expect(
            container
                .querySelector('[aria-expanded]')
                .getAttribute('aria-expanded')
        ).toBe('true');
    });

    test('should handle sizes correctly', () => {
        const { container } = render(<Dropdown size="s">Knopje</Dropdown>);
        const { container: container2 } = render(
            <Dropdown size="m">Knopje</Dropdown>
        );

        expect(container).toMatchSnapshot();
        expect(container2).toMatchSnapshot();
    });

    test('should have correct class name', () => {
        const { container } = render(<Dropdown>Knopje</Dropdown>);
        console.log(container.firstElementChild.classList);
        // expect(
        //     container?.firstElementChild?.classList.contains(
        //         getCssClassNames()[0]
        //     )
        // ).toBeTruthy();
    });
});
