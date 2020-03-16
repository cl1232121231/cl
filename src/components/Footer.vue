<template>
  <div id="Footer">
    <router-link
      to="/msite"
      class="footer_item"
    >
      <span class="icon">
        <i class="icon_item icon_item_one iconfont icon-waimai"></i>
      </span>
      <span class="text">外卖</span>
    </router-link>

    <router-link
      to="/search"
      class="footer_item"
    >
      <span class="icon">
        <i class="icon_item iconfont icon-sousuo"></i>
      </span>
      <span class="text">搜索</span>
    </router-link>

    <router-link
      to="/goods"
      class="footer_item"
    >
      <span class="icon">
        <i class="icon_item iconfont icon-dingdan"></i>
      </span>
      <span class="text">订单</span>
    </router-link>

    <router-link
      to="/mine"
      class="footer_item"
    >
      <span class="icon">
        <i class="icon_item iconfont icon-wode"></i>
      </span>
      <span class="text">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    goto(path) {
      //编程式导航
      this.$router.replace(path);
    }
  }
};
</script>

<style lang="scss" scoped>
#Footer {
  height: 1.333333rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0rem;
  background: #fff;

  .footer_item {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    width: 2.133333rem;
    height: 1.066667rem;
    .icon {
      .icon_item {
        color: #999;
        width: 0.586667rem;
        height: 0.586667rem;
        font-size: 0.586667rem;
      }
      .icon_item_one {
        width: 1.013333rem;
        height: 0.586667rem;
        font-size: 0.586667rem;
      }
    }
    .text {
      color: #999;
    }
  }
  .footer_item:hover .text,
  .footer_item:hover .icon_item {
    color: #1e90ff;
  }
}
.router-link-active {
  text-decoration: none;
}
</style>

