import axios from "axios";

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
    if (!(data instanceof Object )|| !data) return data
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
    if (value.data){
        value.data = camel(value.data)
    }
    return value
})

export default axios