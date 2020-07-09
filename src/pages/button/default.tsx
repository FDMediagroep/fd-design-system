import React from 'react';
import { Explain } from '../../components/Explain';
import { Button, getCssClassNames } from '../../components/button/Button';

function DefaultButton() {
    return (
        <>
            <Explain
                cssClassNames={getCssClassNames()}
                legend="Button (default)"
                description={
                    <>
                        <p>
                            Use to interact with the content: comment, share and
                            vote. Button is also used to show more articles on
                            overviewpages for authors, tags, beurs, dossiers
                            (overview and single dossierpage), search and Mijn
                            nieuws.
                        </p>
                        <p>
                            Supportive: button supports editorial content, but
                            is not the most important item on the page.
                        </p>
                    </>
                }
            >
                <Button id="demoButtonS">Button (small)</Button>
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                legend="Button (M)"
                description={
                    <>
                        <p>
                            Use to interact with the content: comment, share and
                            vote. Button is also used to show more articles on
                            overviewpages for authors, tags, beurs, dossiers
                            (overview and single dossierpage), search and Mijn
                            nieuws.
                        </p>
                        <p>
                            Supportive: button supports editorial content, but
                            is not the most important item on the page.
                        </p>
                    </>
                }
            >
                <Button id="demoButtonM" size="m">
                    Button (medium)
                </Button>
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                legend="Button (L)"
                description={
                    <>
                        <p>
                            Use to interact with the content: comment, share and
                            vote. Button is also used to show more articles on
                            overviewpages for authors, tags, beurs, dossiers
                            (overview and single dossierpage), search and Mijn
                            nieuws.
                        </p>
                        <p>
                            Supportive: button supports editorial content, but
                            is not the most important item on the page.
                        </p>
                    </>
                }
            >
                <Button id="demoButtonL" size="l">
                    Button (large)
                </Button>
            </Explain>
        </>
    );
}

export default DefaultButton;
