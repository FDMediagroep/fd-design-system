import { ReSubstitute } from '@fdmg/resubstitute';
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

const tooltipStore = new TooltipStore();
export default tooltipStore;
