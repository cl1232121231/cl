<template>
  <div id="mine">
    <Header title="我的" />
    <div class="loginReg">
      <div>
        <i class="iconfont icon-portrait"></i>
        <!-- <input value="登录/注册" type="button" class="loginReg-input" /> -->
        <span
          class="loginReg-input"
          ref="reg"
          :text="text"
          @click="goto()"
        >登录/注册</span>
      </div>
    </div>
    <section class="profile_info_data border-1px">
      <ul class="profile_info_data border-1px">
        <li class="info_data_link">
          <span class="info_data_top">
            <span class="info_data_top_1">0.00</span>元
          </span>
          <span class="info_data_bottom">我的余额</span>
        </li>
        <li class="info_data_link">
          <span class="info_data_top">
            <span
              class="info_data_top_1"
              style="color:blue"
            >0</span>分
          </span>
          <span class="info_data_bottom">我的积分</span>
        </li>
        <li
          class="info_data_link"
          style="border-right:none"
        >
          <span class="info_data_top">
            <span
              class="info_data_top_1"
              style="color:red"
            >0</span>个
          </span>
          <span class="info_data_bottom">我的优惠</span>
        </li>
      </ul>
    </section>
    <router-link to="/goods">
      <section class="main2">
        <section>
          <i
            class="iconfont icon-74wodedingdan"
            style="color:red"
          ></i>
          <span>我的订单</span>
        </section>
        <span class="arrow">
          <i
            class="iconfont icon-jiantou"
            style="color:#ccc"
          ></i>
        </span>
      </section>
    </router-link>
    <section class="main2">
      <section>
        <i
          class="iconfont icon-icon-test"
          style="color:green"
        ></i>
        <span>积分商城</span>
      </section>
      <span class="arrow">
        <i
          class="iconfont icon-jiantou"
          style="color:#ccc"
        ></i>
      </span>
    </section>
    <section class="main2">
      <section>
        <i
          class="iconfont icon-huiyuan"
          style="color:blue"
        ></i>
        <span>外卖会员卡</span>
      </section>
      <span class="arrow">
        <i
          class="iconfont icon-jiantou"
          style="color:#ccc"
        ></i>
      </span>
    </section>
    <section
      class="main2"
      style="border-bottom:0.0005rem solid #ccc"
    >
      <section>
        <i
          class="iconfont icon-dingdan"
          style="color:#1e90ff"
        ></i>
        <span>服务中心</span>
      </section>
      <span class="arrow">
        <i
          class="iconfont icon-jiantou"
          style="color:#ccc"
        ></i>
      </span>
    </section>
  </div>
</template>

<script>
import "../iconfont/font_q2qoov54gnj/iconfont.css";
import Header from "../components/Header.vue";
export default {
  data: function() {
    return {
      text: ""
    };
  },
  mounted() {
    let str = localStorage.getItem("Authorization");
    if (str) {
      this.$refs.reg.innerHTML = "尊敬的用户";
      this.text = true;
    } else {
      this.$refs.reg.innerHTML = "注册/登录";
      this.text = false;
    }
  },
  methods: {
    goto() {
      let str1 = localStorage.getItem("Authorization");
      if (!str1) {
        this.$router.push("/login");
      }
    }
  },
  components: {
    Header
  }
};
</script>
<style lang="scss">
#mine {
  width: 100%;
  overflow: hidden;
  .loginReg {
    width: 100%;
    margin-top: 1.2rem;
    background-color: #1e90ff;
    .icon-portrait {
      margin-left: 0.266667rem;
      font-size: 1.5rem;
      line-height: 3rem;
    }
    // text-align: center;
    .loginReg-input {
      padding-left: 0.4rem;
      line-height: 3rem;
      font-size: 0.6rem;
      color: #fff;
      padding: 0.266667rem, 0.266667rem;
      background-color: #1e90ff;
      margin-bottom: 0.266667rem;
    }
  }
  .profile_info_data {
    margin-bottom: 0.12rem;
    display: flex;
    // position: relative;
    border: none;
    width: 100%;
    // background: #fff;
    overflow: hidden;
    .profile_info_data {
      height: 3rem;
      justify-content: space-around;
      align-items: center;
      .info_data_link {
        width: 33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: 0.013333rem solid #ccc;
        height: 100%;
        .info_data_top_1 {
          display: inline-block;
          font-size: 1rem;
          color: #f90;
          font-weight: 700;
          line-height: 0.4rem;
        }
        .info_data_bottom {
          color: #666;
        }
      }
    }
  }
  .main2 {
    display: flex;
    justify-content: space-between;
    line-height: 1.333333rem;
    border-top: 0.0005rem solid #ccc;
    .arrow {
      padding-right: 0.4rem;
    }
    span {
      font-size: 0.43rem;
      color: #333;
    }
    i {
      padding-left: 0.666667rem;
      font-size: 0.5rem;
      padding-right: 0.266667rem;
    }
  }
}
</style>

