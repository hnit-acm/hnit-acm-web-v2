import axiosUtil from "/@/utils/axios";

interface Result {

}

interface Context {
    post: () => Promise<Result>
}

export function useCode(): Context {
    const post = () => {
        return axiosUtil.post<Result>('', {})
    }
    return {
        post
    }
}