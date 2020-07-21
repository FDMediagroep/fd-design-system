import React, { useEffect } from 'react';
import { Explain } from '../components/Explain';
import { Accordion, getCssClassNames } from '../components/accordion/Accordion';
import PageStore from '../stores/PageStore';

const items = [
    {
        anchor: 'vraag-1',
        title: 'Mag ik content van FD Mediagroep-websites verspreiden?',
        content: (
            <>
                <p>
                    Behalve op de manieren zoals hierboven weergegeven mag u
                    inhoud van FD Mediagroep niet gebruiken. U mag de content
                    dus niet verder distribueren en ook niet publiceren in
                    andere media zoals websites, nieuwsbrieven of intranet.
                </p>
                <ol>
                    <li>
                        Consumenten: individuele gebruikers mogen incidenteel
                        een kopietje van een artikel maken of de tekst van een
                        artikel doorsturen via e-mail. Dit gebruik valt onder de
                        zogenaamde{' '}
                        <a
                            href="https://www.thuiskopie.nl/nl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Thuiskopie-regeling
                        </a>
                        .
                    </li>
                    <li>
                        Zakelijke gebruikers: van een klein gedeelte van de
                        inhoud of van enkele afbeeldingen van de websites mogen
                        door medewerkers van ondernemingen en instellingen
                        incidenteel (foto)kopieën worden gemaakt, mits hiervoor
                        een betalingsregeling is getroffen met{' '}
                        <a
                            href="https://www.reprorecht.nl/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Stichting Reprorecht
                        </a>
                        .
                    </li>
                </ol>
            </>
        ),
    },
    {
        anchor: 'vraag-2',
        title:
            'Mag ik (delen van) de content van FD Mediagroep kopiëren of samenvatten?',
        content: (
            <>
                <p>
                    Zoals hierboven al aangegeven mag u geen hele artikelen
                    en/of foto’s herpubliceren of distribueren, anders dan via
                    de door FD Mediagroep ter beschikking gestelde
                    deel-mogelijkheden. Samenvatten van artikelen is wel
                    toegestaan, mits aan een aantal voorwaarden is voldaan:
                </p>
                <ul>
                    <li>
                        <p>
                            Er staat een duidelijke en volledige bronvermelding
                            bij de samenvatting, bestaande uit minimaal:
                        </p>
                        <ul>
                            <li>
                                Naam uitgave, volledige titel van het
                                oorspronkelijke artikel, naam journalist,
                                publicatiedatum en link naar het oorspronkelijk
                                artikel van FD Mediagroep;
                            </li>
                        </ul>
                        <p></p>
                    </li>
                    <li>
                        <p>
                            Duidelijke vermelding van de naam van de persoon die
                            de samenvatting heeft gemaakt;
                        </p>
                    </li>
                    <li>
                        <p>
                            De samenvatting is niet automatisch gecreëerd op
                            basis van technologie, maar is door een natuurlijk
                            persoon gemaakt.
                        </p>
                    </li>
                    <li>
                        <p>
                            De samenvatting vormt geen substituut voor de eigen
                            producten en diensten van FD Mediagroep, noch vormt
                            de verzameling van samenvattingen die u maakt een
                            bedreiging voor de exploitatie van de media van FD
                            Mediagroep; geen enkele persoon of organisatie mag
                            op enige verschijningsdatum meer dan 10 artikelen
                            samenvatten en publiceren uit een uitgave van FD
                            Mediagroep;
                        </p>
                    </li>
                    <li>
                        <p>
                            Er mag in de samenvattingen geen promotie worden
                            gemaakt voor producten, diensten, merken of
                            bedrijven;
                        </p>
                    </li>
                    <li>
                        <p>
                            De strekking van het artikel mag niet anders worden
                            weergegeven dan in het oorspronkelijke artikel;
                        </p>
                    </li>
                    <li>
                        <p>
                            Indien FD Mediagroep u meldt dat u samenvattingen
                            maakt, publiceert en/of distribueert die niet
                            voldoen aan de bovengenoemde uitgangspunten, dan
                            dient u hier direct mee te stoppen en de
                            mogelijkheid om samenvattingen te mogen maken
                            vervalt direct tenzij u met FD Mediagroep tot een
                            overeenkomst komt over het gebruik van inhoud van FD
                            Mediagroep producten en diensten.
                        </p>
                    </li>
                    <li>
                        <p>
                            Overname van delen van artikelen is uitdrukkelijk
                            niet toegestaan.
                        </p>
                    </li>
                </ul>
                <p>
                    NB De hierboven genoemde voorwaarden voor het delen,
                    herpubliceren of samenvatten gelden uitsluitend voor de
                    tekstuele content van FD Mediagroep en expliciet niet voor
                    door FD Mediagroep gelicentieerde inhoud van derden, zoals
                    foto’s en artikelen van (foto)persbureau en freelance makers
                    (waaronder opiniebijdragen in de FD Mediagroep publicaties
                    en de ESB-artikelen) en beurskoersen. Deze mogen onder geen
                    beding worden overgenomen, gepubliceerd, gedistribueerd of
                    samengevat zonder voorafgaande schriftelijke toestemming van
                    de rechthebbende(n).
                </p>
            </>
        ),
    },
];

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
                legend="Accordion"
                description={
                    <>
                        <p>Used as accordion.</p>
                        <p>
                            This element is used to display an accordion. No
                            JavaScript is required for its function.
                        </p>
                    </>
                }
            >
                <Accordion items={items} />
            </Explain>
        </>
    );
}

export default Page;
