<template>
  <div class="container">
    <m-header></m-header>
    <tab :choice="2"></tab>
  </div>
</template>
<script>
import mHeader from '@/components/my-header/myHeader'
import Tab from '@/components/tab/tab'
export default {
  name: 'App',
  components: {
    mHeader,
    Tab
  }
}
</script>
<style lang="scss" scoped>
.container{
  background: #222;
}
</style>
