import React from 'react';
import {
    Summary,
    getCssClassNames,
} from '../../src/components/article-summary/Summary';
import { render } from '@testing-library/react';

describe('Summary', () => {
    test('should render correctly', () => {
        const { getByText } = render(
            <Summary summaries={['one', 'two', 'three']} />
        );

        expect(getByText('In het kort')).toBeTruthy();
        expect(getByText('one')).toBeTruthy();
        expect(getByText('two')).toBeTruthy();
        expect(getByText('three')).toBeTruthy();
    });

    test('should render title correctly', () => {
        const { getByText } = render(
            <Summary title="Samenvatting" summaries={['one', 'two', 'three']} />
        );

        expect(getByText('Samenvatting')).toBeTruthy();
        expect(getByText('one')).toBeTruthy();
        expect(getByText('two')).toBeTruthy();
        expect(getByText('three')).toBeTruthy();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <Summary summaries={['one', 'two', 'three']} />
        );

        expect(
            container.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
