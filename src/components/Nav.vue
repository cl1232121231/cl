<template>
  <div id="nav">
    <!-- <div class="swipe">
            <a href="###" class="food_item">
                <div class="picbix">
                    <img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" alt="">
                </div>
                <span class="text">甜品饮品</span>
            </a>
        </div>
        <div class="swipe_index">
            <span></span>
            <span></span>
        </div> -->
    <div
      class="wrapper"
      style="height:5.333333rem"
    >
      <swiper
        :options="swiperOption"
        class="swiper-container"
      >
        <!-- slides -->
        <swiper-slide
          class="swiper-item swipe"
          style="height:5.333333rem"
        >
          <!-- <img
            class='swiper-img'
            :src='item.imgUrl'
            alt="去哪儿门票"
          /> -->
          <a
            href="###"
            v-for='item of shoplistone'
            :key='item.id'
            class="food_item"
            
          >
            <div class="picbix">
              <img
                :src='"https://fuss10.elemecdn.com/"+item.image_url'
                alt=""
              >
            </div>
            <span class="text">{{ item.title }}</span>
          </a>
        </swiper-slide>
        <swiper-slide
          class="swiper-item swipe"
          style="height:5.333333rem"
        >
          <!-- <img
            class='swiper-img'
            :src='item.imgUrl'
            alt="去哪儿门票"
          /> -->
          <a
            href="###"
            v-for="item in shoplisttwo"
            :key='item.id'
            class="food_item"
          >
            <div class="picbix">
              <img
                :src='"https://fuss10.elemecdn.com/"+item.image_url'
                alt=""
              >
            </div>
            <span class="text">{{ item.title }}</span>
          </a>
        </swiper-slide>
        <!-- Optional controls ,显示小点-->
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
    </div>
  </div>

</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: ["shoplistone", "shoplisttwo"],
  data() {
    return {
      swiperOption: {
        // 参数选项,显示小点
        pagination: ".swiper-pagination",
        //循环
        loop: true
        //每张播放时长3秒，自动播放
        // autoplay: 2000,
        //滑动速度
        // speed: 1000
        // delay:1000
      }
        //三张轮播，使用变量循环
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="scss" scoped>
#nav {
  width: 100%;
  font-size: 0.426667rem;
  margin-top: 1.2rem;
  margin-bottom: 0.266667rem;
  height: 5.333333rem;
  background: #fff;
  position: relative;
  padding-top: 0.4rem;
  .swipe {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-x: scroll;
    .food_item {
      height: 1.946667rem;
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .picbix {
        height: 1.333333rem;
        width: 1.333333rem;
        img {
          height: 1.333333rem;
          width: 1.333333rem;
        }
      }
      .text {
        font-size: 0.346667rem;
        color: #666;
      }
    }
  }
  .swipe_index {
    position: absolute;
    bottom: 0.133333rem;
    left: 0rem;
    width: 100%;
    height: 0.426667rem;
    text-align: center;
    span {
      display: inline-block;
      background: #1e90ff;
      border-radius: 50% 50%;
      height: 0.213333rem;
      width: 0.213333rem;
    }
    span:nth-child(1) {
      margin-right: 0.08rem;
    }
  }
}
</style>