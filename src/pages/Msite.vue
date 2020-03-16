<template>
  <div id="Msite">
    <!-- <keep-alive> -->
    <router-view />
    <!-- 首页头部 -->
    <Header title="元岗路慧通产业园B...">
      <router-link
        class="header_item header_search"
        slot="left"
        to="/search"
      >
        <i
          class="header_item_icon iconfont icon-sousuo"
          style="font-size: 0.666667rem;
      color: #fff;"
        ></i>
      </router-link>
      <span class="header_item header_title">
        <span class="header_title_text"></span>
      </span>
      <a
        class="header_item header_login"
        slot="right"
      >
        <!-- <a href="###" class="aa"></a> -->
        <span
          ref="a"
          @click="one()"
        ></span>
        <!-- <a href="###" class="aa"></a> -->
      </a>
    </Header>
    <!-- 首页导航 -->
    <Nav
      :shoplistone="shoplistone"
      :shoplisttwo="shoplisttwo"
    ></Nav>
    <!-- 首页附近商家 -->
    <div class="msite_shop">
      <div class="shop_header">
        <i class="shop_header_icon iconfont icon-fujin"></i>
        <span class="shop_header_text">附近商家</span>
      </div>
      <shoplist :datalist="datalist" />
    </div>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import "../js/rem.js";
import "../css/base.css";
import "../iconfont/font_1341265_n9uubaop23f/iconfont.css";
import Header from "../components/Header.vue";
import Shoplist from "../components/Shoplist.vue";
import Nav from "../components/Nav.vue";

export default {
  name: "Msite",
  data: function() {
    return {
      datalist: [],
      shoplistone: [],
      shoplisttwo: []
    };
  },
  created() {
    this.$axios
      .get("http://localhost:8888/users/shops")
      .then(res => {
        //请求成功返回的值
        let arr = res.data.data;
        this.datalist = arr;
      })
      .catch(function(error) {
        //请求失败返回的值
        window.console.log(error);
      });

    //导航页
    this.$axios
      .get("http://localhost:8888/users/nav")
      .then(res1 => {
        //请求成功返回的值
        // window.console.log(res1.data.data);
        let arr1 = res1.data.data;
        let arr2 = arr1.slice(0, 8);
        let arr3 = arr1.slice(8, 16);
        this.shoplistone = arr2;
        this.shoplisttwo = arr3;
      })
      .catch(function(error1) {
        //请求失败返回的值
        window.console.log(error1);
      });
  },
  mounted() {
    let str = localStorage.getItem("Authorization");
    if (str) {
      this.$refs.a.innerHTML = "退出";
      this.text = true;
    } else {
      this.$refs.a.innerHTML = "注册/登录";
      this.text = false;
    }
  },
  methods: {
    one() {
      let str1 = localStorage.getItem("Authorization");
      if (!str1) {
        this.$router.push("/login");
      } else {
        let str = confirm("您确定要退出吗？");
        if (str) {
          this.$refs.a.innerHTML = "注册/登录";
          localStorage.removeItem("Authorization");
        }
      }
    }
  },
  components: {
    Header,
    Shoplist,
    Nav
  }
};
</script>

<style lang="scss" scoped>
#Msite {
  background: #f3f3f3;

  .msite_shop {
    background: #fff;
    .shop_header {
      display: flex;
      align-items: center;
      padding: 0.266667rem 0.266667rem;
      box-sizing: border-box;
      .shop_header_icon {
        font-size: 0.4rem;
        line-height: 0.4rem;
      }
      .shop_header_text {
        color: #999;
        font-size: 0.373333rem;
        line-height: 0.373333rem;
      }
    }
  }
}
</style>