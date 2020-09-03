import { ReSubstitute } from '../../utils/ReSubstitute';

export enum VendorNames {
    'youtube' = 'youtube',
    'twitter' = 'twitter',
    'instagram' = 'instagram',
    'soundcloud' = 'soundcloud',
    'vimeo' = 'vimeo',
    'fdmg-personalized' = 'fdmg-personalized',
    'inline-html' = 'inline-html',
}

class CookieConsentStore extends ReSubstitute {
    private _vendorNames: (VendorNames | string)[] = [];

    setVendorNames(vendorNames: (VendorNames | string)[]) {
        this._vendorNames = [...vendorNames];
        this.trigger();
    }

    addVendorName(vendorName: VendorNames | string) {
        this._vendorNames = [...this._vendorNames, vendorName];
        this.trigger();
    }

    addVendorNames(vendorNames: (VendorNames | string)[]) {
        this._vendorNames = [
            ...this._vendorNames,
            ...vendorNames.filter(
                (vendorName) => this._vendorNames.indexOf(vendorName) < 0
            ),
        ];
        this.trigger();
    }

    hasVendorName(vendorName: VendorNames | string) {
        return this._vendorNames.indexOf(vendorName) !== -1;
    }

    getVendorNames() {
        return this._vendorNames;
    }
}

export default new CookieConsentStore();
