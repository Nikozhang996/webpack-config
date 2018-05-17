<template>
    <!-- app.vue 的template标签内只能有一个节点 -->
    <div id="app">
      
    </div>
</template>

<script>
export default {
  // 声明组件，之后便可以使用组件标签
  components: {},
  data() {
    return {};
  }
};
</script>

<!-- 设置scoped 表示当前组件下的id只在当前组件起作用，不会跟其他组件引起冲突 -->
<style>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #555;
  opacity: 0.5;
  z-index: -1;
}
</style>