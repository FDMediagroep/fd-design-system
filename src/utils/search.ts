import Router from 'next/router';

export async function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    return new Promise((resolve: any) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        let s = '';
        for (const pair of formData.entries()) {
            if (typeof pair[1] == 'string') {
                s +=
                    (s ? '&' : '') +
                    encodeURI(pair[0]) +
                    '=' +
                    encodeURI(pair[1]);
            }
        }
        Router.push(`/search?${s}`);
        Router.ready(resolve);
    });
}

function anchorClickHandler(e) {
    e.preventDefault();
    Router.push(e.currentTarget.getAttribute('href'));
}

export function interceptLinks(anchors: NodeList) {
    if (!anchors) return;
    [].slice.call(anchors).forEach((anchor) => {
        anchor.removeEventListener('click', anchorClickHandler);
        anchor.addEventListener('click', anchorClickHandler);
    });
}
