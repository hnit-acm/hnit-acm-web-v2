import {readonly, ref} from 'vue'
import axios from "../utils/axios";
import {ElMessage} from 'element-plus';
import {Response} from "/@/common/models/response";

export function useAnnouceList() {

}

interface AnnounceContent {
    text: string
    title: string
    type: number
    signature: string
    createTime: string
}

export function useAnnounceContent() {
    const get = (id: number) => {
        return new Promise<AnnounceContent>((resolve, reject) => {
            axios.get<Response<AnnounceContent>>("http://127.0.0.1:4523/mock/371014/api/sys/announce/one", {
                params: {
                    id: id,
                    testAaa:0,
                }
            }).then(
                value => {
                    if (!value.data.code) {
                        resolve(value.data.data)
                        return
                    }
                    ElMessage.error(value.data.msg)
                    reject(value.data.msg)
                    return
                }
            ).catch(
                reason => {
                    ElMessage.error(reason)
                    reject(reason)
                }
            )
        })
    }
    return {
        get
    }
}
