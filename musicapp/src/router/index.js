import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/pages/recommend/recommend'
import singer from '@/pages/singer/singer'
import rank from '@/pages/rank/rank'
import search from '@/pages/search/search'
import login from '@/pages/login/login'
import songList from '@/pages/songList/songList'
import songdesc from '@/pages/songdesc/songdesc'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    }, {
      path: '/singer',
      name: 'singer',
      component: singer
    }, {
      path: '/rank',
      name: 'rank',
      component: rank
    }, {
      path: '/search',
      name: 'search',
      component: search
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/songList',
      name: 'songList',
      component: songList
    }, {
      path: '/songdesc',
      name: 'songdesc',
      component: songdesc
    }
  ]
})
