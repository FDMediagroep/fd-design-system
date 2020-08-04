import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import {
    LinkBlock,
    getCssClassNames,
} from '../components/article-link-block/LinkBlock';
import PageStore from '../stores/PageStore';
import styles from './article-link-block.module.scss';

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
                previewClassName={styles.preview}
                legend="Link Block"
                reactComponentName="LinkBlock"
                description={
                    <>
                        <p>Used to show the link block on article page.</p>
                        <p>This element is used to display link block.</p>
                    </>
                }
            >
                <LinkBlock
                    title="Lees ook"
                    description="Honderden ambtenaren vragen Blok: maak ons departement diverser"
                    url="https://dev.fd.nl/ondernemen/1254849/douane-20-tot-30-meer-aangiftes-door-groei-in-webwinkelen"
                />
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                previewClassName={styles.preview}
                legend="Link Block (align: right)"
                reactComponentName="LinkBlock"
                description={
                    <>
                        <p>Used to show the link block on article page.</p>
                        <p>This element is used to display link block.</p>
                    </>
                }
            >
                <LinkBlock
                    title="Lees ook"
                    description="Honderden ambtenaren vragen Blok: maak ons departement diverser"
                    url="https://dev.fd.nl/ondernemen/1254849/douane-20-tot-30-meer-aangiftes-door-groei-in-webwinkelen"
                    position="right"
                />
            </Explain>
        </>
    );
}

export default Page;
