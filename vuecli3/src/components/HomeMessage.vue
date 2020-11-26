<template>
  <div>
    <button v-for="item in message">消息{{item}}</button>
  </div>
</template>

<script>
export default {
name: "HomeMessage",
  data(){
    return{
      message:[1,2,3,4]
    }
  }
}
</script>

<style scoped>

</style>