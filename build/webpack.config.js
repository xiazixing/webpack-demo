const path = require('path');
const utils = require('./utils');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  // JavaScript 执行入口文件
  entry: './main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules:[
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test:/\.css$/,
        use:ExtractTextPlugin.extract({
           use: ['css-loader'],
          // use: ['style-loader',{
          //   loader:'css-loader',
          //   options:{
          //     minimize:true
          //   }
          // }]
        }),

      }
    ]
  },
  plugins:[
    new ExtractTextPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename:'css/[name].css'
      // filename:utils.assetsPath('css/[name]_[contenthash:8].css')
    })
  ]
};
