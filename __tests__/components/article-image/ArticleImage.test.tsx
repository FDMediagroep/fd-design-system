import React from 'react';
import {
    ArticleImage,
    getCssClassNames,
} from '../../../src/components/article-image/ArticleImage';
import { render } from '@testing-library/react';

describe('ArticleImage', () => {
    test('should render correctly', () => {
        const { getByText, container } = render(
            <ArticleImage
                fileName="image.jpg"
                caption="test image"
                credit="Willem L."
            />
        );

        expect(container.querySelector('[srcset*="image.jpg"]')).toBeTruthy();
        expect(getByText('Willem L.')).toBeTruthy();
        expect(getByText('test image')).toBeTruthy();
    });

    test('should render with custom baseUrl correctly', () => {
        const { getByText, container } = render(
            <ArticleImage
                fileName="image.jpg"
                caption="test image"
                credit="Willem L."
                baseUrl="https://images.example.com"
            />
        );
        expect(getByText('Willem L.')).toBeTruthy();
        expect(getByText('test image')).toBeTruthy();
        expect(
            container.querySelector(
                '[srcset^="https://images.example.com/image.jpg"]'
            )
        ).toBeTruthy();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <ArticleImage
                fileName="image.jpg"
                caption="test image"
                credit="Willem L."
            />
        );

        expect(
            container?.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
