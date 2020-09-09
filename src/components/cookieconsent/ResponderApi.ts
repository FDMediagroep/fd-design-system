import CookieConsentStore from './CookieConsentStore';

/**
 * Interface of the MessageEvent.data property.
 */
export interface MessageData {
    consents?: string[];
    method: 'GET' | 'POST' | 'DELETE';
    hostname?: string;
    timestamp?: number;
}

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
    private static loaded = false;
    private static iFrame: HTMLIFrameElement;
    private static contentWindow: WindowProxy;

    isLoaded() {
        return ResponderApi.loaded;
    }

    /**
     * Create an iFrame loading the Responder page.
     * This iFrame needs to be set before anything else.
     *
     * A promise is returned and is resolved when the iframe
     * load event has been fired.
     *
     * After the promise resolved you can make use of the other
     * functions.
     *
     * @param id
     */
    init(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (ResponderApi.iFrame) {
                resolve();
                return;
            }

            const iFrame = document.createElement('iframe');
            iFrame.setAttribute('id', 'responderFrame');
            iFrame.setAttribute(
                'style',
                'width: 0; height: 0; border: none; display: block;'
            );

            const cb = () => {
                console.info('Responder API iFrame loaded', iFrame);
                ResponderApi.loaded = true;
                resolve();
            };
            iFrame.addEventListener('load', cb);
            iFrame.setAttribute('src', 'https://responder.vercel.app');
            document.documentElement.appendChild(iFrame);
            ResponderApi.iFrame = iFrame;
            ResponderApi.contentWindow = iFrame.contentWindow;
        });
    }

    /**
     * Post message to Responder to be stored associated with the hostname.
     *
     * @param consents
     */
    post(consents: string[]): Promise<MessageEvent> {
        if (!ResponderApi.loaded) {
            console.error(new Error('Responder API iFrame not loaded'));
        }
        console.info(
            `Responder API POST: ${window.location.hostname}`,
            consents
        );
        return new Promise((resolve, reject) => {
            const cb = (event: MessageEvent) => {
                if (event?.data?.hostname) {
                    window.removeEventListener('message', cb);
                    resolve(event);
                }
            };
            window.addEventListener('message', cb, false);
            ResponderApi.contentWindow.postMessage(
                {
                    method: 'POST',
                    hostname: window.location.hostname,
                    timestamp: +new Date(),
                    consents,
                },
                '*'
            );
        });
    }

    /**
     * Retrieve message from Responder associated with the hostname.
     */
    get(): Promise<MessageEvent> {
        if (!ResponderApi.loaded) {
            console.error(new Error('Responder API iFrame not loaded'));
        }
        console.info(
            `Responder API GET: ${window.location.hostname}`,
            ResponderApi.iFrame
        );
        return new Promise((resolve, reject) => {
            let timeout;
            const cb = (event: MessageEvent) => {
                if (event?.data?.hostname) {
                    console.info('Responder API clear timeout', timeout);
                    clearTimeout(timeout);
                    window.removeEventListener('message', cb);
                    resolve(event);
                } else {
                    console.info('Responder API event unknown');
                }
            };
            window.addEventListener('message', cb, false);
            timeout = setTimeout(() => {
                console.error(
                    'Responder API timed out',
                    timeout,
                    ResponderApi.iFrame
                );
                resolve(new MessageEvent('message'));
            }, 2000);
            console.info(
                'Responder API new timeout',
                timeout,
                ResponderApi.iFrame
            );

            ResponderApi.contentWindow.postMessage(
                {
                    method: 'GET',
                    hostname: window.location.hostname,
                },
                '*'
            );
        });
    }

    /**
     * Remove message from responder associated with the hostname.
     */
    remove(): Promise<MessageEvent> {
        if (!ResponderApi.loaded) {
            console.error(new Error('Responder API iFrame not loaded'));
        }
        console.info(`Responder API DELETE: ${window.location.hostname}`);
        return new Promise((resolve, reject) => {
            const cb = (event: MessageEvent) => {
                if (event?.data?.hostname) {
                    window.removeEventListener('message', cb);
                    resolve(event);
                }
            };
            window.addEventListener('message', cb, false);
            ResponderApi.contentWindow.postMessage(
                {
                    method: 'DELETE',
                    hostname: window.location.hostname,
                },
                '*'
            );
        });
    }
}

export { ResponderApi };
