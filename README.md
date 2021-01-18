- tutorial [link](https://zhuanlan.zhihu.com/p/30701816)
- reference [repo](https://github.com/KieSun/webpack-demo)
- reference links
    - [4 key concepts of webpack](https://www.netlify.com/blog/2017/01/03/4-key-concepts-of-webpack/)
    

- package.json 解读
  
      - babel-core 可以看做编译器，这个库知道如何解析代码
      - babel-loader 用于让 webpack 知道如何运行 babel
      - babel-preset-env 这个库可以根据环境的不同转换代码

- errors that may come across
    - ####css, images webpack config errors solved by changing depedency versions
    - Cannot find module '@babel/core'
           
       - solution           
           `npm install --save-dev @babel/core @babel/preset-env`
           
   