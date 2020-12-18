import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import { ReadMore, getCssClassNames } from '../components/readmore/ReadMore';
import PageStore from '../stores/PageStore';
import Head from 'next/head';

const initialProps = {
    title: `Ridiculus Sollicitudin Cras Ipsum Ornare`,
    links: [
        `Lees <a href="https://fd.nl">het FD</a>`,
        `Of luister naar <a href="https://bnr.nl">bnr.nl</a>`,
    ],
};

export const metaTitle = 'Read more';
export const metaDescription =
    'Read more, used to display links related to the article';
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
            <Head>
                <title>
                    {metaTitle} - Design System - Het Financieele Dagblad
                </title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="twitter:title" content={metaTitle} />
                <meta
                    property="twitter:description"
                    content={metaDescription}
                />
            </Head>

            <Explain
                anchor="default"
                bgcolor="var(--product-background-2)"
                cssClassNames={getCssClassNames()}
                legend="ReadMore"
                reactComponentName="ReadMore"
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
                anchor="variant-1"
                bgcolor="var(--product-background-2)"
                cssClassNames={getCssClassNames()}
                legend="ReadMore (variant-1)"
                reactComponentName="ReadMore"
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
                anchor="variant-2"
                cssClassNames={getCssClassNames()}
                legend="ReadMore (variant-2)"
                reactComponentName="ReadMore"
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
