import {RouteRecordRaw} from "vue-router";

const competitionRouteInfo: RouteRecordRaw = {
    path: '/competition',
    name: 'Competition',
    meta: {
        title: "在线竞赛",
        banner: "",
        isMenu: true
    },
    component: () => import('@/views/competition/Competition.vue'),
    children: [
        {
            path: '',
            component: () => import('@/views/competition/ListPanel.vue'),
        },
        {
            path: 'detail',
            component: () => import('@/views/competition/Detail.vue'),
        }
    ],
}

export default competitionRouteInfo
