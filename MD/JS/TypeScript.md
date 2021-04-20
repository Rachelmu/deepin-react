## 数据类型

### 布尔
```js
let isDone: boolean = true
```

### 数字
```js
let a: number = 1
```

### string
```js
let b: string = 'aaa'
```

### 数组
```js
let list: number[] = [1, 2, 3]
// 数据泛型
let list: Array<number> = [1, 2, 3]
```

### 元组


### 枚举
```ts
enum Color { Red, Green, Blue }
let c: Color = Color.Red
```

### Any
任意类型

### void

```js
function warnUser():void {
  console.log('i don t have a return')
}
```
### null和undefined


### 类型断言
```ts
let someValue: any = 'i am string'
let strLength: number = (<string>someValue).length // 断言someValue是字符串
```

## 变量声明
let, const, 解构, 对象解构, 展开运算符

## Interface 接口
> 定义对象类型
```ts
interface LabelledValue {
  label: string
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj, label)
}
```
可选
```ts
interface SquareString {
  color?: string;
  width?: number;
}
// 只读
interface Point {
  readonly x: number;
  readonly y: number;
}
// 作为属性的时候用readonly, 变量为const
```
函数接口
```ts
interface SearchFunc {
  (source: string, subString: string) : boolean
}

let mySearch: SearchFunc

function mySearch(source: string, subString: string) :boolean {
  return true
}
```

类类型

```ts
interface ClockInterface {
  currentTime: Date
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor (h: number, m: number) {

  }
}
```
接口继承

```ts
interface Shape {
  color: string
}
interface Square extends Shape {
  sideLength: number
}

// 可以继承多个
interface Square extends Shape, PenStroke {
  sideLength: number
}
```

### Class 类

```ts
class Animal {

}

class Dog extends Animal {
  name: string // 默认public, 实例, 子类均可访问
  private sex: string // 私有属性, 只能本身类(继承不可访问)内部访问
  protected xxx: string // 派生类也可访问
  readonly xx: string = 'hh' // 只读属性, 必须在constructor或者声明的时候初始化
  static a: string = '1' // Dog.a
  constructor () {
    super()
  }
}

// 类的使用

let a: Dog // a必须是Dog的实例
```

## 函数 function

```ts
function buildName(firstName: string, lastName?: string) { // lastName可选
  return 'hhhhh'
}
```
剩余参数, 默认参数

## 泛型

```js
// 入参和出参类型一致





function identity<T>(arg: T): T {
  return arg
}

```
