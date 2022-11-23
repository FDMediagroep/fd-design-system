import React from 'react';
import styles from './index.module.scss';
import '@fdmg/css-grid/css/grid.css';
import '@fdmg/css-grid/css/flex.css';
import { VerticalCard1 } from '../../src/components/card/VerticalCard1';
import { getPayload } from '../api/fd-web';
import { HybridCard1 } from '../../src/components/card/HybridCard1';
import { HybridCard2 } from '../../src/components/card/HybridCard2';
import Head from 'next/head';
import { GridContainer } from '@fdmg/css-grid/GridContainer';

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
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>
                <p>Last update: {new Date(props.timestamp).toLocaleString()}</p>

                <GridContainer className="top-content" attributes={['grid']}>
                    <GridContainer
                        className="editorial-content"
                        attributes={['xs-12', 'l-9', 'gap-1', 'gap-bottom']}
                    >
                        <GridContainer attributes={['xs-12', 'grid']}>
                            {singleOpeningTeaser && (
                                <GridContainer
                                    className={`ie-full-height ${styles.ie11FullHeight}`}
                                    attributes={['xs-12', 'gap-bottom']}
                                >
                                    <VerticalCard1
                                        id={singleOpeningTeaser.id}
                                        className={`${styles.newsContainer} ${styles.fullHeight}`}
                                        caption={singleOpeningTeaser?.title}
                                        intro={singleOpeningTeaser?.intro}
                                        label={
                                            singleOpeningTeaser?.topicPrefixOrCategory
                                        }
                                        title={singleOpeningTeaser?.title}
                                        url={`${singleOpeningTeaser?.publicationUrl}`}
                                        imageUrl={`${singleOpeningTeaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                        imageUrlS={`${singleOpeningTeaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                        imageUrlM={`${singleOpeningTeaser?.image?.normalUrl}&q=45&w=351&h=234`}
                                        imageUrlL={`${singleOpeningTeaser?.image?.wideUrl}&q=45&w=599&h=399`}
                                    />
                                </GridContainer>
                            )}

                            {props?.data?.highlightedCardsModel?.primaryCards?.map(
                                (teaser) => (
                                    <GridContainer
                                        key={`primary-${teaser.id}`}
                                        className={`ie-full-height ${styles.ie11FullHeight}`}
                                        attributes={[
                                            'xs-12',
                                            's-6',
                                            'l-4',
                                            'gap-1',
                                            'gap-2',
                                            'gap-bottom',
                                        ]}
                                    >
                                        <VerticalCard1
                                            id={teaser.id}
                                            className={`${styles.newsContainer} ${styles.fullHeight}`}
                                            caption={teaser?.title}
                                            intro={teaser?.intro}
                                            label={
                                                teaser?.topicPrefixOrCategory
                                            }
                                            title={teaser?.title}
                                            url={`${teaser?.publicationUrl}`}
                                            imageUrl={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                            imageUrlS={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                            imageUrlM={`${teaser?.image?.normalUrl}&q=45&w=351&h=234`}
                                            imageUrlL={`${teaser?.image?.wideUrl}&q=45&w=599&h=399`}
                                        />
                                    </GridContainer>
                                )
                            )}
                            {props?.data?.highlightedCardsModel?.secondaryCards?.map(
                                (teaser) => (
                                    <GridContainer
                                        key={`primary-${teaser.id}`}
                                        className={`ie-full-height ${styles.ie11FullHeight}`}
                                        attributes={[
                                            'xs-12',
                                            's-6',
                                            'l-4',
                                            'gap-1',
                                            'gap-2',
                                            'gap-bottom',
                                        ]}
                                    >
                                        <VerticalCard1
                                            id={teaser.id}
                                            className={`${styles.newsContainer} ${styles.fullHeight}`}
                                            caption={teaser?.title}
                                            intro={teaser?.intro}
                                            label={
                                                teaser?.topicPrefixOrCategory
                                            }
                                            title={teaser?.title}
                                            url={`${teaser?.publicationUrl}`}
                                            imageUrl={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                            imageUrlS={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                            imageUrlM={`${teaser?.image?.normalUrl}&q=45&w=351&h=234`}
                                            imageUrlL={`${teaser?.image?.wideUrl}&q=45&w=599&h=399`}
                                        />
                                    </GridContainer>
                                )
                            )}
                            {props?.data?.highlightedCardsModel?.tertiaryCards?.map(
                                (teaser) => (
                                    <GridContainer
                                        key={`primary-${teaser.id}`}
                                        className={`ie-full-height ${styles.ie11FullHeight}`}
                                        attributes={[
                                            'xs-12',
                                            's-6',
                                            'l-4',
                                            'gap-1',
                                            'gap-2',
                                            'gap-bottom',
                                        ]}
                                    >
                                        <VerticalCard1
                                            id={teaser.id}
                                            className={`${styles.newsContainer} ${styles.fullHeight}`}
                                            caption={teaser?.title}
                                            intro={teaser?.intro}
                                            label={
                                                teaser?.topicPrefixOrCategory
                                            }
                                            title={teaser?.title}
                                            url={`${teaser?.publicationUrl}`}
                                            imageUrl={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                            imageUrlS={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                            imageUrlM={`${teaser?.image?.normalUrl}&q=45&w=351&h=234`}
                                            imageUrlL={`${teaser?.image?.wideUrl}&q=45&w=599&h=399`}
                                        />
                                    </GridContainer>
                                )
                            )}
                            {props?.data?.highlightedCardsModel?.quaternaryCards?.map(
                                (teaser) => (
                                    <GridContainer
                                        key={`primary-${teaser.id}`}
                                        className={`ie-full-height ${styles.ie11FullHeight}`}
                                        attributes={[
                                            'xs-12',
                                            's-6',
                                            'l-4',
                                            'gap-1',
                                            'gap-2',
                                            'gap-bottom',
                                        ]}
                                    >
                                        <VerticalCard1
                                            id={teaser.id}
                                            className={`${styles.newsContainer} ${styles.fullHeight}`}
                                            caption={teaser?.title}
                                            intro={teaser?.intro}
                                            label={
                                                teaser?.topicPrefixOrCategory
                                            }
                                            title={teaser?.title}
                                            url={`${teaser?.publicationUrl}`}
                                            imageUrl={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                            imageUrlS={`${teaser?.image?.squareUrl}&q=45&w=599&h=399`}
                                            imageUrlM={`${teaser?.image?.normalUrl}&q=45&w=351&h=234`}
                                            imageUrlL={`${teaser?.image?.wideUrl}&q=45&w=599&h=399`}
                                        />
                                    </GridContainer>
                                )
                            )}
                        </GridContainer>
                    </GridContainer>
                    <GridContainer
                        className={`${styles.fullHeight}`}
                        attributes={['xs-12', 'l-3', 'gap-1', 'gap-bottom']}
                    >
                        <div className={`dummy-card full-width`}>
                            latest news
                        </div>
                        <span className={`${styles.sticky} hide-lt-xl`}>
                            AD
                        </span>
                    </GridContainer>

                    {props?.data?.categoryCardsModel?.sectionModels?.map(
                        (sectionModel) => {
                            if (!sectionModel?.defaultCategoryModel) {
                                return null;
                            }
                            return (
                                <>
                                    <GridContainer
                                        attributes={['grid', 'xs-12']}
                                    >
                                        <GridContainer attributes={['xs-12']}>
                                            <h1>
                                                {
                                                    sectionModel
                                                        ?.defaultCategoryModel
                                                        ?.title
                                                }
                                            </h1>
                                            <hr />
                                        </GridContainer>
                                        <GridContainer
                                            className="no-gap-bottom-s"
                                            attributes={[
                                                'grid',
                                                'xs-12',
                                                'gap-bottom',
                                            ]}
                                        >
                                            {sectionModel?.defaultCategoryModel?.cards?.map(
                                                (card) => {
                                                    if (
                                                        sectionModel
                                                            .defaultCategoryModel
                                                            .id ===
                                                        'section-news'
                                                    ) {
                                                        return (
                                                            <GridContainer
                                                                key={`${sectionModel.defaultCategoryModel.title}-${card.id}`}
                                                                className={`ie-full-height ${styles.ie11FullHeight}`}
                                                                attributes={[
                                                                    'xs-12',
                                                                    's-6',
                                                                    'l-3',
                                                                    'gap-1',
                                                                    'gap-3',
                                                                    'gap-bottom',
                                                                ]}
                                                            >
                                                                <HybridCard1
                                                                    id={card.id}
                                                                    className={`${styles.newsContainer} ${styles.fullHeight}`}
                                                                    caption={
                                                                        card?.title
                                                                    }
                                                                    intro={
                                                                        card?.intro
                                                                    }
                                                                    label={
                                                                        card?.topicPrefixOrCategory
                                                                    }
                                                                    title={
                                                                        card?.title
                                                                    }
                                                                    url={`${card?.publicationUrl}`}
                                                                />
                                                            </GridContainer>
                                                        );
                                                    } else {
                                                        return (
                                                            <GridContainer
                                                                key={`${sectionModel.defaultCategoryModel.title}-${card.id}`}
                                                                className={`ie-full-height ${styles.ie11FullHeight}`}
                                                                attributes={[
                                                                    'xs-12',
                                                                    's-6',
                                                                    'l-3',
                                                                    'gap-1',
                                                                    'gap-3',
                                                                    'gap-bottom',
                                                                ]}
                                                            >
                                                                <HybridCard2
                                                                    id={card.id}
                                                                    className={`${styles.newsContainer} ${styles.fullHeight}`}
                                                                    caption={
                                                                        card?.title
                                                                    }
                                                                    intro={
                                                                        card?.intro
                                                                    }
                                                                    label={
                                                                        card?.topicPrefixOrCategory
                                                                    }
                                                                    title={
                                                                        card?.title
                                                                    }
                                                                    url={`${card?.publicationUrl}`}
                                                                />
                                                            </GridContainer>
                                                        );
                                                    }
                                                }
                                            )}
                                        </GridContainer>
                                    </GridContainer>
                                </>
                            );
                        }
                    )}

                    <GridContainer attributes={['grid', 'xs-12']}>
                        <GridContainer attributes={['xs-12']}>
                            <h1>Dagoverzicht</h1>
                            <hr />
                            <GridContainer attributes={['grid', 'xs-12']}>
                                <GridContainer
                                    attributes={[
                                        'xs-12',
                                        'm-6',
                                        'l-4',
                                        'gap-1',
                                        'gap-2',
                                        'gap-bottom',
                                    ]}
                                >
                                    <h2>Algemeen</h2>
                                </GridContainer>
                                <GridContainer
                                    attributes={[
                                        'xs-12',
                                        'm-6',
                                        'l-4',
                                        'gap-1',
                                        'gap-2',
                                        'gap-bottom',
                                    ]}
                                >
                                    <h2>Achtergrond</h2>
                                    <h2>Beurs</h2>
                                    <h2>Columns &amp; Opinie</h2>
                                </GridContainer>
                                <GridContainer
                                    attributes={[
                                        'xs-12',
                                        'l-4',
                                        'gap-1',
                                        'gap-2',
                                        'gap-bottom',
                                    ]}
                                >
                                    <h2>Tech &amp; Innovatie</h2>
                                    <h2>FD Persoonlijk</h2>
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>
                    </GridContainer>
                </GridContainer>
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
    const data = await getPayload(params);

    // try {
    //     const breakingList = await fetch(
    //         `${process.env.FDMG_EDITORIAL_SERVICE_URL}/fd/lists/articles/home.fd4.breakingnews`,
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${process.env.FDMG_SERVICES_TOKEN}`,
    //             },
    //         }
    //     ).then((res) => res.json());
    //     const openingList = await fetch(
    //         `${process.env.FDMG_EDITORIAL_SERVICE_URL}/fd/lists/articles/home.fd4.opening`,
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${process.env.FDMG_SERVICES_TOKEN}`,
    //             },
    //         }
    //     ).then((res) => res.json());
    //     const highlightedList = await fetch(
    //         `${process.env.FDMG_EDITORIAL_SERVICE_URL}/fd/lists/articles/home.fd4.highlighted`,
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${process.env.FDMG_SERVICES_TOKEN}`,
    //             },
    //         }
    //     ).then((res) => res.json());
    //     console.log(breakingList, openingList, highlightedList);
    // } catch (e) {
    //     console.error(e);
    // }

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
