<template>
  <div class="container">
    <ul>

    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: null,
      playList: {}
    }
  },
  created () {
    this.songdesc()
  },
  methods: {
    songdesc () {
      this.id = this.$route.query.id
      this.$get('/playlist/detail', {
        id: this.id
      }).then(res => {
        console.log(res)
        this.playList = res.playlist.tracks
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  font-size: .14rem;
  color: #fff;
}
</style>
