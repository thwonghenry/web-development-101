const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './main.jsx',
    output: {
        filename: path.join('dist', 'bundle.js'),
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: ['node_modules'],
            use: [
                'babel-loader',
            ]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': 'production',
        })
    ]
};
