import React from 'react';
import {
    NumberFrame,
    getCssClassNames,
} from '../../src/components/numberframe/NumberFrame';
import { render } from '@testing-library/react';

describe('NumberFrame', () => {
    test('should render correctly', () => {
        const { getByText } = render(
            <NumberFrame number="1981" description="a great year" />
        );

        expect(getByText('1981')).toBeTruthy();
        expect(getByText('a great year')).toBeTruthy();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <NumberFrame number="1981" description="a great year" />
        );

        expect(
            container.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
