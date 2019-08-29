## 工厂模式

```js
function createPerson(name) {
    let o = new Object()
    o.name = name
    o.getName = function () {
        console.log(this.name)
    }
    return o
}
let me = createPerson('Jeden')
```

缺点: 对象无法识别, 因为每一个实例都指向object原型

## 构造函数模式

```js
function Person(name) {
    this.name = name
    this.getName = function () {
        console.log(this.name)
    }
}

let me = new Person('Jeden')
```

优点: 实例可以识别

缺点: 每一次都会创建一个新的方法, 造成内存泄漏

## 构造函数模式优化

```js
function Person(name) {
    this.name = name
    this.getName = getName
}
function getName() {
    console.log(this.name)
}
```

优点: 解决了每一次都创建新方法的问题

缺点: 封装不完善

## 原型模式

```js
function Person(name) {
    
}

Person.prototype.name = 'Jeden'
Person.prototype.getName = function () {
    console.log(this.name)
}
```

优点: 方法不会重新创建

缺点: 共享所有属性, 不能初始化参数

## 原型模式优化

```js
function Person(name) {
    
}

Person.prototype = {
    constructor: Person,
    name: 'kevin',
    getName: function () {
        console.log(this.name);
    }
}
```

优点: 可以识别实例

缺点: 原型模式的缺点

## 组合模式

```js
function Person(name) {
    this.name = name
}
Person.prototype.getName = function () {
    return this.name
}
```

优点:该共享共享, 该私有就私有, 使用最广泛

缺点: 封装性还是不是很好

