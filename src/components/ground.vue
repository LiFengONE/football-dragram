<template>
  <div id="ground">
    <div class="field">
      <canvas id="canvas" width="750px" height="500px"></canvas>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ground'
  }
</script>

<style lang="scss" scoped>
  #ground{
    background-image: url("../assets/background.png");
    background-repeat: repeat;
    display: flex;
    justify-content: center;
  }
  .field{
    margin-top: 80px;
    width: 750px;
    height: 500px;
    background-image: url("../assets/footballField.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
