import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import {
    ArticleImage,
    getCssClassNames,
} from '../components/article-image/ArticleImage';
import PageStore from '../stores/PageStore';

const initialProps = {
    caption: `What a photo`,
    credit: `Foto: ANP`,
    fileName: '8de629dcb6211812af36b6824df2058f83deba9c.jpg',
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
                legend="Image"
                description={
                    <>
                        <p>Used as inline image in articles.</p>
                        <p>This element is used to display an image/photo.</p>
                    </>
                }
            >
                <ArticleImage {...initialProps} />
            </Explain>
        </>
    );
}

export default Page;
