<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    
    <!-- <div :class="{active:isActive}"><slot name="item-text"></slot></div> -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    <!-- :style为动态绑定样式 -->
                                                                                                
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    // 传进来的值，为了方便跳转
    path:String,        // 路径
    activeColor:{   // 激活状态时的颜色
      type:String,
      default:'yellow'
    }
  },
  data(){
    return{
      // isActive:true 
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1       // 如果当前活跃的path与哪个item的path一一致，那么返回true
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      // 监听跳转
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
  
  .tab-bar-item{
    flex:1;     /* 上面设置display，这里设置flex为1.可以设置为均等分 */
    text-align: center;
    height:49px;     /* 常用的数目 */
    font-size:13px;
  }

  .tab-bar-item img{
    width:24px;
    height:24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom:2px;
  }

</style>