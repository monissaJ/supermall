<template>
  <!-- <div class="recommand">
    <div v-for="(item, index) in recommands" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
      
    </div> -->

  <div class="recommand">
      <div class="recommand-item">
        <a href="#">
          <img src="../../../assets/img/home/01.jpg">
          <div>十点抢券</div>
        </a>
      </div>
      <div class="recommand-item">
        <a href="#">
          <img src="../../../assets/img/home/02.jpg">
          <div>好物特卖</div>
        </a>
      </div>
      <div class="recommand-item">
        <a href="#">
          <img src="../../../assets/img/home/01.jpg">
          <div>内购福利</div>
        </a>
      </div>
      <div class="recommand-item">
        <a href="#">
          <img src="../../../assets/img/home/02.jpg">
          <div>初秋上新</div>
        </a>
      </div>
  </div>
</template>

<script>
  export default {
    name:'HomeRecommandView',
    props:{
      recommands:{
        type:Array,
        default(){
          return [
            {
              title:'毛衣',
              link:'#',
              image:'../../../assets/img/home/01.jpg'
            },
            {
              title:'毛衣',
              link:'#',
              image:'../../../assets/img/home/02.jpg'
            },
            {
              title:'毛衣',
              link:'#',
              image:'../../../assets/img/home/01.jpg'
            },
            {
              title:'毛衣',
              link:'#',
              image:'../../../assets/img/home/02.jpg'
            }
          ]
        }
      }
    }
  }
</script>

<style>
  .recommand{
    background-color: salmon;
    display:flex;   /* 水平布局步骤一 */
    width: 100%;
    text-align:center;
    font-size:12px;

    padding:10px 0 20px ;
    border-bottom:2px bolid #eee;
  }
  .recommand-item{
    flex:1;   /* 水平布局步骤二 */
  }
  .recommand-item img{
    width:70px;
    height:70px;
    margin-bottom:10px;
  }
</style>