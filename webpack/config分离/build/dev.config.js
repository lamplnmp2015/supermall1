const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = webpackMerge(baseConfig,{
  //服务器
  devServer: {
    static: './dist',//为该文件夹提供服务
    port:5050
  },
})
// module.exports  = {
//   //服务器
//   devServer: {
//     static: './dist',//为该文件夹提供服务
//     port:5050
//   },
// }