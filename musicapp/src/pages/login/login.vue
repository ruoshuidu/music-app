<template>
  <div class="container">
    <div class="box">
      <div class="login-tit">
        <i class="iconfont back" @click="goBack">&#xe67e;</i>
        <span>登录</span>
      </div>
      <input type="text" placeholder="请输入手机号" class="input input-one" v-model="phone">
      <input type="password" placeholder="请输入密码" class="input" v-model="password">
    </div>
    <button class="btn" @click="login">登录</button>
  </div>
</template>
<script>
// import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      phone: '',
      password: '',
      profile: {}
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    login () {
      let telRegex = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (!this.phone || !telRegex.test(this.phone)) {
        console.log(111)
        // Toast({
        //   message: '请输入正确的手机号码',
        //   position: 'middle',
        //   duration: 1000
        // })
      } else if (!this.password) {
        console.log('密码不能为空')
      } else {
        this.$get('/login/cellphone', {
          phone: this.phone,
          password: this.password
        }).then((res) => {
          console.log(res)
          if (res.code === 501) {
            console.log(res.msg)
          } else if (res.code === 502) {
            console.log(res.msg)
          } else if (res.code === 200) {
            this.profile = res.profile
            window.localStorage.setItem('userId', this.profile)
            // let userMsg = JSON.stringify(this.profile)
            // let userMsg = this.profile
            setTimeout(() => {
              this.$router.push({path: '/recommend'})
            }, 1500)
          }
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  font-size: .12rem;
  color: #fff;
  .box{
    padding-top: 2rem;
    .login-tit{
      display: flex;
      align-items: center;
      font-size: .26rem;
      width: 2.9rem;
      margin: 0 auto;
      color: #ffcd32;
      .back{
        font-size: .16rem;
        padding: .10rem;
      }
      span{
        flex: 1;
        text-align: center;
      }
    }
    .input{
      width: 2.6rem;
      height: .40rem;
      line-height: .4rem;
      display: block;
      border-radius: .20rem;
      border:none;
      padding: 0 .15rem;
      margin: 0 auto;
      background: rgba(255,255,255,0.8)
    }
    .input-one{
      margin: .20rem auto;
    }
  }
  .btn{
    width: 2.9rem;
    height: .40rem;
    line-height: .40rem;
    text-align: center;
    background: #ffcd32;
    color: #fff;
    font-size: .20rem;
    border-radius: .20rem;
    margin: .20rem auto 0;
    border: none;
    display: block;
  }
}
</style>
