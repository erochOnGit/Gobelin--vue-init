<template>
    <div id="login">
      <!-- <SelectionableText />
      <input type="text"> -->

      <LoginForm @submit="onFormSubmit"/>
    </div>
</template>

<script>
// import SelectionableText from "@/components/SelectionableText.vue"
import LoginForm from "@/components/LoginForm"
import store from "../store"

export default {
  components: {
    // SelectionableText,
    LoginForm
  },
  methods: {
      onFormSubmit (username) {
          this.$api.userRegister(
              username
              // avatar
          ).then((user) => {
            store.user = user
            this.$router.push("/")
          })
      }
  }
}
</script>

<style>
#login {
  width: 100vw;
  height: 100vh;
  background: url("../assets/fond.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  all: unset;
}
</style>