import React from 'react';
import {
    VerticalCard3,
    getCssClassNames,
} from '../../../src/components/card/VerticalCard3';
import { render } from '@testing-library/react';

describe('VerticalCard3', () => {
    test('should render correctly', () => {
        const { container, getByText } = render(
            <VerticalCard3
                id="1"
                imageUrl="https://images.example.com/image.png"
                imageUrlS="https://images.example.com/imageS.png"
                imageUrlM="https://images.example.com/imageM.png"
                imageUrlL="https://images.example.com/imageL.png"
                caption="This is the caption"
                label="Arbeidsmarkt"
                intro="This is the intro"
                title="This is the title"
                url="https://example.com/1/This is the title"
            />
        );

        expect(getByText('Arbeidsmarkt')).toBeTruthy();
        expect(getByText('This is the title')).toBeTruthy();
        expect(getByText('This is the intro')).toBeTruthy();
        expect(getByText('This is the caption')).toBeTruthy();
        expect(container.querySelector('[href]')?.getAttribute('href')).toBe(
            'https://example.com/1/This is the title'
        );
    });

    test('should have correct class name', () => {
        const { container } = render(
            <VerticalCard3
                id="1"
                imageUrl="https://images.example.com/image.png"
                caption="This is the caption"
                label="Arbeidsmarkt"
                intro="This is the intro"
                title="This is the title"
                url="https://example.com/1/This is the title"
            />
        );

        expect(
            container?.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
