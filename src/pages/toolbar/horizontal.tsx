import React, { useEffect, useState } from 'react';
import { Explain } from '../../components/Explain';
import {
    HorizontalToolbar,
    getCssClassNames,
    EventType,
    Props as HybridToolbarProps,
} from '../../components/toolbar/HorizontalToolbar';
import PageStore from '../../stores/PageStore';
import Head from 'next/head';

export const metaTitle = 'Horizontal toolbar';
export const metaDescription =
    'Horizontal toolbar, used to display a vertical toolbar on article pages on small devices';

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
                cssClassNames={getCssClassNames()}
                legend="Horizontal toolbar"
                reactComponentName="HorizontalToolbar"
                description={
                    <>
                        <p>
                            Used as Horizontal toolbar on article pages on small
                            devices.
                        </p>
                    </>
                }
            >
                <HorizontalToolbar
                    id="12345"
                    bookmarked={bookmarked}
                    onClick={handleClick}
                />
            </Explain>
        </>
    );
}

export default Page;
