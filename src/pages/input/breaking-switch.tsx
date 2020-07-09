import React, { useState } from 'react';
import { Explain } from '../../components/Explain';
import {
    BreakingSwitch,
    getCssClassNames,
} from '../../components/input/BreakingSwitch';

function Page() {
    const [checked, setChecked] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setChecked(e.currentTarget.checked);
    }

    return (
        <>
            <Explain
                cssClassNames={getCssClassNames()}
                legend="Breaking Switch"
                description={
                    <>
                        <p>Is used on the my news page.</p>
                        <p>This is an example of a Breaking Alert Switch.</p>
                    </>
                }
            >
                <BreakingSwitch checked={checked} onChange={handleChange} />
            </Explain>
        </>
    );
}

export default Page;
