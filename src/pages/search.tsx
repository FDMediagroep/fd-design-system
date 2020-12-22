/**
 * Static search page.
 * The search index is hard-coded. For now it's easier than setting up a
 * search engine.
 */
import { GridContainer } from '@fdmg/css-grid/GridContainer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { HorizontalCard3 } from '../components/card/HorizontalCard3';
import styles from './search.module.scss';

import { metaTitle as abTitle, metaDescription as abDescription } from './ab';
import {
    metaTitle as accordionTitle,
    metaDescription as accordionDescription,
} from './accordion';
import {
    metaTitle as articleBulletPointTitle,
    metaDescription as articleBulletPointDescription,
} from './article-bullet-point';
import {
    metaTitle as articleImagePointTitle,
    metaDescription as articleImagePointDescription,
} from './article-image';
import {
    metaTitle as articleInfographicPointTitle,
    metaDescription as articleInfographicPointDescription,
} from './article-infographic';
import {
    metaTitle as articleLatestNewsPointTitle,
    metaDescription as articleLatestNewsPointDescription,
} from './article-latest-news';
import {
    metaTitle as articleLinkBlockPointTitle,
    metaDescription as articleLinkBlockPointDescription,
} from './article-link-block';
import {
    metaTitle as articleLinkCardPointTitle,
    metaDescription as articleLinkCardPointDescription,
} from './article-link-card';
import {
    metaTitle as articleSummaryPointTitle,
    metaDescription as articleSummaryPointDescription,
} from './article-summary';
import {
    metaTitle as articleTagsPointTitle,
    metaDescription as articleTagsPointDescription,
} from './article-tags';
import {
    metaTitle as buttonCtaTitle,
    metaDescription as buttonCtaDescription,
} from './button/cta';
import {
    metaTitle as buttonDefaultTitle,
    metaDescription as buttonDefaultDescription,
} from './button/default';
import {
    metaTitle as buttonFollowTitle,
    metaDescription as buttonFollowDescription,
} from './button/follow';
import {
    metaTitle as buttonGhostTitle,
    metaDescription as buttonGhostDescription,
} from './button/ghost';
import {
    metaTitle as horizontalCard1Title,
    metaDescription as horizontalCard1Description,
} from './card/horizontal-1';
import {
    metaTitle as horizontalCard2Title,
    metaDescription as horizontalCard2Description,
} from './card/horizontal-2';
import {
    metaTitle as horizontalCard3Title,
    metaDescription as horizontalCard3Description,
} from './card/horizontal-3';
import {
    metaTitle as hybridCard1Title,
    metaDescription as hybridCard1Description,
} from './card/hybrid-1';
import {
    metaTitle as hybridCard2Title,
    metaDescription as hybridCard2Description,
} from './card/hybrid-2';
import {
    metaTitle as hybridCard3Title,
    metaDescription as hybridCard3Description,
} from './card/hybrid-3';
import {
    metaTitle as verticalCard1Title,
    metaDescription as verticalCard1Description,
} from './card/vertical-1';
import {
    metaTitle as verticalCard2Title,
    metaDescription as verticalCard2Description,
} from './card/vertical-2';
import {
    metaTitle as verticalCard3Title,
    metaDescription as verticalCard3Description,
} from './card/vertical-3';
import {
    metaTitle as cookieconsentTitle,
    metaDescription as cookieconsentDescription,
} from './cookieconsent';
import {
    metaTitle as financialAgendaTitle,
    metaDescription as financialAgendaDescription,
} from './financial-agenda';
import {
    metaTitle as gridTitle,
    metaDescription as gridDescription,
} from './grid';
import {
    metaTitle as breakingSwitchTitle,
    metaDescription as breakingSwitchDescription,
} from './input/breaking-switch';
import {
    metaTitle as checkboxTitle,
    metaDescription as checkboxDescription,
} from './input/checkbox';
import {
    metaTitle as dateinputTitle,
    metaDescription as dateinputDescription,
} from './input/dateinput';
import {
    metaTitle as emailinputTitle,
    metaDescription as emailinputDescription,
} from './input/emailinput';
import {
    metaTitle as mobileinputTitle,
    metaDescription as mobileinputDescription,
} from './input/mobileinput';
import {
    metaTitle as radioTitle,
    metaDescription as radioDescription,
} from './input/radio';
import {
    metaTitle as selectTitle,
    metaDescription as selectDescription,
} from './input/select';
import {
    metaTitle as switchTitle,
    metaDescription as switchDescription,
} from './input/switch';
import {
    metaTitle as textareaTitle,
    metaDescription as textareaDescription,
} from './input/textarea';
import {
    metaTitle as textinputTitle,
    metaDescription as textinputDescription,
} from './input/textinput';
import {
    metaTitle as modalTitle,
    metaDescription as modalDescription,
} from './modal';
import {
    metaTitle as numberframeTitle,
    metaDescription as numberframeDescription,
} from './numberframe';
import {
    metaTitle as quoteTitle,
    metaDescription as quoteDescription,
} from './quote';
import {
    metaTitle as readmoreTitle,
    metaDescription as readmoreDescription,
} from './readmore';
import {
    metaTitle as stockTickerTitle,
    metaDescription as stockTickerDescription,
} from './stock-ticker';
import {
    metaTitle as textframeTitle,
    metaDescription as textframeDescription,
} from './textframe';
import {
    metaTitle as tokensTitle,
    metaDescription as tokensDescription,
} from './tokens';
import {
    metaTitle as toolbarHorizontalTitle,
    metaDescription as toolbarHorizontalDescription,
} from './toolbar/horizontal';
import {
    metaTitle as toolbarVerticalTitle,
    metaDescription as toolbarVerticalDescription,
} from './toolbar/vertical';
import {
    metaTitle as typographyTitle,
    metaDescription as typographyDescription,
} from './typography';
import {
    metaTitle as wordframeTitle,
    metaDescription as wordframeDescription,
} from './wordframe';
import { TextInput } from '../components/input/TextInput';

