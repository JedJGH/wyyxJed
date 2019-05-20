/*入口js文件
* */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './mockData/mockServer'
import store from './store'
import 'lib-flexible/flexible'

import HeaderSlot  from './components/HeaderSlot/HeaderSlot'

//注册全局组件标签
Vue.component('HeaderSlot', HeaderSlot);

//new一个实例
new Vue({
  el:'#app',
  // components:{
  //   App
  // },
  // template:'<App/>'
  render: h => h(App),
  router,
  store
})
