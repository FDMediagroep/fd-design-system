import { getRewrites, getTags, getDestination } from '../../src/utils/paths';

describe('Rewrites', () => {
    test('should return all matching paths', () => {
        let paths = getRewrites(`/cards`);
        expect(paths.length).toBe(1);

        paths = getRewrites(`/non-existing-url`);
        expect(paths.length).toBe(0);
    });

    test('should return all unique tags', () => {
        const tags = getTags(`/cards`);
        expect(tags).toStrictEqual([
            'card',
            'card/teaser',
            'card/teasers',
            'cards/teaser',
            'cards/teasers',
            'teaser',
            'teaser/card',
            'teaser/cards',
            'teasers',
            'teasers/card',
            'teasers/cards',
        ]);
    });

    test('should return no tags for non-existing url', () => {
        const tags = getTags(`/non-existing-url`);
        expect(tags).toStrictEqual([]);
    });

    test('should return no destination for non-existing url', () => {
        const tags = getDestination(`/non-existing-url`);
        expect(tags).toStrictEqual('');
    });

    test('should return destination', () => {
        const tags = getDestination(`/teasers`);
        expect(tags).toBe('/cards');
    });
});
