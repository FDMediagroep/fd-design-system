import React from 'react';
import {
    VerticalCard6,
    getCssClassNames,
} from '../../../src/components/card/VerticalCard6';
import { render } from '@testing-library/react';
import { FdImgix } from '../../../src/components/utils/image/FdImgix';

describe('HybridCard4', () => {
    test('should render correctly', () => {
        const { container, getByText } = render(
            <VerticalCard6
                id="1"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
                imageComponent={
                    <FdImgix
                        src="https://images.example.com/image.png"
                        imageSizes={{
                            widthS: '160px',
                            widthM: '244px',
                            widthL: '244px',
                        }}
                    />
                }
            />
        );

        expect(getByText('This is the title')).toBeTruthy();
        expect(getByText('Ondernemen')).toBeTruthy();
        expect(container.querySelector('[href]')?.getAttribute('href')).toBe(
            'https://example.com/1/This is the title'
        );
    });

    test('should render correctly without an image', () => {
        const { container, getByText } = render(
            <VerticalCard6
                id="1"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
            />
        );
    });

    test('should have correct class name', () => {
        const { container } = render(
            <VerticalCard6
                id="1"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
                imageComponent={
                    <FdImgix
                        src="https://images.example.com/image.png"
                        imageSizes={{
                            widthS: '160px',
                            widthM: '244px',
                            widthL: '244px',
                        }}
                    />
                }
            />
        );

        expect(
            container.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
