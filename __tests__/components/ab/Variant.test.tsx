import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Variant } from '../../../src/components/ab/ab';

describe('AB Variant', () => {
    test('should render correctly', async () => {
        const spy = jest.fn();
        const { getByText, container } = render(
            <Variant name="1" onClick={spy}>
                <h1>Headline 1</h1>
            </Variant>
        );

        expect(getByText('Headline 1', { exact: false })).toBeTruthy();
    });

    test('should handle variant click correctly', async () => {
        const spy = jest.fn();
        const { getByText, container } = render(
            <Variant name="1" onClick={spy}>
                <h1>Headline 1</h1>
            </Variant>
        );

        expect(getByText('Headline 1', { exact: false })).toBeTruthy();

        expect(spy).toBeCalledTimes(0);
        fireEvent.click(container.querySelector('h1')!);
        expect(spy).toBeCalledTimes(1);
    });
});
