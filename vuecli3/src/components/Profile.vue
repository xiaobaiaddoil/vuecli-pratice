<template>
  <div>
    <ul>
      <li v-for="(item,key) in $route.query">{{key}}:{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
name: "Profile",

}
</script>

<style scoped>

</style>