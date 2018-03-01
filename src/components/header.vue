<template>
  <div class="header">
    <div class="back">
      <span>
        <svg class="icon icon-M fill-dark undefined">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-long-left">
            <svg id="icon-arrow-long-left" viewBox="0 0 32 32" width="100%" height="100%">
              <title>arrow-long-left</title>
              <path d="M26.667 14.667h-16.227l7.453-7.453-1.893-1.88-10.667 10.667 10.667 10.667 1.88-1.88-7.44-7.453h16.227v-2.667z"></path>
            </svg>
          </use>
        </svg>
      </span>
    </div>
    <div class="operation">
      <div class="clear">
        <span class="theIcon">
          <svg class="icon icon-M fill-undefined undefined">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-delete-all">
              <svg id="icon-delete-all" viewBox="0 0 32 32" width="100%" height="100%">
                <title>delete-all</title>
                <path d="M8 25.333c0 1.467 1.2 2.667 2.667 2.667h10.667c1.467 0 2.667-1.2 2.667-2.667v-16h-16v16zM25.333 5.333h-4.667l-1.333-1.333h-6.667l-1.333 1.333h-4.667v2.667h18.667v-2.667z"></path>
              </svg>
            </use>
          </svg>
        </span>
        <p class="text">Clear all</p>
      </div>
      <div class="toggle">
        <span>
          <svg class="icon icon-M fill-undefined undefined">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-grid-off">
              <svg id="icon-grid-off" viewBox="0 0 32 32" width="100%" height="100%">
                <title>grid-off</title>
                <path d="M10.667 5.333v1.933l2.667 2.667v-4.6h5.333v5.333h-4.6l2.667 2.667h1.933v1.933l2.667 2.667v-4.6h5.333v5.333h-4.6l2.667 2.667h1.933v1.933l2.667 2.667v-20.6c0-1.467-1.2-2.667-2.667-2.667h-20.6l2.667 2.667h1.933zM21.333 5.333h5.333v5.333h-5.333v-5.333zM1.693 1.693l-1.693 1.707 2.667 2.667v20.6c0 1.467 1.2 2.667 2.667 2.667h20.613l2.667 2.667 1.693-1.693-28.613-28.613zM13.333 16.733l1.933 1.933h-1.933v-1.933zM5.333 8.733l1.933 1.933h-1.933v-1.933zM10.667 26.667h-5.333v-5.333h5.333v5.333zM10.667 18.667h-5.333v-5.333h4.6l0.733 0.733v4.6zM18.667 26.667h-5.333v-5.333h4.6l0.733 0.72v4.613zM21.333 26.667v-1.947l1.947 1.947h-1.947z"></path>
              </svg>
            </use>
          </svg>
        </span>
        <p class="text">Toggle grid</p>
      </div>
    </div>
    <div class="save">
      <span>Save</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .icon{
    width: 24px;
    height: 24px;
  }
  .header{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .back{
    }
    .operation{
      .text{
        display: inline;
        line-height: normal;
        font-size: 14px;
      }
      .clear{
        display: inline-block;
        text-align: center;
        background-color: #fff;
        border: 1px solid #e7eaef;
        border-radius: 2px;
        color: #2f313c;
        height: 36px;
        padding-left: 10px;
        .icon{
          width: 24px;
          height: 24px;
        }
      }
      .toggle{
        display: inline-block;
        text-align: center;
        background-color: #fff;
        border: 1px solid #e7eaef;
        border-radius: 2px;
        color: #2f313c;
        height: 36px;
      }
    }
    .save{
      span{
        text-decoration: none;
        color: #fff;
        background-color: #45d695;
        border: 1px solid transparent;
        display: inline-block;
        padding: 8px 14px;
        border-radius: 500px;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        line-height: normal;
      }
    }
  }
</style>
