<template>
  <div id="select-text">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SelectText"
}
</script>

<style scoped>
#select-text{
  margin-top: 12px;

  background-color: #fff;
  font-size: 15px;
  color: #333;

}
</style>
