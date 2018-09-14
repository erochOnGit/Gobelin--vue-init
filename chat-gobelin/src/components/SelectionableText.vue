<template>
  <input id="text" disabled type="text" v-on:click="select" :value="message" >
</template>

<script>
export default {
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
        },
        onFormSubmit (){
            this.$emit('messageSent',this.input)
            this.input = ''
        }
    
    }
}
</script>

<style>
input {
  all: unset;
  color: red;
  width: 50%;
}
</style>