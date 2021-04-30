import {RouteRecordRaw} from "vue-router";

const profileRouteInfo: RouteRecordRaw = {
    path: '/profile',
    name: 'Profile',
    meta: {
        title: "个人信息",
        banner: "",
        isMenu: false
    },
    component: () => import('@/views/profile/Profile.vue'),
    children: [
        {
            path: '',
            component: () => import('@/views/profile/Info.vue')
        },

    ]
}

export default profileRouteInfo
