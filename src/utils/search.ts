import Router from 'next/router';

export function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let s = '';
    for (const pair of formData.entries()) {
        if (typeof pair[1] == 'string') {
            s += (s ? '&' : '') + encodeURI(pair[0]) + '=' + encodeURI(pair[1]);
        }
    }
    Router.push(`/search?${s}`);
}
