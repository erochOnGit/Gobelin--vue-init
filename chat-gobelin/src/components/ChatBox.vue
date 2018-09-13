<template>
  <div>
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
            store.messages.push(message)
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
