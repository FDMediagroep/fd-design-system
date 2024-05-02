import React, { useCallback, useEffect, useState } from 'react';
import * as styles from './CookieConsent.module.scss';
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
import {
    Accordion,
    getCssClassNames as getAccordionCssClassNames,
} from '../accordion/Accordion';
import {
    Checkbox,
    getCssClassNames as getCheckboxCssClassNames,
} from '../input/Checkbox';
import { ResponderApi } from './ResponderApi';
import {
    ButtonGhost,
    getCssClassNames as getButtonGhostCssClassNames,
} from '../button/ButtonGhost';

interface Props {
    acceptAllLabel?: string;
    closeLabel?: string;
    domain?: string;
    denyAllLabel?: string;
    description?: JSX.Element | string;
    onAcceptAll?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onClose?: () => void;
    onDenyAll?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    opened?: boolean;
    title?: JSX.Element | string;
}

const responderApi = new ResponderApi();

function CookieConsent(props: Props) {
    const { onAcceptAll, onClose, onDenyAll } = props;
    const [checkmarks, setCheckmarks] = useState([]);

    const handleAcceptAll = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            const consents = [
                VendorNames['fdmg'],
                VendorNames['fdmg-personalized'],
                VendorNames['inline-html'],
                VendorNames['instagram'],
                VendorNames['soundcloud'],
                VendorNames['twitter'],
                VendorNames['vimeo'],
                VendorNames['youtube'],
            ];
            CookieConsentStore.setVendorNames(consents);
            responderApi.post(consents);
            setTimeout(() => {
                onAcceptAll?.(e);
                onClose?.();
            }, 10);
        },
        [onClose, onAcceptAll]
    );

    const handleDenyAll = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            CookieConsentStore.setVendorNames([]);
            responderApi.post([]);
            setTimeout(() => {
                onDenyAll?.(e);
                onClose?.();
            }, 10);
        },
        [onClose, onDenyAll]
    );

    const handleClose = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            CookieConsentStore.setVendorNames(checkmarks);
            responderApi.post(checkmarks);
            setTimeout(() => {
                onClose?.();
            }, 10);
        },
        [onClose, checkmarks]
    );

    function handleCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
        const target = e.currentTarget;
        if (target.checked) {
            CookieConsentStore.addVendorName(target.id);
        } else {
            CookieConsentStore.removeVendorName(target.id);
        }

        responderApi.post(CookieConsentStore.getVendorNames());
    }

    useEffect(() => {
        const subscriptionId = CookieConsentStore.subscribe(() => {
            setCheckmarks([...CookieConsentStore.getVendorNames()]);
        });

        responderApi.init({ hostname: 'design-system.fd.nl' }).then(() => {
            responderApi.get().then((event) => {
                console.info(
                    'Responder API Event received',
                    'modal-consent',
                    event
                );
                CookieConsentStore.setVendorNames(event?.data?.consents ?? []);
            });
        });

        return () => {
            CookieConsentStore.unsubscribe(subscriptionId);
        };
    }, []);

    return (
        <Modal
            className={styles['fdCookieConsent']}
            contentBoxClassName={styles['contentBoxAdjust']}
            disableBackgroundClose={true}
            hideCloseButton={true}
            hideCloseIcon={true}
            opened={props.opened}
            onClose={props.onClose}
        >
            <div>
                {props.title ?? <h1>Cookiewall</h1>}
                {props.description ?? <p>This is the cookiewall</p>}
            </div>

            <Accordion
                items={[
                    {
                        title: 'Toestemmingen',
                        content: (
                            <div>
                                <p>
                                    Voor sommige doeleinden kunnen jouw
                                    persoonsgegevens worden verwerkt op de
                                    juridische grond van rechtmatig belang
                                </p>

                                <h3>FDMG</h3>
                                <div className={styles['settings']}>
                                    <Checkbox
                                        id={VendorNames['fdmg']}
                                        label="FDMG"
                                        checked={
                                            checkmarks.indexOf(
                                                VendorNames['fdmg']
                                            ) !== -1
                                        }
                                        onChange={handleCheckChange}
                                    />
                                    <Checkbox
                                        id={VendorNames['inline-html']}
                                        label="Inline HTML"
                                        checked={
                                            checkmarks.indexOf(
                                                VendorNames['inline-html']
                                            ) !== -1
                                        }
                                        onChange={handleCheckChange}
                                    />
                                </div>
                                <h3>Derde partijen</h3>
                                <div className={styles['settings']}>
                                    <Checkbox
                                        id={VendorNames['fdmg-personalized']}
                                        label="Personalisatie"
                                        checked={
                                            checkmarks.indexOf(
                                                VendorNames['fdmg-personalized']
                                            ) !== -1
                                        }
                                        onChange={handleCheckChange}
                                    />
                                    <Checkbox
                                        id={VendorNames['instagram']}
                                        label="Instagram"
                                        checked={
                                            checkmarks.indexOf(
                                                VendorNames['instagram']
                                            ) !== -1
                                        }
                                        onChange={handleCheckChange}
                                    />
                                    <Checkbox
                                        id={VendorNames['soundcloud']}
                                        label="SoundCloud"
                                        checked={
                                            checkmarks.indexOf(
                                                VendorNames['soundcloud']
                                            ) !== -1
                                        }
                                        onChange={handleCheckChange}
                                    />
                                    <Checkbox
                                        id={VendorNames['twitter']}
                                        checked={
                                            checkmarks.indexOf(
                                                VendorNames['twitter']
                                            ) !== -1
                                        }
                                        label="Twitter"
                                        onChange={handleCheckChange}
                                    />
                                    <Checkbox
                                        id={VendorNames['vimeo']}
                                        label="Vimeo"
                                        checked={
                                            checkmarks.indexOf(
                                                VendorNames['vimeo']
                                            ) !== -1
                                        }
                                        onChange={handleCheckChange}
                                    />
                                    <Checkbox
                                        id={VendorNames['youtube']}
                                        label="Youtube"
                                        checked={
                                            checkmarks.indexOf(
                                                VendorNames['youtube']
                                            ) !== -1
                                        }
                                        onChange={handleCheckChange}
                                    />
                                </div>
                            </div>
                        ),
                    },
                ]}
            />
            <footer>
                <Button onClick={handleClose} className={styles['button']}>
                    {props.closeLabel ?? 'Close'}
                </Button>
                <ButtonGhost
                    onClick={handleDenyAll}
                    className={styles['button']}
                >
                    {props.denyAllLabel ?? 'Deny all'}
                </ButtonGhost>
                <ButtonCta
                    onClick={handleAcceptAll}
                    className={styles['button']}
                >
                    {props.acceptAllLabel ?? 'Accept all'}
                </ButtonCta>
            </footer>
        </Modal>
    );
}

function getCssClassNames(): string[] {
    return [
        styles['fdCookieConsent'],
        ...getLockedContentCssClassNames(),
        ...getModalCssClassNames(),
        ...getAccordionCssClassNames(),
        ...getButtonCssClassNames(),
        ...getButtonCtaCssClassNames(),
        ...getButtonGhostCssClassNames(),
        ...getCheckboxCssClassNames(),
    ];
}

export {
    CookieConsent,
    LockedContent,
    CookieConsentStore,
    getCssClassNames,
    ResponderApi as CookieConsentApi,
};
