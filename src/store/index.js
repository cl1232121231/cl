import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//创建实例
const store = new Vuex.Store({
    strict: true,//开启严格模式 确保state里面的数据只能mutations修改

    state: {
        isok: false,
        cartlist: []
    },
    mutations: {//更改数据的方法
        addcart(state, data) {
            state.cartlist.push(data);
        },
        changeisok(state) {
            state.isok = !state.isok;
        },
        addnumz(state, id) {
            state.cartlist.forEach(item => {
                if (item.myid === id.id) {
                    item.num++;
                }
            });
        },
        cutnumz(state, id) {
            state.cartlist.forEach(item => {
                if (item.myid === id.id) {
                    if (item.num > 1) {
                        item.num--;
                    }
                }
            });
        },
        dele(state) {
            state.cartlist = [];
        }
    }
})

export default store;