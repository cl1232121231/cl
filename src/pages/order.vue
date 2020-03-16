<template>
  <div id="list">
    <ul class="listItem">
      <li
        :class="{change:titlename==list.title}"
        v-for="(list,idx) in listtitle"
        :key="list.title"
        @click="change(idx)"
      >
        <i class="iconfont sale"></i>
        {{list.title}}
      </li>
    </ul>
    <ul
      class="listcontent"
      v-for='(biglist) in orderlist'
      :key='biglist.Name'
      ref="index"
    >
      <li class="listtitle">{{biglist.Name}}</li>

      <li
        class="contentMain"
        v-for='item in biglist.list'
        :key='item.name'
      >
        <img :src="item.imgurl" />
        <div class="Datailcontent">
          <h3>{{item.name}}</h3>
          <h4>{{item.adress}}</h4>
          <p class="salement">
            <span>月售91份</span>
            <span>好评率100%</span>
          </p>
          <h5 class="price">
            ￥{{item.price}}
            <i
              class="iconfont icon-jia"
              @click="add(item.id,item.name,item.price,)"
            ></i>
          </h5>
        </div>
      </li>
    </ul>
    <div class="footer">
    </div>
    <Shopping :orderlist="orderlist" />
    <cart />
  </div>
</template>

<script>
import "../iconfont/font_1341265_in1tbshrron/iconfont.css";
import Shopping from "../components/Shopping.vue";
import cart from "../components/cart.vue";
export default {
  data: function() {
    return {
      titlename: "",
      listtitle: [],
      orderlist: [],
      list: []
    };
  },
  components: {
    cart,
    Shopping
  },
  methods: {
    change(idx) {
      this.titlename = this.listtitle[idx].title;
      window.console.log(this.$refs.index[idx].offsetTop);
      window.scrollTo(0, this.$refs.index[idx].offsetTop);
    },
    add(myid, myname, myprice) {
      // let str = this.$store.state.cartlist.forEach(item => {
      //   id !== myid){
      //     return true;
      //   }
      // });
      // window.console.log(str);f(item.myi

      // if (str) {
        this.$store.commit({
          type: "addcart",
          isok: false,
          num: 1,
          myprice,
          myid,
          myname
        });
      // } else {
        // this.$store.state.cartlist.forEach(item => {
        //   if (item.myid === myid) {
        //     item.num++;
        //   }
        // });
      // }

      var data = {
        buycount: this.$store.state.num,
        buyname: this.$store.state.myname,
        buyprice: this.$store.state.myprice,
        zprice: this.$store.state.num * this.$store.state.myprice
      };
      if (this.$store.state.myprice) {
        this.$axios
          .post(
            "http://localhost:8888/users/shoppingcar",
            this.$qs.stringify(data)
          )
          .then(res => {
            //请求成功返回的值
            window.console.log(res);
            // window.console.log(res.data.data);
          })
          .catch(function(error) {
            //请求失败返回的值
            window.console.log(error);
          });
      }
    }
  },
  created() {
    //左侧栏
    this.$axios
      .get("http://localhost:8888/users/listtitle")
      .then(res => {
        //请求成功返回的值
        let arr = res.data;
        this.listtitle = arr;
      })
      .catch(function(error) {
        //请求失败返回的值
        window.console.log(error);
      });

    //右侧栏
    this.$axios
      .get("http://localhost:8888/users/orderlist")
      .then(res => {
        //请求成功返回的值
        let arr = res.data;
        this.orderlist = arr;
      })
      .catch(function(error) {
        //请求失败返回的值
        window.console.log(error);
      });
  }
};
</script>
<style lang="scss" scoped>
#list {
  // display: flex;
  .listItem {
    position: fixed;

    li {
      width: 2.133333rem;
      height: 1.333333rem;
      background: #f3f5f7;
      text-align: center;
      font-size: 0.363333rem;
      line-height: 1.333333rem;
    }
    .change {
      background: white;
    }
    .sale {
      color: #58bc58;
    }
    .salefire {
      color: orangered;
    }
  }
  .listcontent {
    margin-left: 2.133333rem;
    .listtitle {
      border-left: 0.04rem solid rgb(24, 23, 23);
      box-sizing: border-box;
      height: 0.666667rem;
      width: 100%;
      background: #f3f5f7;
      color: gray;
      line-height: 0.666667rem;
      padding-left: 0.533333rem;
    }
    .contentMain {
      box-sizing: border-box;
      padding: 0.533333rem;
      display: flex;
      height: 2.933333rem;
      border-bottom: 1px solid rgb(235, 222, 222);
      img {
        width: 1.6rem;
        height: 1.6rem;
      }
      .Datailcontent {
        width: 100%;
        padding-left: 0.266667rem;
        .salement {
          color: gray;

          span:nth-child(2) {
            padding-left: 0.4rem;
          }
        }
        .price {
          color: red;
          font-size: 0.366667rem;
        }
        .button {
          color: #58bc58;
          font-size: 0.566667rem;
          float: right;
        }
      }
    }
  }
}
</style>