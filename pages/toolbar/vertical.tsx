import React, { useEffect, useState } from 'react';
import { Explain } from '../../src/components/Explain';
import {
    VerticalToolbar,
    getCssClassNames,
    EventType,
    Props as HybridToolbarProps,
} from '../../src/components/toolbar/VerticalToolbar';
import PageStore from '../../src/stores/PageStore';
import Head from 'next/head';
import { globalCssClassNames } from '../../src/utils/globalCssClassNames';

export const metaTitle = 'Vertical toolbar';
export const metaDescription =
    'Vertical toolbar, used to display a vertical toolbar on article pages';

function Page() {
    const [bookmarked, setBookmarked] = useState(false);
    /**
     * Use article background.
     */
    useEffect(() => {
        PageStore.setPageType('article');

        return () => {
            PageStore.setPageType('overview');
        };
    }, []);

    function handleClick(type: EventType, props: HybridToolbarProps) {
        switch (type) {
            case EventType.BOOKMARK:
                setBookmarked(!bookmarked);
                break;
            default:
                console.log(type, props);
        }
    }

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
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Vertical toolbar"
                previewFlexDirection="row"
                reactComponentName="VerticalToolbar"
                description={
                    <>
                        <p>Used as Vertical toolbar on article pages.</p>
                    </>
                }
            >
                <VerticalToolbar
                    id="12345"
                    bookmarked={bookmarked}
                    onClick={handleClick}
                />
            </Explain>
        </>
    );
}

export default Page;
