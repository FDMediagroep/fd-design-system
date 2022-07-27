import React from 'react';
import {
    WordFrame,
    getCssClassNames,
} from '../../src/components/wordframe/WordFrame';
import { render } from '@testing-library/react';

describe('WordFrame', () => {
    test('should render correctly', () => {
        const { getByText } = render(
            <WordFrame
                title="this is the title"
                description="this is the description"
            />
        );

        expect(getByText('this is the title')).toBeTruthy();
        expect(getByText('this is the description')).toBeTruthy();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <WordFrame
                title="this is the title"
                description="this is the description"
            />
        );

        expect(
            container.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
