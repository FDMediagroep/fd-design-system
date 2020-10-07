import { ReSubstitute } from '../utils/ReSubstitute';

export enum Theme {
    SYSTEM = 'system',
    DARK = 'dark',
    LIGHT = 'light',
}

class ThemeStore extends ReSubstitute {
    private _theme: Theme = Theme.SYSTEM;

    setTheme(theme: Theme) {
        this._theme = theme;
        this.trigger();
    }

    getTheme() {
        return this._theme;
    }
}

export default new ThemeStore();
