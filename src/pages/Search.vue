<template>
  <div id="search">
    <Header title="搜索" />
    <div class="bottom">
      <form
        action=""
        class="search_sousuo"
      >
        <input
          placeholder="请输入商家或美食名称"
          type="text"
          class="search_sousuo_left"
          v-model.trim="text"
          @keyup.enter="search()"
        >
        <input
          value="提交"
          type="button"
          class="search_sousuo_right"
          @click="search()"
        >
      </form>
      <keep-alive>
        <Shoplist :datalist="datalist"></Shoplist>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Shoplist from "../components/Shoplist.vue";
export default {
  data: function() {
    return {
      text: "",
      datalist: []
    };
  },
  methods: {
    search() {
      if (this.text) {
        var data = { name: this.text };
        this.$axios
          .post("http://localhost:8888/users/search", this.$qs.stringify(data))
          .then(res => {
            //请求成功返回的值
            let arr = res.data.data;
            this.datalist = arr;
          })
          .catch(function(error) {
            //请求失败返回的值
            window.console.log(error);
          });
      }
    }
  },
  components: {
    Header,
    Shoplist
  }
};
</script>
<style lang="scss" scoped>
#search {
  background: #fff;
  .bottom {
    margin-top: 1.2rem;
    .search_sousuo {
      height: 1.6rem;
      background: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .search_sousuo_left {
        width: 7.2rem;
        height: 0.933333rem;
        background: #f3f3f3;
        border: 4px solid #f2f2f2;
        font-size: 14px;
        color: #333;
        box-sizing: border-box;
        font-weight: bold;
        outline: none;
      }
      .search_sousuo_right {
        width: 1.653333rem;
        height: 0.933333rem;
        padding: 0 0.106667rem;
        font-size: 0.426667rem;
        color: #fff;
        background: #1e90ff;
        box-sizing: border-box;
        font-weight: bold;
        outline: none;
      }
    }
  }
}
</style>