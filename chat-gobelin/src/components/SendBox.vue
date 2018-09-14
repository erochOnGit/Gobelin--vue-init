<template>
    <div class="send-box">
        <form action="#" @submit.prevent="onFormSubmit">
            <input type="text" v-model="input">
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            input: ''
        }
    },
    methods:{
        onFormSubmit (){
            this.$emit('messageSent',this.input)
            this.input = ''
        }
    }
}
</script>

<style scoped>
.send-box {
  position: absolute;
  top: 45vw;
  right: 10vw;
  background: blue;
  padding: 5px;
  width: 30vw;
  color: blue;
  box-shadow: 0px 0px 50px #ffffffff;
}

input {
  all: unset;
  background: transparent;
  border: none;
  width: 100%;
}
</style>
