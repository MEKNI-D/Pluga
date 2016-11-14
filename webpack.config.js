var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
  entry: './src/main.ts',
    output: {
      path: './dist',
        filename:'app.bundle.js'
    },
    module:{
        loader:[
            {test:/\.ts\.scss$/,loaders : ['ts' ,'raw-loader', 'sass-loader']}
        ]
    },
    resolve :{
        extensions:[
            '','.js','.ts'
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './src/index.html'
        })
    ]

};