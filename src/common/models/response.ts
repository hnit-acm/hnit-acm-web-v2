
export interface Response<T = any> {
    msg: string
    data: T
    code: number
}
