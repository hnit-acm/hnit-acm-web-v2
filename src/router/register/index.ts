import {RouteRecordRaw} from "vue-router";

const registerRouteInfo: RouteRecordRaw = {
    path: '/register',
    name: 'Register',
    meta: {
        title: "注册"
    },
    component: () => import('@/views/Register.vue')
}

export default registerRouteInfo
