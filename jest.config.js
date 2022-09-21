const { defaults } = require('jest-config');

const customJestConfig = {
    ...defaults,
    preset: 'ts-jest',
    collectCoverage: true,
    coverageDirectory: 'js-coverage',
    coverageReporters: ['lcov', 'text'],
    testPathIgnorePatterns: ['/cypress/', '__tests__/mockdata/'],
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
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
