import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('/@/views/Home.vue'),
        redirect: {
            path: '/index'
        },
        children: [
            {
                path: '/index',
                name: 'Index',
                meta:{
                    title:"首页"
                },
                component: () => import('/@/views/Index.vue')
            },
            {
                path: '/practice',
                name: 'Practice',
                meta:{
                    title:"算法练习"
                },
                component: () => import('/@/views/Practice.vue')
            },
            {
                path: '/competition',
                name: 'Competition',
                meta:{
                    title:"在线竞赛"
                },
                component: () => import('/@/views/Competition.vue')
            },
            {
                path: '/about',
                name: 'About',
                meta:{
                    title:"关于我们"
                },
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '/@/views/About.vue')
            },
            {
                path: '/register',
                name: 'Register',
                meta:{
                    title:"首页"
                },
                component: () => import('/@/views/Register.vue')
            },
            {
                path: '/announcement',
                meta:{
                    title:"公告"
                },
                component: () => import('/@/views/Announcement.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
