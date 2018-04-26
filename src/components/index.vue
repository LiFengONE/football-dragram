<template>
  <div class="index">
    <img src="../assets/header.png">
    <operation></operation>
    <div class="main">
      <tools class="menu"></tools>
      <ground class="ground" ref="ground"></ground>
    </div>
  </div>
</template>

<script>
  import operation from "./operation.vue";
  import tools from "./tools.vue";
  import ground from "./ground.vue";
  export default {
    name: 'index',
    components:{
      operation,
      tools,
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
