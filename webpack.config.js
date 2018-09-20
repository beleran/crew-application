'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const srcPath = path.resolve('./src');
const htmlPath = path.resolve('./public/index.html');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const webpackConfig = {
    devtool: 'cheap-module-source-map',
    entry: [
        './src/index.js',
    ],
    output: {
        pathinfo: true,
        filename: 'static/js/bundle.js',
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath: '/',
        path: path.resolve('./build')
    },
    resolve: {
        modules: ['./node_modules'],
        extensions: ['.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: eslintFormatter,
                            eslintPath: require.resolve('eslint'),

                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                include: srcPath,
            },
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.js$/,
                        include: srcPath,
                        loader: require.resolve('babel-loader'),
                        options: {
                            cacheDirectory: true,
                        },
                    },
                    {
                        test: /\.scss$/,
                        use: [
                            require.resolve('style-loader'),
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 1,
                                },
                            },
                            {
                                loader: require.resolve('sass-loader'),
                            }
                        ]
                    },
                    {
                        exclude: [/\.js$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new InterpolateHtmlPlugin({
            PUBLIC_URL: '',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: htmlPath,
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        }),
    ]
};

if (process.env.NODE_ENV === 'development') {
    webpackConfig.entry.push(require.resolve('react-dev-utils/webpackHotDevClient'));
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = webpackConfig;
