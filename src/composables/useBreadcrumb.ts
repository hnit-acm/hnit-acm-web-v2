import {computed, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {Payload, useStore} from "vuex";


export default function useBreadcrumb() {
    const route = useRoute()
    const getRoutes = () => route.matched.map(value => {
        return {
            path: value.path,
            breadcrumbName: value.meta.title,
        }
    })

    const {commit, state} = useStore()
    if (route.path === '/index') {
        commit("setIsIndex", true)
    } else {
        commit("setIsIndex", false)
    }

    const isIndex = computed(ctx => {
        return state.isIndex
    })

    return {
        isIndex,
        getRoutes,
    }
}
