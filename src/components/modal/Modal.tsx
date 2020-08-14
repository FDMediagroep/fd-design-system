import React, { useCallback } from 'react';
import styles from './Modal.module.scss';
import { CloseIcon } from '../../design-tokens/icons';

export interface Props {
    className?: string;
    contentClassName?: string;
    opened?: boolean;
    onClose?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    [x: string]: any;
}

export default function Modal(props: Props) {
    const handleModalClose = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            props.onClose(e);
        },
        [props.onClose]
    );

    function handleContentClick(
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
        e.stopPropagation();
    }

    return (
        <>
            <div
                className={`${styles.modal}${
                    props.className ? ` ${props.className}` : ''
                }${props.opened ? ` ${styles.opened}` : ''}`}
            />
            <div
                className={`${styles.contentContainer}${
                    props.contentClassName ? ` ${props.contentClassName}` : ''
                }${props.opened ? ` ${styles.opened}` : ''}`}
                onClick={handleModalClose}
            >
                <div
                    className={styles.content}
                    onClick={(e) => e.stopPropagation()}
                >
                    <span
                        className={styles.closeIcon}
                        dangerouslySetInnerHTML={{ __html: CloseIcon }}
                        onClick={handleModalClose}
                    />
                    {props.children}
                </div>
            </div>
        </>
    );
}

function getCssClassNames() {
    return [styles.modal];
}

export { Modal, getCssClassNames };
