import React from 'react';
import { render } from '@testing-library/react';
import {
    FdImgix,
    noImagePlaceholder,
} from '../../../src/components/utils/image/FdImgix';

describe('FdImgix', () => {
    it('should render with imgixprops', () => {
        const renderResult = render(
            <FdImgix
                src="https://bnr-external-prod.imgix.net/HW2lBgcbA60JBTM-Eqd3FV0awR0.jpg"
                className="testClassName"
                imageSizes={{ widthS: 2 }}
                crop={{ ratio: 'test', x: 0, y: 0.1, width: 0.2, height: 0.3 }}
                imgixParams={{ fit: 'crop' }}
            />
        );
        const image = renderResult.getByRole('img');
        expect(image).toHaveClass('testClassName');
        expect(image).toHaveProperty(
            'src',
            expect.stringContaining('fit=crop')
        );
        expect(image).toHaveProperty(
            'src',
            expect.stringContaining('rect=0%2C.1%2C.2%2C.3')
        );
    });

    it('should render a backup image without a image source', () => {
        const renderResult = render(
            <FdImgix
                className="testClassName"
                imageSizes={{ widthS: 2 }}
                imgixParams={{ fit: 'crop' }}
                crop={{ ratio: 'test', x: 0, y: 0.1, width: 0.2, height: 0.3 }}
            />
        );

        const image = renderResult.getByRole('img');
        expect(image).toHaveClass('testClassName');
        expect(image).toHaveProperty(
            'src',
            expect.stringContaining('fit=crop')
        );
        expect(image).toHaveProperty(
            'src',
            expect.not.stringContaining('rect=')
        );
        expect(image).toHaveProperty(
            'src',
            expect.stringContaining(noImagePlaceholder)
        );
    });

    describe('sizes', () => {
        type imageSizeWidthS = [
            Parameters<typeof FdImgix>[0]['imageSizes']['widthS'],
            string,
        ];

        it('should render crops if given to the component', () => {
            const renderResult = render(
                <FdImgix
                    className="testClassName"
                    imageSizes={{ widthS: 2 }}
                    src="https://bnr-external-prod.imgix.net/HW2lBgcbA60JBTM-Eqd3FV0awR0.jpg"
                    crop={{
                        ratio: 'test',
                        x: 0,
                        y: 1,
                        width: 0.2,
                        height: 0.3,
                    }}
                />
            );
            expect(renderResult.getByRole('img')).toHaveProperty(
                'src',
                expect.stringContaining('rect=0%2C1.0%2C.2%2C.3')
            );
        });

        test.each<imageSizeWidthS>([
            [3, expect.stringContaining('/ 12 * 3')],
            ['100px', '100px'],
        ])('should render with widthS size %i', (widthS, expected) => {
            const parameters: Parameters<typeof FdImgix>[0] = {
                src: 'https://bnr-external-prod.imgix.net/HW2lBgcbA60JBTM-Eqd3FV0awR0.jpg',
                imageSizes: {
                    widthS,
                },
            };
            const renderResult = render(<FdImgix {...parameters} />);

            expect(renderResult.getByRole('img')).toHaveAttribute(
                'sizes',
                expected
            );
        });

        type imageSizeWidthM = [
            Parameters<typeof FdImgix>[0]['imageSizes']['widthM'],
            string,
        ];

        test.each<imageSizeWidthM>([
            [4, expect.stringContaining('/ 12 * 4), calc')],
            ['200px', expect.stringContaining('200px, calc')],
        ])('should render with widthM size %i', (widthM, expected) => {
            const parameters: Parameters<typeof FdImgix>[0] = {
                src: 'https://bnr-external-prod.imgix.net/HW2lBgcbA60JBTM-Eqd3FV0awR0.jpg',
                imageSizes: {
                    widthS: 3,
                    widthM,
                },
            };
            const renderResult = render(<FdImgix {...parameters} />);

            expect(renderResult.getByRole('img')).toHaveAttribute(
                'sizes',
                expected
            );
        });

        type imageSizeWidthL = [
            Parameters<typeof FdImgix>[0]['imageSizes']['widthL'],
            string,
        ];

        test.each<imageSizeWidthL>([
            [5, expect.stringContaining('/ 12 * 5), calc')],
            ['400px', expect.stringContaining('400px, calc')],
        ])('should render with widthL size %i', (widthL, expected) => {
            const parameters: Parameters<typeof FdImgix>[0] = {
                src: 'https://bnr-external-prod.imgix.net/HW2lBgcbA60JBTM-Eqd3FV0awR0.jpg',
                imageSizes: {
                    widthS: 3,
                    widthL,
                },
            };
            const renderResult = render(<FdImgix {...parameters} />);

            expect(renderResult.getByRole('img')).toHaveAttribute(
                'sizes',
                expected
            );
        });
    });
});
