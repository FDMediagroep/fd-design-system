import React from 'react';
import { Explain } from '../../components/Explain';
import { LinkCard, getCssClassNames } from '../../components/card/LinkCard';

function Page() {
    return (
        <>
            <Explain
                cssClassNames={getCssClassNames()}
                legend="Link Card"
                description={
                    <>
                        <p>Used to show the LinkCard on the My News page.</p>
                        <p>This element is used to display LinkCard.</p>
                    </>
                }
            >
                <LinkCard
                    link="/mijn-nieuws"
                    title="Beheer"
                    linkText="Ga naar laatste nieuws"
                />
            </Explain>
        </>
    );
}

export default Page;
