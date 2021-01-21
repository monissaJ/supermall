<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'MainTabControl',
    props:{
      titles:{
        type:Array,
        default() {
          return ["流行", "新款", "精选"]
        }
      }
    }
  }
</script>

<style>

</style>