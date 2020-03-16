<template>
  <div class="shop_bottom">
    <ul class="shop_list">
      <li
        class="listli"
        v-for="(item) in datalist"
        :key="item.name"
        :id="item.id"
      >
        <a
          href="###"
          @click="tip(item.id)"
        >
          <div class="left">
            <img
              :src='item.image_path'
              alt=""
            >
          </div>
          <div class="right">
            <div class="right_top">

              <h4 class="right_top_icon">
                <span class="ellipsis">品牌</span>{{ item.name }}</h4>
              <ul class="right_top_ul">
                <li>保</li>
                <li>准</li>
                <li>票</li>
              </ul>
            </div>
            <div class="right_center">
              <div class="right_center_left">
                <div class="star"></div>
                <div class="count">{{ item.rating }}</div>
                <div class="mount">月售{{ item.rating_count }}单</div>
              </div>
              <div class="right_center_right">
                <span>硅谷专送</span>
              </div>
            </div>
            <div class="right_bottom">
              <p class="right_bottom_text">
                <span>￥20起送</span><span>/</span>
                <span>{{ item.piecewise_agent_fee.tips }}</span>
              </p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["datalist"],
  data: function() {
    return {};
  },
  methods: {
    tip(id) {
      // window.console.log(id);
      this.$router.push({ name: "order", params: { id } });
    }
  }
};
</script>
<style lang="scss" scoped>
.shop_bottom {
  border-top: 0.026667rem solid #f3f3f3;
  .shop_list {
    margin-bottom: 1.466667rem;
    .listli {
      height: 2.8rem;

      a {
        display: block;
        height: 2.8rem;
        padding: 0.4rem 0.213333rem;
        box-sizing: border-box;

        .left {
          float: left;
          padding: 0 0.266667rem 0 0;
          box-sizing: border-box;
          img {
            width: 2.133333rem;
            height: 2rem;
          }
        }
        .right {
          .right_top {
            color: #7e8c8d;
            font-size: 0.426667rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .right_top_icon {
              float: left;
              font-size: 0.426667rem;
              color: #333;
              font-weight: 700;
            }
            .right_top_ul {
              float: right;
              li {
                float: left;
                font-size: 0.266667rem;
                color: #999;
                padding: 0 0.053333rem;
                box-sizing: border-box;
              }
              li:nth-child(-n + 2) {
                border-right: 0.026667rem solid #f3f3f3;
              }
            }
          }
          .right_center {
            height: 0.426667rem;
            margin-top: 0.4rem;
            margin-bottom: 0.213333rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .right_center_left {
              float: left;
              color: #ff9a0d;
              font-size: 0.266667rem;
              display: flex;

              .count {
                color: #ff6000;
                font-size: 0.266667rem;
                margin: 0 0 0 0.106667rem;
              }
              .mount {
                color: #666666;
                font-size: 0.266667rem;
                margin-left: 0.133333rem;
              }
            }
            .right_center_right {
              span {
                display: block;
                height: 0.293333rem;
                border: 0.026667rem solid #1e90ff;
                color: #1e90ff;
                font-size: 0.266667rem;
                line-height: 0.293333rem;
              }
            }
          }
          .right_bottom {
            display: flex;
            span {
              font-size: 0.32rem;
              color: #666;
            }
          }
        }
      }
    }
  }
}
.ellipsis {
  content: "品牌";
  text-align: center;
  display: inline-block;
  height: 0.4rem;
  // width: 0.666667rem;
  font-size: 11px;
  line-height: 11px;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 217, 48);
  margin-right: 5px;
  padding: 2px;
  box-sizing: border-box;
  border-radius: 2px;
}
</style>