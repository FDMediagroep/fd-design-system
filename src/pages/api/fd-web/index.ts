import Cors from 'micro-cors';
import { timeout } from '../../../utils/timeout';
const cors = Cors({ allowMethods: ['GET', 'HEAD'] });

export const data = {
    shortNewsModel: {
        latestNewsTeasers: [
            {
                id: 1329442,
                title: 'Nog eentje, maar dan niet kort',
                publicationTime: '10 juni',
                publicationUrl:
                    '/economie-politiek/1329442/is-dit-een-nieuws-artikel',
                topicPrefixOrCategory: 'Arbeidsmarkt',
                latestUpdate: {},
                read: false,
            },
            {
                id: 1329441,
                title: 'Wat een kleintje...',
                publicationTime: '10 juni',
                publicationUrl: '/laatste-nieuws#article_1329441',
                topicPrefixOrCategory: 'Arbeidsmarkt',
                latestUpdate: {},
                read: false,
            },
            {
                id: 1329296,
                title:
                    'Moederbedrijf Zara boekt eerste kwartaalverlies in twee decennia',
                publicationTime: '10 juni',
                publicationUrl:
                    '/ondernemen/1329296/moederbedrijf-zara-boekt-eerste-kwartaalverlies-in-twee-decennia',
                topicPrefixOrCategory: 'Detailhandel',
                latestUpdate: {},
                read: false,
            },
            {
                id: 1329297,
                title: 'ICT en overheid: mag het een miljoentje meer zijn?',
                publicationTime: '10 juni',
                publicationUrl:
                    '/futures/1329297/ict-en-overheid-mag-het-een-miljoentje-meer-zijn',
                topicPrefixOrCategory: 'Column',
                latestUpdate: {},
                read: false,
            },
            {
                id: 1329298,
                title: 'Oeso voorspelt diepste recessie in meer dan een eeuw',
                publicationTime: '10 juni',
                publicationUrl:
                    '/economie-politiek/1329298/oeso-voorspelt-diepste-recessie-in-meer-dan-een-eeuw',
                topicPrefixOrCategory: 'Macro-economie',
                latestUpdate: {},
                read: false,
            },
        ],
        topReadArticles: [
            {
                id: 1329442,
                title: 'Nog eentje, maar dan niet kort',
                publicationTime: '10 juni',
                publicationUrl:
                    '/economie-politiek/1329442/is-dit-een-nieuws-artikel',
                topicPrefixOrCategory: 'Arbeidsmarkt',
                latestUpdate: {},
                read: false,
            },
        ],
        topReadArticlesEmpty: false,
    },
    categoryCardsModel: {
        newsTeasers: [
            {
                id: 1329298,
                title: 'Oeso voorspelt diepste recessie in meer dan een eeuw',
                intro:
                    "Na een tweede corona-uitbraak krimpt economie van de rijkste landen dit jaar met 7,6%. Blijft het bij één uitbarsting dan is de krimp 'slechts' 6,1%.",
                topicPrefixOrCategory: 'Macro-economie',
                publicationUrl:
                    '/economie-politiek/1329298/oeso-voorspelt-diepste-recessie-in-meer-dan-een-eeuw',
                latestUpdate: {},
                recommended: false,
                newWindow: false,
            },
            {
                id: 1329299,
                title:
                    "'ECB overweegt oprichting bad bank voor slechte leningen'",
                intro:
                    'De centrale bank zou volgens bronnen van Reuters al een werkgroep hebben opgezet. Ook zou president Christine Lagarde banken en EU-functionarissen hebben geraadpleegd.',
                topicPrefixOrCategory: 'Financiële sector',
                publicationUrl:
                    '/economie-politiek/1329299/ecb-overweegt-oprichting-bad-bank-voor-slechte-leningen',
                latestUpdate: {},
                recommended: false,
                newWindow: false,
            },
            {
                id: 1329300,
                title:
                    'Ceo CrossFit stapt op na omstreden uitlatingen over George Floyd',
                intro:
                    'De oprichter van de sportschoolketen Greg Glassman kwam deze week in opspraak na meerdere opmerkingen over de zwarte demonstrant',
                topicPrefixOrCategory: 'Sport',
                publicationUrl:
                    '/ondernemen/1329300/ceo-crossfit-stapt-op-na-omstreden-uitlatingen-over-george-floyd',
                latestUpdate: {},
                recommended: false,
                newWindow: false,
            },
            {
                id: 1329307,
                title:
                    "Kamer wil dat kabinet IJmuiden bevrijdt van 'het juk van Tata' ",
                intro:
                    'Kamerbreed gesteunde PvdA-motie roept op om zo nodig onconventionele middelen in te zetten. ',
                topicPrefixOrCategory: 'Industrie',
                publicationUrl:
                    '/economie-politiek/1329307/kamer-wil-dat-kabinet-ijmuiden-bevrijdt-van-het-juk-van-tata',
                latestUpdate: {},
                recommended: false,
                newWindow: false,
            },
            {
                id: 1329309,
                title: 'Kabinet komt snel met regels voor veilig vliegen',
                intro:
                    'Tweede Kamer wil onderzoek naar en regels voor voldoende afstand aan boord. ',
                topicPrefixOrCategory: 'Vervoer',
                publicationUrl:
                    '/economie-politiek/1329309/kabinet-komt-snel-met-regels-voor-veilig-vliegen',
                latestUpdate: {},
                recommended: false,
                newWindow: false,
            },
            {
                id: 1329310,
                title:
                    'Luchtvaart stevent op monsterverlies af van $100 mrd in twee jaar tijd ',
                intro:
                    'Branchevereniging Iata voorziet explosieve groei van schuldenlast tot $550 mrd en verlies van een miljoen banen tot eind dit jaar.',
                topicPrefixOrCategory: 'Vervoer',
                publicationUrl:
                    '/economie-politiek/1329310/luchtvaart-stevent-op-monsterverlies-af-van-100-mrd-in-twee-jaar-tijd',
                latestUpdate: {},
                recommended: false,
                newWindow: false,
            },
            {
                id: 1329314,
                title: 'China weerspreekt suggestie dat corona al eerder begon',
                intro:
                    'Onderzoek van Harvard Medical School levert aanwijzingen op dat besmetting al in augustus de kop op stak.',
                topicPrefixOrCategory: 'Buitenland',
                publicationUrl:
                    '/economie-politiek/1329314/china-weerspreekt-suggestie-dat-corona-al-eerder-begon',
                latestUpdate: {},
                recommended: false,
                newWindow: false,
            },
            {
                id: 1329316,
                title:
                    'Hoe Nederland zijn stikstofcrises voor boer en natuur creëerde',
                intro:
                    "Al sinds begin jaren zeventig wordt het mestprobleem met pappen en nathouden aangepakt, reconstrueert de commissie-Remkes. Voortzetting van dit beleid is 'onacceptabel'.",
                topicPrefixOrCategory: 'Landbouw',
                publicationUrl:
                    '/economie-politiek/1329316/hoe-nederland-zijn-stikstofcrises-voor-boer-en-natuur-creeerde',
                latestUpdate: {},
                recommended: false,
                newWindow: false,
            },
        ],
        longReadTeasers: [
            {
                id: 1329321,
                title: 'Europa zet stappen in verdediging interne markt ',
                intro:
                    'Eurocommissaris Margrethe Vestager van mededinging geeft gehoor aan de roep om meer protectionisme. Maar voor sommigen gaat de Deense niet ver genoeg.',
                topicPrefixOrCategory: 'Europa',
                publicationUrl:
                    '/achtergrond/1329321/europa-zet-stappen-in-verdediging-interne-markt',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/7558975e5a90096d3e73253a9e704ea416e8bc9b.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/7558975e5a90096d3e73253a9e704ea416e8bc9b.jpg?rect=.1675%2c.0%2c.66625%2c.9999999999999999&fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/7558975e5a90096d3e73253a9e704ea416e8bc9b.jpg?rect=.0%2c.0787992495309568%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: true,
            },
            {
                id: 1329327,
                title: 'Een nieuwe auto kopen: straks met subsidie?',
                intro:
                    "Europa broedt op het stimuleren van de aanschaf van schone auto's. Maar hoe bereik je succes zonder al te veel overheidsgeld te verspillen? 'Nederland hobbelt mee met Albanië.'",
                topicPrefixOrCategory: 'Auto',
                publicationUrl:
                    '/achtergrond/1329327/een-nieuwe-auto-kopen-straks-met-subsidie',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/bf150b3a516be680917d4edbe9a11ced90599c83.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/bf150b3a516be680917d4edbe9a11ced90599c83.jpg?rect=.1675%2c.0%2c.66625%2c.9999999999999999&fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/bf150b3a516be680917d4edbe9a11ced90599c83.jpg?rect=.0%2c.0787992495309568%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: true,
            },
            {
                id: 1328645,
                title:
                    'Cateraars: minder suiker, minder vet en minder calorieën jaagt iedereen de schoolkantine uit',
                intro:
                    'Minder suiker, minder vet, minder calorieën. Aangescherpte criteria moeten leiden tot een gezondere schoolkantine. Maar cateraars vrezen zonder vette en zoete hap omzet te verliezen. ',
                topicPrefixOrCategory: 'Privacy en cybersecurity',
                publicationUrl:
                    '/achtergrond/1328645/cateraars-gezondere-voeding-jaagt-iedereen-de-schoolkantine-uit',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/1789a5b400fd887e234e078b6378a2add488acd2.jpg?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/1789a5b400fd887e234e078b6378a2add488acd2.jpg?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/1789a5b400fd887e234e078b6378a2add488acd2.jpg?fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: true,
            },
            {
                id: 1328648,
                title: 'Droogte? Sla een eigen grondwaterbron',
                intro:
                    'Niet eerder viel er in Nederland zo weinig regen. Water wordt schaars en er is steeds meer vraag naar grondwaterputten. Een tweeluik over de gevolgen van de recorddroogte. Vandaag de landbouw en natuur. Morgen de binnenvaart.',
                topicPrefixOrCategory: 'Landbouw',
                publicationUrl:
                    '/achtergrond/1328648/droogte-sla-een-eigen-grondwaterbron',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/7e221f94a81dee2779d902a10879738c4405a5c6.jpg?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/7e221f94a81dee2779d902a10879738c4405a5c6.jpg?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/7e221f94a81dee2779d902a10879738c4405a5c6.jpg?fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: true,
            },
        ],
        beursTeasers: [
            {
                id: 1329308,
                title: 'Nasdaq doorbreekt even de grens van 10.000 punten',
                intro: "'Apple gaat eigen chips in de Mac gebruiken.'",
                topicPrefixOrCategory: 'Wall Street',
                publicationUrl:
                    '/beurs/1329308/nasdaq-doorbreekt-even-de-grens-van-10-000-punten',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/84ba7ed7077141a6a911acc503423fb1d781ede1.jpg?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/84ba7ed7077141a6a911acc503423fb1d781ede1.jpg?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/84ba7ed7077141a6a911acc503423fb1d781ede1.jpg?fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: false,
            },
            {
                id: 1329312,
                title: 'Obligatiebonanza op Europese markt',
                intro:
                    'Spanje staat bovenaan met de plaatsing van €78 mrd aan obligaties',
                topicPrefixOrCategory: 'Financiële markten',
                publicationUrl:
                    '/beurs/1329312/obligatiebonanza-op-europese-markt',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/08ec4e0b7848828e41a5476fb5a4f0d49e7c642c.jpg?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/08ec4e0b7848828e41a5476fb5a4f0d49e7c642c.jpg?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/08ec4e0b7848828e41a5476fb5a4f0d49e7c642c.jpg?fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: false,
            },
            {
                id: 1329320,
                title: 'Daar is hij dan: de bitcointracker ',
                intro:
                    'Bitcoinevangelisten wachten er al jaren op, maar nu is hij er. De beursgenoteerde bitcointracker!',
                topicPrefixOrCategory: 'Marktbewegingen',
                publicationUrl:
                    '/beurs/1329320/daar-is-hij-dan-de-bitcointracker',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/b651fb2b2c4316bcf429e6011778e69ce45d9bac.jpg?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/b651fb2b2c4316bcf429e6011778e69ce45d9bac.jpg?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/b651fb2b2c4316bcf429e6011778e69ce45d9bac.jpg?fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: false,
            },
            {
                id: 1329325,
                title:
                    'Na overheidssteun wil Basic-Fit nu weer gaan uitbreiden ',
                intro:
                    'Fitnessketen beleeft zeer succesvolle aandelenemissie. Met een goedgevulde kas, deels te danken aan staatsgaranties, wil het bedrijf weer gaan uitbreiden.',
                topicPrefixOrCategory: 'Sport',
                publicationUrl:
                    '/beurs/1329325/na-overheidssteun-wil-basic-fit-nu-weer-gaan-uitbreiden',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/620896f01c4a2818914c5ceb4f1bf66f4841509b.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/620896f01c4a2818914c5ceb4f1bf66f4841509b.jpg?rect=.20875%2c.0%2c.6075%2c.9118198874296435&fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/620896f01c4a2818914c5ceb4f1bf66f4841509b.jpg?rect=.0%2c.0712945590994372%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: false,
            },
        ],
        opinionTeasers: [
            {
                id: 1329306,
                title: 'Het moet van Europa',
                intro:
                    'Je zou als Nederland zelf een nieuwe afweging willen maken tussen de belangen van boeren en natuurbehoud.',
                topicPrefixOrCategory: 'Kleintje Groot',
                publicationUrl: '/opinie/1329306/het-moet-van-europa',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/bd426d8e140cd2b07ee8e4ee8e4c70e4bc9dd3b4.jpg?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/bd426d8e140cd2b07ee8e4ee8e4c70e4bc9dd3b4.jpg?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/bd426d8e140cd2b07ee8e4ee8e4c70e4bc9dd3b4.jpg?fit=crop&crop=faces&auto=format',
                    caption: 'Ed Groot',
                    backgroundColor: 'theme7',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: false,
            },
            {
                id: 1329315,
                title: 'Ook goedkope broker moet zich aan regels houden',
                intro:
                    'Prijsvechtende internetbroker DeGiro heeft het aan de stok met de AFM, maar kan de strijdbijl beter begraven.',
                topicPrefixOrCategory: 'Commentaar',
                publicationUrl:
                    '/opinie/1329315/ook-goedkope-broker-moet-zich-aan-regels-houden',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/7bdd32be08d52fa55cbdaf73f864809339a7da27.jpg?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/7bdd32be08d52fa55cbdaf73f864809339a7da27.jpg?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/7bdd32be08d52fa55cbdaf73f864809339a7da27.jpg?fit=crop&crop=faces&auto=format',
                    caption: 'Commentaar',
                    backgroundColor: 'theme7',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: false,
            },
            {
                id: 1329332,
                title: 'Zijn economen te pessimistisch?',
                intro:
                    'De economische modellen miskennen de veerkracht van ondernemers en consumenten en onderschatten de impact van de noodhulp van de overheid.',
                topicPrefixOrCategory: 'Column',
                publicationUrl:
                    '/opinie/1329332/zijn-economen-te-pessimistisch',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/515a4aa12312e7c59c0817e2097f6afe53b8450b.png?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/515a4aa12312e7c59c0817e2097f6afe53b8450b.png?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/515a4aa12312e7c59c0817e2097f6afe53b8450b.png?fit=crop&crop=faces&auto=format',
                    caption: 'Mathijs Bouman',
                    backgroundColor: 'theme7',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: false,
            },
            {
                id: 1329333,
                title: 'Pharming beloont topman met turbobonus ',
                intro:
                    'Sijmen de Vries kan een flinke loonsverhoging tegemoet zien, ondanks het intrekken van het beloningsvoorstel op de vergadering van aandeelhouders.',
                topicPrefixOrCategory: 'Bartjens',
                publicationUrl:
                    '/ondernemen/1329333/pharming-beloont-topman-met-turbobonus',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/db45a5e6026b16eb058e592103cfd1d22feac35d.jpg?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/db45a5e6026b16eb058e592103cfd1d22feac35d.jpg?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/db45a5e6026b16eb058e592103cfd1d22feac35d.jpg?fit=crop&crop=faces&auto=format',
                    caption: 'Bartjens',
                    backgroundColor: 'theme7',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: false,
            },
        ],
        futuresTeasers: [
            {
                id: 1329297,
                title: 'ICT en overheid: mag het een miljoentje meer zijn?',
                intro:
                    'Sanne Kanis voelt zich vaak een ramptoerist als ze naar de mislukte en geld verkwistende ICT-projecten van de overheid kijkt. Rond corona moet het echt beter.',
                topicPrefixOrCategory: 'Column',
                publicationUrl:
                    '/futures/1329297/ict-en-overheid-mag-het-een-miljoentje-meer-zijn',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/7c051b28e0f6e4dc3f1998e8449063633df1dffe.jpeg?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/7c051b28e0f6e4dc3f1998e8449063633df1dffe.jpeg?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/7c051b28e0f6e4dc3f1998e8449063633df1dffe.jpeg?fit=crop&crop=faces&auto=format',
                    caption: 'Sanne Kanis',
                    backgroundColor: 'theme7',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: false,
            },
            {
                id: 1329313,
                title:
                    'IT-sector kwaad: Nederland dreigt positie als internetknooppunt te verliezen',
                intro:
                    'Datacenters en andere IT-bedrijven vinden dat Nederland te weinig doet aan het binnenhalen van nieuwe zeekabels.',
                topicPrefixOrCategory: 'ICT-diensten',
                publicationUrl:
                    '/futures/1329313/it-sector-nederland-dreigt-positie-als-internetknooppunt-te-verliezen',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/d625315ca3bf98f88ef8f863243f2c56b9656297.jpg?rect=.0%2c.0037383177570093%2c.9999999999999999%2c.994392523364486&fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/d625315ca3bf98f88ef8f863243f2c56b9656297.jpg?rect=.16625%2c.0%2c.66875%2c.9999999999999999&fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/d625315ca3bf98f88ef8f863243f2c56b9656297.jpg?rect=.0%2c.0242990654205607%2c.9999999999999999%2c.8411214953271028&fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: false,
            },
            {
                id: 1328553,
                title: 'Welkom Georgiërs',
                intro:
                    'De mannen die glasvezelkabel aanleggen voor het huis van Ralf Bodelier, blijken  Georgiërs te zijn.  Hopelijk blijft ze een meldpunt zoals de Polen bespaard.',
                topicPrefixOrCategory: 'Anderzijds',
                publicationUrl: '/futures/1328553/welkom-georgiers',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/cc4056c9bb60bb6a9303435108dccf107a4d1740.jpg?rect=.0%2c.0163934426229508%2c.9999999999999999%2c.9690346083788707&fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/cc4056c9bb60bb6a9303435108dccf107a4d1740.jpg?rect=.1575%2c.0%2c.68625%2c.9999999999999999&fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/cc4056c9bb60bb6a9303435108dccf107a4d1740.jpg?rect=.0%2c.0910746812386157%2c.9999999999999999%2c.819672131147541&fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: false,
            },
            {
                id: 1328554,
                title: 'De VS wacht een roerig decennium',
                intro:
                    "Historische cycli voorspellen volgens George Friedman dat de komende tien jaar ‘de zwaarste in de Amerikaanse geschiedenis' worden.",
                topicPrefixOrCategory: 'Review',
                publicationUrl:
                    '/futures/1328554/de-vs-wacht-een-roerig-decennium',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/279ee60464c7f48b817b4435264231c2a5deeba0.jpg?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/279ee60464c7f48b817b4435264231c2a5deeba0.jpg?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/279ee60464c7f48b817b4435264231c2a5deeba0.jpg?fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: false,
            },
        ],
        persoonlijkTeasers: [
            {
                id: 1329355,
                title: 'Reken af met al je schulden',
                intro:
                    'FD Persoonlijk-columnist  Erica Verdegaal reikt ons een handige manier­ aan om snel van onze schulden­ af te komen.',
                topicPrefixOrCategory: 'Column',
                publicationUrl:
                    '/persoonlijk/1329355/reken-af-met-al-je-schulden',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/a41f64a9ce573bfca0d062a2f055af59088436b1.jpg?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/a41f64a9ce573bfca0d062a2f055af59088436b1.jpg?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/a41f64a9ce573bfca0d062a2f055af59088436b1.jpg?fit=crop&crop=faces&auto=format',
                    caption: 'Erica Verdegaal',
                    backgroundColor: 'theme7',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: false,
            },
            {
                id: 1329346,
                title:
                    '‘Hij kan ronduit bot zijn. Maar dat is ook verlegenheid’',
                intro:
                    'Ruben Bromet, geluidstechnicus en muziekproducent, is de zoon van filmmaker Frans Bromet.',
                topicPrefixOrCategory: 'Onder ons',
                publicationUrl:
                    '/persoonlijk/1329346/hij-kan-ronduit-bot-zijn-maar-dat-is-ook-verlegenheid',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/799a3bfe093cd399bd0b37e90c66fcbed71dc8ae.jpg?rect=.04625%2c.0%2c.90875%2c.9999999999999999&fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/799a3bfe093cd399bd0b37e90c66fcbed71dc8ae.jpg?rect=.21%2c.0%2c.605%2c.9999999999999999&fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/799a3bfe093cd399bd0b37e90c66fcbed71dc8ae.jpg?rect=.0%2c.0351239669421488%2c.9999999999999999%2c.9297520661157025&fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: false,
            },
            {
                id: 1329347,
                title: '‘We hebben er veel liefde in gestopt’',
                intro:
                    'Iedere week bespreekt FD Persoonlijk een woning die op zoek is naar een nieuwe eigenaar. Deze week een herenhuis uit de 17de eeuw met wijnkelder en barretje, in een autoluwe buurt in Haarlem. ',
                topicPrefixOrCategory: 'Huis te koop',
                publicationUrl:
                    '/persoonlijk/1329347/we-hebben-er-veel-liefde-in-gestopt',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/dc10b271b246d93c9b6e6ddc652fa45a2c1dc11b.jpg?rect=.0%2c.00187265917603%2c.9999999999999999%2c.9962546816479401&fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/dc10b271b246d93c9b6e6ddc652fa45a2c1dc11b.jpg?rect=.12875%2c.0%2c.6675%2c.9999999999999999&fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/dc10b271b246d93c9b6e6ddc652fa45a2c1dc11b.jpg?rect=.0%2c.1554307116104869%2c.9999999999999999%2c.8426966292134831&fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: false,
            },
            {
                id: 1329356,
                title: 'Hulp in lastige tijden (5): brief aan Wopke',
                intro:
                    ' FD-Persoonlijk columnist Menno de Bree gunt iedereen een vorstelijke verbouwvergoeding.',
                topicPrefixOrCategory: 'Column',
                publicationUrl:
                    '/persoonlijk/1329356/hulp-in-lastige-tijden-5-brief-aan-wopke',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/1fbef753365ae5328e56ffac16f1fded25c6d75b.jpg?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/1fbef753365ae5328e56ffac16f1fded25c6d75b.jpg?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/1fbef753365ae5328e56ffac16f1fded25c6d75b.jpg?fit=crop&crop=faces&auto=format',
                    caption: 'Menno de Bree',
                    backgroundColor: 'theme7',
                },
                latestUpdate: {},
                newWindow: false,
                longRead: false,
            },
        ],
        sourceArticles: [
            {
                id: 1329298,
                version: 6,
                title: 'Oeso voorspelt diepste recessie in meer dan een eeuw',
                state: 'PUBLISHED',
                url:
                    '/economie-politiek/1329298/oeso-voorspelt-diepste-recessie-in-meer-dan-een-eeuw',
                publicationDate: 1591776000000,
                lastModificationDate: 1591859063000,
                genre: 'Macro-economie',
                authors: [
                    {
                        id: 2544,
                        fullName: 'Jule Hinrichs',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            "Na een tweede corona-uitbraak krimpt economie van de rijkste landen dit jaar met 7,6%. Blijft het bij één uitbarsting dan is de krimp 'slechts' 6,1%.",
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252210,
                            path:
                                'ee4c130137cec416a897309e85975720eb501688.jpg',
                            width: 5917,
                            height: 3945,
                            crops: [
                                {
                                    ratio: 'NORMAL',
                                    x: 0,
                                    y: 0.001876172607879925,
                                    width: 1,
                                    height: 0.99812382739212,
                                },
                                {
                                    ratio: 'SQUARE',
                                    x: 0.1275,
                                    y: 0,
                                    width: 0.66625,
                                    height: 1,
                                },
                                {
                                    ratio: 'WIDE',
                                    x: 0,
                                    y: 0.15572232645403378,
                                    width: 1,
                                    height: 0.8442776735459663,
                                },
                            ],
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<fdmg-image><fdmg-id>252211</fdmg-id><fdmg-filename>ee4c130137cec416a897309e85975720eb501688.jpg</fdmg-filename><fdmg-width>5917</fdmg-width><fdmg-height>3945</fdmg-height><fdmg-caption>Een lege Public Market in Seattle.</fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Brian Snyder/Reuters</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-summary title="In het kort"><fdmg-content>In een mild scenario krimpt de economie van de Oeso-landen dit jaar met 6,1%. \nHet somberste scenario gaat uit van 7,6%.\nVoor de eurozone voorspelt de Oeso een krimp van 9,1% à 11,5%.\nNederland komt er met krimp van 8,0% respectievelijk 10,0% relatief goed van af.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-summary><p>De coronacrisis leidt tot het grootste verlies aan inkomens in meer dan een eeuw. Volgend jaar kan  de economische schade nog niet worden goedgemaakt, ook als een tweede uitbraak van de pandemie en daarmee een tweede fase van <em>lockdowns</em> uitblijft. Dat stelt woensdag de Organisatie  voor Economische Samenwerking en Ontwikkeling, (Oeso), in een ongekend somber halfjaarrapport over de wereldeconomie.</p><fdmg-quote><fdmg-message>\'Volgend jaar kan de de economische schade nog niet worden goedgemaakt, ook als een 2e uitbraak uitblijft.\'</fdmg-message><fdmg-author>Oeso</fdmg-author></fdmg-quote><p>De beleidsmakers in de wereld balanceren op een koord, schrijft hoofdeconoom Laurence Boone van de club van rijke landen. De economische activiteiten zijn overal in de wereld dramatisch ingestort, de werkloosheid vliegt omhoog en de tekorten op de overheidsbegrotingen nemen sterk toe, schrijft ze. Het herstel komt niet op gang als het vertrouwen niet terugkeert, wat volgens Boone zonder goede internationale samenwerking \'niet ten volle\' zal gebeuren. Ook bij de ontwikkeling van een vaccin tegen Covid-19 is internationale samenwerking geboden. </p><fdmg-number-frame><fdmg-heading>-9,1%</fdmg-heading><fdmg-content>Voor de eurozone is er -9,1% krimp ingetekend.</fdmg-content></fdmg-number-frame><fdmg-number-frame><fdmg-heading>€ 145.000.000 - € 165.000.000 </fdmg-heading><fdmg-content>Voor de eurozone is er -9,1% krimp ingetekend.</fdmg-content></fdmg-number-frame><fdmg-number-frame><fdmg-heading>€ 165.000.000 </fdmg-heading><fdmg-content>Voor de eurozone is er -9,1% krimp ingetekend.</fdmg-content></fdmg-number-frame><p>De Oeso presenteert in de Economic Outlook altijd één voorspelling voor de economie, van de wereld, de eurozone en van individuele landen. Van dat gebruik is dit keer afgeweken, het Parijse instituut presenteert twee scenario’s zonder een van de twee als meest waarschijnlijk aan te merken.</p><h2>Milde scenario </h2><p>In het relatief milde scenario blijft een tweede uitbraak van het coronavirus uit en kan daarom een tweede fase van <em>lockdowns</em> achterwege blijven. Toch is de schade enorm: de economie van de ontwikkelde Oeso-landen zou dit jaar met 6,1% krimpen. Voor de eurozone is er -9,1% ingetekend.</p><p>Nederland komt er met een krimp van 8,0% nog relatief goed van af. Toch is de Oeso hiermee al veel somberder dan maandag De Nederlandsche Bank, die voor 2020 een krimp van 6,4% voorziet. </p><h2>Tweede uitbraak</h2><p>In het zware, tweede scenario volgen er wel een tweede uitbraak en een nieuwe periode van <em>lockdowns</em>. De economische schade pakt dan enorm groot uit, met een krimp voor alle Oeso-landen in 2020 van 7,6%, voor de eurozone van 11,5% en voor Nederland van 10%. Italië en Frankrijk staan hier op -14%. De Oeso houdt regeringen als het ware een spiegel voor om er alles aan te doen een tweede uitbraak van het virus te voorkomen, of zo klein mogelijk te houden. </p><fdmg-image><fdmg-id>252212</fdmg-id><fdmg-filename>ddded77dc599729d88dd5ec5d36096c1ef524020.jpg</fdmg-filename><fdmg-width>4819</fdmg-width><fdmg-height>3213</fdmg-height><fdmg-caption>In Rome en andere Italiaanse steden zijn deze week de musea beperkt opengegaan. Er komen vooralsnog vooral veel Italianen op af.</fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Remo Casilli/Reuters</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><p>In het eerste, minder slechte scenario zouden de meeste landen in 2021 met een stevige inhaalgroei ongeveer tweederde tot driekwart van de schade van 2020 weer goedmaken. In het ongunstige scenario zouden in 2021 de economieën slechts een beperkt herstel te zien geven. Zo zou Nederland met een plus van 3,4% slechts een klein deel van de min van 10% goedmaken. Dat geldt voor alle landen in min of meer vergelijkbare mate. Voor de eurozone staat er in dat geval voor 2021 +3,5% in de boeken.</p><h2>Uitzonderlijke maatregelen</h2><p>De Oeso stelt dat in deze omstandigheden uitzonderlijke beleidsmaatregelen geboden zijn. Overheden kunnen de veiligheidsnetten bieden die het mensen en bedrijven mogelijk maakt zich aan te passen. Maar de Oeso waarschuwt dat overheden niet in staat zijn de activiteiten in de particuliere sector, de banen en de lonen voor een langere periode te beschermen. Overheden moeten dan ook overschakelen van brede, generieke steunmaatregelen naar gerichte steun. </p><p>‘Kapitaal en werknemers van getroffen sectoren en bedrijven zullen moeten bewegen naar sectoren met groei. Dergelijke transities zijn moeilijk en vinden zelden snel genoeg plaats om te voorkomen dat het aantal bedrijfsfaillissementen toeneemt waardoor een langere periode met werkloosheid ontstaat’, schrijft Boone.</p><fdmg-image><fdmg-id>252213</fdmg-id><fdmg-filename>9c19d5c1e387ce68ec0647d3f95ff3e4c5b8ef4e.jpg</fdmg-filename><fdmg-width>6400</fdmg-width><fdmg-height>4267</fdmg-height><fdmg-caption>New York komt langzaam uit zijn lockdown-fase. Het vervoersbedrijf achter de Staten Island-veerboot heeft kruizen aangebracht op zitplaatsen om passagiers op afstand van elkaar te houden. Mensen werkzaam in niet-essentiële beroepen (bouw, fabriekswerk) mogen sinds maandag weer aan de slag. Kantoren, cafés en kapperszaken blijven dicht.</fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Caitlin Ochs/Reuters</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><p>Ze stelt dat het nu gevoerde beleid de economische en sociale omstandigheden voor het komende decennium bepalen. Ultraruim monetair beleid en hogere overheidsschulden, schrijft ze, zijn noodzakelijk en worden geaccepteerd zolang de economische activiteiten en inflatie onder druk staan en de werkloosheid hoog is.</p><h2>Werkloosheid</h2><p>Zo zou in het milde scenario de werkloosheid in de eurozone dit jaar stijgen van 7,5% van de beroepsbevolking in 2019 naar 9,8% dit jaar om in 2021 weer iets af te zwakken tot 9,5%. Voor Nederland gaat het dan om een stijging van 3,4% in 2019 naar 5,9% dit jaar, terwijl er in 2021 al weer een daling tot 4,4% mogelijk zou zijn. </p><p>In het sombere scenario komt de werkloosheid in de eurozone dit jaar op 10,3% uit en in 2021 op 11,0%. Voor Nederland gaat het dan om respectievelijk 6,5% en 6,6%.</p><fdmg-readmore title="Lees ook"><fdmg-content><a xmlns="http://www.infomaker.se/idf/1.0" href="https://fd.nl/economie-politiek/1347159/dnb-economie-pas-in-2023-over-klap-recessie-heen" id="link-4f81d3950de900ca830366131fd80ed2" target="_self" rel="noopener noreferrer noopener noreferrer">DNB: economie pas in 2023 over klap recessie heen</a>\n<a xmlns="http://www.infomaker.se/idf/1.0" href="https://fd.nl/economie-politiek/1347174/geen-lockdown-raakt-de-economie-ook-heel-hard" id="link-620897a87eae61a6a007202c7ab34701" target="_self" rel="noopener noreferrer noopener noreferrer">Géén lockdown raakt de economie óók heel hard</a></fdmg-content></fdmg-readmore>',
                originalArticleId: '1347352',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: false,
                shortArticle: false,
                fdPersonal: false,
                topStory:
                    'Oeso voorspelt diepste recessie in meer dan een eeuw',
                printTitle:
                    'Oeso voorspelt diepste recessie in meer dan een eeuw',
                section: 'economie-politiek',
                sectionDirectory: 'economie-politiek',
                sectionTitle: 'Economie & Politiek',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 333,
                        tag: 'Oeso',
                        enabled: true,
                        directory: 'oeso',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 2310,
                        tag: 'Recessie',
                        enabled: true,
                        directory: 'recessie',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 66016,
                        tag: 'Macro-economie',
                        enabled: true,
                        directory: 'macro-economie',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 1302,
                        tag: 'Werkloosheid',
                        enabled: true,
                        directory: 'werkloosheid',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 273,
                        tag: 'Begroting',
                        enabled: true,
                        introText:
                            'Vooraf opgesteld raming van kosten en baten. Geeft de financiële effecten van besluiten weer.',
                        directory: 'begroting',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 96501,
                        tag: 'Coronavirus',
                        enabled: true,
                        introText:
                            'Het coronavirus heeft de wereld in zijn greep. Terwijl het aantal doden iedere dag flink stijgt, krijgt ook de economie klap na klap. Met duizenden miljarden proberen regeringsleiders te redden wat er te redden valt. Op de beurzen wisselen positieve en negatieve records elkaar af.',
                        directory: 'coronavirus',
                        tagCategoryType: 'SECTION',
                    },
                ],
                articleLength: 'Lplus',
                category: 'NEWS',
                workflow: {
                    workInstructions:
                        "LET OP EMBARGO\n\nFoto 1: A woman walks through empty streets outside the Public Market, amid the coronavirus disease (COVID-19) outbreak, in Seattle, Washington, U.S., March 20, 2020.   REUTERS/Brian Snyder     TPX IMAGES OF THE DAY\n\nFoto 2: A woman wearing a protective mask walks outside Castel Sant'Angelo, as Italy tightens measures to try and contain the spread of coronavirus disease (COVID-19), in Rome, Italy March 23, 2020. REUTERS/Remo Casilli     TPX IMAGES OF THE DAY\n\nFoto 3: A commuter enjoys the sunset alone on the upper deck of a Staten Island Ferry during the outbreak of the coronavirus disease (COVID-19) in Manhattan, New York City, U.S., March 26, 2020. REUTERS/Caitlin Ochs     TPX IMAGES OF THE DAY",
                    characterCount: 4296,
                    state: 'READY',
                    articleCreatedBy: 'Jule Hinrichs',
                    articleLastModifiedBy: 'Bie Kho',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        "Na een tweede corona-uitbraak krimpt economie van de rijkste landen dit jaar met 7,6%. Blijft het bij één uitbarsting dan is de krimp 'slechts' 6,1%.",
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252210,
                        path: 'ee4c130137cec416a897309e85975720eb501688.jpg',
                        width: 5917,
                        height: 3945,
                        crops: [
                            {
                                ratio: 'NORMAL',
                                x: 0,
                                y: 0.001876172607879925,
                                width: 1,
                                height: 0.99812382739212,
                            },
                            {
                                ratio: 'SQUARE',
                                x: 0.1275,
                                y: 0,
                                width: 0.66625,
                                height: 1,
                            },
                            {
                                ratio: 'WIDE',
                                x: 0,
                                y: 0.15572232645403378,
                                width: 1,
                                height: 0.8442776735459663,
                            },
                        ],
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329299,
                version: 1,
                title:
                    "'ECB overweegt oprichting bad bank voor slechte leningen'",
                state: 'PUBLISHED',
                url:
                    '/economie-politiek/1329299/ecb-overweegt-oprichting-bad-bank-voor-slechte-leningen',
                publicationDate: 1591773472000,
                lastModificationDate: 1591778439000,
                genre: 'Financiële sector',
                authors: [
                    {
                        id: 28647,
                        fullName: 'Van onze redacteur',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'De centrale bank zou volgens bronnen van Reuters al een werkgroep hebben opgezet. Ook zou president Christine Lagarde banken en EU-functionarissen hebben geraadpleegd.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252215,
                            path:
                                'b0738157aa4a06430432c1246ec5f67cc9b1877a.jpg',
                            width: 4030,
                            height: 2745,
                            crops: [
                                {
                                    ratio: 'NORMAL',
                                    x: 0,
                                    y: 0.02018348623853211,
                                    width: 1,
                                    height: 0.9761467889908257,
                                },
                                {
                                    ratio: 'SQUARE',
                                    x: 0.12875,
                                    y: 0,
                                    width: 0.68125,
                                    height: 1,
                                },
                                {
                                    ratio: 'WIDE',
                                    x: 0,
                                    y: 0.1743119266055046,
                                    width: 1,
                                    height: 0.8256880733944955,
                                },
                            ],
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<fdmg-image><fdmg-id>252216</fdmg-id><fdmg-filename>b0738157aa4a06430432c1246ec5f67cc9b1877a.jpg</fdmg-filename><fdmg-width>4030</fdmg-width><fdmg-height>2745</fdmg-height><fdmg-caption>ECB-president Christine Lagarde.</fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Ralph Orlowski/Reuters</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><p>De Europese Centrale Bank (ECB) werkt aan plannen om een <em>bad bank</em> op te zetten. In zo\'n bank zouden slechte leningen van Europese banken kunnen worden geparkeerd. Het Europese noodfonds ESM zou de obligaties van de bad bank, die als onderpand kunnen dienen voor liquiditeit van de ECB, moeten garanderen.</p><p>Dat <a href="https://www.reuters.com/article/us-health-coronavirus-ecb-badbank-exclus/exclusive-ecb-prepares-bad-bank-plan-for-wave-of-coronavirus-toxic-debt-sources-idUSKBN23H0MV" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">meldt persbureau Reuters</a> op basis van twee betrokken bronnen. De ECB zou volgens een van de hen al een speciale werkgroep hebben opgezet om het idee verder uit te werken. Ook zou president Christine Lagarde de afgelopen weken banken en EU-functionarissen hebben geraadpleegd. De ECB zelf wil geen commentaar geven.</p><h2>Tsunami aan leningen</h2><p>Het idee voor een bad bank komt op een moment dat de Europese Unie (EU) zich diep in de schulden steekt om massawerkloosheid te voorkomen en de economieën van de lidstaten nieuw leven probeert in te blazen. Een bank voor slechte leningen zou verlichting kunnen geven in een tijd waarin een tsunami aan slechte leningen wordt verwacht.</p><p>Er zijn eerder plannen voor een bad bank voor de eurozone geweest, maar die liepen op niets uit. In april nog pleitte president Yannis Stournaras van de Griekse centrale bank voor een bad bank, waarbij hij ook verwees naar de eurocrisis van 2009. Griekse, Portugese en Italiaanse banken hebben nog altijd last van slechte bedrijfskredieten uit die tijd.</p><h2>Weerstand in Brussel</h2><p>Stournaras deed zijn pleidooi in april in de Britse zakenkrant Financial Times. De krant stelde toen dat vertegenwoordigers van de ECB overleg voeren met topambtenaren van de Europese Commissie over het voorstel. Stournaras is ook lid van het beleidscomité van de ECB.</p><p>Er bestaat in Brussel weerstand tegen het idee vanwege het uitgangspunt dat staatshulp pas wordt gegeven nadat aandeelhouders en obligatiehouders een deel van de \'financiële pijn\' hebben genomen. Dat is vastgelegd in zogeheten resolutieplannen. Bronnen in Brussel verwachtten destijds niet dat het plan enige kans zou maken.</p><fdmg-readmore title="Lees ook"><fdmg-content><a href="https://fd.nl/beurs/1341929/europese-bad-bank-moet-banken-verlichting-geven" id="link-918ef3868b4d32740f71f87e306276cc" rel="noopener noreferrer noopener noreferrer" target="_self">Griekse centralebankpresident pleit voor Europese bad bank</a>\n<a href="https://fd.nl/economie-politiek/1342187/moet-politiek-ingrijpen-om-banken-van-giftige-leningen-af-te-helpen" id="link-aed7ce328674a07f5f654adcb3fb8d20" rel="noopener noreferrer noopener noreferrer" target="_self">Moet politiek ingrijpen om banken van giftige leningen af te helpen?</a></fdmg-content></fdmg-readmore>',
                originalArticleId: '1347385',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: false,
                shortArticle: false,
                fdPersonal: false,
                section: 'economie-politiek',
                sectionDirectory: 'economie-politiek',
                sectionTitle: 'Economie & Politiek',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 6,
                        tag: 'EU',
                        enabled: true,
                        introText:
                            'Afkorting van Europese Unie. De Unie bestaat uit 28 landen en is het belangrijkste samenwerkingsverband in Europa. ',
                        directory: 'eu',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 83511,
                        tag: 'Financiële sector',
                        enabled: true,
                        directory: 'financiele-sector',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 32053,
                        tag: 'ECB',
                        enabled: true,
                        directory: 'ecb',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 66253,
                        tag: 'Christine Lagarde',
                        enabled: true,
                        directory: 'christine-lagarde',
                        tagCategoryType: 'PERSON',
                    },
                    {
                        id: 223,
                        tag: 'Griekenland',
                        enabled: true,
                        directory: 'griekenland',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 51,
                        tag: 'Kredietverlening',
                        enabled: true,
                        directory: 'kredietverlening',
                        tagCategoryType: 'SUBJECT',
                    },
                ],
                articleLength: 'S',
                category: 'NEWS',
                workflow: {
                    workInstructions: '',
                    characterCount: 1941,
                    state: 'READY',
                    articleCreatedBy: 'Tjabel Daling',
                    articleLastModifiedBy: 'Sjors Rodenburg',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'De centrale bank zou volgens bronnen van Reuters al een werkgroep hebben opgezet. Ook zou president Christine Lagarde banken en EU-functionarissen hebben geraadpleegd.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252215,
                        path: 'b0738157aa4a06430432c1246ec5f67cc9b1877a.jpg',
                        width: 4030,
                        height: 2745,
                        crops: [
                            {
                                ratio: 'NORMAL',
                                x: 0,
                                y: 0.02018348623853211,
                                width: 1,
                                height: 0.9761467889908257,
                            },
                            {
                                ratio: 'SQUARE',
                                x: 0.12875,
                                y: 0,
                                width: 0.68125,
                                height: 1,
                            },
                            {
                                ratio: 'WIDE',
                                x: 0,
                                y: 0.1743119266055046,
                                width: 1,
                                height: 0.8256880733944955,
                            },
                        ],
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329300,
                version: 2,
                title:
                    'Ceo CrossFit stapt op na omstreden uitlatingen over George Floyd',
                state: 'PUBLISHED',
                url:
                    '/ondernemen/1329300/ceo-crossfit-stapt-op-na-omstreden-uitlatingen-over-george-floyd',
                publicationDate: 1591771155000,
                lastModificationDate: 1591859022000,
                genre: 'Sport',
                authors: [
                    {
                        id: 28647,
                        fullName: 'Van onze redacteur',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'De oprichter van de sportschoolketen Greg Glassman kwam deze week in opspraak na meerdere opmerkingen over de zwarte demonstrant',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252218,
                            path:
                                '4f6b3d4b11044946073e828cae56a29060c7abe7.jpg',
                            width: 5414,
                            height: 3609,
                            crops: [
                                {
                                    ratio: 'NORMAL',
                                    x: 0,
                                    y: 0,
                                    width: 1,
                                    height: 0.99812382739212,
                                },
                                {
                                    ratio: 'SQUARE',
                                    x: 0.1575,
                                    y: 0,
                                    width: 0.66625,
                                    height: 1,
                                },
                                {
                                    ratio: 'WIDE',
                                    x: 0,
                                    y: 0,
                                    width: 1,
                                    height: 0.8442776735459663,
                                },
                            ],
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<fdmg-image><fdmg-id>252219</fdmg-id><fdmg-filename>4f6b3d4b11044946073e828cae56a29060c7abe7.jpg</fdmg-filename><fdmg-width>5414</fdmg-width><fdmg-height>3609</fdmg-height><fdmg-caption>CrossFit, dat fitness, gewichtheffen, atletiek en gymnastiek combineert, groeide de afgelopen twintig jaar uit tot een een populaire trainingsvorm met 15.000 sportscholen wereldwijd.</fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Lillian Suwanrumpha/AFP</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><p>Greg Glassman, medeoprichter en ceo van de Amerikaanse fitnessketen CrossFit, is uit eigen beweging vertrokken. Dat gebeurde nadat hij in opspraak was geraakt door omstreden uitspraken over de onlangs overleden Amerikaan George Floyd. De zwarte arrestant kwam eind mei om door politiegeweld. </p><p>De positie van Glassman kwam afgelopen weekend onder druk te staan, nadat hij een reeks uitlatingen had gedaan op Twitter. Zo reageerde hij op een onderzoek van de Universiteit van Washington naar het verband tussen racisme en volksgezondheid met de woordspeling \'Het is floyd-19\', verwijzend naar covid-19, de ziekte die wordt veroorzaakt door het coronavirus.</p><h2>Onbedoeld gekwetst</h2><p>Ook zou Glassman volgens de Amerikaanse progressieve nieuwssite Buzzfeed hebben gezegd: \'Waarom zou ik nu moeten rouwen [om George Floyd]? Geef me een betere reden dan het argument dat het een ding is dat witte mensen doen.\'</p><fdmg-twitter><fdmg-url>https://twitter.com/CrossFitCEO/status/1269404726581288960</fdmg-url></fdmg-twitter><p>In een <a href="https://www.crossfit.com/greg-glassman-retires" rel="noopener noreferrer noopener noreferrer noopener noreferrer" target="_blank" title="">verklaring </a> laat Glassman weten het te betreuren dat zijn uitlatingen \'onbedoeld veel van zijn leden heeft gekwetst\'. De 63-jarige Amerikaan gaat nu met pensioen, schrijft hij. In Dave Castro heeft het bedrijf inmiddels een opvolger gevonden voor Glassman. </p><h2>Reebok</h2><p>Diverse franchisenemers hadden de opmerkingen al bekritiseerd. Sportmerk Reebok ging een stap verder door de sponsoring te beëindigen. Ook Nederlandse sportscholen, waaronder Vondelgym van Arie Boomsma, trokken hun samenwerking met CrossFit in.</p><p>CrossFit, dat fitness, gewichtheffen, atletiek en gymnastiek combineert, groeide het afgelopen decennium uit tot een populaire trainingsvorm onder sporters. Glassman en zijn ex-vrouw richten het bedrijf twintig jaar geleden op. Onder zijn leiding bouwde hij de keten uit tot meer dan 15.000 sportscholen wereldwijd. In Nederland telt het bedrijf ruim honderd zogenaamde CrossFit-boxen.</p>',
                originalArticleId: '1347480',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: false,
                shortArticle: false,
                fdPersonal: false,
                printTitle: 'Ceo CrossFit weg na uitlatingen Floyd',
                section: 'ondernemen',
                sectionDirectory: 'ondernemen',
                sectionTitle: 'Ondernemen',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 12,
                        tag: 'Strategie',
                        enabled: true,
                        directory: 'strategie',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 982,
                        tag: 'Discriminatie',
                        enabled: true,
                        directory: 'discriminatie',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 33,
                        tag: 'Onderzoek',
                        enabled: true,
                        directory: 'onderzoek',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 210,
                        tag: 'Sport',
                        enabled: true,
                        directory: 'sport',
                        tagCategoryType: 'SECTOR',
                    },
                ],
                articleLength: 'S',
                category: 'NEWS',
                workflow: {
                    workInstructions: '',
                    characterCount: 1792,
                    state: 'READY',
                    articleCreatedBy: 'Guy Hoeks',
                    articleLastModifiedBy: 'Sjors Rodenburg',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'De oprichter van de sportschoolketen Greg Glassman kwam deze week in opspraak na meerdere opmerkingen over de zwarte demonstrant',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252218,
                        path: '4f6b3d4b11044946073e828cae56a29060c7abe7.jpg',
                        width: 5414,
                        height: 3609,
                        crops: [
                            {
                                ratio: 'NORMAL',
                                x: 0,
                                y: 0,
                                width: 1,
                                height: 0.99812382739212,
                            },
                            {
                                ratio: 'SQUARE',
                                x: 0.1575,
                                y: 0,
                                width: 0.66625,
                                height: 1,
                            },
                            {
                                ratio: 'WIDE',
                                x: 0,
                                y: 0,
                                width: 1,
                                height: 0.8442776735459663,
                            },
                        ],
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329307,
                version: 2,
                title:
                    "Kamer wil dat kabinet IJmuiden bevrijdt van 'het juk van Tata' ",
                state: 'PUBLISHED',
                url:
                    '/economie-politiek/1329307/kamer-wil-dat-kabinet-ijmuiden-bevrijdt-van-het-juk-van-tata',
                publicationDate: 1591733207000,
                lastModificationDate: 1591778451000,
                genre: 'Industrie',
                authors: [
                    {
                        id: 28647,
                        fullName: 'Van onze redacteur',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Kamerbreed gesteunde PvdA-motie roept op om zo nodig onconventionele middelen in te zetten. ',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252237,
                            path:
                                '62432c8da1512b5f84ea88f02af146c9a4e947a6.jpg',
                            width: 5472,
                            height: 3510,
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    "<fdmg-image><fdmg-id>252238</fdmg-id><fdmg-filename>62432c8da1512b5f84ea88f02af146c9a4e947a6.jpg</fdmg-filename><fdmg-width>5472</fdmg-width><fdmg-height>3510</fdmg-height><fdmg-caption>Stakende werknemer bij Tata Steel. In IJmuiden staan rond de duizend banen op de tocht.</fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Koen van Weel/EPA</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><p>De Tweede Kamer wil dat het kabinet alles uit de kast haalt om Tata Steel in IJmuiden, het voormalige Hoogovens, voor Nederland te behouden. Een PvdA-motie met die strekking is dinsdag met algemene stemmen aangenomen in de Kamer.</p><p>In de motie staat dat de belangrijkste Nederlandse staalindustrie wordt beknot in het vermogen om zelfstandig te beslissen over investeringen in innovatie, verduurzaming en werkgelegenheid. Het kabinet moet zo nodig 'onconventionele middelen' in zetten om zeker te stellen dat Tata Steel in IJmuiden kan blijven innoveren en verduurzamen.</p><h2>Banen op de tocht</h2><p>'De minister van Economische Zaken moet aan de bak om het bedrijf te bevrijden van het juk van het Tata-concern', zei de indiener van de motie William Moorlag tegen de NOS. 'Hoe hij dat moet doen, ga ik niet voor hem invullen. Maar dat alle partijen de motie steunen, spoort hem in ieder geval aan om alles uit de kast te trekken.' </p><p>Tata Steel in IJmuiden ligt overhoop met zijn eigenaar, het Indiase bedrijvenconglomeraat Tata Group. In IJmuiden staan rond de duizend banen op de tocht, omdat de Indiase eigenaar wil dat zijn Europese staalactiviteiten op eigen benen kunnen staan. Naast IJmuiden is dat de Britse tak van Tata Steel Europe.</p><h2>Hoogovens herstellen</h2><p>Van verschillende kanten is gesuggereerd om het oude Hoogovens in ere te herstellen, dat wil zeggen als zelfstandige Nederlandse staalproducent. Pleitbezorgers zien daarbij een rol weggelegd voor de Nederlandse overheid, maar bijvoorbeeld ook voor pensioenfondsen.</p>",
                originalArticleId: '1347252',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                section: 'economie-politiek',
                sectionDirectory: 'economie-politiek',
                sectionTitle: 'Economie & Politiek',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 49,
                        tag: 'Industrie',
                        enabled: true,
                        directory: 'industrie',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 67503,
                        tag: 'ThyssenKrupp',
                        enabled: true,
                        kvkNumber: '24324608',
                        directory: 'thyssenkrupp',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 12,
                        tag: 'Strategie',
                        enabled: true,
                        directory: 'strategie',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 66222,
                        tag: 'Tata',
                        enabled: true,
                        kvkNumber: '34040331',
                        directory: 'tata',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 38,
                        tag: 'Investeringen',
                        enabled: true,
                        introText:
                            'Het gebruik van geld, of tijd, of energie om een bepaald doel te bereiken. ',
                        directory: 'investeringen',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 33605,
                        tag: 'Mededinging',
                        enabled: true,
                        directory: 'mededinging',
                        tagCategoryType: 'SUBJECT',
                    },
                ],
                articleLength: 'UNLIMITED',
                category: 'NEWS',
                workflow: {
                    workInstructions: 'Amsterdam',
                    characterCount: 1507,
                    state: 'READY',
                    articleCreatedBy: 'Laurens Berentsen',
                    articleLastModifiedBy: 'Joep Westerveld',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Kamerbreed gesteunde PvdA-motie roept op om zo nodig onconventionele middelen in te zetten. ',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252237,
                        path: '62432c8da1512b5f84ea88f02af146c9a4e947a6.jpg',
                        width: 5472,
                        height: 3510,
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329309,
                version: 2,
                title: 'Kabinet komt snel met regels voor veilig vliegen',
                state: 'PUBLISHED',
                url:
                    '/economie-politiek/1329309/kabinet-komt-snel-met-regels-voor-veilig-vliegen',
                publicationDate: 1591731150000,
                lastModificationDate: 1591778454000,
                genre: 'Vervoer',
                authors: [
                    {
                        id: 28647,
                        fullName: 'Van onze redacteur',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Tweede Kamer wil onderzoek naar en regels voor voldoende afstand aan boord. ',
                        type: 'FDMG_WEB_PAGES',
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<p>Het kabinet komt uiterlijk volgende week maandag met regels die besmetting met het coronavirus tijdens vliegreizen moeten voorkomen. De Tweede Kamer heeft daar om gevraagd, nadat de laatste dagen onrust is ontstaan over de maatregelen van vliegmaatschappijen om besmetting tegen te gaan.</p><p>De maatschappijen hanteren op dit moment hun eigen protocollen. De regel dat anderhalve meter afstand moet worden gehouden, geldt niet. Dat zou rendabel vliegen onmogelijk maken, aldus de luchtvaartsector. Wel zijn passagiers verplicht mondkapjes te dragen.</p><p>Nadat de Tweede Kamer dinsdag in een motie om algemeen geldende regels had gevraagd, zegde transportminister Cora van Nieuwenhuizen die toe. Volgens de VVD-minister kunnen deze regels er aanstaande maandag zijn. Hiervoor kan het RIVM gebruikmaken van de protocollen die de maatschappijen nu al hanteren, aldus Van Nieuwenhuizen. Daarin ontbreekt dus de anderhalvemeterregel.</p>',
                originalArticleId: '1347351',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                section: 'economie-politiek',
                sectionDirectory: 'economie-politiek',
                sectionTitle: 'Economie & Politiek',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 537,
                        tag: 'Zuid-Amerika',
                        enabled: true,
                        directory: 'zuid-amerika',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 84,
                        tag: 'Tweede Kamer',
                        enabled: true,
                        introText:
                            'De volksvertegenwoordiging, samen met de Eerste Kamer de Staten-Generaal van Nederland. ',
                        directory: 'tweede-kamer',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 50506,
                        tag: 'Elon Musk',
                        enabled: true,
                        directory: 'elon-musk',
                        tagCategoryType: 'PERSON',
                    },
                    {
                        id: 672,
                        tag: 'Consumentenbescherming',
                        enabled: true,
                        directory: 'consumentenbescherming',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 32476,
                        tag: 'Regelgeving',
                        enabled: true,
                        introText:
                            'Kaders die ervoor zorgen dat wetten op de juiste manier worden toegepast of uitgevoerd. ',
                        directory: 'regelgeving',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 83404,
                        tag: 'Vervoer',
                        enabled: true,
                        directory: 'vervoer',
                        tagCategoryType: 'SECTOR',
                    },
                ],
                articleLength: 'UNLIMITED',
                category: 'NEWS',
                workflow: {
                    workInstructions: 'Amsterdam',
                    characterCount: 918,
                    state: 'READY',
                    articleCreatedBy: 'Laurens Berentsen',
                    articleLastModifiedBy: 'Kelly van Alphen',
                },
                fullWidth: false,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Tweede Kamer wil onderzoek naar en regels voor voldoende afstand aan boord. ',
                    type: 'FDMG_WEB_PAGES',
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329310,
                version: 2,
                title:
                    'Luchtvaart stevent op monsterverlies af van $100 mrd in twee jaar tijd ',
                state: 'PUBLISHED',
                url:
                    '/economie-politiek/1329310/luchtvaart-stevent-op-monsterverlies-af-van-100-mrd-in-twee-jaar-tijd',
                publicationDate: 1591731027000,
                lastModificationDate: 1591778455000,
                genre: 'Vervoer',
                authors: [
                    {
                        id: 20349,
                        fullName: 'Frank Gersdorf',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Branchevereniging Iata voorziet explosieve groei van schuldenlast tot $550 mrd en verlies van een miljoen banen tot eind dit jaar.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252243,
                            path:
                                '54ef1d705f5037f6078873219d324547f97666e4.jpg',
                            width: 6665,
                            height: 4462,
                            crops: [
                                {
                                    ratio: 'NORMAL',
                                    x: 0,
                                    y: 0.007462686567164179,
                                    width: 1,
                                    height: 0.9925373134328358,
                                },
                                {
                                    ratio: 'SQUARE',
                                    x: 0.12875,
                                    y: 0.024253731343283583,
                                    width: 0.65375,
                                    height: 0.9757462686567164,
                                },
                                {
                                    ratio: 'WIDE',
                                    x: 0,
                                    y: 0.05783582089552239,
                                    width: 1,
                                    height: 0.8395522388059702,
                                },
                            ],
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    "<fdmg-image><fdmg-id>252244</fdmg-id><fdmg-filename>54ef1d705f5037f6078873219d324547f97666e4.jpg</fdmg-filename><fdmg-width>6665</fdmg-width><fdmg-height>4462</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit>Foto: Tammy van Nerum voor het FD</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-summary title=\"In het kort\"><fdmg-content>Branchevereniging Iata schetst een gitzwart scenario voor luchtvaartmaatschappijen.\nHet voorziet explosieve groei van schuldenlast van bedrijven, tot $550 mrd dit jaar.\nWerkgelegenheid loopt dit jaar terug van 2,9 miljoen naar 1,9 miljoen arbeidsplaatsen.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-summary><p>Luchtvaartbedrijven over de gehele wereld gaan door een diep dal. De sector zal dit en volgend jaar verliezen lijden van vele tientallen miljarden dollars en een recordschuld opbouwen. Meer dan een miljoen banen dreigen nog voor het einde van het jaar te verdwijnen.</p><p>Dit gitzwarte scenario schetste de International Air Transport Association (Iata) dinsdag. De internationale branchevereniging met bijna driehonderd aangesloten luchtvaartmaatschappijen raamt het totale verlies op $100 mrd dit en volgend jaar. Dat zou het grootste verlies zijn in de geschiedenis van de luchtvaart, benadrukte Iata-leider Alexandre de Juniac, bij een halfjaarlijkse terug- en vooruitblik in Genève. </p><p>'Ter vergelijking: tijdens de financiële crisis en de hoge olieprijzen in 2008 en 2009 kampten luchtvaartbedrijven met verliezen van $31 mrd', zei De Juniac, tot 2016 de voorman bij Air France-KLM. 'Niets is vergelijkbaar met de omvang van de huidige crisis.'</p><fdmg-infographic height=\"500\"><fdmg-url>https://localfocuswidgets.net/5edff058a0639</fdmg-url></fdmg-infographic><h2>Schuldenexplosie</h2><p>De Fransman zei dat regeringen hebben kunnen voorkomen dat luchtvaartbedrijven bankroet gingen, maar dat de hulppakketten de schuldenlast wel enorm laten stijgen. De schulden groeien dit jaar met $120 mrd tot $550 mrd. 'Dat laatste is 92% van de verwachte opbrengsten in 2021.'</p><p>Tot midden mei ontvingen luchtvaartbedrijven $123 mrd aan overheidshulp. Het bedrag aan noodsteun voor heel 2020 zal veel groter zijn, want nog lang niet alle hulppakketten zijn rond. De onderhandelingen tussen Den Haag en KLM over €2 mrd tot €4 mrd aan ondersteuning zijn bijvoorbeeld nog steeds gaande. </p><h2>Frankrijk</h2><p>Ook in andere landen wordt nog volop aan noodscenario's gesleuteld. Parijs maakte dinsdag €15 mrd vrij voor ondersteuning van de gehele Franse luchtvaartindustrie, dus inclusief de fabrikanten van vliegtuigen en vliegtuigonderdelen. Daarvan is €7 mrd bestemd voor Air France.</p><p>Het blijkt moeilijk voor luchtvaartmaatschappijen om te voldoen aan eisen die overheden stellen, bijvoorbeeld voor vergroening. Zij vrezen dat hun concurrentiepositie daardoor verzwakt. </p><p>Soms hebben de ondernemingen geen keuze. In Oostenrijk slikte het noodlijdende Austrian Airlines dinsdag dat tickets voortaan minimaal €40 euro moeten kosten en dat er toeslag van €30 euro komt voor korte vluchten. </p><p>De overheidssteun in Europa is veel beperkter dan die in Noord-Amerika. Volgens de Iata kregen Amerikaanse bedrijven ongeveer 25% van hun omzet als ondersteuning. Bij hun Europese concurrenten was dit gemiddeld 15%. </p><h2>Een miljoen banen</h2><p>Overheden helpen luchtvaartmaatschappijen onder meer om banen te behouden. Toch kunnen zij niet voorkomen dat de werkgelegenheid in de sector een dreun krijgt. De Iata houdt er rekening mee dat er eind dit jaar nog maar 1,9 miljoen arbeidsplaatsen over zijn van de 2,9 miljoen aan het begin van het jaar. </p><p>In totaal lopen volgens de branchevereniging 32 miljoen banen gevaar. Dat is inclusief sectoren die mede afhankelijk zijn van de luchtvaart, zoals het toerisme.</p><h2>Enorm contrast met na 9/11</h2><p>Vooruitblikkend stelt Iata-topman De Juniac dat de luchtvaart een veerkrachtige sector is, die met een gezamenlijke aanpak het vertrouwen van de reiziger kan terugwinnen. Dat moet de aftrap zijn voor het herstel van de luchtvaart. </p><p>De gezondheidsrichtlijnen van de ICAO, de luchtvaartorganisatie van de Verenigde Naties, liggen volgens hem aan de basis daarvan. 'Dat is een enorm contrast met na 9/11, toen iedereen zijn eigen ding deed en we twintig jaar nodig hadden om onze verschillen glad te strijken.'</p><p>De Juniac pleit er wel voor om 'maatregelen die niet langer nodig zijn voor de gezondheid', in te trekken. 'Meer dan 80% van de reizigers vertellen ons dat ze niet zullen reizen als ze op de plek van bestemming in quarantaine moeten.'</p>",
                originalArticleId: '1347349',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                section: 'economie-politiek',
                sectionDirectory: 'economie-politiek',
                sectionTitle: 'Economie & Politiek',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 56,
                        tag: 'Concurrentie',
                        enabled: true,
                        directory: 'concurrentie',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 1456,
                        tag: 'Luchtvaart',
                        enabled: true,
                        introText:
                            'Nieuws en achtergronden over de luchtvaart. Over vliegvelden, luchtvaartmaatschappijen en ontwikkelingen in de branche.',
                        directory: 'luchtvaart',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 83404,
                        tag: 'Vervoer',
                        enabled: true,
                        directory: 'vervoer',
                        tagCategoryType: 'SECTOR',
                    },
                ],
                articleLength: 'L',
                category: 'NEWS',
                workflow: {
                    workInstructions:
                        'Schiphol 08-06-2020 Schiphol Plaza, aankomst en vertrekhal.  Foto: Tammy van Nerum',
                    characterCount: 3681,
                    state: 'READY',
                    articleCreatedBy: 'Frank Gersdorf',
                    articleLastModifiedBy: 'Jasper Juinen',
                },
                fullWidth: false,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Branchevereniging Iata voorziet explosieve groei van schuldenlast tot $550 mrd en verlies van een miljoen banen tot eind dit jaar.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252243,
                        path: '54ef1d705f5037f6078873219d324547f97666e4.jpg',
                        width: 6665,
                        height: 4462,
                        crops: [
                            {
                                ratio: 'NORMAL',
                                x: 0,
                                y: 0.007462686567164179,
                                width: 1,
                                height: 0.9925373134328358,
                            },
                            {
                                ratio: 'SQUARE',
                                x: 0.12875,
                                y: 0.024253731343283583,
                                width: 0.65375,
                                height: 0.9757462686567164,
                            },
                            {
                                ratio: 'WIDE',
                                x: 0,
                                y: 0.05783582089552239,
                                width: 1,
                                height: 0.8395522388059702,
                            },
                        ],
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329314,
                version: 2,
                title: 'China weerspreekt suggestie dat corona al eerder begon',
                state: 'PUBLISHED',
                url:
                    '/economie-politiek/1329314/china-weerspreekt-suggestie-dat-corona-al-eerder-begon',
                publicationDate: 1591726556000,
                lastModificationDate: 1591778461000,
                genre: 'Buitenland',
                authors: [
                    {
                        id: 28647,
                        fullName: 'Van onze redacteur',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Onderzoek van Harvard Medical School levert aanwijzingen op dat besmetting al in augustus de kop op stak.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252252,
                            path:
                                'f4bda79b599bc41897a72d065ffceab426a4404b.jpg',
                            width: 5412,
                            height: 3608,
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    "<fdmg-image><fdmg-id>252253</fdmg-id><fdmg-filename>f4bda79b599bc41897a72d065ffceab426a4404b.jpg</fdmg-filename><fdmg-width>5412</fdmg-width><fdmg-height>3608</fdmg-height><fdmg-caption>Volgens wetenschappers van Harvard zochten inwoners van Wuhan al sinds afgelopen zomer opvallend vaak op internet naar verschijnselen die kunnen optreden bij het coronavirus. </fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Reuters</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><p>De Chinese regering heeft een studie van Harvard Medical School met aanwijzingen dat de coronabesmetting afgelopen augustus al begon, afgedaan als 'belachelijk'. Andere wetenschappers spreken over een interessant onderzoek, dat echter niet overtuigend bewijst wanneer de epidemie is uitgebroken.</p><p>Onderzoekers van Harvard Medical School bekeken satellietbeelden van parkeerplaatsen bij ziekenhuizen in de Chinese miljoenenstad Wuhan. Daar begon de coronabesmetting. Daarnaast onderzochten zij de gegevens van vragen die inwoners van Wuhan via zoekmachines stelden over symptomen die verband houden met covid-19, zoals 'hoest' en 'diarree'.</p><h2>Ongewoon druk</h2><p>Volgens het nog niet door andere wetenschappers beoordeelde onderzoek, was het vorig jaar augustus al ongewoon druk op de parkeerplaatsen van ziekenhuizen in Wuhan, de stad waar corona voor het eerst werd geconstateerd. Ook zochten inwoners al voor de officiële uitbraak van de pandemie in december opvallend vaak op internet naar verschijnselen die kunnen optreden bij de ziekte. </p><p>De onderzoekers schrijven dat ze de gevonden resultaten niet direct aan het nieuwe virus kunnen koppelen. Volgens de onderzoekers vormen de resultaten steun voor eerder onderzoek dat  de uitbraak eerder begon dan de officiële besmetting die is vastgesteld op de vismarkt in Wuhan. </p><h2>Stellige conclusies </h2><p>Een Chinese regeringswoordvoerder noemde de suggestie van de Amerikaanse onderzoekers dinsdag 'ongelooflijk belachelijk', aldus persbureau Reuters. Het onderzoek geeft in ieder geval voeding aan de verwijten richting Chinese overheid dat die geen volledige openheid van zaken geeft over het begin van de pandemie.</p><p>Een viroloog en een epidemioloog die niet bij het onderzoek betrokken waren, noemen het tegenover Reuters een interessante benadering. Maar zij waarschuwen voor stellige conclusies, die de onderzoekers overigens zelf ook vermijden op basis van hun studie.</p>",
                originalArticleId: '1347350',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                section: 'economie-politiek',
                sectionDirectory: 'economie-politiek',
                sectionTitle: 'Economie & Politiek',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 39611,
                        tag: 'Wetenschap',
                        enabled: true,
                        directory: 'wetenschap',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 241,
                        tag: 'Gezondheidszorg',
                        enabled: true,
                        introText:
                            'Het geheel aan zorgverleners, instellingen en werknemers en alle activiteiten die erop gericht zijn de gezondheid van de inwoners van een land te verbeteren. ',
                        directory: 'gezondheidszorg',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 50506,
                        tag: 'Elon Musk',
                        enabled: true,
                        directory: 'elon-musk',
                        tagCategoryType: 'PERSON',
                    },
                    {
                        id: 33,
                        tag: 'Onderzoek',
                        enabled: true,
                        directory: 'onderzoek',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 68718,
                        tag: 'Xi Jinping',
                        enabled: true,
                        directory: 'xi-jinping',
                        tagCategoryType: 'PERSON',
                    },
                    {
                        id: 83505,
                        tag: 'Buitenland',
                        enabled: true,
                        directory: 'buitenland',
                        tagCategoryType: 'SECTOR',
                    },
                ],
                articleLength: 'S',
                category: 'NEWS',
                workflow: {
                    workInstructions: 'Amsterdam',
                    characterCount: 1897,
                    state: 'READY',
                    articleCreatedBy: 'Laurens Berentsen',
                    articleLastModifiedBy: 'Joep Westerveld',
                },
                fullWidth: false,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Onderzoek van Harvard Medical School levert aanwijzingen op dat besmetting al in augustus de kop op stak.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252252,
                        path: 'f4bda79b599bc41897a72d065ffceab426a4404b.jpg',
                        width: 5412,
                        height: 3608,
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329316,
                version: 2,
                title:
                    'Hoe Nederland zijn stikstofcrises voor boer en natuur creëerde',
                state: 'PUBLISHED',
                url:
                    '/economie-politiek/1329316/hoe-nederland-zijn-stikstofcrises-voor-boer-en-natuur-creeerde',
                publicationDate: 1591725444000,
                lastModificationDate: 1591778464000,
                genre: 'Landbouw',
                authors: [
                    {
                        id: 488,
                        fullName: 'Vasco van der Boon',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            "Al sinds begin jaren zeventig wordt het mestprobleem met pappen en nathouden aangepakt, reconstrueert de commissie-Remkes. Voortzetting van dit beleid is 'onacceptabel'.",
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252257,
                            path:
                                'a61dbc1dd6d939ee72f643db03b63f8711546c0b.jpg',
                            width: 5605,
                            height: 3724,
                            crops: [
                                {
                                    ratio: 'NORMAL',
                                    x: 0.00125,
                                    y: 0,
                                    width: 0.99875,
                                    height: 1,
                                },
                                {
                                    ratio: 'SQUARE',
                                    x: 0.2025,
                                    y: 0,
                                    width: 0.665,
                                    height: 1,
                                },
                                {
                                    ratio: 'WIDE',
                                    x: 0,
                                    y: 0.015037593984962405,
                                    width: 1,
                                    height: 0.8458646616541353,
                                },
                            ],
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<fdmg-image><fdmg-id>252258</fdmg-id><fdmg-filename>a61dbc1dd6d939ee72f643db03b63f8711546c0b.jpg</fdmg-filename><fdmg-width>5605</fdmg-width><fdmg-height>3724</fdmg-height><fdmg-caption>Een vorig kabinet stelde injectie van drijfmest in de grond, zoals hier op de foto, eind vorige eeuw verplicht voor boeren. Tevergeefs, volgens de commissie-Remkes die toepassing van drijfmest wil verbieden. </fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Bas Beentjes/De Beeldunie</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-summary title="In het kort:"><fdmg-content>Nederlandse kabinetten lieten in een halve eeuw het mestbeleid uit de klauwen lopen.\nMet juridische listen probeerde regeringen ingrepen in landbouw te ontwijken. \nDit blijkt uit een reconstructie van de commissie-Remkes.\nDe commissie noemt voortzetting van dit beleid \'onacceptabel\'.  </fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-summary><p>\'De huidige stikstofproblematiek is niet uit de lucht komen vallen\', noteert de commissie-Remkes maandag in zijn eindrapport \'Niet alles kan overal\'. Die conclusie kan iets preciezer. De stikstof kwam namelijk wel uit de lucht vallen. Met bakken tegelijk, uit wat Remkes de \'stikstofdeken\' boven Nederland noemt.</p><h2>Heldere hemel</h2><p>Maar de problemen die deze stikstof opleveren voor boeren en natuur kwamen inderdaad niet als een donderslag bij heldere hemel. Regeringen van uiteenlopende politieke kleur deden enorm hun best om bij hun volle bewustzijn deze stikstofcrises te creëren.</p><p>Dit blijkt uit een uitgebreide reconstructie van een halve eeuw stikstofbeleid in <a href="https://www.rijksoverheid.nl/documenten/rapporten/2020/06/08/niet-alles-kan-overal" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_blank" title="">het rapport</a> van de commissie-Remkes. \'Zoeken naar rek en ruimte\' voor weer een nieuwe \'juridische list\', zo vat de commissie de modus operandi van kabinetten uit de afgelopen decennia samen. Voortzetting noemt Remkes \'onacceptabel\'. </p><p>Remkes wijst erop dat in 1970 dr. ir. C. Henkens, voormalig ambtenaar van het landbouwministerie, een publicatie het daglicht liet zien met de titel \'Mestoverschotten, een potentiële bron van milieuverontreiniging\'. De stikstofproblematiek waarover de commissie-Remkes in 2020 advies moest uitbrengen is voor de landbouw hetzelfde mestoverschot waarover Henkens het in 1970 had.</p><h2>Varkensmest in het riool</h2><p>De Leeuwarder Courant sprak 1 november 1969 volgens databank Delpher als eerste dagblad over het \'mestoverschot\': \'Een klein berichtje: de varkens- en pluimveehouders in Noord-Brabant hebben een mestoverschot van 500 miljoen kilo per jaar.\' Oplossingen dragen de boeren in hetzelfde artikel ook aan: overtollige mest de zee in laten stromen, verwerken in een rioolwaterzuivering of verbranden.</p><p>De hoop op een technologische oplossing voor het mestoverschot blijft daarna een constante, blijkt uit de reconstructie door Remkes. Zelfs zijn commissie, die een halvering van de ammoniakuitstoot door de landbouw onontkoombaar acht, hoopt op een technische opwaardering van mest, waardoor kunstmest vervangen wordt door dierlijke mest.</p><p>In dat eerste krantenbericht over het mestoverschot klinkt ook al een andere vaste waarde die daarna telkens in het mestdebat terugkeert: een oplossing moet niet te duur worden. Mest verbranden, mopperen Brabantse boeren in 1969, kost een gulden per kip en vier gulden per varken.</p><h2>Miljarden kostende omslag</h2><p>Met hetzelfde argument wijzen de boeren vijf decennia later het advies van Remkes af. Het verbod op het uitrijden van drijfmest dat de commissie in 2030 wil zien, \'impliceert een totale en miljarden kostende omslag in de Nederlandse dierhouderij\', reageert Bart Kemp van Agractie. \'Onhaalbaar\', aldus de actiegroep. Het advies van Remkes is \'duur\', aldus Trienke Elshof van boerenkoepel LTO Nederland. De voorstellen van Remkes missen \'een goede balans\' tussen natuur en landbouw, stelt LTO.</p><p>Die balans, daar zocht een Nederlands kabinet volgens de reconstructie van Remkes voor het eerst naar in 1975, met de zogeheten Relatienota. Die zou landbouw en natuur op elkaar afstemmen. 200.000 hectare landbouwgrond omvormen tot natuurreservaat of tot \'beheergebieden\' die boeren tegen een vergoeding natuurvriendelijk zouden behandelen. \'Vogeltjesland\', heet zulke grond onder agrariërs. </p><p>De Relatienota strandde in een reeks conflicten met boeren. Die bleken niet gediend van bemoeienissen door ambtenaren of milieudeskundigen met hun bedrijfsvoering. Ook dat soort conflicten keren daarna een halve eeuw lang hardnekkig terug.</p><h2>Zorgen voor morgen</h2><p>In 1988 publiceert het Rijksinstituut voor Volksgezondheid en Milieu (RIVM) het rapport \'Zorgen voor Morgen\'. Dat verwoordt de maatschappelijke onrust over de toestand van natuur en milieu. Een jaar later valt het kabinet van CDA en VVD, over een milieu-onderwerp: de afschaffing van het reiskostenforfait.</p><p>Daarop belooft een nieuw kabinet van CDA en PvdA de investeringen in milieu te verdubbelen. De aanpak van verzuring — ook een effect van mest — noemt de regering een speerpunt. Binnen één generatie zou Nederland duurzaam worden. Er zou een ecologische hoofdstructuur van natuurgebieden komen.</p><fdmg-html-embed><fdmg-html-content>&lt;!-- ------ GRAPHIC ------ --&gt;\n\n&lt;div class="swap_wrapper"&gt;\n\t&lt;div class="graphic_klein"&gt;\n        &lt;div class="graphic"&gt;\n             &lt;img src="https://s3-eu-west-1.amazonaws.com/files2.fd.nl/infographics/Stikstof-KLEIN.png" /&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\t\n\t&lt;div class="graphic_groot"&gt;\n        &lt;div class="graphic"&gt;\n             &lt;img src="https://s3-eu-west-1.amazonaws.com/files2.fd.nl/infographics/Stikstof-GROOT.png" /&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;link rel="stylesheet" type="text/css" href="https://s3-eu-west-1.amazonaws.com/files2.fd.nl/infographics/uploader_sept2019/html_snippets/css/graphic.css"&gt;\n&lt;script type="text/javascript" src="https://s3-eu-west-1.amazonaws.com/files2.fd.nl/infographics/uploader_sept2019/html_snippets/js/graphic.js"&gt;&lt;/script&gt;\n\n</fdmg-html-content></fdmg-html-embed><h2>Nederlandse uitzondering</h2><p>Dat enthousiasme bekoelt al snel. Om toch zoveel mogelijk mest uit te kunnen rijden, vraagt en krijgt Nederland een uitzondering voor de Europese Nitraatrichtlijn van 1991 die vervuiling van grond- en oppervlaktewater met mest moet tegengaan. Toch krijgt het Nederlandse nitraatbeleid, en dus het mestbeleid, in 1998 en 2003 veroordelingen door de Europese Commissie en het Europese Hof van Justitie.</p><p>Met slimmigheden probeert Nederland kool en geit, de natuur en de veehouderij, te sparen. Uitwegen die het landbouwministerie uitdoktert, stuiten achter elkaar op verzet. Bijvoorbeeld van de boeren die eind vorige eeuw hun verplichte mestboekhouding uit het overheidskantoor in Assen weghalen, waarna die verplichting verdwijnt. Of op verzet van rechters. De hoogste Nederlandse rechter, de Raad van State, wijst de vondsten om het mestoverschot te gedogen af in 2008 en 2015.</p><p>Eenzelfde lijdensweg loopt Nederland met de invoering van de Europese Vogelrichtlijn uit 1991 en de Europese Habitatrichtlijn en 1992. Nederland verwachtte hier ook souplesse van Europa, reconstrueert Remkes. Dat lukt niet, waarna de Europese Commissie in 2008 Nederland op de vingers tikt omdat de natuur niet wordt beschermd.</p><h2>Postzegels</h2><p>Om toch aan Europese eisen te voldoen, meldt Nederland kleinere natuurreservaten aan voor het Natura-2000-netwerk dan vereist is. Hoe kleiner die postzegels, hoe moeilijker de voorgeschreven instandhouding van natuurwaarden is in het met stikstof verzadigde land. Het effect is, laat Remkes zien, dat Nederland onderaan bungelt in een Europese vergelijking van het natuurbeleid. </p><p>Adviseurs als het Planbureau voor de Leefomgeving en het RIVM waarschuwden herhaaldelijk dat Nederland met zijn natuur- en mestbeleid op nieuwe veroordelingen afstevent. De afwijzing door de Raad van State 29 mei 2019 van het stikstofbeleid was de voorlopige apotheose. Met de huidige stikstofcrisis als gevolg.</p><fdmg-readmore title="Lees ook:"><fdmg-content>Remkes zet <a href="https://fd.nl/economie-politiek/1347166/commissie-remkes-kraakt-stikstofbeleid-kabinet" id="link-ad82ace8c5746f802590fcb90f99e04b" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self">coalitie op scherp met stikstofadvies.</a>\n<a href="https://fd.nl/economie-politiek/1347136/greenpeace-bereidt-rechtszaak-voor-tegen-staat" id="link-e62abfe0995df81797132b01abbb6a66" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self">Greenpeace bereidt rechtszaak voor tegen de Staat.</a>\n<a href="https://fd.nl/achtergrond/1321445/elf-misvattingen-in-het-stikstofconflict" id="link-20b28c8dd352fc8492681821282c649b" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self">Elf misvattingen in het stikstofconflict.</a></fdmg-content></fdmg-readmore>',
                originalArticleId: '1347323',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                section: 'economie-politiek',
                sectionDirectory: 'economie-politiek',
                sectionTitle: 'Economie & Politiek',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 82,
                        tag: 'Milieu',
                        enabled: true,
                        directory: 'milieu',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 1217,
                        tag: 'Landbouw',
                        enabled: true,
                        directory: 'landbouw',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 178,
                        tag: 'Natuurbescherming',
                        enabled: true,
                        directory: 'natuurbescherming',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 93301,
                        tag: 'Actiegroep',
                        enabled: true,
                        directory: 'actiegroep',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 1421,
                        tag: 'Veeteelt',
                        enabled: true,
                        directory: 'veeteelt',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 88,
                        tag: 'Milieuheffingen',
                        enabled: true,
                        directory: 'milieuheffingen',
                        tagCategoryType: 'SUBJECT',
                    },
                ],
                articleLength: 'XL',
                category: 'NEWS',
                workflow: {
                    workInstructions:
                        'Amsterdam - Carlo heeft infografiek gemaakt\n\nNederland, Bergen 6 juni 2012 De molen bij het gemaal Egmonder Meer dient als achtergrond van deze akker of dit weiland waarop een boer met een trekker en mesttank mest injecteert. A typical dutch windmill servers as a background to this field as a farmer injects the land with cowmanure. Photo: Bas Beentjes / De Beeldunie',
                    characterCount: 5991,
                    state: 'READY',
                    articleCreatedBy: 'Vasco van der Boon',
                    articleLastModifiedBy: 'Sjors Rodenburg',
                },
                fullWidth: false,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        "Al sinds begin jaren zeventig wordt het mestprobleem met pappen en nathouden aangepakt, reconstrueert de commissie-Remkes. Voortzetting van dit beleid is 'onacceptabel'.",
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252257,
                        path: 'a61dbc1dd6d939ee72f643db03b63f8711546c0b.jpg',
                        width: 5605,
                        height: 3724,
                        crops: [
                            {
                                ratio: 'NORMAL',
                                x: 0.00125,
                                y: 0,
                                width: 0.99875,
                                height: 1,
                            },
                            {
                                ratio: 'SQUARE',
                                x: 0.2025,
                                y: 0,
                                width: 0.665,
                                height: 1,
                            },
                            {
                                ratio: 'WIDE',
                                x: 0,
                                y: 0.015037593984962405,
                                width: 1,
                                height: 0.8458646616541353,
                            },
                        ],
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329321,
                version: 1,
                title: 'Europa zet stappen in verdediging interne markt ',
                state: 'PUBLISHED',
                url:
                    '/achtergrond/1329321/europa-zet-stappen-in-verdediging-interne-markt',
                publicationDate: 1591718901000,
                lastModificationDate: 1591778471000,
                genre: 'Europa',
                authors: [
                    {
                        id: 24361,
                        fullName: 'Mathijs Schiffers',
                    },
                ],
                intro:
                    'Eurocommissaris Margrethe Vestager van mededinging geeft gehoor aan de roep om meer protectionisme. Ze komt met plannen voor de aanpak van techgiganten en oneerlijke Chinese concurrentie. Maar voor sommigen gaat de Deense niet ver genoeg.',
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Eurocommissaris Margrethe Vestager van mededinging geeft gehoor aan de roep om meer protectionisme. Maar voor sommigen gaat de Deense niet ver genoeg.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252272,
                            path:
                                '7558975e5a90096d3e73253a9e704ea416e8bc9b.jpg',
                            width: 2000,
                            height: 1333,
                            crops: [
                                {
                                    ratio: 'NORMAL',
                                    x: 0,
                                    y: 0.001876172607879925,
                                    width: 1,
                                    height: 0.99812382739212,
                                },
                                {
                                    ratio: 'SQUARE',
                                    x: 0.1675,
                                    y: 0,
                                    width: 0.66625,
                                    height: 1,
                                },
                                {
                                    ratio: 'WIDE',
                                    x: 0,
                                    y: 0.07879924953095685,
                                    width: 1,
                                    height: 0.8442776735459663,
                                },
                            ],
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<fdmg-image><fdmg-id>252273</fdmg-id><fdmg-filename>7558975e5a90096d3e73253a9e704ea416e8bc9b.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1333</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit>Illustratie: FD Studio</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-summary title="In het kort"><fdmg-content>Brussel heeft ideeën over aanpak van dominante digitale platforms ter inzage gelegd.\nVolgende week volgt plan voor aanpak oneerlijke concurrentie door Chinese staatsbedrijven.\nToch staat Eurocommissaris Margrethe Vestager onder druk om meer te doen.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-summary><p>Stelt u zich eens voor. We leven in pakweg 2030. De Europese consument regelt nagenoeg al zijn zaken via digitale platformbedrijven uit de VS. Aankopen gedaan via deze platforms worden aan huis geleverd via infrastructuur in handen van Chinese staatsondernemingen. En in de tussentijd gebruiken Russische trollen dezelfde platforms voor het verspreiden van desinformatie, waarmee ze het Europese volkssentiment beïnvloeden.</p><p>Zo een voorland is het schrikbeeld van de Europese Commissie. Het dagelijkse bestuur van de Europese Unie, onder leiding van de Duitse Ursula von der Leyen, wil weer belangrijk worden op het wereldtoneel. Daar bepalen de kemphanen VS en China momenteel het ritme, met het Rusland van Vladimir Poetin als ongrijpbare intrigant op de achtergrond.</p><p>Maar wat blijft erover van de geopolitieke ambities van Brussel als het zelfs de interne markt van de EU niet kan beschermen tegen ongewenste invloeden van buitenaf? De roep om protectie is niet van vandaag of gisteren, maar krijgt nu eindelijk vorm.</p><h2>Nieuwe instrumenten</h2><p>Vorige week legde Eurocommissaris Margrethe Vestager twee nieuwe mededingingsinstrumenten voor consultatie ter inzage. Eentje ervan moet ervoor zorgen dat de marktdominantie van digitale bedrijven als Google en Facebook de komst van nieuwkomers in hun sector niet belemmert. Het andere instrument trekt dit door naar andere sectoren.</p><p>Op 17 juni ontvouwt Vestager bovendien haar ideeën over het bestrijden van oneerlijke concurrentie door staatsbedrijven van buiten de EU. Dat is met name gericht op bedrijven uit China die – met overheidssteun – de Europese markt afstropen naar koopjes. De coronacrisis, die Europese bedrijven geldbehoeftig maakt en hun waarderingen onder druk zet, heeft de urgentie vergroot hier iets tegen te doen.</p><p>Vestager kan op veel politieke steun rekenen bij haar ingrepen. EU-lidstaten en Europarlementariërs vragen er al langer om. Maar over de uitvoering bestaat veel debat. Gaat de Deense vrijemarktdenker wel ver genoeg met haar voorstellen, is bijvoorbeeld een veelgehoorde, kritische vraag.</p><p>Neem het instrument voor de beteugeling van marktdominantie door de digitale reuzen uit de VS dat Vestager in gedachten heeft. Op basis van bestaande regels kan de Europese Commissie ingrijpen als bedrijven zich schuldig maken aan kartelafspraken of misbruik van marktdominantie. De Commissie kan dan boetes uitdelen en Vestager heeft laten zien daar ook niet voor terug te deinzen.</p><h2>Poortwachters</h2><p>Maar er kunnen zich ook situaties voordoen waarin geen sprake is van kartelvorming noch van machtsmisbruik, terwijl de vrije markt toch niet goed functioneert, doordat één partij zo groot is geworden dat niemand er meer omheen kan. Zo’n bedrijf heeft dan een poortwachtersfunctie bemachtigd, zoals dat heet, in veel gevallen langs geoorloofde weg.</p><p>In die gevallen was het beter geweest als de Commissie had kunnen ingrijpen vóórdat deze situatie zich voordoet, reden waarom Vestager nu zogeheten ex-anteregulering (vooraf) voorstelt. Die moet haar in de toekomst in staat stellen om digitale platforms te dwingen hun data te delen met kleine concurrenten dan wel niet langer te discrimineren bij de volgorde waarin consumenten producten of diensten te zien krijgen, zonder boetes te hoeven uitdelen.</p><p>Paul Tang, die voor de PvdA in het Europarlement zit, snapt dat de Commissie op zoek is naar het juiste instrument, maar vraagt zich af of dit voorstel de oplossing is. Hij acht het in de gevallen van Google en Facebook ‘te laat’ voor ex-anteregelgeving, omdat hun marktdominantie al een feit is.</p><fdmg-quote><fdmg-message>Ze zijn gratis voor de gebruiker, die vervolgens gepersonaliseerde advertenties op hem afgevuurd krijgt. Zorg dat je dit model verbiedt</fdmg-message><fdmg-author>Paul Tang</fdmg-author></fdmg-quote><p>Volgens Tang zou je het verdienmodel van deze digitale reuzen moeten afbreken. ‘Ze zijn gratis voor de gebruiker, die vervolgens gepersonaliseerde advertenties op hem afgevuurd krijgt. Zorg dat je dit model verbiedt.’</p><h2>Opsplitsen</h2><p>Nog liever ziet Tang dat de digitale datareuzen worden opgesplitst. ‘Dan creëer je een nieuwe situatie waarop je vervolgens wél ex-anteregelgeving kunt loslaten om te voorkomen dat de oude situatie weer terugkeert.’</p><p>Johan Bjerkem van de Brusselse denktank EPC ziet ook het ‘mosterd na de maaltijd-probleem\' dat Tang aanstipt. Maar volgens Bjerkem verschaft het voorgestelde middel in ieder geval de mogelijkheid om te voorkomen dat Google en Facebook nóg dominanter worden. ‘Een zwarte lijst met dingen die deze bedrijven niet mogen doen, kan helpen. Het zal voor hen sowieso lastiger worden overnames te doen.’</p><fdmg-quote><fdmg-message>Een zwarte lijst met dingen die deze bedrijven niet mogen doen, kan helpen. Het zal voor hen sowieso lastiger worden overnames te doen</fdmg-message><fdmg-author>Johan Bjerkem</fdmg-author></fdmg-quote><p>Als Vestager een te harde koers vaart jegens de Amerikaanse bedrijven loopt ze het risico de toorn te wekken van president Donald Trump. Die noemde haar eerder al eens een ‘tax lady’ die ‘de VS meer haat dan enig ander persoon die ik ontmoet heb’. Maar Trump heeft zelf een moeizame relatie met de techbedrijven in zijn land en moet eerst maar eens zien dat hij dit najaar herverkozen wordt.</p><p>Wat dat betreft is Vestagers China-koers gevoeliger. Ook dit land heeft de reputatie om terug te slaan als het op buitenlandse markten met beperkingen wordt geconfronteerd. En die zitten er wat Brussel betreft aan te komen.</p><h2>Ongelijk speelveld</h2><p>De Commissie ziet een ongelijk speelveld op de interne markt waar Chinese bedrijven overnames doen en meedingen naar opdrachten. Zij kunnen veel scherper bieden dan hun Europese concurrenten, omdat ze zich gesteund weten door de diepe zakken van de overheid in hun land.</p><p>De Nederlandse staatssecretaris Mona Keijzer, die in Brussel ook al vroeg om precies het soort ex-anteregulering die voor de platforms in de maak is, liet zich ook wat betreft het Chinese mededingingsprobleem niet onbetuigd. Ze opperde dat de Europese Commissie hiervoor een nieuw mededingingsinstrument moet krijgen. Dit nieuwe middel moet de Commissie in staat stellen te interveniëren als een partij van buiten de EU – lees: China – de lokale concurrentie inderdaad de loef afsteekt met een opzienbarend veel scherper bod.</p><p>In zo’n geval moet de Commissie volgens Keijzer deze bieder kunnen vragen de boeken te openen om te zien of er sprake is van een vorm van staatssteun die voor Europese bedrijven verboden is. In het bevestigende geval moet die financieringslijn doorgeknipt worden. Kan dat niet, dan moet de Commissie de bieding van deze partij kunnen verbieden.</p><p>Vestager liet eerder al weten sympathiek te staan tegenover het voorstel en volgens een recent artikel in de Financial Times, dat inzage had in de ideeën van de Commissie, zal Keijzers plan in ieder geval deels terugkomen in het voorstel op 17 juni.</p><h2>Tijdelijk overnameverbod</h2><p>De Europese Volkspartij (EVP), de grootste fractie in het Europarlement, is desondanks bang dat de Deense vanwege haar liberale wortels te weinig zal doen. Om een signaal af te geven dat er wat de EVP betreft een schepje bovenop mag, riep de fractie van christendemocratische partijen vorige week op tot een tijdelijk, maar algeheel verbod op overnames van Europese bedrijven door partijen van buiten de EU. </p><p>Maar voor zo\'n radicale stap lijkt weinig steun te bestaan. En de koers die Vestager vaart zal op zichzelf ook al de nodige <em>finetuning</em> vergen, zo waarschuwt Jaap van Etten, die tien jaar op de Nederlandse ambassade in China werkte en met Datenna een bedrijf is gestart gespecialiseerd in Chinese eigendomsstructuren. </p><p>‘Er is een groot verschil tussen de mate van staatsinvloed op Chinese bedrijven’, zegt Van Etten. ‘Het is niet nodig een complete muur op te werpen. Waar komt de grens qua toelaatbare staatsinvloed te liggen, daar zal het om draaien.’</p><fdmg-text-frame><fdmg-heading>Lees ook</fdmg-heading><fdmg-content><a href="https://fd.nl/achtergrond/1335852/europe-first-makkelijker-gezegd-dan-gedaan" rel="noopener noreferrer noopener noreferrer noopener noreferrer" target="_self" title="">Europe First: makkelijker gezegd dan gedaan</a>\n<a href="https://fd.nl/economie-politiek/1333990/competitie-stimuleert-innovatie-en-dat-is-nodig-op-dit-vergrijzende-continent" rel="noopener noreferrer noopener noreferrer noopener noreferrer" target="_self" title="">\'Competitie stimuleert innovatie en dat is nodig op dit vergrijzende continent\'</a>\n<a href="https://fd.nl/economie-politiek/1326999/nederland-wil-europese-actie-tegen-oneerlijke-concurrentie-uit-china" rel="noopener noreferrer noopener noreferrer noopener noreferrer" target="_self" title="">Nederland wil Europese actie tegen oneerlijke concurrentie uit China</a></fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-text-frame>',
                originalArticleId: '1347181',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: false,
                shortArticle: false,
                fdPersonal: false,
                section: 'achtergrond',
                sectionDirectory: 'achtergrond',
                sectionTitle: 'Achtergrond',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 6,
                        tag: 'EU',
                        enabled: true,
                        introText:
                            'Afkorting van Europese Unie. De Unie bestaat uit 28 landen en is het belangrijkste samenwerkingsverband in Europa. ',
                        directory: 'eu',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 146,
                        tag: 'Technologie',
                        enabled: true,
                        introText:
                            'Alles wat betrekking heeft op de kennis en de handelingen die nodig zijn voor de ontwikkeling of het gebruik van producten en/of diensten',
                        directory: 'technologie',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 1611,
                        tag: 'Europa',
                        enabled: true,
                        directory: 'europa',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 66013,
                        tag: 'Europese Commissie',
                        enabled: true,
                        introText:
                            'De uitvoerende instantie van de Europese Unie. De voorzitter en de leden worden benoemd door het Europees Parlement. Is onder meer verantwoordelijk voor het indienen van wetsvoorstellen en het beheren van de EU-begroting.',
                        directory: 'europese-commissie',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 33605,
                        tag: 'Mededinging',
                        enabled: true,
                        directory: 'mededinging',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 56,
                        tag: 'Concurrentie',
                        enabled: true,
                        directory: 'concurrentie',
                        tagCategoryType: 'SUBJECT',
                    },
                ],
                articleLength: 'UNLIMITED',
                category: 'LONG_READ',
                workflow: {
                    workInstructions: '',
                    characterCount: 7622,
                    state: 'READY',
                    articleCreatedBy: 'Mathijs Schiffers',
                    articleLastModifiedBy: 'Joep Westerveld',
                },
                fullWidth: true,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Eurocommissaris Margrethe Vestager van mededinging geeft gehoor aan de roep om meer protectionisme. Maar voor sommigen gaat de Deense niet ver genoeg.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252272,
                        path: '7558975e5a90096d3e73253a9e704ea416e8bc9b.jpg',
                        width: 2000,
                        height: 1333,
                        crops: [
                            {
                                ratio: 'NORMAL',
                                x: 0,
                                y: 0.001876172607879925,
                                width: 1,
                                height: 0.99812382739212,
                            },
                            {
                                ratio: 'SQUARE',
                                x: 0.1675,
                                y: 0,
                                width: 0.66625,
                                height: 1,
                            },
                            {
                                ratio: 'WIDE',
                                x: 0,
                                y: 0.07879924953095685,
                                width: 1,
                                height: 0.8442776735459663,
                            },
                        ],
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329327,
                version: 1,
                title: 'Een nieuwe auto kopen: straks met subsidie?',
                state: 'PUBLISHED',
                url:
                    '/achtergrond/1329327/een-nieuwe-auto-kopen-straks-met-subsidie',
                publicationDate: 1591716590000,
                lastModificationDate: 1591778482000,
                genre: 'Auto',
                authors: [
                    {
                        id: 24102,
                        fullName: 'Han Dirk Hekking',
                    },
                    {
                        id: 253,
                        fullName: 'Jeroen Segenhout',
                    },
                ],
                intro:
                    "Europa broedt op het stimuleren van de aanschaf van nieuwe, schone auto's. Maar hoe bereik je succes zonder al te veel overheidsgeld te verspillen? 'Nederland hobbelt mee met Albanië.'",
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            "Europa broedt op het stimuleren van de aanschaf van schone auto's. Maar hoe bereik je succes zonder al te veel overheidsgeld te verspillen? 'Nederland hobbelt mee met Albanië.'",
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252291,
                            path:
                                'bf150b3a516be680917d4edbe9a11ced90599c83.jpg',
                            width: 2000,
                            height: 1333,
                            crops: [
                                {
                                    ratio: 'NORMAL',
                                    x: 0,
                                    y: 0.001876172607879925,
                                    width: 1,
                                    height: 0.99812382739212,
                                },
                                {
                                    ratio: 'SQUARE',
                                    x: 0.1675,
                                    y: 0,
                                    width: 0.66625,
                                    height: 1,
                                },
                                {
                                    ratio: 'WIDE',
                                    x: 0,
                                    y: 0.07879924953095685,
                                    width: 1,
                                    height: 0.8442776735459663,
                                },
                            ],
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<fdmg-image><fdmg-id>252292</fdmg-id><fdmg-filename>bf150b3a516be680917d4edbe9a11ced90599c83.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1333</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit>Illustratie: FD Studio</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-text-frame><fdmg-heading>In het kort </fdmg-heading><fdmg-content>De autobranche wil graag weer een sloopregeling om de autoverkoop aan te zwengelen.\nOverheden lijken vooral te kiezen voor subsidies voor elektrisch rijden.\nKenners betwijfelen of dat voldoende is, Frankrijk koos voor een bredere aanpak.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-text-frame><p>Wie in Luxemburg rijdt, ziet het direct. De auto\'s die daar rondrijden zijn veel nieuwer dan die in Nederland. De gemiddelde leeftijd van een Luxemburgse auto is ruim zes jaar. In Nederland is die leeftijd opgelopen naar elf jaar.</p><fdmg-infographic-extended><graphic name="Vergrijzend wagenpark mob.svg" url="https://fd-external-development.imgix.net/fe6ef2f491bc0fa3e0ed510c60a736f5db92fee2.png" view="responsive" /><graphic name="vergrijzijng wagenpark DESK.svg" url="https://fd-external-development.imgix.net/e2c386796b22ad852f903e96b4dbded3d8f3894c.png" view="xl" /></fdmg-infographic-extended><p>\'Ik grap weleens dat we meehobbelen met Albanië\', zegt voorzitter Steven van Eijck van de RAI Vereniging, die de belangen van de Nederlandse autobranche vertegenwoordigt. Volgens hem is op Haagse ministeries ook het besef doorgedrongen dat het wagenpark moet verjongen. Dat kan door de aanschaf van nieuwe auto\'s aan te zwengelen. En dat in een tijd dat de verkoop helemaal <a href="https://fd.nl/ondernemen/1345351/europese-autoverkoop-met-78-ingezakt" rel="noopener noreferrer noopener noreferrer" target="_self" title="">op zijn gat ligt</a>.</p><p>RAI en Bovag, een andere brancheclub, pleiten voor een \'slimme\' sloopregeling. Daarbij zouden eigenaren van oude, vervuilende diesels zoveel mogelijk moeten worden gestimuleerd om hun wagen in te ruilen voor een veel schoner jonger exemplaar. Dat hoeft niet per se een elektrische auto te zijn. \'Die stap is voor vele consumenten nog veel te groot\', zegt Bovag-woordvoerder Tom Huyskens. \'Een jonge benzineauto is al veel minder schadelijk voor het milieu.\'</p><p>Een dergelijke slooppremie zou voor ongeveer 300.000 personenauto\'s en 400.000 bestelwagens moeten gelden die nu nog volgens de milieustandaard euro4 en ouder rondrijden, de emissienorm voor voertuigen die sinds oktober 2006 in de EU van kracht is. De subsidie kan daarbij verschillen, van betrekkelijk weinig tot \'enkele duizenden euro\'s\' als de nieuwe heilige koe geen uitstoot heeft.</p><h2>Autoverkoop kwam in 2009 met steun op gang</h2><p>Sloopregelingen zijn niet nieuw. In 2009 tuigde de overheid er ook een op, om de autoverkoop op gang te krijgen nadat de financiële crisis hard had toegeslagen bij de autodealers. Tot april 2010 werden er <a href="https://zoek.officielebekendmakingen.nl/blg-87681.pdf" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">83.444 auto\'s aangemeld</a>. Kosten: €85 mln.</p><p>Het is de vraag of Den Haag genegen is om nu weer aan de wensen van de autosector tegemoet te komen. Van Eijck zegt \'niet heel optimistisch\' te zijn. Hij wijst daarbij naar de heersende opvatting op het ministerie van Financiën dat dergelijke regelingen heel duur zijn in verhouding tot de besparing op CO₂-uitstoot. \'Er zijn ook alternatieven denkbaar.\'</p><p>Toch is nog niet alle hoop verloren. Ook omdat het kabinet vorig najaar zelf vergroening van het wagenpark als een van de mogelijkheden opperde om weer van de huidige snelheidsbeperkingen op de Nederlandse snelwegen af te komen.</p><p>Kortom, de stikstofproblematiek heeft een nieuwe sloopregeling, waarvoor de autobranche al jaren pleit, prominenter op de agenda gezet. Volgens Bovag ligt het \'concreet ergens op een bordje\'.</p><p>Volgens een insider is het ministerie van Economische Zaken en Klimaat bezig met een groter pakket aan maatregelen om Nederland groener uit de coronacrisis te laten komen. \'Het zou mij daarbij niet verbazen als er een sloopregeling op tafel ligt.\' </p><p>Sowieso geldt er sinds 4 juni een premie van €4000 voor de aanschaf van nieuwe elektrische wagens; voor gebruikte elektrische auto\'s is de subsidie €2000. In de subsidiepot zit dit jaar €17,2 mln. Maar er is dus geen regeling voor nieuwe benzine- of dieselwagens. </p><h2>Brussel, Berlijn en Parijs kijken naar steunregelingen</h2><p>Frans Timmermans, als vicevoorzitter van de Europese Commissie verantwoordelijk voor het Europese klimaatbeleid en duurzame doelen, brak onlangs ook een lans voor door Brussel gesteunde aankooppremies voor nieuwe voertuigen. Waar de <a href="https://www.acea.be/uploads/publications/25_actions_for_successful_restart_EU_automotive_sector.pdf" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">Europese en Nederlandse autolobb</a>y een brede vernieuwing nastreeft, kijkt Timmermans vooral naar het stimuleren van de aankoop van schone wagens op stroom.</p><p>Timmermans moet zijn plannen nog concretiseren. Frankrijk en Duitsland lopen met eigen regelingen voor royale ondersteuning van consumenten die een nieuwe schone auto kopen, voor de Brusselse muziek uit. </p><p>Zowel in Frankrijk als in Duitsland gaat het om een uitbouw van al bestaande aankoopsteun. De Franse president Emmanuel Macron heeft de premie voor aanschaf van een nieuwe elektrische auto met een zesde verhoogd naar €7000. Wie een nieuwe, schonere benzineauto koopt, kan een premie van €3000 krijgen.</p><p>De Duitse regering concentreerde zich vorige week in haar <a href="https://www.bundesfinanzministerium.de/Content/DE/Standardartikel/Themen/Schlaglichter/Konjunkturpaket/2020-06-03-konjunkturpaket-beschlossen.html" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">steunpakket voor de economie</a> vooral op het stimuleren van het kopen van elektrische auto\'s. Wie zo\'n wagen tot €40.000 koopt, ziet de aanschafpremie daarvoor verdubbelen van €3000 tot €6000.</p><h2>\'Duitsland is op de verkeerde weg, Frankrijk niet\'</h2><p>Autospecialist Ferdinand Dudenhöffer van het onderzoeksinstituut CAR in Duisburg vindt dat de Duitse regering hiermee de verkeerde weg inslaat. \'Je moet met stimuleringsbeleid komen om de <em>gehele</em> economie te reanimeren. Maar elektrische auto\'s zijn een niche. Dit is de verkeerde benadering.\'</p><p>Voor leveranties van elektrische auto\'s bestaat nu al een wachttijd, zegt Dudenhöffer. \'Als je er meer geld insteekt, vergroot je die rij alleen maar. Om de economie aan de praat te krijgen, moet je andere maatregelen nemen.\' </p><p>Dudenhöffer opperde eerder bij wijze van economische stimulans om de btw op alle producten boven de €10.000, waaronder dus ook auto\'s, voor zes maanden te schrappen. Dat zou de Duitse schatkist €20 mrd tot €25 mrd kosten.</p><p>Die kosten zijn op te vangen met een CO₂-taks op autobrandstof, redeneert Dudenhöffer. Op die manier kiezen consumenten sneller voor auto\'s zonder uitstoot of voor wagens die zuiniger zijn. Het voordeel van zijn btw-plan is dat de hele auto-industrie ervan kan profiteren. </p><p>Dat is niet zo in de regeringsplannen. Mensen die een wagen op benzine of diesel willen hebben, zien een tijdelijk lagere btw, van 19% naar 16%. Maar dat verschil trekt terughoudende kopers niet over de streep, zegt de autospecialist.</p><p>Hij vindt dat \'de Franse regering het beter heeft begrepen\'. \'Die geven ook een bonus op een nieuwe auto met een brandstofmotor.\' De focus op schone, elektrische auto\'s vanuit Europa is een beetje dubbelop, meent hij. Immers, de emissienormen voor het reguliere wagenpark zijn al flink aangescherpt. Vanaf 2020 mogen de nieuw verkochte wagens van een fabrikant gemiddeld niet meer dan 95 gram kooldioxide CO2 per kilometer uitstoten.</p><h2>Resultaten eerdere steunprogramma\'s waren niet geheel positief </h2><p>Het probleem is dat de ervaringen met eerdere stimuleringsprogramma\'s niet per definitie positief zijn. Bij de financiële crisis van 2008/2009 introduceerden verscheidene landen steunpakketten voor de automobielindustrie. Maar het effect hiervan was op zijn best gemengd.</p><p>Het Duitse onderzoeksinstituut Ifo concludeerde <a href="https://www.ifo.de/DocDL/ifoddber-leisinger-roesel-abwrackpraemie-2020-06-01-07-vorab.pdf" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">vorige week</a> op basis van een analyse van de meeste studies naar de gevolgen van de \'oude\' programma\'s dat de autosector op de korte termijn dan wel profiteert van premies voor de aanschaf van nieuwe wagens en de inruil van oudere, vervuilende auto\'s. Maar op de middellange termijn schiet de sector er minder mee op. </p><p>\'Schrootpremies betekenen meer autoverkopen vandaag, maar minder morgen\', zo vat het Ifo de effecten samen. In de Verenigde Staten leidde een steunprogramma niet eens tot een hogere productie: het bestand van nog onverkochte voertuigen was simpelweg te groot.</p><p>De milieueffecten waren ook dubieus, stelt Ifo. De aanschafsubsidie in Duitsland gold als \'milieupremie\', maar effectief kochten mensen wagens die meer broeikasgas CO₂ uitstootten, en kwam de subsidie tot ergernis van Duitse politici vaak in de kas van buitenlandse fabrikanten terecht. In Frankrijk kochten consumenten destijds meer diesels.</p><p>Dat wil niemand opnieuw. Het kompas voor steun staat dus vooral op vergroenen. Volgens RAI-voorzitter Van Eijck is het nu tijd om ook in Nederland door te pakken. \'Als samenleving hebben we de afgelopen maanden mogen genieten van hoe schoon, veilig en duurzaam Nederland kan zijn. We zagen mooie blauwe luchten doordat er geen of amper uitstoot was van fabrieken en auto\'s. Mijn dochters in Rotterdam hoefden hun vensterbank minder vaak schoon te maken. Dat hebben we met z\'n allen beleefd. Een sloopregeling helpt dan wel.\'</p><fdmg-readmore title="Lees ook de volgende FD-verhalen:"><fdmg-content><a href="https://fd.nl/weekend/1346219/groene-kickstart-voor-de-europese-industrie" id="link-463b6b4d4f9487b5fc08be5050938376" rel="noopener noreferrer noopener noreferrer" target="_self">Groene kickstart</a> voor de Europese industrie\nMacron <a href="https://fd.nl/economie-politiek/1346006/macron-mikt-op-de-stekkerauto-made-in-france" id="link-5428fca966e83e24db7c8b50480a77e5" rel="noopener noreferrer noopener noreferrer" target="_self">trekt €8 mrd uit</a> voor auto-industrie</fdmg-content></fdmg-readmore>',
                originalArticleId: '1346711',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: false,
                shortArticle: false,
                fdPersonal: false,
                section: 'achtergrond',
                sectionDirectory: 'achtergrond',
                sectionTitle: 'Achtergrond',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 83514,
                        tag: 'Auto',
                        enabled: true,
                        directory: 'auto',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 82,
                        tag: 'Milieu',
                        enabled: true,
                        directory: 'milieu',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 88,
                        tag: 'Milieuheffingen',
                        enabled: true,
                        directory: 'milieuheffingen',
                        tagCategoryType: 'SUBJECT',
                    },
                ],
                articleLength: 'UNLIMITED',
                category: 'LONG_READ',
                workflow: {
                    workInstructions:
                        "Geschrapte alinea's:\n[Dat Berlijn uiteindelijk voor het stimuleren van de aanschaf van elektrische auto's kiest, ligt ook aan de industrie zelf, schat hij in. 'We hebben natuurlijk 'dieselgate' gehad, waarbij fabrikanten consumenten misleidden over de uitstoot van hun auto's.' Daarbij wilden autobedrijven hun aandeelhouders en managers dividenden en bonussen blijven geven én overheidssteun ontvangen, schetst hij. Dat hielp de bedrijfstak ook niet.]",
                    characterCount: 7960,
                    state: 'READY',
                    articleCreatedBy: 'Han Dirk Hekking',
                    articleLastModifiedBy: 'Sjors Rodenburg',
                },
                fullWidth: true,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        "Europa broedt op het stimuleren van de aanschaf van schone auto's. Maar hoe bereik je succes zonder al te veel overheidsgeld te verspillen? 'Nederland hobbelt mee met Albanië.'",
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252291,
                        path: 'bf150b3a516be680917d4edbe9a11ced90599c83.jpg',
                        width: 2000,
                        height: 1333,
                        crops: [
                            {
                                ratio: 'NORMAL',
                                x: 0,
                                y: 0.001876172607879925,
                                width: 1,
                                height: 0.99812382739212,
                            },
                            {
                                ratio: 'SQUARE',
                                x: 0.1675,
                                y: 0,
                                width: 0.66625,
                                height: 1,
                            },
                            {
                                ratio: 'WIDE',
                                x: 0,
                                y: 0.07879924953095685,
                                width: 1,
                                height: 0.8442776735459663,
                            },
                        ],
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1328645,
                version: 4,
                title:
                    'Cateraars: minder suiker, minder vet en minder calorieën jaagt iedereen de schoolkantine uit',
                state: 'PUBLISHED',
                url:
                    '/achtergrond/1328645/cateraars-gezondere-voeding-jaagt-iedereen-de-schoolkantine-uit',
                publicationDate: 1591070401000,
                lastModificationDate: 1591781011000,
                genre: 'Privacy en cybersecurity',
                authors: [
                    {
                        id: 195,
                        fullName: 'Frits Conijn',
                    },
                ],
                intro:
                    "Minder suiker, minder vet, minder calorieën. Nu de scholen opengaan, staan de gezonde kantines ook weer op de agenda. Het Voedingscentrum wil de criteria aanscherpen, maar  cateraars vrezen dan omzet te verliezen. 'Het assortiment wordt wel erg onaantrekkelijk.'",
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Minder suiker, minder vet, minder calorieën. Aangescherpte criteria moeten leiden tot een gezondere schoolkantine. Maar cateraars vrezen zonder vette en zoete hap omzet te verliezen. ',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 251824,
                            path:
                                '1789a5b400fd887e234e078b6378a2add488acd2.jpg',
                            width: 4928,
                            height: 3280,
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    "<fdmg-image><fdmg-id>251825</fdmg-id><fdmg-filename>1789a5b400fd887e234e078b6378a2add488acd2.jpg</fdmg-filename><fdmg-width>4928</fdmg-width><fdmg-height>3280</fdmg-height><fdmg-caption>De voedselnormen voor schoolkantines worden vanaf september aangescherpt. Cateraars zijn bang dat de leerlingen massaal hun heil elders zoeken. </fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: ANP/Robin Utrecht</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-summary title=\"In het kort\"><fdmg-content>De voedselnormen voor schoolkantines worden vanaf september aangescherpt.\nCateraars vrezen dat kinderen naar de snackbar of supermarkt vluchten.\nDe omgeving van de school moet ook meedenken.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-summary><p>Een leerlinge van het MBO College Noord in Amsterdam bestelt een Red Bull, de kantinebeheerder probeert haar te ontmoedigen. 'Te veel suiker, te veel calorieën. Neem liever een flesje water, dat is veel gezonder.'</p><p>Het is een bekend beeld op scholen. De beheerders doen hun best, maar de leerlingen lopen weg. Zij zoeken hun heil liever in een snackbar, in dit geval Has Bereket. Daar kopen zij voor €5,49 een broodje frikandel, een bak patat en een blikje cola.</p><h2>Na vezels ook beleg</h2><p>Onder de noemer Gezonde Voeding op Scholen scherpt de stichting Jongeren op Gezond Gewicht (Jogg) samen met het Voedingscentrum de criteria aan voor schoolkantines. 'Jongeren tussen de veertien en achttien jaar eten gemiddeld minder dan honderd gram groenten per dag', zo geeft Peter Legters, programmamanager Gezonde Schoolomgeving bij Jogg, een voorbeeld van de slechte eetgewoontes. 'Dat moeten er 250 zijn.'</p><p>Tot nu toe werd bij de lunch en het ontbijt in de schoolkantine alleen gelet op het aantal vezels in het brood. Maar mochten de kantines in september weer open mogen, dan wordt ook het beleg een item. Kaas en vleeswaren zijn toegestaan, zolang ze maar vergezeld worden door halvarine, sla, komkommer of tomaat. Bij de snacks ligt de lat op maximaal 75 calorieën. Ter vergelijking: een Mars-reep heeft er 229. </p><p>Veel cateraars weigeren zich te verbinden aan de aangescherpte criteria. 'Ook wij zijn voor een gezonde school', zegt Ruud Baljé, voorzitter van de brancheorganisatie Verenigde Ondernemende Contract Cateraars (VOCC). 'Maar niet onder alle omstandigheden. Want door de aanscherping wordt het assortiment wel erg onaantrekkelijk voor de leerlingen.'</p><h2>Kortingsbonnen</h2><p>Volgens de cateraars van de VOCC ligt de nadruk bij de gezonde school te veel op de voeding. Aan meer bewegen of alcoholpreventie zou aanmerkelijk minder aandacht worden besteed. </p><p>Met de nieuwe criteria stroomt de school bij elke pauze leeg, zo vreest voorzitter Baljé. 'Dan kopen álle leerlingen bij de dichtstbijzijnde supermarkt of snackbar zakken chips, saucijzenbroodjes en bakken friet. Op die manier kunnen we helemaal geen invloed meer uitoefenen.' </p><p>Zeker als de school ook nog eens ongezond voedsel propageert. Neem het Deltion College, een regionaal opleidingscentrum voor middelbaar beroepsonderwijs in de regio Zwolle. Hier ontvingen de studenten bij de introductie een folder met kortingsbonnen. Voor de bioscoop, voor kledingwinkels, maar ook voor de McDonald's en de Multivlaai. </p><p>De cateraars zitten door de coronacrisis al lange tijd zonder inkomsten. Zijn die er straks dan wel weer voldoende?</p><h2>Met open armen</h2><p>Nederland telt ongeveer 2100 scholen voor het voortgezet onderwijs en het middelbaar beroepsonderwijs, waarvan er 1900 een kantine hebben. Ongeveer de helft daarvan houdt de catering in eigen hand en laat de lunches verzorgen door vrijwilligers of door het bedrijf dat ook verantwoordelijk is voor de schoonmaak van het gebouw. De resterende scholen huren een cateraar in.</p><p>Veel van die cateraars vrezen verlies van omzet als de criteria worden aangescherpt. 'Onze leden denken dat de derving kan oplopen tot 30%', zegt Baljé. 'Wanneer er een snackbar of supermarkt in de omgeving is, komt dat percentage hoger uit dan wanneer er niets in de buurt is.'</p><p>Dat weet Ralph Markwat van cateraar FHC Formulebeheer uit eigen ervaring. 'Wij beheren onder andere de kantine van een school in Amstelveen. Hoe gezonder wij die kantine maakten, des te blijer werd de filiaalmanager van de Albert Heijn tegenover de school. Die zag zijn omzet met sprongen stijgen, vooral in producten met bladerdeeg. Ik werd daar met open armen ontvangen.'</p><h2>Economische haalbaarheid</h2><p>Volgens brancheorganisatie VOCC mag de verantwoordelijkheid voor een gezonde schoolkantine niet alleen bij de cateraars liggen. Er moet ook gekeken worden naar de omgeving. Want zolang daar op alle uren van de dag van alles wordt aangeboden, vechten de cateraars volgens de vereniging tegen de bierkaai.</p><p>'Het aanbod moet worden aangepast aan specifieke omstandigheden', zegt Markwat van FHC Formulebeheer. 'Op een beveiligings- of sportopleiding is ander voedsel nodig dan op een  opleiding verzorging. Ook als er veel snackbars in de omgeving zijn, zijn er aanpassingen nodig.'</p><p>Michiel van Noort deelt die mening. Hij is eigenaar van First Mate Consultancy &amp; Concepts, een adviesbureau voor de horeca dat onder andere concepten verzint voor schoolkantines. 'Ik herken de problemen van de cateraars', zegt hij. 'De voorschriften van Jogg gaan voorbij aan de economische haalbaarheid.' </p><p>Maar stichting Jogg is niet onder de indruk van de bezwaren. 'De cateraars hebben voldoende mogelijkheden om in te spelen op de omstandigheden in de buurt', zegt programmamanager Legters. Het hoogste gouden keurmerk biedt immers ruimte voor een assortiment met 20% ongezonde producten. En bij het zilveren keurmerk geldt dat voor 40% van het aanbod. </p><h2>Tafelvoetbal</h2><p>Wilma de Reus zoekt de oplossing vooral in de dialoog. Zij is bestuurslid bij Catermaat, een coöperatie die de catering op ongeveer honderd scholen verzorgt. 'Bij een school in Breda stond tijdens de middagpauze altijd een frietkar', zegt De Reus. 'Die is na goed overleg tussen de school, de eigenaar van de kar en ons ergens anders gaan staan.'</p><p>In een tweetal schoolkantines van Catermaat zijn de nieuwe richtlijnen van Jogg al doorgevoerd. De Reus is tevreden over de eerste resultaten. 'Die zijn mede te danken aan het overleg, ook met de leerlingen. Die willen een leuke kantine. En dat gaat verder dan alleen snacks en snoep. Ook bijvoorbeeld een tafelvoetbalspel kan de leerlingen verleiden.'</p><p>Toch erkent De Reus dat nabije supermarkten en snackbars de Gezonde School ondermijnen. 'Als de omgeving ondanks het overleg niet meedoet,' zegt ze, 'wordt het natuurlijk wel moeilijk een goede schoolkantine neer te zetten.'</p><fdmg-summary title=\"Een ongezonde omgeving\"><fdmg-content>Schoolkantines kampen vaak met hevige concurrentie, zo blijkt uit cijfers van onderzoeksbureau Locatus. Bij twee derde van de scholen kunnen de leerlingen eten kopen binnen vijf minuten wandelen. Dat zijn iets meer scholen dan in 2004. Deze toename wordt vooral verklaard door de stijging van het aantal lunchrooms. \nIn het onderzoek van Locatus zijn 2125 scholen meegenomen. Bijna 300 van die scholen hebben meer dan vijf fastfoodlocaties in de omgeving. Daarbij moet gedacht worden aan snackbars, shoarmazaken of vestigingen van bijvoorbeeld McDonald’s. Ongeveer 220 scholen hebben drie of vier van dergelijke zaken binnen bereik van de leerlingen.\nHavo, mavo en vmbo-scholen hebben het minste aantal aanbieders van eten in de buurt. Maar bij de mbo’s is het externe aanbod juist groter dan gemiddeld. Mogelijk komt dat doordat deze scholen een regionale functie hebben. Zij moeten beter bereikbaar zijn en zijn dus vaker gevestigd bij stations. Zeker op grotere stations is over het algemeen veel eten te koop.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-summary><p></p>",
                originalArticleId: '1337155',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: false,
                shortArticle: false,
                fdPersonal: false,
                printTitle:
                    'Cateraars: gezondere voeding jaagt iedereen de schoolkantine uit',
                section: 'achtergrond',
                sectionDirectory: 'achtergrond',
                sectionTitle: 'Achtergrond',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 241,
                        tag: 'Gezondheidszorg',
                        enabled: true,
                        introText:
                            'Het geheel aan zorgverleners, instellingen en werknemers en alle activiteiten die erop gericht zijn de gezondheid van de inwoners van een land te verbeteren. ',
                        directory: 'gezondheidszorg',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 1093,
                        tag: 'Onderwijsvernieuwing',
                        enabled: true,
                        directory: 'onderwijsvernieuwing',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 83602,
                        tag: 'Diensten',
                        enabled: true,
                        directory: 'diensten',
                        tagCategoryType: 'SECTOR',
                    },
                ],
                articleLength: 'XL',
                category: 'LONG_READ',
                workflow: {
                    workInstructions:
                        "Voor de dinsdagkrant, rood verhaal.\n\nMaar voor stichting Jogg blijft de schoolkantine een speerpunt. Want volgens de website heeft de school grote invloed op het leven van jongeren. 'Een gezond voedingsaanbod op scholen kan daarom een belangrijke basis bieden voor een gezonde leefstijl van deze jongeren.'",
                    characterCount: 6051,
                    state: 'READY',
                    articleCreatedBy: 'Frits Conijn',
                    articleLastModifiedBy: 'Bie Kho',
                },
                fullWidth: true,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Minder suiker, minder vet, minder calorieën. Aangescherpte criteria moeten leiden tot een gezondere schoolkantine. Maar cateraars vrezen zonder vette en zoete hap omzet te verliezen. ',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 251824,
                        path: '1789a5b400fd887e234e078b6378a2add488acd2.jpg',
                        width: 4928,
                        height: 3280,
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1328648,
                version: 2,
                title: 'Droogte? Sla een eigen grondwaterbron',
                state: 'PUBLISHED',
                url:
                    '/achtergrond/1328648/droogte-sla-een-eigen-grondwaterbron',
                publicationDate: 1591070400000,
                lastModificationDate: 1591081393000,
                genre: 'Landbouw',
                authors: [
                    {
                        id: 488,
                        fullName: 'Vasco van der Boon',
                    },
                ],
                intro:
                    'Niet eerder viel er in Nederland zo weinig regen. Dus wordt het schaarse water streng verdeeld. Daarbij heeft de natuur het nakijken en kiezen boeren steeds meer voor grondwater oppompen. Een tweeluik over de recorddroogte. Vandaag de landbouw en natuur. Morgen de binnenvaart.',
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Niet eerder viel er in Nederland zo weinig regen. Water wordt schaars en er is steeds meer vraag naar grondwaterputten. Een tweeluik over de gevolgen van de recorddroogte. Vandaag de landbouw en natuur. Morgen de binnenvaart.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 251832,
                            path:
                                '7e221f94a81dee2779d902a10879738c4405a5c6.jpg',
                            width: 3898,
                            height: 2599,
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<fdmg-image><fdmg-id>251833</fdmg-id><fdmg-filename>7e221f94a81dee2779d902a10879738c4405a5c6.jpg</fdmg-filename><fdmg-width>3898</fdmg-width><fdmg-height>2599</fdmg-height><fdmg-caption>Een boer bemest zijn droge akker in het Brabantse Mierlo. Steeds meer boeren komen door de droogte in de problemen en in sommige delen van het land is al een sproeiverbod ingesteld. </fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Rob Engelaar/ ANP</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-summary title="In het kort:"><fdmg-content>2020 is tot nu toe recorddroog. Het neerslagtekort loopt naar verwachting zeker op tot 171 millimeter.\nDe vraag van boeren en particulieren naar grondwaterbronnen neemt sterk toe, volgens bronboorders.\nHet verbruik van grondwater door de landbouw verviervoudigt in droge jaren. \nHet aantal natuurbranden is dit jaar al veel meer dan in 2017, het laatste natte jaar.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-summary><p>‘De vraag naar grondwaterputten is gigantisch’, vertelt directeur Edwin Leuverink van installatiebedrijf Tiggelovend-Kok in Dinxperlo telefonisch. Dat komt doordat 2020 het derde jaar in successie is met extreme droogte. Niet alleen de natuur en boeren hebben daar last van, maar ook steeds meer bedrijven en burgers. ‘Het zijn hoofdzakelijk particulieren, maar ook het midden- en kleinbedrijf, en natuurlijk boeren waarvoor wij putten slaan’, legt Leuverink uit.</p><p>Nu de eerste waterschappen een verbod hebben ingesteld op het gebruik van drinkwater of schaars oppervlaktewater voor het besproeien van tuin of veld, zoeken boeren, burgers en bedrijven naar uitwegen. Water uit een eigen grondwaterbron biedt een alternatief voor de drooggevallen sloten.</p><p>Voor een bedrag dat begint rond de €500 slaat Leuverink een grondwaterbron. Ook in de droge jaren 2018 en 2019 had Leuverink veel klanten, maar dit jaar komt de vraag \'veel vroeger’ dan in andere jaren. ‘We hebben een wachtlijst van drie tot vier weken’, vertelt hij. Leuverink slaat een grondwaterbron door een holle buis met een punt eraan de grond in te spuiten, net zolang tot het grondwater is bereikt.</p><h2>Putpulsen</h2><p>Walter van Roosmalen in het Brabantse kerkdorp Odiliapeel, slaat ‘nog op de ouderwetse manier handmatig’ een grondwaterbron. ‘Putpulsen’, noemt hij dit. Van Roosmalen heeft er nu zo’n driehonderd geslagen, voor een bedrag dat begint rond de €300. ‘Betaalbaar voor iedereen.’ Ook Van Roosmalen ziet dit jaar ‘veel meer vraag\', zowel van boeren als van particulieren. Hij schat die een kwart hoger dan in jaren met normale regenval. </p><p>Er viel dit jaar geen normale hoeveelheid neerslag. De Landelijke Coördinatiecommissie Waterverdeling (LCW) van de rijksoverheid, waterschappen, gemeenten en de drinkwaterbedrijven, bracht woensdag de vijfde Droogtemonitor van dit jaar uit. Het ‘neerslagtekort’ was woensdag 130 millimeter. Dat is een record, constateert de commissie. Nooit eerder was het eind mei zo droog in Nederland. Het is ook nog eens het zonnigste voorjaar ooit gemeten door het KNMI, waardoor water extra snel verdampt.</p><fdmg-infographic-extended><graphic name="neerslagtekort-02.svg" url="https://fd-external-development.imgix.net/fa769e5592b35b8c9fbba0c3baac5115f185555b.png" view="responsive" /><graphic name="neerslagtekort-01.svg" url="https://fd-external-development.imgix.net/fc0393f6df529a36897abdb43b60907b92f9cc96.png" view="xl" /></fdmg-infographic-extended><p>Met twee grotendeels droge weken in het vooruitzicht, loopt het neerslagtekort op tot 171 millimeter, verwacht de LCW. De grondwaterstanden op de zandgronden in Oost- en Zuid-Nederland zijn nu al ‘laag tot zeer laag’, maar ook Zeeland en de Noordoostpolder zijn erg droog. Zo droog dat landbouwgewassen een groeiachterstand oplopen, terwijl hun belangrijkste groeiperiode, en dus grootste waterbehoefte, nog moet aanbreken. De grote rivieren bieden weinig verlichting. De aanvoer van water door de Rijn is bijna de helft van normaal en zal verder afnemen. Voor de LCW reden om op te schalen naar ‘niveau 1’ van een ‘dreigend watertekort’.</p><h2>Veenbrand in de Peel</h2><p>Een mogelijk gevolg van de droogte is dat het risico op natuurbranden kan toenemen. Hoewel droogte niet de enige factor is, nuanceert Frank Huizinga van Brandweer Nederland. ‘Bijvoorbeeld ook windkracht en relatieve luchtvochtigheid spelen een rol.’</p><p>Bij het aan de brandweer verbonden Instituut Fysieke Veiligheid houdt onderzoeker Edwin Kok  sinds 2017, het laatste normale natte jaar, de landelijke database van natuurbranden bij. Daaruit blijkt dat de grote veenbrand in de uitgedroogde Peel bij Deurne niet de enige brand was die dit jaar in de natuur uitbrak. De teller van Kok stond afgelopen woensdag op 385 natuurbranden; er ging 912 hectare in vlammen op.</p><p>Het aantal natuurbranden is dit jaar al het dubbele van het aantal in 2017 en het viervoudige in oppervlakte ging in rook op. ‘Als het droog is, ontstaan branden makkelijk’, aldus onderzoeker Kok. ‘Nu hebben we, toeval of niet, drie vrij droge jaren op rij en zien we ook een relatief hoog aantal natuurbranden.’ Al is het lastig om op basis van drie jaar een trend vast te stellen, zegt hij. </p><h2>Langjarige trend: nog droger</h2><p>Wie er wel een langjarige trend in ziet, is het KNMI. ‘Droge zomers als die van 2018 komen door klimaatverandering nu vaker voor dan rond 1950’, concludeerden de meteorologen donderdag in nieuw onderzoek. Voor Nederland zien de onderzoekers een combinatie van uitdrogende factoren. Een toename van de gemiddelde temperatuur van 1 tot 2 graden, 10 tot 20% meer zonnestraling en een toename van de verdamping met 10 tot 20%. De droogte dit jaar is kortom een  voorbode van een structureel verschijnsel. </p><fdmg-infographic-extended><graphic name="Grondwater-02.svg" url="https://fd-external-development.imgix.net/835a46fa77d979538bb9739a001b354c5e435fe2.png" view="responsive" /><graphic name="Grondwater-01.svg" url="https://fd-external-development.imgix.net/789f01856c0c592a0b33f16ee6c160b0a0c2662b.png" view="xl" /></fdmg-infographic-extended><p>Onder regie van de Landelijke Coördinatiecommissie Waterverdeling (LCW) wordt het peil van het IJsselmeer en Markermeer en van rivieren en ander oppervlaktewater hoger gezet, om zoveel mogelijk schaars water te bufferen. Maar de hoger gelegen zandgronden zijn daar niet mee geholpen. ‘Daar zijn de waterschappen in opperste staat van paraatheid’, meldt LCW-woordvoerder Suzanne Maas.</p><h2>Verdringingsreeks</h2><p>Leidraad voor het verdelen van het schaarse water is de zogeheten Verdringingsreeks, die in de Waterwet van 2009 is verankerd. Anders dan in de rest van Europa staat de drinkwatervoorziening hier niet op nummer één, maar de veiligheid. Het nathouden van kwetsbare veendijken krijgt bijvoorbeeld prioriteit, indachtig de dijkdoorbraak in Wilnis in 2003. Rijkswaterstaat kan met de sluis bij Wijk bij Duurstede, ‘de kraan van Nederland’, zoals Maas van de LCW het noemt, water via de Rijn of het Amsterdam-Rijnkanaal leiden, om voldoende water naar het veenweidegebied te brengen. </p><p>In het droge 2018 werd die Verdringingsreeks voor het eerst in werking gesteld en ontstonden er gelijk meningsverschillen. Zo moest landbouw tamelijk achteraan in de rij aansluiten, behalve als het ging om ‘kapitaalintensieve gewassen’. Dat werd soms zo geïnterpreteerd dat alleen de glastuinbouw aanspraak op schaars water kon maken.</p><p>Om nieuwe onenigheid te voorkomen, bracht het ministerie van Infrastructuur en Waterstaat eind maart een nieuwe handleiding uit voor de Verdringingsreeks. Is daarmee nu duidelijk dat in Nederland eigenlijk alle landbouwgewassen kapitaalintensief zijn? ‘Ja en nee’, antwoordt Trienke Elshof van de boerenkoepel LTO Nederland. Volgens haar wordt nu aan de regio\'s overgelaten in welke volgorde boeren aan de beurt komen voor water. ‘De provincie, maar vooral het waterschap moet hierin het voortouw nemen, bij voorkeur na overleg met de sector\', aldus Elshof.</p><h2>Vissen vangen en elders uitzetten</h2><p>De nieuwe handleiding maakt wel duidelijk dat de eerste plaats die natuur en veiligheid delen in de Verdringingsreeks, in de praktijk weinig voorstelt. De economie gaat voor. Natuur komt alleen in aanmerking voor schaars water als ‘onomkeerbare schade’ als gevolg van menselijk handelen kan worden voorkomen. Droogte op de hogere zandgronden valt de mens niet te verwijten, redeneert de handleiding. En natuurschade is ook vaak herstelbaar, memoreert het document.  ‘(Zeldzame) dieren en vissen kunnen worden gevangen en elders uitgezet.’</p><fdmg-infographic-extended><graphic name="bosbranden-02.svg" url="https://fd-external-development.imgix.net/ba89a7907f858f60f3f3436081164ebca1c1e42b.png" view="responsive" /><graphic name="bosbranden-01.svg" url="https://fd-external-development.imgix.net/e70ef2b42779b1ff83a430e5fe53980716d1718a.png" view="xl" /></fdmg-infographic-extended><p>De regels gelden alleen voor oppervlaktewater. Grote afwezige in de Verdringingsreeks is grondwater. Iedereen mag installatiebedrijf Tiggelovend-Kok of pulsputter Van Roosmalen bellen om een grondwaterbron te laten slaan. Alleen voor grote onttrekkingen is een provinciale vergunning nodig, maar anders volstaat een melding.</p><p>Dat roept de vraag op of de commissie-Waterverdeling het grondwater ook niet moet meenemen. Van wie is het grondwater eigenlijk? Moeten bijvoorbeeld boeren daar onbeperkt toegang tot houden? Ja, vindt niet verrassend Elshof van boerenkoepel LTO. \'Bij grondwater gaat het niet om een verdelingsvraagstuk\', betoogt zij. Boerenland slaat juist veel grondwater op, aldus Elshof. Zij vindt dat ook andere sectoren op hun grondwatergebruik moeten bezuinigen.</p><h2>Landelijk Grondwaterregister</h2><p>Hoeveel grondwaterputten zijn er eigenlijk in Nederland, en neemt dat aantal vanwege de droogte inderdaad toe, zoals de bronboorders signaleren? De Unie van Waterschappen verwijst naar de provincies, die over de vergunning en meldingen gaan. Het Interprovinciaal Overleg denkt dat het Landelijk Grondwaterregister in Utrecht uitsluitsel kan geven. Dat denkt dat register aanvankelijk ook. Maar nee, toch niet. Niemand weet dus hoeveel grondwaterbronnen in Nederland zijn geslagen.</p><p>Wel ziet het Centraal Bureau voor de Statistiek dat het totale grondwaterverbruik afgelopen vijftien jaar redelijk stabiel is. Het beweeglijkst is het gebruik door de landbouw. In het droge 2018 verviervoudigde het grondwaterverbruik door de landbouw tot 225 miljoen m³ en nam het agrarische landbouwaandeel in het totale grondwaterverbruik toe van 5% tot 19%. Als we de bronboorders Leuverink en Van Roosmalen mogen geloven, kunnen die cijfers vandaag best eens hoger liggen.</p><fdmg-readmore title="Lees ook: "><fdmg-content><a href="https://fd.nl/ondernemen/1340231/nederlands-vandersat-haalt-miljoenen-op-om-droogte-in-kaart-te-brengen" id="link-0d2ad65589e2d5a37087b0862edf5a0e" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self">Nederlands VanderSat haalt miljoenen op om droogte in kaart te brengen.</a>\n<a href="https://fd.nl/futures/1337027/welke-waterkwesties-spelen-er-op-dit-moment-in-de-wereld" id="link-89b78b99f18ec81af9f65083f0aef5c4" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self">Welke waterkwesties spelen er op dit moment in de wereld?</a>\n<a href="https://fd.nl/specials/1320776/wie-het-klimaat-niet-ziet-veranderen-moet-nodig-naar-de-opticien" id="link-4d939245d789992f9ab2ede7812a8e3f" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self">Wie het klimaat niet ziet veranderen, moet nodig naar de opticien.</a>\n<a href="https://fd.nl/ondernemen/1310649/regenwater-is-zoet-dus-zuiveren-en-opslaan-loont" id="link-f03e90c4171b3a823173595e2053f27f" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self">Regenwater is zoet, dus zuiveren en opslaan loont.</a></fdmg-content></fdmg-readmore>',
                originalArticleId: '1345539',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: false,
                shortArticle: false,
                fdPersonal: false,
                printTitle: 'Droogte? Sla een eigen grondwaterbron',
                section: 'achtergrond',
                sectionDirectory: 'achtergrond',
                sectionTitle: 'Achtergrond',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 82,
                        tag: 'Milieu',
                        enabled: true,
                        directory: 'milieu',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 1217,
                        tag: 'Landbouw',
                        enabled: true,
                        directory: 'landbouw',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 83,
                        tag: 'Klimaat',
                        enabled: true,
                        directory: 'klimaat',
                        tagCategoryType: 'SUBJECT',
                    },
                ],
                articleLength: 'XXL',
                category: 'LONG_READ',
                workflow: {
                    workInstructions:
                        'Amsterdam - Antoine Hamers heeft voor de papieren krant een foto van een krukdroge akker met een pleogende boer uitgezocht. Dat zou goed zijn als die foto ook bij de webversie wordt geplaatst.\n\nHet is voor de dinsdagkrant.\n2020-05-22 16:11:03 MIERLO - Een boer bemest zijn droge akker in het Brabantse Mierlo. Steeds meer boeren komen door de droogte in de problemen en in sommige delen van het land is al een sproeiverbod ingesteld. Foto: Rob Engelaar / Hollandse Hoogte',
                    characterCount: 8810,
                    state: 'READY',
                    articleCreatedBy: 'Vasco van der Boon',
                    articleLastModifiedBy: 'Steven Adolf',
                },
                fullWidth: true,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Niet eerder viel er in Nederland zo weinig regen. Water wordt schaars en er is steeds meer vraag naar grondwaterputten. Een tweeluik over de gevolgen van de recorddroogte. Vandaag de landbouw en natuur. Morgen de binnenvaart.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 251832,
                        path: '7e221f94a81dee2779d902a10879738c4405a5c6.jpg',
                        width: 3898,
                        height: 2599,
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329308,
                version: 2,
                title: 'Nasdaq doorbreekt even de grens van 10.000 punten',
                state: 'PUBLISHED',
                url:
                    '/beurs/1329308/nasdaq-doorbreekt-even-de-grens-van-10-000-punten',
                publicationDate: 1591733156000,
                lastModificationDate: 1591778453000,
                genre: 'Markten',
                authors: [
                    {
                        id: 28647,
                        fullName: 'Van onze redacteur',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            "'Apple gaat eigen chips in de Mac gebruiken.'",
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252240,
                            path:
                                '84ba7ed7077141a6a911acc503423fb1d781ede1.jpg',
                            width: 640,
                            height: 362,
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    "<p>Op de Amerikaanse beurzen was er dinsdag een tweedeling. De meeste technologieaandelen stegen, waardoor de <strong>Nasdaq Composite</strong> gedurende de dag voor het eerst door de 10.000 punten schoot. De beursgraadmeter daalde later weer naar ruim 9950 punten, 0,3% boven de slotstand van maandag. </p><p>Maar de rest van de markt sloeg de weg omlaag in. De <strong>Dow Jones Industrial Average</strong> kwam 1,1% lager uit en de <strong>S&amp;P500</strong> verloor 0,8%.</p><fdmg-image><fdmg-id>252241</fdmg-id><fdmg-filename>84ba7ed7077141a6a911acc503423fb1d781ede1.jpg</fdmg-filename><fdmg-width>640</fdmg-width><fdmg-height>362</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>right</fdmg-alignment></fdmg-image><p><strong>Apple</strong> gaat binnenkort volgens persbureau Bloomberg zelf geproduceerde halfgeleiders gebruiken in zijn Mac-computers. Het bedrijf houdt later in juni een grote conferentie en de verwachting is dat het bedrijf de plannen daar zal aankondigen.</p><p>Apple is al jaren bezig om zelf chips te ontwikkelen, om zo minder afhankelijk te worden van hofleverancier <strong>Intel</strong>. De aandelenkoers van Apple steeg met ruim 3%. Die van Intel daalde met 1%. </p><p>In de rally van de afgelopen weken zijn de Amerikaanse aandelenmarkten in totaal $21.000 mrd meer waard geworden. Sommige analisten zeggen dat beleggers het economische herstel wellicht iets te optimistisch hebben ingeschat.</p><p>Grote dalers waren dinsdag consumentenbedrijven als cosmeticaverkoper <strong>Coty</strong> (-11%) en winkelketen <strong>Nordstrom</strong>, dat een koersverlies leed van bijna 10%. <strong>Macy's</strong> eindigde ook in de min (-7%). De winkelketen maakte bekend dat het bijna vijfhonderd winkels weer heeft geopend. Ze waren tot voor kort gesloten vanwege de uitbraak van het coronavirus. </p><p>Een bijzonder moment op de beurs van New York was dinsdag de herdenking van George Floyd, de Afro-Amerikaan die op 25 mei overleed nadat een witte politieagent bijna negen minuten op zijn nek had geknield. Op de beursvloer werd bijna negen minuten stilte in acht genomen, vanaf het moment dat Floyds begrafenis in Houston begon.</p>",
                originalArticleId: '1347348',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                topic: 'Wall Street',
                section: 'beursradar',
                sectionDirectory: 'beurs',
                sectionTitle: 'Beurs',
                rubric: 'Wall Street',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 331,
                        tag: 'Aandelen',
                        enabled: true,
                        directory: 'aandelen',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 66034,
                        tag: 'Wall Street',
                        enabled: true,
                        directory: 'wall-street',
                        tagCategoryType: 'SECTION',
                    },
                    {
                        id: 83403,
                        tag: 'Markten',
                        enabled: true,
                        directory: 'markten',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 50506,
                        tag: 'Elon Musk',
                        enabled: true,
                        directory: 'elon-musk',
                        tagCategoryType: 'PERSON',
                    },
                    {
                        id: 36557,
                        tag: 'Effectenbeurs',
                        enabled: true,
                        introText:
                            'Markt waarop gehandeld wordt in effecten zoals aandelen en obligaties. De beurs maakt ook het uitgeven van nieuwe aandelen - bijvoorbeeld bij een beursgang - mogelijk en regelt dividenduitkeringen.',
                        directory: 'effectenbeurs',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 993,
                        tag: 'Computers',
                        enabled: true,
                        directory: 'computers',
                        tagCategoryType: 'SUBJECT',
                    },
                ],
                articleLength: 'S',
                category: 'BEURS',
                workflow: {
                    workInstructions: '',
                    characterCount: 1732,
                    state: 'READY',
                    articleCreatedBy: 'Mathijs Rotteveel',
                    articleLastModifiedBy: 'Joep Westerveld',
                },
                fullWidth: false,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content: "'Apple gaat eigen chips in de Mac gebruiken.'",
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252240,
                        path: '84ba7ed7077141a6a911acc503423fb1d781ede1.jpg',
                        width: 640,
                        height: 362,
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329312,
                version: 2,
                title: 'Obligatiebonanza op Europese markt',
                state: 'PUBLISHED',
                url: '/beurs/1329312/obligatiebonanza-op-europese-markt',
                publicationDate: 1591728775000,
                lastModificationDate: 1591778458000,
                genre: 'Markten',
                authors: [
                    {
                        id: 73302,
                        fullName: 'Mathijs Rotteveel',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Spanje staat bovenaan met de plaatsing van €78 mrd aan obligaties',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252246,
                            path:
                                '08ec4e0b7848828e41a5476fb5a4f0d49e7c642c.jpg',
                            width: 6344,
                            height: 3920,
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    "<fdmg-image><fdmg-id>252247</fdmg-id><fdmg-filename>b302dbf06194f0c66cb2f08a0cd31d8cd476aae1.jpg</fdmg-filename><fdmg-width>734</fdmg-width><fdmg-height>454</fdmg-height><fdmg-caption>De Spaanse overheid wist dinsdag voor €78 mrd aan staatsobligaties te plaatsen. </fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Nacho Doce/Reuters</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-summary title=\"In het kort\"><fdmg-content>De een na de andere Europese staat haalt miljarden op op de obligatiemarkt..\nSpanje spande dinsdag de kroon met een plaatsing van €78 mrd aan obligaties\nDie gretigheid heeft te maken met de corona-opkoopprogramma's van centrale banken.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-summary><p>Europese overheden verdringen elkaar op de Europese obligatiemarkt. Allemaal willen ze snel profiteren van het positieve sentiment, dat mogelijkheden biedt om grof geld op te halen. Dinsdag was het Spanje dat met de hoofdprijs aan de haal ging. De Spaanse overheid wist voor €78 mrd  aan staatsobligaties te plaatsen. </p><p>De gedeelde tweede plaats is voor Ierland en het Verenigd Koninkrijk, die allebei voor €70 mrd obligaties aan beleggers wisten te verkopen. Griekenland probeert bij de kopgroep aan te sluiten. Dat maakte gisteren bekend dat het nieuwe obligaties met een looptijd van tien jaar wil gaan uitgeven. </p><p>Op de Britse obligatie, die dertig jaar loopt, wordt een coupon uitbetaald van 0,625%. De uiteindelijke rentes op die van Ierland, Spanje en Griekenland zijn nog niet bekend. De Spanjaarden vermelden dat hun obligatie, met een looptijd van twintig jaar, 28 basispunten meer gaat opleveren dan vergelijkbare leningen. Ierland belooft een bonus van 30 basispunten en Griekenland probeert beleggers te lokken met 175 basispunten bonus.</p><h2>Opkoopprogramma's van centrale banken</h2><p>De gretigheid waarmee overheden wereldwijd nieuwe obligaties uitschrijven, kan niet los worden gezien van de opkoopprogramma's van centrale banken die sinds het begin van de coronacrisis zijn aangekondigd. De Europese Centrale Bank (ECB) maakte vorige week bekend dat het voor €600 mrd aan obligaties gaat opkopen. De verwachting is dat de Bank of England volgende week een pakket van zo'n £100 mrd toezegt. </p><p>Analisten van Nomura gaan zelfs uit van een budget van £150 mrd voor het opkoopprogramma. Ze nemen de snelheid waarmee de centrale bank van het Verenigd Koninkrijk nu obligaties opkoopt in ogenschouw. Vervolgens hebben ze berekend dat de Britten met een extra injectie van £150 mrd in dit tempo kunnen doorgaan tot half september. Laat dan nu net weer een vergadering van de centrale bank op de agenda staan. Daar kan dan besloten worden of het programma nog verder moet worden uitgebreid.</p><h2>Kredietwaardigheid</h2><p>Van de ECB verwacht Nomura weinig verrassingen meer. Als die er komen dan gaat het eerder om de kwaliteit van de opgekochte obligaties, dan om de kwantiteit. Nomura: 'Nadat de ECB vorige week heeft aangekondigd het opkoopprogramma uit te breiden, focussen wij ons nu op de vraag of de centrale bank ook obligaties gaat opkomen van bedrijven met een lagere kredietwaardigheid. Het kan gaan gebeuren dat ze die ook mogen opkopen.'</p><p>Vooralsnog moet de ECB deze zogenoemde rommelobligaties links laten liggen en zich richten op bedrijven met een stevige kredietwaardigheid en Europese overheden. Dat komt de Europese ministers van financiën prima uit. Zij zitten om geld verlegen. Zolang ze weten dat de centrale banken hun obligaties blijven opkopen, blijven zij die gretig uitgeven.</p>",
                originalArticleId: '1347340',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                topic: 'Financiële markten',
                section: 'beursradar',
                sectionDirectory: 'beurs',
                sectionTitle: 'Beurs',
                rubric: 'Financiële markten',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 245,
                        tag: 'Obligaties',
                        enabled: true,
                        introText:
                            'Een obligatie is een verhandelbaar schuldbewijs voor een lening van een bedrijf of land.',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 32053,
                        tag: 'ECB',
                        enabled: true,
                        directory: 'ecb',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 83403,
                        tag: 'Markten',
                        enabled: true,
                        directory: 'markten',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 348,
                        tag: 'Staatsleningen',
                        enabled: true,
                        directory: 'staatsleningen',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 66023,
                        tag: 'Rente',
                        enabled: true,
                        introText:
                            'Heel algemeen: de vergoeding voor het lenen van geld. ',
                        directory: 'rente',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 42012,
                        tag: 'Kwantitatieve verruiming',
                        enabled: true,
                        directory: 'kwantitatieve-verruiming',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 76596,
                        tag: 'Financiële markten',
                        enabled: true,
                        introText:
                            'Een financiële markt stelt mensen in staat om te handelen in financiële zaken als bijvoorbeeld aandelen of obligaties, of grondstoffen. Financiële markten faciliteren de handel op de valutamarkt, de kapitaalmarkten en de derivatenhandel. De AFM houdt in Nederland toezicht.',
                        directory: 'financiele-markten',
                        tagCategoryType: 'SECTION',
                    },
                ],
                articleLength: 'M',
                category: 'BEURS',
                workflow: {
                    workInstructions: '',
                    characterCount: 2773,
                    state: 'READY',
                    articleCreatedBy: 'Mathijs Rotteveel',
                    articleLastModifiedBy: 'Joep Westerveld',
                },
                fullWidth: false,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Spanje staat bovenaan met de plaatsing van €78 mrd aan obligaties',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252246,
                        path: '08ec4e0b7848828e41a5476fb5a4f0d49e7c642c.jpg',
                        width: 6344,
                        height: 3920,
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329320,
                version: 2,
                title: 'Daar is hij dan: de bitcointracker ',
                state: 'PUBLISHED',
                url: '/beurs/1329320/daar-is-hij-dan-de-bitcointracker',
                publicationDate: 1591719246000,
                lastModificationDate: 1591778470000,
                genre: 'Markten',
                authors: [
                    {
                        id: 34407,
                        fullName: 'Joost van Kuppeveld',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Bitcoinevangelisten wachten er al jaren op, maar nu is hij er. De beursgenoteerde bitcointracker!',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252269,
                            path:
                                'b651fb2b2c4316bcf429e6011778e69ce45d9bac.jpg',
                            width: 640,
                            height: 362,
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<p>Er bestaat in onze taal een uitdrukking met langverwacht en toch gekregen, maar die gaat niet bepaald op voor bitcoinfans. Zij wachten al jaren op een beursgenoteerd bitcoinfonds, want dan zullen grote beleggers, die vermeend aan de zijlijn staan te trappelen, allemaal massaal instappen en gaat de prijs van de cryptomunt helemaal tot aan de hemel.</p><p>Dat evangelie werd luidkeels verkondigd en nu is het eindelijk zover. Of althans: bijna. Vol trots meldde zich dinsdag per persbericht de ETC Group met de mededeling dat \'s werelds eerste centraal afgewikkelde bitcoinproduct BTC-etc \'later deze maand\' zal worden genoteerd aan de Duitse Xetra-beurs. </p><fdmg-image><fdmg-id>252270</fdmg-id><fdmg-filename>b651fb2b2c4316bcf429e6011778e69ce45d9bac.jpg</fdmg-filename><fdmg-width>640</fdmg-width><fdmg-height>362</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>right</fdmg-alignment></fdmg-image><p>Die centrale afwikkeling - <em>\'clearing\'</em> in jargon - is het unieke verkoopargument. Volgens het persbericht biedt dit beleggers betere bescherming tegen het tegenpartijrisico van een transactie, iets dat in de nauwelijks gereguleerde bitcoinwereld aan de orde van de dag is. Een ander groot voordeel is dat beleggers zich ook niet meer druk hoeven te maken om de technische rompslomp die nu eenmaal met cryptobeleggingen gepaard gaan. En dus kunnen de bitcoins niet per ongeluk verloren gaan.</p><p>Goed nieuws voor de digibete gelukszoeker, want de <em>upside</em> blijft geheel intact. Het fonds zal een-op-een gedekt worden met échte bitcoins, de zogeheten fysieke replicatie, die veilig zullen worden bewaard. En het mooie is ook nog dat beleggers bij verkoop ervoor kunnen kiezen om de tegenwaarde van het fonds ook uit te laten keren in bitcoin, al is dan wel de technische rompslomp en mogelijk ook het tegenpartijrisico weer aan de orde.</p><p>Iedereen met een reguliere bank of broker die toegang heeft tot de Xetra-beurs kan meedoen, dus voor veel particulieren komt een belegging in de bitcoin nu echt binnen handbereik. Want ook de inleg hoeft niet groot te zijn. Een unit van de BTC-etc zal 0,001 bitcoin representeren en kan er zodoende voor onder de $10 worden ingestapt. Plus kosten. Dat dan weer wel.</p><p>En die kosten zijn niet mis. Waar een gemiddelde Europese etf zo\'n 38 basispunten aan kosten rekent, moet hier 200 basispunten worden betaald, want de rompslomp is dan weliswaar uitbesteed, maar niet gratis.</p><p>Het gereguleerde beursgenoteerde, centraal afgewikkelde, laagdrempelige product neemt echter het belangrijkste bezwaar tegen een belegging in bitcoin niet weg. De bulk van de handel in de cryptomunt vindt buiten toezicht plaats en is daarmee gevoelig voor prijsmanipulatie, die volgens diverse onderzoeken regelmatig aan de orde is.</p><p>De vraag is of dat voor de echte bitcoingelovige ook echt een bezwaar is. De prijs gaat immers uiteindelijk toch naar astronomische hoogte!</p><fdmg-readmore title="Lees ook:"><fdmg-content><a href="https://fd.nl/beurs/1334007/bitcoin-schiet-voor-het-eerst-sinds-okotober-door-de-10-000" id="link-c422c13569cd50044d79e909eea4627b" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self">Bitcoin schiet voor het eerst sinds oktober door de $10.000</a>\n<a href="https://fd.nl/beurs/1330989/bitcoin-blijft-maar-doorstijgen" id="link-4a9c260bff1799289638d2a3219feecf" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self">Bitcoin blijft maar doorstijgen</a></fdmg-content></fdmg-readmore>',
                originalArticleId: '1347246',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                topic: 'Marktbewegingen',
                section: 'beursradar',
                sectionDirectory: 'beurs',
                sectionTitle: 'Beurs',
                rubric: 'Marktbewegingen',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 83510,
                        tag: 'Marktbewegingen',
                        enabled: true,
                        directory: 'marktbewegingen',
                        tagCategoryType: 'SECTION',
                    },
                    {
                        id: 12,
                        tag: 'Strategie',
                        enabled: true,
                        directory: 'strategie',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 83403,
                        tag: 'Markten',
                        enabled: true,
                        directory: 'markten',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 36557,
                        tag: 'Effectenbeurs',
                        enabled: true,
                        introText:
                            'Markt waarop gehandeld wordt in effecten zoals aandelen en obligaties. De beurs maakt ook het uitgeven van nieuwe aandelen - bijvoorbeeld bij een beursgang - mogelijk en regelt dividenduitkeringen.',
                        directory: 'effectenbeurs',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 76597,
                        tag: 'Fintech',
                        enabled: true,
                        directory: 'fintech',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 448,
                        tag: 'Bitcoin',
                        enabled: true,
                        introText:
                            'Een digitaal betaalmiddel dat feitelijk niks meer is dan een unieke reeks cijfers en letters. Is het waanzin? Zwendel? Of het geld van de toekomst? Men raakt niet uitgepraat over bitcoin, ethereum en andere cryptovaluta’s. Een overzicht van nieuws, analyses, interviews en andere artikelen over bitcoin en andere onderwerpen die raken aan deze financiële innovatie.',
                        tagCategoryType: 'SUBJECT',
                    },
                ],
                articleLength: 'M',
                category: 'BEURS',
                workflow: {
                    workInstructions: '',
                    characterCount: 2617,
                    state: 'READY',
                    articleCreatedBy: 'Joost van Kuppeveld',
                    articleLastModifiedBy: 'Maaike Noordhuis',
                },
                fullWidth: false,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Bitcoinevangelisten wachten er al jaren op, maar nu is hij er. De beursgenoteerde bitcointracker!',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252269,
                        path: 'b651fb2b2c4316bcf429e6011778e69ce45d9bac.jpg',
                        width: 640,
                        height: 362,
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329325,
                version: 2,
                title:
                    'Na overheidssteun wil Basic-Fit nu weer gaan uitbreiden ',
                state: 'PUBLISHED',
                url:
                    '/beurs/1329325/na-overheidssteun-wil-basic-fit-nu-weer-gaan-uitbreiden',
                publicationDate: 1591717817000,
                lastModificationDate: 1591778479000,
                genre: 'Sport',
                authors: [
                    {
                        id: 37601,
                        fullName: 'Lennart Zandbergen',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Fitnessketen beleeft zeer succesvolle aandelenemissie. Met een goedgevulde kas, deels te danken aan staatsgaranties, wil het bedrijf weer gaan uitbreiden.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252284,
                            path:
                                '620896f01c4a2818914c5ceb4f1bf66f4841509b.jpg',
                            width: 6720,
                            height: 4480,
                            crops: [
                                {
                                    ratio: 'NORMAL',
                                    x: 0,
                                    y: 0.001876172607879925,
                                    width: 1,
                                    height: 0.99812382739212,
                                },
                                {
                                    ratio: 'SQUARE',
                                    x: 0.20875,
                                    y: 0,
                                    width: 0.6075,
                                    height: 0.9118198874296435,
                                },
                                {
                                    ratio: 'WIDE',
                                    x: 0,
                                    y: 0.07129455909943715,
                                    width: 1,
                                    height: 0.8442776735459663,
                                },
                            ],
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<fdmg-image><fdmg-id>252285</fdmg-id><fdmg-filename>620896f01c4a2818914c5ceb4f1bf66f4841509b.jpg</fdmg-filename><fdmg-width>6720</fdmg-width><fdmg-height>4480</fdmg-height><fdmg-caption>Basic-Fit gaf dinsdag 5,3 miljoen nieuwe aandelen uit tegen een zeer geringe korting van 1,4% op de slotkoers van de dag ervoor.</fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Presse Sports/ANP</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-summary title="In het kort"><fdmg-content>Fitnessketen Basic-Fit heeft een zeer succesvolle aandelenemissie achter de rug. \nMet het geld wil de sportscholenuitbater verder gaan met uitbreiden.\nBasic-Fit heeft flink deel van zijn kaspositie te danken aan een lening met staatssteun. </fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-summary><p>\'Ik zeg het niet graag over het werk van concurrenten, maar dit was wel een heel succesvolle plaatsing\', zegt een analist van een niet-betrokken partij over de uitgifte van 5,3 miljoen nieuwe aandelen door fitnessketen Basic-Fit dinsdag.</p><p>Dat die emissie succesvol is verlopen, blijkt wel uit het feit dat de uitgegeven stukken een zeer geringe korting kregen van 1,4% ten opzichte van de slotkoers van maandag. Daarbij komt ook dat die slotkoers het resultaat is van een stevige rally. Het aandeel Basic-Fit stond dinsdag 50,4% hoger dan een maand geleden.</p><fdmg-infographic height="500"><fdmg-url>https://localfocuswidgets.net/5edfa1fd8e865</fdmg-url></fdmg-infographic><p>Met de uitgifte haalt de fitnessketen €133 mln op, een bedrag dat het bedrijf wil gebruiken om \'zijn groeistrategie te hervatten\'. Zo wil het bedrijf nieuwe vestigingen openen en aankopen doen. \'We hebben een duidelijk doel: we willen onze groei voortzetten, inclusief acquisities\', zo laat woordvoerder Richard Piekaar van Basic-Fit in een reactie op de emissie weten.</p><p>Oprichter en ceo René Moos is een van de grote kopers van de nieuw uitgegeven aandelen. De ceo koopt via zijn bv AM Holding voor €5 mln aan stukken. Daarmee komt zijn belang uit op circa 15,2%. Een andere grote aandeelhouder is investeerder 3i, die voor zover bekend niet bijkoopt, maar met Moos belooft de komende 90 dagen geen stukken te verkopen.</p><p>Tijdens de <em>lockdown</em> mochten leden van de ruim achthonderd Basic-Fit-sportscholen hun abonnement bevriezen. Daardoor liepen de inkomsten van de keten terug. De directieleden beloven de helft van hun salaris in te leveren en door de NOW-regeling hoefde het personeel niet te worden ontslagen. </p><h2>Kostenverlagingen</h2><p>Basic-Fit maakte afspraken met verhuurders en toeleveranciers over kostenverlagingen en ook maakte het bedrijf bekend dat er geen geld naar het openen van nieuwe filialen zou gaan. Het enige waar nog wel in werd geïnvesteerd was de ontwikkeling van een app en digitale sportklasjes. Op 1 juli verwacht de keten al zijn filialen weer open te hebben. </p><p>In april kreeg Basic-Fit een door de overheid gegarandeerde lening van €60 mln, waar het komende jaar nog niet op hoeft te worden terugbetaald. Die garantstelling valt onder het GO-C-programma van de Rijksdienst voor Ondernemend Nederland. </p><p>Concurrenten vreesden dat de fitnessketen die staatssteun zou gaan gebruiken om concurrenten over te nemen die in de problemen zijn gekomen door de coronacrisis. Die lezing verwerpt het bedrijf. Piekaar: \'Dat zou ook helemaal niet toegestaan zijn. Dat geld is specifiek gebruikt om liquiditeitstekorten op te vangen. Die waren overigens een stuk groter dan het bedrag dat we met die garantstelling leenden. Zonder corona hadden we ook helemaal geen aandelenemissie hoeven doen om onze groeiplannen uit te voeren.\' </p><h2>Gevulde kas</h2><p>Maar ondertussen is de oorlogskas bij Basic-Fit goed gevuld, het bedrijf heeft €250 mln klaarstaan. Dat is naast de aandelenemissie van vandaag te danken aan een lopende kredietfaciliteit bij Rabobank en ABN Amro, waar het bedrijf €40 mln uit heeft opgenomen. Volgens de afspraken die de keten met de banken heeft gemaakt mag Basic-Fit daar nog in totaal €110 mln uit opnemen als de sportscholen weer openen.</p><p>Volgens analisten maakt Basic-Fit zich nu duidelijk klaar om nieuwe overnames te doen. \'Als andere clubs in moeilijke omstandigheden zitten, heeft Basic-Fit het geld om in te springen. Kasmatig staan ze er erg goed voor\', zegt Alan Vandenberghe van KBC. </p><fdmg-readmore title="Lees ook"><fdmg-content><a href="https://fd.nl/ondernemen/1342480/basic-fit-wil-60-mln-lenen-met-nederlandse-staatsgarantie" id="link-0d321ba79317f8d67dbf9a917c63d0c9" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self">Basic-Fit wil €60 mln lenen met Nederlandse staatsgarantie</a></fdmg-content></fdmg-readmore>',
                originalArticleId: '1347240',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                section: 'beursradar',
                sectionDirectory: 'beurs',
                sectionTitle: 'Beurs',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 66531,
                        tag: 'ASR',
                        enabled: true,
                        kvkNumber: '30070695',
                        directory: 'asr',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 331,
                        tag: 'Aandelen',
                        enabled: true,
                        directory: 'aandelen',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 12,
                        tag: 'Strategie',
                        enabled: true,
                        directory: 'strategie',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 36557,
                        tag: 'Effectenbeurs',
                        enabled: true,
                        introText:
                            'Markt waarop gehandeld wordt in effecten zoals aandelen en obligaties. De beurs maakt ook het uitgeven van nieuwe aandelen - bijvoorbeeld bij een beursgang - mogelijk en regelt dividenduitkeringen.',
                        directory: 'effectenbeurs',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 210,
                        tag: 'Sport',
                        enabled: true,
                        directory: 'sport',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 208,
                        tag: 'Expansie',
                        enabled: true,
                        directory: 'expansie',
                        tagCategoryType: 'SUBJECT',
                    },
                ],
                articleLength: 'L',
                category: 'BEURS',
                workflow: {
                    workInstructions: '',
                    characterCount: 3352,
                    state: 'READY',
                    articleCreatedBy: 'Lennart Zandbergen',
                    articleLastModifiedBy: 'Joep Westerveld',
                },
                fullWidth: false,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Fitnessketen beleeft zeer succesvolle aandelenemissie. Met een goedgevulde kas, deels te danken aan staatsgaranties, wil het bedrijf weer gaan uitbreiden.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252284,
                        path: '620896f01c4a2818914c5ceb4f1bf66f4841509b.jpg',
                        width: 6720,
                        height: 4480,
                        crops: [
                            {
                                ratio: 'NORMAL',
                                x: 0,
                                y: 0.001876172607879925,
                                width: 1,
                                height: 0.99812382739212,
                            },
                            {
                                ratio: 'SQUARE',
                                x: 0.20875,
                                y: 0,
                                width: 0.6075,
                                height: 0.9118198874296435,
                            },
                            {
                                ratio: 'WIDE',
                                x: 0,
                                y: 0.07129455909943715,
                                width: 1,
                                height: 0.8442776735459663,
                            },
                        ],
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329306,
                version: 2,
                title: 'Het moet van Europa',
                state: 'PUBLISHED',
                url: '/opinie/1329306/het-moet-van-europa',
                publicationDate: 1591740000000,
                lastModificationDate: 1591778450000,
                genre: 'Binnenland',
                authors: [
                    {
                        id: 13460,
                        fullName: 'Ed Groot',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Je zou als Nederland zelf een nieuwe afweging willen maken tussen de belangen van boeren en natuurbehoud.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252235,
                            path:
                                '38b4b014aae569de5e33ef3cc849de0bf573bb1b.jpg',
                            width: 640,
                            height: 362,
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<p>Was Nederland lichtzinnig ambitieus door maar liefst 161 beschermde Natura-gebieden aan te wijzen, waardoor het hele land op slot dreigt te gaan?</p><p>Nee, zegt de Commissie Remkes in het eindadvies over de stikstofcrisis. Nederland wees 15% van het grondgebied aan als beschermde natuur terwijl het Europese gemiddelde 18% was. ‘Nederland was dus niet strenger’.</p><p>Hm, mij lijkt 15% natuur in een land waar 421 mensen leven per vierkante kilometer bepaald strenger dan 18% in Zweden (22 mensen per km), Frankrijk (104) of Duitsland (226).</p><p>Maar er is geen weg terug, stelt de Commissie, want Nederland heeft ‘zich nu eenmaal in Europa gecommitteerd’.</p><p>Dat kan zo zijn, maar onbevredigend blijft het wel. Je zou als Nederland zelf een nieuwe afweging willen maken tussen de belangen van boeren en natuurbehoud. Dat zou niet eens heel andere uitkomsten hoeven op te leveren. Maar wel meer draagvlak en minder weerzin tegen ‘Europa’.</p><fdmg-text-frame><fdmg-heading>Over Ed Groot</fdmg-heading><fdmg-content>Ed Groot, financieel journalist en voormalig Tweede Kamerlid voor de PvdA, reflecteert elke dag op de actualiteit. Dat doet hij kort – in zo’n 150 woorden – krachtig en helder. Zodat u bij de koffieautomaat nooit met de mond vol tanden hoeft te staan. Reageer via columnist@fd.nl.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-text-frame>',
                originalArticleId: '1347236',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                topic: 'Kleintje Groot',
                section: 'opinie',
                sectionDirectory: 'opinie',
                sectionTitle: 'Opinie',
                rubric: 'Kleintje Groot',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 6,
                        tag: 'EU',
                        enabled: true,
                        introText:
                            'Afkorting van Europese Unie. De Unie bestaat uit 28 landen en is het belangrijkste samenwerkingsverband in Europa. ',
                        directory: 'eu',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 82201,
                        tag: 'Kleintje Groot',
                        enabled: true,
                        directory: 'kleintje-groot',
                        tagCategoryType: 'SECTION',
                    },
                    {
                        id: 32108,
                        tag: 'Hypotheekrente',
                        enabled: true,
                        directory: 'hypotheekrente',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 82,
                        tag: 'Milieu',
                        enabled: true,
                        directory: 'milieu',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 50506,
                        tag: 'Elon Musk',
                        enabled: true,
                        directory: 'elon-musk',
                        tagCategoryType: 'PERSON',
                    },
                    {
                        id: 66013,
                        tag: 'Europese Commissie',
                        enabled: true,
                        introText:
                            'De uitvoerende instantie van de Europese Unie. De voorzitter en de leden worden benoemd door het Europees Parlement. Is onder meer verantwoordelijk voor het indienen van wetsvoorstellen en het beheren van de EU-begroting.',
                        directory: 'europese-commissie',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 83508,
                        tag: 'Binnenland',
                        enabled: true,
                        directory: 'binnenland',
                        tagCategoryType: 'SECTOR',
                    },
                ],
                articleLength: 'UNLIMITED',
                category: 'OPINION',
                workflow: {
                    workInstructions: '',
                    characterCount: 918,
                    state: 'READY',
                    articleCreatedBy: 'Alwine de Jong',
                    articleLastModifiedBy: 'Joep Westerveld',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Je zou als Nederland zelf een nieuwe afweging willen maken tussen de belangen van boeren en natuurbehoud.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252235,
                        path: '38b4b014aae569de5e33ef3cc849de0bf573bb1b.jpg',
                        width: 640,
                        height: 362,
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329315,
                version: 2,
                title: 'Ook goedkope broker moet zich aan regels houden',
                state: 'PUBLISHED',
                url:
                    '/opinie/1329315/ook-goedkope-broker-moet-zich-aan-regels-houden',
                publicationDate: 1591725600000,
                lastModificationDate: 1591778462000,
                genre: 'Financiële sector',
                authors: [
                    {
                        id: 28412,
                        fullName: 'Commentaar',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Prijsvechtende internetbroker DeGiro heeft het aan de stok met de AFM, maar kan de strijdbijl beter begraven.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252255,
                            path:
                                '607ae8cd164e3d8f3dce5de7db9cb941ad8ddd84.jpg',
                            width: 600,
                            height: 337,
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<p>Concurrentie is voordelig voor de consument. Het is daarom uitstekend dat er nieuwe aanbieders zijn gekomen in de aandelenhandel voor particulieren, maar daarbij is het terecht dat de AFM waakt over minimumnormen. </p><p>Voor de millenniumwissel had de huis-tuin-en-keukenbelegger weinig keus. Wie een tussenpersoon zocht om de financiële markten te betreden kwam uit bij een handvol partijen, veelal gelieerd aan grootbanken, met transactiekosten die nu niemand meer accepteert.</p><p>De doorbraak van het wereldwijde web bracht verandering in de oligarchische branche. Steeds meer internetbrokers, uit binnen- en buitenland, dingen naar de gunsten van hongerige rendementszoekers, en schromen niet daarbij met prijzen te stunten. </p><p>Schoolvoorbeeld is DeGiro, een van oorsprong Amsterdamse start-up die in 2013 voor opschudding zorgde door te adverteren met transactiekosten die tot 80% lager lagen dan de concurrentie. Traditionele brokers reageerden geagiteerd, en wezen hun particuliere klanten erop dat goedkoper niet gelijk staat aan veiliger beleggen. </p><p>Het is echter gelukkig niet aan de concurrentie, maar aan de onafhankelijke toezichthouders om te bepalen of er risicoregels zijn overtreden. Recent kwam naar buiten dat DeGiro een juridisch conflict heeft met de Autoriteit Financiële Markten (AFM). DeGiro kwam de laatste jaren meermaals in aanvaring met de AFM, leidend tot tonnen boetes en een mogelijke extra straf van €1 mln.</p><p>Een van de grieven van de AFM is dat DeGiro geld van klanten heeft gestoken in zogeheten geldmarktfondsen, die minder veilig zijn dan bankrekeningen. Dat lijkt het zwaarste punt. Daarnaast ziet de toezichthouder andere problemen, zoals het niet tijdig melden van transacties.</p><p>Uiteraard is het aan de rechter om de grens te leggen wat toelaatbaar is, maar bij financiële bedrijven is de situatie bijzonder. Enerzijds is het voor een beginnend bedrijf in de financiële wereld bijna onmogelijk om vanaf de eerste dag te voldoen aan elk detail van de zee aan eisen die tegenwoordig — terecht — worden gesteld. Enige coulance is soms nodig, omdat anders nieuwkomers kansloos zijn. Maar anderzijds moeten de nieuwkomers beseffen dat die coulance niet te lang kan duren.</p><p>DeGiro is inmiddels een gevestigde naam. Binnenkort wordt het overgenomen door Flatex, dat wel een bankvergunning heeft; daarmee is een belangrijk punt van de AFM sowieso opgelost. Het is de vraag of uitgebreid procederen dan veel zin heeft.</p><fdmg-readmore title="Lees ook"><fdmg-content><a href="https://fd.nl/beurs/1346601/rechtszaak-tussen-degiro-en-afm-over-opgelegde-boetes" id="link-ab91c6bc6e636fff61177b45ea564e41" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self">Rechtszaak tussen DeGiro en AFM over opgelegde boetes</a></fdmg-content></fdmg-readmore>',
                originalArticleId: '1347235',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                topic: 'Commentaar',
                section: 'opinie',
                sectionDirectory: 'opinie',
                sectionTitle: 'Opinie',
                rubric: 'Commentaar',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 83511,
                        tag: 'Financiële sector',
                        enabled: true,
                        directory: 'financiele-sector',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 28120,
                        tag: 'Commentaar',
                        enabled: true,
                        introText:
                            'Een overzicht van de dagelijkse commentaren van de redactie van het FD.',
                        directory: 'commentaar',
                        tagCategoryType: 'SECTION',
                    },
                    {
                        id: 30487,
                        tag: 'AFM',
                        enabled: true,
                        introText:
                            'Autoriteit Financiële Markten. Houdt namens consumenten toezicht op de markt voor financiële producten.',
                        kvkNumber: '41207759',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 32594,
                        tag: 'Toezichthouder',
                        enabled: true,
                        introText:
                            'Door de overheid aangestelde instantie, belast met het controleren van een bepaalde sector of organisatie. Ziet er onafhankelijk en onpartijdig op toe dat de wet wordt nageleefd. ',
                        directory: 'toezichthouder',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 36557,
                        tag: 'Effectenbeurs',
                        enabled: true,
                        introText:
                            'Markt waarop gehandeld wordt in effecten zoals aandelen en obligaties. De beurs maakt ook het uitgeven van nieuwe aandelen - bijvoorbeeld bij een beursgang - mogelijk en regelt dividenduitkeringen.',
                        directory: 'effectenbeurs',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 234,
                        tag: 'Vermogensbeheer',
                        enabled: true,
                        directory: 'vermogensbeheer',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 56,
                        tag: 'Concurrentie',
                        enabled: true,
                        directory: 'concurrentie',
                        tagCategoryType: 'SUBJECT',
                    },
                ],
                articleLength: 'M',
                category: 'OPINION',
                workflow: {
                    workInstructions: '',
                    characterCount: 2423,
                    state: 'READY',
                    articleCreatedBy: 'Sonny MotkÃ©',
                    articleLastModifiedBy: 'Joep Westerveld',
                },
                fullWidth: false,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Prijsvechtende internetbroker DeGiro heeft het aan de stok met de AFM, maar kan de strijdbijl beter begraven.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252255,
                        path: '607ae8cd164e3d8f3dce5de7db9cb941ad8ddd84.jpg',
                        width: 600,
                        height: 337,
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329332,
                version: 2,
                title: 'Zijn economen te pessimistisch?',
                state: 'PUBLISHED',
                url: '/opinie/1329332/zijn-economen-te-pessimistisch',
                publicationDate: 1591713204000,
                lastModificationDate: 1591778492000,
                genre: 'Binnenland',
                authors: [
                    {
                        id: 41,
                        fullName: 'Mathijs Bouman',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'De economische modellen miskennen de veerkracht van ondernemers en consumenten en onderschatten de impact van de noodhulp van de overheid.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252305,
                            path:
                                '939753f1f86ccc1fd22b3f20f43e360c40a8bc39.jpg',
                            width: 900,
                            height: 506,
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<p>Getallen kunnen gruwelijk zijn. Het Centraal Bureau voor de Statistiek publiceerde deze week cijfers over het aantal nieuwe AOW-uitkeringen. In Noord-Brabant en Limburg was er sprake van een forse daling: in april 2020 waren er in deze provincies maar liefst 1.400 minder mensen met een AOW-uitkering dan een maand eerder. Normaal gesproken zou dat aantal met pakweg 1.400 zijn gestegen.</p><p>Zelfs voor mensen die nog steeds in de ‘het-is-maar-een-griepje’-groef zitten moeten dit gruwelijke cijfers zijn. En al die mensen die blaten dat het prima is dat het ‘oude hout’ uit de boom valt, of dat onze ouderen ‘geen recessie waard zijn’, kunnen zich na het zien van de CBS-cijfers de ogen uit de kop schamen. De corona-uitbraak is uitzonderlijk, gruwelijk en helemaal nergens goed voor.</p><p>Maar er is ook goed nieuws. Althans: goed in relatieve zin. Want in mei is het aantal AOW-uitkeringen in Zuid-Nederland weer flink gestegen. Er kwamen in die maand 940 Brabantse en Limburgse AOW-ers bij.  De AOW-grafiek laat dus een duidelijke V-vorm zien: een steile daling in april en een bijna even steile stijging in mei. Voor Oost- en West-Nederland is er ook zo’n V zichtbaar, al is die een stuk minder diep. Alleen in de noordelijke provincies blijft de lijn vrijwel vlak.</p><p>Zo’n V-vorm is precies waar economen aan het begin van de corona-uitbraak op hoopten. Niet voor de instroom in de AOW, maar voor de economie als geheel. Een diepe recessie in het voorjaar, door de lockdown, en dan snel herstel in de zomer. De economie is dit keer niet kapot, dus zodra het virusgevaar minder is zitten we in mum van tijd weer op het oude productieniveau.</p><fdmg-quote><fdmg-message>Als tegenwicht mijn voorspelling: de recessie wordt uitzonderlijk diep, maar ook uitzonderlijk kort</fdmg-message><fdmg-author /></fdmg-quote><p>Inmiddels hebben de meeste economen de hoop op zo’n V-vormig herstel wel opgegeven. Zowel het IMF als de Europese Commissie denken dat we zelfs eind volgend jaar nog lang niet terug zijn op het niveau van voor de uitbraak. Het Centraal Planbureau heeft haar V-scenario de afgelopen weken stilletjes ten grave gedragen. En de economen van de Nederlandsche Bank hadden het deze week over een ‘langzaam herstel’ waarbij onze economie pas in 2023 weer boven Jan is. Als alles meezit.</p><p>Je zou er somber van worden. Daarom als tegenwicht hier mijn voorspelling: de recessie wordt uitzonderlijk diep, maar ook uitzonderlijk kort. We krijgen toch een V-vormig herstel en voor het eind van dit jaar zien we de productie weer flink stijgen en de werkloosheid weer dalen.</p><p>Nee, ik weet dat natuurlijk niet zeker. Maar ik denk dat de economische modellen in deze situatie de veerkracht van ondernemers en consumenten miskennen en de impact van de noodhulp van de overheid onderschatten. V-vormig herstel, ik geef je nog niet op.</p><p><strong><em>Mathijs Bouman is macro-econoom en journalist. Reageer via </em></strong><a href="mailto:columnist@fd.nl" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self" title=""><strong><em>columnist@fd.nl.</em></strong></a></p>',
                originalArticleId: '1347237',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                topic: 'Column',
                section: 'opinie',
                sectionDirectory: 'opinie',
                sectionTitle: 'Opinie',
                rubric: 'Column',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 33919,
                        tag: 'PVV',
                        enabled: true,
                        kvkNumber: '27275998',
                        directory: 'pvv',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 2310,
                        tag: 'Recessie',
                        enabled: true,
                        directory: 'recessie',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 222,
                        tag: 'CBS',
                        enabled: true,
                        directory: 'cbs',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 30097,
                        tag: 'Column',
                        enabled: true,
                        introText:
                            'Een overzicht van alle columns die voor het FD worden geschreven.',
                        directory: 'column',
                        tagCategoryType: 'SECTION',
                    },
                    {
                        id: 322,
                        tag: 'AOW',
                        enabled: true,
                        directory: 'aow',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 83508,
                        tag: 'Binnenland',
                        enabled: true,
                        directory: 'binnenland',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 30362,
                        tag: 'SP',
                        enabled: true,
                        kvkNumber: '40346246',
                        directory: 'sp',
                        tagCategoryType: 'ORGANIZATION',
                    },
                ],
                articleLength: 'UNLIMITED',
                category: 'OPINION',
                workflow: {
                    workInstructions: '',
                    characterCount: 2717,
                    state: 'READY',
                    articleCreatedBy: 'Alwine de Jong',
                    articleLastModifiedBy: 'Alwine de Jong',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'De economische modellen miskennen de veerkracht van ondernemers en consumenten en onderschatten de impact van de noodhulp van de overheid.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252305,
                        path: '939753f1f86ccc1fd22b3f20f43e360c40a8bc39.jpg',
                        width: 900,
                        height: 506,
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329333,
                version: 2,
                title: 'Pharming beloont topman met turbobonus ',
                state: 'PUBLISHED',
                url:
                    '/ondernemen/1329333/pharming-beloont-topman-met-turbobonus',
                publicationDate: 1591713000000,
                lastModificationDate: 1591778494000,
                genre: 'Farmacie',
                authors: [
                    {
                        id: 134,
                        fullName: 'Bartjens',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Sijmen de Vries kan een flinke loonsverhoging tegemoet zien, ondanks het intrekken van het beloningsvoorstel op de vergadering van aandeelhouders.',
                        type: 'FDMG_WEB_PAGES',
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<p>Slecht nieuws voor topman Sijmen de Vries van Pharming. De hem toebedachte salarisverhoging voor de komende jaren staat op losse schroeven. Op de vergadering van aandeelhouders trok het biotechbedrijf uit Leiden vorige maand plotseling een beloningsvoorstel voor zijn raad van bestuur in. Wat is hier aan de hand?</p><p>Uniek is het gebeuren niet. Bij meer bedrijven hebben aandeelhouders zich dit voorjaar tegen een verbeterd beloningsvoorstel voor de bedrijfstop gekeerd.</p><p>Een salarisverhoging is volgens de commissarissen van Pharming wel hard nodig. Een analyse over 2019 laat volgens het jaarverslag zien dat het basissalaris van de drie bestuurders 20% lager is dan bij collega\'s van vergelijkbare bedrijven. Dat gat moet in 2023 stapsgewijs zijn ingelopen. </p><p>Om alvast een begin te maken, besloten de commissarissen eerder dit jaar al tot een extra salarisverhoging van 2%, bovenop een reguliere jaarlijkse verhoging van 4%. Dat betekent dat topman De Vries zijn basissalaris nu sowieso met 6% ziet stijgen van €507.000 tot €537.000. </p><p>Daar verandert het intrekken van het beloningsvoorstel niets aan. Hooguit is twijfelachtig geworden of de rest van de inhaalslag de komende drie jaar doorgang kan vinden. Dat oordeel is aan een bijzondere vergadering van aandeelhouders later dit jaar. </p><p>Diverse buitenlandse institutionele beleggers hebben bezwaren tegen het beloningsvoorstel, zo blijkt uit een summiere toelichting van Pharming. Het Leidse biotechbedrijf zou zich met de verkeerde collega-bedrijven vergelijken. In de niet-gepubliceerde analyse zijn kennelijk nogal wat Amerikaanse bedrijven meegenomen en die betalen vaak hogere salarissen dan in Europa gangbaar is.</p><fdmg-infographic-extended><graphic name="bartjens-beloning-KLEIN.svg" url="https://fd-external-development.imgix.net/a72ac90aaec3e0c00784b2daa3458b787be81d30.png" view="responsive" /><graphic name="bartjens-beloning-GROOT.svg" url="https://fd-external-development.imgix.net/db59059b95df8d51a16beac0a5d9f3f170573cbf.png" view="desktop" /></fdmg-infographic-extended><p>Toch lijkt het uitstel voor De Vries overkomelijk. Want de topman krijgt dit jaar sowieso al een tweede extra. Niet alleen zijn basissalaris gaat omhoog. De commissarissen menen dat ook de cash bonus omhoog moet, van 60% naar 70% van het basissalaris. De bonus is onderdeel van de variabele beloning, die vorig jaar in totaal ongeveer €900.000 bedroeg.</p><p>Die tweede extra is voor de Pharming-topman zeer aantrekkelijk. In feite gaat het om een turboregeling. Als het basissalaris omhoog gaat en ook het percentage voor de cash bonus, gaat immers de cash bonus zelf versneld omhoog. </p><p>Zodoende levert de 70% over het nieuwe basissalaris van €537.000 een maximale cash bonus op van €375.000. Dat betekent dat de potentiële cash bonus in één jaar tijd stijgt met €71.000. Oftewel ruim het dubbele van de toename (€30.000) van het basissalaris.</p><p>Pharming wilde deze turbo doortrekken tot 2023. Aandeelhouders zijn niet enthousiast. </p><p><strong>Reageren? Mail naar </strong><a href="mailto:bartjens@fd.nl" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self" title=""><strong>bartjens@fd.nl</strong></a></p>',
                originalArticleId: '1347325',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                topic: 'Bartjens',
                section: 'ondernemen',
                sectionDirectory: 'ondernemen',
                sectionTitle: 'Ondernemen',
                rubric: 'Bartjens',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 32403,
                        tag: 'Raad van bestuur',
                        enabled: true,
                        introText:
                            'Het hoogste leidinggevende orgaan binnen een organisatie of onderneming. Heeft de dagelijkse leiding in handen en is verantwoordelijk voor het beleid.',
                        directory: 'raad-van-bestuur',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 432,
                        tag: 'Bonus',
                        enabled: true,
                        directory: 'bonus',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 135,
                        tag: 'Salaris',
                        enabled: true,
                        introText: 'Beloning voor arbeid. ',
                        directory: 'salaris',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 30696,
                        tag: 'Bartjens',
                        enabled: true,
                        introText:
                            "Sinds jaar en dag licht FD's rekenmeester Bartjens de boeken van bedrijven door. Welk verhaal schuilt er achter de kwartaalcijfers of jaarresultaten? Heldere analyses over financiële gebeurtenissen, zoals de ontwikkeling van marktaandelen, ebitda, omzetgroei en kapitaalratio's.",
                        directory: 'bartjens',
                        tagCategoryType: 'SECTION',
                    },
                    {
                        id: 30443,
                        tag: 'Farmacie',
                        enabled: true,
                        directory: 'farmacie',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 235,
                        tag: 'Raad van commissarissen',
                        enabled: true,
                        directory: 'raad-van-commissarissen',
                        tagCategoryType: 'SUBJECT',
                    },
                ],
                articleLength: 'UNLIMITED',
                category: 'OPINION',
                workflow: {
                    workInstructions: '',
                    characterCount: 2614,
                    state: 'READY',
                    articleCreatedBy: 'Thieu Vaessen',
                    articleLastModifiedBy: 'Maaike Noordhuis',
                },
                fullWidth: false,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Sijmen de Vries kan een flinke loonsverhoging tegemoet zien, ondanks het intrekken van het beloningsvoorstel op de vergadering van aandeelhouders.',
                    type: 'FDMG_WEB_PAGES',
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329297,
                version: 2,
                title: 'ICT en overheid: mag het een miljoentje meer zijn?',
                state: 'PUBLISHED',
                url:
                    '/futures/1329297/ict-en-overheid-mag-het-een-miljoentje-meer-zijn',
                publicationDate: 1591776300000,
                lastModificationDate: 1591778435000,
                genre: 'Tech en media',
                authors: [
                    {
                        id: 88402,
                        fullName: 'Sanne Kanis',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Sanne Kanis voelt zich vaak een ramptoerist als ze naar de mislukte en geld verkwistende ICT-projecten van de overheid kijkt. Rond corona moet het echt beter.',
                        type: 'FDMG_WEB_PAGES',
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<p>Ik wilde niet kijken, maar ik deed het toch. Aan de overkant van de A4 was een ongeluk gebeurd. Niet kijken hoor, fluisterde ik tegen mezelf. Toch draaide ik mijn nek langzaam verder en verder tot over mijn schouder. Ik zag de verbeten blik van een ambulancebroeder, die in rap tempo een brancard de ambulance in schoof.</p><p>Zo staar ik ook als een ramptoerist naar het bericht dat er een datalek gevonden is in de Infectieradar. Zo’n vijftigduizend burgers vulden hun medische gegevens in, zodat de overheid de infectiegraad van covid-19 beter in beeld kon brengen. In de browser was echter eenvoudig een nummer te veranderen in de URL, waardoor je de medische gegevens kon zien plus het bijbehorende e-mailadres. Er waren geen undergroundhackers voor nodig om de ontwerpfout in de ongeteste software te ontdekken.</p><p>Ik wilde niet kijken, ik wilde het eigenlijk niet weten en ik wilde niet denken: ‘zie je wel’. Het trackrecord van de overheid op het gebied van digitale projecten was al niet best, en het was naïef om te geloven dat de kennis en kunde over digitalisering er in 2020 ‘opeens’ beter op was geworden. Zie ook het proces rond de covid-19-tracing-app.</p><p>Als ik het rijtje van digitale overheidsprojecten uit de afgelopen jaren doortrek, zou een geslaagd digitaal project een zwarte zwaan zijn, een <em>outlier</em> die achteraf aannemelijk en voorspelbaar wordt gemaakt.</p><fdmg-stack-frame><fdmg-heading>Je best doen is in Nederland al snel goed genoeg in de zesjescultuur, nu even niet</fdmg-heading><fdmg-content /></fdmg-stack-frame><p>Begin dit jaar bleek het ICT-project van Team Uitvoering Visserijregelingen met een aanvankelijke begroting van onder de €5 mln, ‘toch op rond de €30 mln uit te komen’.</p><p>In 2019 jaar brak het ministerie van Landbouw het project om ICT-systemen te vernieuwen binnen de Nederlandse Voedsel- en Warenautoriteit af, na een uitgave van €65 mln.</p><p>In 2018 werd het digitaliseringsproject voor de rechtspraak afgebroken, kosten: €200 mln.</p><p>In 2017 stopte het project rondom de ontwikkeling van een nieuw bevolkingsregister, kosten: €100 mln.</p><p>In 2014 stopte de Belastingdienst het automatiseringsproject na negen jaar, kosten: €203 mln. </p><p>Bij elkaar een slordige €500 mln verdampt aan onvoltooide ICT-projecten, stuk voor stuk begroot ‘op zijn Noord/Zuidlijns’. Overigens waren de projecten wellicht niet gestopt zonder ingrijpen van het Bureau ICT-toetsing (BIT), dat toezicht houdt op projecten van groter dan €5 mln.</p><p>Ik wil geen ramptoerist meer spelen, maar de overheid geeft mij geen kans. Het optimisme en de overmoed van de overheid zouden bijna aandoenlijk zijn, als ze niet zo gevaarlijk waren. Je best doen is in Nederland al snel goed genoeg in de zesjescultuur, nu even niet. </p><p>De digitale projecten rondom corona behoeven een zorgvuldige coördinatie. Niet alleen vanwege de miljoenen aan belastinggeld die er mee gemoeid zijn, en de urgentie om praktische oplossingen te bieden om terug te keren naar een normalere samenleving, maar vanwege een nog veel belangrijker goed: onze privacy.</p>',
                originalArticleId: '1347067',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                topic: 'Column',
                section: 'futures',
                sectionDirectory: 'futures',
                sectionTitle: 'Futures',
                rubric: 'Column',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 146,
                        tag: 'Technologie',
                        enabled: true,
                        introText:
                            'Alles wat betrekking heeft op de kennis en de handelingen die nodig zijn voor de ontwikkeling of het gebruik van producten en/of diensten',
                        directory: 'technologie',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 30097,
                        tag: 'Column',
                        enabled: true,
                        introText:
                            'Een overzicht van alle columns die voor het FD worden geschreven.',
                        directory: 'column',
                        tagCategoryType: 'SECTION',
                    },
                    {
                        id: 69,
                        tag: 'Innovatie',
                        enabled: true,
                        introText:
                            'Over vernieuwingen en verbeteringen in het bedrijfsleven. De slimme successen, de vooruitlopers en de uitvindingen waar misschien niemand op zit te wachten.',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 38,
                        tag: 'Investeringen',
                        enabled: true,
                        introText:
                            'Het gebruik van geld, of tijd, of energie om een bepaald doel te bereiken. ',
                        directory: 'investeringen',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 83406,
                        tag: 'Tech en media',
                        enabled: true,
                        directory: 'tech-en-media',
                        tagCategoryType: 'SECTOR',
                    },
                ],
                articleLength: 'L',
                category: 'FUTURES',
                workflow: {
                    workInstructions: 'FDF-4-SanneKanis-130620',
                    characterCount: 2840,
                    state: 'READY',
                    plannedDate: 1592020800000,
                    articleCreatedBy: 'Renol Vestergaard',
                    articleLastModifiedBy: 'Han Ceelen',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Sanne Kanis voelt zich vaak een ramptoerist als ze naar de mislukte en geld verkwistende ICT-projecten van de overheid kijkt. Rond corona moet het echt beter.',
                    type: 'FDMG_WEB_PAGES',
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329313,
                version: 2,
                title:
                    'IT-sector: Nederland dreigt positie als internetknooppunt te verliezen',
                state: 'PUBLISHED',
                url:
                    '/futures/1329313/it-sector-nederland-dreigt-positie-als-internetknooppunt-te-verliezen',
                publicationDate: 1591727037000,
                lastModificationDate: 1591778459000,
                genre: 'ICT-diensten',
                authors: [
                    {
                        id: 45801,
                        fullName: 'Stijn van Gils',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        title:
                            'IT-sector kwaad: Nederland dreigt positie als internetknooppunt te verliezen',
                        content:
                            'Datacenters en andere IT-bedrijven vinden dat Nederland te weinig doet aan het binnenhalen van nieuwe zeekabels.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252249,
                            path:
                                'd625315ca3bf98f88ef8f863243f2c56b9656297.jpg',
                            width: 5960,
                            height: 3987,
                            crops: [
                                {
                                    ratio: 'NORMAL',
                                    x: 0,
                                    y: 0.003738317757009346,
                                    width: 1,
                                    height: 0.994392523364486,
                                },
                                {
                                    ratio: 'SQUARE',
                                    x: 0.16625,
                                    y: 0,
                                    width: 0.66875,
                                    height: 1,
                                },
                                {
                                    ratio: 'WIDE',
                                    x: 0,
                                    y: 0.024299065420560748,
                                    width: 1,
                                    height: 0.8411214953271028,
                                },
                            ],
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    "<fdmg-image><fdmg-id>252250</fdmg-id><fdmg-filename>d625315ca3bf98f88ef8f863243f2c56b9656297.jpg</fdmg-filename><fdmg-width>5960</fdmg-width><fdmg-height>3987</fdmg-height><fdmg-caption>Datacenter in het Science Park in Amsterdam. </fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Roger Cremers voor het FD</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-summary title=\"In het kort\"><fdmg-content>Nederland doet te weinig aan 'de achterkant van het internet', vindt de IT-sector.\nEr wordt bijvoorbeeld niet gelobbyd voor internationale verbindingen over zee.\nIn andere landen gebeurt dat wel. De sector voelt zich in de steek gelaten.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-summary><p>De IT-sector vindt dat de Nederlandse overheid te weinig oog heeft voor de achterkant van het internet. Hierdoor dreigt het land volgens hen zijn positie als internationaal internetknooppunt te verliezen. Terwijl Nederland veel geld steekt in het oplossen van de coronacrisis, voelt de branche zich in de steek gelaten. </p><p>'We begrijpen niet waarom de overheid alleen investeert in traditionele industrieën, maar onze op de toekomst gerichte branche links laat liggen', zegt Stijn Grove, directeur van brancheorganisatie Dutch Data Center Association (DDA).</p><p>'Wij hebben er juist mede voor gezorgd dat Nederland tijdens de lockdown door kon blijven werken. En we zijn helemaal elektrisch.' Bovendien werkt zijn sector hard aan vergroening: 86% van de datacenters gebruikt groene stroom, blijkt uit onderzoek dat de stichting dinsdag zelf publiceerde.</p><h2>Zeekabels</h2><p>Nu nog speelt Nederland een voorname rol in de internetinfrastructuur. Het telt veel datacenters en verschillende belangrijke internationale zeekabels komen hier aan land. Maar die positie is volgens de datacenters op meerdere fronten in gevaar.</p><p>De datacenters, verenigd in de DDA, en andere IT-branches, verenigd in de Stichting Digitale Infrastructuur Nederland (DINL), vinden dat Nederland nauwelijks zijn best doet om nieuwe internationale verbindingen over zee binnen te halen. Afgelopen maand stuurden ze gezamenlijk een brandbrief aan staatssecretaris Mona Keijzer van Economische Zaken, met het verzoek om meer te doen.</p><p>'Andere landen, zoals Ierland en Portugal, lobbyen harder om nieuwe kabels binnen te halen', stelt Michiel Eielts, managing director Benelux van het Amerikaanse datacenterbedrijf Equinix. 'Nederland doet vrijwel niets. Overheidsmedewerkers zijn ook niet te vinden op internationale congressen.'</p><p>De laatste tijd gaat de aanleg van internationale zeeverbindingen consequent aan Nederland voorbij. Zo mist Nederland een belangrijke nieuwe verbinding tussen Afrika en Europa en de VS en Europa.</p><fdmg-quote><fdmg-message>Andere landen, zoals Ierland en Portugal, lobbyen harder om nieuwe kabels binnen te halen</fdmg-message><fdmg-author>Michiel Eielts, managing director Benelux Equinix</fdmg-author></fdmg-quote><p>Ondertussen geldt in de gemeenten Amsterdam en Haarlemmermeer sinds vorig jaar een tijdelijke bouwstop voor nieuwe datacenters, onder andere vanwege het hoge stroomverbruik. Nog altijd is er geen nieuw beleid. 'Deze twee specifieke gemeentes hebben het imago van Nederland als datacenterland geraakt', zegt Edgar van Essen, managing director van Switch Datacenters.</p><h2>Nog altijd groei</h2><p>Critici stellen dat de positie van Nederland echt nog niet in gevaar is. Het feit dat afgelopen weekend duidelijk werd dat 'een groot Amerikaans techbedrijf' zich in Zeewolde (Flevoland) gaat vestigen, zou dat bewijzen. Welk bedrijf wil immers meer dan 160 hectare voor datacenter en kantoor in gebruik nemen, in een land waar de internetverbinding vol dreigt te lopen?</p><fdmg-quote><fdmg-message>Het beleid is best goed</fdmg-message><fdmg-author>Rudolf van der Berg, consultant bij adviesbureau Stratix</fdmg-author></fdmg-quote><p>Voorlopig heeft Nederland voldoende kabels, stelt Rudolf van der Berg, consultant bij adviesbureau Stratix, dat de markt naar zeekabels onderzocht. 'Natuurlijk moet je proberen om voorwaarden te scheppen voor nieuwe, maar de komende jaren is de capaciteit niet in gevaar.' De reden dat Nederland nieuwe kabels misloopt heeft volgens hem meer te maken met de huidige, algeheel goede bereikbaarheid, dan met een gebrek aan lobbyen. 'Het beleid is best goed.'</p><p>'Het probleem zit vooral in het missen van nieuwe directe intercontinentale verbindingen', zegt Michiel Steltman van DINL. 'Net als met Schiphol is de hubfunctie belangrijk. Nederland mist nu een directe link met bijvoorbeeld Afrika.'</p><p>Een woordvoerder van Keijzer laat weten dat een reactie op de brandbrief nog voor het zomerreces is gepland. Daarnaast zegt de staatssecretaris zeekabels wel degelijk belangrijk te vinden en in gesprek te zijn met marktpartijen.</p><fdmg-readmore title=\"Lees ook\"><fdmg-content><a href=\"https://fd.nl/achtergrond/1298536/iedereen-wil-internet-niemand-wil-datacenters\" id=\"link-5f909502f907e203903360db46438f07\" rel=\"noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer\" target=\"_self\">Iedereen wil internet, niemand wil datacenters</a>\n<a href=\"https://fd.nl/ondernemen/1308858/plotse-pauze-nieuwe-datacenters-schadelijk\" id=\"link-390adf770fa9c9ca011576fc158462d5\" rel=\"noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer\" target=\"_self\">'Plotse pauze nieuwe datacenters schadelijk'</a>\n</fdmg-content></fdmg-readmore>",
                originalArticleId: '1347334',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                section: 'futures',
                sectionDirectory: 'futures',
                sectionTitle: 'Futures',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 146,
                        tag: 'Technologie',
                        enabled: true,
                        introText:
                            'Alles wat betrekking heeft op de kennis en de handelingen die nodig zijn voor de ontwikkeling of het gebruik van producten en/of diensten',
                        directory: 'technologie',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 83501,
                        tag: 'ICT-diensten',
                        enabled: true,
                        directory: 'ict-diensten',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 66217,
                        tag: 'Big data',
                        enabled: true,
                        introText:
                            'Term die terugslaat op alle data die bedrijven verzamelen en wat ze daarmee doen. Big data is van toepassing op de hoeveelheid data, de snelheid waarmee die wordt verzameld en de diversiteit van de data. Is meer data ook meer macht en wat betekent dat voor onze privacy?',
                        directory: 'big-data',
                        tagCategoryType: 'SUBJECT',
                    },
                ],
                articleLength: 'L',
                category: 'FUTURES',
                workflow: {
                    workInstructions:
                        'Zo landt de zeekabel 2Africa, die Europa binnen enkele jaren gaat verbinden met verschillende Afrikaanse landen wel aan in Frankrijk en het Verenigd Koninkrijk, maar niet in Nederland. In de nieuwe verbinding van Google tussen Amerika en Europa, die eind dit jaar wordt opgeleverd, mist Nederland eveneens de boot: de kabel komt in Frankrijk aan land.',
                    characterCount: 3636,
                    state: 'READY',
                    articleCreatedBy: 'Stijn van Gils',
                    articleLastModifiedBy: 'Joep Westerveld',
                },
                fullWidth: false,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    title:
                        'IT-sector kwaad: Nederland dreigt positie als internetknooppunt te verliezen',
                    content:
                        'Datacenters en andere IT-bedrijven vinden dat Nederland te weinig doet aan het binnenhalen van nieuwe zeekabels.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252249,
                        path: 'd625315ca3bf98f88ef8f863243f2c56b9656297.jpg',
                        width: 5960,
                        height: 3987,
                        crops: [
                            {
                                ratio: 'NORMAL',
                                x: 0,
                                y: 0.003738317757009346,
                                width: 1,
                                height: 0.994392523364486,
                            },
                            {
                                ratio: 'SQUARE',
                                x: 0.16625,
                                y: 0,
                                width: 0.66875,
                                height: 1,
                            },
                            {
                                ratio: 'WIDE',
                                x: 0,
                                y: 0.024299065420560748,
                                width: 1,
                                height: 0.8411214953271028,
                            },
                        ],
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1328553,
                version: 2,
                title: 'Welkom Georgiërs',
                state: 'PUBLISHED',
                url: '/futures/1328553/welkom-georgiers',
                publicationDate: 1590813000000,
                lastModificationDate: 1590990783000,
                genre: 'Samenleving',
                authors: [
                    {
                        id: 62101,
                        fullName: 'Ralf Bodelier',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'De mannen die glasvezelkabel aanleggen voor het huis van Ralf Bodelier, blijken  Georgiërs te zijn.  Hopelijk blijft ze een meldpunt zoals de Polen bespaard.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 251648,
                            path:
                                'cc4056c9bb60bb6a9303435108dccf107a4d1740.jpg',
                            width: 578,
                            height: 397,
                            crops: [
                                {
                                    ratio: 'NORMAL',
                                    x: 0,
                                    y: 0.01639344262295082,
                                    width: 1,
                                    height: 0.9690346083788707,
                                },
                                {
                                    ratio: 'SQUARE',
                                    x: 0.1575,
                                    y: 0,
                                    width: 0.68625,
                                    height: 1,
                                },
                                {
                                    ratio: 'WIDE',
                                    x: 0,
                                    y: 0.09107468123861566,
                                    width: 1,
                                    height: 0.819672131147541,
                                },
                            ],
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<p>Voor mijn deur graven twee mannen in oranje hesjes glasvezelkabel in de grond. Ze hebben het warm. Ik breng limonade en vraag hoe het gaat. Ze verstaan me niet. Ik probeer het in het Duits en in het Engels. Ze kijken glazig. Ik zeg ‘dzien dobry’, mijn twee woorden Pools. Geen reactie. Waar komt dit duo in godsnaam vandaan? ‘Roemenia’, vraag ik? Boelgaria? Bij de jongste gaat het licht aan. Georgia! Georgia? Georgië? Dat ligt nog voorbij Turkije, ver buiten de Europese Unie. Hoe komen zij hier terecht? De mannen kunnen het me niet vertellen.</p><p>Dat na de Polen de Roemenen en Bulgaren kwamen, dat wist ik al. Dat Nederland in trek is bij Letse en Litouwse arbeidsmigranten ook. Dat we nu ook een beroep doen op arbeidskrachten uit de Zuidelijke Kaukasus is nieuw voor me. Kunnen we nog wel spreken van MOE-Landers, van ‘Midden- en Oost-Europeanen’?</p><fdmg-image><fdmg-id>251649</fdmg-id><fdmg-filename>cc4056c9bb60bb6a9303435108dccf107a4d1740.jpg</fdmg-filename><fdmg-width>578</fdmg-width><fdmg-height>397</fdmg-height><fdmg-caption>Krijgsgevangen Georgiërs op Texel.</fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Wikipedia</fdmg-credit><fdmg-alignment>right</fdmg-alignment></fdmg-image><p>Afijn, ze zijn dus terug, de Georgiërs. Tegen het einde van de Tweede Wereldoorlog dwongen de Duitsers krijgsgevangen Georgiërs op Texel voor hen te vechten. In mei ‘45 ontketenden de Georgiërs een opstand tegen de Duitsers, waarna Texel bezaaid lag met zo’n 1500 lijken.</p><p>Hoe doen de oude MOE-Landers het eigenlijk? Acht jaar geleden probeerde de PVV ons tegen hen op te zetten via een ‘Polenmeldpunt’. Binnen enkele maanden hadden tienduizenden Nederlanders hun beklag gedaan over parkeerproblemen door Oost-Europese auto’s. Vervolgens hoorden we er niets meer van. Terecht, want de inmiddels 400.000 MOE-Landers doen het steeds beter. Door hen worden nu één op de twintig banen in Nederland ingevuld, waaronder die van glasvezelkabelgravers. Onder Nederlanders zijn het zijn niet de populairste banen.</p><p>Rond 1990 gingen Poolse arbeidsmigranten als eersten aan de slag. Van de 250.000 Polen die er nu zijn, wil 83% in Nederland blijven. Terwijl autochtone Nederlanders onze samenleving een 6,6 geven, belonen Poolse migranten ons met een 7,1. Nederland bevalt hen prima en inmiddels wemelt het van de Poolse supermarkten, kerken, disco’s en kappers. Hoewel de eerste generatie nog worstelt met het Nederlands, spreken hun kinderen het vloeiend. Nog maar amper worden zij als Polen herkend. En nu zijn de Georgiërs in opmars. Hopelijk krijgt Wilders geen glasvezel en blijft hen een Georgiërs-meldpunt bespaard.</p>',
                originalArticleId: '1345981',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                topic: 'Anderzijds',
                section: 'futures',
                sectionDirectory: 'futures',
                sectionTitle: 'Futures',
                rubric: 'Anderzijds',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 882,
                        tag: 'Bevolking',
                        enabled: true,
                        directory: 'bevolking',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 85801,
                        tag: 'Anderzijds',
                        enabled: true,
                        introText:
                            "Ralf Bodelier is journalist en filosoof. Hij leidt World's Best News. Anderzijds toont de andere kant van verontrustend nieuws.",
                        directory: 'anderzijds',
                        tagCategoryType: 'SECTION',
                    },
                    {
                        id: 647,
                        tag: 'Immigratie',
                        enabled: true,
                        directory: 'immigratie',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 83506,
                        tag: 'Samenleving',
                        enabled: true,
                        directory: 'samenleving',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 30362,
                        tag: 'SP',
                        enabled: true,
                        kvkNumber: '40346246',
                        directory: 'sp',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 1664,
                        tag: 'Emigratie',
                        enabled: true,
                        directory: 'emigratie',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 115,
                        tag: 'Internationale betrekkingen',
                        enabled: true,
                        introText: 'Onderlinge verhoudingen tussen landen. ',
                        directory: 'internationale-betrekkingen',
                        tagCategoryType: 'SUBJECT',
                    },
                ],
                articleLength: 'M',
                category: 'FUTURES',
                workflow: {
                    workInstructions: '',
                    characterCount: 2257,
                    state: 'READY',
                    plannedDate: 1590811200000,
                    articleCreatedBy: 'Renol Vestergaard',
                    articleLastModifiedBy: 'Kees Swart',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'De mannen die glasvezelkabel aanleggen voor het huis van Ralf Bodelier, blijken  Georgiërs te zijn.  Hopelijk blijft ze een meldpunt zoals de Polen bespaard.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 251648,
                        path: 'cc4056c9bb60bb6a9303435108dccf107a4d1740.jpg',
                        width: 578,
                        height: 397,
                        crops: [
                            {
                                ratio: 'NORMAL',
                                x: 0,
                                y: 0.01639344262295082,
                                width: 1,
                                height: 0.9690346083788707,
                            },
                            {
                                ratio: 'SQUARE',
                                x: 0.1575,
                                y: 0,
                                width: 0.68625,
                                height: 1,
                            },
                            {
                                ratio: 'WIDE',
                                x: 0,
                                y: 0.09107468123861566,
                                width: 1,
                                height: 0.819672131147541,
                            },
                        ],
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1328554,
                version: 2,
                title: 'De VS wacht een roerig decennium',
                state: 'PUBLISHED',
                url: '/futures/1328554/de-vs-wacht-een-roerig-decennium',
                publicationDate: 1590812100000,
                lastModificationDate: 1590990784000,
                genre: 'Politiek',
                authors: [
                    {
                        id: 621,
                        fullName: 'Casper Thomas',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            "Historische cycli voorspellen volgens George Friedman dat de komende tien jaar ‘de zwaarste in de Amerikaanse geschiedenis' worden.",
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 251651,
                            path:
                                '279ee60464c7f48b817b4435264231c2a5deeba0.jpg',
                            width: 2000,
                            height: 1067,
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<p></p><fdmg-image><fdmg-id>251652</fdmg-id><fdmg-filename>279ee60464c7f48b817b4435264231c2a5deeba0.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1067</fdmg-height><fdmg-caption>The Storm Before the Calm, George Friedman, Doubleday, €17,99.</fdmg-caption><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>block</fdmg-alignment></fdmg-image><p>Hoe ziet de toekomst van de Verenigde Staten eruit? Nu de presidentsverkiezingen van 3 november 2020 scherper in zicht komen, dringt die vraag zich steeds meer op. Natuurlijk, de wereld kijkt gespannen toe of er straks een wissel zal plaatsvinden in het Witte Huis, maar nog belangrijker zijn de grote achterliggende vragen: blijft Amerika de dominante grootmacht? Kan het land de diepe interne verdeeldheid overstijgen? Slagen de VS erin groeiende ongelijkheid een halt toe te roepen?</p><p>In <em>The Storm Before the Calm. America’s Discord, the Coming Crisis of the 2020s and the Triumph Beyond</em> geeft toekomstvoorspeller George Friedman zijn antwoord. Friedman is oprichter van Stratfor, een geopolitieke consultancy die zich presenteert als een soort CIA die je kunt inhuren. Hij voorziet een turbulent decennium. De komende tien jaar worden ‘de zwaarste in de Amerikaanse geschiedenis’, schrijft hij. En dat staat los van Trump of welke president dan ook. De Amerikaanse machthebber is voor Friedman niet meer dan ‘bewegwijzering’. Een president maakt geen geschiedenis ‘maar wordt door de geschiedenis gemaakt’.</p><p>Wat er volgens Friedman echt toe doet zijn historische cycli die de VS vormen en die volgens hem zeer nauwkeurig te voorspellen zijn. Elke tachtig jaar doet zich een grote institutionele omslag voor, iedere vijftig jaar sociaaleconomische crisis. Tussen de Amerikaanse burgeroorlog en de nieuwe start na de Tweede Wereldoorlog zat bijvoorbeeld tachtig jaar. Tussen het begin van de Grote Depressie en Reaganomics een halve eeuw. En aan iedere verandering gaat een roerige periode vooraf. Het bijzondere van de huidige tijd, aldus Friedman, is dat het einde van de twee cycli precies samenvallen, als een planetaire constellatie die zich maar eens in  de zoveel eeuwen voordoet. En dus zal de opmaat extra veel beroering brengen.</p><fdmg-stack-frame><fdmg-heading>Methodologische aantekeningen daargelaten, heeft Friedman wel degelijk wat belangrijks te melden over de VS</fdmg-heading><fdmg-content /></fdmg-stack-frame><p>Het is de vraag hoe behulpzaam dit soort historiografische wichelroederij is. Wittgenstein zei ooit dat de stelling ‘de zon gaat morgen op’, nooit meer dan een hypothese kan zijn. Eerdere zonsopgangen versterken misschien de aanname dat het de volgende dag weer licht wordt, maar vormen geen bewijs. Ook voor Friedmans cycli geldt: er is geen dwingende reden aan te nemen dat de toekomst op het verleden zal lijken. Daarbij: als de toekomst toch al vast ligt, waarom zouden Amerikanen dat nog stemmen, debatteren, hoe dan ook keuzes maken? In Friedmans blik zijn de VS overgeleverd aan Grote Historische Krachten die als een Zwitsers uurwerk altijd gelijklopen. Hoe wankel deze aanname is, blijkt uit de afgelopen maanden. <em>The Storm Before the Calm</em> is geschreven voor de coronacrisis. Zal die niet verandering bespoedigen?</p><fdmg-text-frame><fdmg-heading>Auteur:</fdmg-heading><fdmg-content>De in Hongarije geboren George Friedman (71) is oprichter en was tot 2015 ceo van Stratfor, een geopolitieke consultancy die zich presenteert als een soort CIA die je kunt inhuren. Hij is ook de oprichter en voorzitter van onlinepublicatie <a href="https://geopoliticalfutures.com/" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_blank" title="">Geopolitical Futures</a>.\nEerder schreef hij <em>Flashpoints: The Emerging Crisis in Europe, The Next Decade, America’s Secret War, The Future of War en The Intelligence Edge, </em>boeken die in meer dan 20 talen uitkwamen.\nFoto: Meredith Friedman</fdmg-content><fdmg-alignment>right</fdmg-alignment><fdmg-text-frame-image><fdmg-id>251653</fdmg-id><fdmg-filename>f70a549834adaa76ddba76e862792750f4fcebc6.jpg</fdmg-filename></fdmg-text-frame-image></fdmg-text-frame><p>Dit soort methodologische aantekeningen daargelaten, heeft Friedman wel degelijk wat belangrijks te melden over de VS. Het economische model van de afgelopen decennia - flinke bbp-groei, stagnerende middeninkomens en een kleine bovenlaag die steeds rijker wordt - is volgens hem onhoudbaar.  Een doorsnee Amerikaans gezin verdiende in 1975 omgerekend naar het huidig prijsniveau $48.000. Dertig jaar later was dat iets meer dan $53.000. Bijna de helft daarvan is nodig voor woonlasten. Wat overblijft is te weinig voor voeding, onderwijs, vervoer en vermaak. ‘De middenklasse kan zich niet langer de levensstijl van de middenklasse veroorloven’, schrijft Friedman.</p><p>De politieke strijd hierover is niet met een verkiezingsronde beslist en zal de komende tien jaar worden uitgevochten, voorspelt Friedman. Ondertussen zullen instituties verder afkalven om uiteindelijk plaats te maken voor iets nieuws dat rond 2030 zichtbaar zal zijn. Hoe het nieuwe Amerika eruitziet, daar waagt Friedman zich niet aan, maar dat er een nieuwe bloeiperiode komt is volgens hem zeker. De in Hongarije geboren Friedman heeft rotsvast geloof in de kracht van Amerikanen om zichzelf uit het moeras te tillen.</p><p>De zon zal langzaam opkomen met de president die in 2024 verkozen wordt, is de conclusie van <a href="https://www.penguinrandomhouse.com/books/252382/the-storm-before-the-calm-by-george-friedman/" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_blank" title=""><em>The Storm Before the Calm</em></a>. In 2026 overziet zij of hij de viering van de 250ste verjaardag van de onafhankelijkheidsverklaring. Daarna gaat het verder naar 2080, wanneer alles weer op zijn grondvesten zal schudden. </p><fdmg-text-frame><fdmg-heading>Lees ook:</fdmg-heading><fdmg-content>De <a href="https://fd.nl/futures/1344872/vervang-met-kop" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self" title="">Aanraders</a> van deze week: Fred Teeven vertelt</fdmg-content><fdmg-alignment>block</fdmg-alignment><fdmg-text-frame-image><fdmg-id>251654</fdmg-id><fdmg-filename>c0a6de31c51295d7033fde32c82a1d65b0b8cfaa.jpg</fdmg-filename></fdmg-text-frame-image></fdmg-text-frame><p></p>',
                originalArticleId: '1345917',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                topic: 'Review',
                section: 'futures',
                sectionDirectory: 'futures',
                sectionTitle: 'Futures',
                rubric: 'Review',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 85201,
                        tag: 'Review',
                        enabled: true,
                        directory: 'review',
                        tagCategoryType: 'SECTION',
                    },
                    {
                        id: 1322,
                        tag: 'Politiek',
                        enabled: true,
                        introText:
                            'Stelsel waarin de belangen van particulieren, groepen en instanties tot hun recht komen. In Nederland gewaarborgd door de parlementaire democratie. De Nederlandse politiek kent een meerpartijenstelsel en is gericht op consensus, waarin alle betrokken belanghebbenden een stem hebben en zo overeenstemming bereiken. Ook wel: polderen. ',
                        directory: 'politiek',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 66242,
                        tag: 'Donald Trump',
                        enabled: true,
                        introText:
                            'De 45e president van de VS is Donald Trump (1946). Als ondernemer in het New York van de jaren ‘70 en ‘80 groot geworden in het vastgoed en later op tv met de realityshow The Apprentice. In 2015 stelt hij zich kandidaat voor de presidentsverkiezingen en de rest is zoals dat heet, history.',
                        directory: 'donald-trump',
                        tagCategoryType: 'PERSON',
                    },
                ],
                articleLength: 'Lplus',
                category: 'FUTURES',
                workflow: {
                    workInstructions: '',
                    characterCount: 4149,
                    state: 'READY',
                    articleCreatedBy: 'Casper Thomas',
                    articleLastModifiedBy: 'Kees Swart',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        "Historische cycli voorspellen volgens George Friedman dat de komende tien jaar ‘de zwaarste in de Amerikaanse geschiedenis' worden.",
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 251651,
                        path: '279ee60464c7f48b817b4435264231c2a5deeba0.jpg',
                        width: 2000,
                        height: 1067,
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329355,
                version: 1,
                title: 'Reken af met al je schulden',
                state: 'PUBLISHED',
                url: '/persoonlijk/1329355/reken-af-met-al-je-schulden',
                publicationDate: 1591695660000,
                lastModificationDate: 1591778551000,
                genre: 'Financiële sector',
                authors: [
                    {
                        id: 29357,
                        fullName: 'Erica Verdegaal',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'FD Persoonlijk-columnist  Erica Verdegaal reikt ons een handige manier­ aan om snel van onze schulden­ af te komen.',
                        type: 'FDMG_WEB_PAGES',
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<p>Schulden zijn voor je financiële welzijn wat roken voor je gezondheid is. Een enkeling wordt er oud mee, maar gemiddeld genomen is het riskant, vooral in recessietijd. Want als je inkomen plots daalt, je reserves negatief zijn en je lasten doorlopen, dan zijn de rapen gaar, ook al verdien je een ton per jaar. In de kredietcrisis bracht deze combinatie van factoren maar liefst 1,3 miljoen Nederlanders in de problemen. Ze waren steengoed geweest in lenen, maar bleken nitwits in afbetalen. Daarom introduceer ik de schuldenversnipperaar, een methode om al je schulden, inclusief de hypotheek, af te lossen in vijf tot tien jaar, zodat je straks klaar bent voor de volgende crisis.</p><fdmg-stack-frame><fdmg-heading>Je kunt nu immers moeizaam naar  het buitenland, festivals en concerten</fdmg-heading><fdmg-content /></fdmg-stack-frame><p>Natuurlijk gaat het niet helemaal vanzelf. Dit aflosplan vereist dat je 10% meer aflost op je schulden dan nu minimaal moet. Dat is te doen, toch? Je kunt tijdens deze pandemie immers moeizaam naar het buitenland, festivals, concerten en ander vertier. Daardoor ben je helemaal klaar voor de schuldenversnipperaar. Dit stappenplan gaat zo:</p><p><strong>1.</strong> Stop met creditcardbetalingen, tenzij je die schuld elke maand automatisch geheel en probleemloos aflost.</p><p><strong>2.</strong> Maak een overzicht met vier kolommen. Dat kan op papier of op je computer met Excel. Zet in de eerste kolom al je (hypotheek)-schulden onder elkaar, in de tweede het schuldbedrag dat openstaat, en in de derde kolom het minimum dat je er maandelijks op moet afbetalen.</p><p><strong>3.</strong> Deel nu voor elke schuld het bedrag in kolom 2 door dat van kolom 3. Zet de uitkomst in kolom 4. Afbetalen begint met de schuld met de laagste uitkomst in kolom 4.</p><p><strong>4. </strong> Tel nu alle bedragen in kolom 3 op. Die som moet je maandelijks minimaal totaal afbetalen, bijvoorbeeld totaal €2000. Van dit bedrag neem je 10%, dus €200. Met die €200 ga je extra aflossen op de schuld met de laagste uitkomst in kolom 4. Kost die nu minimaal €150 per maand, dan ga je er vanaf nu €350 op afbetalen tot de schuld weggesmolten is. Daarna mag je je één maand met €350 verwennen.</p><p><strong>5.</strong> De maand erna voeg je die €350 toe aan de minimale afbetaling op de nu snelst weg&nbsp;te werken schuld. Dat is de schuld met nu de laagste uitkomst in kolom 4. Betaalde je daarop €150, dan ga je nu €500 afbetalen. Is&nbsp;die schuld weg, dan mag je je weer één&nbsp;maand verwennen, nu met maar liefst&nbsp;€500!</p><p><strong>6.</strong> De maand erop begin je aan de volgende schuld met de laagste uitkomst in kolom&nbsp;4. De minimale betaling verhoog je nu met €500, waardoor je bijvoorbeeld op €750 komt. Zo blijf je maandelijks steeds totaal  €2200 afbetalen (voor zover het boetevrij kan), terwijl je schulden steeds sneller smelten. Zijn ze allemaal weggewerkt, dan kun je je élke maand verwennen met €2200. En dat allemaal door slechts 10% méér af te lossen dan nu minimaal moet. Met dank aan de schuldenversnipperaar. </p><fdmg-quote><fdmg-message>Sommige mensen schamen zich zo om te lenen dat ze het niet durven terug te geven \n</fdmg-message><fdmg-author>Frédéric Dard (1921-2000), Frans schrijver</fdmg-author></fdmg-quote><p></p><fdmg-text-frame><fdmg-heading>Lees ook:</fdmg-heading><fdmg-content>Erica Verdegaal is econoom en publicist. Ze schrijft over alles wat geld doet met de mens en wat de mens doet met geld. erica.verdegaal@fd.nl\nLees ook de <a href="https://fd.nl/auteur/erica-verdegaal" rel="noopener noreferrer noopener noreferrer" target="_self" title="">eerdere columns</a> van Erica Verdegaal.</fdmg-content><fdmg-alignment>block</fdmg-alignment><fdmg-text-frame-image><fdmg-id>252413</fdmg-id><fdmg-filename>0d4e3f3136cb4382004f27f845590438662e133f.jpg</fdmg-filename></fdmg-text-frame-image></fdmg-text-frame><p><strong><em>Lees meer in</em></strong><a href="https://fd.nl/persoonlijk" rel="noopener noreferrer noopener noreferrer" target="_self" title=""><strong><em> FD Persoonlijk</em></strong></a><strong><em>, het weekend magazine van Het Financieele Dagblad over mensen, cultuur, lifestyle, reizen, carrière en personal finance.</em></strong></p>',
                originalArticleId: '1345824',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_persoonlijk',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: false,
                shortArticle: false,
                fdPersonal: true,
                topic: 'Column',
                section: 'fd-persoonlijk',
                sectionDirectory: 'persoonlijk',
                sectionTitle: 'FD persoonlijk',
                rubric: 'Column',
                articleType: 'ARTICLE',
                articleLength: 'L',
                category: 'PERSOONLIJK',
                workflow: {
                    workInstructions: '',
                    characterCount: 2892,
                    state: 'READY',
                    plannedDate: 1591999200000,
                    articleCreatedBy: 'Thomas de Heide',
                    articleLastModifiedBy: 'Kees Swart',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'FD Persoonlijk-columnist  Erica Verdegaal reikt ons een handige manier­ aan om snel van onze schulden­ af te komen.',
                    type: 'FDMG_WEB_PAGES',
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329346,
                version: 1,
                title:
                    '‘Hij kan ronduit bot zijn. Maar dat is ook verlegenheid’',
                state: 'PUBLISHED',
                url:
                    '/persoonlijk/1329346/hij-kan-ronduit-bot-zijn-maar-dat-is-ook-verlegenheid',
                publicationDate: 1591677060000,
                lastModificationDate: 1591778524000,
                genre: 'Persoonlijk',
                authors: [
                    {
                        id: 35305,
                        fullName: 'Maud Beucker Andreae ',
                    },
                ],
                intro:
                    'Ruben Bromet (33), geluidstechnicus en muziekproducent, is de zoon van filmmaker Frans Bromet (75).',
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Ruben Bromet, geluidstechnicus en muziekproducent, is de zoon van filmmaker Frans Bromet.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252343,
                            path:
                                '799a3bfe093cd399bd0b37e90c66fcbed71dc8ae.jpg',
                            width: 2000,
                            height: 1210,
                            crops: [
                                {
                                    ratio: 'NORMAL',
                                    x: 0.04625,
                                    y: 0,
                                    width: 0.90875,
                                    height: 1,
                                },
                                {
                                    ratio: 'SQUARE',
                                    x: 0.21,
                                    y: 0,
                                    width: 0.605,
                                    height: 1,
                                },
                                {
                                    ratio: 'WIDE',
                                    x: 0,
                                    y: 0.03512396694214876,
                                    width: 1,
                                    height: 0.9297520661157025,
                                },
                            ],
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<fdmg-image><fdmg-id>252344</fdmg-id><fdmg-filename>799a3bfe093cd399bd0b37e90c66fcbed71dc8ae.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1210</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit>Fotografie: Alek voor het FD</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-text-frame><fdmg-heading>Familiehistorie</fdmg-heading><fdmg-content>Filmmaker en cameraman Frans Bromet (75) groeide op in Amsterdam, in een gezin van drie kinderen. Zijn vader was boekhouder, zijn moeder huisvrouw. ‘Mijn vader had geen fijne jeugd’, aldus zoon Ruben Bromet, ‘zijn moeder was weinig liefdevol en dreigde er vaak mee een gesticht voor hem te bellen.’ \nBromet brak door met ‘Buren’, een 75-delige serie over de relaties tussen buren. Het thema familie komt vaak terug in Bromets werk, bijvoorbeeld in de films ‘Opvoeden’ en ‘Gescheiden’. In 2017 kreeg hij de Zilveren Nipkowschijf voor zijn oeuvre. Begin dit jaar maakte hij samen met Raoul Heertje, beiden van Joodse komaf, de succesvolle serie ‘Het Israël van Heertje en Bromet’.\nBromet woont met zijn vrouw, Anita, in Ilpendam. Ze hebben drie kinderen (Silvia, Laura en Ruben) en zes kleinkinderen. Geluidstechnicus Ruben Bromet (33) deed het conservatorium in Maastricht en Amsterdam. Hij is single en woont om de hoek bij zijn ouders. Ruben is deels in dienst bij het productiebedrijf &amp;Bromet en maakt ook films en programma’s daarbuiten.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-text-frame><p>‘Kom niet te laat bij mijn vader, want dan krijg je op je donder. Al is het een minuut. Zijn adagium is “wees een kwartier te vroeg, dan weet je tenminste zeker dat je op tijd bent”. Hij is met de jaren wel wat milder geworden, terwijl mijn moeder juist pittiger wordt met de jaren. Ik denk dat dat heel goed is voor de balans in hun huwelijk. Net als het feit dat mijn vader mijn moeder assisteert in de tuin: zij is daar de baas. Sinds een paar jaar kookt mijn vader, niet altijd even verdienstelijk overigens. Mijn moeder bekritiseert hem dan ook geregeld als hij iets op tafel zet. Mijn moeder heeft zich altijd ten dienste gesteld van mijn vader en zijn films. Zij zorgt er met verve voor dat Frans zijn werk kan doen, neemt kinderen en kleinkinderen en het huishouden voor haar rekening.’</p><p>‘Of mijn vader veel thuis was vroeger, daarover verschillen de meningen. Hij vindt van wel, ik vind het wel meevallen. Hij was vaak een paar weken achter elkaar weg om te filmen, om daarna weer een paar weken thuis te zijn, althans op het kantoor om de hoek, om te monteren of te researchen. Mijn vader is vervlochten met zijn werk. En wij, het gezin, zijn dat eigenlijk ook. Mijn beide zussen werkten voor het bedrijf, ik doe dat nog steeds, onder meer als geluidsman en -technicus. Toen ik tiener was had ik dat nooit gedacht, ik wilde in de muziek, ben ook het conservatorium gaan doen. Als puber maakte ik vaak metalmuziek, met mijn eigen band in onze schuur. Tot ongenoegen van de buurman; mijn vader kwam dan voor me op, vond dat de man niet moest zeuren.’</p><fdmg-quote><fdmg-message>Wij gaan bij anderen altijd van het negatieve uit.  Ik denk dat&nbsp;dat wantrouwen een soort zelfbescherming is</fdmg-message><fdmg-author /></fdmg-quote><p>‘Wij vormen een hecht gezin, mijn zussen en ik wonen nog steeds in Ilpendam, het dorp waar we opgroeiden. Onder de rook van Amsterdam hebben we the best of both worlds. Een groot deel van mijn vaders Joodse familie is in de Tweede Wereldoorlog uitgemoord. Ik denk dat hij ons daarom graag dichtbij wil houden. Zijn vader, mijn opa, heeft nauwelijks over de oorlog gesproken. We zijn er zelfs pas onlangs achter gekomen dat mijn grootvader bij het Joodse verzet zat. De hetze tegen Joden, die natuurlijk veel verder teruggaat dan de oorlog, heeft bij ons allemaal tot een natuurlijk wantrouwen geleid. We gaan bij anderen altijd van het negatieve uit. Ik denk dat het een soort zelfbescherming is. En wij vinden eigenlijk ook dat wij zelf tot de kleine groep behoren die wel begrepen heeft hoe het leven in elkaar zit. Daar hadden we het vroeger ook vaak over aan de keukentafel van mijn ouders.’</p><p>‘In het dorp zijn wij niet erg geliefd. Veel mensen denken dat we steenrijk zijn, wat reuze meevalt. Mijn vader heeft het gewoon goed gedaan en leeft zuinig. Een dorp kan soms benauwen, ik weet niet of ik er altijd zal blijven wonen. Mijn ouders denk ik wel, die zijn er inmiddels geworteld.’</p><fdmg-image><fdmg-id>252345</fdmg-id><fdmg-filename>1f271de75083c764ded74885a7695c53fd3d8968.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1318</fdmg-height><fdmg-caption>Ruben en Frans in een restaurant in IJmuiden, rond 1996. </fdmg-caption><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>right</fdmg-alignment></fdmg-image><p>‘Mijn vader heeft een handjevol vrienden, de meeste komen uit de creatieve sector. In het contact met onbekenden kan hij ronduit bot zijn. “Alsjeblieft” zal je hem niet gauw horen zeggen als hij een cappuccino bestelt. Maar daar zit ook een bepaalde verlegenheid achter. Als wij vroeger met vakantie waren in Frankrijk, durfde hij bijvoorbeeld niet aan iemand de weg te vragen. Terwijl hij in al zijn films juist interactie aangaat; zijn typische stemgeluid en zijn directe manier van interviewen zijn zelfs zijn handelsmerken geworden. Zodra zijn camera loopt, wordt mijn vader een ander mens. Het instrument werkt, omdat hij altijd zelf filmt, als een soort schild. Met die camera tussen hem en de geïnterviewde voelt hij zich beschermd.’</p><p>‘Van jongs af aan ben ik betrokken bij het werk van mijn vader. Op mijn zesde wisselde ik al de banden van Zomergasten, een van de programma’s die hij toen maakte. Op mijn elfde maakte ik de website van het bedrijf &amp;Bromet en sinds mijn 15de help ik mee met het geluid. </p><fdmg-quote><fdmg-message> Hij heeft al jaren onmin met zijn eigen buurman, maakt  van die klassieke ruzies over schuttingen en verbouwingen</fdmg-message><fdmg-author /></fdmg-quote><p>Samenwerken met mijn vader is heel fijn. We denken hetzelfde over dingen, maar dagen elkaar ook uit. Mijn vader is bijvoorbeeld meer gericht op kleine films in Nederland, ik denk wat groter. Zo bedacht ik onze film over het vluchtelingenkamp in Calais. Naast mijn rol als geluidsman was ik degene die de mensen aansprak – ik spreek zes talen, mijn vader kan nauwelijks Engels. Eenmaal weer thuis, vertelde hij lovend over mij aan mijn moeder. Hij geeft me ook vaak complimenten over het geluid. Mijn vader is ook behoorlijk technisch, gezien zijn leeftijd best bijzonder. Hij is altijd op de hoogte van ontwikkelingen op het gebied van beeld en geluid.’</p><p>‘Frans brak door met zijn serie Buren. 75 afleveringen lang sprak hij met buren over elkaar. Zelf heeft hij al jaren onmin met zijn eigen buurman, maakt van die klassieke ruzies over schuttingen en verbouwingen. Wellicht komt daar zijn fascinatie vandaan. Ik geloof overigens dat ze het onlangs hebben bijgelegd.’</p><p>‘Het winnen van de Nibkowschijf voor zijn gehele oeuvre was voor mijn vader een belangrijke erkenning van zijn werk. Daarvoor voelde hij zich vaak onbegrepen. Ons recentste programma, Vader in de tuin, had bijna 450.000 kijkers. Natuurlijk doet hem dat goed. En ook mij maakt het trots.’ q</p><p>Lees volgende week het interview met Evert Nater, vriend van dominee Ruben van Zwieten: ‘Als hij iemand op een feestje ontmoet, zal zijn tweede of derde vraag al wezenlijk zijn. Als diegene daar niks mee kan, is hij niet meer geïnteresseerd.’</p><fdmg-text-frame><fdmg-heading>Frans over Ruben:</fdmg-heading><fdmg-content>‘Ruben is onze nakomer, hij scheelt meer dan vijftien jaar met zijn zussen. Als kleuter sprak hij al Engels, zichzelf aangeleerd via de computer. Hij is hoogbegaafd, op school heeft hij zich vaak verveeld. Wij wilden niet dat hij een klas oversloeg, dan zou hij als jongste weer andere problemen krijgen. Maar hij heeft genoeg mot gehad met leraren, was soms echt onhandelbaar.’  \t\n‘Het is mooi om samen te kunnen werken met je zoon, zoals bij de film in Calais. Mede dankzij hem is het een prachtige documentaire geworden, doordrenkt van goede muziek. Ik zou met Ruben nog weleens op deze manier een serie willen  maken.’ \t\n‘Ruben heeft een paar lange relaties gehad, kan totaal meegesleept worden in zijn verliefdheid. Zijn vriendinnen komen meestal niet uit Nederland. Wij hebben daardoor weleens gevreesd dat hij in Wit-Rusland of Amerika zou blijven hangen. Hij reist sowieso graag, nam toen hij jonger was al eens in zijn eentje de Transsiberië Express naar China. Gelukkig komt hij tot nu toe elke keer toch weer thuis.’</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-text-frame><p></p><fdmg-text-frame><fdmg-heading>Lees ook:</fdmg-heading><fdmg-content>Eerdere afleveringen van de rubriek<a href="https://fd.nl/dossier/onderons" rel="noopener noreferrer noopener noreferrer" target="_self" title=""> Onder ons</a>.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-text-frame><p><strong><em>Lees meer in</em></strong><a href="https://fd.nl/persoonlijk" rel="noopener noreferrer noopener noreferrer" target="_self" title=""><strong><em> FD Persoonlijk</em></strong></a><strong><em>, het weekend magazine van Het Financieele Dagblad over mensen, cultuur, lifestyle, reizen, carrière en personal finance.</em></strong></p>',
                originalArticleId: '1346209',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_persoonlijk',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: false,
                shortArticle: false,
                fdPersonal: true,
                topic: 'Onder ons',
                section: 'fd-persoonlijk',
                sectionDirectory: 'persoonlijk',
                sectionTitle: 'FD persoonlijk',
                rubric: 'Onder ons',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 86001,
                        tag: 'Onder ons',
                        enabled: true,
                        directory: 'onder-ons',
                        tagCategoryType: 'SECTION',
                    },
                    {
                        id: 2889,
                        tag: 'Media',
                        enabled: true,
                        directory: 'media',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 66040,
                        tag: 'Interview',
                        enabled: true,
                        directory: 'interview',
                        tagCategoryType: 'SECTION',
                    },
                ],
                articleLength: 'XL',
                category: 'PERSOONLIJK',
                workflow: {
                    workInstructions: '',
                    characterCount: 5496,
                    state: 'READY',
                    plannedDate: 1591999200000,
                    articleCreatedBy: 'Anouk Turkenburg',
                    articleLastModifiedBy: 'Kees Swart',
                },
                fullWidth: true,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Ruben Bromet, geluidstechnicus en muziekproducent, is de zoon van filmmaker Frans Bromet.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252343,
                        path: '799a3bfe093cd399bd0b37e90c66fcbed71dc8ae.jpg',
                        width: 2000,
                        height: 1210,
                        crops: [
                            {
                                ratio: 'NORMAL',
                                x: 0.04625,
                                y: 0,
                                width: 0.90875,
                                height: 1,
                            },
                            {
                                ratio: 'SQUARE',
                                x: 0.21,
                                y: 0,
                                width: 0.605,
                                height: 1,
                            },
                            {
                                ratio: 'WIDE',
                                x: 0,
                                y: 0.03512396694214876,
                                width: 1,
                                height: 0.9297520661157025,
                            },
                        ],
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329347,
                version: 1,
                title: '‘We hebben er veel liefde in gestopt’',
                state: 'PUBLISHED',
                url: '/persoonlijk/1329347/we-hebben-er-veel-liefde-in-gestopt',
                publicationDate: 1591607400000,
                lastModificationDate: 1591778529000,
                genre: 'Vastgoed',
                authors: [
                    {
                        id: 35305,
                        fullName: 'Maud Beucker Andreae ',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Iedere week bespreekt FD Persoonlijk een woning die op zoek is naar een nieuwe eigenaar. Deze week een herenhuis uit de 17de eeuw met wijnkelder en barretje, in een autoluwe buurt in Haarlem. ',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252347,
                            path:
                                'dc10b271b246d93c9b6e6ddc652fa45a2c1dc11b.jpg',
                            width: 2000,
                            height: 1335,
                            crops: [
                                {
                                    ratio: 'NORMAL',
                                    x: 0,
                                    y: 0.0018726591760299626,
                                    width: 1,
                                    height: 0.9962546816479401,
                                },
                                {
                                    ratio: 'SQUARE',
                                    x: 0.12875,
                                    y: 0,
                                    width: 0.6675,
                                    height: 1,
                                },
                                {
                                    ratio: 'WIDE',
                                    x: 0,
                                    y: 0.15543071161048688,
                                    width: 1,
                                    height: 0.8426966292134831,
                                },
                            ],
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<fdmg-image><fdmg-id>252348</fdmg-id><fdmg-filename>dc10b271b246d93c9b6e6ddc652fa45a2c1dc11b.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1335</fdmg-height><fdmg-caption>Bewoner: Trudy Mok. </fdmg-caption><fdmg-alt-text /><fdmg-credit> Beeld: Jacqueline Dubbink voor het FD</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-text-frame><fdmg-heading>Vraagprijs:</fdmg-heading><fdmg-content><strong>€895.000</strong>\nHaarlem, Nieuwe Groenmarkt 1\nGekocht in 2014 voor <strong>€ 395.000</strong>, verbouwd voor <strong>€140.000\n</strong></fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-text-frame><p>Toen de straten om de Nieuwe Groenmarkt door de gemeente autoluw werden verklaard, organiseerde reclameman Marco Mok (61) een buurtborrel om dit te vieren. Mede dankzij het gebod is het er heerlijk rustig. Sowieso zijn Marco en zijn vrouw, Trudy (ook 61), verbindend geweest in de buurt. Marco: ‘Zoiets simpels als een buurtapp­ werkt heel goed.’ Van de weduwe met nieuwe vriend tot ‘de kok’ en zijn vrouw en het Ghanees-Poolse stel op de hoek, ze kennen iedereen met naam en toenaam. En ieder kent elkaar.</p><p>Het 17de-eeuwse pand is perfect onderhouden. Dat was ooit anders, vertelt Marco, en hij laat een foto zien die dat op zijn zachtst gezegd ondersteunt. ‘In de jaren tachtig was de voormalige patriciërswoning een bouwval. Buurtbewoners noemden het “de duiventil” omdat het dak meer uit gat dan dakpan bestond, waar de vogels zich tevreden nestelden.’ De vorige eigenaar heeft de grote herbouw voor zijn rekening genomen. </p><fdmg-stack-frame><fdmg-heading>Doordat de buurt autoluw is verklaard, is het er heerlijk rustig </fdmg-heading><fdmg-content /></fdmg-stack-frame><p>Trudy en Marco kochten het pas zes jaar geleden en ook zij hebben flink huisgehouden. ‘We hebben er vooral veel liefde in gestopt’, zegt interieurstylist Trudy. En met die liefde is de authenticiteit van het huis, met onder meer de sporenkap, balken en origineel metselwerk behouden gebleven. Marco roemt de gewelvenkelder – te zien door het glazen luik dat ze aanbrachten in de zitkamer en gevuld met flessen wijn – en de charmante split level zolder, die ze drie jaar lang verhuurden als B&amp;B. Ook in de kelder: het washok, de klusplaats en een barretje met twee barkrukken voor een intieme proeverij. Trudy is vooral weg van de slaapkamer met originele luiken voor de ramen.</p><p>Hun jongste dochter heeft hier nog een jaar gewoond, de oudste twee waren al uit huis. Vanwege de steile trappen zien Trudy en Marco niet snel een jong gezin zijn intrek nemen, ‘maar met wat oudere kinderen zal het prima gaan’.</p><p>Zoals het een stadshuis betaamt heeft het geen grote tuin, maar aan de achterkant is een klein buiten en boven is een ruim balkon met ochtendzon. Vandaar zie je de huizen van buren als een puzzel in elkaar vallen. ‘Hier vliegen koolmezen en een enkele heggenmus, heel schattig’, zegt Trudy.</p><p>Dat ze afscheid moeten nemen van het sfeervolle pand, doet Trudy ‘behoorlijk veel pijn’ en ook Marco had er langer van willen genieten. Maar doordat het echtpaar gaat scheiden, is het einde van het verblijf in zicht. Elkaar uitkopen is financieel­ niet haalbaar, dus&nbsp;beiden gaan op zoek naar iets nieuws in Haarlem. Ze zijn er geboren en getogen en zijn allebei nog dol op de stad.</p><fdmg-image><fdmg-id>252349</fdmg-id><fdmg-filename>c9326aab9eb31a961759754aaf469117c94fe491.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1335</fdmg-height><fdmg-caption>Forografie: Jacqueline Dubbink</fdmg-caption><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>block</fdmg-alignment></fdmg-image><p> </p><fdmg-image><fdmg-id>252350</fdmg-id><fdmg-filename>6db869fd3acf833b8165af07f5887783650bf64e.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1334</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-image><fdmg-id>252351</fdmg-id><fdmg-filename>6bd5784a1a835a2d0091f23b88e60e6ae15ba326.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1334</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-image><fdmg-id>252352</fdmg-id><fdmg-filename>d9b2a2a3dda1257c3e84cacaa3643fa3d794fa29.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1334</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-image><fdmg-id>252353</fdmg-id><fdmg-filename>2412848c1de9c5883180b2a9d82b0bf75f5d6238.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1334</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-image><fdmg-id>252354</fdmg-id><fdmg-filename>f9087950e2bc6ad8132b54486f9c34d94ebe64d1.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1334</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-image><fdmg-id>252355</fdmg-id><fdmg-filename>6d5d4d7442f21f698899eef22b9255fcce027fef.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1334</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-image><fdmg-id>252356</fdmg-id><fdmg-filename>5b5f19506c9288106c104a2a0b2979cea350c48c.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1334</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-image><fdmg-id>252357</fdmg-id><fdmg-filename>ca1fdea4f899b76a71d6590e20bd3fa673f97256.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1334</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-image><fdmg-id>252358</fdmg-id><fdmg-filename>3ce2dcdc513d4f66f9e7f16f955f57b072864cb2.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1334</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-image><fdmg-id>252359</fdmg-id><fdmg-filename>7eb656b0fd0db1a050beb8a1521247fccc9dcd31.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1334</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-image><fdmg-id>252360</fdmg-id><fdmg-filename>c781f3ae093ef971f8700c0214fa3daa2cfcaa7c.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1334</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-image><fdmg-id>252361</fdmg-id><fdmg-filename>eb27ee621d8710e9b8c26f69878c9c3494dc610a.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1334</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-image><fdmg-id>252362</fdmg-id><fdmg-filename>88b15608eb9053a460fb69860c95b8d613332f64.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1335</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>block</fdmg-alignment></fdmg-image><p><strong><em>Lees meer in</em></strong><a href="https://fd.nl/persoonlijk" rel="noopener noreferrer noopener noreferrer" target="_self" title=""><strong><em> FD Persoonlijk</em></strong></a><strong><em>, het weekend magazine van Het Financieele Dagblad over mensen, cultuur, lifestyle, reizen, carrière en personal finance.</em></strong></p>',
                originalArticleId: '1345825',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_persoonlijk',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: false,
                shortArticle: false,
                fdPersonal: true,
                topic: 'Huis te koop',
                section: 'fd-persoonlijk',
                sectionDirectory: 'persoonlijk',
                sectionTitle: 'FD persoonlijk',
                rubric: 'Huis te koop',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 11,
                        tag: 'Vastgoed',
                        enabled: true,
                        introText:
                            'De vastgoedwereld heeft de crisisjaren achter zich gelaten. In 2015 investeerden vastgoedbeleggers een recordbedrag in winkelpanden. De opgeleefde huizenmarkt trekt beleggers aan uit het buitenland, vastgoedbedrijven bouwen leegstaande kantoorpanden om tot woningen. Lees hier de laatste ontwikkelingen op de markt voor vastgoed en beleggen in vastgoed.',
                        tagCategoryType: 'SECTOR',
                    },
                ],
                articleLength: 'M',
                category: 'PERSOONLIJK',
                workflow: {
                    workInstructions: '',
                    characterCount: 2646,
                    state: 'READY',
                    plannedDate: 1591999200000,
                    articleCreatedBy: 'Thomas de Heide',
                    articleLastModifiedBy: 'Kees Swart',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Iedere week bespreekt FD Persoonlijk een woning die op zoek is naar een nieuwe eigenaar. Deze week een herenhuis uit de 17de eeuw met wijnkelder en barretje, in een autoluwe buurt in Haarlem. ',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252347,
                        path: 'dc10b271b246d93c9b6e6ddc652fa45a2c1dc11b.jpg',
                        width: 2000,
                        height: 1335,
                        crops: [
                            {
                                ratio: 'NORMAL',
                                x: 0,
                                y: 0.0018726591760299626,
                                width: 1,
                                height: 0.9962546816479401,
                            },
                            {
                                ratio: 'SQUARE',
                                x: 0.12875,
                                y: 0,
                                width: 0.6675,
                                height: 1,
                            },
                            {
                                ratio: 'WIDE',
                                x: 0,
                                y: 0.15543071161048688,
                                width: 1,
                                height: 0.8426966292134831,
                            },
                        ],
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329356,
                version: 1,
                title: 'Hulp in lastige tijden (5): brief aan Wopke',
                state: 'PUBLISHED',
                url:
                    '/persoonlijk/1329356/hulp-in-lastige-tijden-5-brief-aan-wopke',
                publicationDate: 1591417800000,
                lastModificationDate: 1591778552000,
                genre: 'Persoonlijk',
                authors: [
                    {
                        id: 46001,
                        fullName: 'Menno de Bree',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            ' FD-Persoonlijk columnist Menno de Bree gunt iedereen een vorstelijke verbouwvergoeding.',
                        type: 'FDMG_WEB_PAGES',
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<p></p><p>Droogt door de crisis uw cashflow op? Komt uw verbouwing in gevaar? Geen nood, uw huisgoeroe helpt! Stuur onderstaand briefje aan onze minister van Financiën en alles komt goed.</p><p><em>Geachte meneer Wopke,</em></p><p>Op 4 mei luisterde ik naar de toespraak van koning Willem en hoewel mijn gedachten wat afdwaalden (draagt hij nu een toupet of niet?), werd ik toch gegrepen door zijn opmerking ‘dat je niet moet wegkijken’. Dat is een heel bruikbare tip, relevant voor diverse bevolkingsgroepen en toepasbaar op vele levensterreinen, bijvoorbeeld bij het oversteken.</p><p>Maar nu las ik net dat Willem zijn privévertrekken in Huis ten Bosch heeft laten renoveren op kosten van de zaak, dus van mijn en uw belastingcentjes. Hij krijgt al vijf miljoen per jaar onkostenvergoeding voor dit soort dingen, maar dat potje hoeft ie nu niet aan te spreken, wat op zich goed uitkomt, aangezien hij dat bedrag mooi aan zijn dochter kan geven. Die ontvangt maar anderhalf miljoen per jaar vanaf haar 18de.</p><fdmg-text-frame><fdmg-heading>Lees ook:</fdmg-heading><fdmg-content><a href="https://fd.nl/fd-persoonlijk/1343223/hulp-in-lastige-tijden-1" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self" title="">Hulp in lastige tijden (1)</a>\n<a href="https://fd.nl/fd-persoonlijk/1343705/hulp-in-lastige-tijden-2-verbinding" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self" title="">Hulp in lastige tijden (2): verbinding</a>\n<a href="https://fd.nl/fd-persoonlijk/1344555/hulp-in-lastige-tijden-3-je-gevoel-volgen" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self" title="">Hulp in lastige tijden (3): je gevoel volgen</a>\n<a href="https://fd.nl/fd-persoonlijk/1345520/hulp-in-lastige-tijden-4-de-dood-accepteren" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self" title="">Hulp in lastige tijden (4): de dood accepteren</a></fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-text-frame><p>Als ik zoiets hoor, dan denk ik toch: waarom krijgt die man dat wel en ik niet? Nu kunnen we natuurlijk allemaal wegkijken en denken: ja, maar Willem verdient zich makkelijk terug als ie meegaat naar China, want dankzij hem verkoopt de BV Nederland nóg meer spulletjes! Maar de kost gaat voor de baat uit en iedereen moet op de kleintjes letten, waar of niet? Hij verkoopt vanuit een kamertje van drie miljoen echt niet meer kaas dan vanuit een kamertje van twee miljoen.</p><p>Daarbij komt dat ook ik me keihard inzet voor het vaderland. Zo belangrijk als Willem ben ik niet, maar hardwerkende, belasting betalende burgers als ik vormen de ruggengraat van de samenleving. Ik stel daarom het volgende voor. Als Willem recht heeft op vergoeding, dan heb ik dat, in evenredigheid natuurlijk, ook. Stel nu dat mijn bijdrage aan de BV NL één procent bedraagt van die van Willem en dat hij de helft van die 63 miljoen verbouwingskosten privé heeft gebruikt. Dan heb ik, naar beneden afgerond, ook recht op één procent van 30 miljoen: drie ton.</p><p>Nu wilde ik net gaan verbouwen, dus mijn verzoek is of u deze maatschappelijke bijdrage aan mijn renovatiekosten wilt storten op [hier uw rekeningnummer]. Verder is het wel handig om te weten dat mijn [aantal] kind[eren] op [data] meerderjarig worden en vanaf dan hun jaarlijkse toelage zullen claimen. Dan kunt u alvast beginnen met sparen.</p><p>Tot slot: hoe u die verbouwingskosten verder wegschrijft, moet u zelf weten, maar ik zou ze gewoon als restpost bij de renovatie van de Tweede Kamer opvoeren. Daar kraait verder geen haan naar. Maar u kunt het ook zo’n corrupte VVD’er vragen; die hebben vaak ook goede boekhoudtips.</p><p><em>Hartelijke groet en hou vol!  [hier uw naam]</em></p><p></p><p></p><fdmg-text-frame><fdmg-heading>Auteur:</fdmg-heading><fdmg-content><a href="https://fd.nl/auteur/menno-de-bree" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self" title="">Menno de Bree</a> is filosoof, woont in  Groningen en schrijft  over de hobbels van  het dagelijks leven. <a href="https://menno.de.bree@fd.nl" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self" title="">menno.de.bree@fd.nl</a>\nLees ook de <a href="https://fd.nl/auteur/menno-de-bree" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self" title="">eerdere columns </a>van Menno de Bree.</fdmg-content><fdmg-alignment>block</fdmg-alignment><fdmg-text-frame-image><fdmg-id>252414</fdmg-id><fdmg-filename>a0e7e2f49635e04d1f20fccae15483fb08c7a521.jpg</fdmg-filename></fdmg-text-frame-image></fdmg-text-frame><p><strong><em>Lees meer in</em></strong><a href="https://fd.nl/persoonlijk" rel="noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer" target="_self" title=""><strong><em> FD Persoonlijk</em></strong></a><strong><em>, het weekend magazine van Het Financieele Dagblad over mensen, cultuur, lifestyle, reizen, carrière en personal finance.</em></strong></p>',
                originalArticleId: '1345999',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_persoonlijk',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: false,
                shortArticle: false,
                fdPersonal: true,
                topic: 'Column',
                section: 'fd-persoonlijk',
                sectionDirectory: 'persoonlijk',
                sectionTitle: 'FD persoonlijk',
                rubric: 'Column',
                articleType: 'ARTICLE',
                articleLength: 'L',
                category: 'PERSOONLIJK',
                workflow: {
                    workInstructions: '',
                    characterCount: 2815,
                    state: 'READY',
                    plannedDate: 1591394400000,
                    articleCreatedBy: 'Anouk Turkenburg',
                    articleLastModifiedBy: 'Kees Swart',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        ' FD-Persoonlijk columnist Menno de Bree gunt iedereen een vorstelijke verbouwvergoeding.',
                    type: 'FDMG_WEB_PAGES',
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
        ],
        lastSevenDaysModel: {
            lastSevenDaysTeasers: [],
            loading: true,
            userLoggedIn: false,
            recommendationsMessageVisible: false,
            lastSevenDaysTeasersEmpty: true,
            showRecommendations: true,
            error: false,
        },
        firstRowNewsTeasers: [
            {
                id: 1329298,
                title: 'Oeso voorspelt diepste recessie in meer dan een eeuw',
                intro:
                    "Na een tweede corona-uitbraak krimpt economie van de rijkste landen dit jaar met 7,6%. Blijft het bij één uitbarsting dan is de krimp 'slechts' 6,1%.",
                topicPrefixOrCategory: 'Macro-economie',
                publicationUrl:
                    '/economie-politiek/1329298/oeso-voorspelt-diepste-recessie-in-meer-dan-een-eeuw',
                latestUpdate: {},
                recommended: false,
                newWindow: false,
            },
            {
                id: 1329299,
                title:
                    "'ECB overweegt oprichting bad bank voor slechte leningen'",
                intro:
                    'De centrale bank zou volgens bronnen van Reuters al een werkgroep hebben opgezet. Ook zou president Christine Lagarde banken en EU-functionarissen hebben geraadpleegd.',
                topicPrefixOrCategory: 'Financiële sector',
                publicationUrl:
                    '/economie-politiek/1329299/ecb-overweegt-oprichting-bad-bank-voor-slechte-leningen',
                latestUpdate: {},
                recommended: false,
                newWindow: false,
            },
            {
                id: 1329300,
                title:
                    'Ceo CrossFit stapt op na omstreden uitlatingen over George Floyd',
                intro:
                    'De oprichter van de sportschoolketen Greg Glassman kwam deze week in opspraak na meerdere opmerkingen over de zwarte demonstrant',
                topicPrefixOrCategory: 'Sport',
                publicationUrl:
                    '/ondernemen/1329300/ceo-crossfit-stapt-op-na-omstreden-uitlatingen-over-george-floyd',
                latestUpdate: {},
                recommended: false,
                newWindow: false,
            },
            {
                id: 1329307,
                title:
                    "Kamer wil dat kabinet IJmuiden bevrijdt van 'het juk van Tata' ",
                intro:
                    'Kamerbreed gesteunde PvdA-motie roept op om zo nodig onconventionele middelen in te zetten. ',
                topicPrefixOrCategory: 'Industrie',
                publicationUrl:
                    '/economie-politiek/1329307/kamer-wil-dat-kabinet-ijmuiden-bevrijdt-van-het-juk-van-tata',
                latestUpdate: {},
                recommended: false,
                newWindow: false,
            },
        ],
        secondRowNewsTeasers: [
            {
                id: 1329309,
                title: 'Kabinet komt snel met regels voor veilig vliegen',
                intro:
                    'Tweede Kamer wil onderzoek naar en regels voor voldoende afstand aan boord. ',
                topicPrefixOrCategory: 'Vervoer',
                publicationUrl:
                    '/economie-politiek/1329309/kabinet-komt-snel-met-regels-voor-veilig-vliegen',
                latestUpdate: {},
                recommended: false,
                newWindow: false,
            },
            {
                id: 1329310,
                title:
                    'Luchtvaart stevent op monsterverlies af van $100 mrd in twee jaar tijd ',
                intro:
                    'Branchevereniging Iata voorziet explosieve groei van schuldenlast tot $550 mrd en verlies van een miljoen banen tot eind dit jaar.',
                topicPrefixOrCategory: 'Vervoer',
                publicationUrl:
                    '/economie-politiek/1329310/luchtvaart-stevent-op-monsterverlies-af-van-100-mrd-in-twee-jaar-tijd',
                latestUpdate: {},
                recommended: false,
                newWindow: false,
            },
            {
                id: 1329314,
                title: 'China weerspreekt suggestie dat corona al eerder begon',
                intro:
                    'Onderzoek van Harvard Medical School levert aanwijzingen op dat besmetting al in augustus de kop op stak.',
                topicPrefixOrCategory: 'Buitenland',
                publicationUrl:
                    '/economie-politiek/1329314/china-weerspreekt-suggestie-dat-corona-al-eerder-begon',
                latestUpdate: {},
                recommended: false,
                newWindow: false,
            },
            {
                id: 1329316,
                title:
                    'Hoe Nederland zijn stikstofcrises voor boer en natuur creëerde',
                intro:
                    "Al sinds begin jaren zeventig wordt het mestprobleem met pappen en nathouden aangepakt, reconstrueert de commissie-Remkes. Voortzetting van dit beleid is 'onacceptabel'.",
                topicPrefixOrCategory: 'Landbouw',
                publicationUrl:
                    '/economie-politiek/1329316/hoe-nederland-zijn-stikstofcrises-voor-boer-en-natuur-creeerde',
                latestUpdate: {},
                recommended: false,
                newWindow: false,
            },
        ],
    },
    mynewsIds: {
        Desktop_MijnNieuws_Advertorial2: {
            id: 'div-gpt-ad-1428663750441-4',
            dataSlotRef:
                '/7905/FD.nl_2014/Sectie/Desktop_MijnNieuws_Advertorial2',
            dataSlotSizes: '[640, 210]',
            viewSize: 'mediumlarge',
        },
        Desktop_MijnNieuws_Advertorial1: {
            id: 'div-gpt-ad-1428663721602-3',
            dataSlotRef:
                '/7905/FD.nl_2014/Sectie/Desktop_MijnNieuws_Advertorial1',
            dataSlotSizes: '[640, 210]',
            viewSize: 'mediumlarge',
        },
        Tablet_MijnNieuws_Advertorial: {
            id: 'div-gpt-ad-1429630633500-1',
            dataSlotRef:
                '/7905/FD.nl_2014/Sectie/Tablet_MijnNieuws_Advertorial',
            dataSlotSizes: '[[640, 140], [640, 220], [300, 250], [320, 240]]',
            viewSize: 'medium',
        },
        Phone_MijnNieuws_Advertorial: {
            id: 'div-gpt-ad-1429630764650-1',
            dataSlotRef: '/7905/FD.nl_2014/Sectie/Phone_MijnNieuws_Advertorial',
            dataSlotSizes: '[[300, 250], [300, 240], [300,50], [300,100]]',
            viewSize: 'small',
        },
    },
    highlightedCardsModel: {
        breakingTeaser: {
            id: 1329318,
            title:
                "Het Israëlische ministerie van financiën overweegt een beursgang van defensiebedrijf Israel Aerospace Industries, een van 's werelds grootste leveranciers van defensiesystemen",
            intro: 'Privatisering Israel Aerospace Industries mogelijk nabij.',
            topicPrefixOrCategory: 'Markten',
            publicationUrl:
                '/beurs/1329318/israel-overweegt-beursgang-defensiebedrijf',
            image: {
                normalUrl:
                    'https://fd-external-development.imgix.net/4ac1ce5c2f1ead43bc8bcfbfaa280837519fd480.jpg?fit=crop&crop=faces&auto=format',
                squareUrl:
                    'https://fd-external-development.imgix.net/4ac1ce5c2f1ead43bc8bcfbfaa280837519fd480.jpg?fit=crop&crop=faces&auto=format',
                wideUrl:
                    'https://fd-external-development.imgix.net/4ac1ce5c2f1ead43bc8bcfbfaa280837519fd480.jpg?fit=crop&crop=faces&auto=format',
            },
            latestUpdate: {},
            breaking: true,
            newWindow: false,
        },
        primaryCards: [],
        secondaryCards: [
            {
                id: 1329322,
                title:
                    'Nieuwe Volkswagen-baas, Ralf Brandstätter, moet racistische uitglijder doen vergeten',
                intro:
                    'Ralf Brandstätter moet een eind maken aan de problemen bij het bedrijf, hoewel hij er zelf medeverantwoordelijk voor was. Hij is populair onder medewerkers, maar moet nu fors in de organisatie snijden.',
                topicPrefixOrCategory: 'Profiel',
                publicationUrl:
                    '/profiel/1329322/nieuwe-volkswagen-baas-moet-racistische-uitglijder-doen-vergeten',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/28073cba3e3dd07419053640a6cc8899d6b2a257.jpg?rect=.15875%2c.1106941838649156%2c.7025%2c.6979362101313321&fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/28073cba3e3dd07419053640a6cc8899d6b2a257.jpg?rect=.2725%2c.1125703564727955%2c.4725%2c.7091932457786116&fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/28073cba3e3dd07419053640a6cc8899d6b2a257.jpg?rect=.11875%2c.1144465290806754%2c.795%2c.6735459662288931&fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
            },
            {
                id: 1328642,
                title:
                    '‘Hij heeft een klein hartje, maar laat niet graag zijn kwetsbaarheid zien’',
                intro:
                    'Nina Poot, mede-eigenaar van het sieradenmerk Anna + Nina, is de dochter van Peter Poot, ceo van gebiedsontwikkelaar Chipshol.',
                topicPrefixOrCategory: 'Onder ons',
                publicationUrl:
                    '/persoonlijk/1328642/hij-heeft-een-klein-hartje-maar-laat-niet-graag-zijn-kwetsbaarheid-zien',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/04b312fbb662672b3b62a3ba82b58031a0355b6a.jpg?rect=.03375%2c.0%2c.93%2c.9999999999999999&fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/04b312fbb662672b3b62a3ba82b58031a0355b6a.jpg?rect=.17625%2c.0%2c.61875%2c.9999999999999999&fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/04b312fbb662672b3b62a3ba82b58031a0355b6a.jpg?rect=.0%2c.0%2c.9999999999999999%2c.9090909090909091&fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
            },
            {
                id: 1324449,
                title: 'Alle verrijking op een rijtje',
                intro:
                    'Altijd al alle artikel elementen onder elkaar willen zien staan? Dit is je kans om eens een keer goed alles onder de loep te nemen!',
                topicPrefixOrCategory: 'Tech en media',
                publicationUrl:
                    '/achtergrond/1324449/alle-verrijking-op-een-rijtje',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/-KquD1lyzmOxcdHfMDc6ckwuB-k.jpg?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/-KquD1lyzmOxcdHfMDc6ckwuB-k.jpg?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/-KquD1lyzmOxcdHfMDc6ckwuB-k.jpg?fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
            },
        ],
        tertiaryCards: [
            {
                id: 1328654,
                title: 'Trump kiest voor escalatie bij protesten',
                intro:
                    "Amerikaanse president zegt tegen gouverneurs dat ze 'zwak' zijn als ze niet meer arrestaties verrichten de komende dagen",
                topicPrefixOrCategory: 'Buitenland',
                publicationUrl:
                    '/economie-politiek/1328654/trump-kiest-voor-escalatie-bij-protesten',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/83bb1a13ad36192e99d02a43d0789f87874cc83c.jpg?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/83bb1a13ad36192e99d02a43d0789f87874cc83c.jpg?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/83bb1a13ad36192e99d02a43d0789f87874cc83c.jpg?fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
            },
            {
                id: 1328664,
                title:
                    'Onderwijs kan belofte van grote gelijkmaker steeds minder waarmaken',
                intro:
                    'Het kwaliteitsverschil tussen scholen in Nederland groeit en de coronacrisis doet daar een schep bovenop, schrijft Edith Hooge.',
                topicPrefixOrCategory: 'Opinie',
                publicationUrl:
                    '/opinie/1328664/nederlands-onderwijs-kan-belofte-van-grote-gelijkmaker-steeds-minder-waarmaken',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/11e598f999368e2a9c9bacfe35f9b2d491126723.jpg?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/11e598f999368e2a9c9bacfe35f9b2d491126723.jpg?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/11e598f999368e2a9c9bacfe35f9b2d491126723.jpg?fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
            },
            {
                id: 1328676,
                title: 'Oranje hesjes protesteren in Italië ',
                intro:
                    'In deze editie van de Europa-nieuwsbrief van het FD: Italië heeft ook Hesjes! En de verbouwing van de Poolse rechtsstaat vordert gestaag.',
                topicPrefixOrCategory: 'Het FD',
                publicationUrl:
                    '/economie-politiek/1328676/oranje-hesjes-protesteren-in-italie',
                image: {
                    normalUrl:
                        'https://fd-external-development.imgix.net/dd95412eb619bf6a9b9d817ed970a3b1b226ce56.jpg?fit=crop&crop=faces&auto=format',
                    squareUrl:
                        'https://fd-external-development.imgix.net/dd95412eb619bf6a9b9d817ed970a3b1b226ce56.jpg?fit=crop&crop=faces&auto=format',
                    wideUrl:
                        'https://fd-external-development.imgix.net/dd95412eb619bf6a9b9d817ed970a3b1b226ce56.jpg?fit=crop&crop=faces&auto=format',
                },
                latestUpdate: {},
                newWindow: false,
            },
        ],
        quaternaryCards: [],
        sourceArticles: [
            {
                id: 1329318,
                version: 6,
                title: "'Israël overweegt beursgang defensiebedrijf'",
                state: 'PUBLISHED',
                url:
                    '/beurs/1329318/israel-overweegt-beursgang-defensiebedrijf',
                publicationDate: 1591720532000,
                lastModificationDate: 1591781101000,
                genre: 'Markten',
                authors: [
                    {
                        id: 28647,
                        fullName: 'Van onze redacteur',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        title:
                            "Het Israëlische ministerie van financiën overweegt een beursgang van defensiebedrijf Israel Aerospace Industries, een van 's werelds grootste leveranciers van defensiesystemen",
                        content:
                            'Privatisering Israel Aerospace Industries mogelijk nabij.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252263,
                            path:
                                '4ac1ce5c2f1ead43bc8bcfbfaa280837519fd480.jpg',
                            width: 5472,
                            height: 3648,
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    "<fdmg-image><fdmg-id>252264</fdmg-id><fdmg-filename>4ac1ce5c2f1ead43bc8bcfbfaa280837519fd480.jpg</fdmg-filename><fdmg-width>5472</fdmg-width><fdmg-height>3648</fdmg-height><fdmg-caption>Een stand van Israel Aerospace Industries op de Singapore Airshow, afgelopen februari.</fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Edgar Su/Reuters</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><p>Het Israëlische ministerie van financiën overweegt een beursgang van defensiebedrijf Israel Aerospace Industries, een van 's werelds grootste leveranciers van defensiesystemen. Met het verkopen van een kwart van het belang in het staatsbedrijf wil de Israëlische staat ongeveer €1 mrd ophalen, zo meldt persbureau Bloomberg. </p><p>Op de beursgang van Aerospace Industries wordt binnen de Israëlische overheid al langer aangedrongen. De afgelopen jaren sorteerde het bedrijf al op zo'n notering voor door in de kosten te snijden. Eerdere pogingen om de plannen door te zetten liepen echter op niets uit. De beursgang van het defensiebedrijf werd onderdeel van een politiek debat, omdat er zorgen zijn over gevoelige defensiegegevens die daarmee bij een privaat bedrijf komen te liggen. </p><p>Ook de langdurige coalitievorming na de parlementsverkiezingen van 2019 speelde een rol bij het uitstel. Pas afgelopen maand kwam er een regering van nationale eenheid onder leiding van premier Benjamin Netanyahu.</p><p>Een van de belangrijkste taken van die regering is het terugdringen van het overheidstekort. Dat is enorm gegroeid als gevolg van een steunpakket van zo'n  100 mrd shekel (€25,6 mrd), waarmee de gevolgen van het coronavirus voor de zwaar getroffen Israëlische economie moeten worden opgevangen. </p><p>Een definitieve beslissing over de verkoop van het bedrijf, waar circa vijftienduizend mensen werkzaam zijn, is nog niet genomen, zo melden de bronnen van persbureau Bloomberg. </p><p>Israel Aerospace Industries is de afgelopen jaren weinig winstgevend gebleken. In 2019 behaalde het bedrijf met een omzet van $4,1 mrd een winst van $86 mln. Een jaar eerder boekte de maker van onder meer lasergeleide anti-tanksystemen, vliegtuigonderdelen en drones nog een verlies. </p>",
                originalArticleId: '1347249',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                section: 'beursradar',
                sectionDirectory: 'beurs',
                sectionTitle: 'Beurs',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 331,
                        tag: 'Aandelen',
                        enabled: true,
                        directory: 'aandelen',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 973,
                        tag: 'Overheidsbedrijven',
                        enabled: true,
                        directory: 'overheidsbedrijven',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 572,
                        tag: 'Privatisering',
                        enabled: true,
                        directory: 'privatisering',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 83403,
                        tag: 'Markten',
                        enabled: true,
                        directory: 'markten',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 1313,
                        tag: 'Beursgang',
                        enabled: true,
                        directory: 'beursgang',
                        tagCategoryType: 'SUBJECT',
                    },
                ],
                articleLength: 'S',
                category: 'BEURS',
                workflow: {
                    workInstructions: '',
                    characterCount: 1743,
                    state: 'READY',
                    articleCreatedBy: 'Lennart Zandbergen',
                    articleLastModifiedBy: 'Bie Kho',
                },
                fullWidth: false,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    title:
                        "Het Israëlische ministerie van financiën overweegt een beursgang van defensiebedrijf Israel Aerospace Industries, een van 's werelds grootste leveranciers van defensiesystemen",
                    content:
                        'Privatisering Israel Aerospace Industries mogelijk nabij.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252263,
                        path: '4ac1ce5c2f1ead43bc8bcfbfaa280837519fd480.jpg',
                        width: 5472,
                        height: 3648,
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329298,
                version: 6,
                title: 'Oeso voorspelt diepste recessie in meer dan een eeuw',
                state: 'PUBLISHED',
                url:
                    '/economie-politiek/1329298/oeso-voorspelt-diepste-recessie-in-meer-dan-een-eeuw',
                publicationDate: 1591776000000,
                lastModificationDate: 1591859063000,
                genre: 'Macro-economie',
                authors: [
                    {
                        id: 2544,
                        fullName: 'Jule Hinrichs',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            "Na een tweede corona-uitbraak krimpt economie van de rijkste landen dit jaar met 7,6%. Blijft het bij één uitbarsting dan is de krimp 'slechts' 6,1%.",
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252210,
                            path:
                                'ee4c130137cec416a897309e85975720eb501688.jpg',
                            width: 5917,
                            height: 3945,
                            crops: [
                                {
                                    ratio: 'NORMAL',
                                    x: 0,
                                    y: 0.001876172607879925,
                                    width: 1,
                                    height: 0.99812382739212,
                                },
                                {
                                    ratio: 'SQUARE',
                                    x: 0.1275,
                                    y: 0,
                                    width: 0.66625,
                                    height: 1,
                                },
                                {
                                    ratio: 'WIDE',
                                    x: 0,
                                    y: 0.15572232645403378,
                                    width: 1,
                                    height: 0.8442776735459663,
                                },
                            ],
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<fdmg-image><fdmg-id>252211</fdmg-id><fdmg-filename>ee4c130137cec416a897309e85975720eb501688.jpg</fdmg-filename><fdmg-width>5917</fdmg-width><fdmg-height>3945</fdmg-height><fdmg-caption>Een lege Public Market in Seattle.</fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Brian Snyder/Reuters</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-summary title="In het kort"><fdmg-content>In een mild scenario krimpt de economie van de Oeso-landen dit jaar met 6,1%. \nHet somberste scenario gaat uit van 7,6%.\nVoor de eurozone voorspelt de Oeso een krimp van 9,1% à 11,5%.\nNederland komt er met krimp van 8,0% respectievelijk 10,0% relatief goed van af.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-summary><p>De coronacrisis leidt tot het grootste verlies aan inkomens in meer dan een eeuw. Volgend jaar kan  de economische schade nog niet worden goedgemaakt, ook als een tweede uitbraak van de pandemie en daarmee een tweede fase van <em>lockdowns</em> uitblijft. Dat stelt woensdag de Organisatie  voor Economische Samenwerking en Ontwikkeling, (Oeso), in een ongekend somber halfjaarrapport over de wereldeconomie.</p><fdmg-quote><fdmg-message>\'Volgend jaar kan de de economische schade nog niet worden goedgemaakt, ook als een 2e uitbraak uitblijft.\'</fdmg-message><fdmg-author>Oeso</fdmg-author></fdmg-quote><p>De beleidsmakers in de wereld balanceren op een koord, schrijft hoofdeconoom Laurence Boone van de club van rijke landen. De economische activiteiten zijn overal in de wereld dramatisch ingestort, de werkloosheid vliegt omhoog en de tekorten op de overheidsbegrotingen nemen sterk toe, schrijft ze. Het herstel komt niet op gang als het vertrouwen niet terugkeert, wat volgens Boone zonder goede internationale samenwerking \'niet ten volle\' zal gebeuren. Ook bij de ontwikkeling van een vaccin tegen Covid-19 is internationale samenwerking geboden. </p><fdmg-number-frame><fdmg-heading>-9,1%</fdmg-heading><fdmg-content>Voor de eurozone is er -9,1% krimp ingetekend.</fdmg-content></fdmg-number-frame><fdmg-number-frame><fdmg-heading>€ 145.000.000 - € 165.000.000 </fdmg-heading><fdmg-content>Voor de eurozone is er -9,1% krimp ingetekend.</fdmg-content></fdmg-number-frame><fdmg-number-frame><fdmg-heading>€ 165.000.000 </fdmg-heading><fdmg-content>Voor de eurozone is er -9,1% krimp ingetekend.</fdmg-content></fdmg-number-frame><p>De Oeso presenteert in de Economic Outlook altijd één voorspelling voor de economie, van de wereld, de eurozone en van individuele landen. Van dat gebruik is dit keer afgeweken, het Parijse instituut presenteert twee scenario’s zonder een van de twee als meest waarschijnlijk aan te merken.</p><h2>Milde scenario </h2><p>In het relatief milde scenario blijft een tweede uitbraak van het coronavirus uit en kan daarom een tweede fase van <em>lockdowns</em> achterwege blijven. Toch is de schade enorm: de economie van de ontwikkelde Oeso-landen zou dit jaar met 6,1% krimpen. Voor de eurozone is er -9,1% ingetekend.</p><p>Nederland komt er met een krimp van 8,0% nog relatief goed van af. Toch is de Oeso hiermee al veel somberder dan maandag De Nederlandsche Bank, die voor 2020 een krimp van 6,4% voorziet. </p><h2>Tweede uitbraak</h2><p>In het zware, tweede scenario volgen er wel een tweede uitbraak en een nieuwe periode van <em>lockdowns</em>. De economische schade pakt dan enorm groot uit, met een krimp voor alle Oeso-landen in 2020 van 7,6%, voor de eurozone van 11,5% en voor Nederland van 10%. Italië en Frankrijk staan hier op -14%. De Oeso houdt regeringen als het ware een spiegel voor om er alles aan te doen een tweede uitbraak van het virus te voorkomen, of zo klein mogelijk te houden. </p><fdmg-image><fdmg-id>252212</fdmg-id><fdmg-filename>ddded77dc599729d88dd5ec5d36096c1ef524020.jpg</fdmg-filename><fdmg-width>4819</fdmg-width><fdmg-height>3213</fdmg-height><fdmg-caption>In Rome en andere Italiaanse steden zijn deze week de musea beperkt opengegaan. Er komen vooralsnog vooral veel Italianen op af.</fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Remo Casilli/Reuters</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><p>In het eerste, minder slechte scenario zouden de meeste landen in 2021 met een stevige inhaalgroei ongeveer tweederde tot driekwart van de schade van 2020 weer goedmaken. In het ongunstige scenario zouden in 2021 de economieën slechts een beperkt herstel te zien geven. Zo zou Nederland met een plus van 3,4% slechts een klein deel van de min van 10% goedmaken. Dat geldt voor alle landen in min of meer vergelijkbare mate. Voor de eurozone staat er in dat geval voor 2021 +3,5% in de boeken.</p><h2>Uitzonderlijke maatregelen</h2><p>De Oeso stelt dat in deze omstandigheden uitzonderlijke beleidsmaatregelen geboden zijn. Overheden kunnen de veiligheidsnetten bieden die het mensen en bedrijven mogelijk maakt zich aan te passen. Maar de Oeso waarschuwt dat overheden niet in staat zijn de activiteiten in de particuliere sector, de banen en de lonen voor een langere periode te beschermen. Overheden moeten dan ook overschakelen van brede, generieke steunmaatregelen naar gerichte steun. </p><p>‘Kapitaal en werknemers van getroffen sectoren en bedrijven zullen moeten bewegen naar sectoren met groei. Dergelijke transities zijn moeilijk en vinden zelden snel genoeg plaats om te voorkomen dat het aantal bedrijfsfaillissementen toeneemt waardoor een langere periode met werkloosheid ontstaat’, schrijft Boone.</p><fdmg-image><fdmg-id>252213</fdmg-id><fdmg-filename>9c19d5c1e387ce68ec0647d3f95ff3e4c5b8ef4e.jpg</fdmg-filename><fdmg-width>6400</fdmg-width><fdmg-height>4267</fdmg-height><fdmg-caption>New York komt langzaam uit zijn lockdown-fase. Het vervoersbedrijf achter de Staten Island-veerboot heeft kruizen aangebracht op zitplaatsen om passagiers op afstand van elkaar te houden. Mensen werkzaam in niet-essentiële beroepen (bouw, fabriekswerk) mogen sinds maandag weer aan de slag. Kantoren, cafés en kapperszaken blijven dicht.</fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Caitlin Ochs/Reuters</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><p>Ze stelt dat het nu gevoerde beleid de economische en sociale omstandigheden voor het komende decennium bepalen. Ultraruim monetair beleid en hogere overheidsschulden, schrijft ze, zijn noodzakelijk en worden geaccepteerd zolang de economische activiteiten en inflatie onder druk staan en de werkloosheid hoog is.</p><h2>Werkloosheid</h2><p>Zo zou in het milde scenario de werkloosheid in de eurozone dit jaar stijgen van 7,5% van de beroepsbevolking in 2019 naar 9,8% dit jaar om in 2021 weer iets af te zwakken tot 9,5%. Voor Nederland gaat het dan om een stijging van 3,4% in 2019 naar 5,9% dit jaar, terwijl er in 2021 al weer een daling tot 4,4% mogelijk zou zijn. </p><p>In het sombere scenario komt de werkloosheid in de eurozone dit jaar op 10,3% uit en in 2021 op 11,0%. Voor Nederland gaat het dan om respectievelijk 6,5% en 6,6%.</p><fdmg-readmore title="Lees ook"><fdmg-content><a xmlns="http://www.infomaker.se/idf/1.0" href="https://fd.nl/economie-politiek/1347159/dnb-economie-pas-in-2023-over-klap-recessie-heen" id="link-4f81d3950de900ca830366131fd80ed2" target="_self" rel="noopener noreferrer noopener noreferrer">DNB: economie pas in 2023 over klap recessie heen</a>\n<a xmlns="http://www.infomaker.se/idf/1.0" href="https://fd.nl/economie-politiek/1347174/geen-lockdown-raakt-de-economie-ook-heel-hard" id="link-620897a87eae61a6a007202c7ab34701" target="_self" rel="noopener noreferrer noopener noreferrer">Géén lockdown raakt de economie óók heel hard</a></fdmg-content></fdmg-readmore>',
                originalArticleId: '1347352',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: false,
                shortArticle: false,
                fdPersonal: false,
                topStory:
                    'Oeso voorspelt diepste recessie in meer dan een eeuw',
                printTitle:
                    'Oeso voorspelt diepste recessie in meer dan een eeuw',
                section: 'economie-politiek',
                sectionDirectory: 'economie-politiek',
                sectionTitle: 'Economie & Politiek',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 333,
                        tag: 'Oeso',
                        enabled: true,
                        directory: 'oeso',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 2310,
                        tag: 'Recessie',
                        enabled: true,
                        directory: 'recessie',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 66016,
                        tag: 'Macro-economie',
                        enabled: true,
                        directory: 'macro-economie',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 1302,
                        tag: 'Werkloosheid',
                        enabled: true,
                        directory: 'werkloosheid',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 273,
                        tag: 'Begroting',
                        enabled: true,
                        introText:
                            'Vooraf opgesteld raming van kosten en baten. Geeft de financiële effecten van besluiten weer.',
                        directory: 'begroting',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 96501,
                        tag: 'Coronavirus',
                        enabled: true,
                        introText:
                            'Het coronavirus heeft de wereld in zijn greep. Terwijl het aantal doden iedere dag flink stijgt, krijgt ook de economie klap na klap. Met duizenden miljarden proberen regeringsleiders te redden wat er te redden valt. Op de beurzen wisselen positieve en negatieve records elkaar af.',
                        directory: 'coronavirus',
                        tagCategoryType: 'SECTION',
                    },
                ],
                articleLength: 'Lplus',
                category: 'NEWS',
                workflow: {
                    workInstructions:
                        "LET OP EMBARGO\n\nFoto 1: A woman walks through empty streets outside the Public Market, amid the coronavirus disease (COVID-19) outbreak, in Seattle, Washington, U.S., March 20, 2020.   REUTERS/Brian Snyder     TPX IMAGES OF THE DAY\n\nFoto 2: A woman wearing a protective mask walks outside Castel Sant'Angelo, as Italy tightens measures to try and contain the spread of coronavirus disease (COVID-19), in Rome, Italy March 23, 2020. REUTERS/Remo Casilli     TPX IMAGES OF THE DAY\n\nFoto 3: A commuter enjoys the sunset alone on the upper deck of a Staten Island Ferry during the outbreak of the coronavirus disease (COVID-19) in Manhattan, New York City, U.S., March 26, 2020. REUTERS/Caitlin Ochs     TPX IMAGES OF THE DAY",
                    characterCount: 4296,
                    state: 'READY',
                    articleCreatedBy: 'Jule Hinrichs',
                    articleLastModifiedBy: 'Bie Kho',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        "Na een tweede corona-uitbraak krimpt economie van de rijkste landen dit jaar met 7,6%. Blijft het bij één uitbarsting dan is de krimp 'slechts' 6,1%.",
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252210,
                        path: 'ee4c130137cec416a897309e85975720eb501688.jpg',
                        width: 5917,
                        height: 3945,
                        crops: [
                            {
                                ratio: 'NORMAL',
                                x: 0,
                                y: 0.001876172607879925,
                                width: 1,
                                height: 0.99812382739212,
                            },
                            {
                                ratio: 'SQUARE',
                                x: 0.1275,
                                y: 0,
                                width: 0.66625,
                                height: 1,
                            },
                            {
                                ratio: 'WIDE',
                                x: 0,
                                y: 0.15572232645403378,
                                width: 1,
                                height: 0.8442776735459663,
                            },
                        ],
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329310,
                version: 2,
                title:
                    'Luchtvaart stevent op monsterverlies af van $100 mrd in twee jaar tijd ',
                state: 'PUBLISHED',
                url:
                    '/economie-politiek/1329310/luchtvaart-stevent-op-monsterverlies-af-van-100-mrd-in-twee-jaar-tijd',
                publicationDate: 1591731027000,
                lastModificationDate: 1591778455000,
                genre: 'Vervoer',
                authors: [
                    {
                        id: 20349,
                        fullName: 'Frank Gersdorf',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Branchevereniging Iata voorziet explosieve groei van schuldenlast tot $550 mrd en verlies van een miljoen banen tot eind dit jaar.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252243,
                            path:
                                '54ef1d705f5037f6078873219d324547f97666e4.jpg',
                            width: 6665,
                            height: 4462,
                            crops: [
                                {
                                    ratio: 'NORMAL',
                                    x: 0,
                                    y: 0.007462686567164179,
                                    width: 1,
                                    height: 0.9925373134328358,
                                },
                                {
                                    ratio: 'SQUARE',
                                    x: 0.12875,
                                    y: 0.024253731343283583,
                                    width: 0.65375,
                                    height: 0.9757462686567164,
                                },
                                {
                                    ratio: 'WIDE',
                                    x: 0,
                                    y: 0.05783582089552239,
                                    width: 1,
                                    height: 0.8395522388059702,
                                },
                            ],
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    "<fdmg-image><fdmg-id>252244</fdmg-id><fdmg-filename>54ef1d705f5037f6078873219d324547f97666e4.jpg</fdmg-filename><fdmg-width>6665</fdmg-width><fdmg-height>4462</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit>Foto: Tammy van Nerum voor het FD</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-summary title=\"In het kort\"><fdmg-content>Branchevereniging Iata schetst een gitzwart scenario voor luchtvaartmaatschappijen.\nHet voorziet explosieve groei van schuldenlast van bedrijven, tot $550 mrd dit jaar.\nWerkgelegenheid loopt dit jaar terug van 2,9 miljoen naar 1,9 miljoen arbeidsplaatsen.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-summary><p>Luchtvaartbedrijven over de gehele wereld gaan door een diep dal. De sector zal dit en volgend jaar verliezen lijden van vele tientallen miljarden dollars en een recordschuld opbouwen. Meer dan een miljoen banen dreigen nog voor het einde van het jaar te verdwijnen.</p><p>Dit gitzwarte scenario schetste de International Air Transport Association (Iata) dinsdag. De internationale branchevereniging met bijna driehonderd aangesloten luchtvaartmaatschappijen raamt het totale verlies op $100 mrd dit en volgend jaar. Dat zou het grootste verlies zijn in de geschiedenis van de luchtvaart, benadrukte Iata-leider Alexandre de Juniac, bij een halfjaarlijkse terug- en vooruitblik in Genève. </p><p>'Ter vergelijking: tijdens de financiële crisis en de hoge olieprijzen in 2008 en 2009 kampten luchtvaartbedrijven met verliezen van $31 mrd', zei De Juniac, tot 2016 de voorman bij Air France-KLM. 'Niets is vergelijkbaar met de omvang van de huidige crisis.'</p><fdmg-infographic height=\"500\"><fdmg-url>https://localfocuswidgets.net/5edff058a0639</fdmg-url></fdmg-infographic><h2>Schuldenexplosie</h2><p>De Fransman zei dat regeringen hebben kunnen voorkomen dat luchtvaartbedrijven bankroet gingen, maar dat de hulppakketten de schuldenlast wel enorm laten stijgen. De schulden groeien dit jaar met $120 mrd tot $550 mrd. 'Dat laatste is 92% van de verwachte opbrengsten in 2021.'</p><p>Tot midden mei ontvingen luchtvaartbedrijven $123 mrd aan overheidshulp. Het bedrag aan noodsteun voor heel 2020 zal veel groter zijn, want nog lang niet alle hulppakketten zijn rond. De onderhandelingen tussen Den Haag en KLM over €2 mrd tot €4 mrd aan ondersteuning zijn bijvoorbeeld nog steeds gaande. </p><h2>Frankrijk</h2><p>Ook in andere landen wordt nog volop aan noodscenario's gesleuteld. Parijs maakte dinsdag €15 mrd vrij voor ondersteuning van de gehele Franse luchtvaartindustrie, dus inclusief de fabrikanten van vliegtuigen en vliegtuigonderdelen. Daarvan is €7 mrd bestemd voor Air France.</p><p>Het blijkt moeilijk voor luchtvaartmaatschappijen om te voldoen aan eisen die overheden stellen, bijvoorbeeld voor vergroening. Zij vrezen dat hun concurrentiepositie daardoor verzwakt. </p><p>Soms hebben de ondernemingen geen keuze. In Oostenrijk slikte het noodlijdende Austrian Airlines dinsdag dat tickets voortaan minimaal €40 euro moeten kosten en dat er toeslag van €30 euro komt voor korte vluchten. </p><p>De overheidssteun in Europa is veel beperkter dan die in Noord-Amerika. Volgens de Iata kregen Amerikaanse bedrijven ongeveer 25% van hun omzet als ondersteuning. Bij hun Europese concurrenten was dit gemiddeld 15%. </p><h2>Een miljoen banen</h2><p>Overheden helpen luchtvaartmaatschappijen onder meer om banen te behouden. Toch kunnen zij niet voorkomen dat de werkgelegenheid in de sector een dreun krijgt. De Iata houdt er rekening mee dat er eind dit jaar nog maar 1,9 miljoen arbeidsplaatsen over zijn van de 2,9 miljoen aan het begin van het jaar. </p><p>In totaal lopen volgens de branchevereniging 32 miljoen banen gevaar. Dat is inclusief sectoren die mede afhankelijk zijn van de luchtvaart, zoals het toerisme.</p><h2>Enorm contrast met na 9/11</h2><p>Vooruitblikkend stelt Iata-topman De Juniac dat de luchtvaart een veerkrachtige sector is, die met een gezamenlijke aanpak het vertrouwen van de reiziger kan terugwinnen. Dat moet de aftrap zijn voor het herstel van de luchtvaart. </p><p>De gezondheidsrichtlijnen van de ICAO, de luchtvaartorganisatie van de Verenigde Naties, liggen volgens hem aan de basis daarvan. 'Dat is een enorm contrast met na 9/11, toen iedereen zijn eigen ding deed en we twintig jaar nodig hadden om onze verschillen glad te strijken.'</p><p>De Juniac pleit er wel voor om 'maatregelen die niet langer nodig zijn voor de gezondheid', in te trekken. 'Meer dan 80% van de reizigers vertellen ons dat ze niet zullen reizen als ze op de plek van bestemming in quarantaine moeten.'</p>",
                originalArticleId: '1347349',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                section: 'economie-politiek',
                sectionDirectory: 'economie-politiek',
                sectionTitle: 'Economie & Politiek',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 56,
                        tag: 'Concurrentie',
                        enabled: true,
                        directory: 'concurrentie',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 1456,
                        tag: 'Luchtvaart',
                        enabled: true,
                        introText:
                            'Nieuws en achtergronden over de luchtvaart. Over vliegvelden, luchtvaartmaatschappijen en ontwikkelingen in de branche.',
                        directory: 'luchtvaart',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 83404,
                        tag: 'Vervoer',
                        enabled: true,
                        directory: 'vervoer',
                        tagCategoryType: 'SECTOR',
                    },
                ],
                articleLength: 'L',
                category: 'NEWS',
                workflow: {
                    workInstructions:
                        'Schiphol 08-06-2020 Schiphol Plaza, aankomst en vertrekhal.  Foto: Tammy van Nerum',
                    characterCount: 3681,
                    state: 'READY',
                    articleCreatedBy: 'Frank Gersdorf',
                    articleLastModifiedBy: 'Jasper Juinen',
                },
                fullWidth: false,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Branchevereniging Iata voorziet explosieve groei van schuldenlast tot $550 mrd en verlies van een miljoen banen tot eind dit jaar.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252243,
                        path: '54ef1d705f5037f6078873219d324547f97666e4.jpg',
                        width: 6665,
                        height: 4462,
                        crops: [
                            {
                                ratio: 'NORMAL',
                                x: 0,
                                y: 0.007462686567164179,
                                width: 1,
                                height: 0.9925373134328358,
                            },
                            {
                                ratio: 'SQUARE',
                                x: 0.12875,
                                y: 0.024253731343283583,
                                width: 0.65375,
                                height: 0.9757462686567164,
                            },
                            {
                                ratio: 'WIDE',
                                x: 0,
                                y: 0.05783582089552239,
                                width: 1,
                                height: 0.8395522388059702,
                            },
                        ],
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1329322,
                version: 4,
                title:
                    'Nieuwe Volkswagen-baas, Ralf Brandstätter, moet racistische uitglijder doen vergeten',
                state: 'PUBLISHED',
                url:
                    '/profiel/1329322/nieuwe-volkswagen-baas-moet-racistische-uitglijder-doen-vergeten',
                publicationDate: 1591718646000,
                lastModificationDate: 1591780230000,
                genre: 'Auto',
                authors: [
                    {
                        id: 223,
                        fullName: 'Gerben van der Marel',
                    },
                ],
                intro:
                    'De 51-jarige Ralf Brandstätter moet een eind maken aan de problemen bij het bedrijf, hoewel hij er zelf medeverantwoordelijk voor was. Hij is populair onder medewerkers, maar moet nu fors in de organisatie snijden. Er wacht hem herculeswerk. ',
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Ralf Brandstätter moet een eind maken aan de problemen bij het bedrijf, hoewel hij er zelf medeverantwoordelijk voor was. Hij is populair onder medewerkers, maar moet nu fors in de organisatie snijden.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 252275,
                            path:
                                '28073cba3e3dd07419053640a6cc8899d6b2a257.jpg',
                            width: 2000,
                            height: 1333,
                            crops: [
                                {
                                    ratio: 'NORMAL',
                                    x: 0.15875,
                                    y: 0.11069418386491557,
                                    width: 0.7025,
                                    height: 0.6979362101313321,
                                },
                                {
                                    ratio: 'SQUARE',
                                    x: 0.2725,
                                    y: 0.1125703564727955,
                                    width: 0.4725,
                                    height: 0.7091932457786116,
                                },
                                {
                                    ratio: 'WIDE',
                                    x: 0.11875,
                                    y: 0.11444652908067542,
                                    width: 0.795,
                                    height: 0.6735459662288931,
                                },
                            ],
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<fdmg-image><fdmg-id>252276</fdmg-id><fdmg-filename>28073cba3e3dd07419053640a6cc8899d6b2a257.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1333</fdmg-height><fdmg-caption>Ralf Brandstätter</fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Friso Gentsch/Volkswagen</fdmg-credit><fdmg-alignment>right</fdmg-alignment></fdmg-image><fdmg-summary title="Cv"><fdmg-content><strong xmlns="http://www.infomaker.se/idf/1.0" id="strong-092f67dd41405b6fd720c3869b161a32">1968</strong> Geboren op 8 september in Braunschweig\nStudie industriële techniek op de Fachhochschule Oldenburg/Nedersaksen\n<strong xmlns="http://www.infomaker.se/idf/1.0" id="strong-8e5f981bb88276159b6243998bbac5fe">1993</strong> Werkzaam bij de Volkswagen Groep\n<strong xmlns="http://www.infomaker.se/idf/1.0" id="strong-96814270f8d41c18f4c949891d02c683">2005</strong>  Hoofd inkoop Spanje VW-dochter Seat Spanje\n<strong xmlns="http://www.infomaker.se/idf/1.0" id="strong-4670991d66c30817b0ee8c59e5c3b992">2010</strong> Terug naar het hoofdkantoor in Wolfsburg\n<strong xmlns="http://www.infomaker.se/idf/1.0" id="strong-d7e16514fc0f853fb33f68631119ee94">2015</strong> Raad van bestuur Volkswagen Passenger Cars\n<strong xmlns="http://www.infomaker.se/idf/1.0" id="strong-20b7e38e75cc73cacdf11715e2450275">Sinds 1 aug</strong> <strong xmlns="http://www.infomaker.se/idf/1.0" id="strong-fd7f12a788544d978ba37ab4bf547411">2018</strong> Chief operating officer Volkswagen\n<strong xmlns="http://www.infomaker.se/idf/1.0" id="strong-6fd49f869893d8ef6d796b802521a99a">Vanaf 1 juli 2020</strong> Ceo Volkswagen Personenauto’s</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-summary><p></p><p>Ralf Brandstätter klimt op in de hiërarchie van de VW-groep en vervangt per 1 juli Herbert Diess als hoogste baas bij het merk Volkswagen. Daarmee is topman Herbert Diess zijn dubbelrol kwijt. Niet langer is hij zowel topman van de VW-groep als van het hoofdmerk Volkswagen. Afgelopen maandag heeft de raad van commissarissen zijn takenpakket ingeperkt.</p><p>De benoeming van de nuchtere Ralf Brandstätter komt na verhalen over een bikkelharde interne machtsstrijd bij de Volkswagen Group, een van de grootste bedrijven van Europa. Al na twee jaar moet Herbert Diess flink aan macht inleveren. </p><p>Brandstätter staat bekend als een populaire figuur onder de medewerkers van het bedrijf. Maar de vraag is of dat zo blijft, nu hij noodgedwongen fors in de organisatie zal moeten snijden. De grote investeringen van VW in digitalisering en elektrisch rijden eisen een tol. De productiebeperkingen door de coronacrisis maken de situatie nog ernstiger.</p><fdmg-stack-frame><fdmg-heading>De grote investeringen van VW in digitalisering en elektrisch rijden eisen een tol</fdmg-heading><fdmg-content /></fdmg-stack-frame><h2>Softwareproblemen</h2><p>De druk op Diess, de machtigste man in de Duitse auto-industrie, was de afgelopen weken onhoudbaar geworden na moeilijkheden bij de productie van de Golf 8 en softwareproblemen bij de nieuwe elektrische auto ID.3 en het afkopen door VW van zijn strafvervolging – voor €4,5 mln – wegens het onder de pet houden van de dieselmalversaties.</p><p>Een ronduit racistisch reclamespotje voor de nieuwe Volkswagen Golf zette Diess als eindverantwoordelijke verder onder druk. Volkswagen wuifde de storm van kritiek op het filmpje eerst weg als een verkeerde interpretatie om vervolgens het werk van het reclamebureau alsnog ‘fout’ en ‘smakeloos’ te noemen en zich ervan te distantiëren.</p><p>De nieuwe Volkswagen-baas moet de uitglijders doen vergeten. Maar een frisse start kan Brandstätter nauwelijks maken. Zo was hij nauw betrokken bij de meeste brandende kwesties.</p><fdmg-stack-frame><fdmg-heading>Een frisse start kan Brandstätter nauwelijks maken. Zo was hij nauw betrokken bij de meeste brandende kwesties</fdmg-heading><fdmg-content /></fdmg-stack-frame><p>Brandstätter was bovendien samen met Diess een uitgesproken promotor in de media van aankoopsubsidies van de overheid voor benzineauto’s en diesels om de economie op gang te brengen.</p><p>Die lobby liep uit op een mislukking. De enorme druk vanuit de autosector op de regering-Merkel bleef zonder resultaat, bleek vorige week. Dat leidde tot ergernis in de boardrooms maar ook bij werknemersvertegenwoordigers. De harde afwijzing van Berlijn bleek geen hindernis voor de promotie van Brandstätter.</p><h2>Buitenlandervaring</h2><p>Ralf Brandstätter is geboren in Braunschweig, dicht in de buurt van het concernhoofdkantoor in Wolfsburg. De man die industriële techniek studeerde heeft nooit ergens anders gewerkt dan bij VW. In zeventien jaar klom hij gestaag op.</p><p>Over zijn privéleven is vrijwel niets bekend. Maar dat kan veranderen. Gezien de immense uitdagingen de komende tijd komt hij vol in de schijnwerpers te staan. Duidelijk is wel dat hij vroeg in zijn carrière leerde hoe de hazen lopen in Wolfsburg. In de jaren negentig zat Brandstätter als secretaris van de raad van bestuur met zijn neus op de traditionele VW-hiërarchie.</p><p>Rond de eeuwwisseling deed hij ervaring op als eindverantwoordelijke voor de inkoop van metaal voor de productie van auto-onderdelen. In 2003 werd hij benoemd tot projectmanager voor nieuwe voertuigprojecten. Buitenlandervaring kreeg Brandstätter in 2005 met zijn promotie tot hoofd inkoop in Spanje. In 2008 werd hij lid van de concernleiding van Seat. Vijf jaar werkte Brandstätter in het Catalaanse Martorell, ongeveer twintig kilometer van Barcelona.</p><h2>Op weg naar de uitgang?</h2><p>Sinds twee jaar werkte hij nauw samen met Diess, met wisselvallig resultaat. Diess haalde zich de afgelopen dagen extra problemen op de hals door zich intern te beklagen over het lekken van informatie uit de raad van commissarissen over zijn wens om zijn contract verlengen.</p><p>De eigenarenfamilies Porsche en Piëch  probeerden dinsdag conclusies in de media te ontzenuwen dat Diess op weg naar de uitgang is. Ze lieten weten dat Diess de steun van de kapitaalverschaffers heeft. De onderneming zegt dat Herbert Diess zich na het delegeren van taken aan Brandstätter beter kan concentreren op zijn werk als topman van de Volkswagen Group, met zijn twaalf automerken, waaronder Audi, Seat, Porsche, Lamborghini, Skoda en Bentley.</p><p>Vanaf deze zomer rust op de schouders van Brandstätter de zware taak om stevige kostenbesparingen door te voeren in de grootste fabrieken in Duitsland. Hierover liggen het management van Volkswagen en de vakbonden al enkele weken met elkaar in de clinch. VW heeft de productie van voertuigen door de coronacrisis en de opgedroogde toevoerlijnen noodgedwongen zwaar moeten terugschroeven.</p><h2>Deadlines dringen</h2><p>In de tussentijd dringen de deadlines. Brandstätter staat voor een herculeswerk om de beloofde introductie van de betaalbare elektrische wagen ID.3 – neergezet als de historische opvolger van de Kever en de Golf – te laten slagen ondanks de extreem moeilijke omstandigheden.</p><fdmg-stack-frame><fdmg-heading>Brandstätter staat voor een herculeswerk om de beloofde introductie van de betaalbare elektrische wagen ID.3 te laten slagen</fdmg-heading><fdmg-content /></fdmg-stack-frame><p>Volkswagen moet wel. Het bedrijf staat onder zware druk vanuit Brussel om de vloot nieuwe voertuigen milieuvriendelijker te maken, anders dreigen miljardenboetes. Om nog meer te kunnen investeren in elektrisch rijden zal Brandstätter verder moeten snijden in de kosten.</p><p>Dat Brandstätter de taken bij Volkswagen mag overnemen van Diess heeft alles te maken met de vorm van ondernemingsbestuur in Duitsland. De ondernemingsraad en vakbonden zijn zeer machtig en vertegenwoordigd in de raad van commissarissen. Namens de ondernemingsraad van de VW-groep schaarde de invloedrijke Bernd Osterloh zich eerder al achter Brandstätter. Duitse media schreven dat Brandstätter extra wordt gewaardeerd omdat hij zijn afkomst niet is vergeten. Voordat hij afstudeerde, begon hij helemaal onderaan in de hiërarchie bij Volkswagen. Met een stage als automonteur. </p><p></p><p></p>',
                originalArticleId: '1347241',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                topic: 'Profiel',
                section: 'profiel',
                sectionDirectory: 'profiel',
                sectionTitle: 'Profiel',
                rubric: 'Profiel',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 83514,
                        tag: 'Auto',
                        enabled: true,
                        directory: 'auto',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 32403,
                        tag: 'Raad van bestuur',
                        enabled: true,
                        introText:
                            'Het hoogste leidinggevende orgaan binnen een organisatie of onderneming. Heeft de dagelijkse leiding in handen en is verantwoordelijk voor het beleid.',
                        directory: 'raad-van-bestuur',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 50301,
                        tag: 'Profiel',
                        enabled: true,
                        directory: 'profiel',
                        tagCategoryType: 'SECTION',
                    },
                    {
                        id: 33530,
                        tag: 'Volkswagen',
                        enabled: true,
                        kvkNumber: '31038797',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 2702,
                        tag: 'Directie',
                        enabled: true,
                        introText: 'Het bestuur van een onderneming. ',
                        directory: 'directie',
                        tagCategoryType: 'SUBJECT',
                    },
                ],
                articleLength: 'UNLIMITED',
                category: 'LONG_READ',
                workflow: {
                    workInstructions: 'Berlijn',
                    characterCount: 5880,
                    state: 'READY',
                    articleCreatedBy: 'Gerben van der Marel',
                    articleLastModifiedBy: 'Bie Kho',
                },
                fullWidth: true,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Ralf Brandstätter moet een eind maken aan de problemen bij het bedrijf, hoewel hij er zelf medeverantwoordelijk voor was. Hij is populair onder medewerkers, maar moet nu fors in de organisatie snijden.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 252275,
                        path: '28073cba3e3dd07419053640a6cc8899d6b2a257.jpg',
                        width: 2000,
                        height: 1333,
                        crops: [
                            {
                                ratio: 'NORMAL',
                                x: 0.15875,
                                y: 0.11069418386491557,
                                width: 0.7025,
                                height: 0.6979362101313321,
                            },
                            {
                                ratio: 'SQUARE',
                                x: 0.2725,
                                y: 0.1125703564727955,
                                width: 0.4725,
                                height: 0.7091932457786116,
                            },
                            {
                                ratio: 'WIDE',
                                x: 0.11875,
                                y: 0.11444652908067542,
                                width: 0.795,
                                height: 0.6735459662288931,
                            },
                        ],
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1328642,
                version: 3,
                title:
                    '‘Hij heeft een klein hartje, maar laat niet graag zijn kwetsbaarheid zien’',
                state: 'PUBLISHED',
                url:
                    '/persoonlijk/1328642/hij-heeft-een-klein-hartje-maar-laat-niet-graag-zijn-kwetsbaarheid-zien',
                publicationDate: 1591072020000,
                lastModificationDate: 1591338983000,
                genre: 'Persoonlijk',
                authors: [
                    {
                        id: 35814,
                        fullName: 'Astrid Theunissen',
                    },
                ],
                intro:
                    'Nina Poot (34), mede-eigenaar van het sieradenmerk Anna + Nina, is de dochter van Peter Poot (65), ceo van gebiedsontwikkelaar Chipshol.',
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Nina Poot, mede-eigenaar van het sieradenmerk Anna + Nina, is de dochter van Peter Poot, ceo van gebiedsontwikkelaar Chipshol.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 251814,
                            path:
                                '04b312fbb662672b3b62a3ba82b58031a0355b6a.jpg',
                            width: 2000,
                            height: 1237,
                            crops: [
                                {
                                    ratio: 'NORMAL',
                                    x: 0.03375,
                                    y: 0,
                                    width: 0.93,
                                    height: 1,
                                },
                                {
                                    ratio: 'SQUARE',
                                    x: 0.17625,
                                    y: 0,
                                    width: 0.61875,
                                    height: 1,
                                },
                                {
                                    ratio: 'WIDE',
                                    x: 0,
                                    y: 0,
                                    width: 1,
                                    height: 0.9090909090909091,
                                },
                            ],
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<fdmg-image><fdmg-id>251815</fdmg-id><fdmg-filename>04b312fbb662672b3b62a3ba82b58031a0355b6a.jpg</fdmg-filename><fdmg-width>2000</fdmg-width><fdmg-height>1237</fdmg-height><fdmg-caption /><fdmg-alt-text /><fdmg-credit>Fotografie: Alek voor het FD</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-text-frame><fdmg-heading>Familiehistorie</fdmg-heading><fdmg-content>Peter Poot is een van de zes kinderen van Jan Poot, die grond kocht rond Schiphol en met zijn bedrijf Chipshol, Airport City wilde bouwen. In 2000 ontstond juridisch getouwtrek met de overheid en Schiphol, die tegen ontwikkeling van het gebied waren. In 2014 besloot Chipshol tot verkoop van de grond. Jan Poot overleed in 2018. In januari 2020 oordeelde de rechter dat  Luchtverkeersleiding Nederland een schadevergoeding van ruim 19&nbsp;miljoen euro moest betalen aan Chipshol, omdat die ten onrechte had gesteld dat Airport City een gevaar vormde. Kort daarna verkocht Peter Poot de hele grondpositie aan Schiphol. \nPeter is al bijna 40 jaar getrouwd met Janine Wielenga. Ze hebben drie kinderen. Bob (33) is commercieel directeur, Sanne (30) is projectmanager. Nina is de oudste. Ze volgde de opleiding fashionmanagement aan het Amsterdam Fashion Institute en startte in 2012, samen met Anna de Lanoy Meijer, het sieradenlabel Anna + Nina. Het heeft drie winkels in Amsterdam, een webshop en veertig medewerkers. Nina is getrouwd en heeft twee dochters.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-text-frame><p>‘Mijn vader kwam elke avond om acht uur thuis. Als hij de deur achter zich dichtsloeg, renden mijn broer Bob, mijn zusje San en ik naar hem toe en schoof mijn moeder zijn avondeten in de oven om het op te warmen. Wij hadden al gegeten. Na onze knuffels ging hij in een stoel zitten, met op het pianokrukje naast hem een glas rode wijn, en sloeg hij de krant open. Om even op te laden, vermoed ik. Dat hij veel stress had door zijn werk, merkte ik pas tegen de tijd dat ik ging studeren.’</p><fdmg-stack-frame><fdmg-heading>Ik onderneem op een wat andere manier dan mijn vader, impulsiever en op gevoel</fdmg-heading><fdmg-content /></fdmg-stack-frame><p>‘We woonden in een mooi huis, hadden fijne vakanties en in het weekend ging ik geregeld met hem naar het dorp, naar Wassenaar, om lekkere dingen te halen. We houden beiden erg van lekker eten en mooie spullen, maar mijn vader hield me als kind altijd al voor dat de luxe die wij kenden niet vanzelfsprekend was. Ik moest ook mijn eigen geld verdienen. Ik werkte op zaterdag bij bakker Kaptein en later was ik vakkenvuller bij Etos. Ik ben hem dankbaar voor het feit dat ik mezelf moest redden. Ik heb het bedrijf dat ik samen met mijn compagnon Anna de Lanoy Meijer run, ook eigenhandig opgezet, zonder hulp van mijn vader. Hij vond het toen, midden in de kredietcrisis, geen goed idee om armbandjes te gaan verkopen. “Jullie hebben een goede baan, waarom zou je die in vredesnaam opgeven”, zei hij. Inmiddels neemt hij ons bedrijf serieus en ik weet dat hij trots op me is.’</p><fdmg-quote><fdmg-message>Mijn vader heeft, net als zijn vader, een enorm doorzettings­vermogen en houdt mij ook altijd voor moed te houden</fdmg-message><fdmg-author /></fdmg-quote><p>‘Ik onderneem op een wat andere manier dan mijn vader, impulsiever en op gevoel, terwijl hij op basis van een langetermijnvisie onderneemt. Ik vind het heel erg dat hij tot nu toe met zijn bedrijf, Chipshol, dat mijn opa in de jaren tachtig heeft opgezet, niet heeft kunnen realiseren wat hem voor ogen stond. Opa had bijna zes miljoen vierkante meter grond gekocht rond Schiphol met als doel daar Airport City, een zakenstad van de toekomst te ontwikkelen, een woon-werkgebied van internationale allure. Maar mijn vader, mede-eigenaar van Chipshol, en opa hebben door stelselmatige tegenwerking en een onterecht bouwverbod hun droom niet kunnen verwezenlijken. Meer dan twintig jaar zijn ze verwikkeld geweest in een juridische strijd met de staat en met Schiphol. De strijd voor gerechtigheid heeft mijn vader met succes afgerond, maar het heeft hem veel stress bezorgd. Wonderlijk genoeg heeft hij één dag voordat de lockdown werd afgekondigd vanwege de coronacrisis, al zijn Airport City-gronden verkocht aan Schiphol. De timing kon niet beter. Mijn vader vindt het echt een godswonder. Ik vind het jammer dat mijn opa dit niet heeft kunnen meemaken doordat hij in 2018 is overleden, maar mijn vader denkt juist dat opa die deal van bovenaf heeft gedirigeerd.’</p><fdmg-image><fdmg-id>251816</fdmg-id><fdmg-filename>7cbbb0e6d44e00324c3db5817c5d1c8f1e934dfb.jpg</fdmg-filename><fdmg-width>1746</fdmg-width><fdmg-height>1496</fdmg-height><fdmg-caption>Nina met Peter Poot, thuis op de bank in Wassenaar in 1994.</fdmg-caption><fdmg-alt-text /><fdmg-credit /><fdmg-alignment>right</fdmg-alignment></fdmg-image><p>‘Mijn vader heeft, net als zijn vader, een enorm doorzettingsvermogen en houdt mij ook altijd voor moed te houden. “Geef nooit op”, is zijn motto. Hij is een heel sportieve en een serieuze man. Tegenover buitenstaanders kan hij best afstandelijk zijn. In de sociale omgang zijn we heel anders. Ik ben gemakkelijk in de omgang en een open boek. Mijn vader vindt het moeilijk over zijn gevoelens te praten en kropt dingen op. Hij is lief en heeft een klein hartje, maar laat zijn kwetsbaarheid niet graag zien. Dat komt, denk ik, door zijn achtergrond. Hij komt uit een gezin met vier broers en een zus, waarin het protestantse geloof een grote rol speelde en waarin ze opkeken naar hun vader. Dat geloof heeft mijn vader meegenomen in ons gezin. Totdat we 16 waren, moesten we van hem elke zondag naar de kerk, hoe brak we ook waren van het uitgaan. Na de dienst gingen we altijd op bezoek bij zijn ouders, koffiedrinken en gebak eten.’</p><p>‘Hij is een man van rust, reinheid, regelmaat. Mijn ouders zijn nooit kacheltjelam thuisgekomen van een feestje. Hij is een levensgenieter, hoor, hij vindt het fantastisch om cruises te maken met mijn moeder en hij houdt ook van een goed glas wijn, maar hij kan nog steeds tegen ons zeggen dat we er een potje van maken, met al die feestjes die we bezoeken. Dat vindt hij niet verstandig, ook niet voor een huwelijk.’</p><fdmg-quote><fdmg-message>Ik vind dat hij als vader volledig is geslaagd. Ik heb me echt kind kunnen voelen bij hem. Bij hem was ik veilig</fdmg-message><fdmg-author /></fdmg-quote><p>‘Sinds hij meer tijd heeft, is hij opener geworden en ook minder rechtlijnig, maar mensen die niet in complotten geloven vindt hij naïef. Zelfs Jezus was slachtoffer van een complot, zei hij weleens. Zijn wantrouwen is voortgekomen uit de juri­dische strijd die hij jarenlang heeft moeten voeren tegen de overheid. Hij heeft geen vertrouwen  meer in het rechtssysteem sinds hij ontdekte dat er binnen de rechterlijke macht sprake is van vriendjespolitiek.’</p><p>‘Mijn vader houdt nog steeds vast aan het geloof. Dat wij, de burn-outgeneratie, allemaal psychologen en coaches nodig hebben, vindt hij “nogal van deze tijd”. Voor mijn vader is de Bijbel zijn gids en hij beschouwt het als zijn grootste falen dat geen van zijn drie kinderen gelovig is. Ik vertel hem weleens dat ik in een levensfase zit waarin ik niet met het geloof bezig ben, maar dat het in de toekomst misschien nog komt.’</p><p>‘Ik vind dat hij als vader volledig is geslaagd. Ik heb me echt kind kunnen voelen bij hem. Bij hem was ik veilig. Hij was een stabiele factor in ons gezin. En als ik hem nu zie in zijn rol als opa, smelt mijn hart een beetje. Hij neemt de tijd om met mijn twee dochters te spelen en heeft dan een blik in zijn ogen die ik nooit eerder heb gezien. Zonder dat hij het doorheeft, verliest hij tijdens dat spelen zijn controle en toont hij wel zijn kwetsbaarheid. Prachtig.’ </p><fdmg-text-frame><fdmg-heading>Peter over Nina</fdmg-heading><fdmg-content>‘Veel mensen denken dat het Nina altijd voor de wind is gegaan, maar dat is niet zo. Na haar geboorte bleek dat ze een gat in haar middenrif had en moest ze met spoed geopereerd worden. Ze heeft weken voor haar leven gevochten en tot haar 4de nog drie zware operaties ondergaan. Je zou verwachten dat ze daardoor een bang, zorgelijk kind werd, maar het tegendeel is het geval. Nina is heel open en vrolijk, voor de duvel niet bang en weet heel goed wat ze wil.’\n‘Als ondernemer ziet ze weinig problemen en vooral veel kansen. Veelzeggend is dat ze in de kredietcrisis Anna + Nina heeft opgezet, terwijl ik dat geen goed idee vond. De coronacrisis is nu een grote uitdaging, maar ik heb er alle vertrouwen in dat ze daar goed uit gaat komen. Hoe je een jarenlange crisis kunt overleven, heeft ze denk ik ook wel van haar opa en mij geleerd. Wat er ook gebeurt, houd altijd vertrouwen in God. Ik ben rijk gezegend met een dochter als Nina en heel trots op wat ze heeft bereikt. Ik hou zielsveel van haar.’\n</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-text-frame><fdmg-text-frame><fdmg-heading>Lees ook:</fdmg-heading><fdmg-content>Eerdere afleveringen van de rubriek<a href="https://fd.nl/dossier/onderons" target="_self" title="" rel="noopener noreferrer"> Onder ons</a>.\nHet in memoriam van Jan Poot: <a href="https://fd.nl/profiel/1273676/airport-city-van-jan-poot-bleef-een-droom" target="_self" title="" rel="noopener noreferrer">Airport City van Jan Poot bleef een droom</a></fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-text-frame><fdmg-readmore title="Lees ook"><fdmg-content>Eerdere afleveringen van de rubriek<a xmlns="http://www.infomaker.se/idf/1.0" href="https://fd.nl/dossier/onderons" id="link-2012aeef4eed583918c99c85c3cb5311" target="_self" rel="noopener noreferrer"> Onder ons</a>.\nHet in memoriam van Jan Poot: <a xmlns="http://www.infomaker.se/idf/1.0" href="https://fd.nl/profiel/1273676/airport-city-van-jan-poot-bleef-een-droom" id="link-1336ae162402c01abfc6ad71f9fb4304" target="_self" rel="noopener noreferrer">Airport City van Jan Poot bleef een droom</a></fdmg-content></fdmg-readmore><p><strong><em>Lees meer in</em></strong><a href="https://fd.nl/persoonlijk" target="_self" title="" rel="noopener noreferrer"><strong><em> FD Persoonlijk</em></strong></a><strong><em>, het weekend magazine van Het Financieele Dagblad over mensen, cultuur, lifestyle, reizen, carrière en personal finance.</em></strong></p>',
                originalArticleId: '1344550',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_persoonlijk',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: false,
                shortArticle: false,
                fdPersonal: true,
                topic: 'Onder ons',
                section: 'fd-persoonlijk',
                sectionDirectory: 'persoonlijk',
                sectionTitle: 'FD persoonlijk',
                rubric: 'Onder ons',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 86001,
                        tag: 'Onder ons',
                        enabled: true,
                        directory: 'onder-ons',
                        tagCategoryType: 'SECTION',
                    },
                ],
                articleLength: 'XL',
                category: 'PERSOONLIJK',
                workflow: {
                    workInstructions: '',
                    characterCount: 5617,
                    state: 'READY',
                    plannedDate: 1598652000000,
                    articleCreatedBy: 'Sanne Kloosterboer',
                    articleLastModifiedBy: 'Bie Kho',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Nina Poot, mede-eigenaar van het sieradenmerk Anna + Nina, is de dochter van Peter Poot, ceo van gebiedsontwikkelaar Chipshol.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 251814,
                        path: '04b312fbb662672b3b62a3ba82b58031a0355b6a.jpg',
                        width: 2000,
                        height: 1237,
                        crops: [
                            {
                                ratio: 'NORMAL',
                                x: 0.03375,
                                y: 0,
                                width: 0.93,
                                height: 1,
                            },
                            {
                                ratio: 'SQUARE',
                                x: 0.17625,
                                y: 0,
                                width: 0.61875,
                                height: 1,
                            },
                            {
                                ratio: 'WIDE',
                                x: 0,
                                y: 0,
                                width: 1,
                                height: 0.9090909090909091,
                            },
                        ],
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1324449,
                version: 59,
                title: 'Alle verrijking op een rijtje',
                state: 'PUBLISHED',
                url: '/achtergrond/1324449/alle-verrijking-op-een-rijtje',
                publicationDate: 1587537337000,
                lastModificationDate: 1591704561000,
                genre: 'Tech en media',
                authors: [
                    {
                        id: 28647,
                        fullName: 'Van onze redacteur',
                    },
                    {
                        id: 45301,
                        fullName: 'Tom van Zummeren',
                    },
                ],
                intro:
                    'Dit artikel is bedoeld om in één oogopslag te zien of alle ondersteunde artikel-elementen goed werken naar behoren. Zo kan eenvoudig de nieuwe dark mode getest worden voor iOS (en later ook Android) maar ook alle toekomstige design changes aan deze elementen. Dit stuk tekst is overigens het artikel-intro element.',
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            'Altijd al alle artikel elementen onder elkaar willen zien staan? Dit is je kans om eens een keer goed alles onder de loep te nemen!',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 246838,
                            path: '-KquD1lyzmOxcdHfMDc6ckwuB-k.jpg',
                            width: 4909,
                            height: 3945,
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<p>LET OP: Dit artikel bevat een html-embed, er is ook een <a href="https://dev.fd.nl/achtergrond/1328242/alle-verrijking-op-een-rijtje" target="_self" title="" rel="noopener noreferrer">100% native test-artikel</a></p><h2>Allereerst hebben we twee paragrafen onder elkaar &lt;p&gt;</h2><p><fdmg-stock-quote><fdmg-isin>US0378331005</fdmg-isin><fdmg-exchange>XNAS</fdmg-exchange><fdmg-data-difference>+0,57%</fdmg-data-difference><fdmg-data-name>Apple</fdmg-data-name><fdmg-data-price>316,77</fdmg-data-price>​\n            <fdmg-data-currency>$</fdmg-data-currency>​\n        </fdmg-stock-quote> Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Integer <fdmg-stock-quote><fdmg-isin>US8356993076</fdmg-isin><fdmg-exchange>XNYS</fdmg-exchange><fdmg-data-difference>-0,53%</fdmg-data-difference><fdmg-data-name>Sony Corp</fdmg-data-name><fdmg-data-price>63,73</fdmg-data-price>​\n            <fdmg-data-currency>$</fdmg-data-currency>​\n        </fdmg-stock-quote> posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p><fdmg-stock-quote><fdmg-isin /><fdmg-exchange>XSHG</fdmg-exchange><fdmg-data-difference>+0,48%</fdmg-data-difference><fdmg-data-name>CHINA-CSI 100 Index</fdmg-data-name><fdmg-data-price>4.001,71</fdmg-data-price>​\n            <fdmg-data-currency>CNY</fdmg-data-currency>​\n        </fdmg-stock-quote>Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.</p><h3>Minder gebruikt, maar nog steeds relevant: de subkop &lt;h3&gt;</h3><h2>Dan: de opsomming, ook wel bekend als &lt;fdmg-bulletpoint&gt;</h2><fdmg-bulletpoint title=""><fdmg-content>Praesent commodo cursus magna, vel scelerisque nisl consectetur et\nDonec id elit non mi porta gravida at eget metus\nEtiam porta sem malesuada magna mollis euismod        </fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-bulletpoint><p>en...</p><fdmg-bulletpoint title=""><fdmg-content>Praesent commodo cursus magna, vel scelerisque nisl consectetur et\nDonec id elit non mi porta gravida at eget metus\nEtiam porta sem malesuada magna mollis euismod        </fdmg-content><fdmg-alignment>right</fdmg-alignment></fdmg-bulletpoint><p>De opsomming kan ook rechts-aligned zijn.</p><p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p><p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod.</p><h2>En natuurlijk de welbekende afbeelding &lt;fdmg-image&gt;</h2><fdmg-image><fdmg-id>246836</fdmg-id><fdmg-filename>-6YUhVpT74sLVbRdaPlI3d8vLps.jpg</fdmg-filename><fdmg-width>1600</fdmg-width><fdmg-height>901</fdmg-height><fdmg-caption>Dit is het bijschrift bij de foto.</fdmg-caption><fdmg-alt-text /><fdmg-credit>En de credit: deze foto komt van AT5</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><h2>Een set SVG\'s als infographic, deze heet &lt;fdmg-infographic-extended&gt;</h2><fdmg-infographic-extended><graphic view="responsive" name="Mobile.svg" url="https://fd-external-development.imgix.net/d2d6138666864d50b506ca1dd5a0ecdb.png" /><graphic view="desktop" name="medium.svg" url="https://fd-external-development.imgix.net/cafecf28e8b04467ab75532b273cd6ef.png" /><graphic view="xl" name="Large.svg" url="https://fd-external-development.imgix.net/5e0594906a214cd28bf106cfa78b4520.png" /></fdmg-infographic-extended><p>Plak geen twee SVG aan elkaar. Dat levert problemen op.</p><fdmg-infographic-extended><graphic view="responsive" name="Freesample.svg" url="https://fd-external-development.imgix.net/b22e1b3eaaf549a682a4afc3dff9631e.png" /><graphic view="desktop" name="Freesample.svg" url="https://fd-external-development.imgix.net/5cf379e17cc44b90b529802f6845ace2.png" /><graphic view="xl" name="Freesample.svg" url="https://fd-external-development.imgix.net/c76185c41854464cb77ffc99bc849d6a.png" /></fdmg-infographic-extended><h2>Een LocalFocus infographic, also known as &lt;fdmg-infographic&gt;</h2><fdmg-infographic height="400"><fdmg-url>https://localfocus2.appspot.com/5e0b41f0c1b7e</fdmg-url></fdmg-infographic><h2>Het beruchte cijferkader, oftewel &lt;fdmg-number-frame&gt;</h2><fdmg-number-frame><fdmg-heading>$ 145.600.000.000</fdmg-heading><fdmg-content>Dit is de nett worth van Jeff Bezos</fdmg-content></fdmg-number-frame><h2>Een PDFje ... &lt;fdmg-pdf&gt;</h2><fdmg-pdf><fdmg-id>MzYsNTMsMTAsMjIz</fdmg-id><fdmg-filename>2AFdDR9F_TFVY0GWm9RecMYQNUw.pdf</fdmg-filename><fdmg-title>1200px-Logo_Het_Financieele_Dagblad.pdf</fdmg-title></fdmg-pdf><p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit        amet risus. </p><h2>Een quote\'je &lt;fdmg-quote&gt;</h2><fdmg-quote><fdmg-message>Vestibulum id ligula porta felis euismod semper.</fdmg-message><fdmg-author>Lorem Ipsum</fdmg-author></fdmg-quote><h2>YouTube videootje! &lt;fdmg-youtube&gt;</h2><fdmg-youtube><fdmg-id>q-QuQ_aEY0g</fdmg-id></fdmg-youtube><h2>Vimeo? Wie gebruikt dat nog? &lt;fdmg-vimeo&gt;</h2><fdmg-vimeo><fdmg-id>393634761</fdmg-id></fdmg-vimeo><h2>Tweetje ... &lt;fdmg-twitter&gt;</h2><fdmg-twitter><fdmg-url>https://twitter.com/jon_prosser/status/1252187152831692800</fdmg-url></fdmg-twitter><p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p><p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod.</p><h2>Soundcloud &lt;fdmg-soundcloud&gt;</h2><fdmg-soundcloud><fdmg-url>https://soundcloud.com/kk-slider-aircheck/k-k-jazz</fdmg-url></fdmg-soundcloud><p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p><p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod.</p><h2>Instagram &lt;fdmg-instagram&gt; werkt niet meer...</h2><fdmg-instagram><fdmg-url>https://www.instagram.com/p/Btcyijunr3t/?utm_source=ig_web_copy_link</fdmg-url></fdmg-instagram><p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p><p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod.</p><h2>Instagram &lt;fdmg-instagram&gt;</h2><h2>Lees ook links &lt;fdmg-readmore&gt;</h2><fdmg-readmore title="Lees ook deze artikelen"><fdmg-content>Deze gaat over <a xmlns="http://www.infomaker.se/idf/1.0" href="https://dev.fd.nl/ondernemen/1324441/ik-was-niet-zelf-op-het-idee-gekomen-om-ceo-van-abn-amro-te-worden" id="link-146eb6d7159ad3303e7ec39202c6c850" target="_self" rel="noopener noreferrer">iets met een ABN AMRO CEO</a>\nMaar ook deze <a xmlns="http://www.infomaker.se/idf/1.0" href="https://dev.fd.nl/economie-politiek/1324442/laatste-coronanieuws-amerikaanse-senaat-keurt-nieuw-steunpakket-goed-van-484-mrd" id="link-e69272e3ed5299b301ddff8a5e59162e" target="_self" rel="noopener noreferrer">over een steunpakket</a>\nEn deze <a xmlns="http://www.infomaker.se/idf/1.0" href="https://dev.fd.nl/beurs/1324403/ook-brent-olie-gekelderd" id="link-86186a86905846d15747fd2f829c070e" target="_self" rel="noopener noreferrer">over olie!</a></fdmg-content></fdmg-readmore><h2>Tekstkader &lt;fdmg-text-frame&gt;</h2><fdmg-text-frame><fdmg-heading>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</fdmg-heading><fdmg-content>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-text-frame><p>Een tekstkader is een beetje apart, want je kan er best veel mee.</p><fdmg-text-frame><fdmg-heading>K.K. Metal</fdmg-heading><fdmg-content>Zo kan je bijvoorbeeld ook een <strong>afbeelding</strong> tonen. En je kan de tekst ook <em>cursief </em>of <strong>bold</strong> maken. Het is zelfs mogelijk om er een <a href="https://fd.nl" target="_self" title="" rel="noopener noreferrer">link</a> te plaatsen.\nBijzonder niet?</fdmg-content><fdmg-alignment>block</fdmg-alignment><fdmg-text-frame-image><fdmg-id>image-247473</fdmg-id><fdmg-filename>9c6s2YgJY-QYGUkwECVtoYdtvTo.jpg</fdmg-filename></fdmg-text-frame-image></fdmg-text-frame><p>Of wat dacht je ervan om de tekstkader anders te laten uitlijnen?</p><fdmg-text-frame><fdmg-heading>Rechts</fdmg-heading><fdmg-content>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.</fdmg-content><fdmg-alignment>right</fdmg-alignment></fdmg-text-frame><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h2>Woordkader &lt;fdmg-stack-frame&gt;</h2><fdmg-stack-frame><fdmg-heading>Maecenas faucibus mollis interdum.</fdmg-heading><fdmg-content>Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</fdmg-content></fdmg-stack-frame><h2>Samenvatting &lt;fdmg-summary&gt;</h2><fdmg-summary title="Cras justo odio, dapibus ac facilisis in, egestas eget quam."><fdmg-content>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit\nNulla vitae elit libero, a pharetra augue\nVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor        </fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-summary><h2>Linkblok &lt;fdmg-related-link&gt;</h2><fdmg-related-link><fdmg-prefix>Lees ook</fdmg-prefix><fdmg-leadtext>Profiel van president Tsai Ing-wen</fdmg-leadtext><fdmg-relatedurl>https://fd.nl/weekend/1284083/behoedzame-kattenliefhebber-manoeuvreert-moeizaam-tussen-china-en-taiwan</fdmg-relatedurl></fdmg-related-link><p>LET OP: Deprecated! Maar dit element moet in verband met backwards compatibility nog steeds wel goed getoond worden.</p><h2>Inline-HTML (Financiele Agenda)</h2><fdmg-html-embed><fdmg-html-content>&lt;style type="text/css"&gt;\n/* Use this color scheme when HTML has class .dark */\n:root.dark .FinancialAgenda_financialAgenda__1SQtT {\n    --card-2: #332f2c;\n    --content-copy: #ffeadb;\n    --dividers: #4c4642;\n    --primary: #41afb0;\n}\n\n/* Use this color scheme when HTML has class .light */\n:root.light .FinancialAgenda_financialAgenda__1SQtT, :root .FinancialAgenda_financialAgenda__1SQtT {\n    --card-2: #f1ded2;\n    --content-copy: #191919;\n    --dividers: #cdbeb4;\n    --primary: #379596;\n}\n\n/* Use system preferred scheme when HTML has class .dark-theme-enabled */\n@media (prefers-color-scheme: light) {\n    :root.dark-theme-enabled .FinancialAgenda_financialAgenda__1SQtT, :root.system .FinancialAgenda_financialAgenda__1SQtT {\n        --card-2: #f1ded2;\n        --content-copy: #191919;\n        --dividers: #cdbeb4;\n        --primary: #379596;\n    }\n}\n\n/* Use system preferred scheme when HTML has class .dark-theme-enabled */\n@media (prefers-color-scheme: dark) {\n    :root.dark-theme-enabled .FinancialAgenda_financialAgenda__1SQtT, :root.system .FinancialAgenda_financialAgenda__1SQtT {\n        --card-2: #332f2c;\n        --content-copy: #ffeadb;\n        --dividers: #4c4642;\n        --primary: #41afb0;\n    }\n}\n\n.FinancialAgenda_financialAgenda__1SQtT table {\n    width: 100%;\n    max-width: 640px;\n    color: var(--content-copy);\n    background-color: var(--card-2);\n    font-size: 0.8em;\n    font-family: ArnhemPro, ProximaNovaRegular, sans-serif;\n    font-weight: 400;\n    line-height: 1em;\n    margin: 1em auto 0.5em;\n    padding: 1em;\n    border: 0px;\n}\n\n/* IE11 */\n@media screen and (-ms-high-contrast: active), not all {\n    .FinancialAgenda_financialAgenda__1SQtT table {\n        color: rgb(25, 25, 25);\n        background-color: rgba(0, 0, 0, 0.03);\n    }\n}\n\n@media only screen and (max-width: 460px) {\n    .FinancialAgenda_financialAgenda__1SQtT table {\n        width: 95%;\n        margin: 1em;\n        padding: 1em 0.5em 1em 0.2em;\n        line-height: 1.2em;\n        display: table-cell;\n        vertical-align: inherit;\n        border-bottom: 1px solid var(--dividers);\n    }\n}\n\n/* IE11 */\n@media only screen and (-ms-high-contrast: active) and (max-width: 460px), not all {\n    .FinancialAgenda_financialAgenda__1SQtT table {\n        border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    }\n}\n\n.FinancialAgenda_financialAgenda__1SQtT th {\n    font-size: 1.2em;\n    font-family: ProximaNovaBold, sans-serif;\n    margin-bottom: 1em;\n    padding: 0.5em 1em 0.5em 0.1em;\n    border-bottom: 1px solid var(--dividers);\n    color: var(--primary);\n    font-weight: bold;\n    text-align: left;\n}\n\n/* IE11 */\n@media screen and (-ms-high-contrast: active), not all {\n    .FinancialAgenda_financialAgenda__1SQtT th {\n        color: rgb(73, 164, 162);\n    }\n}\n\n.FinancialAgenda_financialAgenda__1SQtT tr {\n    width: 100%;\n    padding: 1em;\n    border-bottom-width: ; border-bottom-style:;\n    box-sizing: border-box;\n    margin-top: 1em;\n    display: table-row;\n    vertical-align: inherit;\n    border-color: inherit;\n}\n\n/* IE11 */\n@media screen and (-ms-high-contrast: active), not all {\n    .FinancialAgenda_financialAgenda__1SQtT tr {\n        border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    }\n}\n\n.FinancialAgenda_financialAgenda__1SQtT td {\n    padding: 1em 0.5em 1em 0.2em;\n    display: table-cell;\n    vertical-align: inherit;\n    border-bottom: 1px solid var(--dividers);\n}\n\n/* IE11 */\n@media screen and (-ms-high-contrast: active), not all {\n    .FinancialAgenda_financialAgenda__1SQtT td {\n        border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    }\n}\n&lt;/style&gt;\n\n\n\n&lt;html&gt;\n&lt;body&gt;\n&lt;div class="FinancialAgenda_financialAgenda__1SQtT"&gt;\n&lt;table&gt;\n\t&lt;tr&gt;&lt;th&gt;Datum:&lt;/b&gt;&lt;/th&gt;&lt;th&gt;&lt;b&gt;Bedrijf/land:&lt;/b&gt;&lt;/th&gt;&lt;th&gt;&lt;b&gt;Betreft:&lt;/b&gt;&lt;/th&gt;&lt;/tr&gt;\t\n\t\t\n&lt;tr&gt;&lt;td&gt;25 mei&lt;/td&gt;&lt;td&gt;VK&lt;/td&gt;&lt;td&gt;Bankholiday - financiële markten gesloten&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;25 mei&lt;/td&gt;&lt;td&gt;VS&lt;/td&gt;&lt;td&gt;Memorial day - financiële markten gesloten&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;25 mei&lt;/td&gt;&lt;td&gt;IFO-index&lt;/td&gt;&lt;td&gt;Ondernemersklimaat Duitsland&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;26 mei&lt;/td&gt;&lt;td&gt;Recticel&lt;/td&gt;&lt;td&gt;Alg. jaarvergadering&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;26 mei&lt;/td&gt;&lt;td&gt;Air France-KLM&lt;/td&gt;&lt;td&gt;Alg. jaarvergadering&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;26 mei&lt;/td&gt;&lt;td&gt;Adyen&lt;/td&gt;&lt;td&gt;jaarvergadering webcast&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;27 mei&lt;/td&gt;&lt;td&gt;ExxonMobil&lt;/td&gt;&lt;td&gt;jaarvergadering - webcast&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;27 mei&lt;/td&gt;&lt;td&gt;HP Inc&lt;/td&gt;&lt;td&gt;trading update Q2&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;28 mei&lt;/td&gt;&lt;td&gt;Lucas Bols&lt;/td&gt;&lt;td&gt;jaarcijfers&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;28 mei&lt;/td&gt;&lt;td&gt;Van Lanschot Kempen&lt;/td&gt;&lt;td&gt;jaarvergadering&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;28 mei&lt;/td&gt;&lt;td&gt;Merck KGaA&lt;/td&gt;&lt;td&gt;jaarvergadering - webcast&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;28 mei&lt;/td&gt;&lt;td&gt;NN Group&lt;/td&gt;&lt;td&gt;Alg. jaarvergadering&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;28 mei&lt;/td&gt;&lt;td&gt;Duitsland&lt;/td&gt;&lt;td&gt;consumentenprijsindex&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;29 mei&lt;/td&gt;&lt;td&gt;Carrefour&lt;/td&gt;&lt;td&gt;Alg. jaarvergadering&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;29 mei&lt;/td&gt;&lt;td&gt;Total&lt;/td&gt;&lt;td&gt;Alg. jaarvergadering&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;29 mei&lt;/td&gt;&lt;td&gt;Eurostat&lt;/td&gt;&lt;td&gt;flash inflatiecijfers eurozone mei&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;2 juni&lt;/td&gt;&lt;td&gt;Ageas&lt;/td&gt;&lt;td&gt;notering ex-dividend&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;3 juni&lt;/td&gt;&lt;td&gt;Wal-Mart Stores&lt;/td&gt;&lt;td&gt;jaarvergadering&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;3 juni&lt;/td&gt;&lt;td&gt;Hunter Douglas&lt;/td&gt;&lt;td&gt;Alg. jaarvergadering&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;3 juni&lt;/td&gt;&lt;td&gt;AB InBev&lt;/td&gt;&lt;td&gt;jaarvergadering&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;4 juni&lt;/td&gt;&lt;td&gt;Saint-Gobain&lt;/td&gt;&lt;td&gt;Alg. jaarvergadering&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;4 juni&lt;/td&gt;&lt;td&gt;Philips&lt;/td&gt;&lt;td&gt;betaalbaarstelling dividend&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;4 juni&lt;/td&gt;&lt;td&gt;Unilever&lt;/td&gt;&lt;td&gt;betaalbaarstelling dividend Q1&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;4 juni&lt;/td&gt;&lt;td&gt;Holland Colours&lt;/td&gt;&lt;td&gt;jaarcijfers &lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;4 juni&lt;/td&gt;&lt;td&gt;Remy Cointreau&lt;/td&gt;&lt;td&gt;jaarcijfers&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;4 juni&lt;/td&gt;&lt;td&gt;Fastned&lt;/td&gt;&lt;td&gt;Alg. jaarvergadering&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;4 juni&lt;/td&gt;&lt;td&gt;Ageas&lt;/td&gt;&lt;td&gt;betaalbaarstelling dividend&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;4 juni&lt;/td&gt;&lt;td&gt;ECB&lt;/td&gt;&lt;td&gt;monetaire vergadering ECB&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;5 juni&lt;/td&gt;&lt;td&gt;Intertrust&lt;/td&gt;&lt;td&gt;betaalbaarstelling slotdividend&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td&gt;5 juni&lt;/td&gt;&lt;td&gt;Min. van Arbeid VS&lt;/td&gt;&lt;td&gt;non-farm payroll&lt;/td&gt;&lt;/tr&gt;\n&lt;tr&gt;&lt;th colspan=2 align="center"&gt;Bron: FD Research&lt;/th&gt;&lt;td&gt;*=voorlopige datum&lt;/td&gt;&lt;/tr&gt;\n&lt;/table&gt;&lt;/body&gt;&lt;/html&gt;</fdmg-html-content></fdmg-html-embed><p></p><p></p>',
                originalArticleId: '1324449',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: false,
                free: true,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: false,
                shortArticle: false,
                fdPersonal: false,
                section: 'achtergrond',
                sectionDirectory: 'achtergrond',
                sectionTitle: 'Achtergrond',
                articleType: 'ARTICLE',
                articleLength: 'UNLIMITED',
                relatedArticles: [
                    {
                        relatedArticleId: 1328242,
                        relatedArticleUrl:
                            'https://dev.fd.nl/achtergrond/1328242/alle-verrijking-op-een-rijtje',
                    },
                ],
                workflow: {
                    workInstructions: '',
                    characterCount: 5083,
                    state: 'EDIT',
                    articleCreatedBy: 'Tom van Zummeren',
                    articleLastModifiedBy: 'Tom van Zummeren',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        'Altijd al alle artikel elementen onder elkaar willen zien staan? Dit is je kans om eens een keer goed alles onder de loep te nemen!',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 246838,
                        path: '-KquD1lyzmOxcdHfMDc6ckwuB-k.jpg',
                        width: 4909,
                        height: 3945,
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1328654,
                version: 4,
                title: 'Trump kiest voor escalatie bij protesten',
                state: 'PUBLISHED',
                url:
                    '/economie-politiek/1328654/trump-kiest-voor-escalatie-bij-protesten',
                publicationDate: 1591037865000,
                lastModificationDate: 1591081489000,
                genre: 'Buitenland',
                authors: [
                    {
                        id: 621,
                        fullName: 'Casper Thomas',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        content:
                            "Amerikaanse president zegt tegen gouverneurs dat ze 'zwak' zijn als ze niet meer arrestaties verrichten de komende dagen",
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 251850,
                            path:
                                '83bb1a13ad36192e99d02a43d0789f87874cc83c.jpg',
                            width: 2210,
                            height: 1473,
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    "<fdmg-image><fdmg-id>251851</fdmg-id><fdmg-filename>83bb1a13ad36192e99d02a43d0789f87874cc83c.jpg</fdmg-filename><fdmg-width>2210</fdmg-width><fdmg-height>1473</fdmg-height><fdmg-caption>Politie in rellenuitrusting houden protestdeelnemers op afstand van het Witte Huis in Lafayette Park in Washington.</fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Reuters/Jonathan Ernst</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><fdmg-summary title=\"In het kort\"><fdmg-content>President eist van de gouverneurs dat ze protesten de kop indrukken met hard ingrijpen.\nSteden in VS zijn in de greep van protesten, na dood van George Floyd uit Minneapolis.\nTrump heeft zich verschanst in presidentiële bunker die sinds 2001 niet meer gebruikt is.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-summary><p>Na een avond broeden achter gesloten deuren heeft de Amerikaanse president Trump besloten het pad van de verzoening links te laten liggen. Terwijl zondag honderden demonstranten in Washington DC de avondklok negeerden, zat hij verschanst in de presidentiële bunker. Deze werd voor het laatst gebruikt op 11 september 2001. </p><p>Op maandagochtend kwam Trump tevoorschijn met een boodschap aan de gouverneurs van de staten dat ze moeten 'domineren'. In een telefoongesprek, waarvan een transcriptie in handen kwam van de New York Times, zei hij tegen de gouverneurs dat ze 'zwak' zijn als ze niet meer arrestaties verrichten de komende dagen. </p><h2>Vals dollarbiljet</h2><p>In de gehele VS zijn steden in de greep van protesten naar aanleiding van de dood van de 46-jarige George Floyd uit Minneapolis op 25 mei. Hij stierf nadat een politieagent, Derek Chauvin, minutenlang met zijn knie op zijn nek had gezeten. Floyd werd gearresteerd op verdenking van het betalen met een vals dollarbiljet. Chauvin is inmiddels aangeklaagd wegens moord. </p><p>Floyds laatste woorden, ‘<em>I can’t breathe</em>’, zijn de slogan geworden van aanhoudende protesten tegen excessief politiegeweld gericht op Afro-Amerikanen. Minneapolis is de plek waar de demonstraties het grimmigst zijn, met tientallen vernielde winkels, een afgebrand politiebureau en het leger dat paraat staat om de orde te herstellen.</p><h2>Hetzelfde patroon</h2><p>Ook Washington DC heeft inmiddels meerdere nachten gehad waarbij vernielingen de overhand kregen. Het patroon is telkens hetzelfde: Overdag vreedzame demonstraties, 's nachts worden winkelpuien en kantoorruiten ingegooid en auto's in brand gestoken. </p><p>Inmiddels zijn in steden door het hele land vijfduizend reservestrijdkrachten van de National Guard ingezet om de rassenrellen onder controle te krijgen. Nog eens tweeduizend staan klaar om in te grijpen. Er zijn meer dan vierduizend arrestaties verricht. In verschillende steden en staten is de noodtoestand afgekondigd.</p><p>In Washington DC besloot burgemeester Muriel Bowser op maandag de avondklok te vervroegen naar 19.00 uur. Zij had eerder een harde aanvaring met de president. Trump beschuldigde Bowser ervan te weinig toe doen om het Witte Huis te beschermen. Ook twitterde Trump dat hij ‘de meest gemene honden en meest vervaarlijke wapens’ zal inzetten als de demonstranten te dicht bij zijn ambtswoning komen. In een persconferentie afgelopen weekend sprak Bowser haar ontzetting uit: Trump ‘verheerlijkt geweld’.</p><h2>Kruispunt</h2><p>Na bijna een week van demonstraties lijken de VS zich op een kruispunt te bevinden: een langdurige periode van onrust, of terugkeer naar de kalme straten van voor de dood van George Floyd. 'Ik blijf terugkomen zolang dit duurt,' zei Charles, een kantoorbeheerder van eind twintig uit noord-Virginia. Hij was op zondag naar Washington gekomen om te demonstreren. 'Ik heb het gevoel dat er nu echt iets kan veranderen in Amerika'.</p><p>Veel zal afhangen van de vraag of het onderscheid tussen demonstraties en rellen in stand kan worden gehouden. Trump houdt 'radicaal links' verantwoordelijk voor de vernielingen, en heeft gezegd de antifascistische actiegroep Antifa tot een terroristische organisatie te zullen bestempelen. </p><p>Volgens Trump dreigen de staten 'onder de voet te worden gelopen' door de demonstranten en zijn de gouverneurs 'eikels' als ze niet harder optreden. De situatie in Washington is volgens hem 'goed onder controle' en er zal in Amerika's hoofdstad 'heel, heel hard worden ingegrepen'. </p><fdmg-summary title=\"Lees ook:\"><fdmg-content><a href=\"https://fd.nl/economie-politiek/1346392/in-de-vs-vermengt-protest-tegen-racisme-zich-met-vernieling-in-de-straten\" id=\"link-47f2a20db9ffc77a8a001fd223760e84\" rel=\"noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer noopener noreferrer\" target=\"_self\">‘Als je ziet wat er met George Floyd is gebeurd, kun je maar aan een kant staan’</a></fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-summary><p> </p>",
                originalArticleId: '1346478',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                printTitle:
                    'Trump kiest voor escalatie nu staten ‘onder de voet dreigen te worden gelopen’',
                section: 'economie-politiek',
                sectionDirectory: 'economie-politiek',
                sectionTitle: 'Economie & Politiek',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 50506,
                        tag: 'Elon Musk',
                        enabled: true,
                        directory: 'elon-musk',
                        tagCategoryType: 'PERSON',
                    },
                    {
                        id: 93301,
                        tag: 'Actiegroep',
                        enabled: true,
                        directory: 'actiegroep',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 66242,
                        tag: 'Donald Trump',
                        enabled: true,
                        introText:
                            'De 45e president van de VS is Donald Trump (1946). Als ondernemer in het New York van de jaren ‘70 en ‘80 groot geworden in het vastgoed en later op tv met de realityshow The Apprentice. In 2015 stelt hij zich kandidaat voor de presidentsverkiezingen en de rest is zoals dat heet, history.',
                        directory: 'donald-trump',
                        tagCategoryType: 'PERSON',
                    },
                    {
                        id: 83505,
                        tag: 'Buitenland',
                        enabled: true,
                        directory: 'buitenland',
                        tagCategoryType: 'SECTOR',
                    },
                ],
                articleLength: 'UNLIMITED',
                category: 'NEWS',
                workflow: {
                    workInstructions: '',
                    characterCount: 3445,
                    state: 'READY',
                    articleCreatedBy: 'Casper Thomas',
                    articleLastModifiedBy: 'Joep Westerveld',
                },
                fullWidth: false,
                decoupled: true,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    content:
                        "Amerikaanse president zegt tegen gouverneurs dat ze 'zwak' zijn als ze niet meer arrestaties verrichten de komende dagen",
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 251850,
                        path: '83bb1a13ad36192e99d02a43d0789f87874cc83c.jpg',
                        width: 2210,
                        height: 1473,
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1328664,
                version: 4,
                title:
                    'Nederlands onderwijs kan belofte van grote gelijkmaker steeds minder waarmaken',
                state: 'PUBLISHED',
                url:
                    '/opinie/1328664/nederlands-onderwijs-kan-belofte-van-grote-gelijkmaker-steeds-minder-waarmaken',
                publicationDate: 1591023296000,
                lastModificationDate: 1591081408000,
                genre: 'Onderwijs',
                authors: [
                    {
                        id: 14802,
                        fullName: 'Edith Hooge',
                    },
                ],
                intro:
                    'Edith Hooge is voorzitter van de Onderwijsraad en hoogleraar onderwijsbestuur',
                teasers: {
                    FDMG_WEB_PAGES: {
                        title:
                            'Onderwijs kan belofte van grote gelijkmaker steeds minder waarmaken',
                        content:
                            'Het kwaliteitsverschil tussen scholen in Nederland groeit en de coronacrisis doet daar een schep bovenop, schrijft Edith Hooge.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 251872,
                            path:
                                '11e598f999368e2a9c9bacfe35f9b2d491126723.jpg',
                            width: 6595,
                            height: 4397,
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<p>Het is een open deur, investeren in onderwijs loont. Een goed opgeleide bevolking vormt de motor van economische en maatschappelijke bloei. In de brede maatschappelijke heroverweging over onderwijs die minister Wopke Hoekstra van Financiën recent naar de Tweede Kamer stuurde, wordt dat opnieuw benadrukt: investeren in onderwijs vergroot de arbeidsproductiviteit en draagt bij aan het innovatievermogen van de economie. Ook bevordert het kennis over nieuwe technologieën en kennisbenutting. Toch maakt in ons land niet iedereen met dezelfde capaciteiten evenveel kans dat onderwijsrendement te verzilveren.</p><fdmg-image><fdmg-id>251873</fdmg-id><fdmg-filename>11e598f999368e2a9c9bacfe35f9b2d491126723.jpg</fdmg-filename><fdmg-width>6595</fdmg-width><fdmg-height>4397</fdmg-height><fdmg-caption>Kinderen mogen weer naar school na versoepeling van de coronamaatregelen</fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Hollandse Hoogte</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><p>Internationaal bezien vallen de grote kwaliteitsverschillen tussen Nederlandse scholen op. Ons land staat op dit punt zelfs al enkele jaren in de top drie van lidstaten van de Organsiatie voor Economische Samenwerking en Ontwikkeling (Oeso). Pisa, het internationaal vergelijkend onderzoek van de Oeso naar kennis en vaardigheden van 15-jarigen, laat grote variatie in schoolsystemen zien wat betreft kwaliteitsverschillen tussen scholen.</p><p>Gemeten naar de verschillen in leesprestaties, veroorzaken de kwaliteitsverschillen tussen scholen in Canada, Denemarken, Finland, Ierland, Noorwegen en Portugal minder dan 15% van de totale variatie in leerlingprestaties. In Israël, Libanon, Nederland, de Verenigde Arabische Emiraten, Bulgarije en Duitsland is dit meer dan de helft (51% en hoger).</p><p>De verschillen in schoolsucces tussen Nederlandse kinderen en jongeren blijken dus niet alleen te wijten aan in welk gezin zij zijn geboren, maar vooral aan naar welke school zij gaan. Door deze grote kwaliteitsverschillen tussen scholen, is het Nederlandse onderwijs steeds minder de ‘grote gelijkmaker’. Maar dat wordt nauwelijks bediscussieerd.</p><h2>Gelijkwaardige condities</h2><p>Al sinds de jaren zestig wordt naar onderwijs gekeken als middel om de kansenongelijkheid te herstellen die er voor kinderen en jongeren ‘van huis uit’ nu eenmaal is. Jaren geleden benadrukte onderwijssocioloog Jaap Dronkers al dat voor de ‘grote gelijkmaakfunctie’ van het onderwijs gelijkwaardige onderwijscondities op scholen een cruciale voorwaarde zijn.</p><p>Denk hierbij aan kwalitatief goed onderwijs op elke school, waarbij de didactische aanpak en het lesmateriaal worden afgestemd op de verschillende behoeften van leerlingen. Denk aan de aanwezigheid van voldoende ervaren leraren, die de kennis, kunde én overtuiging hebben om alle leerlingen ‘op te tillen’.</p><p>Maar de onderwijscondities op Nederlandse scholen zijn de afgelopen jaren alleen maar ongelijkwaardiger geworden. De Onderwijsinspectie rapporteert dat kinderen en jongeren met een vergelijkbare achtergrond op de ene school tot substantieel betere prestaties worden gebracht dan op de andere school. Uit een recent onderzoek van McKinsey &amp; Company blijkt dat de onderwijscondities op scholen zo verschillen, dat de keuze naar welke school een kind gaat het verschil kan maken in de rest van zijn (school)loopbaan.</p><p>Dezelfde leerling die op een basisschool uit de 10% met de beste onderwijscondities een havo-advies krijgt, krijgt een vmbo-advies op een school die behoort bij 10% met de slechtste onderwijscondities. In het voorgezet onderwijs leiden de verschillen tot een heel punt verschil bij het centraal schriftelijk eindexamen wiskunde.</p><p>De grote kwaliteitsverschillen tussen scholen in Nederland maken dus dat sommige leerlingen behalve thuis, ook op school minder onderwijskansen krijgen dan anderen. Het leraren- en schoolleiderstekort en de coronacrisis doen daar nog eens een schep bovenop.</p><p>Het tekort aan leraren en schoolleiders verdeelt zich namelijk ongelijk: juist de scholen waar goed onderwijs er het meest toe doet om te compenseren wat leerlingen van huis uit onvoldoende meekrijgen, worden het hardst geraakt: daar zijn de meeste vacatures en is het moeilijk bevoegde en ervaren leraren te behouden. Dan ligt kwaliteitsverlies op de loer.</p><fdmg-quote><fdmg-message>De bestaande kwaliteitsverschillen binnen het onderwijs worden door de coronacrisis vergroot</fdmg-message><fdmg-author /></fdmg-quote><p>De coronacrisis verscherpt de al bestaande kwaliteitsverschillen binnen het onderwijs. Op de scholen waar de onderwijscondities goed op orde zijn, is de kans groter dat de kwaliteit wordt vastgehouden bij afstandsonderwijs en het schakelen met fysiek onderwijs, terwijl kwalitatief zwakkere scholen daar minder goed in kunnen slagen.</p><h2>Drie lessen</h2><p>Wat kan Nederland leren van andere landen om meer gelijkwaardige onderwijscondities te realiseren op alle scholen? Drie lessen liggen voor het oprapen. Investeer ten eerste in voldoende goed opgeleide leraren en schoolleiders, want zij hebben de sleutel ervoor in handen. Ten tweede, zorg dat er voldoende ervaren leraren en schoolleiders zijn, juist op scholen waar ze het hardst nodig zijn. Deins er niet voor terug om verschil te maken, want ongelijke condities vragen om ongelijke maatregelen en investeringen.</p><p>En tot slot, behoud de professionele autonomie, oftewel de – internationaal vergeleken – zeer grote mate van vrijheid van Nederlandse scholen om het onderwijs naar eigen visie inhoud en vorm te geven en lesmethoden en leermiddelen te kiezen. Maar verbind hier wel een zwaardere onderwijsinhoudelijke verantwoordingsplicht aan: over de kwaliteit van de school en de ontwikkeling en prestaties van leerlingen die worden gerealiseerd, en over in hoeverre de gekozen onderwijsaanpak stoelt op vakkennis en wetenschappelijke inzichten.</p><p>Want ongelijke onderwijskansen door waar een kind vandaan komt, kun je toeval noemen. Maar ongelijke onderwijskansen doordat het onderwijssysteem functioneert als een loterij voor goed onderwijs, is onacceptabel. Daarmee lopen individuen, de economie en de samenleving heel wat potentieel mis.</p><p><em><strong>Edith Hooge is voorzitter van de Onderwijsraad en hoogleraar onderwijsbestuur aan TIAS, Universiteit van Tilburg. </strong></em></p><p></p>',
                originalArticleId: '1346342',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: false,
                free: false,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: true,
                shortArticle: false,
                fdPersonal: false,
                topic: 'Opinie',
                printTitle:
                    'Nederlands onderwijs kan belofte van grote gelijkmaker steeds minder waarmaken',
                section: 'opinie',
                sectionDirectory: 'opinie',
                sectionTitle: 'Opinie',
                rubric: 'Opinie',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 1093,
                        tag: 'Onderwijsvernieuwing',
                        enabled: true,
                        directory: 'onderwijsvernieuwing',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 7469,
                        tag: 'Basisonderwijs',
                        enabled: true,
                        directory: 'basisonderwijs',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 78301,
                        tag: 'Ministerie van Onderwijs, Cultuur en Wetenschap',
                        enabled: true,
                        directory:
                            'ministerie-van-onderwijs-cultuur-en-wetenschap',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 30113,
                        tag: 'Opinie',
                        enabled: true,
                        introText:
                            'Bij het FD waarderen we de betrokkenheid van onze lezers bij het nieuws. Wilt u zelf een bijdrage leveren? Stuur uw opiniestuk van maximaal 700 woorden naar opinie@fd.nl',
                        tagCategoryType: 'SECTION',
                    },
                    {
                        id: 1734,
                        tag: 'Kinderbijslag',
                        enabled: true,
                        directory: 'kinderbijslag',
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 274,
                        tag: 'Onderwijs',
                        enabled: true,
                        directory: 'onderwijs',
                        tagCategoryType: 'SECTOR',
                    },
                    {
                        id: 37475,
                        tag: 'Opleiding',
                        enabled: true,
                        directory: 'opleiding',
                        tagCategoryType: 'SUBJECT',
                    },
                ],
                articleLength: 'UNLIMITED',
                category: 'OPINION',
                workflow: {
                    workInstructions: '',
                    characterCount: 5756,
                    state: 'READY',
                    plannedDate: 1590962400000,
                    articleCreatedBy: 'Irene de Vries',
                    articleLastModifiedBy: 'Alwine de Jong',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    title:
                        'Onderwijs kan belofte van grote gelijkmaker steeds minder waarmaken',
                    content:
                        'Het kwaliteitsverschil tussen scholen in Nederland groeit en de coronacrisis doet daar een schep bovenop, schrijft Edith Hooge.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 251872,
                        path: '11e598f999368e2a9c9bacfe35f9b2d491126723.jpg',
                        width: 6595,
                        height: 4397,
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
            {
                id: 1328676,
                version: 1,
                title: 'Oranje hesjes protesteren in Italië',
                state: 'PUBLISHED',
                url:
                    '/economie-politiek/1328676/oranje-hesjes-protesteren-in-italie',
                publicationDate: 1591002000000,
                lastModificationDate: 1591077173000,
                genre: 'Het FD',
                authors: [
                    {
                        id: 24102,
                        fullName: 'Han Dirk Hekking',
                    },
                ],
                teasers: {
                    FDMG_WEB_PAGES: {
                        title: 'Oranje hesjes protesteren in Italië ',
                        content:
                            'In deze editie van de Europa-nieuwsbrief van het FD: Italië heeft ook Hesjes! En de verbouwing van de Poolse rechtsstaat vordert gestaag.',
                        type: 'FDMG_WEB_PAGES',
                        image: {
                            pictureId: 251912,
                            path:
                                'dd95412eb619bf6a9b9d817ed970a3b1b226ce56.jpg',
                            width: 5016,
                            height: 3150,
                        },
                    },
                    SOCIAL: {
                        type: 'SOCIAL',
                    },
                    TWITTER: {
                        type: 'TWITTER',
                    },
                },
                content:
                    '<p><strong>Vooruitblikkend en verdiepend: dit is een wekelijkse dosis Europamania — alles wat je moet weten over ontwikkelingen in Europa. In deze editie: Italië heeft ook Hesjes! En de verbouwing van de Poolse rechtsstaat vordert gestaag.</strong></p><fdmg-image><fdmg-id>251913</fdmg-id><fdmg-filename>dd95412eb619bf6a9b9d817ed970a3b1b226ce56.jpg</fdmg-filename><fdmg-width>5016</fdmg-width><fdmg-height>3150</fdmg-height><fdmg-caption>Op het Colosseum in Rome werd zondag de Italiaanse vlag geprojecteerd in het kader van de herdenking van slachtoffers van het coronavirus. </fdmg-caption><fdmg-alt-text /><fdmg-credit>Foto: Reuters</fdmg-credit><fdmg-alignment>block</fdmg-alignment></fdmg-image><h2>1. Hesjes de straat op in Italiaanse steden...</h2><p>Emmanuel Macron wordt vast nog wel eens badend in het zweet wakker van de Gele Hesjes, de protestbeweging die plots opkwam in Frankrijk. De president ging vervolgens <a href="https://fd.nl/economie-politiek/1291472/dankzij-nationaal-debat-met-de-gele-hesjes-komt-macron-weer-op-adem" rel="noopener noreferrer noopener noreferrer" target="_self" title="">de dialoog aan</a> en stelde zijn beleid bij. En hij maakte ruzie met buitenlandse politici zoals Luigi Di Maio van de Vijfsterrenbeweging in Italië, die de Gele Hesjes destijds opzocht voor <a href="https://fd.nl/economie-politiek/1284607/italiaanse-steun-voor-gele-hesjes-ergert-parijs" rel="noopener noreferrer noopener noreferrer" target="_self" title="">een goed gesprek</a> en mogelijk inspiratie.</p><p>Italië heeft nu <a href="https://www.facebook.com/pg/giletarancionimovimento/posts/?ref=page_internal" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">een eigen hesjesbeweging</a>, zij het dat die oranje als kleur omarmt. Dit weekeinde gingen de Oranje Hesjes in zo\'n dertig steden waaronder Florence, Milaan, Turijn en Bologna de straat op om te protesteren tegen de regering. </p><p>De demonstraties waren beperkt qua omvang, maar trokken toch de aandacht. De Oranje Hesjes verzetten zich tegen de coronarestricties van de overheid, en namen dus geen veilige afstand in acht; soms droegen ze geen mondkapjes, tot de ergernis van regionale bestuurders.</p><p>Boegbeeld van de Hesjes is Carabinieri-brigadegeneraal Antonio Pappalardo (73) (<a href="https://www.youtube.com/watch?v=dz1eGTanOS0" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">hier spreekt hij</a> de menigte in Milaan toe), een militair annex politicus annex musicus (hier <a href="https://www.youtube.com/watch?v=9cB36DFH5aU&amp;list=LLWsNMXGfFH04OYlpiDgcOsg&amp;index=128" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">Pappalardo\'s oratorium </a> voor <a href="https://isgeschiedenis.nl/nieuws/moeder-teresa" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">moeder Teresa</a>). In een notendop: de Italiaanse Hesjes vragen om vrijheid en om terugkeer van de lire (prominente leden van de grootste oppositiepartij Lega <a href="https://www.capital.de/wirtschaft-politik/salvini-berater-borghi-der-euro-ist-die-falsche-waehrung-fuer-italien" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">vinden dat ook</a>). Ze zijn tegen de Europese Unie en ook tegen vaccins. Sommige hesjes beweren dat het virus een verzinsel is. </p><h2>... en doen denken aan \'De Hooivorken\'</h2><p>Qua kritiek op de coronarestricties llijkt de \'Gilet Arancioni Movimento\' op <a href="https://www.tagesschau.de/inland/corona-proteste-109.html" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">de protestbeweging</a> die eerder in Duitsland de straat op ging. Maar Pappalardo is al decennia politiek actief, zij het in de marge. De laatste tien jaar had hij wel banden met de Hooivorkbeweging, een organisatie van boeren, burgers en buitenlui die in 2013 even het land lam legde.</p><p>De Hooivorken waren net als de Oranje Hesjes tegen mondialisering, de centrale overheid in Rome, het Europese (landbouw)beleid en bureaucratie. En belastingen en de politiek (lees hier <a href="https://fd.nl/frontpage/economie-politiek/20773/protesten-in-italie-tegen-armoede" rel="noopener noreferrer noopener noreferrer" target="_self" title="">een verhaal uit 2013 </a> van voormalig FD-correspondent Maarten Veeger).</p><p>De Hooivorkbeweging ging uit als een nachtkaars. Maar brigadegeneraal Pappalardo ging niet achter de geraniums zitten. In 2019 haalde hij bij de regionale verkiezingen in Umbrië op het ticket van de Oranje Hesjes <a href="https://elezionistorico.interno.gov.it/index.php?tpel=R&amp;dtel=27/10/2019&amp;tpa=I&amp;tpe=R&amp;lev0=0&amp;levsut0=0&amp;lev1=10&amp;levsut1=1&amp;ne1=10&amp;es0=S&amp;es1=S&amp;ms=S" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">587 stemmen</a>. De betogingen van \'zijn\' hesjes trokken afgelopen weekeinde een veelvoud.</p><h2>2. Polen \'hervormt\' stug door</h2><p>Alle EU-waarschuwingen ten spijt gaat de Poolse regeringspartij PiS door met de verbouwing van de rechterlijke macht in het land. De oogst van een weekje \'hervormen op zijn PiS\': president Andrzej Duda benoemde een PiS-loyalist tot nieuwe president van het hooggerechtshof (SN). En de omstreden tuchtkamer van dat hof komt weer in actie. </p><p>Eerst de benoeming van Malgorzata Manowska. Die kreeg bij een stemming voor de kandidatuur voor het presidentschap van het hooggerechtshof de steun van 25 rechters, de helft minder dan <a href="https://krakow.wyborcza.pl/krakow/7,44425,25970908,kim-jest-prof-wlodzimierz-wrobel-kandydat-na-prezesa-sn-prawnik.html" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">Wlodzimierz Wrobel</a>, een rechter die erom bekendstaat dat hij kritisch staat ten opzichte van regeringspartij PiS. \'Het hof is geen plek dat je zo maar aan politici kan verhuren, geen camping waar iedereen zo maar kan gaan zitten en kan blijven\', zei Wrobel bij een toespraak waarin hij zijn kandidatuur verdedigde.</p><fdmg-text-frame><fdmg-heading>Europamania in je mailbox?</fdmg-heading><fdmg-content>Als je deze nieuwsbrief elke week per mail wilt ontvangen, <a href="https://fd.nl/dossier/europamania" rel="noopener noreferrer noopener noreferrer" target="_self" title="">schrijf je dan hier in</a>.</fdmg-content><fdmg-alignment>block</fdmg-alignment></fdmg-text-frame><p>Dat was duidelijke kritiek op de benoeming bij het hooggerechtshof van politici, naar voren geschoven door de door het parlement gecontroleerde Poolse raad voor de rechtspraak (de KRS, die binnenkort uit het Europese netwerk van raden voor de rechtspraak wordt gezet omdat ze niet onafhankelijk is van de politiek). Maar president Duda (ook PiS) mag zelf weten wie hij kiest uit de vijf kandidaten voor het voorzitterschap van het hof. En dus koos hij Manowska, die sinds twee jaar bij de SN werkt, en een oud-collega van hem is toen hij zelf nog bij justitie zat.</p><p>Nog een juridische ontwikkeling: de rechter Igor Tuleya moet op 9 juni voor de tuchtkamer van het hooggerechtshof verschijnen - de tuchtkamer waarvan het Hof van Justitie van de EU <a href="https://fd.nl/economie-politiek/1340770/eu-hof-maant-warschau-stop-met-tuchtkamer-tegen-rechters" rel="noopener noreferrer noopener noreferrer" target="_self" title="">begin april bepaalde</a> dat ze geen echt gerecht is, want niet onafhankelijk. De tuchtkamer lag even stil, maar nu gaan de disciplinaire zaken tegen rechters gewoon weer door. </p><p>De aanklager verwijt Tuleya, die de justitiële hervormingen vaak heeft bekritiseerd, dat hij de media toeliet bij een sessie over klacht over een besluit van de openbaar aanklager. Dat soort sessies is doorgaans vertrouwelijk, maar rechters kunnen beslissen ze openbaar te maken.</p><p>De Poolse rechter Marek Safjan, verbonden aan het Hof van Justitie van de EU, kwam in een ongebruikelijke actie via een opinieartikel in de Gazeta Wyborcza <a href="https://wyborcza.pl/7,162657,25990867,sedzia-igor-tuleya-przed-izba-dyscyplinarna-to-budzi-obawe.html#S.main_topic-K.C-B.2-L.1.glowka" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">voor Tuleya op.</a></p><fdmg-text-frame><fdmg-heading>Luisteren naar Europamania?</fdmg-heading><fdmg-content>Europamania is ook een podcast van FD en BNR! Elke zaterdag online, met @connorclerx, @RiaCats, @MJSchiffers, @jessepinster en @HanDirk. Editie 36: <a href="https://www.bnr.nl/podcast/europamania/10411625/s1e36-ich-bin-da" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">Ich bin da: de eurobillionstombola</a>.</fdmg-content><fdmg-alignment>block</fdmg-alignment><fdmg-text-frame-image><fdmg-id>251914</fdmg-id><fdmg-filename>153691f2a7af46e66d093bb624fd317d54b558b2.jpg</fdmg-filename></fdmg-text-frame-image></fdmg-text-frame><h2>Waar moeten we deze week op letten?</h2><p>• De Brusselse denktank CEPS heeft <strong>dinsdag</strong> <a href="https://www.ceps.eu/ceps-events/next-generation-eu-in-conversation-with-gert-jan-koopman/" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">een gesprek</a> met Gert Jan Koopman, directeur-generaal begroting bij de Europese Commissie. Uiteraard gaat het over het herstelpakket voor de Europese Commissie en de aangepaste meerjarenbegroting. <a href="https://fd.nl/economie-politiek/1346222/brussels-herstelplan-lijkt-zowaar-wat-bruggen-te-slaan" rel="noopener noreferrer noopener noreferrer" target="_self" title="">Lees het verhaal</a> van FD-Brusselaars Ria Cats en Mathijs Schiffers.</p><p>• Vice-voorzitter van de Europese Commissie Frans Timmermans komt <strong>woensdag</strong> met zijn analyse van nationale energieplannen. </p><p>• <strong>Donderdag</strong> een advies aan het Hof van Justitie van de EU over aansprakelijkheid en stroom. In 2015 legde een enorme stroomstoring een deel van Nederland plat. Papierfabrikant Crown Van Gelder uit Velsen-Noord <a href="http://curia.europa.eu/juris/showPdf.jsf?text=&amp;docid=219917&amp;pageIndex=0&amp;doclang=NL&amp;mode=req&amp;dir=&amp;occ=first&amp;part=1&amp;cid=2219349" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">eist schadevergoeding van Tennet</a>, beheerder van het hoogspanningsnet. Maar kan dat wel? Want CVG heeft geen contractuele relatie met Tennet.</p><p>• Duitsland neemt op 1 juli het EU-voorzitterschap van Kroatië over. <strong>Donderdag</strong> praat de Duitse ambassadeur bij de EU, Michael Clauss, over de <a href="https://www.epc.eu/en/events/Germanys-priorities-for-the-Presidency-of~336c10" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">prioriteiten</a>. Bondskanselier Angela Merkel deed dat <a href="https://www.bundeskanzlerin.de/bkin-de/aktuelles/rede-von-bundeskanzlerin-merkel-im-rahmen-der-veranstaltung-aussen-und-sicherheitspolitik-in-der-deutschen-eu-ratspraesidentschaft-der-konrad-adenauer-stiftung-am-27-mai-2020-1755884" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">vorige week</a>. </p><p>• De EU-ministers van telecom spreken elkaar <strong>vrijdag</strong> over onder meer kunstmatige intelligentie. Lees hier de <a href="https://www.rijksoverheid.nl/documenten/kamerstukken/2020/05/26/bijlage-non-paper-eu-respons-digitalisering-in-herstelstrategie-na-covid-19" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">Nederlandse inbreng</a>.</p><h2>Meer lezen?</h2><p><strong>Noodtoestand</strong> Hongarije kondigde eerder <a href="https://fd.nl/economie-politiek/1345082/orban-kondigt-einde-van-de-noodtoestand-aan" rel="noopener noreferrer noopener noreferrer" target="_self" title="">een einde van de noodtoestand</a> aan die premier Viktor Orbán bijna onbeperkte bevoegdheden gaf. Mensenrechtenorganisatie HRW vindt dat we ons <a href="https://www.hrw.org/news/2020/05/29/ending-hungarys-state-emergency-wont-end-authoritarianism" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">niet moeten laten foppen</a> door het opheffen van de \'staat van gevaar\'. Met de bijbehorende wet kan Orbán grotendeels per decreet blijven regeren, stelt HRW.</p><p><strong>Reken je niet rijk</strong> Een Duitse rechter van het Constitutionele Hof <a href="https://dprv.eu/index.php/aktuelles" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">waarschuwt Poolse collega\'s</a> dat ze zich niet zomaar kunnen onttrekken aan arresten van het Hof van Justitie van de EU. Oh, en de conservatieve Frankfurter Allgemeine Zeitung omarmde het arrest van \'Karlsruhe\', maar de FAZ heeft ook <a href="https://zeitung.faz.net/faz/wirtschaft/2020-05-29/718c1aa2c02646120c1229e71d9533e5/?GEPC=s5" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">een opiniepagina</a>. Bij de ECB is ondertussen <a href="https://www.ecb.europa.eu/press/inter/date/2020/html/ecb.in200527~2e4cb22bf4.en.html" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">weinig veranderd</a>.</p><p><strong>Corona </strong> Zijn autoritaire regeringen bij de coronacrisis beter in staat de mobiliteit van burgers te beperken? En maakt het uit of een maatschappij indivualistischer of niet? Daar gaat <a href="https://voxeu.org/article/covid-19-and-future-democracy" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">deze analyse</a> over. </p><p><strong>Herinnert u zich deze nog?</strong> De Sovjetunie bestaat al lang niet meer. Maar hoe zat de economie daarvan eigenlijk in elkaar? De Amerikaanse hoogleraar Peter Boettke <a href="https://www.econlib.org/five-books-on-the-soviet-economy/" rel="noopener noreferrer noopener noreferrer" target="_blank" title="">geeft leestips</a>.</p><p><em>FD Europamania wordt geschreven door </em><a href="https://twitter.com/HanDirk" rel="noopener noreferrer noopener noreferrer" target="_blank" title=""><em>Han Dirk Hekking</em></a><em>.</em><em> </em><em>Volg ook onze FD-Brusselaars </em><a href="https://fd.nl/auteur/ria-cats" rel="noopener noreferrer noopener noreferrer" target="_self" title=""><em>Ria Cats</em></a><em> en </em><a href="https://fd.nl/auteur/mathijs-schiffers" rel="noopener noreferrer noopener noreferrer" target="_self" title=""><em>Mathijs Schiffers</em></a><em>. Heb je opmerkingen of nieuws? Laat het weten via feedback@fd.nl. Tot volgende week! </em> </p>',
                originalArticleId: '1345954',
                sourceOrigin: 'webwriter',
                sourceChannel: 'fd_web',
                disallowComments: true,
                free: true,
                showRelatedArticles: true,
                doNotIndex: false,
                doAutoTag: false,
                shortArticle: false,
                fdPersonal: false,
                section: 'economie-politiek',
                sectionDirectory: 'economie-politiek',
                sectionTitle: 'Economie & Politiek',
                articleType: 'ARTICLE',
                tags: [
                    {
                        id: 6,
                        tag: 'EU',
                        enabled: true,
                        introText:
                            'Afkorting van Europese Unie. De Unie bestaat uit 28 landen en is het belangrijkste samenwerkingsverband in Europa. ',
                        directory: 'eu',
                        tagCategoryType: 'ORGANIZATION',
                    },
                    {
                        id: 90001,
                        tag: 'Europamania',
                        enabled: true,
                        tagCategoryType: 'SUBJECT',
                    },
                    {
                        id: 49302,
                        tag: 'Frans Timmermans',
                        enabled: true,
                        directory: 'frans-timmermans',
                        tagCategoryType: 'PERSON',
                    },
                    {
                        id: 79101,
                        tag: 'Het FD',
                        enabled: true,
                        directory: 'het-fd',
                        tagCategoryType: 'SECTOR',
                    },
                ],
                articleLength: 'UNLIMITED',
                category: 'NEWS',
                workflow: {
                    workInstructions: '',
                    characterCount: 7263,
                    state: 'READY',
                    articleCreatedBy: 'Han Dirk Hekking',
                    articleLastModifiedBy: 'Han Dirk Hekking',
                },
                fullWidth: false,
                decoupled: false,
                newWindow: false,
                thirdParty: false,
                programArticle: false,
                podcastArticle: false,
                columnistArticle: false,
                hasAudio: false,
                teaser: {
                    title: 'Oranje hesjes protesteren in Italië ',
                    content:
                        'In deze editie van de Europa-nieuwsbrief van het FD: Italië heeft ook Hesjes! En de verbouwing van de Poolse rechtsstaat vordert gestaag.',
                    type: 'FDMG_WEB_PAGES',
                    image: {
                        pictureId: 251912,
                        path: 'dd95412eb619bf6a9b9d817ed970a3b1b226ce56.jpg',
                        width: 5016,
                        height: 3150,
                    },
                },
                socialTeaser: {
                    type: 'SOCIAL',
                },
                twitterTeaser: {
                    type: 'TWITTER',
                },
            },
        ],
        allArticleIds: [
            1329318,
            1329322,
            1328642,
            1324449,
            1328654,
            1328664,
            1328676,
        ],
        tertiaryCardsEmpty: false,
        quaternaryCardsEmpty: true,
    },
    allNewsModel: {
        longReadTeasers: [],
        newsTeasers: [
            {
                title:
                    "'Als Uefa het EK-logo had aangepast, hadden we een probleem gehad'",
                publicationTime: '06:00',
                publicationUrl:
                    '/ondernemen/1329547/als-uefa-het-ek-logo-had-aangepast-hadden-we-een-probleem-gehad',
                markedAsRead: false,
            },
            {
                title:
                    'Vegaburger-fabrikant Beyond Meat opent Europees bruggenhoofd in Nederland',
                publicationTime: '06:00',
                publicationUrl:
                    '/economie-politiek/1329546/vegaburger-fabrikant-beyond-meat-opent-europees-bruggenhoofd-in-nederland',
                markedAsRead: false,
            },
            {
                title:
                    "'Coronacrisis versnelt omslag op Europese arbeidsmarkt'",
                publicationTime: '06:00',
                publicationUrl:
                    '/economie-politiek/1329545/coronacrisis-versnelt-omslag-op-europese-arbeidsmarkt',
                markedAsRead: false,
            },
            {
                title: 'Zorgkosten sinds 2009 niet zo hard gestegen',
                publicationTime: '00:01',
                publicationUrl:
                    '/economie-politiek/1329549/zorgkosten-sinds-2009-niet-zo-hard-gestegen',
                markedAsRead: false,
            },
        ],
        beursTeasers: [
            {
                title: 'Live: Beurzen in mineur na boodschap Fed',
                publicationTime: '07:00',
                publicationUrl:
                    '/beurs/1329541/live-beurzen-in-mineur-na-boodschap-fed',
                markedAsRead: false,
            },
        ],
        opinionTeasers: [
            {
                title: 'Het rijke noorden?',
                publicationTime: '06:00',
                publicationUrl: '/opinie/1329544/het-rijke-noorden',
                markedAsRead: false,
            },
        ],
        futuresTeasers: [
            {
                title: 'Het bestaat: wifi die wél werkt',
                publicationTime: '06:34',
                publicationUrl:
                    '/futures/1329542/het-bestaat-wifi-die-wel-werkt',
                markedAsRead: false,
            },
        ],
        persoonlijkTeasers: [
            {
                title: 'Vader mag nu ook met babyverlof',
                publicationTime: '06:15',
                publicationUrl:
                    '/persoonlijk/1329543/vader-mag-nu-ook-met-babyverlof',
                markedAsRead: false,
            },
        ],
        longReadBeursAndOpinionTeasersEmpty: false,
        persoonlijkTeasersEmpty: false,
        futuresTeasersEmpty: false,
        longReadTeasersEmpty: true,
        newsTeasersEmpty: false,
        beursTeasersEmpty: false,
        futuresAndPersoonlijkTeasersEmpty: false,
        opinionTeasersEmpty: false,
    },
};

export async function getPayload(params: any) {
    let payload: any = data;
    try {
        payload = await timeout(
            5000,
            fetch(
                `https://dev.fd.nl/${params?.section ?? ''}${
                    process.env.URL_PARAMS
                }`,
                {
                    headers: {
                        Authorization: process.env.DEV_AUTHORIZATION,
                        'User-Agent': process.env.USER_AGENT,
                        'X-FDMG-Json': process.env.X_FDMG_JSON,
                        'X-Forwarded-For': process.env.X_FORWARDED_FOR,
                    },
                    referrerPolicy: 'no-referrer',
                }
            )
        ).then((res) => res.json());
    } catch (e) {
        console.error(e);
    }
    return payload;
}

async function getArticle(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(await getPayload(req.query)));
}

export default cors(getArticle);
