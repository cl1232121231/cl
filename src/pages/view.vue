<template>
  <div id="view">
    <ul class="viewstars">
      <li class="viewleft">
        <h2 class="viewnumber">4.2</h2>
        <h3>综合评分</h3>
        <p>高于周边商家99%</p>
      </li>
      <li class="viewright">
        <p>
          <img src="../image/starts.jpg" alt />
          服务态度
          <span>4.1</span>
        </p>
        <p>
          <img src="../image/starts.jpg" alt />
          商品评分
          <span>4.3</span>
        </p>
        <p>
          送达时间
          <span>28分钟</span>
        </p>
      </li>
    </ul>
    <div class="Viewbutton">
      <ul class="btntop">
        <li class="heightline">全部24</li>
        <li>满意18</li>
        <li>不满意6</li>
      </ul>
      <div class="btnbottom">
        <i class="iconfont tick">&#xe621;</i>
        只看有内容的评价
      </div>
    </div>

    <ul class="userview">
      <li class="usercommite">
        <i class="iconfont">&#xe673;</i>
        <div class="usercommiteR">
          <p class="userdata">
            <span>不愿意透露名字的记者</span>
            <span>2016-07-23</span>
          </p>
          <main>不错，我以后不会再来吃了</main>
        </div>
      </li>
      <li class="usercommite">
        <i class="iconfont">&#xe673;</i>
        <div class="usercommiteR">
          <p class="userdata">
            <span>干***</span>
            <span>2016-07-23</span>
          </p>
          <main>叶同志吃了拉肚子，以后不会再点了，吃完又感冒，又要摸鱼了，鱼鳞都没了</main>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#view {
  background: #f3f5f7;
  .viewstars {
    background: white;
    height: 2.7rem;
    border-bottom: 1px solid gray;
    display: flex;
    padding: 0.233333rem;
    margin-bottom: 0.366667rem;
    .viewleft {
      width: 3.6rem;
      border-right: 1px solid gray;
      height: 2.133333rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      .viewnumber {
        font-size: 20px;
        color: orange;
      }
      h3 {
        font-size: 16px;
      }
      p {
        color: gray;
      }
    }
    .viewright {
      flex: 1;
      height: 2.133333rem;
      padding: 0.333333rem;
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      justify-content: space-around;
    }
  }
  .Viewbutton {
    padding: 0.233333rem;
    background: white;
    height: 3.066667rem;
    border-top: 1px solid rgb(226, 223, 223);
    border-bottom: 1px solid rgb(226, 223, 223);
    .btntop {
      display: flex;
      margin-bottom: 0.4rem;
      li {
        width: 1.6rem;
        height: 0.8rem;
        font-size: 14px;
        line-height: 0.8rem;
        text-align: center;
        margin: 0.3rem;
        background: #c6c9cc;
      }
      .heightline {
        background: #58bc58;
        color: white;
      }
    }
    .btnbottom {
      .tick {
        color: #58bc58;
      }
    }
  }
  .userview {
    background: white;
    .usercommite {
      display: flex;
      border-top: 0.013333rem solid rgb(226, 223, 223);
      border-bottom: 0.013333rem solid rgb(226, 223, 223);
      padding: 0.4rem;

      .iconfont {
        font-size: 26px;
        color: aqua;
        margin-right: 0.533333rem;
      }
      .usercommiteR {
        width: 100%;
        main {
          width: 100%;
        }
        .userdata {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>