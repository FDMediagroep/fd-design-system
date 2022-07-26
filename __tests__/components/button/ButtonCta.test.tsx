import React from 'react';
import {
    ButtonCta,
    getCssClassNames,
} from '../../../src/components/button/ButtonCta';
import { render, fireEvent } from '@testing-library/react';

describe('ButtonCta', () => {
    test('should render correctly', () => {
        const { getByText } = render(<ButtonCta>Knopje</ButtonCta>);

        expect(getByText('Knopje')).toBeTruthy();
    });

    test('should handle clicks correctly', () => {
        const spy = jest.fn();
        const { getByText, container } = render(
            <ButtonCta onClick={spy}>Knopje</ButtonCta>
        );

        expect(getByText('Knopje')).toBeTruthy();
        expect(spy).toBeCalledTimes(0);
        fireEvent.click(container.querySelector('button'));
        expect(spy).toBeCalledTimes(1);
        fireEvent.click(container.querySelector('button'));
        expect(spy).toBeCalledTimes(2);
    });

    test('should handle sizes correctly', () => {
        const { container } = render(<ButtonCta size="s">Knopje</ButtonCta>);
        const { container: container2 } = render(
            <ButtonCta size="m">Knopje</ButtonCta>
        );

        expect(container).toMatchSnapshot();
        expect(container2).toMatchSnapshot();
    });

    test('should have correct class name', () => {
        const { container } = render(<ButtonCta>Knopje</ButtonCta>);

        expect(
            container?.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
