import React, { useEffect, useState, useRef } from 'react';
import styles from './LockedContent.module.scss';
import { SpyglassIcon } from '../../design-tokens/icons';
import CookieConsentStore, { VendorNames } from './CookieConsentStore';

function runJs(scriptElement: HTMLScriptElement) {
    const head = document.getElementsByTagName('head')[0];
    if (scriptElement.src) {
        const script = document.createElement('script');
        console.log('Load external script', scriptElement);
        script.src = scriptElement.src;
        head.appendChild(script);
    } else {
        try {
            console.log('Eval inline script', scriptElement);
            eval(scriptElement.innerHTML);
        } catch (e) {
            console.log(`Can't eval inline script`, scriptElement);
        }
    }
}

function loadAllScripts(templateElement: HTMLElement) {
    const scripts = templateElement.querySelectorAll('script');
    if (scripts.length) {
        console.log('Activate scripts', scripts);
        [].slice.call(scripts).forEach((script) => {
            runJs(script);
        });
    }
}

interface Props {
    /**
     * Content to lock.
     */
    children: JSX.Element;

    /**
     * Text for the lock.
     */
    lockDescription: JSX.Element;

    /**
     * Callback is called when content is being unlocked by the user.
     */
    onUnlock?: (vendorName?: VendorNames | string) => void;

    /**
     * Set to true to unlock the content.
     */
    unlocked?: boolean;

    /**
     * One of the supported vendor names.
     */
    vendorName: VendorNames | string;
    [x: string]: any;
}

function LockedContent(props: Props) {
    const [unlocked, setUnlocked] = useState(props.unlocked);
    const unlockedRef = useRef(null);

    useEffect(() => {
        const subscriptionId = CookieConsentStore.subscribe(() => {
            setUnlocked(CookieConsentStore.hasVendorName(props.vendorName));
        });
        return () => {
            CookieConsentStore.unsubscribe(subscriptionId);
        };
    }, []);

    useEffect(() => {
        if (unlocked && unlockedRef.current) {
            loadAllScripts(unlockedRef.current);
        }
    }, [unlocked, unlockedRef.current]);

    function unlock() {
        props?.onUnlock?.();
        CookieConsentStore.addVendorName(props.vendorName);
    }

    return unlocked ? (
        <span ref={unlockedRef} className="unblocked inline-content block">
            {props.children}
        </span>
    ) : (
        <div className={styles.fdLockedContent}>
            <div className={styles.blockedContentContainer} onClick={unlock}>
                <span className={styles.lockText}>
                    <span
                        className={styles.lock}
                        dangerouslySetInnerHTML={{ __html: SpyglassIcon }}
                    />{' '}
                    {props.lockDescription}
                </span>
            </div>
        </div>
    );
}

function getCssClassNames() {
    return [styles.fdLockedContent];
}

export { LockedContent, getCssClassNames };
