<template>
  <div>我是home
    <p>呵呵</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>