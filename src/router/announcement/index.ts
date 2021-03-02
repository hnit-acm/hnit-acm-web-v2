import {RouteRecordRaw} from "vue-router";

const announcementRouteInfo: RouteRecordRaw = {
    path: '/announcement',
    meta: {
        title: "公告"
    },
    component: () => import('@/views/announcement/Announcement.vue'),
    children: [
        {
            path: "",
            component: () => import('@/views/announcement/ListPanel.vue'),
        },
        {
            path: ':id',
            component: () => import('@/views/announcement/Content.vue'),
            props: true,
            meta: {
                title: ''
            }
        },
    ]
}

export default announcementRouteInfo
