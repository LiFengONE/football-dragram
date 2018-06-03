<template>
  <div class="index">
    <img class="header" src="../assets/header.png">
    <div class="pick">
      <span>Pick your theme</span>
    </div>
    <div class="choice">
      <router-link to="/pitch/coach">
        <img class="coaching" src="../assets/coach.png">
      </router-link>
      <router-link to="/pitch/standard">
        <img class="federation" src="../assets/standard.png">
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    components:{
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  html,body{
    width: 100%;
    height: 100%;
  }
  .index{
    width: 100%;
    height: 100%;
    background-color: rgb(67,69,79);
    .header{
      width: 100%;
    }
    .pick{
      width: 100%;
      height: 40px;
      text-align: center;
      color: white;
      font-size: 30px;
      margin: 80px auto 30px auto;
    }
    .choice{
      text-align: center;
      width: 100%;
      position: absolute;
      top: 213px;
      bottom: 0;
      left: 0;
      background-color: rgb(67,69,79);
      img{
        width: 520px;
        height: 410px;
        transition: all 0.2s;
        &:hover{
          transform: scale(1.03);
        }
      }
      .coaching{
        margin-right: 20px;
      }
    }
  }

</style>
