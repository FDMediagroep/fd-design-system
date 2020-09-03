import React, { useCallback } from 'react';
import styles from './CookieConsent.module.scss';
import {
    Button,
    getCssClassNames as getButtonCssClassNames,
} from '../button/Button';
import {
    ButtonCta,
    getCssClassNames as getButtonCtaCssClassNames,
} from '../button/ButtonCta';
import {
    Modal,
    getCssClassNames as getModalCssClassNames,
} from '../modal/Modal';
import CookieConsentStore, { VendorNames } from './CookieConsentStore';
import {
    LockedContent,
    getCssClassNames as getLockedContentCssClassNames,
} from './LockedContent';

interface Props {
    acceptAllLabel?: string;
    denyAllLabel?: string;
    description?: JSX.Element | String;
    onAcceptAll?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onClose?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onDenyAll?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    opened?: boolean;
    title?: JSX.Element | String;
}

function CookieConsent(props: Props) {
    const handleAcceptAll = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            CookieConsentStore.setVendorNames([
                VendorNames['fdmg-personalized'],
                VendorNames['inline-html'],
                VendorNames['instagram'],
                VendorNames['soundcloud'],
                VendorNames['twitter'],
                VendorNames['vimeo'],
                VendorNames['youtube'],
            ]);
            props?.onAcceptAll?.(e);
            props?.onClose?.(e);
        },
        [props.onClose, props.onAcceptAll]
    );

    const handleDenyAll = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            CookieConsentStore.setVendorNames([]);
            props?.onDenyAll?.(e);
            props?.onClose?.(e);
        },
        [props.onClose, props.onDenyAll]
    );

    return (
        <Modal
            className={styles.fdCookieConsent}
            disableBackgroundClose={true}
            hideCloseButton={true}
            hideCloseIcon={true}
            opened={props.opened}
            onClose={props.onClose}
        >
            {props.title ?? <h1>Cookiewall</h1>}
            {props.description ?? <p>This is the cookiewall</p>}
            <footer>
                <Button onClick={handleDenyAll}>
                    {props.denyAllLabel ?? 'Deny all'}
                </Button>
                <ButtonCta onClick={handleAcceptAll}>
                    {props.acceptAllLabel ?? 'Accept all'}
                </ButtonCta>
            </footer>
        </Modal>
    );
}

function getCssClassNames() {
    return [
        styles.fdCookieConsent,
        ...getLockedContentCssClassNames(),
        ...getModalCssClassNames(),
        ...getButtonCssClassNames(),
        ...getButtonCtaCssClassNames(),
    ];
}

export { CookieConsent, LockedContent, CookieConsentStore, getCssClassNames };
