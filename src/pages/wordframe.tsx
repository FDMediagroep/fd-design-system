import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import { WordFrame, getCssClassNames } from '../components/wordframe/WordFrame';
import PageStore from '../stores/PageStore';

const initialProps = {
    title: `WordFrame test`,
    description: `Aenean lacinia bibendum nulla sed consectetur. Donec id elit non
mi porta gravida at eget metus. Cum sociis natoque penatibus et
magnis dis parturient montes, nascetur ridiculus mus.`,
};

function Index() {
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
                legend="WordFrame"
                reactComponentName="WordFrame"
                description={
                    <>
                        <p>Used as inline content in articles.</p>
                        <p>
                            Even though it's possible to pass a title and a
                            description. Nowadays only the title is used.
                        </p>
                    </>
                }
            >
                <WordFrame {...initialProps} />
            </Explain>
        </>
    );
}

export default Index;
