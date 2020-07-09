import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import {
    InfographicExtended,
    getCssClassNames,
} from '../components/article-image/Infographic';
import PageStore from '../stores/PageStore';

const initialProps = {
    smallImageUrl:
        'https://fd-external-development.imgix.net/4b0ae3bd28b53f3330a894d02fceda9cba789e79.png',
    largeImageUrl:
        'https://fd-external-development.imgix.net/83122edfd074e501eb2bccec93df979e64942b26.png',
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
                legend="Infographic"
                description={
                    <>
                        <p>Used as inline infographic in articles.</p>
                        <p>This element is used to display an infographic.</p>
                    </>
                }
            >
                <InfographicExtended {...initialProps} />
            </Explain>
        </>
    );
}

export default Page;
