<template>
  <div class="loginform">
    <form action="" @submit.prevent="onFormSubmit">
      <input type="text" placeholder="" v-model="username">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    onFormSubmit () {
      if (this.username.length > 0) {
        this.$emit('submit', this.username)
      } else {
        // Display error?
      }
    }
  }
}
</script>

<style scoped lang="scss">
.loginform {
  background: white;
  width: 20vw;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  border: none;
}
</style>