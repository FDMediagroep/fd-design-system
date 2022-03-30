import React from 'react';
import {
    HybridCard2,
    getCssClassNames,
} from '../../../src/components/card/HybridCard2';
import { render } from '@testing-library/react';

describe('HybridCard2', () => {
    test('should render correctly', () => {
        const { container, getByText } = render(
            <HybridCard2
                id="1"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
            />
        );

        expect(getByText('This is the title')).toBeTruthy();
        expect(getByText('Ondernemen')).toBeTruthy();
        expect(container.querySelector('[href]').getAttribute('href')).toBe(
            'https://example.com/1/This is the title'
        );
    });

    test('should render is-read correctly', () => {
        const { container } = render(
            <HybridCard2
                id="1"
                label="Ondernemen"
                title="This is the title"
                imageUrl="https://images.example.com/image.png"
                imageUrlS="https://images.example.com/imageS.png"
                imageUrlM="https://images.example.com/imageM.png"
                imageUrlL="https://images.example.com/imageL.png"
                url="https://example.com/1/This is the title"
                isRead={true}
            />
        );
        expect(container).toMatchSnapshot();
    });

    test('should render variant-1 correctly', () => {
        const { container } = render(
            <HybridCard2
                id="1"
                label="Ondernemen"
                title="This is the title"
                imageUrl="https://images.example.com/image.png"
                imageUrlS="https://images.example.com/imageS.png"
                imageUrlM="https://images.example.com/imageM.png"
                imageUrlL="https://images.example.com/imageL.png"
                url="https://example.com/1/This is the title"
                variant="variant-1"
            />
        );
        expect(container).toMatchSnapshot();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <HybridCard2
                id="1"
                label="Ondernemen"
                title="This is the title"
                imageUrl="https://images.example.com/image.png"
                imageUrlS="https://images.example.com/imageS.png"
                imageUrlM="https://images.example.com/imageM.png"
                imageUrlL="https://images.example.com/imageL.png"
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
