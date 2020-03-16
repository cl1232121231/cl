<template>
  <div id="app">
    <!-- <keep-alive> -->
    <!-- <router-view> -->
    <Footer v-show="$route.meta.showFooter"></Footer>
    <router-view />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import "./js/rem.js";
import "./css/base.css";
import "./iconfont/font_1341265_n9uubaop23f/iconfont.css";
import "./font-icon/iconfont.css";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Footer
  }
};
</script>

<style>
</style>
