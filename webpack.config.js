const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'dist'),
};

module.exports = {
    context: PATHS.src,
    entry: './index',

    output: {
        filename: 'bundle.js',
        path: PATHS.build
    },

    resolve: {
        extensions: ['.js']
    },

    plugins: [
        new UglifyJsPlugin(),
        new HTMLWebpackPlugin({
            title: "Личный Сайт Web-разработчика | Просвиркин Максим",
            /*
            minify: {
                html5: true
            },
            template: './template.html'
            */
        })
    ],

    

    devtool: 'eval-souse-map',

    watch: false
};