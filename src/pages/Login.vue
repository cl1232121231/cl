<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">外卖</h2>
        <div class="login_header_title"></div>
      </div>
      <div class="login_content">
        <form>
          <div class="on">
            <section>
              <section class="login_message">
                <input
                  type="text"
                  maxlength="11"
                  placeholder="手机号码"
                  v-model.trim="name"
                  @blur="num()"
                />
                <button
                  class="get_verification"
                  ref="getvv"
                  @click="getmes()"
                >获取验证码</button>
              </section>
              <section class="login_verification">
                <!-- <input type="text" maxlength="8" placeholder="密码" /> -->
                <input
                  type="password"
                  maxlength="8"
                  placeholder="密码"
                  v-model.trim="pwd"
                />
                <div class="on">
                  <div></div>
                  <!-- <span class="switch_text"></span> -->
                </div>
              </section>
              <section class="login_message">
                <!-- <input
                  type="text"
                  maxlength="11"
                  placeholder="验证码"
                  v-model.trim="yzm"
                  @blur="y()"
                /> -->
                <!-- <img
                  class="get_verification"
                  src="http://localhost:4000/captcha"
                  alt="captcha"
                  @click="getCaptcha"
                  ref="captcha"
                /> -->
              </section>
            </section>
          </div>
          <button
            class="login_submit"
            @click="show()"
          >登录</button>
        </form>
        <a
          href="javascript:;"
          class="about_us"
        >
          温馨提示：未注册外卖帐号的账号，登录时将自动注册，且代表已同意
          <a href="javascript:;">《用户服务协议》</a>
        </a>
      </div>
      <a
        href="javascript:"
        class="go_back iconfont icon-changyongicon-"
        @click="$router.back()"
      >
      </a>
    </div>
  </section>
</template>

<script>
import "../iconfont/font_1341265_n1h0m4i76k/iconfont.css";
export default {
  data() {
    return {
      name: "",
      pwd: "",
      captcha: "",
      n1: false,
      timenum: 60,
      yzm: ""
    };
  },
  methods: {
    // var phoneReg = /^1[345789]\d{9}$/;   手机号正则格式
    num() {
      var phoneReg = /^1[345789]\d{9}$/;
      if (this.name) {
        if (!phoneReg.test(this.name)) {
          alert("输入格式有误");
          this.n1 = false;
        } else {
          this.n1 = true;
        }
      }
    },
    show() {
      if (this.name && this.pwd && this.n1) {
        // window.console.log(this.name, this.pwd);
        var data = { phone: this.name, password: this.pwd };
        this.$axios
          .post("http://localhost:8888/users/login", this.$qs.stringify(data))
          .then(res => {
            //请求成功返回的值
            window.console.log(res.data.code);
            if (res.data.code) {
              alert("登陆成功");
              localStorage.setItem("Authorization", res.data.authorization);
              let { targeturl } = this.$route.params;
              this.$router.push({
                path: targeturl || "/msite",
                query: { name }
              });
            } else {
              // alert("登录失败");
              //没有此账号，重新注册一个并登录成功
              this.$axios
                .post("http://localhost:8888/users/reg",
                  this.$qs.stringify(data)
                )
                .then(res => {
                  //请求成功返回的值
                  window.console.log(res.data.data);
                  alert("恭喜您成为叶林外卖app的新用户！首单立减10元哦！");
                  localStorage.setItem("Authorization", res.data.authorizatione);
                  this.$router.push("/msite");
                })
                .catch(function(error) {
                  //请求失败返回的值
                  window.console.log(error);
                });
            }
          })
          .catch(function(error) {
            //请求失败返回的值
            window.console.log(error);
          });
      } else {
        alert("请输入完整信息");
      }
    },
    y() {
      if (this.yzm) {
        let data = this.yzm;
        window.console.log(data);
        this.$axios
          .post(
            "http://localhost:8888/users/sendcode",
            this.$qs.stringify(data)
          )
          .then(res => {
            //请求成功返回的值
            window.console.log(res.data.data);
            alert("验证成功");
          })
          .catch(function(error) {
            //请求失败返回的值
            window.console.log(error);
          });
      }
    },
    //验证码倒计时
    getmes() {
      if (this.n1) {
        var i = setInterval(() => {
          this.timenum--;
          this.$refs.getvv.innerHTML = "获取验证码" + "(" + this.timenum + ")";
          if (this.timenum < 1) {
            clearInterval(i); //清除定时器
            this.$refs.getvv.innerHTML = "获取验证码";
          }
        }, 1000);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;

  .loginInner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;

    .login_header {
      .login_logo {
        font-size: 40px;
        font-weight: bold;
        color: #1E90FF;
        text-align: center;
      }

      .login_header_title {
        padding-top: 40px;
        text-align: center;

        >a {
          color: #333;
          font-size: 14px;
          padding-bottom: 4px;

          &:first-child {
            margin-right: 40px;
          }

          &.on {
            color: #02a774;
            font-weight: 700;
            border-bottom: 2px solid #02a774;
          }
        }
      }
    }

    .login_content {
      >form {
        >div {
          display: none;

          &.on {
            display: block;
          }

          input {
            width: 100%;
            height: 100%;
            padding-left: 10px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 4px;
            outline: 0;
            font: 400 14px Arial;

            &:focus {
              border: 1px solid #02a774;
            }
          }

          .login_message {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .get_verification {
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              border: 0;
              color: #ccc;
              font-size: 14px;
              background: transparent;

              &.right_phone {
                color: black;
              }
            }
          }

          .login_verification {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .switch_button {
              font-size: 12px;
              border: 1px solid #ddd;
              border-radius: 8px;
              transition: background-color 0.3s, border-color 0.3s;
              padding: 0 6px;
              width: 30px;
              height: 16px;
              line-height: 16px;
              color: #fff;
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);

              &.off {
                background: #fff;

                .switch_text {
                  float: right;
                  color: #ddd;
                }
              }

              &.on {
                background: #02a774;
              }

              >.switch_circle {
                position: absolute;
                top: -1px;
                left: -1px;
                width: 16px;
                height: 16px;
                border: 1px solid #ddd;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;

                &.right {
                  transform: translateX(30px);
                }
              }
            }
          }

          .login_hint {
            margin-top: 12px;
            color: #999;
            font-size: 14px;
            line-height: 20px;

            >a {
              color: #02a774;
            }
          }
        }

        .login_submit {
          display: block;
          width: 100%;
          height: 42px;
          margin-top: 30px;
          border-radius: 4px;
          background: #1E90FF;
          color: #fff;
          text-align: center;
          font-size: 16px;
          line-height: 42px;
          border: 0;
        }
      }

      .about_us {
        display: block;
        font-size: 12px;
        margin-top: 20px;
        text-align: center;
        color: #999;
      }
    }

    .go_back {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 30px;
      height: 30px;
      font-size: 0.666667rem;
      color: #ccc;

      >.iconfont {
        font-size: 20px;
        color: #999;
      }
    }
  }
}
</style>
