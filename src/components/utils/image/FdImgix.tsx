import React, { JSX } from 'react';
import Imgix, { SharedImgixAndSourceProps } from 'react-imgix';

import styles from './FdImage.module.scss';

type cssValue = `${number}${'px' | 'rem' | 'vw'}`;

interface Sizes {
    /**
     * How many columns wide is the image of this component on S screens
     */
    widthS: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | cssValue;
    /**
     * How many columns wide is the image of this component on M screens
     * @default defaults to the value of colS
     */
    widthM?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | cssValue;
    /**
     * How many columns wide is the image of this component on L screens
     * @default defaults to the value of colS
     */
    widthL?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | cssValue;
}

interface Crop {
    ratio: string;
    x: number;
    y: number;
    width: number;
    height: number;
}

interface Props extends Omit<SharedImgixAndSourceProps, 'sizes' | 'src'> {
    imageSizes: Sizes;
    crop?: Crop;
    src?: SharedImgixAndSourceProps['src'];
}

export const noImagePlaceholder = `${process.env.NEXT_PUBLIC_IMGIX_BASE_URL}/2b57bde2582fa63dc980a53f1a021ac5177ca468.png`;

/**
 * This component sets the correct sizes to load images based on our grid
 */
export function FdImgix({
    imageSizes,
    crop,
    className = '',
    ...imgixProps
}: Props): JSX.Element {
    const imageSizesWidth: Array<string> = [];

    // Calculate sizes for L screens
    if (imageSizes.widthL) {
        let lSize = imageSizes.widthL.toString();
        if (Number.isInteger(imageSizes.widthL)) {
            lSize = `calc(1080px / 12 * ${imageSizes.widthL})`;
        }
        imageSizesWidth.push(`(min-width: 1080px) ${lSize}`);
    }

    // Calculate sizes for M screens
    if (imageSizes.widthM) {
        let mSize = imageSizes.widthM.toString();
        if (Number.isInteger(imageSizes.widthM)) {
            mSize = `calc(768px / 12 * ${imageSizes.widthM})`;
        }
        imageSizesWidth.push(`(min-width: 768px) ${mSize}`);
    }

    // Calculate sizes for S screens
    let sSize = imageSizes.widthS.toString();
    if (Number.isInteger(imageSizes.widthS)) {
        sSize = `calc(100vw / 12 * ${imageSizes.widthS})`;
    }
    imageSizesWidth.push(sSize);

    if (crop && imgixProps.src) {
        imgixProps.imgixParams = imgixProps.imgixParams || {};
        imgixProps.imgixParams.rect = [crop.x, crop.y, crop.width, crop.height]
            .map((cropValue) => {
                /**
                 * Crops only work if the value starts with a '.'
                 * So if we got a number value we need to cast to a string and remove the first 0
                 */
                const stringValue = cropValue.toString();
                if (stringValue.startsWith('0.')) {
                    return stringValue.substring(1);
                } else if (stringValue === '1') {
                    return `${stringValue}.0`;
                }
                return stringValue;
            })
            .join(',');
    }

    // default imgix parameters
    if (imgixProps.imgixParams) {
        imgixProps.imgixParams.q = imgixProps.imgixParams.q ?? '45';
    }

    return (
        <>
            {!imgixProps.src && (
                <Imgix
                    className={`${styles['image']} ${className}`}
                    sizes={imageSizesWidth.join(', ')}
                    {...(imgixProps as SharedImgixAndSourceProps)}
                    src={`${noImagePlaceholder}`}
                />
            )}
            {imgixProps.src && (
                <Imgix
                    className={`${styles['image']} ${className}`}
                    sizes={imageSizesWidth.join(', ')}
                    {...(imgixProps as SharedImgixAndSourceProps)}
                />
            )}
        </>
    );
}
