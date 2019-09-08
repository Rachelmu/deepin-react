## 原型链继承

```js
function Parent(name, age) {
    this.name = name
}

Parent.prototype.getName = function () {
    return this.name
}

function Child(name, age) {
    this.name = name
}

Child.prototype = new Parent()
```

缺点

1. 父类原型中引用类型属性被所有实例共享
2. 创建子类实例时不能向父类传参

## 借用构造函数

```js
function Parent() {
    this.name = ['Jeden', 'Zhan']
}

function Child() {
    Parent.call(this)
}

new Child()
```

优点

1. 创建实例时可以向父类传参
2. 避免了引用类型的共享

缺点

1. 方法都在构造函数定义, 每一次都会重新创建方法

## 组合继承(原型链和构造函数继承)

```js
function Parent(name) {
    this.name = name
}

Parent.prototype.getName = function () {
    return this.name
}

function Child(name, age) {
    Parent.call(this, name)
    this.age = age
}

Child.prototype = new Parent()
Child.prototype.constructor = Child
```

优点: 融合了原型链模式和构造函数模式继承的优点, 是JS里面最常用的继承方式

## 原型式继承

```js
function createObj(o) {
    function F() {}
    F.prototype = o
    return new F()
}
```

就是模拟 Object.createObject 的实现

缺点:

包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样

## 最后, 最完美的继承

其实是组合继承的改良版

组合继承会调用两次父类, new的时候一次, 设置原型的时候一次

我们应该把两次设置为一次

```js
function inherit(Parent, Child) {
    function F() {}
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.prototype.uber = Parent.prototype.constructor
}
```

夸赞就是

> 这种方式的高效率体现它只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。

