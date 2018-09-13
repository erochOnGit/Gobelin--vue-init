<template>
  <div class="square">
      {{ name }}
  </div>
</template>

<script>
export default {
  name: 'Square',
  data () {
    return {
      name: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="scss">
.square {
  color: red;
}
</style>
