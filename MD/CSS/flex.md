## 基本使用

父元素设置

```css
.wrapper {
    display: flex;
}

/* 行内元素 */
.inline-wrapper {
    display: inline-flex
}
```

设置在父元素上的属性

```css
.wapper {
    flex-direction: row | row-reverse | column | column-reverse; 排列方式
 				  /*默认值 | 右左 | 上下 | 下上*/
    flex-wrap: nowrap | wrap | wrap-reverse; 换行方式
    		 /*默认不换行 | 换行 | 向上换行*/
    flex-flow: flex-direction 和 flex-wrap 简写形式;
    justify-content: flex-start | flex-end | center | space-between | space-around; 横向布局
    			   /*默认排列   | 向右对齐 |   居中 |  两边对其, 中间空隙平分 | 平分空隙*/
    align-item: flex-start | flex-end | center | baseline | stretch; 竖向对齐方式
    		  /*顶头        | 顶底   | 竖向居中 | 第一行文字对其 | 布满默认值*/
    align-content: flex-start | flex-end | center | space-between | space-around | stretch; 当多行时规定多行的对齐方式, 单行无效
    			 /*顺序排列 | 向下对齐 | 居中对齐 | 行内平分空格, 上下顶 | 行内平分空格 | 默认*/
}
```

item的属性

```css
.item {
    order: 排名, 数值越小, 越靠前;
    flex-grow: 放大;
    flex-shrink: 缩小;
    flex: 前三个的缩写;
    flex-basis: length | auto;
    align-self: auto | flex-start | flex-end | center | baseline | stretch; 
                单个布局方式
}
```



一星机构:13276567890/qwe12345 机构Id:1294956 code:1294956,齐测产品灵活售卖8
二星机构-标准学习包：13267890987 机构id：1294952 code：1294952,齐测产品灵活售卖4
二星机构-3阶课：13192361131 机构id：1294988 code:1294988,齐测灵活售卖122101
三星机构：19000000000 机构id：4155 code：glyjg67,管理员机构67
机构密码都是qwe12345

