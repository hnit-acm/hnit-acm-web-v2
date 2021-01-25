import {readonly, ref} from 'vue'
import axios from "axios";

export function useAnnouceList() {

}

type AnnouceContent = {
    content: string
    title: string
    type: number
}

export function useAnnouceContent() {
    const annouceContent = ref({} as AnnouceContent)
    const get = (id: number) => {
        return new Promise((resolve, reject) => {
            axios.get("http://127.0.0.1:4523/mock/371014/api/sys/announce/one?id=1", {
                data: {
                    id: id
                },
            }).then(
                value => {
                    resolve(value.data.data)
                }
            ).catch(
                reason => {
                    reject(reason)
                }
            )
        })
    }
    return {
        annouceContent,
        get
    }
}
