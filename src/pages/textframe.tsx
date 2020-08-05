import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import { TextFrame, getCssClassNames } from '../components/textframe/TextFrame';
import PageStore from '../stores/PageStore';
import Head from 'next/head';

const initialProps = {
    title:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet',
    descriptions: [
        `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.`,
    ],
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
            <Head>
                <title>
                    Text frame - Design System - Het Financieele Dagblad
                </title>
                <meta
                    name="description"
                    content="Text frame, used to display an inline text frame in articles"
                />
            </Head>

            <Explain
                cssClassNames={getCssClassNames()}
                legend="TextFrame"
                reactComponentName="TextFrame"
                description={
                    <>
                        <p>Used as text-frame in articles.</p>
                        <p>This element is used to display a text-frame.</p>
                    </>
                }
            >
                <TextFrame {...initialProps} />
            </Explain>
        </>
    );
}

export default Page;
