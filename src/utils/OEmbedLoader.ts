import fetchJsonp from "fetch-jsonp";

type RequestType = "json" | "jsonp";
/**
 * For filling placeholder elements with oEmbed content.
 */
export class OEmbedLoader {
    constructor(cssSelector, requestType: RequestType, baseUrl) {
        try {
            [].slice
                .apply(document.querySelectorAll(cssSelector))
                .forEach(async (element) => {
                    const url = baseUrl + element.getAttribute("data-url");
                    switch (requestType) {
                        case "json":
                            element.innerHTML = await this.getHtml(url);
                            this.runScripts(element);
                            break;
                        case "jsonp":
                            element.innerHTML = await this.getHtmlFromJsonp(
                                url
                            );
                            this.runScripts(element);
                            break;
                    }
                });
        } catch (e) {
            // console.error(e);
        }
    }

    /**
     * Run the <script src=<url>/> elements.
     * @param element
     */
    runScripts(element) {
        [].slice
            .apply(element.querySelectorAll("script"))
            .forEach((script: HTMLScriptElement) => {
                const scriptEl = document.createElement("script");
                scriptEl.addEventListener("load", () => {
                    console.log("Run external script", script.src);
                });
                scriptEl.async = true;
                scriptEl.src = script.src;
                document.body.appendChild(scriptEl);
            });
    }

    async getHtml(url) {
        try {
            return await fetch(url, {
                cache: "no-cache",
                credentials: "include",
            })
                .then((r) => r.json())
                .then((json) => json.html);
        } catch (e) {
            console.error(e);
            return "";
        }
    }

    async getHtmlFromJsonp(url) {
        return await fetchJsonp(url + `&_=${+new Date()}`)
            .then((r) => r.json())
            .then((json) => json.html);
    }
}
