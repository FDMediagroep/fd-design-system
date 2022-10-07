import React from 'react';
import { render } from '@testing-library/react';
import {
    HorizontalCard3,
    getCssClassNames,
} from '../../../src/components/card/HorizontalCard3';

describe('HorizontalCard3', () => {
    test('should render correctly', () => {
        const { container, getByText } = render(
            <HorizontalCard3
                id="1"
                intro="This is the intro of the card"
                label="Ondernemen"
                title="This is the title"
                time="11:50"
                url="https://example.com/1/This is the title"
            />
        );

        expect(getByText('This is the title')).toBeTruthy();
        expect(getByText('This is the intro of the card')).toBeTruthy();
        expect(getByText('Ondernemen')).toBeTruthy();
        expect(getByText('11:50')).toBeTruthy();
        expect(container.querySelector('[href]')?.getAttribute('href')).toBe(
            'https://example.com/1/This is the title'
        );
    });

    test('should render is-read correctly', () => {
        const { container } = render(
            <HorizontalCard3
                id="1"
                intro="This is the intro of the card"
                label="Ondernemen"
                title="This is the title"
                time="11:50"
                url="https://example.com/1/This is the title"
                isRead={true}
            />
        );
        expect(container).toMatchSnapshot();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <HorizontalCard3
                id="1"
                intro="This is the intro of the card"
                label="Ondernemen"
                title="This is the title"
                time="11:50"
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
