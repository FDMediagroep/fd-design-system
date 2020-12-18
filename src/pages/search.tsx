import { GridContainer } from '@fdmg/css-grid/GridContainer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { HorizontalCard3 } from '../components/card/HorizontalCard3';
import styles from './search.module.scss';

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

type SearchIndex = {
    [x: string]: {
        title: string;
        description: string;
    };
};

const searchIndex: SearchIndex = {
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
                    searchString === '*' ||
                    entry[1].title.toLowerCase().indexOf(searchString) > -1 ||
                    entry[1].description.toLowerCase().indexOf(searchString) >
                        -1
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
                    <h2>Results</h2>
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
