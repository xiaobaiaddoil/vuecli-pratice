// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
const cpn={
  template:`<div>{{message}}</div>`,
  data(){
    return {message:'hello world'}
  }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  //render:h=>h(App)
  // render ==>
  // render:function(h){return h(app)}
  //1.render:function(createElement){
  //   return createElement('标签',‘标签属性’,‘标签内容’)
  // }
  //render:function (createElement){
    //return createElement('h2',{class:".title"},['hello world'])
    //[]数组里面包含内容，也可以是标签加createElement函数
    /*return createElement('h2',
      {class:".title"},
      ['hello world',createElement('button',['按钮'])])}*/
  //2.render 传入组件
/*  render:function (createElement){
    return createElement(cpn)
  }*/
  render:h=>h(App)


})
