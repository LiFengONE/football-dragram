<template>
  <div class="index">
    <img src="../assets/header.png">
    <headerDiv></headerDiv>
    <div class="main">
      <menuDiv class="menu"></menuDiv>
      <ground class="ground"></ground>
    </div>
  </div>
</template>

<script>
  import header from "./header.vue";
  import menu from "./menu.vue";
  import ground from "./ground.vue";
  export default {
    name: 'index',
    components:{
      headerDiv:header,
      menuDiv:menu,
      ground
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
  .main{
    display: flex;
    width: 100%;
  }
  .menu{
    flex: 2;
  }
  .ground{
    flex: 11;
  }
</style>
