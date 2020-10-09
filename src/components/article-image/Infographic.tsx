import React from 'react';
import styles from './Infographic.module.scss';

interface Props {
    darkModeInvert?: boolean;
    smallImageUrl: string;
    largeImageUrl?: string;
    extraLargeImageUrl?: string;
    /**
     * variant-1: uses extraLargeImageUrl instead of largeImageUrl.
     */
    variant?: 'variant-1';
}

/**
 * Render an Infographic in an article.
 * @param props
 */
function InfographicExtended(props: Props) {
    return (
        <figure
            className={`${styles.infographic}${
                props.darkModeInvert ? ` ${styles.invertable}` : ''
            }`}
        >
            <picture>
                <source
                    media="(max-width:720px)"
                    srcSet={`${props.smallImageUrl}?cs=tinysrgb&w=360, ${props.smallImageUrl}?cs=tinysrgb&w=360&dpr=2 2x`}
                />
                {!props.variant ? (
                    <source
                        media="(min-width:721px)"
                        srcSet={`${
                            props.largeImageUrl ?? props.smallImageUrl
                        }?cs=tinysrgb&w=720, ${
                            props.largeImageUrl ?? props.smallImageUrl
                        }?cs=tinysrgb&w=720&dpr=2 2x`}
                    />
                ) : null}
                {props.variant === 'variant-1' ? (
                    <source
                        media="(min-width:721px)"
                        srcSet={`${
                            props.extraLargeImageUrl ?? props.smallImageUrl
                        }?cs=tinysrgb&w=900, ${
                            props.extraLargeImageUrl ?? props.smallImageUrl
                        }?cs=tinysrgb&w=900&dpr=2 2x`}
                    />
                ) : null}
                <img
                    alt="infographic"
                    src={`${props.smallImageUrl}?cs=tinysrgb&w=360`}
                />
            </picture>
        </figure>
    );
}

function getCssClassNames(): string[] {
    return [styles.infographic];
}

export { InfographicExtended, getCssClassNames };
