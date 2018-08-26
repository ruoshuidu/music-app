<template>
  <div class="container">
    <m-header class="header"></m-header>
    <tab :choice="0" class="tab-wrapper"></tab>
    <div class="banner">
      <mt-swipe :auto="3000" class="banner">
        <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item.picUrl" >
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="recommend-wrapper" >
      <div class="title" @click="SongList">
        <span>推荐歌单</span>
        <i class="iconfont">&#xe65e;</i>
      </div>
      <ul class="songlist">
        <li v-for="item in songArray" :key="item.id" @click="songListDesc(item.id)">
          <div class="img">
            <img :src="item.picUrl" alt="">
            <div class="number">
              <i class="iconfont">&#xe603;</i>
              <span>{{item.playCount}}</span>
            </div>
          </div>
          <div class="desc">
            <p>{{item.name}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import mHeader from '@/components/my-header/myHeader'
import Tab from '@/components/tab/tab'
export default {
  components: {
    mHeader,
    Tab
  },
  data () {
    return {
      userMsg: {},
      bannerList: [],
      songArray: []
    }
  },
  created () {
    this.userMsg = window.localStorage.getItem('userMsg')
    this.getBannerList()
    this.getSongList()
  },
  methods: {
    getBannerList () {
      this.$get('/banner').then(res => {
        this.bannerList = res.banners
      })
    },
    SongList () {
      this.$router.push({path: '/songList'})
    },
    getSongList () {
      this.$get('/personalized').then(res => {
        this.songArray = res.result.slice(0, 9)
      })
    },
    songListDesc (id) {
      this.$router.push({path: '/songdesc', query: {id}})
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  background: #222;
  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  .tab-wrapper{
    position: fixed;
    top: .44rem;
    left: 0;
    width: 100%;
    z-index: 1000;
  }
  .banner {
    margin: .88rem 0 0 0;
    height: 1.7rem;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .recommend-wrapper {
    width: 100%;
    font-size: .13rem;
    padding: .10rem;
    color: #fff;
    box-sizing: border-box;
    .title{
      color: #ffcd32;
      font-size: .14rem;
      line-height: .40rem;
    }
    .songlist{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-around;
      li{
        margin-top: .10rem;
        .img{
          width: 1.1rem;
          height: 1.1rem;
          overflow: hidden;
          position: relative;
          img{
            width: 100%;
            height: 100%;
          }
          .number {
            position: absolute;
            top: .05rem;
            right: .05rem;
            display: flex;
            align-items: center;
          }
        }
        .desc{
          font-size: .14rem;
          color: #fff;
          width: 1rem;
          height: .40rem;
          overflow: hidden;
          margin-top: .10rem;
        }
      }
    }
  }
}
</style>
