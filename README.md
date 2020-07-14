<p align="center">
    <a href="https://fd-design-system.now.sh" target="_BLANK">
        <img width="160" src="https://github.com/FDMediagroep/fd-design-system/raw/master/public/assets/icons/logo.svg?sanitize=true" alt="FD Design System">
    </a>
</p>

<p align="center">
    <span>
        <img src="https://github.com/FDMediagroep/fd-design-system/workflows/Build/badge.svg" alt="Build"/>
    </span>
    <span>
        <img src="https://github.com/FDMediagroep/fd-design-system/workflows/Publish/badge.svg" alt="Publish"/>
    </span>
    <a href="https://coveralls.io/github/FDMediagroep/fd-design-system?branch=master" target="_blank">
        <img src="https://coveralls.io/repos/github/FDMediagroep/fd-design-system/badge.svg?branch=master" alt="Test coverage"/>
    </a>
    <a href="https://npmjs.com/package/@fdmg%2Fdesign-system" target="_blank">
        <img src="https://img.shields.io/npm/v/@fdmg/design-system?color=blue" alt="NPM version"/>
    </a>
    <a href="https://bundlephobia.com/result?p=@fdmg/design-system" target="_blank">
        <img src="https://img.shields.io/bundlephobia/minzip/@fdmg/design-system" alt="Bundle-size minified+gzip"/>
    </a>
</p>

# fd-design-system

