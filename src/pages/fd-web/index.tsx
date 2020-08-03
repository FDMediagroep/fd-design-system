import React from 'react';
import styles from './index.module.scss';
import { VerticalCard1 } from '../../components/card/VerticalCard1';
import { getPayload } from '../api/fd-web';
import { HybridCard1 } from '../../components/card/HybridCard1';
import { VerticalCard3 } from '../../components/card/VerticalCard3';
import { HybridCard2 } from '../../components/card/HybridCard2';

interface Props {
    data: any;
    timestamp?: string;
}

function Page(props: Props) {
    const breakingTeaser = props?.data?.highlightedCardsModel?.breakingTeaser;
    const singleOpeningTeaser =
        props?.data?.highlightedCardsModel?.singleOpeningTeaser;
    try {
        return (
            <section className={styles.page}>
                <p>Last update: {new Date(props.timestamp).toLocaleString()}</p>

                <section className={styles.topNews}>
                    <main>
                        {breakingTeaser && (
                            <section className={styles.category}>
                                <VerticalCard3
                                    id={breakingTeaser.id}
                                    className={styles.newsContainer}
                                    caption={breakingTeaser?.title}
                                    intro={breakingTeaser?.intro}
                                    label={
                                        breakingTeaser?.topicPrefixOrCategory
                                    }
                                    theme={
                                        breakingTeaser?.image?.backgroundColor
                                    }
                                    title={breakingTeaser?.title}
                                    url={`https://dev.fd.nl${breakingTeaser?.publicationUrl}`}
                                    imageUrl={`${breakingTeaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                    imageUrlS={`${breakingTeaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                    imageUrlM={`${breakingTeaser?.image?.normalUrl}&q=45&w=351&h=234`}
                                    imageUrlL={`${breakingTeaser?.image?.wideUrl}&q=45&w=599&h=399`}
                                />
                            </section>
                        )}
                        {singleOpeningTeaser && (
                            <section className={styles.category}>
                                <VerticalCard3
                                    id={singleOpeningTeaser.id}
                                    className={styles.newsContainer}
                                    caption={singleOpeningTeaser?.title}
                                    intro={singleOpeningTeaser?.intro}
                                    label={
                                        singleOpeningTeaser?.topicPrefixOrCategory
                                    }
                                    theme={
                                        singleOpeningTeaser?.image
                                            ?.backgroundColor
                                    }
                                    title={singleOpeningTeaser?.title}
                                    url={`https://dev.fd.nl${singleOpeningTeaser?.publicationUrl}`}
                                    imageUrl={`${singleOpeningTeaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                    imageUrlS={`${singleOpeningTeaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                    imageUrlM={`${singleOpeningTeaser?.image?.normalUrl}&q=45&w=351&h=234`}
                                    imageUrlL={`${singleOpeningTeaser?.image?.wideUrl}&q=45&w=599&h=399`}
                                />
                            </section>
                        )}

                        {props?.data?.highlightedCardsModel?.primaryCards
                            ?.length > 0 && (
                            <section className={styles.category}>
                                {props?.data?.highlightedCardsModel?.primaryCards?.map(
                                    (teaser) => (
                                        <VerticalCard3
                                            key={`primary-${teaser.id}`}
                                            id={teaser.id}
                                            className={styles.newsContainer}
                                            caption={teaser?.title}
                                            intro={teaser?.intro}
                                            label={
                                                teaser?.topicPrefixOrCategory
                                            }
                                            theme={
                                                teaser?.image?.backgroundColor
                                            }
                                            title={teaser?.title}
                                            url={`https://dev.fd.nl${teaser?.publicationUrl}`}
                                            imageUrl={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                            imageUrlS={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                            imageUrlM={`${teaser?.image?.normalUrl}&q=45&w=351&h=234`}
                                            imageUrlL={`${teaser?.image?.wideUrl}&q=45&w=599&h=399`}
                                        />
                                    )
                                )}
                            </section>
                        )}

                        {props?.data?.highlightedCardsModel?.secondaryCards
                            ?.length > 0 && (
                            <section className={styles.category}>
                                {props?.data?.highlightedCardsModel?.secondaryCards?.map(
                                    (teaser) => (
                                        <VerticalCard1
                                            key={`secondary1-${teaser.id}`}
                                            id={teaser.id}
                                            className={styles.newsContainer}
                                            caption={teaser?.title}
                                            intro={teaser?.intro}
                                            label={
                                                teaser?.topicPrefixOrCategory
                                            }
                                            title={teaser?.title}
                                            theme={
                                                teaser?.image?.backgroundColor
                                            }
                                            url={`https://dev.fd.nl${teaser?.publicationUrl}`}
                                            imageUrl={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                            imageUrlS={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                            imageUrlM={`${teaser?.image?.normalUrl}&q=45&w=351&h=234`}
                                            imageUrlL={`${teaser?.image?.wideUrl}&q=45&w=599&h=399`}
                                        />
                                    )
                                )}
                            </section>
                        )}
                        {props?.data?.highlightedCardsModel?.tertiaryCards
                            ?.length > 0 && (
                            <section className={styles.category}>
                                {props?.data?.highlightedCardsModel?.tertiaryCards?.map(
                                    (teaser) => (
                                        <VerticalCard1
                                            key={`secondary2-${teaser.id}`}
                                            id={teaser.id}
                                            className={styles.newsContainer}
                                            caption={teaser?.title}
                                            intro={teaser?.intro}
                                            label={
                                                teaser?.topicPrefixOrCategory
                                            }
                                            title={teaser?.title}
                                            theme={
                                                teaser?.image?.backgroundColor
                                            }
                                            url={`https://dev.fd.nl${teaser?.publicationUrl}`}
                                            imageUrl={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                            imageUrlS={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                            imageUrlM={`${teaser?.image?.normalUrl}&q=45&w=351&h=234`}
                                            imageUrlL={`${teaser?.image?.wideUrl}&q=45&w=599&h=399`}
                                        />
                                    )
                                )}
                            </section>
                        )}
                        {props?.data?.highlightedCardsModel?.quaternaryCards
                            ?.length > 0 && (
                            <section className={styles.category}>
                                {props?.data?.highlightedCardsModel?.quaternaryCards?.map(
                                    (teaser) => (
                                        <VerticalCard1
                                            key={`secondary3-${teaser.id}`}
                                            id={teaser.id}
                                            className={styles.newsContainer}
                                            caption={teaser?.title}
                                            intro={teaser?.intro}
                                            label={
                                                teaser?.topicPrefixOrCategory
                                            }
                                            title={teaser?.title}
                                            theme={
                                                teaser?.image?.backgroundColor
                                            }
                                            url={`https://dev.fd.nl${teaser?.publicationUrl}`}
                                            imageUrl={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                            imageUrlS={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                            imageUrlM={`${teaser?.image?.normalUrl}&q=45&w=351&h=234`}
                                            imageUrlL={`${teaser?.image?.wideUrl}&q=45&w=599&h=399`}
                                        />
                                    )
                                )}
                            </section>
                        )}
                    </main>
                    <aside>
                        <p>aside</p>
                    </aside>
                </section>

                <h1>Nieuws</h1>
                <section className={styles.category}>
                    {props?.data?.categoryCardsModel?.newsTeasers?.map(
                        (teaser) => (
                            <HybridCard2
                                key={`nieuws-${teaser.id}`}
                                id={teaser.id}
                                className={styles.newsContainer}
                                caption={teaser?.title}
                                intro={teaser?.intro}
                                label={teaser?.topicPrefixOrCategory}
                                title={teaser?.title}
                                url={`https://dev.fd.nl${teaser?.publicationUrl}`}
                            />
                        )
                    )}
                </section>

                <h1>Achtergrond</h1>
                <section className={styles.category}>
                    {props?.data?.categoryCardsModel?.longReadTeasers?.map(
                        (teaser) => (
                            <HybridCard1
                                className={styles.newsContainer}
                                key={`achtergrond-${teaser.id}`}
                                variant="variant-1"
                                id={teaser.id}
                                caption={teaser?.image?.caption}
                                intro={teaser?.intro}
                                label={teaser?.topicPrefixOrCategory}
                                title={teaser?.title}
                                theme={teaser?.image?.backgroundColor}
                                url={`https://dev.fd.nl${teaser?.publicationUrl}`}
                                imageUrl={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                imageUrlS={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                imageUrlM={`${teaser?.image?.normalUrl}&q=45&w=351&h=234`}
                                imageUrlL={`${teaser?.image?.wideUrl}&q=45&w=599&h=399`}
                            />
                        )
                    )}
                </section>

                <h1>Beurs</h1>
                <section className={styles.category}>
                    {props?.data?.categoryCardsModel?.beursTeasers?.map(
                        (teaser) => (
                            <HybridCard1
                                key={`beurs-${teaser.id}`}
                                id={teaser.id}
                                className={styles.newsContainer}
                                caption={teaser?.image?.caption}
                                intro={teaser?.intro}
                                label={teaser?.topicPrefixOrCategory}
                                title={teaser?.title}
                                theme={teaser?.image?.backgroundColor}
                                url={`https://dev.fd.nl${teaser?.publicationUrl}`}
                                imageUrl={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                imageUrlS={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                imageUrlM={`${teaser?.image?.normalUrl}&q=45&w=351&h=234`}
                                imageUrlL={`${teaser?.image?.wideUrl}&q=45&w=599&h=399`}
                            />
                        )
                    )}
                </section>

                <h1>Columns &amp; Opinie</h1>
                <section className={styles.category}>
                    {props?.data?.categoryCardsModel?.opinionTeasers?.map(
                        (teaser) => (
                            <HybridCard1
                                key={`opinion-${teaser.id}`}
                                id={teaser.id}
                                className={styles.newsContainer}
                                caption={teaser?.image?.caption}
                                intro={teaser?.intro}
                                label={teaser?.topicPrefixOrCategory}
                                title={teaser?.title}
                                theme={teaser?.image?.backgroundColor}
                                url={`https://dev.fd.nl${teaser?.publicationUrl}`}
                                imageUrl={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                imageUrlS={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                imageUrlM={`${teaser?.image?.normalUrl}&q=45&w=351&h=234`}
                                imageUrlL={`${teaser?.image?.wideUrl}&q=45&w=599&h=399`}
                            />
                        )
                    )}
                </section>

                <h1>Tech &amp; Innovatie</h1>
                <section className={styles.category}>
                    {props?.data?.categoryCardsModel?.futuresTeasers?.map(
                        (teaser) => (
                            <HybridCard1
                                key={`futures-${teaser.id}`}
                                id={teaser.id}
                                className={styles.newsContainer}
                                caption={teaser?.image?.caption}
                                intro={teaser?.intro}
                                label={teaser?.topicPrefixOrCategory}
                                title={teaser?.title}
                                theme={teaser?.image?.backgroundColor}
                                url={`https://dev.fd.nl${teaser?.publicationUrl}`}
                                imageUrl={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                imageUrlS={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                imageUrlM={`${teaser?.image?.normalUrl}&q=45&w=351&h=234`}
                                imageUrlL={`${teaser?.image?.wideUrl}&q=45&w=599&h=399`}
                            />
                        )
                    )}
                </section>

                <h1>Persoonlijk</h1>
                <section className={styles.category}>
                    {props?.data?.categoryCardsModel?.persoonlijkTeasers?.map(
                        (teaser) => (
                            <HybridCard1
                                key={`persoonlijk-${teaser.id}`}
                                id={teaser.id}
                                className={styles.newsContainer}
                                caption={teaser?.image?.caption}
                                intro={teaser?.intro}
                                label={teaser?.topicPrefixOrCategory}
                                title={teaser?.title}
                                theme={teaser?.image?.backgroundColor}
                                url={`https://dev.fd.nl${teaser?.publicationUrl}`}
                                imageUrl={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                imageUrlS={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                imageUrlM={`${teaser?.image?.normalUrl}&q=45&w=351&h=234`}
                                imageUrlL={`${teaser?.image?.wideUrl}&q=45&w=599&h=399`}
                            />
                        )
                    )}
                </section>
            </section>
        );
    } catch (e) {
        console.error(e);
        return (
            <textarea
                defaultValue={JSON.stringify(props.data, null, 2)}
                style={{ width: '100%' }}
                rows={15}
            />
        );
    }
}

export async function getStaticProps({ params }) {
    let data = await getPayload(params);

    return {
        props: {
            data,
            timestamp: +new Date(),
        },
        // we will attempt to re-generate the page:
        // - when a request comes in
        // - at most once every 10 seconds
        revalidate: 10,
    };
}

export default Page;
