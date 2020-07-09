import React, { useState } from 'react';
import { Explain } from '../components/Explain';
import {
    AuthorInfo,
    getCssClassNames,
} from '../components/author-info/AuthorInfo';
import styles from './article-link-block.module.scss';

function Page() {
    const [followState, setFollowState] = useState(false);

    function handleFollow() {
        setFollowState(!followState);
    }

    return (
        <>
            <Explain
                cssClassNames={getCssClassNames()}
                previewClassName={styles.preview}
                legend="Author Info"
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
                    onEmailClick={() => {}}
                    onFollowAuthorClick={handleFollow}
                    onLinkedInClick={() => {}}
                    onTwitterClick={() => {}}
                />
            </Explain>
        </>
    );
}

export default Page;
