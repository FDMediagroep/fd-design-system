import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import { Quote, getCssClassNames } from '../components/quote/Quote';
import PageStore from '../stores/PageStore';

const initialProps = {
    blockquote: `Je moet je afvragen wat er gebeurt als je één partij hebt – in
de meeste gevallen de man – die geld heeft voor een advocaat en
de andere partij niet. Hoe werkt dat in een echtscheidingszaak?`,
    figcaption: `Bregje Dijksterhuis, rechtssocioloog VU`,
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
                legend="Inline Quote"
                reactComponentName="Quote"
                description={
                    <>
                        <p>Used as inline content in articles.</p>
                        <p>This element is solely used to display a quote.</p>
                    </>
                }
            >
                <Quote {...initialProps} />
            </Explain>
        </>
    );
}

export default Page;
