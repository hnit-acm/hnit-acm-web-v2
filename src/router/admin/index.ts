import {RouteRecordRaw} from "vue-router";

const adminRouteInfo: RouteRecordRaw = {
    path: '/admin',
    name: 'Admin',
    meta: {
        title: "系统管理",
        isMenu: false
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/admin/Admin.vue')
}
export default adminRouteInfo
