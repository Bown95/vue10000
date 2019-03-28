import Vue from 'vue'
// 导入vue-router
import VueRouter from 'vue-router'
// 手动安装vue-router
Vue.use(VueRouter)
    // 导入bootstrap样式
    // import 'bootstrap/dist/css/bootstrap.css'
    // import './css/app.css'
    // // 导入Mui
    // import './mui/css/mui.css'

// 导入APP组件
import app from './App.vue'
// 导入 Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
    // 导入 MUI 的样式
import './mui/css/mui.min.css'
import './mui/css/icons-extra.css'

// 导入路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

// 创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer }
    ],
    linkActiveClass: 'mui-active'
})


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})