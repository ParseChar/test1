<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll"
                    @click.native="checkClick"  class="check-button"/>
      <span>全选</span>
    </div>
    <div class="price">
      合计:{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      去计算：{{chenkLength}}
    </div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton";

import {mapGetters} from 'vuex'

export default {
  name: "CartBottomBar",
  components:{
    CheckButton
  },
  computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
      return '¥'+ this.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue+item.price* item.count
      },0).toFixed(2)
    },
    chenkLength(){
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll(){
      // return !(this.cartList.filter(item => !item.checked).length)
      if (this.cartList.length===0)return  false
     return  !this.cartList.find(item => !item.checked)
    }
  },
  methods:{
    checkClick(){
      if(this.isSelectAll){
        this.cartList.forEach(item =>item.checked = false)
      }else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick(){
      if (!this.chenkLength){
        this.$toast.show('请选择购买的商品',2000)
      }
    }
  }

}
</script>

<style scoped>
.bottom-bar{
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
  display: flex;
}
.check-content{
  display: flex;
  align-items: center;
  margin-left: 10px;
  width:60px ;
}
.check-button{
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}
.price{
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}
.calculate{
    /*width: 40px;*/
    /*color: #ffffff;*/
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;

}
</style>
