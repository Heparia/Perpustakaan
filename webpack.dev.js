const path = require('path');
const common = require('./webpack.common.js')
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true,
        client: {
            overlay: {
              errors: true,
              warnings: false,
            },
        },
    },
})