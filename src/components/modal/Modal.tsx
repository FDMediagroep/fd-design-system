import React, { useEffect, useRef, useState } from 'react';
import * as styles from './Modal.module.scss';
import { CloseIcon } from '../../design-tokens/icons';

export interface Props {
    /**
     * Class name for the root container of the modal.
     */
    className?: string;

    /**
     * Callback function to call when the overlay is being closed by the included
     * close functions.
     *
     * Any element passed as `props.children` with a className `close` will trigger
     * this on click.
     */
    onClose?: () => void;
    /**
     * Set to true to show the overlay.
     */
    opened?: boolean;
    [x: string]: any;
}

export default function Modal(props: Props) {
    const dialogRef = useRef<HTMLDialogElement>();
    const [closing, setClosing] = useState(false);
    const { onClose } = props;

    function onClosing() {
        setClosing(true);
    }

    if (closing) {
        const modal = dialogRef.current;
        if (modal) {
            const closeFn = () => {
                modal.close();
                setClosing(false);
                onClose();
                modal.removeEventListener('animationend', closeFn);
            };
            modal.addEventListener('animationend', closeFn);
        }
    }

    useEffect(() => {
        if (dialogRef.current) {
            const modal = dialogRef.current;
            modal.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    e.preventDefault();
                    onClosing();
                }
            });
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    onClosing();
                }
            });

            [].slice
                .call(modal.querySelectorAll('.close'))
                .forEach((element: HTMLElement) => {
                    element.addEventListener('click', () => {
                        onClosing();
                    });
                });
        }
    }, [dialogRef, onClose]);

    useEffect(() => {
        if (props.opened) {
            dialogRef.current?.showModal?.();
        }
    }, [props.opened]);

    return (
        <dialog
            ref={dialogRef}
            className={`${styles['fd-modal']} ${
                props.className ? props.className : ''
            } ${closing ? styles['closing'] : ''}`}
        >
            <h2
                className={`${styles['title-bar']} heading sans s xs__p+4 xs__m-0`}
            >
                Hoe werkt het delen?
                <button
                    className={`${styles['close-icon']} close xs__p-0`}
                    aria-label="Sluiten"
                    onClick={onClosing}
                >
                    <CloseIcon />
                </button>
            </h2>

            <div className={`${styles['content']} body-text sans s`}>
                {props.children}
            </div>
        </dialog>
    );
}

function getCssClassNames(): string[] {
    return [styles['fd-modal']];
}

export { Modal, getCssClassNames };
