// 创建 package.json，这里会问一些问题，直接回车跳过就行
npm init 
//  推荐这个安装方式，当然你也安装在全局环境下
// 这种安装方式会将 webpack 放入 devDependencies 依赖中
npm install --save-dev webpack

// 打包
node_modules/.bin/webpack
