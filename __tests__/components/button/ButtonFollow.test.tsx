import React from 'react';
import {
    ButtonFollow,
    getCssClassNames,
} from '../../../src/components/button/ButtonFollow';
import { render, fireEvent } from '@testing-library/react';

describe('ButtonFollow', () => {
    test('should render correctly', () => {
        const { getByText } = render(<ButtonFollow tag="test-tag" />);

        expect(getByText('Volg')).toBeTruthy();
    });

    test('should handle clicks correctly', () => {
        const spy = jest.fn();
        const { container } = render(
            <ButtonFollow tag="test-tag" onClick={spy} />
        );

        expect(spy).toBeCalledTimes(0);
        fireEvent.click(container.querySelector('button'));
        expect(spy).toBeCalledTimes(1);
        fireEvent.click(container.querySelector('button'));
        expect(spy).toBeCalledTimes(2);
    });

    test('should handle select correctly', () => {
        const { container } = render(
            <ButtonFollow tag="test-tag" selected={true} />
        );

        expect(container.querySelector('[data-selected=true]')).toBeTruthy();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <ButtonFollow tag="test-tag" selected={true} />
        );

        expect(
            container.firstElementChild.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
