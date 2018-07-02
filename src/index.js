import Toast from './toast.vue'

export default {
  install (Vue, params = {}) {
   
    Vue.component('Toast', Toast)

  }
}