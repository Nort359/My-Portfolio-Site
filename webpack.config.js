const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    src: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'dist'),
};

let env = "development";

module.exports = {
    context: PATHS.src,

    entry: './index',

    output: {
        filename: './bundle.js',
        path: PATHS.build
    },

    /*
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    */

    resolve: {
        extensions: ['.js']
    },

    plugins: [
        new UglifyJsPlugin(),
        new HTMLWebpackPlugin({
            title: "Личный Сайт Web-разработчика | Просвиркин Максим",
            minify: {
                html5: true
            },
            template: './index.html'
        }),
        new ExtractTextPlugin({
            filename: "./styles.css",
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    publicPath: './',
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },

    devtool: 'eval-souse-map',

    
    devServer: {
        hot: true
    },

    // watch: true
};