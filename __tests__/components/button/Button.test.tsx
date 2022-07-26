import React from 'react';
import {
    Button,
    getCssClassNames,
} from '../../../src/components/button/Button';
import { render, fireEvent } from '@testing-library/react';

describe('Button', () => {
    test('should render correctly', () => {
        const { getByText } = render(<Button>Knopje</Button>);

        expect(getByText('Knopje')).toBeTruthy();
    });

    test('should handle clicks correctly', () => {
        const spy = jest.fn();
        const { getByText, container } = render(
            <Button onClick={spy}>Knopje</Button>
        );

        expect(getByText('Knopje')).toBeTruthy();
        expect(spy).toBeCalledTimes(0);
        fireEvent.click(container.querySelector('button'));
        expect(spy).toBeCalledTimes(1);
        fireEvent.click(container.querySelector('button'));
        expect(spy).toBeCalledTimes(2);
    });

    test('should handle sizes correctly', () => {
        const { container } = render(<Button size="s">Knopje</Button>);
        const { container: container2 } = render(
            <Button size="m">Knopje</Button>
        );

        expect(container).toMatchSnapshot();
        expect(container2).toMatchSnapshot();
    });

    test('should have correct class name', () => {
        const { container } = render(<Button>Knopje</Button>);

        expect(
            container.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
