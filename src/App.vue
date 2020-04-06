<template>
  <div>
    <h1>{{ a }}</h1>
    <!-- <h2>{{ a }}</h2>
    <h3>{{ a }}</h3>
    <h4>{{ a }}</h4>
    <h5>{{ a }}</h5>
    <h6>{{ a }}</h6> -->
    <button @click="onAdd">add</button>
    <button @click="onMine">mine</button>
  </div>
</template>
<script>

export default {
  data() {
    return {
      a: 1,
    };
  },
  methods: {
    onAdd() {
      this.a++;
    },
    onMine() {
      this.a--;
    },
  },
};
</script>
<style lang="scss" scope></style>
