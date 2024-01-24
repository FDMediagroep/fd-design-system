import React, { Fragment, useEffect, useState } from 'react';
import { ArticleImage } from '../components/article-image/ArticleImage';
import { Infographic } from '../components/infographic/Infographic';
import { InfographicExtended } from '../components/article-image/InfographicExtended';
import { NumberFrame } from '../components/numberframe/NumberFrame';
import { Quote } from '../components/quote/Quote';
import { ReadMore } from '../components/readmore/ReadMore';
import { WordFrame } from '../components/wordframe/WordFrame';
import { Summary } from '../components/article-summary/Summary';
import { TextFrame } from '../components/textframe/TextFrame';
import { LinkBlock } from '../components/article-link-block/LinkBlock';
import { Vimeo } from '../components/vimeo/Vimeo';
import { Youtube } from '../components/youtube/Youtube';
import { BulletPoint } from '../components/bullet-point/BulletPoint';
import { OEmbed } from '../components/oembed/OEmbed';
import { RelatedPdf } from '../components/related-pdf/RelatedPdf';
import {
    fdmgHtmlEmbed,
    fdmgObject,
    fdmgStockQuote,
} from '@fdmg/article-xml-json';

function decodeHtml(encodedHtml: string) {
    return encodedHtml
        .replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&gt;/g, '>')
        .replace(/&lt;/g, '<')
        .replace(/&amp;/g, '&');
}

function HtmlEmbed(props: any) {
    const [html, setHtml] = useState(null);

    useEffect(() => {
        setHtml(decodeHtml(props.html));
    }, [props.html]);

    try {
        return <div dangerouslySetInnerHTML={{ __html: html }} />;
    } catch (e) {
        console.error(e);
        return <div />;
    }
}

function mergeParagraph(
    paragraphContents: fdmgObject[],
    key?: string | number
) {
    const jsx: JSX.Element[] = [];
    paragraphContents?.forEach((pContent, idx: number) => {
        switch (pContent.name) {
            case 'fdmg-stock-quote':
                const stockQuote = pContent as fdmgStockQuote;
                jsx.push(
                    <a
                        key={`${key}-${idx}`}
                        data-isin={stockQuote.isin}
                        data-exchange={stockQuote.exchange}
                        className="company-quote"
                        target="_blank"
                        rel="noreferrer noopener"
                        data-ga-name="article_beurskoers_click"
                        data-ga-category="articles"
                        data-ga4-category="user interactions"
                        data-ga-action="beurskoers click"
                        data-ga-label={stockQuote.isin}
                        data-ga-custom-properties="{%22article_id%22: null, %event_value%22: null, %page_notification%22: null, %22section%22: null, %22subsection%22: null}"
                    >
                        {pContent['dataName'] ? (
                            <span>{pContent['dataName']}</span>
                        ) : null}
                        {pContent['dataPrice'] ? (
                            <span>
                                {pContent['dataCurrency'] ?? '$'}
                                {pContent['dataPrice']}
                            </span>
                        ) : null}
                        {pContent['dataDifference'] ? (
                            <span className="drop">
                                {pContent['dataDifference']}
                            </span>
                        ) : null}
                    </a>
                );
                break;
            case '#text':
                jsx.push(
                    <Fragment key={`${key}-${idx}`}>
                        {pContent.content}
                    </Fragment>
                );
                break;
            default:
                jsx.push(
                    React.createElement(
                        pContent.name,
                        {
                            key: `${key}-${idx}`,
                            ...pContent.attributes,
                        },
                        pContent.content
                    )
                );
        }
    });

    return <p key={key}>{jsx}</p>;
}

export function mergeInlineContent(fdmgObjects: fdmgObject[]) {
    const jsx: JSX.Element[] = [];
    fdmgObjects.forEach((content, i) => {
        switch (content.name) {
            case 'h1':
                jsx.push(
                    <h1
                        key={i}
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                );
                break;
            case 'h2':
                jsx.push(
                    <h2
                        key={i}
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                );
                break;
            case 'h3':
                jsx.push(
                    <h3
                        key={i}
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                );
                break;
            case 'h4':
                jsx.push(
                    <h4
                        key={i}
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                );
                break;
            case 'h5':
                jsx.push(
                    <h5
                        key={i}
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                );
                break;
            case 'h6':
                jsx.push(
                    <h6
                        key={i}
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                );
                break;
            case 'p':
                jsx.push(mergeParagraph(content.children, i));
                break;
            case 'fdmg-bulletpoint':
                jsx.push(<BulletPoint key={i} {...(content as any)} />);
                break;
            case 'fdmg-image':
                jsx.push(<ArticleImage key={i} {...(content as any)} />);
                break;
            case 'fdmg-infographic':
                jsx.push(<Infographic key={i} {...(content as any)} />);
                break;
            case 'fdmg-infographic-extended':
                jsx.push(<InfographicExtended key={i} {...(content as any)} />);
                break;
            case 'fdmg-html-embed':
                jsx.push(
                    <HtmlEmbed key={i} html={(content as fdmgHtmlEmbed).html} />
                );
                break;
            case 'fdmg-instagram':
                jsx.push(<OEmbed key={i} {...(content as any)} />);
                break;
            case 'fdmg-number-frame':
                jsx.push(<NumberFrame key={i} {...(content as any)} />);
                break;
            case 'fdmg-pdf':
                jsx.push(<RelatedPdf key={i} {...(content as any)} />);
                break;
            case 'fdmg-quote':
                jsx.push(<Quote key={i} {...(content as any)} />);
                break;
            case 'fdmg-readmore':
                jsx.push(<ReadMore key={i} {...(content as any)} />);
                break;
            case 'fdmg-related-link':
                jsx.push(<LinkBlock key={i} {...(content as any)} />);
                break;
            case 'fdmg-soundcloud':
                jsx.push(<OEmbed key={i} {...(content as any)} />);
                break;
            case 'fdmg-stack-frame':
                jsx.push(<WordFrame key={i} {...(content as any)} />);
                break;
            case 'fdmg-summary':
                jsx.push(<Summary key={i} {...(content as any)} />);
                break;
            case 'fdmg-text-frame':
                jsx.push(<TextFrame key={i} {...(content as any)} />);
                break;
            case 'fdmg-twitter':
                jsx.push(<OEmbed key={i} {...(content as any)} />);
                break;
            case 'fdmg-vimeo':
                jsx.push(<Vimeo key={i} {...(content as any)} />);
                break;
            case 'fdmg-youtube':
                jsx.push(<Youtube key={i} {...(content as any)} />);
                break;
            default:
                // Treat non fdmg elements as normal HTML.
                if (content.name.indexOf('fdmg-') === -1) {
                    jsx.push(
                        React.createElement(content.name, {
                            key: i,
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify(content, null, 2),
                            },
                        })
                    );
                }
        }
    });
    return jsx;
}
