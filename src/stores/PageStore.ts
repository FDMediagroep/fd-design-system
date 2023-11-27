import { ReSubstitute } from '@fdmg/resubstitute';

export type Page = 'overview' | 'article';

class PageStore extends ReSubstitute {
    private _pageType: Page = 'overview';

    setPageType(pageType: Page) {
        this._pageType = pageType;
        this.trigger();
    }

    getPageType() {
        return this._pageType;
    }
}

const pageStore = new PageStore();
export default pageStore;
