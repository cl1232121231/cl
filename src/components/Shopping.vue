<template>
  <div
    ref="z"
    id="Shopping"
    v-show="this.$store.state.isok"
  >
    <div class="top">
      <span>购物车</span>
      <span
        class="del"
        @click="dele()"
      >清空</span>
    </div>

    <ul class="bottom">
      <li
        v-for="(item,index) in cart"
        :key="index"
      >
        <span class="max">{{ item.myname }}</span>
        <span class="max">
          <span class="singel_price">￥{{ item.myprice }}</span>
          <div class="singel_rignt">
            <i
              class="cut aa iconfont icon-jian"
              @click="cutnum(item.myid)"
            ></i>
            <span class="num">{{ item.num }}</span>
            <i
              class="add aa iconfont icon-jia"
              @click="addnum(item.myid)"
            ></i>
          </div>
        </span>
      </li>
    </ul>

  </div>
</template>
<script>
import "../iconfont/font_1341265_in1tbshrron/iconfont.css";
export default {
  data: function() {
    return {
      num: 1,
      priceaa: 12,
      datalist: []
    };
  },
  props: ["orderlist"],
  computed: {
    cart() {
      return this.$store.state.cartlist;
    }
  },
  methods: {
    dele() {
      this.$store.commit('dele');
    },
    cutnum(id) {
      this.$store.commit({
        type: 'cutnumz',
        id
      });
    },
    addnum(id) {
      // window.console.log(id);
      // window.console.log(this.$store.state.cartlist);
      this.$store.commit({
        type: 'addnumz',
        id
      });
      window.console.log('hhhh');
    }
  }
};
</script>
<style lang="scss" scoped>
#Shopping {
  width: 100%;
  position: fixed;
  bottom: 1.493333rem;
  z-index: 10000;
  background: #fff;
  .top {
    height: 1.066667rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.48rem;
    box-sizing: border-box;
    background: #f3f5f7;
    span {
      font-size: 0.373333rem;
    }
    .del {
      font-size: 0.32rem;
      color: #00a0dc;
    }
  }
  .bottom {
    li {
      height: 1.28rem;
      padding: 0 0.48rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      .max {
        font-size: 0.373333rem;
        display: flex;

        .singel_price {
          font-size: 0.373333rem;
          color: #f01414;
        }
        .aa {
          display: inline-block;
          height: 0.64rem;
          width: 0.64rem;
          text-align: center;
          // color: #1E90ff;
        }
      }
    }
  }
}
</style>