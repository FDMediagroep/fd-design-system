import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import {
    BulletPoint,
    getCssClassNames,
} from '../components/bullet-point/BulletPoint';
import PageStore from '../stores/PageStore';
import styles from './article-bullet-point.module.scss';

const initialProps = {
    bullets: [
        'Ierse Nama geldt als schoolvoorbeeld van een succesvolle ‘bad bank’.',
        'Nama dwong de Ierse banken direct hun verlies te nemen.',
        'De ‘bad bank’ kon zelf de verkoop van slechte leningen timen, waardoor het een betere prijs kon bedingen.',
        'Nama is ook een bron van irritatie vanwege schandalen rond vastgoed en belangenverstrengeling.',
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
            <Explain
                cssClassNames={getCssClassNames()}
                previewClassName={styles.preview}
                legend="Bullet point"
                reactComponentName="BulletPoint"
                description={
                    <>
                        <p>Used as bullet points in articles.</p>
                        <p>This element is used to display bullet points.</p>
                        <p>
                            Note: There is a reference to the arrow icon in the
                            CSS. Make sure your site contains this icon and the
                            CSS points to the correct location.
                        </p>
                    </>
                }
            >
                <BulletPoint {...initialProps} />
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                previewClassName={styles.preview}
                legend="Bullet point (align: right)"
                reactComponentName="BulletPoint"
                description={
                    <>
                        <p>Used as right-aligned bullet points in articles.</p>
                        <p>This element is used to display bullet points.</p>
                        <p>
                            Note: There is a reference to the arrow icon in the
                            CSS. Make sure your site contains this icon and the
                            CSS points to the correct location.
                        </p>
                    </>
                }
            >
                <BulletPoint {...initialProps} alignment="right" />
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                previewClassName={styles.preview}
                legend="Summary (variant-1)"
                reactComponentName="BulletPoint"
                description={
                    <>
                        <p>Used as bullet points in longread articles.</p>
                        <p>This element is used to display bullet points.</p>
                        <p>
                            Note: There is a reference to the arrow icon in the
                            CSS. Make sure your site contains this icon and the
                            CSS points to the correct location.
                        </p>
                    </>
                }
            >
                <BulletPoint {...initialProps} variant="variant-1" />
            </Explain>

            <Explain
                cssClassNames={getCssClassNames()}
                previewClassName={styles.preview}
                legend="Bullet point (variant-1, align: right)"
                reactComponentName="BulletPoint"
                description={
                    <>
                        <p>
                            Used as right-aligned bullet points in longread
                            articles.
                        </p>
                        <p>This element is used to display bullet points.</p>
                        <p>
                            Note: There is a reference to the arrow icon in the
                            CSS. Make sure your site contains this icon and the
                            CSS points to the correct location.
                        </p>
                    </>
                }
            >
                <BulletPoint
                    {...initialProps}
                    variant="variant-1"
                    alignment="right"
                />
            </Explain>
        </>
    );
}

export default Page;
