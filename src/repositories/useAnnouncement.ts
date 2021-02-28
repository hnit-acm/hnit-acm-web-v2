import {readonly, ref} from 'vue'
import axios from "../utils/axios";
import {ElMessage} from 'element-plus';
import {Response} from "/@/common/models/response";
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
    get: (id: number) => Promise<AnnounceContent>
}

export function useAnnounceContent(): Context {
    const get = (id: number) => {
        return axiosUtil.get<AnnounceContent>(
            "http://127.0.0.1:4523/mock/371014/api/sys/announce/one",
            {
                id: id
            },
            {
                success: true
            }
        )
    }
    return {
        get
    }
}
