// todo 提供页面banner设置
// assignees: nieaowei

import {useRoute} from "vue-router";
import axios from "axios";
import {inject, onBeforeMount, provide, readonly, Ref, ref} from "vue";
import {useSystemService} from "@/repositories/useSystemService";

type PageBannerContext = {
    readonly banner: Ref<string>
    refresh: () => void
};

const PageBannerSymbol = Symbol();

export function usePageBannerProvide(): PageBannerContext {
    const banner = ref('')
    const refresh = () => {
        const {path} = useRoute()
        banner.value = ''
        const {fetchBannerOne} = useSystemService()
        fetchBannerOne(path).then(
            value => {
                banner.value = value.url
            }
        ).catch(
            err =>{
                banner.value = ''
            }
        )
    }
    const ctx: PageBannerContext = {
        banner: readonly(banner),
        refresh
    }
    provide(PageBannerSymbol, ctx)
    return ctx
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
