import axiosUtil from "@/utils/axios";

interface LoginResult {
    token: string
}

interface LoginParams {
    username: string
    password: string
}


interface Context {
    post: (data: { username: string,password: string}) => Promise<LoginResult>
}

export function useLogin(): Context {
    const post = (data: { username: string,password: string}) =>  axiosUtil.post<LoginResult>("http://127.0.0.1:4523/mock/371014/auth_service/auth", data)
    return {
        post
    }
}

