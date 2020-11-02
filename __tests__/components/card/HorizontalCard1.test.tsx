import React from 'react';
import {
    HorizontalCard1,
    getCssClassNames,
} from '../../../src/components/card/HorizontalCard1';
import { render } from '@testing-library/react';
describe('HorizontalCard1', () => {
    test('should render correctly', () => {
        const { container, getByText } = render(
            <HorizontalCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                label="Ondernemen"
                title="This is the title"
                time="11:40"
                url="https://example.com/1/This is the title"
            />
        );

        expect(getByText('This is the title')).toBeTruthy();
        expect(getByText('Ondernemen')).toBeTruthy();
        expect(getByText('11:40')).toBeTruthy();
        expect(container.querySelector('[href]').getAttribute('href')).toBe(
            'https://example.com/1/This is the title'
        );
    });

    test('should render is-read correctly', () => {
        const { container } = render(
            <HorizontalCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                label="Ondernemen"
                title="This is the title"
                time="11:40"
                url="https://example.com/1/This is the title"
                isRead={true}
            />
        );
        expect(container).toMatchSnapshot();
    });

    test('should render variant-1 correctly', () => {
        const { container } = render(
            <HorizontalCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                label="Ondernemen"
                title="This is the title"
                time="11:40"
                url="https://example.com/1/This is the title"
                variant="variant-1"
            />
        );
        expect(container).toMatchSnapshot();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <HorizontalCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                label="Ondernemen"
                title="This is the title"
                time="11:40"
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
