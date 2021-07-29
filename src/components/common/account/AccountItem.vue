<template>
  <div class="account-item">
    <div class="number"><slot class="balance" name="balance"></slot></div>

    <div class="account-info"><slot name="supplementText"></slot></div>
  </div>
</template>

<script>
export default {
  name: "AccountItem"
}
</script>

<style scoped>
.account-item {
  width: 100%;
  background-color: #fff;
  margin-right: 1px;
  text-align: center;


}
.number{
  color: #FF5F3EFF;
  font-size: 24px;
  padding: 18px;
  font-weight: 700
}
.account-info {
  margin-top: 6px;
}

</style>
