module.exports = {
  resolve: {
    // 文件扩展名，写明以后就不需要每个文件写后缀
    extensions: ['.js', '.css', '.json'],
    // 路径别名，比如这里可以使用 css 指向 static/css 路径
    alias: {
      '@': resolve('src'),
      'css': resolve('static/css')
    }
  },
  // 生成 source-map，用于打断点，这里有好几个选项
  devtool: '#cheap-module-eval-source-map',
}