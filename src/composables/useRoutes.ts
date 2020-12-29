import {useRouter} from "vue-router";

export function useRoutes() {
    const {getRoutes} = useRouter()
    const getHome = getRoutes().map(value => {
    })
    return {
        getRoutes,
        getHome
    }
}
