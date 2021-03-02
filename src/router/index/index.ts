import {RouteRecordRaw} from "vue-router";

const indexRouteInfo: RouteRecordRaw = {
    path: '/index',
    name: 'Index',
    meta: {
        title: "首页",
        isMenu: true
    },
    component: () => import('@/views/index/Index.vue')
}

export default indexRouteInfo
