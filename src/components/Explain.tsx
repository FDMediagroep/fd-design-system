import React, { useState, ReactElement, useEffect, useRef } from 'react';
import styles from './Explain.module.scss';
import { getCodePenData } from '../utils/codepen';
import { renderToString } from 'react-dom/server';
import pretty from 'pretty';
import { getStyle } from '../utils/styles';
import { getTags, getDestination } from '../utils/paths';
import Link from 'next/link';
import reactElementToJSXString from 'react-element-to-jsx-string';
import {
    initializeDesignTokensTooltip,
    clearDesignTokensTooltips,
} from '../utils/designTokensTooltip';

declare let window: Window | any;
declare let cssbeautify: (css: string) => string;

interface Props {
    /**
     * E.g.: component
     * If you want to use # anchors in the URL to jump to the position of this component on the page.
     * You can provide the anchor name here excluding the #.
     */
    anchor?: string;
    /**
     * Background color for JSFiddle or Codepen.
     */
    bgcolor?: string;
    /**
     * The root CSS class name of the component (without preceding dot).
     * All styles with this class name will be aggregated for the code-view.
     * Also accepts an array of class names.
     */
    cssClassNames: string[];

    /**
     * Hide the preview pane.
     */
    hidePreview?: boolean;
    /**
     * Hide buttons to external code editors like: CodePen and JSFiddle.
     */
    hideExternalCodeEditors?: boolean;

    /**
     * Default: column
     */
    previewFlexDirection?: 'column' | 'row';
    /**
     * Default: undefined
     */
    previewClassName?: string;
    /**
     * Description of the component.
     */
    description?: ReactElement;
    /**
     * The component to be rendered in the preview. The resulting HTML of the component is used for the code-view.
     */
    children: ReactElement;
    /**
     * External JavaScript to be loaded on JSFiddle and Codepen.
     */
    js_external?: string;
    /**
     * Title for this Explain component.
     */
    legend: string;

    /**
     * React component name.
     * In the production build the component name is minified.
     * Set this property to use this as the component name instead.
     */
    reactComponentName?: string;
}

