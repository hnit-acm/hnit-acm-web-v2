import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        redirect:{
            path:'/index'
        },
        children: [
            {
                path: '/index',
                name: 'Index',
                component: () => import('@/views/Index.vue')
            },
            {
                path: '/practice',
                name: 'Practice',
                component: () => import('@/views/Practice.vue')
            },
            {
                path: '/competition',
                name: 'Competition',
                component: () => import('@/views/Competition.vue')
            },
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
            },
            {
                path: '/register',
                name: 'Register',
                component: () => import('@/views/Register.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
