import React, { useEffect } from 'react';
import styles from './Styles.module.scss';
import articleStyles from '../[section]/[id]/Article.module.scss';
import { Quote } from '../../components/quote/Quote';
import { NumberFrame } from '../../components/numberframe/NumberFrame';
import { WordFrame } from '../../components/wordframe/WordFrame';
import { ReadMore } from '../../components/readmore/ReadMore';
import { Summary } from '../../components/article-summary/Summary';
import { InfographicExtended } from '../../components/article-image/InfographicExtended';
import { ArticleMeta } from '../../components/article-meta/ArticleMeta';
import Head from 'next/head';
import PageStore from '../../stores/PageStore';

function JorienBeukers() {
    useEffect(() => {
        PageStore.setPageType('article');

        return () => {
            PageStore.setPageType('overview');
        };
    }, []);

    return (
        <>
            <Head>
                <title>Dorien Beukers</title>

                <link rel="canonical" href="https://design-system.fd.nl" />

                <meta
                    name="description"
                    content="‘Weet iemand waar Jorien is?’"
                />
                <meta property="og:title" content="Dorien Beukers" />

                <meta
                    property="og:description"
                    content="‘Weet iemand waar Jorien is?’"
                />

                <meta property="og:site_name" content="FD Design System" />

                <meta property="og:type" content="article" />

                <meta property="og:url" content="https://design-system.fd.nl" />

                <meta
                    property="og:image"
                    content="https://pbs.twimg.com/profile_images/1993749888/profiel_400x400.jpg"
                />

                <meta property="twitter:name" content="summary" />

                <meta property="twitter:title" content="Dorien Beukers" />

                <meta property="twitter:site" content="FD Design System" />

                <meta
                    property="twitter:image"
                    content="https://pbs.twimg.com/profile_images/1993749888/profiel_400x400.jpg"
                />

                <meta
                    property="twitter:description"
                    content="‘Weet iemand waar Jorien is?’"
                />
            </Head>

            <article
                className={`${styles.hallOfFame} ${articleStyles.article}`}
            >
                <header>
                    <h1>JBreaking News</h1>
                </header>

                <ArticleMeta authors={[{ id: 1, fullName: 'Carlo M.' }]} />
                <div className={styles.embedContainer}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/7AEYBU9WmRU"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                <h1>Voor Rob, achter Rob</h1>
                <ArticleMeta authors={[{ id: 1, fullName: 'Menno van B.' }]} />
                <Summary
                    title="Over Jorien"
                    summaries={[
                        'Weet alles',
                        'Kent iedereen',
                        'Leert snel',
                        'Weet van aanpakken',
                        'Altijd bereidt om te helpen',
                    ]}
                />
                <p>
                    'Wat is het ontzettend prettig om een collega als Jorien te
                    hebben. Ze weet alles, kent iedereen, leert snel, weet van
                    aanpakken en is nooit te beroerd om iemand anders te helpen.
                    Om maar te zwijgen van de flauwe humor, en sociale skills.
                    Die kun je er prima bij hebben!'
                </p>
                <Quote
                    blockquote="Om maar te zwijgen van de flauwe humor, en sociale skills."
                    figcaption="Menno van B."
                />
                <p>
                    'In mijn 2,5 jaar bij het FD heb ik Jorien in verschillende
                    rollen gezien. Van ‘Iemand van de redactie’,
                    sparringpartner, part-time tester en multiteam-lid tot
                    geliefd product owner van het FD team. Om van de
                    verschillende rollen voor dat we collega’s werden nog maar
                    te zwijgen.'
                </p>
                <p>
                    'We zullen Jorien binnen de developmentafdeling zeker gaan
                    missen. Hopelijk kun je bij de dierenbescherming snel je weg
                    vinden, en je ook daar (in een of meerdere rollen) van
                    onschatbare waarde zijn! Zet ‘m op!'
                </p>
                <h1>Een CMS migratie met Jorien</h1>
                <ArticleMeta authors={[{ id: 1, fullName: 'Jeroen S.' }]} />
                <p>
                    'Ik wist al wel wie Jorien was, maar pas rondom de invoering
                    van Webwriter leerde ik haar ook echt kennen!'
                </p>
                <p>
                    'Wat een weelde is het dan om iemand in het team te hebben
                    die
                </p>
                <p>
                    <strong>a)</strong> De wereld en werkwijze van de redactie
                    goed kent.
                </p>
                <p>
                    <strong>b)</strong> Op een goeie manier kan samenwerken met
                    techneuten om tot de beste oplossing te komen.'
                </p>
                <Quote
                    blockquote="Het bouwen van een complete redactionele omgeving was nooit gelukt zonder de inbreng van Jorien"
                    figcaption="Jeroen S."
                />
                <p>
                    'In die tijd dachten wij de redactie vrij goed te kennen,
                    maar niets was minder waar. Wij kende de web redactie, een
                    klein elite groepje die zich bijna alleen maar bezig hield
                    met het aanpassen van kranten artikelen voor het web.
                    Zogeheten verrijkers waren het. Weblinks toevoegen relatie
                    leggen naar andere artikelen en beeldmateriaal geschikt voor
                    het web toevoegen. Deze kleine elite groep werkte in Escenic
                    en dat kende wij dan weer redelijk goed omdat we op basis
                    van hun werkzaamheden een digitaal product maakte.'
                </p>
                <p>
                    'Het verschil tussen toen en nu kun je je haast niet meer
                    voorstellen. Toen kwam er maar een handje vol artikelen
                    online (en pas nadat de krant al was gepubliceerd) nu komt
                    bijna alles eerst online en brengt de krant “oud” nieuws.
                    Toen was alleen het elite clubje bezig met de site en nu
                    leeft het al veel meer bij de redacteuren (al is het elite
                    clubje er stiekem nog steeds).'
                </p>
                <InfographicExtended
                    largeImageUrl="/assets/hall-of-fame/jorien-beukers/BEREN1.jpg"
                    smallImageUrl="/assets/hall-of-fame/jorien-beukers/BEREN1.jpg"
                />
                <p>
                    'Het bouwen van een complete redactionele omgeving was nooit
                    gelukt zonder de inbreng van Jorien en naast dat heb ik ook
                    enorm genoten van je verhalen over hoe dingen soms gaan in
                    een redactionele setup. Je realisme (en soms cynisme) over
                    ideeën en wijzigingen en je ideeën over oplossingen die niet
                    alleen gemaakt moeten worden omdat het kan, maar vooral ook
                    omdat het wat toevoegt en iemand er op zit te wachten.'
                </p>
                <p>
                    'Recenter zag ik je plaatsnemen binnen de digitale afdeling
                    en je voelde je meteen thuis. Je wist niet alleen veel over
                    het proces, je mocht het nu ook nog eens gaan besturen,
                    verbeteren en aanpassen. Toen ik zag hoe leuk je dat vond
                    had ik het idee dat je je plek wel had gevonden!'
                </p>
                <p>
                    'Voor mij vertrekt er dus een vraagbaak, iemand die voor
                    mijn gevoel enigszins objectief kan vertellen hoe dingen
                    gaan binnen de redactie en of iets nou wel of niet
                    belangrijk is. Iemand die dingen in perspectief kan plaatsen
                    als er 3 mensen staan te schreeuwen. Maar er vertrekt ook
                    een volwaardig lid van de online development club (one of
                    the guys), iemand die gezellig mee deed met onze gekke
                    ideeën en initiatieven, iemand die (volgens mij zoals de
                    meesten hier) lekker zichzelf kon zijn.'
                </p>
                <p>Toch jammer dat we gestopt zijn met roken ;-)</p>
                <NumberFrame
                    number="34"
                    description="versies van The Subtle Art of not Giving a F*ck"
                />
                <h1>Onderweg</h1>
                <ArticleMeta authors={[{ id: 1, fullName: 'Han D.' }]} />
                <p>
                    Je zit weer op een vliegveld, en verveelt je. Dan doe je wat
                    je altijd doet: je doorzoekt zuchtend de slecht gesorteerde
                    boekwinkel die excelleert in het aanbieden van 34 versies
                    van The Subtle Art of not Giving a F*ck, een boek dat je
                    overal tegenkomt maar je hebt nog steeds geen idee waar het
                    over gaat.
                </p>
                <p>
                    Van dat werk moeten drie miljard exemplaren zijn gedrukt,
                    want je komt het overal tegen, in hoge stapels. Het ligt
                    vlakbij de afdeling geestelijke kwakzalverij (mindfulness in
                    alle soorten en maten, met zelfhulpgids), op een boekworp
                    afstand van managementlectuur à la ‘Maak een fan van uw
                    klant’ (maar geen van die boeken in dit genre waarschuwt
                    voor de komende pandemie die alle managementlessen zinloos
                    maakt behalve ‘Blijf rustig’), tegenover wat slecht
                    vormgegeven boeken van een Braziliaan die in het Nederlands
                    Paul Konijn heet, geen naam die een schrijver groot kan
                    maken.
                </p>
                <p>
                    Het is waar, als je zo’n boek van Konijn openslaat vergeet
                    je even waar je bent. Maar als je het dichtslaat vergeet je
                    subiet wat er stond en wat de bedoeling was.
                </p>
                <WordFrame title="Maar dit is Jorien-humor!" />
                <p>
                    Je pakt uit arren moede een boekje van een promotiestapel,
                    goedkoop broddelwerk met reeds vergeelde bladzijdes, uit de
                    categorie “drie voor de prijs van twee en een sandwich
                    gratis”. Zo’n aanbieding dus. Zal ook wel niks zijn.
                </p>
                <p>
                    Maar daar staat het, op een van de eerste pagina’s waar je
                    doorgaans informatie vindt over de uitgever, de druk, de
                    rechten:
                </p>
                <p>
                    “Bringing about Armageddon can be dangerous. Do not attempt
                    it in your own home.”
                </p>
                <p>
                    Maar dit is Jorien-humor! Je kijkt op de kaft, en zie je
                    wel, Terry Pratchett, de schrijver waar je Jorien over
                    hoorde.
                </p>
                <p>
                    Uiteraard ligt dat boek op een promotiestapel omdat Amazon
                    Prime er een serie over brengt (Amazon Prime, je weet wel,
                    waar Her Binge Watching Majesty direct een proefabo op nam,
                    en vier doorgekeken nachten later het weinig verrassende
                    oordeel formuleerde dat het oorspronkelijke plan – alleen op
                    proef – geen haalbare kaart was).
                </p>
                <Quote
                    blockquote="...de leipe oom die niet helemaal te vertrouwen is"
                    figcaption="Han D."
                />
                <p>
                    Dit overdenkend voel je sympathie voor de Cubanen, die het
                    al decennia niet makkelijk hebben. Onlangs bezocht Jorien
                    het afbladderende eiland, naar eigen zeggen om te lezen en
                    naar de zee te kijken. Toen ze in Havana haar Netflix-,
                    Amazon-prime en game-gewoontes wilde voortzetten, werd het
                    al niet bijster snelle internet in Havana megalangzaam. Maar
                    ach, die revolutie daar, die is ook nog steeds onderweg.
                </p>
                <p>
                    Je bedenkt dat ze ook op Groenland was, waar ze afkalvend
                    ijs fotografeerde, en handige tips voor bezoek aan de
                    Galapagos en Chili heeft. En dat de ringstaartmaki, de
                    merkwaardige halfaap van Madagascar, geen geheimen voor haar
                    heeft.
                </p>
                <p>
                    Die ziet nog eens wat van de wereld, denk je, en je voelt je
                    voor de zoveelste keer in je leven een burgermannetje, zo
                    eentje die door de gemeente Sankt Anton in Tirol tot
                    ereburger wordt benoemd omdat hij er al 25 jaar op vakantie
                    komt. Dat zou Jorien nou nooit overkomen.
                </p>
                <p>
                    Er passeren nog wat willekeurige gedachten. Je denkt aan
                    Smallman, een Bulgaarse metalband die veel lawaai maakt mede
                    dankzij een doedelzak. Je bracht er ooit een cd van mee voor
                    Jorien, omdat je dacht dat zij dat soort muziek – uit
                    Asenovgrad, eigenlijk een typische Jorien-bestemming - wel
                    kon waarderen.
                </p>
                <WordFrame
                    title="Fasten your Seatbelt"
                    description="Het is tijd voor het vertrek"
                />
                <p>
                    Die cd kocht je omdat Jorien enorm hielp om je reis door
                    Europa via filmpjes neer te zetten. Die filmpjes bekeek
                    niemand, maar je voelde je een hele pief dat je ze toch maar
                    had gemaakt.
                </p>
                <p>
                    Nou ja, je had op de Record-knop gedrukt. Dankzij Jorien
                    waren ze ook te bezichtigen. Topcollega, dacht je toen.
                </p>
                <p>
                    En dat denk je nog steeds als er wordt omgeroepen dat we
                    gaan boarden. Terug naar Amsterdam, terug naar huis maar ook
                    naar de redactie, die (en je wordt sentimenteel, want dat
                    doet dat gereis soms met een mens) toch een beetje je
                    familie is. Met wat redacteuren à la het type van de leipe
                    oom die niet helemaal te vertrouwen is, collega’s à la de
                    neven en nichten waar je altijd mee kan lachen maar houd ze
                    in de gaten.
                </p>
                <p>
                    En met mensen op wie je altijd kan rekenen, die jouw krant
                    maken tot wat ze is. Mensen zoals Jorien.
                </p>
                <p>
                    Daar gaat het lampje Fasten your Seatbelt aan. Het is tijd
                    voor het vertrek. Goede reis!
                </p>

                <Quote
                    blockquote="Esparar, esparar, esparar, esparar"
                    figcaption="Tahirah"
                />

                <h1>Honderden hongerige mannen</h1>
                <ArticleMeta authors={[{ id: 1, fullName: 'Ramses R.' }]} />
                <InfographicExtended
                    smallImageUrl="/assets/hall-of-fame/jorien-beukers/Jorien-afscheid-MOBIEL-V1-RR.jpg"
                    largeImageUrl="/assets/hall-of-fame/jorien-beukers/Jorien-afscheid-DESKTOP-V1-RR.jpg"
                />

                <h1>FD stapt over op print-only</h1>
                <ArticleMeta
                    authors={[{ id: 1, fullName: 'Elfanie toe L.' }]}
                />
                <p>
                    AMSTERDAM – Na jaren experimenteren heeft de hoofdredactie
                    van het Financieele Dagblad een opmerkelijke keuze gemaakt:
                    het lijfblad van bankiers, ambtenaren en mastodonten uit het
                    bedrijfsleven zet de website op zwart. ‘Onze papieren krant
                    is een statussymbool, dat willen we uitbuiten.’
                </p>
                <Quote
                    blockquote="Onze papieren krant is een statussymbool, dat willen we uitbuiten"
                    figcaption="Hoofdredactie"
                />
                <p>
                    De keuze van het dagblad is opmerkelijk. Steeds meer
                    tijdschriften en kranten spelen juist met de gedachte om
                    over te schakelen naar ‘digital only’. De bezorging is duur,
                    net als de drukkosten. Lezersgedrag is online bovendien
                    beter te monitoren.
                </p>
                <p>
                    Het zijn argumenten die het FD weinig zeggen: ‘Te duur?!
                    Niet voor onze lezers’, zegt interim-hoofdredacteur Prisco
                    Battes. ‘Papier heeft de toekomst, ik zeg het je. Zeker in
                    tijden van corona, waarin zendmasten in brand worden
                    gestoken en de angst voor een lockdown van het internet
                    groeit. Bovendien is onze krant een krachtig statussymbool.
                    Met zo’n roze exemplaar onder de arm rondlopen, of hem
                    subtiel in het zicht te leggen tijdens een videovergadering:
                    het geeft cachet.’
                </p>
                <h2>Weggekaapt</h2>
                <p>
                    Boze tongen beweren dat er een ander argument aan de
                    opvallende keuze voor print-only ten grondslag ligt. Beoogd
                    hoofdredacteur Jorien Beukers werd onlangs in dienst genomen
                    door de Dierenbescherming. “Weggekaapt”, concluderen
                    teleurgestelde collega’s. Beukers was de drijvende kracht
                    achter de website van het FD, met de klinkende domeinnaam
                    FD.nl, en nauw betrokken bij de ontwikkeling van
                    verschillende kranten-apps. Zij wist pennenlikkende
                    collega’s te enthousiasmeren om zich te verdiepen in bits en
                    bytes, in LocalFocus (het programma waarmee redacteuren zelf
                    statistieken konden maken; red.) en in webwriter – het
                    programma waarin nieuwsverhalen vooralsnog worden
                    geschreven.
                </p>
                <p>
                    ‘Het gebruik van onze online programma’s, de updates van de
                    site en apps, zal binnen enkele weken stoppen’, vreest een
                    van de redacteuren, die niet met haar naam in de krant wil.
                    ‘Het verbaast mij niet dat onze ongekroonde digi-koningin
                    vertrekt’, vertelt een andere collega die eveneens anoniem
                    wil blijven. ‘Haar visie heeft nooit de aandacht gekregen
                    die die verdiende. Nu komen we onherroepelijk met de
                    gebakken peren te zitten. We gaan haar nog vreselijk
                    missen.’
                </p>
                <h2>Hoekkamer</h2>
                <p>
                    In een reactie laat de Dierenbescherming weten berenvrolijk
                    te zijn met de komst van Beukers. ‘Wij hebben een prachtige
                    website, maar het kan beter’, aldus directeur Cath de Hondt.
                    ‘Het schaap op de homepage kijkt de bezoeker nu met maar één
                    oog aan. De drie kittens bovenin hebben halve hoofdjes; dat
                    stoort mij enorm. En dat is dan alleen nog maar de “front
                    end”.’ De Hondt belooft dat Beukers een hoekkamer met
                    uitzicht op een parkachtige omgeving mag betrekken. ‘En ze
                    begint precies tijdens het broedseizoen, dus ze zal zeker
                    van het uitzicht genieten. Belangrijk, want de hele dag
                    alleen maar naar je scherm turen, is erg slecht voor de
                    ogen.’
                </p>
                <h1>Corona-app loopt vertraging op</h1>
                <ArticleMeta
                    authors={[
                        { id: 1, fullName: 'Martine W.' },
                        { id: 1, fullName: 'Van onze redacteuren' },
                    ]}
                />
                <h2>Nieuwstafel</h2>
                <p>
                    De komst van een nieuwe, multidisciplinaire corona-app heeft
                    vertraging opgelopen. Bronnen binnen het ministerie van
                    Volksgezondheid spreken van een onwerkbare situatie. Spil in
                    het web is de online-vedette Jorien Beukers. Beukers
                    verruilde onlangs de redactievloer van Het Financieele
                    Dagblad voor de thuiswerkburelen van het ministerie van
                    Volksgezondheid om daar aan de nieuw te ontwikkelen
                    corona-app te gaan werken. Daarbij botst Beukers volgens
                    dicht bij de deur gezeten bronnen veelvuldig met de leiding
                    van het ministerie.
                </p>
                <WordFrame title="Beukers heeft besloten haar kritiekpunten in de cloud achter te laten" />
                <p>
                    Steen des aanstoots is het doorlopende verzoek steeds nieuwe
                    functies in de app te bouwen. Vooral minister van
                    Volksgezondheid Hugo de Jongh is volgens bronnen rond de
                    middentafel verantwoordelijk. 'Gisteren kwam hij opeens met
                    het idee om burgers op anderhalve meter afstand dagelijks
                    zes artikelen aan te bieden. Daar is de app helemaal niet op
                    gebouwd!', laat een ingewijde weten. Beukers begon een paar
                    weken geleden nog vol frisse moed aan haar nieuwe functie.
                    ‘Het leek me heerlijk: een app bouwen die de Focus moet
                    worden van het Nederlandse coronabeleid. Een stuk leuker dan
                    het ontwerpen van het zesde redactiesysteem voor het FD’.
                </p>
                <p>
                    Aanvankelijk leek de ontwikkeling ook soepel te gaan. Maar
                    gaandeweg zag zij steeds vreemdere wensen verschijnen. De
                    app diende ook direct toegang te bieden tot de ministeriele
                    vlogs, een dagelijks fashionadvies en zou er een betaald
                    gedeelte komen met herverpakte coronacontent.
                </p>
                <p>
                    Binnen het ministerie groeide breder de onvrede. Beukers
                    heeft besloten haar kritiekpunten in de cloud achter te
                    laten en is inmiddels werkzaam met de zevende aanpassing.
                    Naar verwachting is de app medio 2021 gereed. Met de
                    minister zoekt ze nu naar de beste professionele verhouding.
                    ‘We houden maar even anderhalve meter afstand.’
                </p>
                <h1>‘Weet iemand waar Jorien is?’</h1>
                <ArticleMeta authors={[{ id: 1, fullName: 'Jasper H.' }]} />
                <p>
                    Ze is weg. Vanaf nu definitief onvindbaar voor
                    FD-redacteuren die op zoek zijn naar hulp. Het zijn de
                    viervoeters en ongewervelden die vanaf nu bij haar kunnen
                    aankloppen voor steun.
                </p>
                <p>
                    Ook Jorien werd onderdeel van het online samenraapsel dat
                    het Casa de Papel aan het Prins Bernhardplein binnenviel.
                    Het plan van de professor was vernuftig: de redacteuren
                    gijzelen voor de website en de drukpers stilzetten. Maar het
                    liep anders in serie 2.
                </p>
                <p>
                    Jorien besmette ondertussen de redacteuren met het social
                    media virus. Menigeen verstuurde zijn eerste tweet terwijl
                    zij over de schouder meekeek. Er was geen vaccin meer tegen
                    gewassen.
                </p>
                <p>
                    De FD-webredactie schakelde snel door en ging voorbij
                    Morello, linksaf naar Escenic om uiteindelijk te eindigen in
                    Webwriter. Een Scandinavisch zelfbouw stadje, waar Jorien
                    naar hartenlust kon klussen en iedereen de weg wees. Zelfs
                    de grootste digibeten vonden er een onderdak.
                </p>
                <WordFrame title="Er is niemand die beter kan uitstralen dat domme vragen daarbij niet bestaan" />
                <p>
                    ‘Weet iemand waar Jorien is?’ Die vraag keerde al die jaren
                    terug op de redactie. Er lag dan een probleem, zoveel was
                    dan wel duidelijk. Iedereen reageerde als in Pulp Fiction.
                    Wachtend totdat FD’s eigen ‘The Wolf’ opduikt. En dan
                    toekijken hoe zij met ijzige kalmte het lijk in Local Focus
                    wegwerkt.
                </p>
                <p>
                    Er is niemand die beter dan Jorien mensen over technische
                    hobbels kan duwen. Er is niemand die beter kan uitstralen
                    dat domme vragen daarbij niet bestaan. Probeer het maar eens
                    door haar deze vraag uit de praktijk te stellen: ‘Dus als ik
                    op opslaan klik, dan worden de wijzigingen opgeslagen?’
                </p>
                <p>
                    Nu vlieg je uit naar de Dierenbescherming. We zien het beste
                    paard van stal vertrekken. Daarmee is het FD het bokje.
                    Straks voor jou kat in ’t bakkie. Na een welverdiende
                    vakantie zo fris als een hoentje. Succes! En pak die
                    berenmarkt aan!
                </p>
                <InfographicExtended
                    smallImageUrl="/assets/hall-of-fame/jorien-beukers/dailydog.jpg"
                    largeImageUrl="/assets/hall-of-fame/jorien-beukers/dailydog.jpg"
                />

                <h1>Percolator</h1>
                <ArticleMeta authors={[{ id: 1, fullName: 'Bie K.' }]} />
                <Quote
                    blockquote="Oh, wat ben ik technisch! Percolator! Kopje koffie erbij. Dit vergeet ik nooit meer."
                    figcaption="Jorien B."
                />
                <InfographicExtended
                    smallImageUrl="/assets/hall-of-fame/jorien-beukers/percolator.png"
                    largeImageUrl="/assets/hall-of-fame/jorien-beukers/percolator.png"
                />

                <h1>Gouden tips</h1>
                <ArticleMeta authors={[{ id: 1, fullName: 'Alex R.' }]} />
                <Summary summaries={["Dopey's Elixer", 'Husavik', 'Myvatn']} />
                <p>
                    Ik denk dat ik de trouwste discipel van Jorien ben. Haar
                    tips gaan er bij mij in als Gods woord in een ouderling.
                    Natuurlijk als het om een digitaal vergezicht gaat dat zij
                    wel snapt en ik niet (de standaard rolverdeling), maar zeker
                    ook aangaande de leuke dingen in het leven.
                </p>
                <WordFrame title="Wat een afgetrapte zooi bij elkaar" />
                <p>
                    Zo kwam ik op haar aanraden in Dopey’s Elixer terecht, een
                    bruine kroeg in de Amsterdamse Pijp. Daar voelde zij zich
                    wel thuis, in tegenstelling tot al die moderne tenten met
                    hun nog modernere drankjes. My god, wat een afbraaktent, dat
                    Dopey’s, wat een afgetrapte zooi bij elkaar. De zaak is,
                    volgens de eigen website, opgezet in de beginjaren zeventig,
                    een tijd – let op, het staat er echt – ‘waarin mensen die
                    apart en eigenwijs waren een hoog aanzien hadden’.
                </p>
                <p>Hahahahaha.</p>
                <NumberFrame
                    number="3"
                    description="keer vastgezeten in sneeuwstormen"
                />
                <p>
                    Toevallig heb ik die tijd meegemaakt, en de mensen die hier
                    aangeduid worden waren op zijn best no goods en op zijn
                    slechtst radicalinski’s. Maar goed, ik kwam zwalkend van het
                    bier en de oude jenevers uit Dopey’s, net als mijn
                    gezelschap, dus ja, zeker een goede tip.
                </p>
                <WordFrame title="Blue lagoon van Myvatn" />
                <p>
                    Jorien was ook degene die mij vertelde waar ik in IJsland
                    het best het noorderlicht kon zien. Ga naar Husavik, zei ze,
                    met – uiteraard – meteen Google Maps erbij. Daar woont bijna
                    niemand. Amper omgevingslicht, dus ideaal voor de aurora
                    borealis. Bedankt Jorien, ik ga boeken. Afgelopen januari
                    was het zo ver, op naar Husavik. Drie keer hebben mijn vrouw
                    en ik in de huur-Dacia Duster vastgezeten in sneeuwstormen,
                    en hoe heroïsch het ook klinkt, echt leuk is het niet om
                    gered te moeten worden in de kou terwijl je geen twee meter
                    zicht hebt.
                </p>
                <WordFrame title="Amper omgevingslicht" />
                <p>
                    Er was, zoals Jorien had gezegd, inderdaad amper
                    omgevingslicht. Er was sowieso amper licht daar in
                    Noord-IJsland. En zeker geen noorderlicht. Laat staan dat er
                    een café te vinden was. Maar dankzij een meegenomen fles
                    Bowmore 10 years dark &amp; intense, én schitterende
                    parelmoeren wolken boven de blue lagoon van Myvatn bleek de
                    tip tóch onbetaalbaar goed.
                </p>
                <p>
                    Kortom Jorien, mail me vooral af en toe nog een tip door.
                    Kom ik ook nog eens ergens.
                </p>

                <h1>Infographic</h1>
                <ArticleMeta authors={[{ id: 1, fullName: 'Els E.' }]} />
                <InfographicExtended
                    darkModeInvert={true}
                    smallImageUrl="/assets/hall-of-fame/jorien-beukers/042020_ByebyeJorien_EE.svg"
                    largeImageUrl="/assets/hall-of-fame/jorien-beukers/042020_ByebyeJorien_EE.svg"
                />
                <ReadMore
                    title="Bekijk haar CV"
                    links={[
                        `CV van <a href="https://www.linkedin.com/in/jorienbeukers/">Jorien Beukers</a>.`,
                    ]}
                    variant={'variant-2'}
                />
            </article>
        </>
    );
}

export default JorienBeukers;
