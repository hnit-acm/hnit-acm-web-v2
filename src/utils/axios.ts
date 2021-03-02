import axios, {AxiosRequestConfig} from "axios";
import {Response} from "@common/models/response";
import {ElMessage} from "element-plus";

function camel(data: any): any {
    if (typeof data != 'object' || !data) return data
    if (Array.isArray(data)) {
        return data.map(item => camel(item))
    }

    const newData = {} as any
    for (let key in data) {
        let newKey = key.replace(/_([a-z])/g, (p, m) => m.toUpperCase())
        newData[newKey] = camel(data[key])
    }
    return newData
}

function underline(data: any): any {
    if (!(data instanceof Object) || !data) return data
    if (Array.isArray(data)) {
        return data.map(item => underline(item))
    }

    const newData = {} as any
    for (let key in data) {
        let newKey = key.replace(/([A-Z])/g, (p, m) => `_${m.toLowerCase()}`)
        newData[newKey] = underline(data[key])
    }
    return newData
}


axios.interceptors.request.use(value => {
    if (value.params) {
        value.params = underline(value.params)
    }
    if (value.data) {
        value.data = underline(value.data)
    }
    return value
})

axios.interceptors.response.use(value => {
    if (value.data) {
        value.data = camel(value.data)
    }
    return value
})

interface Config extends AxiosRequestConfig {
    error?: false | true
    success?: false | true
}

interface InfoConfig {
    error?: false | true
    success?: false | true
}

function request<T = any>(config: Config): Promise<T> {
    return new Promise<T>(
        (resolve, reject) => {
            axios.request<Response<T>>(config).then(
                value => {
                    if (!value.data.code) {
                        if (config.success) {
                            ElMessage({type: 'success', message: value.data.msg, duration: 2000})
                        }
                        resolve(value.data.data)
                        return
                    }
                    if (config.error) {
                        ElMessage({type: 'error', message: value.data.msg,duration: 2000})
                    }
                    reject(value.data.msg)
                    return
                }
            ).catch(
                reason => {
                    if (config.error) {
                        ElMessage({type: 'error', message: reason,duration: 2000})
                    }
                    reject(reason)
                }
            )
        }
    )
}

module axiosUtil {
    export function post<Result = any, Data = object>(url: string, data: Data, config?: InfoConfig): Promise<Result> {
        return request<Result>({
            url: url,
            method: "post",
            data: data,
            error: config?.error ? config.error : false,
            success: config?.success ? config.success : false,
        })
    }

    export function get<Result = any, Data = object>(url: string, data: Data, config?: InfoConfig): Promise<Result> {
        return request<Result>({
            url: url,
            method: "get",
            params: data,
            error: config?.error ? config.error : false,
            success: config?.success ? config.success : false,
        })
    }
}

export {axios}
export default axiosUtil
