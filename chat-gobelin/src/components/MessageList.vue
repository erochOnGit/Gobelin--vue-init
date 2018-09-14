<template>
    <ul class="message-list"  @click.prevent="select">
        <MessageListMessage v-for="(message,index)  in messages" :key="index" :message="message" />
    </ul>
</template>

<script>
import MessageListMessage from "@/components/MessageListMessage"
import store from "../store"

import Vue from "vue"
export default {
    data: ()=>{
      return {
        messageList: null
      }
    },
    computed: {
      users: () => store.users
    },
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
      select (e) {
        e.preventDefault();
          var sel;
          
      if (window.getSelection) {
          let lis = this.$el.childNodes
          sel = window.getSelection();
          let selectedLis = [];
        if(sel.toString().length>0){
          lis.forEach((child)=>{
             sel.toString().includes(child.outerText) ? selectedLis.push(child) : null
          })
          selectedLis.forEach((li) => {
            li.style.background = li.attributes.color.value;
            li.style.color = "white";
            li.style.fontStyle = "italic";
          })
      } else{
        lis.forEach((child)=>{
          child.style.color = "magenta"
          child.style.background = "magenta"
        })
      }
      } else if (document.selection && range.select) {
        // IE
        range.select();
      }
     
    }
    }
}
</script>

<style>
.message-list {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0;
  color: magenta;
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