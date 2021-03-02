import {RouteRecordRaw} from "vue-router";

const aboutRouteInfo: RouteRecordRaw = {
    path: '/about',
    name: 'About',
    meta: {
        title: "关于我们",
        isMenu: true
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/about/About.vue')
}
export default aboutRouteInfo
