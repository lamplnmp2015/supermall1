const TerserPlugin = require("terser-webpack-plugin");
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = webpackMerge.merge(baseConfig,{
  //当前版本需要的配置
  //压缩工具代替uglifyjs
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  }
})
// module.exports  = {
//   //压缩工具代替uglifyjs
//   optimization: {
//     minimize: true,
//     minimizer: [new TerserPlugin()],
//   }
// }