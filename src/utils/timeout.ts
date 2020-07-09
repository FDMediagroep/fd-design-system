export function timeout(ms: number, promise: Promise<any>): Promise<any> {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error('timeout'));
        }, ms);
        promise.then(resolve, reject);
    });
}
