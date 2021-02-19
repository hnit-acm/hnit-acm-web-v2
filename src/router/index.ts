import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('/@/views/Home.vue'),
        redirect:{
            path:'/index'
        },
        children: [
            {
                path: '/index',
                name: 'Index',
                meta: {
                    title: "首页",
                    isMenu: true
                },
                component: () => import('/@/views/Index.vue')
            },
            {
                path: '/practice',
                name: 'Practice',
                meta: {
                    title: "算法练习",
                    banner: "",
                    isMenu: true
                },
                component: () => import('/@/views/Practice.vue')
            },
            {
                path: '/competition',
                name: 'Competition',
                meta: {
                    title: "在线竞赛",
                    banner: "",
                    isMenu: true
                    // banner:"https://ali-cdn.educoder.net/images/avatars/LaboratorySetting/1_competition_banner?t=1591241723"
                },
                component: () => import('/@/views/Competition.vue')
            },
            {
                path: '/about',
                name: 'About',
                meta: {
                    title: "关于我们",
                    isMenu: true
                },
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '/@/views/About.vue')
            },
            {
                path: '/register',
                name: 'Register',
                meta: {
                    title: "注册"
                },
                component: () => import('/@/views/Register.vue')
            },
            {
                path: '/announcement',
                meta: {
                    title: "公告"
                },
                component: () => import('/@/views/Announcement.vue'),
                children: [
                    {
                        path: ':id',
                        meta: {
                            title: "标题"
                        },
                        component: () => import('/@/components/AnnouncementContent.vue'),
                    },
                ]
            },


        ]
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
