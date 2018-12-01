<template>

  <div>
    <ul>
      <li v-for="(news,index) in newsArr" :key="index">{{news}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newsArr: ['new1','new2','new3']
      }
    }
  }
</script>

<style scoped>

</style>
