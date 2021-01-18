var webpack = require('webpack');
// 自由库
var path = require('path');

// 这是 packet.json 中 dependencies 下的
const VENOR = ["faker",
  "lodash",
  "react",
  "react-dom",
  "react-input-range",
  "react-redux",
  "redux",
  "redux-form",
  "redux-thunk"
]


var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')



module.exports = {
  entry: {
    // bundle 和 vendor 都是自己随便取名的，会映射到 [name] 中
    bundle: './src/index.js',
    vendor: VENOR
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // 既然我们希望缓存生效，就应该每次在更改代码以后修改文件名
    // [chunkhash]会自动根据文件是否更改而更换哈希
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        // 解决error: The code generator has deoptimised the styling of "" as it exceeds the max of "500KB".
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // 我们这里将之前的 HTML 文件当做模板
    // 注意在之前 HTML 文件中请务必删除之前引入的 JS 文件
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),

    // 只删除 dist 文件夹下的 bundle 和 manifest 文件
    new CleanWebpackPlugin(['dist/bundle.*.js','dist/manifest.*.js'], {
      // 打印 log
      verbose: true,
      // 删除文件
      dry: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // vendor 的意义和之前相同
      // manifest文件是将每次打包都会更改的东西单独提取出来，保证没有更改的代码无需重新打包，这样可以加快打包速度
      names: ['vendor', 'manifest'],

      // 配合 manifest 文件使用
      minChunks: Infinity
    })
  ]
};
