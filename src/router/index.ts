import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import indexRouteInfo from "@//router/index/index";
import practiceRouteInfo from "@/router/practice/index"
import competitionRouteInfo from "@/router/competition"
import announcementRouteInfo from "@/router/announcement";
import registerRouteInfo from "@/router/register";
import aboutRouteInfo from "@/router/about";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        redirect: {
            path: '/index'
        },
        children: [
            indexRouteInfo,
            practiceRouteInfo,
            competitionRouteInfo,
            aboutRouteInfo,
            registerRouteInfo,
            announcementRouteInfo
        ]
    },
    {
        path:'/e',
        component: ()=>import('@/components/editor/Editor.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
