import { ReSubstitute } from "../utils/ReSubstitute";

export type Page = "overview" | "article";

class PageStore extends ReSubstitute {
    private _pageType: Page = "overview";

    setPageType(pageType: Page) {
        this._pageType = pageType;
        this.trigger();
    }

    getPageType() {
        return this._pageType;
    }
}

export default new PageStore();
