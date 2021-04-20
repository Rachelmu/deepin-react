entry-runtime-with-compiler

MVVM
大管家, 小管家


编译步骤
1. 解析
2. 转换-优化
   1. 类似括号合法, 将标签一个个入栈出栈, 最后清空
   2. 至少两层html才会标记讲台节点
   3. v-for和v-if, v-for优先级高, 不建议放在一起
   4. v-if就是三元表达式
   5. v-for应该渲染必现的数组元素, 不应该在v-if一起使用
3. 生成


子组件
1. parent create
2. parent beforeMount
   1. child create
   2. child beforeMount
   3. child mounted
3. parent mounted

创建自上而下, 挂载自下而上

