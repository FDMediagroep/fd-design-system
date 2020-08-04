import React from 'react';
import { Explain } from '../../components/Explain';
import { Checkbox, getCssClassNames } from '../../components/input/Checkbox';

function Page() {
    return (
        <>
            <Explain
                cssClassNames={getCssClassNames()}
                legend="Checkbox"
                reactComponentName="Checkbox"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>This is an example of a checkbox.</p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <Checkbox
                    id="demoCheckbox"
                    label="This is a checkbox. You can turn me on or off."
                />
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                legend="Checkbox (default: checked)"
                description={
                    <>
                        <p>Can be used in forms.</p>
                        <p>This is an example of a checkbox.</p>
                        <p>
                            Only the HTML and CSS are necessary to create the
                            input field along with all the interactions. No
                            JavaScript required.
                        </p>
                    </>
                }
            >
                <Checkbox
                    id="demoCheckbox"
                    defaultChecked={true}
                    label="Born ready!"
                />
            </Explain>
        </>
    );
}

export default Page;
