<template>
  <div class="tab">
    <div class="tab-item" v-for="(item,index) in tabItem" :key="index"
         @click="handleClick(index)" :class="choice === index ? 'on' : ''">
      {{item}}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabItem: ['推荐', '歌手', '排行', '搜索']
    }
  },
  props: {
    choice: Number
  },
  methods: {
    handleClick (_index) {
      if (_index === 0) {
        this.$router.push({path: '/recommend'})
      } else if (_index === 1) {
        this.$router.push({path: '/singer'})
      } else if (_index === 2) {
        this.$router.push({path: '/rank'})
      } else {
        this.$router.push({path: '/search'})
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tab{
  display: flex;
  width: 100%;
  height: .44rem;
  line-height: .44rem;
  font-size: .14rem;
  background: #333;
  .tab-item{
    color: #fff;
    flex: 1;
    text-align: center;
    .tab-link{
      font-size: .14rem;
    }
    &.on {
      color: #ffcd32;
      border-bottom: 1px solid #ffcd32;
    }
  }
}
</style>
