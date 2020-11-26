<template>
  <div id="app">
    <router-link to="/home" tag="button" replace @click="btnClick">首页</router-link>
    <router-link to="/about" tag="li" replace>关于</router-link>
    <router-link :to="'/user/'+userid">用户</router-link>
    <router-link :to="{
      path:'/profile',
      query:{
        name:'cs',
        age:19,
        height:1.7
      }
    }">档案</router-link>
    <button @click="btnClick">按钮</button>
   <!-- <button @click="homeclick">首页</button>
    <button @click="aboutclick">关于</button>-->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      userid:'zhangsan'
    }
  },
  methods:{
  /*  homeclick() {
      /!*this.$router.push('/home')*!/
      //replace
      this.$router.replace('/home')
    },
    aboutclick() {
      this.$router.replace('/about')
    }*/
    btnClick() {
      console.log(this.$route);
    }
  }

}
</script>

<style>
  .active{
    color: red;
  }
</style>
