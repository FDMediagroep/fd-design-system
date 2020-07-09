import React from 'react';
import { Explain } from '../../components/Explain';
import { Radio, getCssClassNames } from '../../components/input/Radio';

function Page() {
    return (
        <>
            <Explain
                cssClassNames={getCssClassNames()}
                previewFlexDirection="row"
                legend="Radio"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of a radio button group without
                            initial selection. Radio buttons gives the user
                            options of which only one can be chosen.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <>
                    <Radio id="bluePill" name="pills" label="Blue pill" />
                    <Radio id="redPill" name="pills" label="Red pill" />
                </>
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                previewFlexDirection="row"
                legend="Radio (default: checked)"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>
                            This is an example of a radio button group. Radio
                            buttons gives the user options of which only one can
                            be chosen.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <>
                    <Radio id="left" name="directions" label="Left" />
                    <Radio
                        id="redPill"
                        name="directions"
                        label="Right"
                        defaultChecked={true}
                    />
                </>
            </Explain>
        </>
    );
}

export default Page;
