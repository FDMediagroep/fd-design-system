import React, { useCallback } from 'react';
import styles from './Modal.module.scss';
import { CloseIcon } from '../../design-tokens/icons';
import {
    ButtonCta,
    getCssClassNames as getButtonCtaCssClassNames,
} from '../button/ButtonCta';

export interface Props {
    /**
     * Class name for the obscuring modal background.
     */
    backgroundClassName?: string;
    /**
     * Class name for the root container of the modal.
     */
    className?: string;
    /**
     * Class name for the content box.
     */
    contentBoxClassName?: string;
    /**
     * Class name for the content background.
     * This is the background with attached click listener for closing the modal.
     */
    contentBackgroundClassName?: string;
    /**
     * Disable closing the overlay when clicked outside of the overlay content.
     */
    disableBackgroundClose?: boolean;

    /**
     * Hide the close button (full-screen modal). Make sure you provide other
     * means of closing the modal if you set this to true.
     */
    hideCloseButton?: boolean;

    /**
     * Hide the close icon. Make sure you provide other
     * means of closing the modal if you set this to true.
     */
    hideCloseIcon?: boolean;

    /**
     * Callback function to call when the overlay is being closed by the included
     * close functions.
     */
    onClose?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /**
     * Set to true to show the overlay.
     */
    opened?: boolean;
    [x: string]: any;
}

export default function Modal(props: Props) {
    const handleBackgroundClose = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (!props.disableBackgroundClose) {
                e.preventDefault();
                props?.onClose?.(e);
            }
        },
        [props.onClose, props.disableBackgroundClose]
    );

    const handleModalClose = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            props?.onClose?.(e);
        },
        [props.onClose]
    );

    return (
        <div
            className={`${styles.modal}${props.opened ? ` fdOpenModal` : ''}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <div
                className={`${styles.modalBackground}${
                    props.backgroundClassName
                        ? ` ${props.backgroundClassName}`
                        : ''
                }`}
            />
            <div
                className={`${styles.contentBackground}${
                    props.contentBackgroundClassName
                        ? ` ${props.contentBackgroundClassName}`
                        : ''
                }`}
                onClick={handleBackgroundClose}
            >
                <div
                    className={`${styles.contentBox}${
                        props.contentBoxClassName
                            ? ` ${props.contentBoxClassName}`
                            : ''
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {!props.hideCloseIcon && (
                        <span
                            className={styles.closeIcon}
                            dangerouslySetInnerHTML={{
                                __html: CloseIcon as any,
                            }}
                            onClick={handleModalClose}
                        />
                    )}
                    <div className={styles.content}>{props.children}</div>
                    {!props.hideCloseButton && (
                        <div className={styles.buttonContainer}>
                            <ButtonCta onClick={handleModalClose}>
                                Sluiten
                            </ButtonCta>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles.modal, ...getButtonCtaCssClassNames()];
}

export { Modal, getCssClassNames };
