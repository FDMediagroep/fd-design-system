import React from 'react';
import { Explain } from '../../components/Explain';
import { Switch, getCssClassNames } from '../../components/input/Switch';

function Page() {
    return (
        <>
            <Explain
                cssClassNames={getCssClassNames()}
                legend="Switch"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>This is an example of a switch.</p>
                        <p>
                            Although visually different its functionality is the
                            same as a checkbox.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <Switch
                    id="demoSwitch"
                    label="This is a switch. You can turn me on or off."
                />
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                legend="Switch (default: checked)"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>This is an example of a switch.</p>
                        <p>
                            Although visually different its functionality is the
                            same as a checkbox.
                        </p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <Switch
                    id="demoSwitch"
                    defaultChecked={true}
                    label="Born ready!"
                />
            </Explain>
        </>
    );
}

export default Page;
