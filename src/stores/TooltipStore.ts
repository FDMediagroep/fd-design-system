import { ReSubstitute } from '../utils/ReSubstitute';
import { Summary } from '../components/Tooltip';

class TooltipStore extends ReSubstitute {
    private _summary: Summary;

    setSummary(summary: Summary) {
        this._summary = summary;
        this.trigger();
    }

    getSummary() {
        return this._summary;
    }
}

export default new TooltipStore();
