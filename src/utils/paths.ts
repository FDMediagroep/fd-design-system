import rewrites from '../../rewrites';
import { pathToRegexp } from 'path-to-regexp';

function matchesUrl(url, rewrite) {
    const regexp = pathToRegexp(rewrite.source);
    const regexp2 = pathToRegexp(rewrite.destination);
    return !!regexp.exec(url) || !!regexp2.exec(url);
}

export function getTags(url: string) {
    const paths = getRewrites(url);
    const allTags = [];
    paths.forEach((path) => {
        const tagsString = path.source
            .replace('/', '')
            .replace('(', '')
            .replace(')', '');
        const tags = tagsString.split('|');
        tags.forEach((tag) => {
            if (allTags.indexOf(tag) === -1 && tag.length) {
                allTags.push(tag);
            }
        });
    });
    return allTags.length ? allTags : [];
}

export function getRewrites(url: string) {
    return rewrites.filter((rewrite) => matchesUrl(url, rewrite));
}

export function getDestination(url: string) {
    const result = rewrites.find((rewrite) => matchesUrl(url, rewrite));
    return result ? result.destination : '';
}
