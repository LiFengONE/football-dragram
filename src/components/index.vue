<template>
  <div class="index">
    <img src="../assets/header.png">
    <headerDiv></headerDiv>
  </div>
</template>

<script>
  import header from "./header.vue";
  export default {
    name: 'index',
    components:{
      headerDiv:header
    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  img{
    width: 100%;

  }
</style>
