<template>
  <select-text>
    <select-text-item>
      <img slot="item-icon" src="~assets/img/profile/message.svg" alt="">
      <div slot="item-text">我的消息</div>
    </select-text-item>
    <select-text-item>
      <img slot="item-icon" src="~assets/img/profile/pointer.svg" alt="">
      <div slot="item-text">积分商城</div>
    </select-text-item>
    <select-text-item>
      <img slot="item-icon" src="~assets/img/profile/vip.svg" alt="">
      <div slot="item-text">会员卡</div>
    </select-text-item>
  </select-text>
</template>

<script>
import SelectText from "../../common/selectText/SelectText";
import SelectTextItem from "../../common/selectText/SelectTextItem";

export default {
  name: "MainSelectText",
  components:{
    SelectTextItem,
    SelectText
  }
}
</script>

<style scoped>

</style>
