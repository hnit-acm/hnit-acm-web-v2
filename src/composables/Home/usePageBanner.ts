// todo 提供页面banner设置
// assignees: nieaowei

import {useRoute} from "vue-router";
import axios from "axios";
import {inject,onBeforeMount, provide, Ref, ref} from "vue";

type PageBannerContext = {
    banner: Ref<string>
    refresh: () => void
};

const PageBannerSymbol = Symbol();

export function usePageBannerProvide(): PageBannerContext {
    const banner = ref('')
    const refresh = () => {
        const {path} = useRoute()
        axios.get("http://localhost:4523/mock/371014/api/sys/banner?page_name=" + path.split("/")[1]).then(
            (value: { data: { data: string; }; }) => {
                banner.value = value.data.data
            }
        )
    }
    provide(PageBannerSymbol, {
        banner,
        refresh
    })
    return {
        banner,
        refresh
    }
}

export function usePageBannerInject(): PageBannerContext {
    const ctx = inject<PageBannerContext>(PageBannerSymbol);
    if (!ctx) {
        throw new Error(`useBookListInject must be used after useBookListProvide`);
    }
    const defaultFunc = () => {
        ctx.refresh()
    }
    onBeforeMount(() => {
        defaultFunc()
    })
    return ctx;
}
