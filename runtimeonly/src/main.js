import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
  //运行时
  // template =>ast =>render=>vdom=>ui
  //使用 vue-template -compiler
  // 所以runtime only 更好
})
