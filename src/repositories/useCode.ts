import axiosUtil from "@/utils/axios";

interface Result {

}

interface Context {
    post: (phone: number) => Promise<Result>
}

export function useCode(): Context {
    const post = (phone: number) => {
        return axiosUtil.post<Result>('', {phone: phone})
    }
    return {
        post
    }
}
