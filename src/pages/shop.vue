<template>
  <ul id="shop">
    <li class="dispatching">
      <h2 class="disTitle">配送信息</h2>
      <p class="message">
        <span>硅谷专送</span>&nbsp;由商家配送提供配送，约28分钟送达，距离1000m
      </p>
      <p>配送费￥4</p>
    </li>
    <li class="server">
      <h2 class="serverTitle">活动与服务</h2>
      <p>
        <span class="firstpay">首单</span>&nbsp;新用户下单立减17元（不与其它活动同享）
      </p>
      <p>
        <span class="reduce">满减</span>
        &nbsp;满35减19，满65减35
      </p>
      <p>
        <span class="sale">特价</span>&nbsp;【立减19.5元】欢乐小食餐
      </p>
      <p>
        <span class="sale">特价</span>&nbsp;【立减29元】火烤菠萝皇堡双人餐
      </p>
      <p>
        <span class="sale">特价</span>&nbsp;【立减16.5元】火烤菠萝皇堡单人餐
      </p>
      <p>
        <span class="sale">特价</span>&nbsp;【立减15】经典安格斯单人餐
      </p>
      <p>
        <span class="sale">特价</span>&nbsp;【立减11.95】皇堡双人餐
      </p>
      <p>
        <span class="sale extra">特价</span>&nbsp;【立减19.8】半价单人餐
      </p>
    </li>
    <li class="shopphoto">
      <h2 class="titlepic">商家实景</h2>
      <div class="shopmain">
        <img src="../image/1.jpg" alt />
        <img src="../image/1.jpg" alt />
        <img src="../image/1.jpg" alt />
      </div>
    </li>
  </ul>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
#shop {
  background: #f3f5f7;
  .dispatching {
    box-sizing: border-box;
    padding: 0 0.633333rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 3.333333rem;
    width: 100%;
    border-bottom: 0.013333rem solid gray;
    border-top: 0.013333rem solid gray;
    margin-bottom: 0.533333rem;
    background: white;

    .disTitle {
      font-size: 20px;
      font-weight: 800;
    }
    .message {
      color: gray;
      span {
        display: inline-block;
        width: 1.466667rem;
        height: 0.533333rem;
        background: #1e90ff;
        color: white;
        border-radius: 10%;
        text-align: center;
      }
    }
  }
  .server {
    box-sizing: border-box;
    padding: 0 0.633333rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 7rem;
    width: 100%;
    border-bottom: 0.013333rem solid gray;
    border-top: 0.013333rem solid gray;
    margin-bottom: 0.533333rem;
    background: white;
    .serverTitle {
      font-size: 20px;
      font-weight: 800;
    }
    p {
      color: gray;
      font-size: 0.286667rem;
    }
    .firstpay {
      display: inline-block;
      width: 0.866667rem;
      height: 0.433333rem;
      background: #58bc58;
      color: white;
      border-radius: 10%;
      text-align: center;
    }
    .reduce {
      display: inline-block;
      width: 0.866667rem;
      height: 0.433333rem;
      background: #e02626;
      color: white;
      border-radius: 10%;
      text-align: center;
    }
    .sale {
      display: inline-block;
      width: 0.866667rem;
      height: 0.433333rem;
      background: #d67607;
      color: white;
      border-radius: 10%;
      text-align: center;
    }
    .extra {
      margin-bottom: 0.466667rem;
    }
  }
  .shopphoto {
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 0.633333rem;
    border-bottom: 0.013333rem solid gray;
    border-top: 0.013333rem solid gray;
    background: white;
    height: 4rem;
    .titlepic {
      margin-top: 0.266667rem;
      font-size: 20px;
      font-weight: 800;
      margin-bottom: 0.266667rem;
    }
    .shopmain {
      width: 100%;
      display: flex;
      justify-content: space-around;
      img {
        width: 2.666667rem;
      }
    }
  }
}
</style>