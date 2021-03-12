<template>
  <div>
    来自父组件的馈赠 ---> {{message}}
    <slot name="sec"></slot>
    <slot name="min"></slot>
    <slot name="hour"></slot>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    message: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>