[Design System](https://fd-design-system.now.sh) for components used by [FD.nl](https://fd.nl).

## Installation

Install the `Design System` as dependency for your project:

-   NPMJS: `npm i @fdmg/design-system`

or

-   GitHub Packages: `https://github.com/FDMediagroep/fd-design-system/packages`

Install `date-input-polyfill` for date-picker polyfill for older browsers.

`npm i date-input-polyfill`

#### Optional configuration

You can replace date-input-polyfill with an empty component.

##### Webpack config

Install `null-loader` and add the following to your Webpack configuration rules.

```
    module: {
        rules: [
            {
                // Test for a polyfill (or any file) and it won't be included in your
                // bundle
                test: /date-input-polyfill.dist.js$/,
                use: 'null-loader',
            }
        ]
    }
```

## TypeScript support

TypeDefinitions are available and included.

## Getting started

These are the only steps you need to follow in order to use our components.

1. Import our CSS style(s)
    - It's possible to omit this and use your own styles instead.
    - You can choose to import all styles or styles for each component individually (as shown in the code examples for each component).
1. Import and implement our component(s).
    - You can choose to import components individually (as shown in the code examples for each component) or import main module. Importing components individually allows you to only bundle the components you use.

Example code are listed [below](#components).

## Components

**Global CSS:**

```
import "@fdmg/design-system/main.css";
```

Contains all the CSS for all the components. It's possible to only include the CSS for each component separately.
The individual imports are shown in the code examples.

**Main component module:**

```
import { ...component... } from "@fdmg/design-system";
```

The main entry point exports all the available components. This however means your asset bundle will contain all the components regardless of if you actually make use of it.

The reason we publish the library as CommonJS module is because the Webpack build allows for the generation of separate
CSS modules and CommonJS modules for each component. This allows you to only import the JS and CSS for the module that you actually use.
When using Rollup to build our library we can get a proper ESM library which is tree-shakeable however the CSS will be compiled into a single file which forces you to load all the styles of all components regardless of which ones you're using.

So as of the time of writing Webpack still offers the best of both worlds with the minor inconvenience of locating the specific module you want to import.

**React:**

```
import React from 'react';
```

All components import React even though the example codes don't show that.

---

### Article

<details>
<summary>ArticleMeta</summary>

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/article-meta/ArticleMeta.css";
```

```
import { ArticleMeta } from "@fdmg/design-system/components/input/ArticleMeta";

function Foo() {
    return (
        <ArticleMeta authors={["fullName": "Willem L."]}/>
    );
}
```

</details>

<details>
<summary>ArticleImage</summary>

[Demo](https://fd-design-system.now.sh/article-image)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/article-image/ArticleImage.css";
```

```
import { ArticleImage } from "@fdmg/design-system/components/article-image/ArticleImage";

function Foo() {
    return (
        <ArticleImage
            baseUrl="https://images.example.com"
            caption="What a photo"
            credit="Foto: Willem L."
            fileName="image.jpg"/>
    );
}
```

</details>

<details>
<summary>ArticleTags</summary>

[Demo](https://fd-design-system.now.sh/article-tags)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/article-tags/ArticleTags.css";
```

```
import { ArticleTags } from "@fdmg/design-system/components/article-tags/ArticleTags";

function Foo() {
    return (
        <ArticleTags
            onDisableAlertClick={() => {}}
            onEnableAlertClick={() => {}}
            onFollowClick={() => {}}
            onUnfollowClick={() => {}}
            title="Volgen via mijn nieuws"
            titleLink="https://fd.nl/mijn-nieuws"
            tags={[
                {
                    tag: 'Detailhandel',
                    uuid: '1',
                },
                {
                    selected: true,
                    tag: 'Eten & Drinken',
                    uuid: '2',
                },
                {
                    alertSelected: true,
                    selected: true,
                    tag: 'Supermarkt',
                    uuid: '3',
                },
            ]}
        />
    );
}
```

</details>

<details>
<summary>BulletPoint</summary>

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/bullet-point/BulletPoint.css";
```

```
import { BulletPoint } from "@fdmg/design-system/components/bullet-point/BulletPoint";

function Foo() {
    return (
        <BulletPoint bullets={["bullet 1" "bullet 2"]}/>
    );
}
```

</details>

<details>
<summary>Financial Agenda</summary>

[Demo](https://fd-design-system.now.sh/financial-agenda)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/financial-agenda/FinancialAgenda.css";
```

```
import { FinancialAgenda } from "@fdmg/design-system/components/financial-agenda/FinancialAgenda";

function Foo() {
    return (
        <FinancialAgenda
            agendaItems={[
                {
                    date: '25 mei',
                    source: 'VK',
                    description:
                        'Bankholiday - financiële markten gesloten',
                },
                {
                    date: '25 mei',
                    source: 'VS',
                    description:
                        'Memorial day - financiële markten gesloten',
                },
            ]}
        />
    );
}
```

</details>

<details>
<summary>Infographic</summary>

[Demo](https://fd-design-system.now.sh/article-infographic)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/infographic/Infographic.css";
```

```
import { Infographic } from "@fdmg/design-system/components/infographic/Infographic";

function Foo() {
    return (
        <Infographic src="https://example.com/image.png" height="400" />
    );
}
```

</details>

<details>
<summary>Latest News (article)</summary>

[Demo](https://fd-design-system.now.sh/article-latest-news)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/article-latest-news/ArticlelatestNews.css";
```

```
import { ArticleLatestNews } from "@fdmg/design-system/components/article-latest-news/ArticleLatestNews";

function Foo() {
    return (
        <ArticleLatestNews
            news={[
                {
                    uuid: '1',
                    dateTime: `11:18`,
                    title: `Provinciale lijsttrekkers CDA: stop met 'drammen en dromen' over klimaat`,
                    url: `https://fd.nl/economie-politiek/1288207/provinciale-lijsttrekkers-cda-stop-met-drammen-en-dromen-over-klimaat`,
                },
                {
                    uuid: '2',
                    dateTime: `11:15`,
                    title: `Luchtvaartbedrijf Germania valt om`,
                    url: `https://fd.nl/ondernemen/1288215/luchtvaartbedrijf-germania-valt-om`,
                    isRead: true,
                },
                {
                    uuid: '3',
                    dateTime: `11:10`,
                    title: `Britse dienstensector krijgt harde tik van brexit`,
                    url: `https://fd.nl/economie-politiek/1288213/britse-dienstensector-krijgt-harde-tik-van-brexit`,
                },
                {
                    uuid: '4',
                    dateTime: `11:00`,
                    title: `DNB: Bovag-garantie toch geen verzekering`,
                    url: `https://fd.nl/ondernemen/1288299/dnb-bovag-garantie-toch-geen-verzekering`,
                },
            ]}
        />
    );
}
```

</details>

<details>
<summary>LinkBlock</summary>

[Demo](https://fd-design-system.now.sh/article-link-block)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/article-link-block/LinkBlock.css";
```

```
import { LinkBlock } from "@fdmg/design-system/components/article-link-block/LinkBlock";

function Foo() {
    return (
        <LinkBlock title="Read more" description="Click here to read all about it" url="https://fd.nl"/>
    );
}
```

</details>

<details>
<summary>LinkCard</summary>

[Demo](https://fd-design-system.now.sh/article-link-card)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/article-link-card/LinkCard.css";
```

```
import { LinkCard as ArticleLinkCard } from "@fdmg/design-system/components/article-link-card/LinkCard";

function Foo() {
    return (
        <ArticleLinkCard
            link="/mijn-nieuws"
            title="Beheer"
            linkText="Ga naar laatste nieuws"
        />
    );
}
```

</details>

<details>
<summary>NumberFrame</summary>

[Demo](https://fd-design-system.now.sh/numberframe)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/numberframe/NumberFrame.css";
```

```
import { NumberFrame } from "@fdmg/design-system/components/numberframe/NumberFrame";

function Foo() {
    return (
        <NumberFrame
            number=`80%`,
            description=`of the statistiscs found on the internet are lies`
        />
    );
}
```

</details>

<details>
<summary>Quote</summary>

[Demo](https://fd-design-system.now.sh/quote)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/quote/Quote.css";
```

```
import { Quote } from "@fdmg/design-system/components/quote/Quote";

function Foo() {
    return (
        <Quote
            blockquote={`This is the quote text`},
            figcaption={`Willem L.`}

        />
    );
}
```

</details>

<details>
<summary>ReadMore</summary>

[Demo](https://fd-design-system.now.sh/readmore)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/readmore/ReadMore.css";
```

```
import { ReadMore } from "@fdmg/design-system/components/readmore/ReadMore";

function Foo() {
    return (
        <ReadMore
            title=`Lees ook`,
            links=[
                `A <a href="http://fd.nl">link</a>`,
                `Another <a href="https://www.willemliu.nl">link</a>`
            ]
        />
    );
}
```

</details>

<details>
<summary>Summary</summary>

[Demo](https://fd-design-system.now.sh/article-summary)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/article-summary/Summary.css";
```

```
import { Summary } from "@fdmg/design-system/components/article-summary/Summary";

function Foo() {
    return (
        <Summary
            title="Samenvatting"
            summaries=[
                "Bulletpoint samenvatting 1"
                "Bulletpoint samenvatting 2"
                "Bulletpoint samenvatting 3"
            ]/>
    );
}
```

</details>

<details>
<summary>TextArea</summary>

[Demo](https://fd-design-system.now.sh/input/textarea)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/input/TextArea.css";
```

```
import { TextArea } from "@fdmg/design-system/components/input/TextArea";

function Foo() {
    return (
        <TextArea id="demoTextArea" label="Biography" required={true} />
    );
}
```

</details>

<details>
<summary>TextFrame</summary>

[Demo](https://fd-design-system.now.sh/input/textframe)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/textframe/TextFrame.css";
```

```
import { TextFrame } from "@fdmg/design-system/components/textframe/TextFrame";

function Foo() {
    return (
        <TextFrame
            title=`TextFrame test`,
            description=`Aenean lacinia bibendum nulla sed consectetur. Donec id elit non
mi porta gravida at eget metus. Cum sociis natoque penatibus et
magnis dis parturient montes, nascetur ridiculus mus.`
        />
    );
}
```

</details>

<details>
<summary>Vimeo</summary>

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/vimeo/Vimeo.css";
```

```
import { Vimeo } from "@fdmg/design-system/components/vimeo/Vimeo";

function Foo() {
    return (
        <Vimeo id="<vimeo id>" />
    );
}
```

</details>

<details>
<summary>WordFrame</summary>

[Demo](https://fd-design-system.now.sh/wordframe)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/wordframe/WordFrame.css";
```

```
import { WordFrame } from "@fdmg/design-system/components/wordframe/WordFrame";

function Foo() {
    return (
        <WordFrame
            title=`WordFrame test`,
            description=`Aenean lacinia bibendum nulla sed consectetur. Donec id elit non
mi porta gravida at eget metus. Cum sociis natoque penatibus et
magnis dis parturient montes, nascetur ridiculus mus.`
        />
    );
}
```

</details>

<details>
<summary>Youtube</summary>

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/youtube/Youtube.css";
```

```
import { Youtube } from "@fdmg/design-system/components/youtube/Youtube";

function Foo() {
    return (
        <Youtube id="<Youtube id>" />
    );
}
```

</details>

### Controls

<details>
<summary>Breaking Switch</summary>

[Demo](https://fd-design-system.now.sh/input/breaking-switch)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/input/BreakingSwitch.css";
```

```
import { BreakingSwitch } from "@fdmg/design-system/components/input/BreakingSwitch";

interface Props {
    checked?: boolean;
}

function Foo(props: Props) {
    const [checked, setChecked] = useState(props.checked);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setChecked(e.currentTarget.checked);
    }

    return (
        <BreakingSwitch
            label="Label of the switch"
            checked={checked}
            onChange={handleChange}
        />
    );
}
```

</details>

<details>
<summary>Button</summary>

[Demo](https://fd-design-system.now.sh/button/default)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/button/Button.css";
```

```
import { Button } from "@fdmg/design-system/components/button/Button";

function Foo() {
    function handleClick() {
        console.log('clicked');
    }

    return (
        <Button onClick={handleClick}>Click me!</Button>
    );
}
```

</details>

<details>
<summary>Button CTA (call-to-action)</summary>

[Demo](https://fd-design-system.now.sh/button/cta)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/button/ButtonCta.css";
```

```
import { ButtonCta } from "@fdmg/design-system/components/button/ButtnCta";

function Foo() {
    function handleClick() {
        console.log('clicked');
    }

    return (
        <ButtonCta onClick={handleClick}>Click me!</ButtonCta>
    );
}
```

</details>

<details>
<summary>Button Follow</summary>

[Demo](https://fd-design-system.now.sh/button/follow)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/button/ButtonFollow.css";
```

```
import { useState } from 'react';
import { ButtonFollow } from "@fdmg/design-system/components/button/ButtonFollow";

function Foo() {
    const [follow, setFollow] = useState(false);
    function handleClick() {
        console.log('clicked');
        setFollow(!follow);
    }

    return (
        <ButtonFollow selected={follow} onClick={handleClick}>Click me!</ButtonFollow>
    );
}
```

</details>

<details>
<summary>Checkbox</summary>

[Demo](https://fd-design-system.now.sh/input/checkbox)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/input/Checkbox.css";
```

```
import { Checkbox } from "@fdmg/design-system/components/input/Checkbox";

function Foo() {
    return (
        <Switch
            id="idOfCheckbox"
            label=`Label of the checkbox`
        />
    );
}
```

</details>

<details>
<summary>Date input</summary>

[Demo](https://fd-design-system.now.sh/input/dateinput)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/input/TextInput.css";
```

```
import { TextInput } from "@fdmg/design-system/components/input/TextInput";

function Foo() {
    return (
        <TextInput id="demoTextArea" type="date" label="Birthday" />
    );
}
```

</details>

<details>
<summary>Email input</summary>

[Demo](https://fd-design-system.now.sh/input/emailinput)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/input/TextInput.css";
```

```
import { TextInput, Patterns } from "@fdmg/design-system/components/input/TextInput";

function Foo() {
    return (
        <TextInput id="demoTextArea" type="email" label="E-mail" pattern={Patterns.EMAIL} required={true} />
    );
}
```

</details>

<details>
<summary>Mobile input (tel)</summary>

[Demo](https://fd-design-system.now.sh/input/mobileinput)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/input/TextInput.css";
```

```
import { TextInput, Patterns } from "@fdmg/design-system/components/input/TextInput";

function Foo() {
    return (
        <TextInput id="demoTextArea" type="tel" label="E-mail" pattern={Patterns.MOBILE} required={true} />
    );
}
```

</details>

<details>
<summary>Radio</summary>

[Demo](https://fd-design-system.now.sh/input/radio)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/input/Radio.css";
```

```
import { Radio } from "@fdmg/design-system/components/input/Radio";

function Foo() {
    return (
        <>
            <Radio
                id="idOfRadio"
                name="groupName"
                label=`Label of the radio button`
                defaultChecked={true}
            />
            <Radio
                id="idOfRadio2"
                name="groupName"
                label=`Label of the radio button`
            />
        </>
    );
}
```

</details>

<details>
<summary>Switch</summary>

[Demo](https://fd-design-system.now.sh/input/switch)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/input/Switch.css";
```

```
import { Switch } from "@fdmg/design-system/components/input/Switch";

function Foo() {
    return (
        <Switch
            id="idOfSwitch"
            label=`Label of the switch`
        />
    );
}
```

</details>

<details>
<summary>Text input</summary>

[Demo](https://fd-design-system.now.sh/input/textinput)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/input/TextInput.css";
```

```
import { TextInput } from "@fdmg/design-system/components/input/TextInput";

function Foo() {
    return (
        <TextInput id="demoTextArea" label="Name" placeholder="Willem Liu" />
    );
}
```

</details>

### Cards

<details>
<summary>Horizontal Card 1</summary>

[Demo](https://fd-design-system.now.sh/card/horizontal-1)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/card/HorizontalCard1.css";
```

```
import { HorizontalCard1 } from "@fdmg/design-system/components/card/HorizontalCard1";

function Foo() {
    return (
        <HorizontalCard1
            id="1343811"
            url="https://fd.nl/ondernemen/1343811/omzet-alfen-in-eerste-coronakwartaal-58"
            imageUrl="https://images.fd.nl/C_yJRp_QqzybEdlK4D6SibEUxiA.jpg?rect=.0,.0,.73375,.9999999999999999&fit=crop&crop=faces&auto=format&q=45&w=300"
            label="Energie"
            time="08:10"
            title="Omzet Alfen stijgt in eerste coronakwartaal met 58%"
        />
    );
}
```

</details>

<details>
<summary>Horizontal Card 2</summary>

[Demo](https://fd-design-system.now.sh/card/horizontal-2)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/card/HorizontalCard2.css";
```

```
import { HorizontalCard2 } from "@fdmg/design-system/components/card/HorizontalCard2";

function Foo() {
    return (
        <HorizontalCard2
            id="1343052"
            url="https://fd.nl/futures/1343052/levensgevaarlijk-libanon"
            label="Levensgevaarlijk Libanon"
            time="13:11"
            title="Omgekeerde kruistocht"
            intro="Ondanks een op het eerste gezicht veel gevaarlijker levensstijl, verschilt de levensverwachting van Libanezen nog maar drie jaar met die van ons."
        />
    );
}
```

</details>

<details>
<summary>Horizontal Card 3</summary>

[Demo](https://fd-design-system.now.sh/card/horizontal-3)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/card/HorizontalCard3.css";
```

```
import { HorizontalCard3 } from "@fdmg/design-system/components/card/HorizontalCard3";

function Foo() {
    return (
        <HorizontalCard3
            id="1343052"
            url="https://fd.nl/futures/1343052/levensgevaarlijk-libanon"
            label="Levensgevaarlijk Libanon"
            time="13:11"
            title="Omgekeerde kruistocht"
            printTitle="De kruistocht in reverse"
            intro="Ondanks een op het eerste gezicht veel gevaarlijker levensstijl, verschilt de levensverwachting van Libanezen nog maar drie jaar met die van ons."
        />
    );
}
```

</details>

<details>
<summary>Hybrid Card 1</summary>

[Demo](https://fd-design-system.now.sh/card/hybrid-1)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/card/HybridCard1.css";
```

```
import { HybridCard1 } from "@fdmg/design-system/components/card/HybridCard1";

function Foo() {

    function handleBookmark(e) {
        console.log(e);
    }

    return (
        <HybridCard1
            id="1343052"
            url="https://fd.nl/futures/1343052/levensgevaarlijk-libanon"
            imageUrl="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=300"
            imageUrlS="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=300"
            imageUrlM="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
            imageUrlL="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
            label="Levensgevaarlijk Libanon"
            time="13:11"
            title="Omgekeerde kruistocht"
            intro="Ondanks een op het eerste gezicht veel gevaarlijker levensstijl, verschilt de levensverwachting van Libanezen nog maar drie jaar met die van ons."
            bookmarked={false}
            onBookmark={handleBookmark}
        />
    );
}
```

</details>

<details>
<summary>Hybrid Card 2</summary>

[Demo](https://fd-design-system.now.sh/card/hybrid-2)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/card/HybridCard2.css";
```

```
import { HybridCard2 } from "@fdmg/design-system/components/card/HybridCard2";

function Foo() {

    function handleBookmark(e) {
        console.log(e);
    }

    return (
        <HybridCard2
            id="1343052"
            url="https://fd.nl/futures/1343052/levensgevaarlijk-libanon"
            label="Levensgevaarlijk Libanon"
            time="13:11"
            title="Omgekeerde kruistocht"
            intro="Ondanks een op het eerste gezicht veel gevaarlijker levensstijl, verschilt de levensverwachting van Libanezen nog maar drie jaar met die van ons."
            bookmarked={false}
            onBookmark={handleBookmark}
        />
    );
}
```

</details>

<details>
<summary>LinkCard</summary>

[Demo](https://fd-design-system.now.sh/card/link-card)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/card/LinkCard.css";
```

```
import { LinkCard } from "@fdmg/design-system/components/card/LinkCard";

function Foo() {
    return (
        <LinkCard
            link="/mijn-nieuws"
            title="Beheer"
            linkText="Ga naar laatste nieuws"
        />
    );
}
```

</details>

<details>
<summary>Vertical Card 1</summary>

[Demo](https://fd-design-system.now.sh/card/vertical-1)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/card/VerticalCard1.css";
```

```
import { VerticalCard1 } from "@fdmg/design-system/components/card/VerticalCard1";

function Foo() {

    function handleBookmark(e) {
        console.log(e);
    }

    return (
        <VerticalCard1
            id="1343052"
            url="https://fd.nl/futures/1343052/levensgevaarlijk-libanon"
            imageUrl="https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
            imageUrlS="https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
            imageUrlM="https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
            imageUrlL="https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
            label="Levensgevaarlijk Libanon"
            time="13:11"
            title="Omgekeerde kruistocht"
            intro="Ondanks een op het eerste gezicht veel gevaarlijker levensstijl, verschilt de levensverwachting van Libanezen nog maar drie jaar met die van ons."
            bookmarked={false}
            onBookmark={handleBookmark}
        />
    );
}
```

</details>

<details>
<summary>Vertical Card 2</summary>

[Demo](https://fd-design-system.now.sh/card/vertical-2)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/card/VerticalCard2.css";
```

```
import { VerticalCard2 } from "@fdmg/design-system/components/card/VerticalCard2";

function Foo() {
    return (
        <VerticalCard2
            id="1343052"
            url="https://fd.nl/futures/1343052/levensgevaarlijk-libanon"
            imageUrl="https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
            imageUrlS="https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
            imageUrlM="https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
            imageUrlL="https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
            title="Omgekeerde kruistocht"
            intro="Ondanks een op het eerste gezicht veel gevaarlijker levensstijl, verschilt de levensverwachting van Libanezen nog maar drie jaar met die van ons."
        />
    );
}
```

</details>

<details>
<summary>Vertical Card 3</summary>

[Demo](https://fd-design-system.now.sh/card/vertical-3)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/card/VerticalCard3.css";
```

```
import { VerticalCard3 } from "@fdmg/design-system/components/card/VerticalCard3";

function Foo() {
    return (
        <VerticalCard3
            id="1321841"
            url="https://fd.nl/ondernemen/1321841/den-haag-zet-druk-op-pandeigenaren-om-huurverlaging-winkeliers-te-slikken"
            imageUrl="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format&q=45&w=560&h=315"
            imageUrlS="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format&q=45&w=560&h=315"
            imageUrlM="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0637898686679174%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format&q=45&w=944&h=531"
            imageUrlL="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0637898686679174%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format&q=45&w=944&h=531"
            label="Detailhandel"
            title="Den Haag zet druk op verhuurders om huurverlaging te slikken"
            intro="Het Rijk sluit overheidsingrijpen niet uit om een akkoord tussen verhuurders en winkeliers af te dwingen, nu onderhandelingen moeizaam verlopen."
        />
    );
}
```

</details>

### Misc.

<details>
<summary>A/B Testing component</summary>

[Demo](https://fd-design-system.now.sh/ab)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/ab/ab.css"; // For debug options layout
```

```
import { Experiment, Variant, ABProvider } from "@fdmg/design-system/components/ab/ab";

function Foo() {
    return (
        <ABProvider>
            <Experiment
                name="globally-unique-experiment-name"
                debugUriParam="ABdebug=true"
                onClick={console.log}
                onRunExperiment={console.log}
            >
                <Variant name="A" onClick={console.log}>
                    <h1>Headline 1</h1>
                </Variant>
                <Variant name="B" onClick={console.log}>
                    <h1>Headline 2</h1>
                </Variant>
            </Experiment>
        </ABProvider>
    );
}
```

</details>

<details>
<summary>AuthorInfo</summary>

[Demo](https://fd-design-system.now.sh/author-info)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/author-info/AuthorInfo.css";
```

```
import { AuthorInfo } from '@fdmg/design-system/components/author-info/AuthorInfo';

function Foo() {
    return (
        <AuthorInfo
            description={
                <p>
                    Nelleke Trappenburg schrijft bij het FD over pensioenen:
                    dekkingsgraden, beleggingskosten, nieuwe wetgeving etc.
                    Eerder werkte zij onder meer op de beursredactie.
                </p>
            }
            imageUrl="https://images.fd.nl/ffa583e0c7fbc666934ecc326a88defc2773f4e9.jpeg?fit=crop&amp;crop=faces&amp;auto=format&amp;q=45&amp;cs=tinysrgb&amp;w=640&amp;h=640&amp;fm=jpg"
            title="Nelleke Trappenburg"
            followed={mode === 'dark'}
            onEmailClick={() => {}}
            onFollowAuthorClick={() => {}}
            onLinkedInClick={() => {}}
            onTwitterClick={() => {}}
        />
    );
}
```

</details>

<details>
<summary>StockTicker</summary>

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/stockticker/StockTicker.css";
```

```
import { StockTicker } from "@fdmg/design-system/components/stockticker/StockTicker";

function Foo() {
    return (
        <StockTicker
            title=`Lees ook`,
            links=[
                `A <a href="http://fd.nl">link</a>`,
                `Another <a href="https://www.willemliu.nl">link</a>`
            ]
        />
    );
}
```

</details>
