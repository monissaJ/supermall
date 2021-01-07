<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar"
export default {
  name:'Home',
  components:{
    NavBar
  }
}
</script>

<style>
  .home-nav{
    background-color: var(--color-tint);  /** 在这里设置背景颜色，不要在封装的组件内部，这里应该是可以大家都可以在使用时设置的 */
    color:#fff;   /** 设置文字颜色 */
  }
</style>