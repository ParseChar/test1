<template>
  <div id="list">
  <div class="icon"><slot name="item-icon">      </slot></div>
  <div class="info"><slot name="item-text">      </slot></div>
  </div>
</template>

<script>
export default {
  name: "SelectTextItem"
}
</script>

<style scoped>
#list{

  height: 44px;
  line-height: 44px;
  position: relative;

}
.icon {
  margin-top: 10px;
  position: absolute;
  left: 16px;
  top: -7px;
}
.icon img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.info {
  margin-left: 40px;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
  padding-left: 5px;
}

</style>
