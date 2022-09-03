console.log("aaaaaaa")
console.log("bbbbbbb")
let dist2 = '/test'
import './index.css'
require('./b.less')
// const path = require("path")
// console.log(__dirname)
// console.log(path.resolve(__dirname, dist2))
// 默认支持大部分的es6语法，对于es7以上的需要babel转码器
const fn =()=> console.log("es6...")
fn()

// es7 类的注解
@log
class Test{
  constructor() {
    console.log("test class constructor")
  }
}
let t = new Test();
// 首先执行化这个函数，在执行这个类，在实例化之前做些什么
function log(target) {
  console.log(target,'log fun1111')
}
console.log("$jquery",$)

const jpg = require('./assets/images/11.jpg')
console.log("img",img)
let img = new Image();
// img.src = jpg.default; // file-loader默认使用的是es6的模块化
img.src = jpg; // file-loader默认使用的是es6的模块化
document.body.appendChild(img)
