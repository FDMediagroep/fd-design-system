import React from 'react';
import {
    LinkCard as ArticleLinkCard,
    getCssClassNames,
} from '../../src/components/article-link-card/LinkCard';
import { render } from '@testing-library/react';

describe('ArticleLinkCard', () => {
    test('should render correctly', () => {
        const { getByText, container } = render(
            <ArticleLinkCard
                className="test-link-card"
                link="/mijn-nieuws"
                title="Beheer"
                linkText="Ga naar laatste nieuws"
            />
        );

        expect(getByText('Beheer')).toBeTruthy();
        expect(getByText('Ga naar laatste nieuws')).toBeTruthy();
        expect(container.querySelector('[href="/mijn-nieuws"]')).toBeTruthy();
        expect(container.querySelector('.test-link-card')).toBeTruthy();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <ArticleLinkCard
                className="test-link-card"
                link="/mijn-nieuws"
                title="Beheer"
                linkText="Ga naar laatste nieuws"
            />
        );

        expect(
            container?.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
