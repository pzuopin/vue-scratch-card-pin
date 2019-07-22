import Vue from 'vue'
import App from './App.vue'
import ScratchCardPin from './index.js'
Vue.use(ScratchCardPin)

new Vue({
  el: '#app',
  render: h => h(App)
})
