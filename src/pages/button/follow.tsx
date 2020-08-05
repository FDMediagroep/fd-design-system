import React from 'react';
import { Explain } from '../../components/Explain';
import {
    ButtonFollow,
    getCssClassNames,
} from '../../components/button/ButtonFollow';
import { useState } from 'react';
import Head from 'next/head';
const metaTitle = 'Follow button';
const metaDescription = 'Follow Button, used to follow content';
function Follow() {
    const [followState, setFollowState] = useState(false);
    const [followState2, setFollowState2] = useState(true);

    function handleFollow() {
        setFollowState(!followState);
    }

    function handleFollow2() {
        setFollowState2(!followState2);
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
                <meta property="twitter:title" content="FD Design System" />
                <meta
                    property="twitter:description"
                    content={metaDescription}
                />
            </Head>

            <Explain
                cssClassNames={getCssClassNames()}
                legend="Follow button (default)"
                reactComponentName="ButtonFollow"
                description={
                    <>
                        <p>Use to follow content.</p>
                    </>
                }
            >
                <ButtonFollow
                    id="demoButton1"
                    tag="tag1"
                    selected={followState}
                    onClick={handleFollow}
                >
                    Volg
                </ButtonFollow>
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                legend="Follow button (following)"
                reactComponentName="ButtonFollow"
                description={
                    <>
                        <p>Use to follow content.</p>
                    </>
                }
            >
                <ButtonFollow
                    id="demoButton2"
                    tag="tag1"
                    selected={followState2}
                    onClick={handleFollow2}
                >
                    Volg
                </ButtonFollow>
            </Explain>
        </>
    );
}

export default Follow;
