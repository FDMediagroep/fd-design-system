const { defaults } = require('jest-config');

const customJestConfig = {
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
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '\\.svg$': './jest/transformers/raw-loader.js',
    },
};

/**
 * We handle SVG in our own way instead of letting Next.js use next/image.
 * @param {} config
 * @returns
 */
const fdmgJestConfig = async (config) => {
    const nextConfig = { ...config };
    nextConfig.moduleNameMapper = {
        '^.+\\.(svg)$': '<rootDir>/__mocks__/fileMock.js',
        ...nextConfig.moduleNameMapper,
    };
    return nextConfig;
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = fdmgJestConfig(customJestConfig);
