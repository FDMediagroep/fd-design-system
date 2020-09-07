import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import { Accordion } from '../accordion/Accordion';
import Checkbox from '../input/Checkbox';

interface Props {
    acceptAllLabel?: string;
    closeLabel?: string;
    denyAllLabel?: string;
    description?: JSX.Element | String;
    onAcceptAll?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onClose?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onDenyAll?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    opened?: boolean;
    title?: JSX.Element | String;
}

function CookieConsent(props: Props) {
    const refIFrame = useRef<HTMLIFrameElement>(null);
    const [checkmarks, setCheckmarks] = useState([]);

    function handleMessage(event: MessageEvent) {
        if (event?.data?.hostname) {
            CookieConsentStore.setVendorNames(event.data.consents || []);
        }
    }

    function post(consents: string[]) {
        refIFrame.current.contentWindow.postMessage(
            {
                method: 'POST',
                hostname: window.location.hostname,
                timestamp: +new Date(),
                consents,
            },
            '*'
        );
    }

    function get() {
        refIFrame.current.contentWindow.postMessage(
            {
                method: 'GET',
                hostname: window.location.hostname,
            },
            '*'
        );
    }

    function remove() {
        refIFrame.current.contentWindow.postMessage(
            {
                method: 'DELETE',
                hostname: window.location.hostname,
            },
            '*'
        );
    }

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
            post(consents);
            setTimeout(() => {
                props?.onAcceptAll?.(e);
                props?.onClose?.(e);
            }, 10);
        },
        [props.onClose, props.onAcceptAll]
    );

    const handleDenyAll = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            CookieConsentStore.setVendorNames([]);
            remove();
            setTimeout(() => {
                props?.onDenyAll?.(e);
                props?.onClose?.(e);
            }, 10);
        },
        [props.onClose, props.onDenyAll]
    );

    const handleClose = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            CookieConsentStore.setVendorNames(checkmarks);
            if (checkmarks.length) {
                post(checkmarks);
            } else {
                remove();
            }
            setTimeout(() => {
                props?.onClose?.(e);
            }, 10);
        },
        [props.onClose, checkmarks]
    );

    useEffect(() => {
        if (refIFrame?.current) {
            window.addEventListener('message', handleMessage, false);
            refIFrame.current.addEventListener('load', get);
        }
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [refIFrame.current]);

    function handleCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
        const target = e.currentTarget;
        if (target.checked) {
            CookieConsentStore.addVendorName(target.id);
        } else {
            CookieConsentStore.removeVendorName(target.id);
        }
        if (CookieConsentStore.getVendorNames().length) {
            post(CookieConsentStore.getVendorNames());
        } else {
            remove();
        }
    }

    useEffect(() => {
        const subscriptionId = CookieConsentStore.subscribe(() => {
            setCheckmarks(CookieConsentStore.getVendorNames());
        });

        return () => {
            CookieConsentStore.unsubscribe(subscriptionId);
        };
    }, []);

    return (
        <Modal
            className={styles.fdCookieConsent}
            disableBackgroundClose={true}
            hideCloseButton={true}
            hideCloseIcon={true}
            opened={props.opened}
            onClose={props.onClose}
        >
            <Accordion
                items={[
                    {
                        checked: true,
                        title: 'Informatie',
                        content: (
                            <div>
                                {props.title ?? <h1>Cookiewall</h1>}
                                {props.description ?? (
                                    <p>This is the cookiewall</p>
                                )}
                            </div>
                        ),
                    },
                    {
                        title: 'Toestemmingen',
                        content: (
                            <div>
                                <p>
                                    Voor sommige doeleinden kunnen jouw
                                    persoonsgegevens worden verwerkt op de
                                    juridische grond van rechtmatig belang
                                </p>

                                <h2>FDMG</h2>
                                <div className={styles.settings}>
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
                                <h2>Derde partijen</h2>
                                <div className={styles.settings}>
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
                <Button onClick={handleClose}>
                    {props.closeLabel ?? 'Close'}
                </Button>
                <Button onClick={handleDenyAll}>
                    {props.denyAllLabel ?? 'Deny all'}
                </Button>
                <ButtonCta onClick={handleAcceptAll}>
                    {props.acceptAllLabel ?? 'Accept all'}
                </ButtonCta>
            </footer>
            <iframe
                ref={refIFrame}
                src="https://responder.vercel.app"
                width="100%"
            />
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
