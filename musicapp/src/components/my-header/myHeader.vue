<template>
  <div class="container">
    <header class="header">
      <div class="icon">
        <img src="./logo@2x.png" alt="">
      </div>
      <h1 class="text">Chicken Music</h1>
    </header>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.container {
  font-size: .14rem;
  color: #ffcd32;
  .header{
    display: flex;
    align-items: center;
    justify-content: center;
    height: .44rem;
    .icon{
      width: 0.35rem;
      height: 0.36rem;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .text{
      font-size: .14rem;
      margin-left: .05rem;
      font-weight: normal;
    }
  }
}
</style>
