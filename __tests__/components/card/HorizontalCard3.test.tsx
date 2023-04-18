import React from 'react';
import {
    HorizontalCard3,
    getCssClassNames,
} from '../../../src/components/card/HorizontalCard3';
import { render } from '@testing-library/react';
import { FdImgix } from '../../../src/components/utils/image/FdImgix';

describe('HorizontalCard3', () => {
    test('should render correctly', () => {
        const { container, getByText } = render(
            <HorizontalCard3
                id="1"
                url="https://example.com/1/This is the title"
                title="This is the title"
                isRead={false}
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
        expect(container?.querySelector('[href]')?.getAttribute('href')).toBe(
            'https://example.com/1/This is the title'
        );
    });

    test('should render image correctly', () => {
        const { container } = render(
            <HorizontalCard3
                id="1"
                url="https://example.com/1/This is the title"
                title="This is the title"
                isRead={false}
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
        expect(container?.querySelector('img')?.getAttribute('src')).toContain(
            'https://images.example.com/image.png?auto=format'
        );
    });

    test('should render is-read correctly', () => {
        const { container } = render(
            <HorizontalCard3
                id="1"
                url="https://example.com/1/This is the title"
                title="This is the title"
                isRead={true}
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
        expect(container).toMatchSnapshot();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <HorizontalCard3
                id="1"
                url="https://example.com/1/This is the title"
                title="This is the title"
                isRead={false}
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

    test('should render without image component', () => {
        const { getByRole } = render(
            <HorizontalCard3
                id="1"
                url="https://example.com/1/This is the title"
                title="This is the title"
                isRead={false}
            />
        );
        const image = getByRole('img');
        expect(image).toHaveProperty(
            'src',
            expect.stringContaining('/assets/images/fd-logo.svg')
        );
    });
});
