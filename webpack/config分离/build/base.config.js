const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
module.exports  = {
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'../dist'),
    filename:'bundle.js',
    // publicPath:'dist/'
    
  },
  mode:'development',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader','css-loader'] },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit:20000,
              esModule:false,
              name:'img/[name].[hash:8].[ext]'
            },
            
            
          },
          // {
          //   loader: 'file-loader',
          // }  
        ],
        type:'javascript/auto'
      },
      { test: /\.ts$/, use: 'ts-loader' },
      {test:/\.vue$/,
        use:{
          loader:'vue-loader'
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ],
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new webpack.BannerPlugin('最终版权归XX所有'),
    new htmlWebpackPlugin({template:'index.html'})
  ],
}