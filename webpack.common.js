const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/js/main.js'),
    },
    output: {
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'src/assets/images/[name].[ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: 'index.html',
        }),
        new FaviconsWebpackPlugin('./src/asset/image/logo.png'),
        new webpack.ProvidePlugin({
          process: 'process/browser'
       })
    ],
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify")
      },
      alias: {
        process: "process/browser"
      },
    },    
    module: {
        rules: [
          {
            test: /\.(s[ac]ss)$/i,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: () => [require('autoprefixer')],
                  },
                },
              },
              {
                loader: 'sass-loader',
              },
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg|webp|eot|ttf|woff)$/i,
            type: 'asset/resource',
          },          
        ],
      },
}