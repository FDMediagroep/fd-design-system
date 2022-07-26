import React from 'react';
import {
    InfographicExtended,
    getCssClassNames,
} from '../../../src/components/article-image/InfographicExtended';
import { render } from '@testing-library/react';

describe('Infographic', () => {
    test('should render correctly', () => {
        const { container } = render(
            <InfographicExtended
                largeImageUrl="https://images.example.com/largeImage.jpg"
                smallImageUrl="https://images.example.com/smallImage.jpg"
            />
        );
        expect(
            container.querySelector(
                '[srcset="https://images.example.com/smallImage.jpg?cs=tinysrgb&w=360, https://images.example.com/smallImage.jpg?cs=tinysrgb&w=360&dpr=2 2x"]'
            )
        ).toBeTruthy();
        expect(
            container.querySelector(
                '[srcset*="https://images.example.com/largeImage.jpg?cs=tinysrgb&w=720, https://images.example.com/largeImage.jpg?cs=tinysrgb&w=720&dpr=2 2x"]'
            )
        ).toBeTruthy();
    });

    test('should render correctly with only small image', () => {
        const { container } = render(
            <InfographicExtended smallImageUrl="https://images.example.com/smallImage.jpg" />
        );
        expect(
            container.querySelector(
                '[srcset="https://images.example.com/smallImage.jpg?cs=tinysrgb&w=360, https://images.example.com/smallImage.jpg?cs=tinysrgb&w=360&dpr=2 2x"]'
            )
        ).toBeTruthy();
        expect(
            container.querySelector(
                '[srcset*="https://images.example.com/smallImage.jpg?cs=tinysrgb&w=720, https://images.example.com/smallImage.jpg?cs=tinysrgb&w=720&dpr=2 2x"]'
            )
        ).toBeTruthy();
    });

    test('should render variant-1 correctly', () => {
        const { container } = render(
            <InfographicExtended
                variant="variant-1"
                extraLargeImageUrl="https://images.example.com/extraLargeImage.jpg"
                largeImageUrl="https://images.example.com/largeImage.jpg"
                smallImageUrl="https://images.example.com/smallImage.jpg"
            />
        );
        expect(
            container.querySelector(
                '[srcset="https://images.example.com/smallImage.jpg?cs=tinysrgb&w=360, https://images.example.com/smallImage.jpg?cs=tinysrgb&w=360&dpr=2 2x"]'
            )
        ).toBeTruthy();
        expect(
            container.querySelector(
                '[srcset*="https://images.example.com/largeImage.jpg?cs=tinysrgb&w=720, https://images.example.com/largeImage.jpg?cs=tinysrgb&w=720&dpr=2 2x"]'
            )
        ).toBeFalsy();
        expect(
            container.querySelector(
                '[srcset*="https://images.example.com/extraLargeImage.jpg?cs=tinysrgb&w=900, https://images.example.com/extraLargeImage.jpg?cs=tinysrgb&w=900&dpr=2 2x"]'
            )
        ).toBeTruthy();
    });

    test('should render variant-1 correctly with only small image', () => {
        const { container } = render(
            <InfographicExtended
                variant="variant-1"
                smallImageUrl="https://images.example.com/smallImage.jpg"
            />
        );
        expect(
            container.querySelector(
                '[srcset="https://images.example.com/smallImage.jpg?cs=tinysrgb&w=360, https://images.example.com/smallImage.jpg?cs=tinysrgb&w=360&dpr=2 2x"]'
            )
        ).toBeTruthy();
        expect(
            container.querySelector(
                '[srcset*="https://images.example.com/smallImage.jpg?cs=tinysrgb&w=900, https://images.example.com/smallImage.jpg?cs=tinysrgb&w=900&dpr=2 2x"]'
            )
        ).toBeTruthy();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <InfographicExtended
                largeImageUrl="https://images.example.com/largeImage.jpg"
                smallImageUrl="https://images.example.com/smallImage.jpg"
            />
        );

        expect(
            container?.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
