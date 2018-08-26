<template>
  <div class="container">
    <header class="header">
      <div class="icon">
        <img src="./logo@2x.png" alt="">
      </div>
      <h1 class="text">Chicken Music</h1>
      <i class="iconfont login" @click="toLogin()">&#xe602;</i>
    </header>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    toLogin () {
      this.$router.push({path: '/login'})
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  font-size: .14rem;
  color: #ffcd32;
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding:0 .10rem;
     height: .44rem;
    .icon{
      width: 0.25rem;
      height: 0.26rem;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .text{
      font-size: .14rem;
      font-weight: normal;
    }
    .login{
      font-size: .23rem;
    }
  }
}
</style>
