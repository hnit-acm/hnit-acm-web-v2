import { useRouter} from "vue-router";

export function useMenu() {
    const {getRoutes} = useRouter()
    const menuRouters = getRoutes().filter((value, index) => {
        return !!value.meta?.isMenu;
    })
    return {
        menuRouters
    }
}
