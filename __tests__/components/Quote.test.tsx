import React from 'react';
import { Quote, getCssClassNames } from '../../src/components/quote/Quote';
import { render } from '@testing-library/react';

describe('Quote', () => {
    test('should render correctly', () => {
        const { getByText } = render(
            <Quote blockquote="I said this" figcaption="Willem L." />
        );

        expect(getByText('‘I said this’')).toBeTruthy();
        expect(getByText('• Willem L.')).toBeTruthy();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <Quote blockquote="I said this" figcaption="Willem L." />
        );

        expect(
            container.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
