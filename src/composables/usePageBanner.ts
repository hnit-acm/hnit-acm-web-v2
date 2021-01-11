// todo 提供页面banner设置
// assignees: nieaowei

import {useRoute} from "vue-router";

export default function usePageBanner() {
    const {meta} = useRoute()
    const getBanner = () => {
        return "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
    }
    meta.banner = getBanner()
    return{
        meta
    }
}
