<template>
  <div>
    <Detailtop :mydatalist="mydatalist" />
    <router-view />
    <Order v-show="$route.meta.showOrder"></Order>
  </div>

</template>

<script>
import Detailtop from "./Detailtop.vue";
import Order from "../pages/order.vue";
export default {
  data: function() {
    return {
      id: 0,
      datalist: [],
      mydatalist: []
    };
  },
  components: {
    Detailtop,
    Order
  },
  mounted() {
    this.id = this.$route.params.id;
    // window.console.log(this.id);
    this.$axios
      .get("http://localhost:8888/users/shops")
      .then(res => {
        //请求成功返回的值
        let arr = res.data.data;
        this.datalist = arr;
        this.mydatalist = this.datalist.filter(item => item.id == this.id);
        // window.console.log(this.mydatalist);
      })
      .catch(function(error) {
        //请求失败返回的值
        window.console.log(error);
      });

    //渲染
  }
};
</script>
