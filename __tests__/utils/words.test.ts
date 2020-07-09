import { wordCount } from '../../src/utils/words';

describe('wordCount', () => {
    test('should return number of words', () => {
        const count = wordCount(` testing 123 \n and this\n`);
        expect(count).toBe(4);
    });

    test('should return 0 when null', () => {
        const count = wordCount(null);
        expect(count).toBe(0);
    });
});
