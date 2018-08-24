<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view/>
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

<style>
#app{
  background: #222;
  height: 100vh;
}
</style>
