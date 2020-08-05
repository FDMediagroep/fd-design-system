import * as colors from '../../public/assets/design-tokens/colors.json';
import { Summary, styleProps } from '../components/Tooltip';
import TooltipStore from '../stores/TooltipStore';

function hexToRgb(hex: string) {
    hex = hex.replace('#', '');
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + ',' + g + ',' + b;
}

function rgbToHex(r: number, g: number, b: number) {
    return (
        '#' +
        [r, g, b]
            .map((x) => {
                const hex = x.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            })
            .join('')
    );
}

function getTokenName(hex: string) {
    let token: string;
    Object.entries(colors.colors).forEach((colorTypeEntry) => {
        Object.entries(colorTypeEntry[1]).forEach((colorEntry) => {
            if (hexToRgb(colorEntry[1]) === hexToRgb(hex)) {
                token = `${colorTypeEntry[0]}${colorEntry[0]}`;
            }
        });
    });
    return token;
}

function tooltipHandler(e: MouseEvent) {
    let summary: Summary = {};
    styleProps.forEach((styleProp) => {
        const color = getComputedStyle(e.target as Element).getPropertyValue(
            styleProp
        );
        if (color) {
            const matches = color.match(/\d+/g);
            if (matches && matches.length === 3) {
                const hex = rgbToHex(
                    parseInt(matches[0], 10),
                    parseInt(matches[1], 10),
                    parseInt(matches[2], 10)
                );
                const name = getTokenName(hex);
                if (name) {
                    summary[styleProp] = {
                        hex,
                        rgb: color,
                        name,
                    };
                }
            }
        }
    });
    TooltipStore.setSummary(summary);
}

const register = [];

function clearRegister() {
    register.forEach((el) => {
        el.removeEventListener('mouseover', tooltipHandler);
    });
}

export function initializeDesignTokensTooltip(el: HTMLElement) {
    if (window.getComputedStyle) {
        clearRegister();
        el.addEventListener('mouseover', tooltipHandler);
        register.push(el);
    }
}
