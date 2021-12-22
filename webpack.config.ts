import {Configuration} from 'webpack';
import HtmlWebpackPlugin = require("html-webpack-plugin");
import postcssPresetEnv from 'postcss-preset-env';

const config: Configuration = {
  mode: "development",
  entry: './entry.ts',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.pcss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                postcssPresetEnv({stage:1})
                // 'postcssPresetEnv'
                // ['postcssPresetEnv']
              ]
            }
          }
        }
      ]
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}

export default config;
