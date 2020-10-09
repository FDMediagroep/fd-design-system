interface Options {
    /**
     * The hostname is used as key when interfacing with Responder.
     */
    hostname?: string;
}

/**
 * Interface of the MessageEvent.data property.
 */
export interface MessageData extends Options {
    consents?: string[];
    method: 'GET' | 'POST' | 'DELETE';
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
    private hostname: string;

    isLoaded() {
        return ResponderApi.loaded;
    }

    setHostname(hostname: string) {
        this.hostname = hostname;
    }

    getHostname() {
        return this.hostname;
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
    init(options?: Options): Promise<any> {
        this.hostname = options?.hostname ?? window.location.hostname;
        return new Promise((resolve) => {
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
        console.info(`Responder API POST: ${this.hostname}`, consents);
        return new Promise((resolve) => {
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
                    hostname: this.hostname,
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
            `Responder API GET: ${this.hostname}`,
            ResponderApi.iFrame
        );
        return new Promise((resolve) => {
            let retryCount = 0;
            const interval = setInterval(() => {
                if (retryCount > 30) {
                    console.error(
                        'Responder API timed out',
                        interval,
                        ResponderApi.iFrame
                    );
                    resolve(new MessageEvent('message'));
                }
                ResponderApi.contentWindow.postMessage(
                    {
                        method: 'GET',
                        hostname: this.hostname,
                    },
                    '*'
                );
                retryCount++;
            }, 100);
            const cb = (event: MessageEvent) => {
                if (event?.data?.hostname) {
                    console.info('Responder API clear timeout', interval);
                    clearInterval(interval);
                    window.removeEventListener('message', cb);
                    resolve(event);
                } else {
                    console.info('Responder API event unknown');
                }
            };
            window.addEventListener('message', cb, false);

            console.info(
                'Responder API new timeout',
                interval,
                ResponderApi.iFrame
            );

            ResponderApi.contentWindow.postMessage(
                {
                    method: 'GET',
                    hostname: this.hostname,
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
        console.info(`Responder API DELETE: ${this.hostname}`);
        return new Promise((resolve) => {
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
                    hostname: this.hostname,
                },
                '*'
            );
        });
    }
}

export { ResponderApi };
