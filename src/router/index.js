import Vue from 'vue';

import VueRouter from 'vue-router';

import Msite from '../pages/Msite.vue';
import Search from '../pages/Search.vue';
import Goods from '../pages/Goods.vue';
import Mine from '../pages/Mine.vue';
import Login from '../pages/Login.vue';
import Detailcontent from '../pages/Detailcontent.vue';

import Order from '../pages/order.vue';
import Shop from '../pages/shop.vue';
import View from '../pages/view.vue';


Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        //首页的路由
        {
            name: 'msite',
            path: '/msite',
            component: Msite,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/',
            redirect: '/msite',//重定向
            meta: {
                showFooter: true
            }
        },
        {
            name: 'search',
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            name: 'goods',
            path: '/goods',
            component: Goods,
            meta: {
                showFooter: true
            }
        },
        {
            name: 'mine',
            path: '/mine',
            component: Mine,
            meta: {
                showFooter: true
            }
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'detailcontent',
            path: '/detailcontent',
            component: Detailcontent,
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    name: 'order',
                    path: '/order',
                    component: Order,
                    meta: {
                        showOrder: false,
                    }
                },
                {
                    path: '/',
                    redirect: '/order',//重定向
                    meta: {
                        showOrder: false
                    }
                },
                {
                    name: 'shop',
                    path: '/shop',
                    component: Shop,
                    meta: {
                        showOrder: false
                    }
                },
                {
                    name: 'view',
                    path: '/view',
                    component: View,
                    meta: {
                        showOrder: false
                    }
                }
            ]
        },
    ]
});

// 全局路由守卫
// beforeEnter
router.beforeEach((to, from, next) => {
    //把需要登录才显示的页面的路由都放进一个数组
    const nextRoute = ['order'];
    //登录状态
    let token = localStorage.getItem('Authorization');
    window.console.log(token);
    //获取登录状态
    if (nextRoute.indexOf(to.name) >= 0) {
        //需要鉴权
        if (token) {//登录就可以进入下一步
            next();
        } else {
            // 没有token 或者已经失效（未登录）
            alert("您还未登录");
            router.push({
                name: 'login', params: {
                    targeturl: to.path//当前路径
                }
            });
            // next({ name : 'login'}) 
        }
    } else {
        next();
    }
});

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


export default router;