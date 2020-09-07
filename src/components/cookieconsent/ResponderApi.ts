import CookieConsentStore from './CookieConsentStore';

/**
 * Convenience API for Responder.
 * Responder is a static web page is used as an iframe.
 * Using this API it's possible to send and retrieve messages from Responder.
 *
 * Using this API you can store the messages on Responder and retrieve them at a later point.
 * Responder stores the messages in localStorage which allows this API to retrieve the
 * messages cross-domain. As long as your using the same browser.
 *
 * This API is used to achieve a cross-domain storage so Cookie consents can be applied
 * across multiple domains.
 */
class ResponderApi {
    private loaded = false;
    private contentWindow: WindowProxy;

    /**
     * Assumes event.data to have the following properties:
     * - hostname: string - the hostname this data belongs to.
     * - consents: string[] - array of cookiewall consents.
     * @param event
     */
    handleMessage(event: MessageEvent) {
        if (event?.data?.hostname) {
            CookieConsentStore.setVendorNames(event.data.consents || []);
        }
    }

    /**
     * Set the iFrame for which the Responder page is the source.
     * This iFrame needs to be set before anything else.
     *
     * A promise is returned and is resolved when iframe
     * the load event has been fired.
     *
     * After the promise resolved you can make use of the other
     * functions.
     *
     * @param iframe
     */
    setResponder(iframe: HTMLIFrameElement): Promise<any> {
        this.contentWindow = iframe.contentWindow;
        return new Promise((resolve, reject) => {
            let timer;
            const cb = () => {
                this.loaded = true;
                clearTimeout(timer);
                resolve();
            };
            iframe.addEventListener('load', cb);

            timer = setTimeout(() => {
                iframe.removeEventListener('load', cb);
                resolve();
            }, 5000);
        });
    }

    /**
     * Post message to Responder to be stored associated with the hostname.
     *
     * @param consents
     */
    post(consents: string[]): Promise<MessageEvent> {
        if (!this.loaded) {
            console.error(new Error('Responder iFrame not loaded'));
        }
        this.contentWindow.postMessage(
            {
                method: 'POST',
                hostname: window.location.hostname,
                timestamp: +new Date(),
                consents,
            },
            '*'
        );
        return new Promise((resolve, reject) => {
            let timer;
            const cb = (event: MessageEvent) => {
                if (event?.data?.hostname) {
                    clearTimeout(timer);
                    window.removeEventListener('message', cb);
                    resolve(event);
                }
            };
            window.addEventListener('message', cb, false);

            timer = setTimeout(() => {
                window.removeEventListener('message', cb);
                reject(new Error('timeout waiting for GET'));
            }, 5000);
        });
    }

    /**
     * Retrieve message from Responder associated with the hostname.
     */
    get(): Promise<MessageEvent> {
        if (!this.loaded) {
            console.error(new Error('Responder iFrame not loaded'));
        }
        this.contentWindow.postMessage(
            {
                method: 'GET',
                hostname: window.location.hostname,
            },
            '*'
        );
        return new Promise((resolve, reject) => {
            let timer;
            const cb = (event: MessageEvent) => {
                if (event?.data?.hostname) {
                    clearTimeout(timer);
                    window.removeEventListener('message', cb);
                    resolve(event);
                }
            };
            window.addEventListener('message', cb, false);

            timer = setTimeout(() => {
                window.removeEventListener('message', cb);
                reject(new Error('timeout waiting for GET'));
            }, 5000);
        });
    }

    /**
     * Remove message from responder associated with the hostname.
     */
    remove(): Promise<MessageEvent> {
        if (!this.loaded) {
            console.error(new Error('Responder iFrame not loaded'));
        }
        this.contentWindow.postMessage(
            {
                method: 'DELETE',
                hostname: window.location.hostname,
            },
            '*'
        );
        return new Promise((resolve, reject) => {
            let timer;
            const cb = (event: MessageEvent) => {
                if (event?.data?.hostname) {
                    clearTimeout(timer);
                    window.removeEventListener('message', cb);
                    resolve(event);
                }
            };
            window.addEventListener('message', cb, false);

            timer = setTimeout(() => {
                window.removeEventListener('message', cb);
                reject(new Error('timeout waiting for GET'));
            }, 5000);
        });
    }

    /**
     * Using vendornames from CookieConsentStore determines to store or remove
     * the message from Responder associated with the hostname.
     */
    store() {
        if (CookieConsentStore.getVendorNames().length) {
            this.post(CookieConsentStore.getVendorNames());
        } else {
            this.remove();
        }
    }
}

export { ResponderApi };
