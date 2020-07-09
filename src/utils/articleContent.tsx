import React from 'react';
import { ArticleImage } from '../components/article-image/ArticleImage';
import { Infographic } from '../components/infographic/Infographic';
import { InfographicExtended } from '../components/article-image/Infographic';
import { NumberFrame } from '../components/numberframe/NumberFrame';
import { Quote } from '../components/quote/Quote';
import { ReadMore } from '../components/readmore/ReadMore';
import { WordFrame } from '../components/wordframe/WordFrame';
import { Summary } from '../components/article-summary/Summary';
import { TextFrame } from '../components/textframe/TextFrame';
import { LinkBlock } from '../components/article-link-block/LinkBlock';
import { Vimeo } from '../components/vimeo/Vimeo';
import { Youtube } from '../components/youtube/Youtube';
import { XMLSerializer } from 'xmldom';
import { BulletPoint, Alignment } from '../components/bullet-point/BulletPoint';
import { OEmbed } from '../components/oembed/OEmbed';
import { RelatedPdf } from '../components/related-pdf/RelatedPdf';

function innerHTML(node: Element, tagName?: string) {
    if (tagName) {
        if (!node.getElementsByTagName(tagName).length) {
            return '';
        }
        return new XMLSerializer()
            .serializeToString(node.getElementsByTagName(tagName).item(0))
            .replace(`<${tagName}>`, '')
            .replace(`</${tagName}>`, '');
    } else {
        return new XMLSerializer()
            .serializeToString(node)
            .replace(`<${node.nodeName}>`, '')
            .replace(`</${node.nodeName}>`, '');
    }
}

function decodeHtml(encodedHtml: string) {
    return encodedHtml
        .replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&gt;/g, '>')
        .replace(/&lt;/g, '<')
        .replace(/&amp;/g, '&');
}

