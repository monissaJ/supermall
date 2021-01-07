<template>
    <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="../../assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="../../assets/img/tabbar/shopcart.png" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/shopcart_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="../../assets/img/tabbar/profile.png" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
      <tab-bar-item path="/setting">
        <img slot="item-icon" src="../../assets/img/tabbar/setting.png" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/settings_active.svg" alt="">
        <div slot="item-text">设置</div> -->
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '../common/tabbar/TabBar'
  import TabBarItem from '../common/tabbar/TabBar'
  export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
  }
</script>

<style>

</style>