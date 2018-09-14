<template>
    <div class="chat-view" @click="removeReinsurance">
      <UsersList/>
      <div class="reinsurance2 ">hover me</div>
      <div class="chat-container">
        <ChatBox/>
      </div>
    </div>
</template>

<script>
import UsersList from "@/components/UsersList"
import ChatBox from "@/components/ChatBox"

export default {
  components : {
    UsersList,
    ChatBox
  },
  methods: {
    removeReinsurance () {
      this.$el.childNodes[2].style.display= "none"
      console.log(this.$el.childNodes)

    }
  }
}
</script>

<style>
.chat-view {
  width: 100vw;
  height: 100vh;
  background: url("../assets/fond.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@keyframes revealAfter {
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes revealAfterblink {
  0% {
    opacity: 0;
    background: white;
    color: black;
  }
  10% {
    opacity: 0;
  }
  20% {
    background: black;
    color: white;
    opacity: 1;
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

.chat-container {
  animation-duration: 2s;
  animation-name: revealAfter;
  animation-timing-function: ease-in-out;
  height: 100vh;
  flex: 1;
}
.reinsurance2 {
  padding: 10px;
  background: black;
  color: white;
  width: 12em;
  font-weight: bold;
  font-style: italic;
  position: absolute;
  left: 8%;
  top: 17%;
  width: 6em;
  animation-duration: 10s;
  animation-name: blink;
  animation-timing-function: ease-in-out;
  animation-duration: 10s;
  animation-name: revealAfterblink;
  animation-timing-function: ease-in-out;
}
</style>
