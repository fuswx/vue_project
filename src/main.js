import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入路由
import router from "@/router";
new Vue({
  render: h => h(App),
  //注册路由:底下的写法kv一致省略v【router小写的】
  //注册路由信息：当这里书写router的时候，组件身上都拥有$router、$route属性
  router
}).$mount('#app')
