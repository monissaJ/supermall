<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name:"NavBar"
}
</script>
  
<style>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;/** 行高 */
    text-align: center;/* 内部文字居中*/ 
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);  /** 设置阴影（为了看起来美观） */
  }
  .left, .right{
    width: 60px;

  }
  
  .center{
    flex:1; /* 占据剩余所有的部分 */
  }
</style>