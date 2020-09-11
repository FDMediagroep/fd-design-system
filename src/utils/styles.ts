declare let document: any;

export function getStyle(...classNames: string[]) {
    let result: string = '';
    let rootStyles: string = '';
    if (typeof document.styleSheets === 'undefined') {
        return result;
    }
    const styleSheets = document.styleSheets;
    const styleSheetsLength = styleSheets.length;
    let styles: any;
    for (let i = 0; i < styleSheetsLength; i++) {
        if (styleSheets[i].rules) {
            styles = styleSheets[i].rules; // IE
        } else {
            try {
                if (!styleSheets[i].cssRules) {
                    continue;
                }
            } catch (e) {
                //Note that SecurityError exception is specific to Firefox.
                if (e.name == 'SecurityError') {
                    console.log(
                        'SecurityError. Cant readd: ' + styleSheets[i].href
                    );
                    continue;
                }
            }
            styles = styleSheets[i].cssRules;
        }

        for (const idx in styles) {
            const style = styles[idx];
            // Add :root styles as well for CSS Variables.
            if (style.cssText?.indexOf(':root') > -1) {
                rootStyles = `${rootStyles ? `${rootStyles}\r\n` : ''}${
                    style.cssText
                }`;
            }
            // Add @keyframes styles as well for CSS Variables.
            if (style.cssText?.indexOf('@keyframes') > -1) {
                rootStyles = `${rootStyles ? `${rootStyles}\r\n` : ''}${
                    style.cssText
                }`;
            }
            classNames.forEach((className) => {
                if (style.cssText?.indexOf(`.${className}`) > -1) {
                    result = `${result ? `${result}\r\n` : ''}${style.cssText}`;
                }
            });
        }
    }
    return `${rootStyles}\r\n${result}`;
}
