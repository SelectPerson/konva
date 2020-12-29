let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader',  'sass-loader'],
            },
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        compress: true,
        port: 9000
    }
};