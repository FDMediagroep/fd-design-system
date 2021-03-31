import React from 'react';
import {
    StockTicker,
    getCssClassNames,
} from '../../src/components/stockticker/StockTicker';
import { render } from '@testing-library/react';

jest.useFakeTimers();

describe('StockTicker', () => {
    test('should render correctly', () => {
        const { getAllByText, getByText } = render(
            <StockTicker
                stocks={[
                    {
                        name: 'stock1',
                        href: '/stock1',
                        open: true,
                        percentage: 1.1,
                        price: 2.3,
                    },
                    {
                        name: 'stock2',
                        href: '/stock2',
                        open: false,
                        percentage: -1.1,
                        price: -2.3,
                    },
                ]}
            />
        );

        expect(getByText('stock1')).toBeTruthy();
        expect(getAllByText('+1.1%').length).toEqual(3);
        expect(getAllByText('+1.1%')).toBeTruthy();
        expect(getAllByText('2.3').length).toEqual(3);
        expect(getAllByText('2.3')).toBeTruthy();

        expect(getByText('stock2')).toBeTruthy();
        expect(getAllByText('-1.1%').length).toEqual(3);
        expect(getAllByText('-1.1%')).toBeTruthy();
        expect(getAllByText('-2.3')).toBeTruthy();
        expect(getAllByText('-2.3')).toBeTruthy();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <StockTicker
                className="test-class"
                stocks={[
                    {
                        name: 'stock1',
                        href: '/stock1',
                        open: true,
                        percentage: 1.1,
                        price: 2.3,
                    },
                    {
                        name: 'stock2',
                        href: '/stock2',
                        open: false,
                        percentage: -1.1,
                        price: -2.3,
                    },
                ]}
            />
        );

        expect(
            container.firstElementChild.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
        expect(
            container.firstElementChild.classList.contains('test-class')
        ).toBeTruthy();
    });
});
