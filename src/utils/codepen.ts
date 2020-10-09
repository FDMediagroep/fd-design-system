export function getCodePenData(
    legend: string,
    tags: string[],
    html: string,
    css: string,
    js: string,
    js_external: string,
    bgcolor: string
) {
    return JSON.stringify({
        title: legend,
        description: legend,
        editors: '110',
        layout: 'left',
        tags,
        html,
        css,
        js,
        js_external,
        css_external: `https://static.fd.nl/style-guide/assets/fonts/style.css;https://static.fd.nl/style-guide/assets/icons/style.css`,
        head: `<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no"/><style>html {background-color: ${bgcolor};}</style>`,
    });
}
