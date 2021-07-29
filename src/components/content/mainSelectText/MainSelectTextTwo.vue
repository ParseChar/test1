<template>
  <select-text>
    <select-text-item>
      <img slot="item-icon" src="~assets/img/profile/cart.svg" alt="">
      <div slot="item-text">我的购物车</div>
    </select-text-item>
    <select-text-item>
      <img slot="item-icon" src="~assets/img/profile/Backup.png" alt="">
      <div slot="item-text">下载购物APP</div>
    </select-text-item>

  </select-text>
</template>

<script>
import SelectText from "../../common/selectText/SelectText";
import SelectTextItem from "../../common/selectText/SelectTextItem";

export default {
  name: "MainSelectTextTwo",
  components:{
    SelectTextItem,
    SelectText
  }
}
</script>

<style scoped>

</style>
