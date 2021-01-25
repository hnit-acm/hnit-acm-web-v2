import {computed, ref, Ref, provide, inject, onUpdated, readonly} from "vue";
import {useRoute} from "vue-router";

type BreadcrumbItem = {
    path: string,
    breadcrumbName: string
}

type BreadcrumbContext = {
    readonly visible: Ref<boolean>;
    setVisible: (value: boolean) => void;
    readonly routes: Ref<readonly BreadcrumbItem[]>
    refresh: () => void
    push: (item: BreadcrumbItem) => void
};

const BreadcrumbSymbol = Symbol();

export function useBreadcrumbProvide(): BreadcrumbContext {

    const visible = ref(true)

    const route = useRoute()


    const getRoutes = () => route.matched.map(value => {
        return {
            path: value.path,
            breadcrumbName: value.meta.title as string,
        } as BreadcrumbItem
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
    const push = (item: BreadcrumbItem) => {
        routes.value.push(item)
    }
    const ctx: BreadcrumbContext = {
        visible: readonly(visible),
        setVisible,
        routes: readonly(routes),
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
