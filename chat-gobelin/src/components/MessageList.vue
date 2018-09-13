<template>
    <ul>
        haha
        <MessageListMessage v-for="(message,index)  in messages" :key="index" :message="message" />
        <MessageListMessage />
        <MessageListMessage />
        <MessageListMessage />
        <MessageListMessage />
        <MessageListMessage />
    </ul>
</template>

<script>
import MessageListMessage from "@/components/MessageListMessage"
export default {
    props: ['messages'],
    components: {
        MessageListMessage
    }
}
</script>