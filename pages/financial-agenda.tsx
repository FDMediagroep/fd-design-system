import React, { useEffect } from 'react';
import { Explain } from '../src/components/Explain';
import {
    FinancialAgenda,
    getCssClassNames,
} from '../src/components/financial-agenda/FinancialAgenda';
import PageStore from '../src/stores/PageStore';
import Head from 'next/head';
import { globalCssClassNames } from '../src/utils/globalCssClassNames';

const data = [
    {
        date: '25 mei',
        source: 'VK',
        description: 'Bankholiday - financiële markten gesloten',
    },
    {
        date: '25 mei',
        source: 'VS',
        description: 'Memorial day - financiële markten gesloten',
    },
    {
        date: '25 mei',
        source: 'IFO-index',
        description: 'Ondernemersklimaat Duitsland',
    },
    {
        date: '26 mei',
        source: 'Recticel',
        description: 'Alg. jaarvergadering',
    },
    {
        date: '26 mei',
        source: 'Air France-KLM',
        description: 'Alg. jaarvergadering',
    },
    {
        date: '26 mei',
        source: 'Adyen',
        description: 'jaarvergadering webcast',
    },
    {
        date: '27 mei',
        source: 'ExxonMobil',
        description: 'jaarvergadering - webcast',
    },
    {
        date: '27 mei',
        source: 'HP Inc',
        description: 'trading update Q2',
    },
    {
        date: '28 mei',
        source: 'Lucas Bols',
        description: 'jaarcijfers',
    },
    {
        date: '28 mei',
        source: 'Van Lanschot Kempen',
        description: 'jaarvergadering',
    },
    {
        date: '28 mei',
        source: 'Merck KGaA',
        description: 'jaarvergadering - webcast',
    },
    {
        date: '28 mei',
        source: 'NN Group',
        description: 'Alg. jaarvergadering',
    },
    {
        date: '28 mei',
        source: 'Duitsland',
        description: 'consumentenprijsindex',
    },
    {
        date: '29 mei',
        source: 'Carrefour',
        description: 'Alg. jaarvergadering',
    },
    {
        date: '29 mei',
        source: 'Total',
        description: 'Alg. jaarvergadering',
    },
    {
        date: '29 mei',
        source: 'Eurostat',
        description: 'flash inflatiecijfers eurozone mei',
    },
    {
        date: '2 juni',
        source: 'Ageas',
        description: 'notering ex-dividend',
    },
    {
        date: '3 juni',
        source: 'Wal-Mart Stores',
        description: 'jaarvergadering',
    },
    {
        date: '3 juni',
        source: 'Hunter Douglas',
        description: 'Alg. jaarvergadering',
    },
    {
        date: '3 juni',
        source: 'AB InBev',
        description: 'jaarvergadering',
    },
    {
        date: '4 juni',
        source: 'Saint-Gobain',
        description: 'Alg. jaarvergadering',
    },
    {
        date: '4 juni',
        source: 'Philips',
        description: 'betaalbaarstelling dividend',
    },
    {
        date: '4 juni',
        source: 'Unilever',
        description: 'betaalbaarstelling dividend Q1',
    },
    {
        date: '4 juni',
        source: 'Holland Colours',
        description: 'jaarcijfers ',
    },
    {
        date: '4 juni',
        source: 'Remy Cointreau',
        description: 'jaarcijfers',
    },
    {
        date: '4 juni',
        source: 'Fastned',
        description: 'Alg. jaarvergadering',
    },
    {
        date: '4 juni',
        source: 'Ageas',
        description: 'betaalbaarstelling dividend',
    },
    {
        date: '4 juni',
        source: 'ECB',
        description: 'monetaire vergadering ECB',
    },
    {
        date: '5 juni',
        source: 'Intertrust',
        description: 'betaalbaarstelling slotdividend',
    },
    {
        date: '5 juni',
        source: 'Min. van Arbeid VS',
        description: 'non-farm payroll',
    },
];

export const metaTitle = 'Financial agenda';
export const metaDescription =
    'Financial agenda, used to display the financial agenda in a table in articles';

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
                    {`${metaTitle} - Design System - Het Financieele Dagblad`}
                </title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="twitter:title" content={metaTitle} />
                <meta
                    property="twitter:description"
                    content={metaDescription}
                />
            </Head>

            <Explain
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                legend="Financial Agenda"
                reactComponentName="FinancialAgenda"
                description={
                    <>
                        <p>
                            Used to show the financial agenda in a table on an
                            article page.
                        </p>
                    </>
                }
            >
                <FinancialAgenda agendaItems={data} />
            </Explain>
        </>
    );
}

export default Page;
