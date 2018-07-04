import Vue from 'vue'
import App from './App.vue'
import Toast from 'vue-js-toast'

Vue.use(Toast)

new Vue({
  el: '#app',
  render: h => h(App)
})
