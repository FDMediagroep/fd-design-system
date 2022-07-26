import React from 'react';
import {
    HorizontalCard4,
    getCssClassNames,
} from '../../../src/components/card/HorizontalCard4';
import { render } from '@testing-library/react';
import { FdImgix } from '../../../src/components/utils/image/FdImgix';

describe('HorizontalCard4', () => {
    test('should render correctly', () => {
        const { container, getByText } = render(
            <HorizontalCard4
                id="1"
                url="https://example.com/1/This is the title"
                label="Ondernemen"
                time="11:40"
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
        expect(getByText('Ondernemen')).toBeTruthy();
        expect(getByText('11:40')).toBeTruthy();
        expect(container?.querySelector('[href]')?.getAttribute('href')).toBe(
            'https://example.com/1/This is the title'
        );
    });

    test('should render image correctly', () => {
        const { container } = render(
            <HorizontalCard4
                id="1"
                url="https://example.com/1/This is the title"
                label="Ondernemen"
                time="11:40"
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
        expect(container?.querySelector('img')?.getAttribute('src')).toBe(
            'https://images.example.com/image.png?auto=format&ixlib=react-9.5.1-beta.1'
        );
    });

    test('should render is-read correctly', () => {
        const { container } = render(
            <HorizontalCard4
                id="1"
                url="https://example.com/1/This is the title"
                label="Ondernemen"
                time="11:40"
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
            <HorizontalCard4
                id="1"
                url="https://example.com/1/This is the title"
                label="Ondernemen"
                time="11:40"
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
            container?.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });

    test('should render without image component', () => {
        const { getByRole } = render(
            <HorizontalCard4
                id="1"
                url="https://example.com/1/This is the title"
                label="Ondernemen"
                time="11:40"
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
