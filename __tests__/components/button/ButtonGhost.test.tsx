import React from 'react';
import {
    ButtonGhost,
    getCssClassNames,
} from '../../../src/components/button/ButtonGhost';
import { render, fireEvent } from '@testing-library/react';

describe('ButtonGhost', () => {
    test('should render correctly', () => {
        const { getByText } = render(<ButtonGhost>Knopje</ButtonGhost>);

        expect(getByText('Knopje')).toBeTruthy();
    });

    test('should handle clicks correctly', () => {
        const spy = jest.fn();
        const { getByText, container } = render(
            <ButtonGhost onClick={spy}>Knopje</ButtonGhost>
        );

        expect(getByText('Knopje')).toBeTruthy();
        expect(spy).toHaveBeenCalledTimes(0);
        fireEvent.click(container.querySelector('button')!);
        expect(spy).toHaveBeenCalledTimes(1);
        fireEvent.click(container.querySelector('button')!);
        expect(spy).toHaveBeenCalledTimes(2);
    });

    test('should handle sizes correctly', () => {
        const { container } = render(
            <ButtonGhost size="s">Knopje</ButtonGhost>
        );
        const { container: container2 } = render(
            <ButtonGhost size="m">Knopje</ButtonGhost>
        );

        expect(container).toMatchSnapshot();
        expect(container2).toMatchSnapshot();
    });

    test('should have correct class name', () => {
        const { container } = render(<ButtonGhost>Knopje</ButtonGhost>);

        expect(
            container.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
