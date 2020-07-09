import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import { ReadMore, getCssClassNames } from '../components/readmore/ReadMore';
import PageStore from '../stores/PageStore';

const initialProps = {
    title: `Ridiculus Sollicitudin Cras Ipsum Ornare`,
    links: [
        `Lees <a href="https://fd.nl">het FD</a>`,
        `Of luister naar <a href="https://bnr.nl">bnr.nl</a>`,
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
                bgcolor="var(--product-background-2)"
                cssClassNames={getCssClassNames()}
                legend="ReadMore"
                description={
                    <>
                        <p>Used as inline content in articles.</p>
                        <p>
                            This element is used to display an element with
                            links related to a certain topic as described by the
                            title.
                        </p>
                    </>
                }
            >
                <ReadMore {...initialProps} />
            </Explain>

            <Explain
                bgcolor="var(--product-background-2)"
                cssClassNames={getCssClassNames()}
                legend="ReadMore (variant-1)"
                description={
                    <>
                        <p>Used as inline content in longread articles.</p>
                        <p>
                            This element is used to display an element with
                            links related to a certain topic as described by the
                            title.
                        </p>
                    </>
                }
            >
                <ReadMore {...initialProps} variant="variant-1" />
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                legend="ReadMore (variant-2)"
                description={
                    <>
                        <p>Used as inline content in persoonlijk articles.</p>
                        <p>
                            This element is used to display an element with
                            links related to a certain topic as described by the
                            title.
                        </p>
                    </>
                }
            >
                <ReadMore {...initialProps} variant="variant-2" />
            </Explain>
        </>
    );
}

export default Page;
