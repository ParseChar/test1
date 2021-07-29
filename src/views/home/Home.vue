<template>
    <div id="home" class="wrapper">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <tab-control :title="['流行','新款','精选']"
                   @tabClick="tabClick"
                   ref="tabControl1"
                    class ="tab-control" v-show="isTabFixed"></tab-control>
        <scroll
          class="content"
          ref="scroll"
          :probe-type="3"
          @scroll="contentScroll"
          :pull-up-load="true"
          @pullingUp="loadMore">
            <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
            <recommend-view :recommend="recommend"></recommend-view>
            <feature-view></feature-view>
            <tab-control :title="['流行','新款','精选']"
                           @tabClick="tabClick"
                          ref="tabControl2"
                          :class="{fixed: isTabFixed}"></tab-control>
            <goods-list :goods="showGoods"/>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";




import {getHomeMultidata,getHomeGoods} from "../../network/home";
import {itemLisennerMixin,backTopMixin} from "../../common/mixin";

export default {
  name: "Home",
  components:{
    Scroll,
    NavBar,
    BackTop,

    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,

  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  minxin:[itemLisennerMixin,backTopMixin],
  data(){
    return {
      banners:[],
      recommend :[],
      goods: {
        'pop':{page: 0,list: []},
        'new': {page: 0,list: []},
        'sell': {page: 0,list: []}
      },
      currentType:'pop',
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0,
    }
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)

  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()

    this.$bus.$off('itemImgLoad',this.itemImgListener)
  },
  created() {
  //  1.请求多个数据
    this.getHomeMultidata()
    //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
},
  methods :{
    /*监听事件
    * */

    tabClick(index) {
      switch (index){
        case 0:
          this.currentType='pop';
          break;
        case 1:
          this.currentType='new';
          break;
        case 2:
          this.currentType='sell'
          break;
      }
      this.$refs.tabControl1.currentIndex= index
      this.$refs.tabControl2.currentIndex= index
    },
    // backClick(){
    //   this.$refs.scroll.scrollTo(0,0,500)
    // },
    contentScroll(position){
      //1.判断BackTop是否显示

      this.isShowBackTop=(-position.y)>1000
    //  2.决定tabControl是否吸顶(position:fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad(){
      //  3.赋值
      //所有的组件都有一个属性$el:用于获取组件的元素
      this.tabOffsetTop= this.$refs.tabControl2.$el.offsetTop;
    },
    /*
    *网络请求相关的代码
    * */

    getHomeMultidata(){
      getHomeMultidata().then(res =>{
        this.banners=res.data.banner.list;
        this.recommend=res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page= this.goods[type].page + 1
      getHomeGoods(type,page).then(res =>{
        this.goods[type].list.push(...res.data.list);
          this.goods[type].page  +=1;

          this.$refs.scroll.finishPullUp()
      })
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
  }
}
</script>

<style scoped>
#home{
  /*padding-top: 44px;*/
  /*padding-bottom: 49px;*/
  height: 100vh;
  position: relative;
}
 .home-nav{
   background-color: var(--color-tint);
   color: white;
   /*在使用浏览器原生滚动时，为了让导航不跟随着一起滚动*/
   /*position: fixed;*/
   /*left: 0;*/
   /*right: 0;*/
   /*top: 0;*/
   /*z-index: 9;*/
 }
.tab-control{
  position: relative;
  z-index: 9;

}
.content{
  overflow: hidden;


  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/*.content{*/
/*  height: calc(100% - 93px);*/
/*  overflow: hidden;*/
/*  margin-top: 44px;*/
/*}*/

</style>
