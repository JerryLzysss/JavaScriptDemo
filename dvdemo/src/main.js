import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import router from './route/route'
Vue.config.productionTip = false
Vue.use(dataV)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
