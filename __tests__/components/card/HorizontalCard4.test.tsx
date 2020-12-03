import React from 'react';
import {
    HorizontalCard4,
    getCssClassNames,
} from '../../../src/components/card/HorizontalCard4';
import { render } from '@testing-library/react';
describe('HorizontalCard1', () => {
    test('should render correctly', () => {
        const { container, getByText } = render(
            <HorizontalCard4
                id="1"
                imageUrl="https://images.example.com/image.png"
                title="This is the title"
                url="https://example.com/1/This is the title"
            />
        );

        expect(getByText('This is the title')).toBeTruthy();
        expect(getByText('Breaking')).toBeTruthy();
        expect(container.querySelector('[href]').getAttribute('href')).toBe(
            'https://example.com/1/This is the title'
        );
    });

    test('should have correct class name', () => {
        const { container } = render(
            <HorizontalCard4
                id="1"
                imageUrl="https://images.example.com/image.png"
                title="This is the title"
                url="https://example.com/1/This is the title"
            />
        );

        expect(
            container.firstElementChild.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