export function mergeInlineContent(doc: any) {
    const jsx: JSX.Element[] = [];
    [].slice
        .call(doc?.documentElement.childNodes)
        .forEach((childNode: HTMLElement, idx: number) => {
            switch (childNode.nodeName) {
                case 'fdmg-bulletpoint':
                    jsx.push(
                        <BulletPoint
                            key={idx}
                            bullets={innerHTML(childNode, 'fdmg-content').split(
                                '\n'
                            )}
                            alignment={
                                innerHTML(
                                    childNode,
                                    'fdmg-alignment'
                                ) as Alignment
                            }
                        />
                    );
                    break;
                case 'fdmg-image':
                    jsx.push(
                        <ArticleImage
                            key={idx}
                            caption={innerHTML(childNode, 'fdmg-caption')}
                            fileName={innerHTML(childNode, 'fdmg-filename')}
                            credit={innerHTML(childNode, 'fdmg-credit')}
                        />
                    );
                    break;
                case 'fdmg-infographic':
                    jsx.push(
                        <Infographic
                            key={idx}
                            src={innerHTML(childNode, 'fdmg-url')}
                            height={childNode.getAttribute('height')}
                        />
                    );
                    break;
                case 'fdmg-infographic-extended':
                    let responsiveUrl = '';
                    let desktopUrl = '';
                    let xlUrl = '';
                    [].slice
                        .call(childNode.getElementsByTagName('graphic'))
                        .forEach((graphic) => {
                            switch (graphic.getAttribute('view')) {
                                case 'responsive':
                                    responsiveUrl = graphic.getAttribute('url');
                                    break;
                                case 'desktop':
                                    desktopUrl = graphic.getAttribute('url');
                                    break;
                                case 'xl':
                                    xlUrl = graphic.getAttribute('url');
                                    break;
                            }
                        });
                    jsx.push(
                        <InfographicExtended
                            key={idx}
                            smallImageUrl={responsiveUrl}
                            largeImageUrl={desktopUrl}
                            extraLargeImageUrl={xlUrl}
                        />
                    );
                    break;
                case 'fdmg-html-embed':
                    jsx.push(
                        React.createElement('div', {
                            key: idx,
                            dangerouslySetInnerHTML: {
                                __html: decodeHtml(
                                    innerHTML(childNode, 'fdmg-html-content')
                                ),
                            },
                        })
                    );
                    break;
                case 'fdmg-instagram':
                    jsx.push(
                        <OEmbed
                            key={idx}
                            type="instagram-embed"
                            url={innerHTML(childNode, 'fdmg-url')}
                        />
                    );
                    break;
                case 'fdmg-number-frame':
                    jsx.push(
                        <NumberFrame
                            key={idx}
                            number={innerHTML(childNode, 'fdmg-heading')}
                            description={innerHTML(childNode, 'fdmg-content')}
                        />
                    );
                    break;
                case 'fdmg-pdf':
                    jsx.push(
                        <RelatedPdf
                            key={idx}
                            fileId={innerHTML(childNode, 'fdmg-id')}
                            fileName={innerHTML(childNode, 'fdmg-filename')}
                            title={innerHTML(childNode, 'fdmg-title')}
                        />
                    );
                    break;
                case 'fdmg-quote':
                    jsx.push(
                        <Quote
                            key={idx}
                            blockquote={innerHTML(childNode, 'fdmg-message')}
                            figcaption={innerHTML(childNode, 'fdmg-author')}
                        />
                    );
                    break;
                case 'fdmg-readmore':
                    jsx.push(
                        <ReadMore
                            key={idx}
                            title={childNode.getAttribute('title')}
                            links={innerHTML(childNode, 'fdmg-content').split(
                                '\n'
                            )}
                        />
                    );
                    break;
                case 'fdmg-related-link':
                    jsx.push(
                        <LinkBlock
                            key={idx}
                            title={innerHTML(childNode, 'fdmg-prefix')}
                            description={innerHTML(childNode, 'fdmg-leadtext')}
                            url={innerHTML(childNode, 'fdmg-relatedurl')}
                        />
                    );
                    break;
                case 'fdmg-soundcloud':
                    jsx.push(
                        <OEmbed
                            key={idx}
                            type="soundcloud-embed"
                            url={innerHTML(childNode, 'fdmg-url')}
                        />
                    );
                    break;
                case 'fdmg-stack-frame':
                    jsx.push(
                        <WordFrame
                            key={idx}
                            title={innerHTML(childNode, 'fdmg-heading')}
                            description={innerHTML(childNode, 'fdmg-content')}
                        />
                    );
                    break;
                case 'fdmg-summary':
                    jsx.push(
                        <Summary
                            key={idx}
                            title={childNode.getAttribute('title')}
                            summaries={innerHTML(
                                childNode,
                                'fdmg-content'
                            ).split('\n')}
                        />
                    );
                    break;
                case 'fdmg-text-frame':
                    let fileName: string;
                    const fNode = childNode.getElementsByTagName(
                        'fdmg-filename'
                    );
                    if (fNode.length) {
                        fileName = innerHTML(childNode, 'fdmg-filename');
                    }
                    jsx.push(
                        <TextFrame
                            key={idx}
                            image={fileName}
                            title={innerHTML(childNode, 'fdmg-heading')}
                            descriptions={innerHTML(
                                childNode,
                                'fdmg-content'
                            ).split('\n')}
                            alignment={innerHTML(childNode, 'fdmg-alignment')}
                        />
                    );
                    break;
                case 'fdmg-twitter':
                    jsx.push(
                        <OEmbed
                            key={idx}
                            type="twitter-embed"
                            url={innerHTML(childNode, 'fdmg-url')}
                        />
                    );
                    break;
                case 'fdmg-vimeo':
                    jsx.push(
                        <Vimeo key={idx} id={innerHTML(childNode, 'fdmg-id')} />
                    );
                    break;
                case 'fdmg-youtube':
                    jsx.push(
                        <Youtube
                            key={idx}
                            id={innerHTML(childNode, 'fdmg-id')}
                        />
                    );
                    break;
                default:
                    // Treat non fdmg elements as normal HTML.
                    if (childNode.nodeName.indexOf('fdmg-') === -1) {
                        if (!childNode?.childNodes.length) {
                            // Prevent further processing of empty node
                            return true;
                        }
                        jsx.push(
                            React.createElement(childNode.nodeName, {
                                key: idx,
                                dangerouslySetInnerHTML: {
                                    __html: innerHTML(childNode),
                                },
                            })
                        );
                    } else {
                        console.log(
                            new XMLSerializer().serializeToString(childNode)
                        );
                    }
            }
        });
    return jsx;
}
