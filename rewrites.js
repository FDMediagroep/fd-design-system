/**
 * The rewrites are used by the application as a list of synonyms.
 * The `source` property value is parsed in the application.
 * Therefor the it has to be in a specific format:
 * `/(<uri>|<uri 2>|<uri ...>)`
 *
 * IMPORTANT: each synonym should be unique.
 */
module.exports = [
    {
        source: '/(image|inline-image|inlineimage|articleimage|inlineafbeelding|inline-afbeelding)',
        destination: '/article-image',
    },
    {
        source: '/(infographic|inline-infographic|inlineinfographic|articleinfographic)',
        destination: '/article-infographic',
    },
    {
        source: '/(summary|inline-summary|inlinesummary|articlesummary|samenvatting|inline-samenvatting|artikel-samenvatting)',
        destination: '/article-summary',
    },
    {
        source: '/(button/call-to-action|button/calltoaction|button/action|button/marketing|button/email|button/register|button/subscribe|button/signup|button/sign-up)',
        destination: '/button/cta',
    },
    {
        source: '/(button/button|button/redactioneel|button/editorial|button/comment|button/share|button/vote)',
        destination: '/button/default',
    },
    {
        source: '/(button/drop-down)',
        destination: '/button/dropdown',
    },
    {
        source: '/(button/volgen|button/tag|button/onderwerp|button/subject|button/favorite)',
        destination: '/button/follow',
    },
    {
        source: '/(card/horizontal1|cards/horizontal1|teaser/horizontal1|teasers/horizontal1|cards/horizontal-1|teaser/horizontal-1|teasers/horizontal-1)',
        destination: '/card/horizontal-1',
    },
    {
        source: '/(card/horizontal2|cards/horizontal2|teaser/horizontal2|teasers/horizontal2|cards/horizontal-2|teaser/horizontal-2|teasers/horizontal-2)',
        destination: '/card/horizontal-2',
    },
    {
        source: '/(card/hybrid1|cards/hybrid1|teaser/hybrid1|teasers/hybrid1|cards/hybrid-1|teaser/hybrid-1|teasers/hybrid-1)',
        destination: '/card/hybrid-1',
    },
    {
        source: '/(card/hybrid2|cards/hybrid2|teaser/hybrid2|teasers/hybrid2|cards/hybrid-2|teaser/hybrid-2|teasers/hybrid-2)',
        destination: '/card/hybrid-2',
    },
    {
        source: '/(card/vertical1|cards/vertical1|teaser/vertical1|teasers/vertical1|cards/vertical-1|teaser/vertical-1|teasers/vertical-1)',
        destination: '/card/vertical-1',
    },
    {
        source: '/(card/vertical5|cards/vertical5|teaser/vertical5|teasers/vertical5|cards/vertical-5|teaser/vertical-5|teasers/vertical-5)',
        destination: '/card/vertical-5',
    },
    {
        source: '/(card|card/teaser|card/teasers|cards/teaser|cards/teasers|teaser|teaser/card|teaser/cards|teasers|teasers/card|teasers/cards)',
        destination: '/cards',
    },
    {
        source: '/(hall-of-fame/dorien|hall-of-fame/dorien-beukers|hall-of-fame/jorien-jorien|hall-of-fame/jolene-jolene|hall-of-fame/beukers)',
        destination: '/hall-of-fame/jorien-beukers',
    },
    {
        source: '/(input/check-box|input/vinkje)',
        destination: '/input/checkbox',
    },
    {
        source: '/(input/datum|input/datum-invoer|input/datuminvoer|input/datum-veld|input/datumveld|input/date-input)',
        destination: '/input/dateinput',
    },
    {
        source: '/(input/email|input/email-invoer|input/emailinvoer|input/email-veld|input/emailveld|input/email-input|input/e-mail|input/e-mail-invoer|input/e-mailinvoer|input/e-mail-veld|input/e-mailveld|input/e-mail-input)',
        destination: '/input/emailinput',
    },
    {
        source: '/(input/mobiel|input/mobiel-invoer|input/mobielinvoer|input/mobiel-veld|input/mobielveld|input/mobile-input|input/mobile)',
        destination: '/input/mobileinput',
    },
    {
        source: '/(input/gaga|input/googoo)',
        destination: '/input/radio',
    },
    {
        source: '/(input/schakelaar|input/aan-uit|input/aanuit|input/on-off|input/onoff|input/schuifje)',
        destination: '/input/switch',
    },
    {
        source: '/(input/tekstveld|input/tekst-veld|input/text-area)',
        destination: '/input/textarea',
    },
    {
        source: '/input/(tekst|text-input)',
        destination: '/input/textinput',
    },
    {
        source: '/(cyferkader|number-frame|nummer-kader|cyfer-kader|cijferkader|cijfer-kader)',
        destination: '/numberframe',
    },
    {
        source: '/(read-more|leesmeer|lees-meer|leesook|lees-ook)',
        destination: '/readmore',
    },
    {
        source: '/(stickticker|beurs-ticker|beursticker|vwd-ticker|vwdticker|koers-ticker|koersticker)',
        destination: '/stock-ticker',
    },
    {
        source: '/(tekstkader|tekst-kader|text-frame)',
        destination: '/textframe',
    },
    {
        source: '/(stapelkader|stapel-kader|woordkader|woord-kader|word-frame)',
        destination: '/wordframe',
    },
];
