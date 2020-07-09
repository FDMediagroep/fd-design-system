import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import {
    Summary,
    getCssClassNames,
} from '../components/article-summary/Summary';
import PageStore from '../stores/PageStore';

const initialProps = {
    title: 'In het kort',
    summaries: [
        'Het kabinet vroeg softwarebouwers dit weekend mee te denken over een nieuwe app.',
        'De deadline voor plannen is dinsdag al, eind deze maand moet de oplossing klaar zijn voor productie.',
        'Experts zijn niet te spreken over die grote haast, zij vrezen een verlies aan draagvlak onder de bevolking.',
    ],
};

function Page() {
    /**
     * Use article background.
     */
    useEffect(() => {
        PageStore.setPageType('article');

        return () => {
            PageStore.setPageType('overview');
        };
    }, []);

    return (
        <>
            <Explain
                cssClassNames={getCssClassNames()}
                legend="Summary"
                description={
                    <>
                        <p>Used as summary in articles.</p>
                        <p>This element is used to display a summary.</p>
                    </>
                }
            >
                <Summary {...initialProps} />
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                legend="Summary (variant-1)"
                description={
                    <>
                        <p>Used as summary in longread articles.</p>
                        <p>This element is used to display a summary.</p>
                    </>
                }
            >
                <Summary {...initialProps} variant="variant-1" />
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                legend="Summary (variant-2)"
                description={
                    <>
                        <p>Used as summary in persoonlijk articles.</p>
                        <p>This element is used to display a summary.</p>
                    </>
                }
            >
                <Summary {...initialProps} variant="variant-2" />
            </Explain>
        </>
    );
}

export default Page;
