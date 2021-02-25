import {ref, Ref, provide, inject, onUpdated, readonly} from "vue";
import {RouteRecordNormalized, useRoute} from "vue-router";

interface BreadcrumbContext {
    visible: Ref<boolean>;
    setVisible: (value: boolean) => void;
    routes: Ref<RouteRecordNormalized[]>
    refresh: () => void
    push: (item: RouteRecordNormalized) => void
}

const BreadcrumbSymbol = Symbol();

export function useBreadcrumbProvide(): BreadcrumbContext {

    const visible = ref(true)

    const route = useRoute()


    const getRoutes = (): RouteRecordNormalized[] => route.matched.filter(
        (value, index) => {
            if (value.meta.title) return true
        })

    const routes = ref(getRoutes())
    const refresh = () => {
        routes.value = getRoutes()
    }
    const setVisible = (value: boolean) => {
        if (value) {
            refresh()
        }
        visible.value = value
    }
    const push = (item: RouteRecordNormalized) => {
        routes.value.push(item)
    }
    const ctx: BreadcrumbContext = {
        visible: readonly(visible),
        setVisible,
        routes: routes as Ref<RouteRecordNormalized[]>,
        refresh,
        push
    }
    provide(BreadcrumbSymbol, ctx)
    onUpdated(() => {
        refresh()
    })
    return ctx
}

export function useBreadcrumbInject(): BreadcrumbContext {
    const ctx = inject<BreadcrumbContext>(BreadcrumbSymbol);

    if (!ctx) {
        throw new Error(`useBookListInject must be used after useBookListProvide`);
    }

    return ctx;
}
