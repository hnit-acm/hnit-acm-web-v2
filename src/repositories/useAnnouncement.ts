import {readonly, ref} from 'vue'
import axios from "axios";
import { ElMessage } from 'element-plus';
export function useAnnouceList() {

}

type AnnounceContent = {
    text: string
    title: string
    type: number
}

export function useAnnounceContent() {
    const get = (id: number) => {
        return new Promise<AnnounceContent | string>((resolve, reject) => {
            axios.get("http://127.0.0.1:4523/mock/371014/api/sys/announce/one", {
                params: {
                    id: id
                }
            }).then(
                value => {
                    if (!value.data.code) {
                        resolve(value.data.data)
                        return
                    }
                    resolve(value.data.msg)
                    ElMessage.error(value.data.msg)
                    return;
                }
            ).catch(
                reason => {
                    reject(reason)
                }
            )
        })
    }
    return {
        get
    }
}
