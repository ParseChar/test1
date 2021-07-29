<template>
  <tab-bar>
    <TabBarItem path="/home" active-color="deepPink">
      <img  slot="item-icon"  src="~assets/img/tabbar/tab-bar-home.svg">
      <img  slot="item-icon-active"  src="~assets/img/tabbar/tab-bar-home_pink.svg">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category">
      <img  slot="item-icon"  src="~assets/img/tabbar/catogory_black.svg">
      <img  slot="item-icon-active"  src="~assets/img/tabbar/catogory.svg">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart">
      <img  slot="item-icon"  src="~assets/img/tabbar/tabbar-icon-shopping-cart.svg">
      <img  slot="item-icon-active"  src="~assets/img/tabbar/tabbar-icon-shoppingcart-pink.svg">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile">
      <img  slot="item-icon"  src="~assets/img/tabbar/tab_bar_mine.svg">
      <img  slot="item-icon-active"  src="~assets/img/tabbar/tab_bar_ico_mine_pink.svg">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components:{
    TabBarItem,
    TabBar
  }
}
</script>

<style scoped>

</style>
