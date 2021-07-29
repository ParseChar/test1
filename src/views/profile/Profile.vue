<template>
  <div id="profile">
    <nav-bar class="nav-bar"><div slot="center">404商城</div></nav-bar>
    <!--1.单独封装一个组件: 利用slot知识点-->
    <UserInfo></UserInfo>


    <main-account></main-account>
    <!--3.封装成一个整体-->
    <main-select-text></main-select-text>
    <main-select-text-two></main-select-text-two>
  </div>
</template>

<script>
import UserInfo from "./childComp/UserInfo";
import ListView from "./childComp/ListView";
import NavBar from "../../components/common/navbar/NavBar";

import MainSelectText from "../../components/content/mainSelectText/MainSelectText";
import MainSelectTextTwo from "../../components/content/mainSelectText/MainSelectTextTwo";
import MainAccount from "../../components/content/MainAccount/MainAccount";

export default {

  name: "Profile",
  components: {
    MainAccount,
    UserInfo, ListView, NavBar,

    MainSelectText,MainSelectTextTwo

  },
  data: function () {
    return {
      orderList: [
        {icon: '#message', iconColor: '#ff8198', info: '我的消息'},
        {icon: '#pointer', iconColor: '#fc7b53', info: '积分商城'},
        {icon: '../../assets/img/profile/vip.svg', iconColor: '#ffc636', info: '会员卡'},
      ],
      serviceList: [
        {icon: '#cart', iconColor: '#ff8198', info: '我的购物车'},
        {icon: '#shopping', iconColor: '#ff8198', info: '下载购物APP'},
      ]
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
}

.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.account {
  display: flex;
}

.account-item {
  width: 100%;
  background-color: #fff;
  margin-right: 1px;
  text-align: center;
}

.account-item:last-of-type {
  margin-right: 0;
}

.account-item {
  color: #666;
  font-size: 13px;
  padding: 18px;
}

.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}

.account-info {
  margin-top: 6px;
}

.order-list, .service-list {
  margin-top: 12px;
}

</style>
