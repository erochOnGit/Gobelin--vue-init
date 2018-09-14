<template>
    <li :value="message.username" class="message" v-on:click="select">
        {{ message.user.username }}: {{ message.text }}
        <!-- <SelectionableText :message="message.user.username"/>
        <SelectionableText :message="message.text"/> -->
    </li>
</template>

<script>
import SelectionableText from "@/components/SelectionableText.vue"

export default {
    components: {
      SelectionableText
    },
    props: ['message'],
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
    // watch: {
    //   message(mes){
    //     console.log(this)
    //   }
    // }
}
</script>

<style>
.message {
  list-style-type: none;
  display: flex;
  width: 60%;
}
</style>
