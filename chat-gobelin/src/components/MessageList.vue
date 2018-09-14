<template>
    <ul class="message-list"  v-on:click="select">
        <MessageListMessage v-for="(message,index)  in messages" :key="index" :message="message" />
    </ul>
</template>

<script>
import MessageListMessage from "@/components/MessageListMessage"
import Vue from "vue"
export default {
    props: ['messages'],
    components: {
        MessageListMessage
    },
    watch: {
      messages(messages){
        Vue.nextTick(() => {
          this.$el.scrollTop = this.$el.scrollHeight
        }, 0);
      }
    },
    methods:{
        select (){
          var sel;

      if (window.getSelection) {
        // Non-IE browsers
        sel = window.getSelection();
        alert(sel)
      } else if (document.selection && range.select) {
        // IE
        console.log("caca")
        range.select();
      }
    }
    }
}
</script>

<style>
.message-list {
  height: 80%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: transparent;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>