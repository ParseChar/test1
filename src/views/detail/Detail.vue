<template>
 <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <details-swiper :top-images="topImages"></details-swiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @datailImageLoad="datailImageLoad"></detail-goods-info>
      <detail-param-info ref="param" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommend"></goods-list>
    </scroll>
      <back-top @click.native="backTop" v-show="showBackTop"></back-top>
    <detail-bottom-bar @addToCart="addToCart"/>

 </div>
</template>

<script>

  import DetailNavBar from "./childComp/DetailNavBar";
  import DetailsSwiper from "./childComp/DetailsSwiper";
  import DetailBaseInfo from "./childComp/DetailBaseInfo";
  import DetailShopInfo from "./childComp/DetailShopInfo";
  import DetailGoodsInfo from "./childComp/DetailGoodsInfo";
  import DetailParamInfo from "./childComp/DetailParamInfo";
  import DetailCommentInfo from "./childComp/DetailCommentInfo";
  import DetailBottomBar from "./childComp/DetailBottomBar";

  import Scroll from "../../components/common/scroll/Scroll";
  import GoodsList from "../../components/content/goods/GoodsList";
  import BackTop from "../../components/content/backTop/BackTop";

  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "../../network/detail";
  import {debounce} from "../../common/utils";
  import {itemLisennerMixin,backTopMixin} from "../../common/mixin";

  export default {
  name: "Detail",
  components:{
    DetailNavBar,
    DetailsSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailBottomBar,
    DetailCommentInfo,
    GoodsList,
    BackTop,
  },
    mixins:[itemLisennerMixin,backTopMixin],
    data(){
      return{
        iid:null,
        topImages:[],
        goods: {},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommend:[],
        themeTopYs:[],
        getThemeTopY :null,
        currentIndex:0
      }
    },
    activated() {

    },
    created() {
      this.iid=this.$route.params.iid
      getDetail(this.iid).then(res=>{
        const data=res.result;
        this.topImages=data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shop= new Shop(data.shopInfo)
        this.detailInfo= data.detailInfo
        this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
        if (data.rate.cRate !==0){
          this.commentInfo= data.rate.list[0]
        }
        //1.值不对原因：this.$refs.param.$el压根没有渲染
        this.$nextTick(()=>{
          //2.根据最新的数据，对应的DOM是已经被渲染出来
          // 但是对应的图片依然没有加载完（目前获取到的offsetTop不包含图片）
          //offset值不对一般都是因为图片是后来的

        })

      })
      getRecommend().then(res=>{

        this.recommend=res.data.list

      })
      this.getThemeTopY = debounce(()=>{
        this.themeTopYs=[]
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)

      },100)

    },
    mounted() {

    },
    destroyed() {
      this.$bus.$off('itemImageLoad',this.itemImgListener)
   },
    methods:{
      titleClick(index){
        console.log(index);
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index]+44,50)
      },
      datailImageLoad(){
        this.getThemeTopY()
      },
      contentScroll(position){

          this.showBackTop=(-position.y)>1000;

        const  positionY =-position.y;
        let length = this.themeTopYs.length;
        for(let i=0;i<length-1;i++){
         if (this.currentIndex!==i&&(positionY>=this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])){
           this.currentIndex=i;
           this.$refs.nav.currentIndex=this.currentIndex;
         }
        }
        // for(let i=0;i<length;i++){
        //   if(this.currentIndex!==i&&((i<length-1&& positionY >=this.themeTopYs[i] && positionY<this.themeTopYs[i+1])||
        //     (i===length-1&& positionY>=this.themeTopYs[i]))){
        //     this.currentIndex=i;
        //     console.log(this.currentIndex);
        //     this.$refs.nav.currentIndex=this.currentIndex;
        //   }
        // }
      },
      addToCart(){
        const product={}
        product.image= this.topImages[0];
        product.title=this.goods.title;
        product.desc=this.goods.desc;
        product.price= this.goods.realPrice;
        product.iid= this.iid

        this.$store.dispatch('addCart',product).then(res =>{
          console.log(res);
          this.$toast.show(res,1500)
        })
      }
    }
  }

</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px - 49px);
}
.detail-nav{
  position: relative;
  z-index:9;
  background-color: #fff;
}
.back-top {
  position: fixed;
  right: 10px;
  bottom: 65px;
}
</style>
