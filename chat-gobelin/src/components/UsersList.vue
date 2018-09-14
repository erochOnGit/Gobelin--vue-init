<template>
    <ul class="user-list">
        <UsersListUser v-for="(user,index) in users" :key="index" :user="user"/>
    </ul>
</template>

<script>
import UsersListUser from "@/components/UsersListUser"
import store from "../store"
export default {
  computed: {
    users: () => store.users
  },
  components: {
    UsersListUser
  }
}
</script>

<style scoped>
@keyframes movetoleft {
  0% {
    width: 20vw;
    height: 20vw;
    background: white;
    transform: translateX(40vw);
    color: white;
    position: absolute;
  }
  100% {
    width: 12vw;
    height: 60vh;
    background: white;
    position: relative;
  }
}
.user-list {
  all: unset;
  animation-duration: 2s;
  animation-name: movetoleft;
  display: block;
  width: 12vw;
  height: 60vh;
  padding: 10px 0;
  background: white;
  margin: 0px 30px;
  overflow: scroll;
  color: white;
}
.user-list li:hover {
  color: black;
}
</style>