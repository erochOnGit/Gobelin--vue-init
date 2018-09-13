<template>
  <div :class="{ 'booba': isBooba }" class="container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import SquareContainer from "./SquareContainer.vue"
export default {
  name: "Container",
  data () {
    return {
      name:kaaris,
      isBooba:true
    }
  }, 
  computed:{
    isBooba (){
      //mamethod
    }
  },
  methods:{
    mamethod: ()=>{}
  },
  props: {
    msg: String
  },
  // @ is an alias to /src
  components: {
    SquareContainer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  position: relative;
  left: 0vw;
  top: 0vh;
  width: 100vw;
  height: 100vh;
  transform: rotate(0deg);
  transition: transform 20s;
}
.booba {
  color: red;
}
</style>
