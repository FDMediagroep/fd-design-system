import React from 'react';
import styles from './cards.module.scss';
import { Explain } from '../../components/Explain';
import {
    VerticalCard3,
    getCssClassNames,
} from '../../components/card/VerticalCard3';

const verticalCards1: any = [
    {
        id: '1345422',
        label: 'Arbeidsmarkt',
        title:
            'Lockdown leidt tot recordstijging aantal WW-uitkeringen in april',
        imageUrl:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlS:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlM:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=351&h=234',
        imageUrlL:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        url:
            'https://fd.nl/economie-politiek/1345422/lockdown-leidt-tot-recordstijging-aantal-ww-uitkeringen-in-april',
        intro: `Scherpe stijging met 17% tot 292.000 uitkeringen, blijkt uit cijfers van het UWV. Tijdens de kredietcrisis in 2008 liep de werkloosheid veel geleidelijker op.`,
    },
    {
        id: '1321841',
        label: 'Detailhandel',
        title: 'Den Haag zet druk op verhuurders om huurverlaging te slikken',
        imageUrl:
            'https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format&q=45&w=560&h=315',
        imageUrlS:
            'https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format&q=45&w=560&h=315',
        imageUrlM:
            'https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0637898686679174%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format&q=45&w=944&h=531',
        imageUrlL:
            'https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0637898686679174%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format&q=45&w=944&h=531',
        url:
            'https://fd.nl/ondernemen/1321841/den-haag-zet-druk-op-pandeigenaren-om-huurverlaging-winkeliers-te-slikken',
        intro: `Het Rijk sluit overheidsingrijpen niet uit om een akkoord tussen verhuurders en winkeliers af te dwingen, nu onderhandelingen moeizaam verlopen.`,
    },
];

function Page() {
    return (
        <>
            <Explain
                anchor="vertical3"
                cssClassNames={getCssClassNames()}
                legend="Vertical Card 3"
                description={
                    <>
                        <p>Used on home page.</p>
                        <ul>
                            <li>default</li>
                            <li>variant-1</li>
                            <li>variant-2</li>
                        </ul>
                    </>
                }
            >
                <>
                    <VerticalCard3
                        className={styles.verticalCard3}
                        {...verticalCards1[0]}
                    />
                    <VerticalCard3
                        className={styles.verticalCard3}
                        {...verticalCards1[1]}
                        variant="variant-1"
                    />
                    <VerticalCard3
                        className={styles.verticalCard3}
                        {...verticalCards1[1]}
                        label="Update"
                        variant="variant-2"
                    />
                    <VerticalCard3
                        className={styles.verticalCard3}
                        {...verticalCards1[1]}
                        label="Breaking"
                        variant="variant-3"
                    />
                </>
            </Explain>
        </>
    );
}

export default Page;
