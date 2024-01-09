const rewriteConfig = require('./rewrites');

const serverless = {};

if (process.env.SERVERLESS) {
    console.log('Serverless target');
    serverless.target = 'serverless';
}

module.exports = {
    ...serverless,
    images: {
        domains: ['images.fd.nl', 'fd-external-development.imgix.net'],
        disableStaticImages: true,
    },
    async rewrites() {
        return [
            ...rewriteConfig,
            {
                source: '/colors',
                destination:
                    'https://fdmediagroep.atlassian.net/wiki/spaces/FDMT/pages/771162327/Colors',
            },
            {
                source: '/downloads',
                destination: 'https://fdmediagroep.atlassian.net/l/c/0gaajnrZ',
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/(verrijking|verijking)',
                destination:
                    '/achtergrond/1324449/alle-verrijking-op-een-rijtje',
                permanent: false,
            },
        ];
    },
    headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src http: https: data: blob: ws: wss: 'unsafe-inline' 'unsafe-eval';"
                            .replace(/\s{2,}/g, ' ')
                            .trim(),
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'strict-transport-security',
                        value: 'max-age=15724800',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                ],
            },
        ];
    },
    webpack: (config, options) => {
        // Markdown
        config.module.rules.push({
            test: /\.md$/,
            use: ['raw-loader'],
        });

        // SVG
        config.module.rules.unshift({
            test: /\.svg$/i,
            use: [
                {
                    loader: 'react-svg-loader',
                    options: {
                        jsx: false, // true outputs JSX tags
                        svgo: {
                            plugins: [
                                {
                                    removeViewBox: false,
                                },
                            ],
                        },
                    },
                },
            ],
        });

        /**
         * Add custom polyfills if needed.
         */
        const originalEntry = config.entry;
        config.entry = async () => {
            const entries = await originalEntry();

            if (
                entries['main.js'] &&
                !entries['main.js'].includes('./client/polyfills.js')
            ) {
                entries['main.js'].unshift('./client/polyfills.js');
            }

            return entries;
        };

        /**
         * This config replaces React with PreactX (3KB gzipped).
         * PreactX should be a 100% drop-in replacement for React.
         * If PreactX is causing problems we can just turn this config off.
         */
        // config.resolve.alias = Object.assign({}, config.resolve.alias, {
        //     react: 'preact/compat',
        //     react$: 'preact/compat',
        //     'react-dom': 'preact/compat',
        //     'react-dom$': 'preact/compat',
        // });

        /**
         * Generate webpack bundle report.
         */
        if (process.env.WEBPACK_BUNDLE_ANALYZER == 'true') {
            const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
            config.plugins.push(
                new BundleAnalyzerPlugin({
                    analyzerMode: 'static',
                    reportFilename: options.isServer
                        ? '../../analyzer/server.html'
                        : '../analyzer/client.html',
                    openAnalyzer: false,
                })
            );
        }

        return config;
    },
};
