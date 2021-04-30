import {readonly, ref} from 'vue'
import axios from "../utils/axios";
import {ElMessage} from 'element-plus';
import axiosUtil from "../utils/axios";

export function useAnnouceList() {

}

interface AnnounceContent {
    text: string
    title: string
    type: number
    signature: string
    createTime: string
}

interface Context {
    getOne: (id: number) => Promise<AnnounceContent>
    getList: (count: number) => Promise<AnnounceContent>
}

export function useAnnounceContent(): Context {
    const getOne = (id: number) => {
        return axiosUtil.get<AnnounceContent>(
            "/api/mock/371014/api/sys/announce/one",
            {
                id: id
            },
            {
                success: true
            }
        )
    }
    const getList = (count: number) => {
        return axiosUtil.get<AnnounceContent>(
            "/api/mock/371014/api/sys/announce/list",
            {
                count: count ?? 0
            },
            {
                success: true
            }
        )
    }
    return {
        getOne,
        getList
    }
}
