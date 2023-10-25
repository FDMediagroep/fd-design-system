import React from 'react';
import {
    VerticalCard2,
    getCssClassNames,
} from '../../../src/components/card/VerticalCard2';
import { render } from '@testing-library/react';

describe('VerticalCard2', () => {
    test('should render correctly', () => {
        const { container, getByText, getByAltText } = render(
            <VerticalCard2
                id="1"
                imageUrl="https://images.example.com/image.png"
                imageUrlS="https://images.example.com/imageS.png"
                imageUrlM="https://images.example.com/imageM.png"
                imageUrlL="https://images.example.com/imageL.png"
                caption="This is the caption"
                label="30 nieuw"
                title="This is the title"
                url="https://example.com/1/This is the title"
            />
        );

        expect(getByText('This is the title')).toBeTruthy();
        expect(getByText('30 nieuw')).toBeTruthy();
        expect(getByAltText('This is the caption')).toBeTruthy();
        expect(container.querySelector('[href]')?.getAttribute('href')).toBe(
            'https://example.com/1/This is the title'
        );
    });

    test('should have correct class name', () => {
        const { container } = render(
            <VerticalCard2
                id="1"
                imageUrl="https://images.example.com/image.png"
                caption="This is the caption"
                label="2 nieuw"
                title="This is the title"
                url="https://example.com/1/This is the title"
            />
        );

        expect(
            container.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
