import React, { useEffect, useState } from 'react';
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

function mergeParagraph(paragraphContents: any[], key?: string | number) {
    const jsx: JSX.Element[] = [];
    paragraphContents.forEach((pContent: any, idx: number) => {
        switch (pContent.name) {
            case 'fdmg-stock-quote':
                jsx.push(
                    <a
                        key={pContent.key}
                        data-isin={pContent.isin}
                        data-exchange={pContent.exchange}
                        className="company-quote"
                        target="_blank"
                        rel="noreferrer noopener"
                        data-ga-name="article_beurskoers_click"
                        data-ga-category="articles"
                        data-ga4-category="user interactions"
                        data-ga-action="beurskoers click"
                        data-ga-label={pContent.isin}
                        data-ga-custom-properties="{%22article_id%22: null, %event_value%22: null, %page_notification%22: null, %22section%22: null, %22subsection%22: null}"
                    >
                        {pContent['data-name'] ? (
                            <span>{pContent['data-name']}</span>
                        ) : null}
                        {pContent['data-price'] ? (
                            <span>
                                {pContent['data-currency'] ?? '$'}
                                {pContent['data-price']}
                            </span>
                        ) : null}
                        {pContent['data-difference'] ? (
                            <span className="drop">
                                {pContent['data-difference']}
                            </span>
                        ) : null}
                    </a>
                );
                break;
            case '#text':
                jsx.push(pContent.content);
                break;
            default:
                jsx.push(
                    React.createElement(
                        pContent.name,
                        {
                            key: pContent.key,
                            ...pContent.attributes,
                        },
                        pContent.content
                    )
                );
        }
    });

    return <p {...(key ? { key: key } : {})}>{jsx}</p>;
}

export function mergeInlineContent(doc: any) {
    const jsx: JSX.Element[] = [];
    doc.forEach((content) => {
        switch (content.name) {
            case 'h1':
                jsx.push(
                    <h1
                        key={content.key}
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                );
                break;
            case 'h2':
                jsx.push(
                    <h2
                        key={content.key}
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                );
                break;
            case 'h3':
                jsx.push(
                    <h3
                        key={content.key}
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                );
                break;
            case 'h4':
                jsx.push(
                    <h4
                        key={content.key}
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                );
                break;
            case 'h5':
                jsx.push(
                    <h5
                        key={content.key}
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                );
                break;
            case 'h6':
                jsx.push(
                    <h6
                        key={content.key}
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                );
                break;
            case 'p':
                jsx.push(mergeParagraph(content.contents, content.key));
                break;
            case 'fdmg-bulletpoint':
                jsx.push(<BulletPoint key={content.key} {...content} />);
                break;
            case 'fdmg-image':
                jsx.push(<ArticleImage key={content.key} {...content} />);
                break;
            case 'fdmg-infographic':
                jsx.push(<Infographic key={content.key} {...content} />);
                break;
            case 'fdmg-infographic-extended':
                jsx.push(
                    <InfographicExtended key={content.key} {...content} />
                );
                break;
            case 'fdmg-html-embed':
                jsx.push(
                    <HtmlEmbed
                        key={content.key}
                        html={content.dangerouslySetInnerHTML.__html}
                    />
                );
                break;
            case 'fdmg-instagram':
                jsx.push(<OEmbed key={content.key} {...content} />);
                break;
            case 'fdmg-number-frame':
                jsx.push(<NumberFrame key={content.key} {...content} />);
                break;
            case 'fdmg-pdf':
                jsx.push(<RelatedPdf key={content.key} {...content} />);
                break;
            case 'fdmg-quote':
                jsx.push(<Quote key={content.key} {...content} />);
                break;
            case 'fdmg-readmore':
                jsx.push(<ReadMore key={content.key} {...content} />);
                break;
            case 'fdmg-related-link':
                jsx.push(<LinkBlock key={content.key} {...content} />);
                break;
            case 'fdmg-soundcloud':
                jsx.push(<OEmbed key={content.key} {...content} />);
                break;
            case 'fdmg-stack-frame':
                jsx.push(<WordFrame key={content.key} {...content} />);
                break;
            case 'fdmg-summary':
                jsx.push(<Summary key={content.key} {...content} />);
                break;
            case 'fdmg-text-frame':
                jsx.push(<TextFrame key={content.key} {...content} />);
                break;
            case 'fdmg-twitter':
                jsx.push(<OEmbed key={content.key} {...content} />);
                break;
            case 'fdmg-vimeo':
                jsx.push(<Vimeo key={content.key} {...content} />);
                break;
            case 'fdmg-youtube':
                jsx.push(<Youtube key={content.key} {...content} />);
                break;
            default:
                // Treat non fdmg elements as normal HTML.
                if (content.name.indexOf('fdmg-') === -1) {
                    jsx.push(
                        React.createElement(content.name, {
                            key: content.key,
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
