1. 导入包

```dart
import 'package:flutter/material.dart';
```

> 导入 Material 组件库, flutter 默认提供这个组件库

2. 应用入口

```dart
void main() => runApp(MyApp());
```

> main 函数作为应用程序入口, main 调用 runApp 方法, 这个方法接受一个 Widget 参数, 在这里是 MyApp

3. 应用结构

```dart
class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        return new MaterialApp(
        	title: 'Flutter Demo From Jeden',
            theme: new ThemeData(
            	primarySwatch: Colors.blue
            ),
            home: new MyHomePage(title: 'My Demo Home')
        )
    }
}
```

> MyApp 代表主入口文件, 继承 StateLess 组件(无状态), 应用本身也是 Widget
>
> 在 Flutter 中, 大多数东西都是 widget(组件), 包括布局也是以组件形式提供
>
> 在 Flutter 构建页面时, 会调用组件 build 方法, 这个方法里面包含了如何构建 UI 界面
>
> home 是 Flutter 应用的首页, 也是一个组件

