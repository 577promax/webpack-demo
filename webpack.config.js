
//nodejs调用文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path  = require('path');

//导出一个对象给webpack使用
module.exports = {
    entry:'./src/index.js', //定义入口
    //不设置默认dist目录
    // output:''
   
    //loader写在module.rules里
    module: {
        rules: [{
            test: /\.css$/, //匹配下css
            // loader: 'css-loader', //loader不需要明显引用
            //多个loader，改成use
            use: ['style-loader', 'css-loader'] //先写style，再css不然报错
        }]
    },
     //plugin是一个数组
    plugins:[
        //path.resolve是用来组合路径
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname, './src/index.html')
        })
    ]
}