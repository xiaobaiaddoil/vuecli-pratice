<template>
<div>我是{{username}}</div>
</template>

<script>
export default {
name: "User",
  computed:{
  username(){
    return this.$route.params.userid
  }
  }
}
</script>

<style scoped>

</style>