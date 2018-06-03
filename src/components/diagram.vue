<template>
  <div class="diagram">
    <img src="../assets/header.png">
    <operation></operation>
    <div class="main">
      <tools class="menu" :type="type"></tools>
      <ground class="ground" ref="ground" :type="type" :index="index"></ground>
    </div>
  </div>
</template>

<script>
  import operation from "./operation.vue";
  import tools from "./tools.vue";
  import ground from "./ground.vue";
  export default {
    name: 'diagram',
    components:{
      operation,
      tools,
      ground
    },
    data () {
      return {

      }
    },
    computed:{
      type(){
        return this.$route.params.type;
      },
      index(){
        return this.$route.params.index;
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
