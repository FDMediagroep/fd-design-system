const withOffline = require('next-offline');
const rewriteConfig = require('./rewrites');

module.exports = withOffline({
    generateInDevMode: false,
    workboxOpts: {
        cleanupOutdatedCaches: true,
        swDest: '../public/service-worker.js',
        runtimeCaching: [
            // {
            //     urlPattern: /^https?.*\.[a-zA-Z0-9]*\??.*$/,
            //     handler: 'NetworkFirst',
            //     options: {
            //         cacheName: 'https-calls',
            //         networkTimeoutSeconds: 15,
            //         expiration: {
            //             maxEntries: 250,
            //             maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
            //         },
            //         cacheableResponse: {
            //             statuses: [0, 200],
            //         },
            //     },
            // },
        ],
        importScripts: [],
    },
    experimental: {
        modern: true,
        polyfillsOptimization: true,
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
                    destination:
                        'https://fdmediagroep.atlassian.net/l/c/0gaajnrZ',
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
    },
    webpack: (config, options) => {
        config.node = {
            fs: 'empty',
        };

        // Markdown
        config.module.rules.push({
            test: /\.md$/,
            use: ['raw-loader'],
        });

        // SVG
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                'raw-loader',
                {
                    loader: 'svgo-loader',
                    options: {
                        plugins: [
                            // { cleanupAttrs: false },
                            // { inlineStyles: false },
                            // { convertColors: { shorthex: false } },
                            // { convertEllipseToCircle: false },
                            // { convertPathData: false },
                            // { convertShapeToPath: false },
                            // { convertTransform: false },
                            // { convertStyleToAttrs: false },
                            // { mergePaths: false },
                            // { removeDoctype: false },
                            // { removeEditorsNSData: false },
                            // { removeEmptyContainers: false },
                            // { removeHiddenElems: false },
                            // { removeMetadata: false },
                            // { removeUselessDefs: false },
                            { removeViewBox: false },
                            // { removeXMLNS: false },
                            // { removeXMLProcInst: false },
                            // { reusePaths: false },
                        ],
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
});
