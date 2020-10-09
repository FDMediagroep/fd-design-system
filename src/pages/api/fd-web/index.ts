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
        sectionModels: [
            {
                defaultCategoryModel: null,
                compactCategoryModel: null,
                partnersModel: null,
                singleBanner: {
                    id: 'Home/Mid11',
                },
            },
            {
                defaultCategoryModel: {
                    id: 'section-specials0',
                    title: 'Coronavirus',
                    overviewPageUrl: '/tag/coronavirus',
                    overviewPageButtonTitle: 'Meer over Coronavirus',
                    overviewPageButtonStyle: 'GREEN',
                    dataSection: 'specials0',
                    cards: [
                        {
                            id: 1341180,
                            title: 'Corona-app zaterdag landelijk ingevoerd',
                            intro:
                                'De app kan een belangrijk hulpmiddel zijn bij het opsporen van mensen die mogelijk besmet zijn met het virus.',
                            topicPrefixOrCategory: 'Coronavirus',
                            publicationUrl:
                                '/economie-politiek/1341180/corona-app-zaterdag-landelijk-ingevoerd',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/7ccd368b5ad8fa6ff0bce7249fc87329e59b0336.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/7ccd368b5ad8fa6ff0bce7249fc87329e59b0336.jpg?rect=.3025%2c.0%2c.66625%2c.9999999999999999&fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/7ccd368b5ad8fa6ff0bce7249fc87329e59b0336.jpg?rect=.0%2c.1519699812382739%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format,compress',
                                caption: null,
                                backgroundColor: null,
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                        {
                            id: 1341168,
                            title:
                                'Mondkapjesbeleid verpleeghuizen was vooral ingegeven door schaarste ',
                            intro:
                                'Al in januari was het voor ambtelijke top duidelijk dat schaarste aan beschermingsmiddelen een probleem zou worden, blijkt uit vrijgegeven stukken. ',
                            topicPrefixOrCategory: 'Coronavirus',
                            publicationUrl:
                                '/economie-politiek/1341168/mondkapjesbeleid-verpleeghuizen-was-vooral-ingegeven-door-schaarste',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/29a5245ede963d4f7845a93a73aa969f09fb3c38.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/29a5245ede963d4f7845a93a73aa969f09fb3c38.jpg?rect=.13125%2c.0%2c.66625%2c.9999999999999999&fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/29a5245ede963d4f7845a93a73aa969f09fb3c38.jpg?rect=.0%2c.0225140712945591%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format,compress',
                                caption: null,
                                backgroundColor: null,
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                        {
                            id: 1341177,
                            title:
                                'Vraag naar luxevoedsel maakt visboer coronaproof',
                            intro:
                                'De economische crisis gaat aan de meeste visverkopers voorbij. Zij spelen in op de behoefte aan luxe kook-ingrediënten nu consumenten minder vaak buiten de deur eten.',
                            topicPrefixOrCategory: 'Detailhandel',
                            publicationUrl:
                                '/ondernemen/1341177/vraag-naar-luxevoedsel-maakt-visboer-coronaproof',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/9f8d7740a44b42202b022ece83cb873d35dd18d6.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/9f8d7740a44b42202b022ece83cb873d35dd18d6.jpg?rect=.28875%2c.0%2c.66625%2c.9999999999999999&fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/9f8d7740a44b42202b022ece83cb873d35dd18d6.jpg?rect=.0%2c.050656660412758%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format,compress',
                                caption: null,
                                backgroundColor: null,
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                        {
                            id: 1341062,
                            title:
                                'Coronawet maakt geen einde aan verwarring over coronaregels ',
                            intro:
                                'De vele (regionale) uitzonderingsbepalingen in de wet ondergraven een eenduidige crisisaanpak door het kabinet. Kijk naar Staphorst, waar dit weekend grote maatschappelijke ophef ontstond over drie druk bezochte kerkdiensten.',
                            topicPrefixOrCategory: 'Den Haag deze week',
                            publicationUrl:
                                '/economie-politiek/1341062/coronawet-maakt-geen-einde-aan-verwarring-over-coronaregels',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/8faa2a03140558e15581fdd92d8eea070cff3071.jpg?fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/8faa2a03140558e15581fdd92d8eea070cff3071.jpg?fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/8faa2a03140558e15581fdd92d8eea070cff3071.jpg?fit=crop&crop=faces&auto=format,compress',
                                caption: null,
                                backgroundColor: null,
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                    ],
                    greenOverviewPageButton: true,
                },
                compactCategoryModel: null,
                partnersModel: null,
                singleBanner: null,
            },
            {
                defaultCategoryModel: null,
                compactCategoryModel: null,
                partnersModel: null,
                singleBanner: {
                    id: 'Home/Mid12',
                },
            },
            {
                defaultCategoryModel: null,
                compactCategoryModel: {
                    id: 'section-news',
                    title: 'Nieuws',
                    overviewPageUrl: '/nieuws',
                    overviewPageButtonTitle: 'Meer nieuws',
                    overviewPageButtonStyle: 'GREEN',
                    dataSection: 'news',
                    cards: [
                        {
                            id: 1341444,
                            title:
                                'Oud-ceo zuivelexporteur Fonterra gaat bedrijven adviseren bij verduurzaming',
                            intro:
                                'The Purpose Factory richt zich in eerste instantie op familiebedrijven in voedingsmiddelen, maar ook op fabrikanten van veel verkochte consumentenartikelen of modebedrijven.',
                            topicPrefixOrCategory: 'Diensten',
                            publicationUrl:
                                '/ondernemen/1341444/oud-ceo-zuivelexporteur-fonterra-gaat-bedrijven-adviseren-bij-verduurzaming',
                            latestUpdate: {
                                date: null,
                            },
                            recommended: false,
                            readingTime: 0,
                            newWindow: false,
                        },
                        {
                            id: 1341446,
                            title:
                                'Eén muisklik en alle cookies staan voor altijd uit ',
                            intro:
                                'Amerikaans collectief lanceert software die het weigeren van allerlei soorten cookies automatiseert',
                            topicPrefixOrCategory: 'Tech en media',
                            publicationUrl:
                                '/ondernemen/1341446/een-muisklik-en-alle-cookies-staan-voor-altijd-uit',
                            latestUpdate: {
                                date: null,
                            },
                            recommended: false,
                            readingTime: 0,
                            newWindow: false,
                        },
                        {
                            id: 1341447,
                            title:
                                'Prijzen nieuwbouw blijven stijgen, maar iets minder hard',
                            intro:
                                "In het tweede kwartaal was de gemiddelde nieuwbouwwoning met €410.000 zo'n 4% duurder dan een jaar eerder. Dat is de kleinste prijsstijging in bijna vier jaar, meldt het CBS.",
                            topicPrefixOrCategory: 'Woningmarkt',
                            publicationUrl:
                                '/economie-politiek/1341447/prijzen-nieuwbouw-blijven-stijgen-maar-iets-minder-hard',
                            latestUpdate: {
                                date: null,
                            },
                            recommended: false,
                            readingTime: 0,
                            newWindow: false,
                        },
                        {
                            id: 1341448,
                            title:
                                'Maxime Verhagen twee jaar langer voorzitter Bouwend Nederland',
                            intro:
                                "'De uitdagingen die de sector heeft als gevolg van onder meer corona en de nog steeds niet opgeloste stikstofproblematiek waren voor het Dagelijks Bestuur reden Verhagen voor een extra twee jaar voor te dragen als voorzitter.'",
                            topicPrefixOrCategory: 'Bouw',
                            publicationUrl:
                                '/economie-politiek/1341448/maxime-verhagen-twee-jaar-langer-voorzitter-bouwend-nederland',
                            latestUpdate: {
                                date: null,
                            },
                            recommended: false,
                            readingTime: 0,
                            newWindow: false,
                        },
                        {
                            id: 1341449,
                            title:
                                'IMF: rondwarend virus bedreigt herstel van de economie',
                            intro:
                                'Regeringen moeten alles op alles zetten om het coronavirus echt onder controle krijgen. Doen ze dat niet, dan zullen economieën niet goed herstellen, waarschuwt het Internationaal Monetair Fonds.',
                            topicPrefixOrCategory: 'Macro-economie',
                            publicationUrl:
                                '/economie-politiek/1341449/imf-rondwarend-virus-bedreigt-herstel-van-de-economie',
                            latestUpdate: {
                                date: null,
                            },
                            recommended: false,
                            readingTime: 0,
                            newWindow: false,
                        },
                        {
                            id: 1341451,
                            title:
                                'Recordaantal besmettingen, De Jonge sluit nieuwe maatregelen niet uit ',
                            intro:
                                'Kabinet praat vrijdag over nieuwe maatregelen die kunnen ingaan als de cijfers komend weekend blijven stijgen. Mogelijk moet de horeca nog eerder dicht.',
                            topicPrefixOrCategory: 'Coronavirus',
                            publicationUrl:
                                '/economie-politiek/1341451/recordaantal-besmettingen-de-jonge-sluit-nieuwe-maatregelen-niet-uit',
                            latestUpdate: {
                                date: null,
                            },
                            recommended: false,
                            readingTime: 0,
                            newWindow: false,
                        },
                        {
                            id: 1341452,
                            title:
                                'Naming and shaming: minister noemt namen van webhosters die kinderporno niet verwijderen ',
                            intro:
                                'Minister Grapperhaus (Justitie en Veiligheid) heeft besloten de slechtst presterende bedrijven met naam en toenaam te noemen.',
                            topicPrefixOrCategory: 'ICT-diensten',
                            publicationUrl:
                                '/economie-politiek/1341452/naming-and-shaming-minister-noemt-namen-van-webhosters-die-kinderporno-niet-verwijderen',
                            latestUpdate: {
                                date: null,
                            },
                            recommended: false,
                            readingTime: 0,
                            newWindow: false,
                        },
                        {
                            id: 1341456,
                            title:
                                'Betaalbedrijf Square koopt voor $50 mln aan bitcoins',
                            intro:
                                'De investering vertegenwoordigt ongeveer 1% van de totale activa van Square aan het einde van het tweede kwartaal van 2020.',
                            topicPrefixOrCategory: 'Banken',
                            publicationUrl:
                                '/ondernemen/1341456/betaalbedrijf-square-koopt-voor-50-mln-aan-bitcoins',
                            latestUpdate: {
                                date: null,
                            },
                            recommended: false,
                            readingTime: 0,
                            newWindow: false,
                        },
                    ],
                    secondRowCards: [
                        {
                            id: 1341449,
                            title:
                                'IMF: rondwarend virus bedreigt herstel van de economie',
                            intro:
                                'Regeringen moeten alles op alles zetten om het coronavirus echt onder controle krijgen. Doen ze dat niet, dan zullen economieën niet goed herstellen, waarschuwt het Internationaal Monetair Fonds.',
                            topicPrefixOrCategory: 'Macro-economie',
                            publicationUrl:
                                '/economie-politiek/1341449/imf-rondwarend-virus-bedreigt-herstel-van-de-economie',
                            latestUpdate: {
                                date: null,
                            },
                            recommended: false,
                            readingTime: 0,
                            newWindow: false,
                        },
                        {
                            id: 1341451,
                            title:
                                'Recordaantal besmettingen, De Jonge sluit nieuwe maatregelen niet uit ',
                            intro:
                                'Kabinet praat vrijdag over nieuwe maatregelen die kunnen ingaan als de cijfers komend weekend blijven stijgen. Mogelijk moet de horeca nog eerder dicht.',
                            topicPrefixOrCategory: 'Coronavirus',
                            publicationUrl:
                                '/economie-politiek/1341451/recordaantal-besmettingen-de-jonge-sluit-nieuwe-maatregelen-niet-uit',
                            latestUpdate: {
                                date: null,
                            },
                            recommended: false,
                            readingTime: 0,
                            newWindow: false,
                        },
                        {
                            id: 1341452,
                            title:
                                'Naming and shaming: minister noemt namen van webhosters die kinderporno niet verwijderen ',
                            intro:
                                'Minister Grapperhaus (Justitie en Veiligheid) heeft besloten de slechtst presterende bedrijven met naam en toenaam te noemen.',
                            topicPrefixOrCategory: 'ICT-diensten',
                            publicationUrl:
                                '/economie-politiek/1341452/naming-and-shaming-minister-noemt-namen-van-webhosters-die-kinderporno-niet-verwijderen',
                            latestUpdate: {
                                date: null,
                            },
                            recommended: false,
                            readingTime: 0,
                            newWindow: false,
                        },
                        {
                            id: 1341456,
                            title:
                                'Betaalbedrijf Square koopt voor $50 mln aan bitcoins',
                            intro:
                                'De investering vertegenwoordigt ongeveer 1% van de totale activa van Square aan het einde van het tweede kwartaal van 2020.',
                            topicPrefixOrCategory: 'Banken',
                            publicationUrl:
                                '/ondernemen/1341456/betaalbedrijf-square-koopt-voor-50-mln-aan-bitcoins',
                            latestUpdate: {
                                date: null,
                            },
                            recommended: false,
                            readingTime: 0,
                            newWindow: false,
                        },
                    ],
                    greenOverviewPageButton: true,
                    firstRowCards: [
                        {
                            id: 1341444,
                            title:
                                'Oud-ceo zuivelexporteur Fonterra gaat bedrijven adviseren bij verduurzaming',
                            intro:
                                'The Purpose Factory richt zich in eerste instantie op familiebedrijven in voedingsmiddelen, maar ook op fabrikanten van veel verkochte consumentenartikelen of modebedrijven.',
                            topicPrefixOrCategory: 'Diensten',
                            publicationUrl:
                                '/ondernemen/1341444/oud-ceo-zuivelexporteur-fonterra-gaat-bedrijven-adviseren-bij-verduurzaming',
                            latestUpdate: {
                                date: null,
                            },
                            recommended: false,
                            readingTime: 0,
                            newWindow: false,
                        },
                        {
                            id: 1341446,
                            title:
                                'Eén muisklik en alle cookies staan voor altijd uit ',
                            intro:
                                'Amerikaans collectief lanceert software die het weigeren van allerlei soorten cookies automatiseert',
                            topicPrefixOrCategory: 'Tech en media',
                            publicationUrl:
                                '/ondernemen/1341446/een-muisklik-en-alle-cookies-staan-voor-altijd-uit',
                            latestUpdate: {
                                date: null,
                            },
                            recommended: false,
                            readingTime: 0,
                            newWindow: false,
                        },
                        {
                            id: 1341447,
                            title:
                                'Prijzen nieuwbouw blijven stijgen, maar iets minder hard',
                            intro:
                                "In het tweede kwartaal was de gemiddelde nieuwbouwwoning met €410.000 zo'n 4% duurder dan een jaar eerder. Dat is de kleinste prijsstijging in bijna vier jaar, meldt het CBS.",
                            topicPrefixOrCategory: 'Woningmarkt',
                            publicationUrl:
                                '/economie-politiek/1341447/prijzen-nieuwbouw-blijven-stijgen-maar-iets-minder-hard',
                            latestUpdate: {
                                date: null,
                            },
                            recommended: false,
                            readingTime: 0,
                            newWindow: false,
                        },
                        {
                            id: 1341448,
                            title:
                                'Maxime Verhagen twee jaar langer voorzitter Bouwend Nederland',
                            intro:
                                "'De uitdagingen die de sector heeft als gevolg van onder meer corona en de nog steeds niet opgeloste stikstofproblematiek waren voor het Dagelijks Bestuur reden Verhagen voor een extra twee jaar voor te dragen als voorzitter.'",
                            topicPrefixOrCategory: 'Bouw',
                            publicationUrl:
                                '/economie-politiek/1341448/maxime-verhagen-twee-jaar-langer-voorzitter-bouwend-nederland',
                            latestUpdate: {
                                date: null,
                            },
                            recommended: false,
                            readingTime: 0,
                            newWindow: false,
                        },
                    ],
                },
                partnersModel: null,
                singleBanner: null,
            },
            {
                defaultCategoryModel: null,
                compactCategoryModel: null,
                partnersModel: null,
                singleBanner: {
                    id: 'Home/Mid8',
                },
            },
            {
                defaultCategoryModel: {
                    id: 'section-background',
                    title: 'Achtergrond',
                    overviewPageUrl: '/achtergrond',
                    overviewPageButtonTitle: 'Meer achtergrond',
                    overviewPageButtonStyle: 'RED',
                    dataSection: 'background',
                    cards: [
                        {
                            id: 1341169,
                            title:
                                'In South Carolina wordt de toekomst van het Trumpisme bepaald',
                            intro:
                                'Dankzij de Democraat Jaime Harrison, jong en Afro-Amerikaan, is de staat in het zuiden ineens model komen te staan voor de vraag: zijn de dagen van Trump geteld of zit er nog vier jaar in het vat?',
                            topicPrefixOrCategory: 'Buitenland',
                            publicationUrl:
                                '/achtergrond/1341169/in-south-carolina-wordt-de-toekomst-van-het-trumpisme-bepaald',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/d0c79eaba32094fc5df923ec0859f4bafed71691.png?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/d0c79eaba32094fc5df923ec0859f4bafed71691.png?rect=.12%2c.0%2c.66625%2c.9999999999999999&fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/d0c79eaba32094fc5df923ec0859f4bafed71691.png?rect=.0%2c.0787992495309568%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format,compress',
                                caption: null,
                                backgroundColor: null,
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: true,
                            newWindow: false,
                        },
                    ],
                    greenOverviewPageButton: false,
                },
                compactCategoryModel: null,
                partnersModel: null,
                singleBanner: null,
            },
            {
                defaultCategoryModel: null,
                compactCategoryModel: null,
                partnersModel: {
                    banners: [
                        {
                            id: 'Home/Mid2',
                        },
                        {
                            id: 'Home/Mid3',
                        },
                        {
                            id: 'Home/Mid4',
                        },
                        {
                            id: 'Home/Mid5',
                        },
                    ],
                },
                singleBanner: null,
            },
            {
                defaultCategoryModel: {
                    id: 'section-specials1',
                    title: 'Verenigde Staten!',
                    overviewPageUrl: '/tag/verenigde-staten',
                    overviewPageButtonTitle: 'Meer over Verenigde Staten!',
                    overviewPageButtonStyle: 'GREEN',
                    dataSection: 'specials1',
                    cards: [
                        {
                            id: 1340168,
                            title: 'Wat levert een WeTransfer-linkje op?',
                            intro:
                                'WeTransfer is een groot Nederlands techsucces. Maar wat verdient het bedrijf eigenlijk per downloadlink?',
                            topicPrefixOrCategory: 'Bartjens',
                            publicationUrl:
                                '/beurs/1340168/wat-levert-een-wetransfer-linkje-op',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/db45a5e6026b16eb058e592103cfd1d22feac35d.jpg?fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/db45a5e6026b16eb058e592103cfd1d22feac35d.jpg?fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/db45a5e6026b16eb058e592103cfd1d22feac35d.jpg?fit=crop&crop=faces&auto=format,compress',
                                caption: 'Bartjens',
                                backgroundColor: 'theme7',
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                        {
                            id: 1340077,
                            title:
                                'Trumps streng katholieke rechter verdeelt de geesten',
                            intro:
                                'Democraten vrezen conservatief Hooggerechtshof na voordracht Amy Coney Barrett',
                            topicPrefixOrCategory: 'Buitenland',
                            publicationUrl:
                                '/economie-politiek/1340077/trumps-streng-katholieke-rechter-verdeelt-de-geesten',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/c912e7b77e8732963727a887273f8dcc0fbc1e85.jpg?fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/c912e7b77e8732963727a887273f8dcc0fbc1e85.jpg?fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/c912e7b77e8732963727a887273f8dcc0fbc1e85.jpg?fit=crop&crop=faces&auto=format,compress',
                                caption: null,
                                backgroundColor: null,
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                        {
                            id: 1339953,
                            title:
                                'Strijd Amazon, Google en Microsoft om onlinegaming brandt los',
                            intro:
                                'Amazon lanceerde donderdag een online platform voor games, genaamd Luna. Met deze - al langer verwachte stap- gaat het bedrijf de strijd aan met rivalen Google en Microsoft.',
                            topicPrefixOrCategory: 'Tech en media',
                            publicationUrl:
                                '/ondernemen/1339953/strijd-amazon-google-en-microsoft-om-onlinegaming-brandt-los',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/7ExzLfQDyoyFd-cLCtXDQJ33_ls.jpg?fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/7ExzLfQDyoyFd-cLCtXDQJ33_ls.jpg?fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/7ExzLfQDyoyFd-cLCtXDQJ33_ls.jpg?fit=crop&crop=faces&auto=format,compress',
                                caption: null,
                                backgroundColor: null,
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                        {
                            id: 1339867,
                            title:
                                'Eindhovens hightechbedrijf profiteert van wegvallen Turkse onderdelenproductie voor JSF',
                            intro:
                                'KMWE hoopt dat eenmalige proefopdracht van Pratt &amp; Whitney leidt tot langetermijncontract.',
                            topicPrefixOrCategory: 'Industrie',
                            publicationUrl:
                                '/ondernemen/1339867/eindhovens-hightechbedrijf-profiteert-van-wegvallen-turkse-onderdelenproductie-voor-jsf',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/0a4cda89b259a79d17a18177a7d634248976d42a.jpg?fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/0a4cda89b259a79d17a18177a7d634248976d42a.jpg?fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/0a4cda89b259a79d17a18177a7d634248976d42a.jpg?fit=crop&crop=faces&auto=format,compress',
                                caption: null,
                                backgroundColor: null,
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                    ],
                    greenOverviewPageButton: true,
                },
                compactCategoryModel: null,
                partnersModel: null,
                singleBanner: null,
            },
            {
                defaultCategoryModel: null,
                compactCategoryModel: null,
                partnersModel: {
                    banners: [
                        {
                            id: 'Home/Mid9',
                        },
                        {
                            id: 'Home/Mid10',
                        },
                    ],
                },
                singleBanner: null,
            },
            {
                defaultCategoryModel: null,
                compactCategoryModel: null,
                partnersModel: null,
                singleBanner: {
                    id: 'Home/Mid13',
                },
            },
            {
                defaultCategoryModel: {
                    id: 'section-stocks',
                    title: 'Beurs',
                    overviewPageUrl: '/beurs',
                    overviewPageButtonTitle: 'Meer beurs',
                    overviewPageButtonStyle: 'GREEN',
                    dataSection: 'stocks',
                    cards: [
                        {
                            id: 1341484,
                            title: "Tweedehandsauto's als indicator",
                            intro:
                                "De prijzen van tweedehandsauto's stijgen sterk in zowel de VS als Turkije. Wat zegt dit over de inflatie in die landen?",
                            topicPrefixOrCategory: 'Column',
                            publicationUrl:
                                '/beurs/1341484/tweedehandsauto-s-als-indicator',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/3f0fcd9bfbed0d8f118a8e1f436a9aabf4ce510d.jpg?fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/3f0fcd9bfbed0d8f118a8e1f436a9aabf4ce510d.jpg?fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/3f0fcd9bfbed0d8f118a8e1f436a9aabf4ce510d.jpg?fit=crop&crop=faces&auto=format,compress',
                                caption: 'Corné van Zeijl',
                                backgroundColor: 'theme7',
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                    ],
                    greenOverviewPageButton: true,
                },
                compactCategoryModel: null,
                partnersModel: null,
                singleBanner: null,
            },
            {
                defaultCategoryModel: null,
                compactCategoryModel: null,
                partnersModel: null,
                singleBanner: {
                    id: 'Home/Mid14',
                },
            },
            {
                defaultCategoryModel: {
                    id: 'section-opinion',
                    title: 'Columns & Opinie',
                    overviewPageUrl: '/columns-en-opinie',
                    overviewPageButtonTitle: 'Meer columns & opinie',
                    overviewPageButtonStyle: 'GREEN',
                    dataSection: 'opinion',
                    cards: [
                        {
                            id: 1341443,
                            title: 'Hup Wiebes ',
                            intro:
                                'Als we dan toch windmolens willen, bouw die dan in de Randstad! Brede lanen zoals de Apollolaan in Amsterdam zijn uitstekend geschikt.',
                            topicPrefixOrCategory: 'Kleintje Groot',
                            publicationUrl: '/opinie/1341443/hup-wiebes',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/bd426d8e140cd2b07ee8e4ee8e4c70e4bc9dd3b4.jpg?fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/bd426d8e140cd2b07ee8e4ee8e4c70e4bc9dd3b4.jpg?fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/bd426d8e140cd2b07ee8e4ee8e4c70e4bc9dd3b4.jpg?fit=crop&crop=faces&auto=format,compress',
                                caption: 'Ed Groot',
                                backgroundColor: 'theme7',
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                        {
                            id: 1341453,
                            title: 'Pas op voor wensdenken bij waterstof',
                            intro:
                                'Als argument voor een financieel zetje in de rug voor waterstof, trekken bedrijven een parallel met wind op zee. Maar die vergelijking gaat mank. ',
                            topicPrefixOrCategory: 'Commentaar',
                            publicationUrl:
                                '/opinie/1341453/pas-op-voor-wensdenken-bij-waterstof',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/7bdd32be08d52fa55cbdaf73f864809339a7da27.jpg?fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/7bdd32be08d52fa55cbdaf73f864809339a7da27.jpg?fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/7bdd32be08d52fa55cbdaf73f864809339a7da27.jpg?fit=crop&crop=faces&auto=format,compress',
                                caption: 'Commentaar',
                                backgroundColor: 'theme7',
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                        {
                            id: 1341488,
                            title: 'Wie stopt purpose?',
                            intro:
                                'Je komt ze steeds meer tegen: vage, zweverige Engelse termen. Maar wat er dan precies met het woord bedoeld wordt, is onduidelijk.',
                            topicPrefixOrCategory: 'Column',
                            publicationUrl: '/opinie/1341488/wie-stopt-purpose',
                            image: null,
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                        {
                            id: 1341344,
                            title: 'Investeringskorting',
                            intro:
                                'Wie wil weten welke lobby’s in ons land het meest invloedrijk zijn, kijkt naar de fiscale aftrekposten. ',
                            topicPrefixOrCategory: 'Kleintje Groot',
                            publicationUrl:
                                '/opinie/1341344/investeringskorting',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/bd426d8e140cd2b07ee8e4ee8e4c70e4bc9dd3b4.jpg?fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/bd426d8e140cd2b07ee8e4ee8e4c70e4bc9dd3b4.jpg?fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/bd426d8e140cd2b07ee8e4ee8e4c70e4bc9dd3b4.jpg?fit=crop&crop=faces&auto=format,compress',
                                caption: 'Ed Groot',
                                backgroundColor: 'theme7',
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                    ],
                    greenOverviewPageButton: true,
                },
                compactCategoryModel: null,
                partnersModel: null,
                singleBanner: null,
            },
            {
                defaultCategoryModel: {
                    id: 'section-futures',
                    title: 'Tech & Innovatie',
                    overviewPageUrl: '/tech-en-innovatie',
                    overviewPageButtonTitle: 'Meer tech & innovatie',
                    overviewPageButtonStyle: 'GREEN',
                    dataSection: 'futures',
                    cards: [
                        {
                            id: 1341387,
                            title:
                                'Hoe jouw kleine bijdrage kan leiden tot een grote sprong voorwaarts',
                            intro:
                                'Vele kleine stapjes kunnen leiden tot klimaatverandering, of een nieuwe corona-uitbraak. Maar net zo goed tot een positieve uitkomst. Waarom horen we daar dan zo weinig over, vraagt Roland van der Vorst zich af.',
                            topicPrefixOrCategory: 'Column',
                            publicationUrl:
                                '/futures/1341387/hoe-jouw-kleine-bijdrage-kan-leiden-tot-een-grote-sprong-voorwaarts',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/3609e91e1f8ff23c52d364bfc83421df4275ea5e.jpg?fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/3609e91e1f8ff23c52d364bfc83421df4275ea5e.jpg?fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/3609e91e1f8ff23c52d364bfc83421df4275ea5e.jpg?fit=crop&crop=faces&auto=format,compress',
                                caption: 'Roland van der Vorst',
                                backgroundColor: 'theme7',
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                        {
                            id: 1341172,
                            title:
                                'Apple verkoopt alleen nog eigen luidsprekers',
                            intro:
                                'De Amerikaanse hardwaregigant Apple biedt niet langer luidsprekers of koptelefoons van andere merken te koop aan in zijn onlinewinkel. ',
                            topicPrefixOrCategory: 'Tech en media',
                            publicationUrl:
                                '/futures/1341172/apple-verkoopt-alleen-nog-eigen-luidsprekers',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/694220729e199469f1bc63dae7bbcbab22701578.jpg?fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/694220729e199469f1bc63dae7bbcbab22701578.jpg?fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/694220729e199469f1bc63dae7bbcbab22701578.jpg?fit=crop&crop=faces&auto=format,compress',
                                caption: null,
                                backgroundColor: null,
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                        {
                            id: 1341070,
                            title:
                                'Tweede Kamer twijfelt of politie ongehinderd beveiligingslekken moet kunnen kopen ',
                            intro:
                                "Dankzij 'onbekende beveiligingslekken' kunnen opsporingsdiensten binnendringen op de computer van criminelen. Maar diezelfde lekken kunnen zelf ook voor grote schade zorgen. De Tweede Kamer stemt dinsdag over de vraag of extra regels nodig zijn. ",
                            topicPrefixOrCategory: 'ICT-diensten',
                            publicationUrl:
                                '/futures/1341070/tweede-kamer-twijfelt-of-politie-ongehinderd-beveiligingslekken-moet-kunnen-kopen',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/5b7981becabb35671d191be177071bc42d0de307.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/5b7981becabb35671d191be177071bc42d0de307.jpg?rect=.0125%2c.0%2c.66625%2c.9999999999999999&fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/5b7981becabb35671d191be177071bc42d0de307.jpg?rect=.0%2c.0393996247654784%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format,compress',
                                caption: null,
                                backgroundColor: null,
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                    ],
                    greenOverviewPageButton: true,
                },
                compactCategoryModel: null,
                partnersModel: null,
                singleBanner: null,
            },
            {
                defaultCategoryModel: {
                    id: 'section-persoonlijk',
                    title: 'FD Persoonlijk',
                    overviewPageUrl: '/persoonlijk',
                    overviewPageButtonTitle: 'Lees magazine',
                    overviewPageButtonStyle: 'GREEN',
                    dataSection: 'persoonlijk',
                    cards: [
                        {
                            id: 1341474,
                            title: 'In het revalidatiecentrum',
                            intro:
                                'FD-Persoonlijk columnist Brenda van Osch raakt ontroerd door een documentaire over revalidatie.',
                            topicPrefixOrCategory: 'Column',
                            publicationUrl:
                                '/persoonlijk/1341474/in-het-revalidatiecentrum',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/6f695dbe6d54137c00cd7db49fe9d2192acd7212.jpg?fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/6f695dbe6d54137c00cd7db49fe9d2192acd7212.jpg?fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/6f695dbe6d54137c00cd7db49fe9d2192acd7212.jpg?fit=crop&crop=faces&auto=format,compress',
                                caption: 'Brenda van Osch',
                                backgroundColor: 'theme7',
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                        {
                            id: 1341142,
                            title:
                                'Wanneer ben je te oud om directeur te zijn? ',
                            intro:
                                'Word je een minder goede leider na je 55ste? In sommige bedrijven moet een managing partner of directeur bij 55 of 57 jaar verplicht het veld ruimen. ‘Het voelt ook wel als een opluchting.’',
                            topicPrefixOrCategory: 'Werk & geld',
                            publicationUrl:
                                '/persoonlijk/1341142/55-zeg-maar-dag-tegen-de-directie',
                            image: {
                                normalUrl:
                                    'https://fd-external-development.imgix.net/6ff00a7b0c50ad8405c91ce39d4ba44cbb43a0aa.jpg?rect=.0%2c.0818897637795276%2c.9999999999999999%2c.8377952755905512&fit=crop&crop=faces&auto=format,compress',
                                squareUrl:
                                    'https://fd-external-development.imgix.net/6ff00a7b0c50ad8405c91ce39d4ba44cbb43a0aa.jpg?rect=.10375%2c.0%2c.79375%2c.9999999999999999&fit=crop&crop=faces&auto=format,compress',
                                wideUrl:
                                    'https://fd-external-development.imgix.net/6ff00a7b0c50ad8405c91ce39d4ba44cbb43a0aa.jpg?rect=.0%2c.1464566929133858%2c.9999999999999999%2c.7086614173228346&fit=crop&crop=faces&auto=format,compress',
                                caption: null,
                                backgroundColor: null,
                            },
                            latestUpdate: {
                                date: null,
                            },
                            readingTime: 0,
                            longRead: false,
                            newWindow: false,
                        },
                    ],
                    greenOverviewPageButton: true,
                },
                compactCategoryModel: null,
                partnersModel: null,
                singleBanner: null,
            },
        ],
        lastSevenDaysModel: {
            lastSevenDaysTeasers: [],
            loading: true,
            recommendationsMessageVisible: false,
            lastSevenDaysTeasersEmpty: true,
            showRecommendations: true,
            userLoggedIn: false,
            error: false,
        },
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
