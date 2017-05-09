# postcss-Demo

PostCSS 提供了一个解析器，它能够将 CSS 解析成抽象语法树（AST），简而言之是一个更加方便编辑css的解析器。
当然它也可以结合less或者sass一起使用。

~~~
//解析前
.circle {
  circle: 2rem #f00;
}

a {
 @link-colors all #eee;
}

//解析后
.circle {
  border-radius: 50%;
  width: 32px;
  width: 2rem;
  height: 32px;
  height: 2rem;
  background-color: #f00;
}

a {
  color: #eee;
}
a:visited {
  color: #eee;
}
a:focus {
  color: #eee;
}
a:hover {
  color: #eee;
}
a:active {
  color: #eee;
}
~~~


##说明
本插件是基于gulp自动化构建，必须npm install gulp。

##功能
1.简化很多css，使之编译成功。

2.css3动画优化，加前缀兼容。

3.rem，vmin优化。

4.兼容less，并成功编译less。

5.优化特性，如三角形，字体，圆

##使用方法
1.npm install

2.gulp css


## 关于 gulp postcss
1.有问题请提交github issue上。<br>
2.有什么好的建议或者改进可以联系作者。

## 联系方式
wechat : 139193411<br>
qq : [139193411](http://wpa.qq.com/msgrd?v=3&uin=139193411&site=qq&menu=yes)