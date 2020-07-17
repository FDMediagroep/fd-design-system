const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssNormalize = require('postcss-normalize');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const NODE_ENV = JSON.stringify(
    process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
);
const devtool = NODE_ENV == '"development"' ? 'source-map' : undefined;
const isDev = NODE_ENV == '"development"';

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
        },
        {
            loader: require.resolve('css-loader'),
            options: cssOptions,
        },
        {
            // Options for PostCSS as we reference these options twice
            // Adds vendor prefixing based on your specified browser support in
            // package.json
            loader: require.resolve('postcss-loader'),
            options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebook/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                        autoprefixer: {
                            flexbox: 'no-2009',
                        },
                        stage: 3,
                    }),
                    // Adds PostCSS Normalize as the reset css with default options,
                    // so that it honors browserslist config in package.json
                    // which in turn let's users customize the target behavior as per their needs.
                    postcssNormalize(),
                ],
                sourceMap: isDev,
            },
        },
    ];
    if (preProcessor) {
        loaders.push({
            loader: require.resolve(preProcessor),
            options: {
                sourceMap: isDev,
            },
        });
    }
    return loaders;
};

module.exports = {
    devtool,
    // experiments: {
    //     outputModule: true,
    // },
    optimization: {
        minimize: true,
    },
    entry: {
        // Article
        '/components/article-meta/ArticleMeta': [
            './src/components/article-meta/ArticleMeta.tsx',
        ],
        '/components/article-image/ArticleImage': [
            './src/components/article-image/ArticleImage.tsx',
        ],
        '/components/article-tags/ArticleTags': [
            './src/components/article-tags/ArticleTags.tsx',
        ],
        '/components/financial-agenda/FinancialAgenda': [
            './src/components/financial-agenda/FinancialAgenda.tsx',
        ],
        '/components/infographic/Infographic': [
            './src/components/infographic/Infographic.tsx',
        ],
        '/components/article-image/InfographicExtended': [
            './src/components/article-image/Infographic.tsx',
        ],
        '/components/article-latest-news/ArticleLatestNews': [
            './src/components/article-latest-news/ArticleLatestNews.tsx',
        ],
        '/components/article-link-block/LinkBlock': [
            './src/components/article-link-block/LinkBlock.tsx',
        ],
        '/components/article-link-card/LinkCard': [
            './src/components/article-link-card/LinkCard.tsx',
        ],
        '/components/bullet-point/BulletPoint': [
            './src/components/bullet-point/BulletPoint.tsx',
        ],
        '/components/numberframe/NumberFrame': [
            './src/components/numberframe/NumberFrame.tsx',
        ],
        '/components/quote/Quote': ['./src/components/quote/Quote.tsx'],
        '/components/readmore/ReadMore': [
            './src/components/readmore/ReadMore.tsx',
        ],
        '/components/article-summary/Summary': [
            './src/components/article-summary/Summary.tsx',
        ],
        '/components/textframe/TextFrame': [
            './src/components/textframe/TextFrame.tsx',
        ],
        '/components/vimeo/Vimeo': ['./src/components/vimeo/Vimeo.tsx'],
        '/components/wordframe/WordFrame': [
            './src/components/wordframe/WordFrame.tsx',
        ],
        '/components/youtube/Youtube': ['./src/components/youtube/Youtube.tsx'],

        // Cards
        '/components/card/HorizontalCard1': [
            './src/components/card/HorizontalCard1.tsx',
        ],
        '/components/card/HorizontalCard2': [
            './src/components/card/HorizontalCard2.tsx',
        ],
        '/components/card/HorizontalCard3': [
            './src/components/card/HorizontalCard3.tsx',
        ],
        '/components/card/HybridCard1': [
            './src/components/card/HybridCard1.tsx',
        ],
        '/components/card/HybridCard2': [
            './src/components/card/HybridCard2.tsx',
        ],
        '/components/card/LinkCard': ['./src/components/card/LinkCard.tsx'],
        '/components/card/VerticalCard1': [
            './src/components/card/VerticalCard1.tsx',
        ],
        '/components/card/VerticalCard2': [
            './src/components/card/VerticalCard2.tsx',
        ],
        '/components/card/VerticalCard3': [
            './src/components/card/VerticalCard3.tsx',
        ],

        // Design Tokens
        '/components/design-tokens/icons': ['./src/design-tokens/icons.ts'],
        '/components/design-tokens/design-tokens': [
            './src/design-tokens/design-tokens.ts',
        ],

        // Controls
        '/components/input/BreakingSwitch': [
            './src/components/input/BreakingSwitch.tsx',
        ],
        '/components/button/Button': ['./src/components/button/Button.tsx'],
        '/components/button/ButtonCta': [
            './src/components/button/ButtonCta.tsx',
        ],
        '/components/button/ButtonFollow': [
            './src/components/button/ButtonFollow.tsx',
        ],
        '/components/input/Checkbox': ['./src/components/input/Checkbox.tsx'],
        '/components/input/Radio': ['./src/components/input/Radio.tsx'],
        '/components/input/Switch': ['./src/components/input/Switch.tsx'],
        '/components/input/TextArea': ['./src/components/input/TextArea.tsx'],
        '/components/input/TextInput': ['./src/components/input/TextInput.tsx'],

        // Misc.
        '/components/ab/ab': ['./src/components/ab/ab.tsx'],
        '/components/accordion/Accordion': [
            './src/components/accordion/Accordion.tsx',
        ],
        '/components/author-info/AuthorInfo': [
            './src/components/author-info/AuthorInfo.tsx',
        ],
        '/components/stockticker/StockTicker': [
            './src/components/stockticker/StockTicker.tsx',
        ],

        // Global
        main: ['./src/main.ts'],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        libraryTarget: 'commonjs2',
        publicPath: '',
        // module: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new MiniCssExtractPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: '../analyzer/lib.html',
            openAnalyzer: false,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './README.md',
                    to: './README.md',
                },
                {
                    from: './package.json',
                    to: './package.json',
                    transform(content, path) {
                        // Transform the content of package.json
                        const packageJson = JSON.parse(content);
                        return JSON.stringify(
                            {
                                ...packageJson,
                                version: process.env.RELEASE_VERSION
                                    ? process.env.RELEASE_VERSION.replace(
                                          'v',
                                          ''
                                      )
                                    : packageJson.version,
                            },
                            null,
                            2
                        );
                    },
                },
                {
                    from: './package.json',
                    to: './package.github.json',
                    transform(content, path) {
                        // Transform the content of package.json for GitHub Packages
                        const packageJson = JSON.parse(content);
                        return JSON.stringify(
                            {
                                ...packageJson,
                                name: '@fdmediagroep/design-system',
                                version: process.env.RELEASE_VERSION
                                    ? process.env.RELEASE_VERSION.replace(
                                          'v',
                                          ''
                                      )
                                    : packageJson.version,
                            },
                            null,
                            2
                        );
                    },
                },
            ],
        }),
    ],
    externals: {
        'date-input-polyfill': 'date-input-polyfill',
        react: 'react',
        'react-dom': 'react-dom',
        sass: 'sass',
    },
    module: {
        strictExportPresence: true,
        rules: [
            { parser: { requireEnsure: false } },
            // SVG
            {
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
            },
            // all files with a `.ts` or `.tsx` extension will be handled by a TypeScript loader
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.npm.json',
                        },
                    },
                ],
            },
            {
                oneOf: [
                    // "postcss" loader applies autoprefixer to our CSS.
                    // "css" loader resolves paths in CSS and adds assets as dependencies.
                    // "style" loader turns CSS into JS modules that inject <style> tags.
                    // In production, we use MiniCSSExtractPlugin to extract that CSS
                    // to a file, but in development "style" loader enables hot editing
                    // of CSS.
                    // By default we support CSS Modules with the extension .module.css
                    {
                        test: cssRegex,
                        exclude: cssModuleRegex,
                        use: getStyleLoaders({
                            importLoaders: 1,
                            sourceMap: isDev,
                        }),
                        // Don't consider CSS imports dead code even if the
                        // containing package claims to have no side effects.
                        // Remove this when webpack adds a warning or an error for this.
                        // See https://github.com/webpack/webpack/issues/6571
                        sideEffects: true,
                    },
                    // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
                    // using the extension .module.css
                    {
                        test: cssModuleRegex,
                        use: getStyleLoaders({
                            importLoaders: 1,
                            sourceMap: isDev,
                            modules: true,
                        }),
                    },
                    // Opt-in support for SASS (using .scss or .sass extensions).
                    // By default we support SASS Modules with the
                    // extensions .scss or .sass
                    {
                        test: sassRegex,
                        exclude: sassModuleRegex,
                        use: getStyleLoaders(
                            {
                                importLoaders: 3,
                                sourceMap: isDev,
                            },
                            'sass-loader'
                        ),
                        // Don't consider CSS imports dead code even if the
                        // containing package claims to have no side effects.
                        // Remove this when webpack adds a warning or an error for this.
                        // See https://github.com/webpack/webpack/issues/6571
                        sideEffects: true,
                    },
                    // Adds support for CSS Modules, but using SASS
                    // using the extension .module.scss or .module.sass
                    {
                        test: sassModuleRegex,
                        use: getStyleLoaders(
                            {
                                importLoaders: 3,
                                sourceMap: isDev,
                                modules: true,
                            },
                            'sass-loader'
                        ),
                    },
                ],
            },
        ],
    },
};
