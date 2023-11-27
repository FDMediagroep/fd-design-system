<p align="center">
    <a href="https://design-system.fd.nl" target="_BLANK" rel="noopener noreferrer">
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
    <span>
        <img src="https://github.com/FDMediagroep/fd-design-system/workflows/CodeQL/badge.svg" alt="Code Quality"/>
    </span>
    <a href="https://coveralls.io/github/FDMediagroep/fd-design-system?branch=master" target="_blank" rel="noopener noreferrer">
        <img src="https://coveralls.io/repos/github/FDMediagroep/fd-design-system/badge.svg?branch=master" alt="Test coverage"/>
    </a>
    <a href="https://npmjs.com/package/@fdmg%2Fdesign-system" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/npm/v/@fdmg/design-system?color=blue" alt="NPM version"/>
    </a>
    <a href="https://bundlephobia.com/result?p=@fdmg/design-system" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/bundlephobia/minzip/@fdmg/design-system" alt="Bundle-size minified+gzip"/>
    </a>
</p>

# FD Design System

[Design System](https://design-system.fd.nl) for components used by [FD.nl](https://fd.nl).

The Design System is created to be used in the following ways:

-   **Component Library**
    -   Skip to [installation](#installation) if you intend to use it as a Component Library within your own [React](https://reactjs.org/) project. [List of components](#components) and how to use it is described further [below](#components).
-   **Design Documentation**
    -   The [Design Documentation](https://design-system.fd.nl) is a website which allows you to preview the components. It also documents the design tokens and reasoning behind the designs.
-   **CSS + HTML code generator**
    -   Each component also outputs generated CSS and HTML which you can copy and use stand-alone in your own website. This is useful if you can't or don't want to make use of the Component Library. Just keep in mind that each component CSS generated this way works completely stand-alone and includes all the [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (variables). If you intend to use multiple components then including the CSS Custom Properties only once in your own website is enough. Remember to strip the CSS Custom Properties from subsequent components you add to your website.

## Installation

Install the `Design System` as dependency for your project:

-   NPMJS: `npm i @fdmg/design-system`

or

-   GitHub Packages: `https://github.com/FDMediagroep/fd-design-system/packages`

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

All components import React even though the example codes don't reflect that.

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

[Demo](https://design-system.fd.nl/article-image)

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

[Demo](https://design-system.fd.nl/article-tags)

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

[Demo](https://design-system.fd.nl/article-bullet-point)

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

[Demo](https://design-system.fd.nl/financial-agenda)

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

[Demo](https://design-system.fd.nl/article-infographic)

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

[Demo](https://design-system.fd.nl/article-latest-news)

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

[Demo](https://design-system.fd.nl/article-link-block)

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

[Demo](https://design-system.fd.nl/article-link-card)

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

[Demo](https://design-system.fd.nl/numberframe)

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

[Demo](https://design-system.fd.nl/quote)

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

[Demo](https://design-system.fd.nl/readmore)

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
<summary>RelatedTopics</summary>

[Demo](https://design-system.fd.nl/article-related-topics)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/article-related-topics/RelatedTopics.css";
```

```
import { RelatedTopics } from "@fdmg/design-system/components/article-related-topics/RelatedTopics";

function Foo() {
    return (
        <RelatedTopics topics={[{
                topic: 'Topic 1',
                href: '/tag/topic1',
                onClick: () => {},
                selected: false,
            },
            {
                topic: 'Topic 2',
                href: '/tag/topic2',
                selected: true,
                onClick: () => {},
            },
            {
                topic: 'Topic 3',
                href: '/tag/topic3',
                selected: false,
                onClick: () => {},
            }]}/>
    );
}
```

</details>

<details>
<summary>Summary</summary>

[Demo](https://design-system.fd.nl/article-summary)

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
<summary>TextFrame</summary>

[Demo](https://design-system.fd.nl/textframe)

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
<summary>Toolbar horizontal</summary>

[Demo](https://design-system.fd.nl/toolbar/horizontal)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/toolbar/HorizontalToolbar.css";
```

```
import { HorizontalToolbar } from "@fdmg/design-system/components/toolbar/HorizontalToolbar";

function Foo() {
    return (
        <HorizontalToolbar
            id="12345"
            bookmarked={bookmarked}
            onClick={handleClick}
        />
    );
}
```

</details>

<details>
<summary>Toolbar vertical</summary>

[Demo](https://design-system.fd.nl/toolbar/vertical)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/toolbar/VerticalToolbar.css";
```

```
import { VerticalToolbar } from "@fdmg/design-system/components/toolbar/VerticalToolbar";

function Foo() {
    return (
        <VerticalToolbar
            id="12345"
            bookmarked={bookmarked}
            onClick={handleClick}
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

[Demo](https://design-system.fd.nl/wordframe)

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

[Demo](https://design-system.fd.nl/input/breaking-switch)

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

[Demo](https://design-system.fd.nl/button/default)

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

[Demo](https://design-system.fd.nl/button/cta)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/button/ButtonCta.css";
```

```
import { ButtonCta } from "@fdmg/design-system/components/button/ButtonCta";

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

[Demo](https://design-system.fd.nl/button/follow)

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
<summary>Ghost Button</summary>

[Demo](https://design-system.fd.nl/button/ghost)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/button/ButtonGhost.css";
```

```
import { ButtonGhost } from "@fdmg/design-system/components/button/ButtonGhost";

function Foo() {
    function handleClick() {
        console.log('clicked');
    }

    return (
        <ButtonGhost onClick={handleClick}>Click me!</ButtonGhost>
    );
}
```

</details>

<details>
<summary>Checkbox</summary>

[Demo](https://design-system.fd.nl/input/checkbox)

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
<summary>Dropdown</summary>

[Demo](https://design-system.fd.nl/button/dropdown)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/button/Dropdown.css";
```

```
import { Dropdown } from "@fdmg/design-system/components/button/Dropdown";

function Foo() {
    const [expanded, setExpanded] = useState(false);
    function handleClick() {
        console.log('toggle!');
        setExpanded((expanded) => !expanded)
    }

    return (
        <Dropdown expanded={expanded} onClick={handleClick}>Click me!</Dropdown>
    );
}
```

</details>

<details>
<summary>Date input</summary>

[Demo](https://design-system.fd.nl/input/dateinput)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/input/TextInput.css";
```

```
import { TextInput } from "@fdmg/design-system/components/input/TextInput";

function Foo() {
    return (
        <TextInput id="demoDateInput" type="date" label="Birthday" />
    );
}
```

</details>

<details>
<summary>Email input</summary>

[Demo](https://design-system.fd.nl/input/emailinput)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/input/TextInput.css";
```

```
import { TextInput, Patterns } from "@fdmg/design-system/components/input/TextInput";

function Foo() {
    return (
        <TextInput id="demoEmailInput" type="email" label="E-mail" pattern={Patterns.EMAIL} required={true} />
    );
}
```

</details>

<details>
<summary>Mobile input (tel)</summary>

[Demo](https://design-system.fd.nl/input/mobileinput)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/input/TextInput.css";
```

```
import { TextInput, Patterns } from "@fdmg/design-system/components/input/TextInput";

function Foo() {
    return (
        <TextInput id="demoMobileInput" type="tel" label="E-mail" pattern={Patterns.MOBILE} required={true} />
    );
}
```

</details>

<details>
<summary>Radio</summary>

[Demo](https://design-system.fd.nl/input/radio)

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
<summary>Select</summary>

[Demo](https://design-system.fd.nl/input/select)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/input/Select.css";
```

```
import { Select } from "@fdmg/design-system/components/input/Select";

function Foo() {
    return (
        <Select
            id="demoSelect"
            label="Aanhef"
            errorMessage="Kies uw aanhef"
            required={true}
            description="Disabled select field"
        >
            <option value="">-- aanhef --</option>
            <option value="dhr">Dhr.</option>
            <option value="mevr">Mevr.</option>
            <option value="mw">Mw.</option>
            <option value="drs">Drs.</option>
            <option value="Prof">Prof.</option>
        </Select>
    );
}
```

</details>

<details>
<summary>Switch</summary>

[Demo](https://design-system.fd.nl/input/switch)

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
<summary>TextArea</summary>

[Demo](https://design-system.fd.nl/input/textarea)

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
<summary>Text input</summary>

[Demo](https://design-system.fd.nl/input/textinput)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/input/TextInput.css";
```

```
import { TextInput } from "@fdmg/design-system/components/input/TextInput";

function Foo() {
    return (
        <TextInput id="demoTextInput" label="Name" placeholder="Willem Liu" />
    );
}
```

</details>

### Cards

<details>
<summary>Horizontal Card 1</summary>

[Demo](https://design-system.fd.nl/card/horizontal-1)

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

[Demo](https://design-system.fd.nl/card/horizontal-2)

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
<summary>Horizontal Card 4</summary>

[Demo](https://design-system.fd.nl/card/horizontal-4)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/card/HorizontalCard4.css";
import "@fdmg/design-system/components/utils/image/FdImgix";
```

```
import { HorizontalCard4 } from "@fdmg/design-system/components/card/HorizontalCard4";
import { FdImgix } from '@fdmg/design-system/components/utils/image/FdImgix';

function Foo() {
    return (
        <HorizontalCard4
            className="xs-12"
            imageComponent={
                <FdImgix
                    src="https://fd-internal-development.imgix.net/XSsvNsfpytwq-OQdMRmsCm7J1i8.jpg?auto=format"
                    imageSizes={{
                        widthS: '160px',
                        widthM: '244px',
                        widthL: '244px',
                    }}
                />
            }
            id="1343052a"
            url="https://fd.nl/futures/1343052/levensgevaarlijk-libanon"
            label="Omgekeerde kruistocht"
            time="13:11"
            title="Levensgevaarlijk Libanon"
            intro="Ondanks een op het eerste gezicht veel gevaarlijker levensstijl, verschilt de levensverwachting van Libanezen nog maar drie jaar met die van ons."
        />
    );
}
```

</details>

<details>
<summary>Hybrid Card 1</summary>

[Demo](https://design-system.fd.nl/card/hybrid-1)

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

[Demo](https://design-system.fd.nl/card/hybrid-2)

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
<summary>Hybrid Card 4</summary>

[Demo](https://design-system.fd.nl/card/hybrid-4)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/card/HybridCard4.css";
import "@fdmg/design-system/components/utils/image/FdImgix.css";
```

```
import { HybridCard4 } from "@fdmg/design-system/components/card/HybridCard4";
import { FdImgix } from '@fdmg/design-system/components/utils/image/FdImgix';

function Foo() {
    return (
        <HybridCard4
            id="1345386"
            label="Markten"
            title="Beleggers verwachten nieuwe klap op beurzen",
            url="https://fd.nl/beurs/1345386/amerikaanse-technologiebeurs-nasdaq-wordt-mogelijk-strenger-dan-euronext"
            intro: `Een tweede coronagolf staat bovenaan de lijst met zorgen van fondsmanagers, volgens een enquête van Bank of America.`,
            imageComponent={
                <FdImgix
                    src="https://fd-internal-development.imgix.net/XSsvNsfpytwq-OQdMRmsCm7J1i8.jpg?auto=format"
                    imageSizes={{
                        widthS: '300px',
                        widthM: '351px',
                        widthL: '599px',
                    }}
                />
            }
        />
    );
}
```

</details>

<details>
<summary>LinkCard</summary>

[Demo](https://design-system.fd.nl/card/link-card)

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

[Demo](https://design-system.fd.nl/card/vertical-1)

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
<summary>Vertical Card 5</summary>

[Demo](https://design-system.fd.nl/card/vertical-5)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/card/VerticalCard5.css";
```

```
import { VerticalCard5 } from "@fdmg/design-system/components/card/VerticalCard5";

function Foo() {
    return (
        <VerticalCard5
            id="1321841"
            imageUrl="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format&q=45&w=560&h=315"
            imageUrlS="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format&q=45&w=560&h=315"
            imageUrlM="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0637898686679174%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format&q=45&w=944&h=531"
            imageUrlL="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0637898686679174%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format&q=45&w=944&h=531"
            title="Den Haag zet druk op verhuurders om huurverlaging te slikken"
            intro="Het Rijk sluit overheidsingrijpen niet uit om een akkoord tussen verhuurders en winkeliers af te dwingen, nu onderhandelingen moeizaam verlopen."
        />
    );
}
```

</details>

<details>
<summary>Vertical Card 6</summary>

[Demo](https://design-system.fd.nl/card/vertical-6)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/card/VerticalCard6.css";
import "@fdmg/design-system/components/utils/image/FdImgix.css";
```

```
import { VerticalCard6 } from "@fdmg/design-system/components/card/VerticalCard6";
import { FdImgix } from "@fdmg/design-system/components/utils/image/FdImgix";

function Foo() {
    return (
        <VerticalCard6
            className="xs-12 s-6 m-4 l-3"
            imageComponent={
                <FdImgix
                    src={"https://fd-internal-development.imgix.net/XSsvNsfpytwq-OQdMRmsCm7J1i8.jpg?auto=format"}
                    imageSizes={{
                        widthS: '300px',
                        widthM: '351px',
                        widthL: '599px',
                    }}
                />
            }
            id="1345422"
            label="Arbeidsmarkt"
            title="Lockdown leidt tot recordstijging aantal WW-uitkeringen in april"
            url="https://fd.nl/economie-politiek/1345422/lockdown-leidt-tot-recordstijging-aantal-ww-uitkeringen-in-april"
        />
    );
}
```

</details>

### Misc.

<details>
<summary>A/B Testing component</summary>

[Demo](https://design-system.fd.nl/ab)

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
<summary>Accordion</summary>

[Demo](https://design-system.fd.nl/accordion)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/accordion/Accordion.css";
```

```
import { Accordion } from '@fdmg/design-system/components/accordion/Accordion';

function Foo() {
    return (
        <Accordion items={[
            {
                title: 'title',
                content: <span>description</span>,
            },
        ]} />
    );
}
```

</details>

<details>
<summary>AuthorInfo</summary>

[Demo](https://design-system.fd.nl/author-info)

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
<summary>CookieConsent</summary>

[Demo](https://design-system.fd.nl/cookieconsent#cookie-consent)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/cookieconsent/CookieConsent.css";
```

```
import { CookieConsent } from '@fdmg/design-system/components/cookieconsent/CookieConsent';

function Foo() {
    return (
        <CookieConsent
            description={
                <>
                    <p>
                        FD Mediagroep (FDMG) en de daarbij horende
                        website: FD.nl en door haar geselecteerde
                        Partners hebben toegang tot uw gegevens en
                        gebruiken deze informatie voor de onderstaande
                        doeleinden. Klik op een doel om uw voorkeuren
                        aan te passen en om meer te weten te komen over
                        wie er om uw toestemming vraagt en/of rechtmatig
                        belang claimt om uw gegevens voor dat doel te
                        verwerken. Houd er rekening mee dat wanneer alle
                        doeleinden zijn geweigerd, dit een negatief
                        effect op bepaalde functies van de website kan
                        hebben.
                    </p>
                    <p>
                        Voor sommige doeleinden kunnen jouw
                        persoonsgegevens worden verwerkt op de
                        juridische grond van rechtmatig belang
                    </p>
                </>
            }
            title={
                <header className={styles.header}>
                    <h1>Cookies</h1>
                </header>
            }
            opened={true}
            onClose={() => {}}
        />
    );
}
```

</details>

<details>
<summary>LockedContent</summary>

[Demo](https://design-system.fd.nl/cookieconsent#locked-content)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/cookieconsent/CookieConsent.css";
```

```
import { LockedContent } from '@fdmg/design-system/components/cookieconsent/CookieConsent';

function Foo() {
    return (
        <LockedContent
            vendorName="youtube"
            lockDescription={
                <p>
                    In verband met de door u gekozen
                    cookievoorkeuren kunnen wij deze Youtube-video
                    niet tonen. Klik hier om akkoord te gaan met de
                    cookievoorkeuren die nodig zijn om deze
                    Youtube-video te laden.
                </p>
            }
        >
            <div className="embed-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/T_tN4CnushY"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </LockedContent>
    );
}
```

</details>

<details>
<summary>Grid</summary>

The CSS Grid is an external component and can be found here:
[Demo](https://design-system.fd.nl/grid)
[Source](https://github.com/FDMediagroep/fdmg-css-grid)

</details>

<details>
<summary>Modal</summary>

[Demo](https://design-system.fd.nl/modal)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
import "@fdmg/design-system/components/modal/Modal.css";
```

```
import { Modal } from '@fdmg/design-system/components/modal/Modal';

function Foo() {
    return (
        <Modal opened={true} onClose={() => {}>
            <>
                <h2>Abonnement wijzigen of opzeggen</h2>
                <p>
                    Voor wijzigingen kunt u elk moment bellen. Voor
                    opzeggen geeft u dit uiterlijk 1 maand voor het
                    einde van de abonnements- of actieperiode
                    telefonisch door aan Klantenservice
                </p>
                <p>
                    <a href="tel:0800 666 6667">0800 666 6667</a>{' '}
                    (gratis, ma t/m vr 07.30 - 18.00 uur en za 07.30 -
                    11.30 uur).
                </p>
                <p>
                    Ook kijken we graag samen met u naar een
                    abonnementsvorm die wellicht beter bij u past.
                </p>
            </>
        </Modal>
    );
}
```

</details>

<details>
<summary>StockTicker</summary>

[Demo](https://design-system.fd.nl/stock-ticker)

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

<details>
<summary>Typography</summary>

[Demo](https://design-system.fd.nl/typography)

Component CSS:

```
import "@fdmg/design-system/components/design-tokens/design-tokens.css";
```

```
function Foo() {
    return (
        <h1 className="heading serif xs">Heading xs</h1>
        <h1 className="heading serif s">Heading s</h1>
        <h1 className="heading serif m">Heading m</h1>
        <h1 className="heading serif l">Heading l</h1>
        <h1 className="heading serif xl">Heading xl</h1>
        <h1 className="heading serif xxl">Heading xxl</h1>

        <h1 className="heading sans xs">Heading xs</h1>
        <h1 className="heading sans s">Heading s</h1>
        <h1 className="heading sans m">Heading m</h1>
        <h1 className="heading sans l">Heading l</h1>
        <h1 className="heading sans xl">Heading xl</h1>
        <h1 className="heading sans xxl">Heading xxl</h1>

        <p className="body-text serif xs">body-text serif xs</p>
        <p className="body-text serif s">body-text serif s</p>
        <p className="body-text serif m">Reserved</p>
        <p className="body-text serif l">Reserved</p>
        <p className="body-text serif xl">Reserved</p>
        <p className="body-text serif xxl">Reserved</p>

        <p className="body-text serif xs bold">
            body-text serif xs bold
        </p>
        <p className="body-text serif s bold">
            body-text serif s bold
        </p>
        <p className="body-text serif m bold">Reserved</p>
        <p className="body-text serif l bold">Reserved</p>
        <p className="body-text serif xl bold">Reserved</p>
        <p className="body-text serif xxl bold">Reserved</p>

        <p className="body-text sans xs">body-text sans xs</p>
        <p className="body-text sans s">body-text sans s</p>
        <p className="body-text sans m">body-text sans m</p>
        <p className="body-text sans l">Reserved</p>
        <p className="body-text sans xl">Reserved</p>
        <p className="body-text sans xxl">Reserved</p>

        <p className="body-text sans xs bold">
            body-text sans xs bold
        </p>
        <p className="body-text sans s bold">
            body-text sans s bold
        </p>
        <p className="body-text sans m bold">
            body-text sans m bold
        </p>
        <p className="body-text sans l bold">Reserved</p>
        <p className="body-text sans xl bold">Reserved</p>
        <p className="body-text sans xxl bold">Reserved</p>

    );
}
```

</details>
