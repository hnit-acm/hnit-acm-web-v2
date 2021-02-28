import {RouteRecordRaw} from "vue-router";

const practiceRouteInfo: RouteRecordRaw = {
    path: '/practice',
    name: 'Practice',
    meta: {
        title: "算法练习",
        banner: "",
        isMenu: true
    },
    component: () => import('/@/views/practice/Practice.vue'),
    children:[
        {
            path:'',
            component: ()=>import('/@/views/practice/ListPanel.vue')
        }
    ]
}

export default practiceRouteInfo
