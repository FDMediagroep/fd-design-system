import React, { useState, useEffect } from 'react';
import styles from './Tooltip.module.scss';
import TooltipStore from '../stores/TooltipStore';

type Token = { name: string; rgb: string; hex: string };

export interface Summary {
    color?: Token;
    backgroundColor?: Token;
    borderTopColor?: Token;
    borderRightColor?: Token;
    borderBottomColor?: Token;
    borderLeftColor?: Token;
}

function Tooltip() {
    const [tooltipSummary, setTooltipSummary] = useState<Summary>(null);

    useEffect(() => {
        const tooltipSubscriptionId = TooltipStore.subscribe(() => {
            setTooltipSummary(TooltipStore.getSummary());
        });
        setTooltipSummary(TooltipStore.getSummary());

        return () => {
            TooltipStore.unsubscribe(tooltipSubscriptionId);
        };
    }, []);

    function handleClick() {
        TooltipStore.setSummary(null);
    }

    return tooltipSummary ? (
        <div className={styles['tooltip']} onClick={handleClick}>
            <h3>Design Tokens</h3>
            {styleProps.map((styleProp) => {
                if (tooltipSummary[styleProp]) {
                    return (
                        <fieldset key={styleProp}>
                            <legend>{styleProp}</legend>
                            <p>{tooltipSummary?.[styleProp]?.name}</p>
                            <p>{tooltipSummary?.[styleProp]?.rgb}</p>
                            <p>{tooltipSummary?.[styleProp]?.hex}</p>
                        </fieldset>
                    );
                }
            })}
        </div>
    ) : null;
}

const styleProps = [
    'color',
    'background-color',
    // 'border-top-color',
    // 'border-right-color',
    // 'border-bottom-color',
    // 'border-left-color',
    'fill',
];

export { Tooltip, styleProps };
