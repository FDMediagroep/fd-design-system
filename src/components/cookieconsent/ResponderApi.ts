import CookieConsentStore from './CookieConsentStore';

class ResponderApi {
    private iframe: HTMLIFrameElement;
    private contentWindow: WindowProxy;

    handleMessage(event: MessageEvent) {
        if (event?.data?.hostname) {
            CookieConsentStore.setVendorNames(event.data.consents || []);
        }
    }

    setIFrame(iframe: HTMLIFrameElement) {
        this.iframe = iframe;
        this.contentWindow = iframe.contentWindow;
        this.iframe.addEventListener('load', this.get);
    }

    post(consents: string[]): Promise<MessageEvent> {
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
            }, 10000);
        });
    }

    get(): Promise<MessageEvent> {
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
            }, 10000);
        });
    }

    remove(): Promise<MessageEvent> {
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
            }, 10000);
        });
    }

    store() {
        if (CookieConsentStore.getVendorNames().length) {
            this.post(CookieConsentStore.getVendorNames());
        } else {
            this.remove();
        }
    }
}

export default new ResponderApi();
