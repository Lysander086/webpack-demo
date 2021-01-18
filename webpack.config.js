// 自带的库
const path = require('path')
module.exports = {
  // 1 entry
  entry: './app/index.js', // 入口文件

  // 2 output
  output: {
    path: path.resolve(__dirname, 'build'), // 必须使用绝对地址，输出文件夹
    filename: "bundle.js" // 打包后输出文件的文件名
  },

  // 3 loaders
  module: {
    rules: [
      //  js use babel
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      
    ]
  }
}