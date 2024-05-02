const { defaults } = require('jest-config');

const customJestConfig = {
    ...defaults,
    preset: 'ts-jest',
    collectCoverage: true,
    coverageDirectory: 'js-coverage',
    coverageReporters: ['lcov', 'text'],
    testPathIgnorePatterns: ['/cypress/', '__tests__/mockdata/'],
    moduleNameMapper: {
        '^.+\\.(svg)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/__mocks__/styleMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            // required due to custom location of tsconfig.json configuration file
            // https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig
            { tsconfig: 'tsconfig.test.json' },
        ],
        '\\.svg$': './jest/transformers/raw-loader.js',
    },
};

module.exports = customJestConfig;
