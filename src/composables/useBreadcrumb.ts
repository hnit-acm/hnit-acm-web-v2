import {computed, ref, Ref, provide, inject} from "vue";
import {useRoute} from "vue-router";

type BreadcrumbContext = {
    visible: Ref<boolean>;
    setVisible: (value: boolean) => void;
    routes: Ref<[]>
    refresh: () => void
    push: (item: { path: string, breadcrumbName: string }) => void
};

const BreadcrumbSymbol = Symbol();

export function useBreadcrumbProvide() {

    const visible = ref(true)

    const route = useRoute()
    const getRoutes = () => route.matched.map(value => {
        return {
            path: value.path,
            breadcrumbName: value.meta.title,
        }
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
    const push = (item: { path: string, breadcrumbName: string }) => {
        routes.value.push(item)
    }
    provide(BreadcrumbSymbol, {
        visible,
        setVisible,
        routes,
        refresh,
        push
    })
    return {
        visible,
        setVisible,
        routes,
        refresh,
        push
    }
}

export function useBreadcrumbInject() {
    const booksContext = inject<BreadcrumbContext>(BreadcrumbSymbol);

    if (!booksContext) {
        throw new Error(`useBookListInject must be used after useBookListProvide`);
    }

    return booksContext;
}