function Explain(props: Props) {
    const bgcolor = props.bgcolor || 'var(--product-background)';
    const [css, setCss] = useState('');
    const [cssBase64, setCssBase64] = useState(null);
    const [html, setHtml] = useState('');
    const [react, setReact] = useState('');
    const [tags, setTags] = useState([]);
    const [destination, setDestination] = useState('');
    const [showCode, setShowCode] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        if (formRef.current) {
            [].slice
                .call((formRef.current as HTMLElement).childNodes)
                .forEach((child: HTMLElement) => {
                    initializeDesignTokensTooltip(child);
                });
        }
        return () => {
            clearDesignTokensTooltips();
        };
    }, [formRef]);

    useEffect(() => {
        setReact(
            reactElementToJSXString(
                props.children,
                props.reactComponentName
                    ? {
                          displayName: (el: ReactElement<any, any>) => {
                              return typeof el.type === 'string'
                                  ? el.type
                                  : props.reactComponentName;
                          },
                      }
                    : {}
            )
        );
        setHtml(
            pretty(
                renderToString(props.children).replace('data-reactroot=""', '')
            )
        );
        setTags(getTags(window.location.pathname));
        setDestination(getDestination(window.location.pathname));
        const styles = getStyle(...props.cssClassNames);
        if (styles) {
            const css = cssbeautify(styles);
            setCss(css);
            setCssBase64(btoa(unescape(encodeURIComponent(css))));
        }
    }, [props.children]);

    function copyCss() {
        if ('clipboard' in navigator) {
            (navigator as any).clipboard.writeText(css);
        } else if ('clipboardData' in window) {
            window.clipboardData.setData('Text', css);
        }
        alert('CSS copied to clipboard');
    }

    function copyReact() {
        if ('clipboard' in navigator) {
            (navigator as any).clipboard.writeText(react);
        } else if ('clipboardData' in window) {
            window.clipboardData.setData('Text', react);
        }
        alert('React code copied to clipboard');
    }

    function copyHtml() {
        if ('clipboard' in navigator) {
            (navigator as any).clipboard.writeText(html);
        } else if ('clipboardData' in window) {
            window.clipboardData.setData('Text', html);
        }
        alert('HTML copied to clipboard');
    }

    function copyAnchor(anchor: string) {
        const url = `${window.location.href.split('#')?.[0]}#${anchor}`;
        if ('clipboard' in navigator) {
            (navigator as any).clipboard.writeText(url);
        } else if ('clipboardData' in window) {
            window.clipboardData.setData('Text', url);
        }
        alert('URL copied to clipboard');
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleCodeToggle() {
        setShowCode(!showCode);
    }

    return (
        <>
            {props.anchor ? <a id={props.anchor} /> : null}
            <h2 className={styles.title}>
                {props.legend}
                {props.anchor ? (
                    <button
                        className={styles.anchor}
                        onClick={copyAnchor.bind(null, props.anchor)}
                        title="Copy link"
                        aria-label={`Copy link to ${props.legend}`}
                    >
                        🔗
                    </button>
                ) : null}
            </h2>
            {props.description && (
                <section className={styles.description}>
                    {props.description}
                </section>
            )}
            {!props.hidePreview && (
                <form
                    ref={formRef}
                    className={`${styles.previewContainer}${
                        props.previewFlexDirection === 'row'
                            ? ` ${styles.row}`
                            : ''
                    }${
                        props.previewClassName
                            ? ` ${props.previewClassName}`
                            : ''
                    }`}
                    onSubmit={handleSubmit}
                >
                    {props.children}
                </form>
            )}
            {!props.hideExternalCodeEditors && (
                <footer className={styles.footer}>
                    <form
                        target="_blank"
                        action="https://codepen.io/pen/define/"
                        method="post"
                    >
                        <input
                            type="hidden"
                            name="data"
                            value={getCodePenData(
                                'Fd Test Component',
                                [],
                                html,
                                css,
                                '',
                                props.js_external,
                                bgcolor
                            )}
                        />
                        <input
                            className={styles.invertable}
                            type="image"
                            src="/assets/codepen/Button-Black.png"
                            width="16"
                            height="16"
                            defaultValue="Open in CodePen"
                            title="Open in CodePen"
                        />
                    </form>
                    <form
                        action="https://jsfiddle.net/api/post/library/pure"
                        method="post"
                        target="_blank"
                    >
                        <input
                            type="image"
                            src="/assets/jsfiddle/logo.png"
                            width="16"
                            height="16"
                            value="Open in JSFiddle"
                            title="Open in JSFiddle"
                        />
                        <input
                            type="hidden"
                            name="title"
                            value={props.legend}
                        />
                        <input
                            type="hidden"
                            name="description"
                            value={props.legend}
                        />
                        <input type="hidden" name="html" value={html ?? ''} />
                        <input
                            type="hidden"
                            name="css"
                            value={`body { background-color: ${bgcolor}; }\r\n\r\n${css}`}
                        />
                        <input
                            type="hidden"
                            name="resources"
                            value={`${props.js_external},https://static.fd.nl/style-guide/assets/fonts/style.css,https://static.fd.nl/style-guide/assets/icons/style.css`}
                        />
                    </form>
                </footer>
            )}

            <h3
                className={styles.codeToggle}
                onClick={handleCodeToggle}
                title="Toggle code"
            >
                Code: {showCode ? '🔽' : '🔼'}
            </h3>
            <section
                className={`${styles.codeContainer}${
                    showCode ? '' : ` ${styles.hideCode}`
                }`}
            >
                <section>
                    <section>
                        <a
                            className={styles.copyIcon}
                            onClick={copyCss}
                            title="Copy CSS to clipboard"
                        >
                            📋
                        </a>
                        <a
                            className={styles.copyIconLabel}
                            href={`data:text/plain;charset=utf-16le;base64,${cssBase64}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            download="component.css"
                            title="Download CSS"
                        >
                            CSS
                        </a>
                    </section>
                    <textarea
                        className={styles.textArea}
                        value={css}
                        readOnly={true}
                    />
                </section>
                <section>
                    <section>
                        <a
                            className={styles.copyIcon}
                            onClick={copyHtml}
                            title="Copy HTML to clipboard"
                        >
                            📋
                        </a>
                        HTML
                    </section>
                    <textarea
                        className={styles.textArea}
                        value={html}
                        readOnly={true}
                    />
                </section>
                <section>
                    <section>
                        <a
                            className={styles.copyIcon}
                            onClick={copyReact}
                            title="Copy React code to clipboard"
                        >
                            📋
                        </a>
                        React
                    </section>
                    <textarea
                        className={styles.textArea}
                        value={react}
                        readOnly={true}
                    />
                </section>
            </section>

            <section className={styles.tags}>
                {!!tags?.length && <span>Synonyms:</span>}
                {tags?.map((tag) => (
                    <Link key={tag} href={destination} as={`/${tag}`}>
                        <a>{tag}</a>
                    </Link>
                ))}
            </section>
        </>
    );
}

export { Explain };
