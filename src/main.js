import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

// for message input:
import VueAutosize from 'vue-autosize'
Vue.use(VueAutosize)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
