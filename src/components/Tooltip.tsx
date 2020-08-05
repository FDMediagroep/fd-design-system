import React from 'react';
import styles from './Tooltip.module.scss';
import TooltipStore from '../stores/TooltipStore';

type Token = {
    name: string;
    rgb: string;
    hex: string;
};

export interface Summary {
    color?: Token;
    backgroundColor?: Token;
    borderTopColor?: Token;
    borderRightColor?: Token;
    borderBottomColor?: Token;
    borderLeftColor?: Token;
}

interface Props {
    title: string;
    description: Summary;
}

function Tooltip(props: Props) {
    function handleClick() {
        TooltipStore.setSummary(null);
    }

    return (
        <div className={styles.tooltip} onClick={handleClick}>
            <h3>{props.title}</h3>
            {styleProps.map((styleProp) => {
                if (props.description && props.description[styleProp]) {
                    return (
                        <fieldset key={styleProp}>
                            <legend>{styleProp}</legend>
                            <p>{props?.description?.[styleProp]?.name}</p>
                            <p>{props?.description?.[styleProp]?.rgb}</p>
                            <p>{props?.description?.[styleProp]?.hex}</p>
                        </fieldset>
                    );
                }
            })}
        </div>
    );
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
