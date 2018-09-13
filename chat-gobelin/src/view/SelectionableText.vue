<template>
  <input id="text" disabled type="text" v-on:select="select" value="Sélectionnez-moi !" >
</template>

<script>
export default {
  methods:{
        select (){
            console.log(this)
            this.value = this.value + "heeey"
            this.input = ''
        }
    }
}
</script>

<style>
input {
  all: unset;
}
</style>