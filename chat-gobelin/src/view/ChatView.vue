<template>
    <div class="chat-view">
      <UsersList/>
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
    }
}
</script>

<style>
.chat-view {
  background: black;
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

.chat-container {
  animation-duration: 2s;
  animation-name: revealAfter;
  animation-timing-function: ease-in-out;
  height: 100vh;
  flex: 1;
}
</style>