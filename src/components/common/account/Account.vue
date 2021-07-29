<template>
 <div id="account">
   <slot></slot>
 </div>
</template>

<script>
export default {
  name: "Account"
}
</script>

<style scoped>
#account {
  display: flex;
}
</style>
