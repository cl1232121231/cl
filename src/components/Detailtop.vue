<template>
  <header class="detailtop">
    <ul class="detailtopmain">
      <li class="maintop">
        <span class="back">&lt;</span>
        <div class="shopicon">
          <img src="../image/top.jpg" alt />
        </div>
      </li>
      <li class="detailcontent">
        <h1 class="shopname iconfont">
          <span class="bank">品牌</span>嘉禾一品（温都水域）
          <i class="clickright">&#xe620;</i>
        </h1>
        <p>4.2&nbsp;月售90单&nbsp;硅谷专送约28分钟&nbsp;距离1000m</p>
        <p class="shopsale">
          <span class="fristpay">首单</span>
          <span>新用户下单立减17元（不与其他活动同享）</span>
          <span>
            8个优惠
            <i class="iconfont">&#xe6bd;</i>
          </span>
        </p>
      </li>
    </ul>
    <ul class="change">
      <li v-for="item in meau" :key="item.name" @click="goto(item.path)">
        <span :class="{active:item.path===Path}">{{item.text}}</span>
      </li>
    </ul>
  </header>
</template>


<script>
export default {
  data() {
    return {
      Path: "/order",
      meau: [
        {
          name: "order",
          path: "/order",
          text: "点餐"
        },
        {
          name: "view",
          path: "/view",
          text: "评价"
        },
        {
          name: "shop",
          path: "/shop",
          text: "商家"
        }
      ]
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path);
      this.Path = path;
    }
  }
};
</script>


<style lang="scss" scoped>
.detailtop {
  width: 100%;
  height: 5rem;
  box-sizing: border-box;
  .detailtopmain {
    .maintop {
      height: 1.333333rem;
      background: #1e90ff;
      position: relative;
      .back {
        font-size: 0.8rem;
        color: white;
        position: absolute;
      }
      .shopicon {
        width: 1.6rem;
        height: 1.6rem;
        background: #58bc58;
        position: absolute;
        right: 50%;
        transform: translate(50%, 20%);
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .detailcontent {
      width: 8.566667rem;
      height: 1.866667rem;
      margin: auto;
      margin-top: 0.6rem;
      text-align: center;
      .shopname {
        font-weight: 900;
        font-size: 0.6rem;
        display: flex;
        align-items: center;
        .clickright {
          font-size: 0.213333rem;
        }
        .bank {
          display: block;
          font-size: 0.206667rem;
          width: 0.96rem;
          height: 0.48rem;
          background: yellow;
          text-align: center;
          margin-right: 0.266667rem;
        }
      }
      .shopsale {
        height: 0.666667rem;
        border: 0.013333rem gray solid;
        display: flex;
        align-items: center;
        i {
          font-size: 0.16rem;
        }
        .fristpay {
          display: block;
          width: 0.72rem;
          height: 0.466667rem;
          text-align: center;
          background: #58bc58;
          color: white;
          margin-right: 0.093333rem;
        }
      }
    }
  }

  .change {
    display: flex;
    justify-content: space-between;
    li {
      width: 33%;
      height: 0.96rem;
      line-height: 0.96rem;
      font-size: 0.4rem;
      text-align: center;

      span {
        width: 1.066667rem;
        display: inline-block;
      }
      .active {
        border-bottom: #58bc58 0.04rem solid;
        color: #58bc58;
      }
    }
  }
}
</style>