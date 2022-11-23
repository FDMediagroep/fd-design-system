import React, { useState } from 'react';
import { Explain } from '../src/components/Explain';
import {
    AuthorInfo,
    getCssClassNames,
} from '../src/components/author-info/AuthorInfo';
import styles from './article-link-block.module.scss';
import Head from 'next/head';
import { globalCssClassNames } from '../src/utils/globalCssClassNames';

export const metaTitle = 'Author info';
export const metaDescription =
    'Author info, used to display the author info in articles';
function Page() {
    const [followState, setFollowState] = useState(false);

    function handleFollow() {
        setFollowState(!followState);
    }

    return (
        <>
            <Head>
                <title>
                    {`${metaTitle} - Design System - Het Financieele Dagblad`}
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
                previewClassName={styles.preview}
                legend="Author Info"
                reactComponentName="AuthorInfo"
                description={
                    <>
                        <p>Used to show the author info on the author page.</p>
                        <p>This element is used to display author info.</p>
                    </>
                }
            >
                <AuthorInfo
                    description={
                        <p>
                            Nelleke Trappenburg schrijft bij het FD over
                            pensioenen: dekkingsgraden, beleggingskosten, nieuwe
                            wetgeving etc. Eerder werkte zij onder meer op de
                            beursredactie.
                        </p>
                    }
                    imageUrl="https://images.fd.nl/ffa583e0c7fbc666934ecc326a88defc2773f4e9.jpeg?fit=crop&amp;crop=faces&amp;auto=format&amp;q=45&amp;cs=tinysrgb&amp;w=640&amp;h=640&amp;fm=jpg"
                    title="Nelleke Trappenburg"
                    followed={followState}
                    onEmailClick={console.log}
                    onFollowAuthorClick={handleFollow}
                    onLinkedInClick={console.log}
                    onTwitterClick={console.log}
                />
            </Explain>
        </>
    );
}

export default Page;
