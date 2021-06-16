type KeyOrKeys = string | string[];

type Callback = (keys?: string[]) => void;

interface Subscription {
    id: number;
    callback: Callback;
    key?: string;
}

interface SubscriptionOptions {
    keys: string[] | null;
    throttledUntil: number | undefined;
    bypassBlock: boolean;
}

/**
 * Drop-in minimal replacement for microsoft/ReSub.
 * Only implements the Pub/Sub functionality of ReSub.
 * Disregarded the framework specific implementations.
 */
export class ReSubstitute {
    private subscriptions: Subscription[] = [];
    private static pendingCallbacks: Map<Callback, SubscriptionOptions> =
        new Map();
    private throttleMs = 0;
    private bypassTriggerBlocks = false;
    static Key_All = 'SUBSCRIBE_TO_ALL';
    private static triggerBlockCount = 0;

    constructor(throttleMs = 0, bypassTriggerBlocks = false) {
        this.throttleMs = throttleMs;
        this.bypassTriggerBlocks = bypassTriggerBlocks;
    }

    private static resolveCallbacks() {
        for (const [callback, options] of ReSubstitute.pendingCallbacks) {
            if (ReSubstitute.triggerBlockCount && !options.bypassBlock) {
                // The callback does not bypass the block so we continue to the next callback.
                continue;
            } else if (options.bypassBlock) {
                callback.call(null, options.keys);
            } else if (+new Date() >= options.throttledUntil) {
                callback.call(null, options.keys);
            } else {
                setTimeout(
                    callback.bind(null, options.keys),
                    +new Date() - options.throttledUntil
                );
            }
            ReSubstitute.pendingCallbacks.delete(callback);
        }
    }

    /**
     * Subscribe to store triggers.
     * @param callback
     * @param key limit only to events for this key
     */
    subscribe(callback: Callback, key: string = ReSubstitute.Key_All): number {
        const id = +new Date() + Math.round(Math.random() * 1000);
        this.subscriptions.push({ id, callback, key });
        return id;
    }

    /**
     * Unsubscribe from the store so future triggers will not trigger the callback anymore.
     * @param subToken
     */
    unsubscribe(subToken: number) {
        this.subscriptions = [
            ...this.subscriptions.filter(
                (subscription) => subscription.id !== subToken
            ),
        ];
    }

    protected _getSubscriptionKeys(): string[] {
        return this.subscriptions.map((subscription) => {
            return subscription.key;
        });
    }

    protected _isTrackingKey(key: string) {
        const results = this.subscriptions.find(
            (subscription) => subscription.key === key
        );
        return !!results;
    }

    /**
     * Trigger callbacks of subscriptions.
     * @param keyOrKeys trigger callback if subscription matches given key or keys.
     */
    trigger(keyOrKeys: KeyOrKeys = ReSubstitute.Key_All) {
        if (typeof keyOrKeys === 'string') {
            this.subscriptions.forEach((subscription) => {
                if (subscription.key === keyOrKeys) {
                    ReSubstitute.pendingCallbacks.set(subscription.callback, {
                        bypassBlock: this.bypassTriggerBlocks,
                        keys: [ReSubstitute.Key_All, keyOrKeys],
                        throttledUntil: +new Date() + this.throttleMs,
                    });
                }
            });
        } else if (Array.isArray(keyOrKeys)) {
            this.subscriptions.forEach((subscription) => {
                if (keyOrKeys.indexOf(subscription.key) !== -1) {
                    ReSubstitute.pendingCallbacks.set(subscription.callback, {
                        bypassBlock: this.bypassTriggerBlocks,
                        keys: [ReSubstitute.Key_All, ...keyOrKeys],
                        throttledUntil: +new Date() + this.throttleMs,
                    });
                }
            });
        } else {
            // Notify all listeners
            this.subscriptions.forEach((subscription) => {
                ReSubstitute.pendingCallbacks.set(subscription.callback, {
                    bypassBlock: this.bypassTriggerBlocks,
                    keys: keyOrKeys,
                    throttledUntil: +new Date() + this.throttleMs,
                });
            });
        }

        ReSubstitute.resolveCallbacks();
    }

    /**
     * Block callback triggers globally.
     */
    static pushTriggerBlock() {
        this.triggerBlockCount++;
    }

    /**
     * Pop trigger block. When no trigger blocks are left. The callback triggering will resume.
     * If no trigger blocks are set then this function does nothing.
     */
    static popTriggerBlock() {
        if (this.triggerBlockCount) {
            this.triggerBlockCount--;
            if (this.triggerBlockCount === 0) {
                ReSubstitute.resolveCallbacks();
            }
        }
    }
}
