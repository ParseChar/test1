<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>

</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";

import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";



import {mapGetters} from 'vuex'

export default {
  name: "Cart",
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
  //  两种语法
  //  第一种直接导入同名，直接用
  //   ...mapGetters(['cartLength']),
  //  第二种用的时候改名
    ...mapGetters({
      length:'cartLength'
    })
  }


}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;

}
</style>
