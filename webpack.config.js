const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    resove: {
        extensions: ['.js']
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],

    

    devtools: 'eval-souse-map',

    watch: true
};