type SearchIndex = {
    [x: string]: {
        title: string;
        description: string;
    };
};

const searchIndex: SearchIndex = {
    '/ab': {
        title: abTitle,
        description: abDescription,
    },
    '/accordion': {
        title: accordionTitle,
        description: accordionDescription,
    },
    '/article-bullet-point': {
        title: articleBulletPointTitle,
        description: articleBulletPointDescription,
    },
    '/article-image': {
        title: articleImagePointTitle,
        description: articleImagePointDescription,
    },
    '/article-infographic': {
        title: articleInfographicPointTitle,
        description: articleInfographicPointDescription,
    },
    '/article-latest-news': {
        title: articleLatestNewsPointTitle,
        description: articleLatestNewsPointDescription,
    },
    '/article-link-block': {
        title: articleLinkBlockPointTitle,
        description: articleLinkBlockPointDescription,
    },
    '/article-link-card': {
        title: articleLinkCardPointTitle,
        description: articleLinkCardPointDescription,
    },
    '/article-summary': {
        title: articleSummaryPointTitle,
        description: articleSummaryPointDescription,
    },
    '/article-tags': {
        title: articleTagsPointTitle,
        description: articleTagsPointDescription,
    },
    '/button/cta': {
        title: buttonCtaTitle,
        description: buttonCtaDescription,
    },
    '/button/default': {
        title: buttonDefaultTitle,
        description: buttonDefaultDescription,
    },
    '/button/follow': {
        title: buttonFollowTitle,
        description: buttonFollowDescription,
    },
    '/button/ghost': {
        title: buttonGhostTitle,
        description: buttonGhostDescription,
    },
    '/card/horizontal-1': {
        title: horizontalCard1Title,
        description: horizontalCard1Description,
    },
    '/card/horizontal-2': {
        title: horizontalCard2Title,
        description: horizontalCard2Description,
    },
    '/card/horizontal-3': {
        title: horizontalCard3Title,
        description: horizontalCard3Description,
    },
    '/card/hybrid-1': {
        title: hybridCard1Title,
        description: hybridCard1Description,
    },
    '/card/hybrid-2': {
        title: hybridCard2Title,
        description: hybridCard2Description,
    },
    '/card/hybrid-3': {
        title: hybridCard3Title,
        description: hybridCard3Description,
    },
    '/card/vertical-1': {
        title: verticalCard1Title,
        description: verticalCard1Description,
    },
    '/card/vertical-2': {
        title: verticalCard2Title,
        description: verticalCard2Description,
    },
    '/card/vertical-3': {
        title: verticalCard3Title,
        description: verticalCard3Description,
    },
    '/cookieconsent': {
        title: cookieconsentTitle,
        description: cookieconsentDescription,
    },
    '/financial-agenda': {
        title: financialAgendaTitle,
        description: financialAgendaDescription,
    },
    '/grid': {
        title: gridTitle,
        description: gridDescription,
    },
    '/input/breaking-switch': {
        title: breakingSwitchTitle,
        description: breakingSwitchDescription,
    },
    '/input/checkbox': {
        title: checkboxTitle,
        description: checkboxDescription,
    },
    '/input/dateinput': {
        title: dateinputTitle,
        description: dateinputDescription,
    },
    '/input/emailinput': {
        title: emailinputTitle,
        description: emailinputDescription,
    },
    '/input/mobileinput': {
        title: mobileinputTitle,
        description: mobileinputDescription,
    },
    '/input/radio': {
        title: radioTitle,
        description: radioDescription,
    },
    '/input/select': {
        title: selectTitle,
        description: selectDescription,
    },
    '/input/switch': {
        title: switchTitle,
        description: switchDescription,
    },
    '/input/textarea': {
        title: textareaTitle,
        description: textareaDescription,
    },
    '/input/textinput': {
        title: textinputTitle,
        description: textinputDescription,
    },
    '/modal': {
        title: modalTitle,
        description: modalDescription,
    },
    '/numberframe': {
        title: numberframeTitle,
        description: numberframeDescription,
    },
    '/quote': {
        title: quoteTitle,
        description: quoteDescription,
    },
    '/readmore': {
        title: readmoreTitle,
        description: readmoreDescription,
    },
    '/stock-ticker': {
        title: stockTickerTitle,
        description: stockTickerDescription,
    },
    '/textframe': {
        title: textframeTitle,
        description: textframeDescription,
    },
    '/tokens': {
        title: tokensTitle,
        description: tokensDescription,
    },
    '/toolbar/horizontal': {
        title: toolbarHorizontalTitle,
        description: toolbarHorizontalDescription,
    },
    '/toolbar/vertical': {
        title: toolbarVerticalTitle,
        description: toolbarVerticalDescription,
    },
    '/typography': {
        title: typographyTitle,
        description: typographyDescription,
    },
    '/wordframe': {
        title: wordframeTitle,
        description: wordframeDescription,
    },
};

