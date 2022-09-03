# 打包分类存储
```javascript
 // css文件
  new MiniCssExtractPlugin({
    filename: './css/index.css'
  }),
  // js文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/index.js'
  }, 
  第一次打包发布
  index.123.js，文件会被浏览器自动缓存
  当第二次修改打包发布，若文件名不变，浏览器会不会下载新的文件
  hash--内容如果发生改变，hash值就会发生改变
```
# 全局变量
```javascript
  const webpack = require("webpack")
  // 全局变量的配置
  new webpack.ProvidePlugin({
    $: 'jquery'
  })
  // 问题是打包的时候会把jquery第三方包一起打包
  // 需要使用external(外部的)
```
# 图片加载处理 file-loader url-loader
```javascript
 1: 使用js的方式引入
 2：使用css的方式引入(设置背景图片)
 3: 标签的方式引入
```
# 图片打包优化(使用url-loader代替图片)
```javascript
 1: 对于小于多少的图片，可以打包时候转换为base64
 2: 对于较大的图片，直接提供url，让浏览器下载，可以使用cdn优化
```
# 样式兼容性
1：配置postcss.config.js(引入autoprefixer)
2: 配置postcss-loader
3: 配置package.json browsersList
# 多页面打包