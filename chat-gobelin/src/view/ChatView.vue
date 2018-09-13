<template>
    <div>
      coucou je suis le chat
      <UsersList/>
      <ChatBox/>
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