<template>
  <div class="chat-box">
    <messageList :messages="messages" @removeReinsurance="removeReinsurance"/>
    <SendBox @messageSent="onMessageSent"/>
    <div class="reinsurance">selection is the new black</div>
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
        },
        removeReinsurance(){
            console.log("hey")
            this.$el.childNodes[childNodes.length-1].style.display = "none"
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
  margin-left: 5vh;
  background: magenta;
  box-shadow: 0px 0px 50px #ffffffff;
}

@keyframes blink {
  0% {
    background: white;
    color: black;
  }

  20% {
    background: black;
    color: white;
  }
  30% {
    background: white;
    color: black;
  }
  50% {
    background: black;
    color: white;
  }
  60% {
    background: white;
    color: black;
  }
  100% {
    background: white;
    color: black;
  }
}

.reinsurance {
  padding: 10px;
  background: black;
  color: white;
  width: 12em;
  font-weight: bold;
  font-style: italic;
  position: relative;
  left: 70%;
  top: -10%;
  animation-duration: 10s;
  animation-name: blink;
  animation-timing-function: ease-in-out;
}
</style>