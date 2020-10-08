let timeout;
export function debounce(fn: () => any, delay: number) {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(fn, delay);
}
