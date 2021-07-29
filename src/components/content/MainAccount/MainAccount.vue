<template>
<account>
  <account-item>
    <span slot="balance">¥0.00</span>
    <div slot="supplementText">我的余额</div>
  </account-item>
  <account-item>
    <span slot="balance">0个</span>
    <div slot="supplementText">我的优惠</div>
  </account-item>
  <account-item>
    <span slot="balance">0个</span>
    <div slot="supplementText">我的积分</div>
  </account-item>
</account>
</template>

<script>
import Account from "../../common/account/Account";
import AccountItem from "../../common/account/AccountItem";
export default {
  name: "MainAccount",
  components: {AccountItem, Account}
}
</script>

<style scoped>

</style>
