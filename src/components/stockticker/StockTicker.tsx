import React, { useEffect, useState } from 'react';
import styles from './StockTicker.module.scss';
import { ValueUpIcon, ValueDownIcon } from '../../design-tokens/icons';

export type Stock = {
    // e.g. AEX
    name: string;
    // e.g. 465,59
    price: number;
    // e.g. +0,14%
    percentage: number;
    href: string;
    open: boolean;
};

export interface Props {
    stocks: Stock[];
    [x: string]: any;
}

function StockTicker(props: Props) {
    const [current, setCurrent] = useState(props.stocks);
    const [next, setNext] = useState([]);

    useEffect(() => {
        setNext(props.stocks);
        setTimeout(() => {
            setCurrent(props.stocks);
            setNext([]);
        }, 500);
    }, [props.stocks]);

    function getUpOrDownClass(current, next) {
        let className = '';
        if (current > next) {
            className = styles['down'];
        } else if (current < next) {
            className = styles['up'];
        }

        return className;
    }

    function getStockContainerBg(current) {
        if (current > 0) {
            return styles['stockContainerPositive'];
        } else if (current < 0) {
            return styles['stockContainerNegative'];
        }
    }

    return (
        <section
            className={`${props.className ? `${props.className} ` : ''}${
                styles['stockTicker']
            }`}
        >
            {current.map((stock) => {
                return (
                    <a
                        key={stock.name}
                        className={`${
                            styles['stockContainer']
                        } ${getStockContainerBg(stock.percentage)} ${
                            stock.open ? '' : styles['closed']
                        }`}
                        href={stock.href}
                    >
                        <div className={styles['arrow']}>
                            {stock.percentage >= 0 ? (
                                <span className={styles['icon']}>
                                    <ValueUpIcon />
                                </span>
                            ) : (
                                <span className={styles['icon']}>
                                    <ValueDownIcon />
                                </span>
                            )}
                        </div>
                        <span className={styles['stock']}>
                            <span className={styles['stockName']}>
                                {stock.name}
                            </span>
                            <span
                                className={`${styles['price']} ${
                                    next.length && stock.open
                                        ? styles['transitioning']
                                        : ''
                                } ${stock.open ? '' : styles['closed']}`}
                            >
                                {next.map((nextStock) => {
                                    if (nextStock.name === stock.name) {
                                        const upDownClass = getUpOrDownClass(
                                            stock.price,
                                            nextStock.price
                                        );
                                        return (
                                            <React.Fragment
                                                key={nextStock.name}
                                            >
                                                <span
                                                    className={`${styles['next']} ${upDownClass}`}
                                                >
                                                    {nextStock.price}
                                                </span>
                                                <span
                                                    className={`${styles['current']} ${upDownClass}`}
                                                >
                                                    {stock.price}
                                                </span>
                                            </React.Fragment>
                                        );
                                    }
                                })}
                                {stock.price}
                            </span>
                            <span
                                className={`${styles['percentage']} 
                                ${
                                    next.length && stock.open
                                        ? styles['transitioning']
                                        : ''
                                } ${styles['percentage']} ${
                                    stock.open ? '' : styles['closed']
                                }`}
                            >
                                {next.map((nextStock) => {
                                    if (nextStock.name === stock.name) {
                                        const upDownClass = getUpOrDownClass(
                                            stock.percentage,
                                            nextStock.percentage
                                        );
                                        return (
                                            <React.Fragment
                                                key={nextStock.name}
                                            >
                                                <span
                                                    key={nextStock.name}
                                                    className={`${styles['next']} ${upDownClass}`}
                                                >
                                                    {nextStock.percentage > 0
                                                        ? '+'
                                                        : ''}
                                                    {nextStock.percentage}%
                                                </span>

                                                <span
                                                    className={`${styles['current']} ${upDownClass}`}
                                                >
                                                    {nextStock.percentage > 0
                                                        ? '+'
                                                        : ''}
                                                    {nextStock.percentage}%
                                                </span>
                                            </React.Fragment>
                                        );
                                    }
                                })}
                                {stock.percentage > 0 ? '+' : ''}
                                {stock.percentage}%
                            </span>
                        </span>
                    </a>
                );
            })}
        </section>
    );
}

function getCssClassNames(): string[] {
    return [styles['stockTicker']];
}

export { getCssClassNames, StockTicker };
