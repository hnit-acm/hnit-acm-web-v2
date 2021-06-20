import {axiosUtil} from "@/utils";

interface CarouselResp {
    count: number
    list: [{
        id: number
        img: string
        url: string
    }]
}

interface BannerResp {
    url: string
}

interface AnnounceItem {
    id: number
    title: string
    content: string
    labels: string[]
}

interface AnnounceListResp {
    count: number
    list: AnnounceItem[]
}

export function useSystemService() {
    const fetchCarouselList = () => {
        return axiosUtil.get<CarouselResp>("/api/v1/system_service/carousel/list", {})
    }
    const fetchBannerOne = (path: string) => {
        return axiosUtil.get<BannerResp>("/api/v1/system_service/banner/one", {
            path: path
        })
    }
    const fetchAnnounceList = (limit: number) => {
        return axiosUtil.get<AnnounceListResp>("/api/v1/system_service/announce/list", {
            limit: limit
        })
    }
    return {
        fetchCarouselList: fetchCarouselList,
        fetchBannerOne: fetchBannerOne,
        fetchAnnounceList
    }
}