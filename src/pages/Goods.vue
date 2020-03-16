<template>
  <div id="goods">
    <Header title="订单" />
    <div class="order_no_login">
      <img src="../images/person.png" alt />
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
<style lang="scss" scoped>
#goods {
  .order_no_login {
    padding-top: 140px;
    width: 60%;
    margin: 0 auto;
    text-align: center;
    img {
      display: block;
      width: 100%;
      height: 30%;
    }
  }
}
</style>