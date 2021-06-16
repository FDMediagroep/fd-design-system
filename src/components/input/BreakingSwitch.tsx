import React from 'react';
import styles from './BreakingSwitch.module.scss';
import { CheckIcon, CloseIcon } from '../../design-tokens/icons';

export interface Props {
    checked?: boolean;
    className?: string;
    description?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    subscribeUrl?: string;
    label?: string;
    unsubscribeUrl?: string;
}

export default function BreakingSwitch(props: Props) {
    return (
        <>
            <div
                className={`${styles.breakingSwitch}${
                    props.className ? ` ${props.className}` : ''
                }`}
            >
                <h3>{props.label ? props.label : 'Breaking nieuws alert'}</h3>
                <div className={styles.content}>
                    <span className={styles.description}>
                        {props.description
                            ? props.description
                            : 'Ontvang een e-mail alert bij belangrijk FD Nieuws'}
                    </span>
                    <label
                        className={styles.switch}
                        data-addurl={
                            props.subscribeUrl
                                ? props.subscribeUrl
                                : '/add-breaking-alert'
                        }
                        data-deleteurl={
                            props.unsubscribeUrl
                                ? props.unsubscribeUrl
                                : '/delete-breaking-alert'
                        }
                    >
                        <input
                            type="checkbox"
                            className={styles.switchInput}
                            onChange={props.onChange}
                            checked={props.checked}
                            aria-label={
                                props.description
                                    ? props.description
                                    : 'Ontvang een e-mail alert bij belangrijk FD Nieuws'
                            }
                        />
                        <span className={styles.switchLabel}>
                            <span
                                className={styles.iconCheck}
                                dangerouslySetInnerHTML={{
                                    __html: CheckIcon as any,
                                }}
                            />
                            <span
                                className={styles.iconTimes}
                                dangerouslySetInnerHTML={{
                                    __html: CloseIcon as any,
                                }}
                            />
                        </span>
                        <span className={styles.switchHandle} />
                    </label>
                </div>
            </div>
        </>
    );
}

function getCssClassNames(): string[] {
    return [styles.breakingSwitch];
}

export { BreakingSwitch, getCssClassNames };