export default function page() {
    const router = useRouter();
    const searchString =
        typeof router.query.q === 'string'
            ? router.query.q.toLowerCase()
            : router.query.q?.[0].toLowerCase();
    const [results, setResults] = useState<SearchIndex[]>([]);

    useEffect(() => {
        const res = [];
        if (searchIndex) {
            Object.entries(searchIndex).forEach((entry) => {
                if (
                    searchString?.length &&
                    (searchString === '*' ||
                        entry[1].title.toLowerCase().indexOf(searchString) >
                            -1 ||
                        entry[1].description
                            .toLowerCase()
                            .indexOf(searchString) > -1)
                ) {
                    res.push(entry);
                }
            });
            setResults(res);
        }
    }, [searchString]);

    return (
        <section className={styles.search}>
            <Head>
                <title>Search - Design System - Het Financieele Dagblad</title>
                <meta
                    name="description"
                    content="Search components in the FD Design System"
                />
                <meta property="og:title" content="Search FD Design System" />
                <meta
                    property="og:description"
                    content="Search components in the FD Design System"
                />
                <meta
                    property="twitter:title"
                    content="Search FD Design System"
                />
                <meta
                    property="twitter:description"
                    content="Search components in the FD Design System"
                />
            </Head>

            <GridContainer
                className={styles.searchContent}
                attributes={['grid']}
            >
                <GridContainer attributes={['xs-12']}>
                    <form method="GET" action="/search">
                        <div className={styles.searchForm}>
                            {searchString ? (
                                <TextInput
                                    key="searchString"
                                    id="searchString"
                                    className={styles.searchTextInput}
                                    label="Search"
                                    name="q"
                                    aria-label="Search text"
                                    defaultValue={searchString}
                                />
                            ) : (
                                <TextInput
                                    key="noSearchString"
                                    id="searchString"
                                    className={styles.searchTextInput}
                                    label="Search"
                                    name="q"
                                    aria-label="Search text"
                                />
                            )}
                        </div>
                    </form>
                    {results?.length ? <h2>{results.length} Results</h2> : null}
                    <div className={styles.searchResults}>
                        {results.map((result, idx) => {
                            const path = `${result[0]}`;
                            const title = result[1].title;
                            const description = result[1].description;
                            return (
                                <HorizontalCard3
                                    key={idx}
                                    id={path}
                                    title={title}
                                    intro={description}
                                    label="Component"
                                    time=""
                                    url={path}
                                />
                            );
                        })}
                    </div>
                </GridContainer>
            </GridContainer>
        </section>
    );
}
