## 目录

1. [flex 布局](./flex.md)
2. 基本布局















## CSS 阻塞加载

1. css加载不会阻塞DOM树的解析
2. css加载会阻塞DOM树的渲染
3. css加载会阻塞后面js语句的执行

## @import和link区别

- @import是css2.1提供的功能,有兼容性问题
- link不只是可以引入css
- @import引用的CSS文件只有在引用它的那个css文件被下载、解析之后，浏览器才会知道还有另外一个css需要下载，这时才去下载，然后下载后开始解析、构建render tree等一系列操作。这就导致浏览器无法并行下载所需的样式文件。
- 多个@import还会导致下载紊乱

## CSS预处理器对比

**Stylus, Sass, Less**

- 三者均可嵌套

- Stylus和Less可以省略大括号, 冒号, 分号
- 变量赋值: Stylus使用等号, Sass和Less使用冒号

|       名字       | 写法      | 变量支持                                               | 函数                       |
| :--------------: | --------- | ------------------------------------------------------ | -------------------------- |
| Stylus`个人使用` | 无        | 数字,字符串,颜色,布尔型,空(null),数组,maps(类似Js数组) | -                          |
|       Sass       | $表示变量 | -                                                      | @function定义, @return返回 |
|       Less       | @表示变量 | -                                                      | -                          |

三者总体上还是很类似的, 如果面试问到了就说弥补了原生CSS的不足, 比如变量定义,mixin, 嵌套使用可以更清晰展示CSSOM



## 两大经典bug

### 1. margin 塌陷

```html
<div class='wrapper'>
    <div class='inner'>
       <!-- 我设置margin-top会把wrapper拉下来 --> 
    </div>
</div>
<style>
    .wrapper {
        height: 300px;
        width: 300px;
        background-color: #0f0;
    }
    .inner {
        height: 100px;
        width: 100px;
        background-color: #00f;
        margin-top: 20px;
    }
</style>
```

**解决:** 设置BFC元素

**触发BFC的条件:**

- float的值不是none
- position的值不是static或者relative
- display的值是inline-block、table-cell、flex
- overflow的值不是visible

任意一个设置就会触发BFC, 也会解决margin塌陷问题

### 2. margin 合并

```html
<div class='top'>
    我设置margin-bottom,但是小于下面的margin-top,所以听他的
</div>
<div class='bottom'>
      我设置了margin-top,并且大于父元素的margin-bottom, 所以我们间距是200px
 </div>
<style>
    .top {
        height: 300px;
        background-color: #0f0;
        margin-bottom: 100px;
    }
    .bottom {
        height: 100px;
        width: 100px;
        background-color: #00f;
        margin-top: 200px;
    }
</style>
```

**不解决, 没什么影响**



## 伪元素

伪元素天生是行级元素



## 浮动

使用浮动有什么影响:
产生浮动流, 块级元素看不到, 产生bfc元素, 文本类元素, 以及文本可以看到

**清除浮动:**

主要在子元素浮动的时候, 父元素如果未设置高度, 不能被撑开, 一般使用伪元素来实现清除浮动

```css
.father::after {
    content: '';
    display: block;
    clear: both;
}
```



## 选择器

标签选择器, 类选择器, ID选择器, 通用选择器, 伪类选择器, 伪元素选择器



## 权重

!important: 10000
内联: 1000
id: 100
类: 10
标签:１
通用＊，子，　相邻：　０



## 隐藏页面元素方法

- opacty: 0  会触发注册事件, 占据空间
- visibility: hidden 不会触发注册事件, 占据空间
- display: none  不会渲染, 不占据空间
- z-index: -999 被覆盖
- Transform: scale(0, 0) 缩放为0 不会触发注册事件



## 定位

sticky: 粘性定位, relative和fixed的合体, 只在父元素生效, 在父元素在显示区域时表现fix布局, 否则表现相对定位



## 雪碧图

在http1.1的好处

- 减少http请求
- 提前加载资源

写好的类名(主要是图片定位), 然后你只需要在自己的标签上加类名即可

缺点: 如果要修改一个就要全部替换, 维护成本较高

http2并无优势, 多路复用解决



## 盒模型

标准: 内容(width)+内边距+边框+外边距

怪异: 内容(width包括content, padding, border)+外边距



## 使用translate改变位置而非定位

transform改变不会触发回流, 只会触发复合, 而改变定位会触发回流,重绘,进而触发复合, 定位开销大



## 伪类和伪元素

伪类是一个冒号作为前缀, 是在元素在特定的状态显示特定的样式

伪元素是一个元素, 但不在文档树上,且不能被js选中



## z-index

![img](../../assets/CSS/z-index.jpg)

溢出显示省略号

```css
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

## CSS3

- 圆角
- 阴影
- 背景渐变
- transform 2D, 3D
- 过渡
- 动画
- 媒体查询
- flex布局



CSS书写规范顺序



```css
.css {
	/*位置属性, position, z-index, float, display*/
  position: relative;
  z-index: 10;
  display: block;
  
  /*大小属性, width, height, padding, margin*/
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: 10px;
  
  /*文字属性, color, font, line-height, text-align*/
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
 	/*背景颜色, background, border*/
	background-color: #f00;
  border: 1px solid #00f;
  
  /*其他*/
  animation: animation ease-in 1s;
  transition: all 1s;
}
```



居中元素

- text-align
- flex align-items:center
- margin: 0 auto
- top, left transform: translate(``-50%``, ``-50%``);
- flex