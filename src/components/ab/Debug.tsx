import React from 'react';
import styles from './Debug.module.scss';
import { CloseIcon } from '../../design-tokens/icons';
import { Modal } from '../modal/Modal';

interface Props {
    name: string;
    debugChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    open: boolean;
    handleClose: () => void;
    handleRemoveExperiment: (experimentName: string) => void;
    variant: number;
    [x: string]: any;
}

export function Debug(props: Props) {
    function handleRemoveExperiment() {
        props.handleRemoveExperiment(props.name);
    }

    return (
        <>
            <Modal
                className={styles.debug}
                opened={props.open}
                onClose={props.handleClose}
            >
                <div>
                    <section className={styles.content}>
                        <h2>
                            {props.name}
                            <span
                                className={styles.icon}
                                onClick={handleRemoveExperiment}
                                title="Remove experiment cookie"
                                dangerouslySetInnerHTML={{ __html: CloseIcon }}
                            />
                        </h2>
                        {props.children.map(
                            (child: React.ReactElement, idx: number) => (
                                <label key={child.props.name}>
                                    <input
                                        type="radio"
                                        value={idx}
                                        name={props.name}
                                        onChange={props.debugChange}
                                        checked={idx === props.variant}
                                    />
                                    {child.props.name}
                                </label>
                            )
                        )}
                    </section>
                </div>
            </Modal>
        </>
    );
}
