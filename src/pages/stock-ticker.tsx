import React, { useState, useEffect, useCallback } from 'react';
import { Explain } from '../components/Explain';
import {
    StockTicker,
    getCssClassNames,
    Props,
} from '../components/stockticker/StockTicker';

const initialProps: Props = {
    stocks: [
        {
            name: 'AEX',
            price: 465.59,
            percentage: 0.14,
            href: '/',
            open: true,
        },
        {
            name: 'AMX',
            price: 633.17,
            percentage: -1.67,
            href: '/',
            open: true,
        },
        {
            name: 'AScX',
            price: 652.76,
            percentage: -0.88,
            href: '/',
            open: true,
        },
        {
            name: 'S&P Fut',
            price: 2536.5,
            percentage: 0.46,
            href: '/',
            open: false,
        },
        {
            name: '€/$',
            price: 1.1037,
            percentage: -0.77,
            href: '/',
            open: true,
        },
        {
            name: 'Olie',
            price: 20.47,
            percentage: -9.42,
            href: '/',
            open: true,
        },
    ],
};

const props2: Props = {
    stocks: [
        {
            name: 'AEX',
            price: 465.59,
            percentage: -0.14,
            href: '/',
            open: true,
        },
        {
            name: 'AMX',
            price: 633.16,
            percentage: -1.67,
            href: '/',
            open: true,
        },
        {
            name: 'AScX',
            price: 652.66,
            percentage: 0.88,
            href: '/',
            open: true,
        },
        {
            name: 'S&P Fut',
            price: 2536.5,
            percentage: 0.46,
            href: '/',
            open: false,
        },
        {
            name: '€/$',
            price: 1.1038,
            percentage: 0.77,
            href: '/',
            open: true,
        },
        {
            name: 'Olie',
            price: 20.48,
            percentage: 9.42,
            href: '/',
            open: true,
        },
    ],
};

function Page() {
    const [stockState, setStockState] = useState(initialProps);

    const cb = useCallback(() => {
        setStockState(
            stockState.stocks[0].price === props2.stocks[0].price &&
                stockState.stocks[0].percentage === props2.stocks[0].percentage
                ? initialProps
                : props2
        );
    }, [stockState]);

    /**
     * Change stock prices every 3 seconds.
     */
    useEffect(() => {
        setTimeout(cb, 2500);
    }, [cb]);

    return (
        <>
            <Explain
                cssClassNames={getCssClassNames()}
                legend="Stock Ticker"
                description={
                    <>
                        <p>This is the reference stock ticker.</p>
                        <p>
                            Main purpose of this component is to show the
                            reference styling.
                        </p>
                        <p>
                            In production, this code is injected by a third
                            party script so the HTML is not the same as depicted
                            here.
                        </p>
                        <p>
                            Therefore the styling generated here can't be used.
                        </p>
                    </>
                }
            >
                <StockTicker {...stockState} />
            </Explain>
        </>
    );
}

export default Page;
