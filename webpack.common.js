const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

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
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new FaviconsWebpackPlugin('./src/asset/image/logo.png')
    ],
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
            test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
            type: 'asset/resource'
          }
        ],
      },
}