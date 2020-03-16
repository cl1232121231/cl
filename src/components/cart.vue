<template>
  <ul class="cart">
    <li
      class="car iconfont cartleft"
      @click="showcar()"
    >&#xe631;</li>
    <li class="cartmain">
      <p>￥{{ price }}</p>
      <p>另需配送费￥4元</p>
    </li>
    <li class="cartright">￥20元起送</li>
  </ul>
</template>

<script>
export default {
  methods: {
    showcar() {
      if (this.$store.state.cartlist.length >= 1) {
        this.$store.commit('changeisok');
      }
    }
  },
  computed: {
    price() {
      let n = 0;
      this.$store.state.cartlist.forEach(item => {
        n += item.myprice - 0;
      });
      return n;
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  width: 100%;
  height: 1.466667rem;
  background: #141d27;
  position: fixed;
  bottom: 0;
  z-index: 1000122;
  .cartleft {
    width: 1.6rem;
    height: 1.6rem;
    background: #141d27;
    border-radius: 50%;
    font-size: 1.3rem;
    color: gray;
    text-align: center;
    line-height: 1.6rem;
    position: absolute;
    top: -0.366667rem;
    left: 0.533333rem;
  }
  .cartmain {
    position: absolute;
    left: 2.433333rem;

    p {
      color: white;
    }
    p:nth-child(1) {
      font-weight: 800;
      font-size: 0.46667rem;
    }
  }
  .cartright {
    width: 2.666667rem;
    float: right;
    height: 100%;
    background: #2b333b;
    color: white;
    font-size: 0.373333rem;
    text-align: center;
    line-height: 1.466667rem;
    font-weight: 800;
  }
}
</style>