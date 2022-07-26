import React from 'react';
import {
    VerticalCard1,
    getCssClassNames,
} from '../../../src/components/card/VerticalCard1';
import { render } from '@testing-library/react';

describe('VerticalCard1', () => {
    test('should render correctly', () => {
        const { container, getByText } = render(
            <VerticalCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                imageUrlS="https://images.example.com/imageS.png"
                imageUrlM="https://images.example.com/imageM.png"
                imageUrlL="https://images.example.com/imageL.png"
                caption="This is the caption"
                intro="This is the intro"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
            />
        );

        expect(getByText('This is the title')).toBeTruthy();
        expect(getByText('Ondernemen')).toBeTruthy();
        expect(getByText('This is the intro')).toBeTruthy();
        expect(getByText('This is the caption')).toBeTruthy();
        expect(container.querySelector('[href]')?.getAttribute('href')).toBe(
            'https://example.com/1/This is the title'
        );
    });

    test('should have correct class name', () => {
        const { container } = render(
            <VerticalCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                caption="This is the caption"
                intro="This is the intro"
                label="Ondernemen"
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
