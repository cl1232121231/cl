<template>
  <div id="header">
    <slot name="left"></slot>
    <span class="header_item header_title">
      <span class="header_title_text">{{ title }}</span>
    </span>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 1.2rem;
  background: #1e90ff;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10000;
  .header_item {
    .header_item_icon {
      height: 0.666667rem;
      width: 0.666667rem;
      font-size: 0.666667rem;
      color: #fff;
    }
    .header_title_text {
      font-size: 0.586667rem;
      color: #fff;
    }
    a {
      color: #fff;
      font-size: 0.373333rem;
    }
    span {
      color: #fff;
    }
  }
  .header_search {
    height: 0.6rem;
    width: 0.96rem;
    font-size: 0.666667rem;
    display: flex;
    align-items: center;
  }
  .header_login {
    color: #fff;
    font-size: 0.373333rem;
  }
}
</style>

