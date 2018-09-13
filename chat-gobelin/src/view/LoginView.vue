<template>
    <div id="login">
      <SelectionableText />
      <input type="text">
    </div>
</template>

<script>
import SelectionableText from "./SelectionableText.vue"
export default {
  components: {
    SelectionableText
  }
}
</script>

<style>
input {
  all: unset;
}
</style>