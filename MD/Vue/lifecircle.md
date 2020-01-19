- beforeCtreate
  - 刚准备创建vue实例对象, 不能访问data, methods
- created
  - data和methods创建完成
  - 经常发起ajax请求获取数据
- beforeMount
  - 虚拟DOM还没渲染到页面上
- mounted
  - 组件创建的最后一个生命周期, 进行完毕后就到了运行中的阶段
  - 如果用到了UI插件, 那么在mounted内初始化插件
- beforeUpdate
  - data变化的时候触发, 有选择的触发
- updated
  - 更新完毕
- beforeDestroy
  - $destroy被调用的时候被触发
- destroyed
  - 组件被销毁



使用v-if判断是否获取数据, 如果获取了数据才去渲染子组件, 这样子组件就能获取到异步的prop值了