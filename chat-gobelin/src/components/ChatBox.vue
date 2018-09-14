<template>
  <div class="chat-box">
    <messageList :messages="messages"/>
    <SendBox @messageSent="onMessageSent"/>
  </div>
</template>

<script>
import messageList from "@/components/messageList"
import SendBox from "@/components/SendBox"
import store from "../store"
export default {
    methods:  {
        onMessageSent (message) {
            this.$api.messageSend(message)
        }
    },
    computed: {
        messages: () => store.messages
    },
    components: {
        messageList,
        SendBox
    }
}
</script>

<style>
.chat-box {
  width: 40vh;
  height: 40vh;
  margin-top: 10vh;
  margin-left: 10vh;
  background: pink;
  box-shadow: 0px 0px 50px #ffffffff;
}
</style>