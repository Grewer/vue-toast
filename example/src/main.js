import Vue from 'vue'
import App from './App.vue'

import Toast from '../../src/toast.vue'

Vue.component('Toast', Toast)


new Vue({
  el: '#app',
  render: h => h(App)
})
