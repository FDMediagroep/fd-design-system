const { defaults } = require('jest-config');

module.exports = {
    ...defaults,
    preset: 'ts-jest',
    collectCoverage: true,
    coverageDirectory: 'js-coverage',
    coverageReporters: ['lcov', 'text'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json',
        },
    },
    testPathIgnorePatterns: ['/cypress/', '__tests__/mockdata/'],
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
    },
    setupFiles: ['<rootDir>/jest/setupTest.js'],
    testEnvironment: 'jsdom',
    transform: {
        '\\.svg$': './jest/transformers/raw-loader.js',
    },
};
