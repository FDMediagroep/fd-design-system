import React from 'react';
import {
    TextFrame,
    getCssClassNames,
} from '../../src/components/textframe/TextFrame';
import { render } from '@testing-library/react';

describe('TextFrame', () => {
    test('should render correctly', () => {
        const { getByText } = render(
            <TextFrame
                title="this is the title"
                descriptions={['this is the description']}
            />
        );

        expect(getByText('this is the title')).toBeTruthy();
        expect(getByText('this is the description')).toBeTruthy();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <TextFrame
                title="this is the title"
                descriptions={['this is the description']}
            />
        );

        expect(
            container.firstElementChild.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
