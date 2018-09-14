<template>
    <li :value="message.username" class="message" :color="color" :style="ourmsg">
        <span class="username">
            {{ message.user.username }}
        </span> :  
        <span class="text">
            {{ message.text }}
        </span>
        <!-- <SelectionableText :message="message.user.username"/>
        <SelectionableText :message="message.text"/> -->
    </li>
</template>

<script>
// import SelectionableText from "@/components/SelectionableText.vue"
import store from '../store'
export default {
    components: {
    //   SelectionableText
    },
   computed: {
    user () {
      return store.users.find((user) => user.username === this.message.user.username)
    },
    color () {
      return this.user.color
    },
    ourmsg () {
     if(store.user.username === this.message.user.username){
         return {
           float: "right",
           display: "flex",
           flexDirection: "row-reverse"
         } 
      }
    }
   },
    props: ['message'],
}
</script>

<style>
.message {
  list-style-type: none;
  display: flex;
  width: 60%;
  margin: 5px;
}
</style>
