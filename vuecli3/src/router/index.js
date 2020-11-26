import VueRouter from 'vue-router'
import Vue from "vue"
//1.通过vue.use(插件),安装插件
Vue.use(VueRouter)
//2.创建Vuerouter对象
const routes=[
    {
        path: '',
        redirect:'/home'
    },
    {
        path:'/home',
        component:()=>import("@/components/Home"),
        //路由嵌套
        children:[
            {
                path: '',
                redirect:'news'
            },
            {
                path:'news',
                component:()=>import('../components/HomeNews')
            },
            {
                path: 'message',
                component:()=>import('../components/HomeMessage')
            }
        ]
    },
    {
        path: '/about',
        component:()=>import("@/components/About")
    },
    {
        path: '/user/:userid',
        component:()=>import("../components/User")
    },
    {
        path: '/profile',
        component:()=>import('../components/Profile')
    }
]
const router = new VueRouter({
    routes,
    mode:'history',
    //统一修改 link被点击所添加的class
    linkExactActiveClass:'active'
})
//3.将router传入vue实例对象
export default router