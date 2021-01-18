// todo 提供页面banner设置
// assignees: nieaowei

import {useRoute} from "vue-router";
import axios from "axios";
import {inject, provide, Ref, ref} from "vue";

type PageBannerContext = {
    banner: Ref<string>
    refresh: () => {}
};

const PageBannerSymbol = Symbol();

export function usePageBannerProvide() {
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

export function usePageBannerInject() {
    const booksContext = inject<PageBannerContext>(PageBannerSymbol);
    if (!booksContext) {
        throw new Error(`useBookListInject must be used after useBookListProvide`);
    }
    const defaultFunc = () => {
        booksContext.refresh()
    }
    defaultFunc()
    return booksContext;
}
