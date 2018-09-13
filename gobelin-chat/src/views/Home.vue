<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Container msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Container from "@/components/Container.vue";

export default {
  name: "home",
  components: {
    Container
  }
};
</script>
