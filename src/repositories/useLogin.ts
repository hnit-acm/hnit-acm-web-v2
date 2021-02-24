import axiosUtil from "/@/utils/axios";

interface LoginResult {
    token: string
}

interface Context {
    post: (data: object) => Promise<LoginResult>
}

export function useLogin(): Context {
    const post = (data: object) => {
        return axiosUtil.post<LoginResult>("", data)
    }
    return {
        post
    }
}

