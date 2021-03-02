import {reactive} from 'vue'



export default function useRegisterForm() {
    const modelRef = reactive({
        schoolNumber: '',
        password: '',
        confirm: '',
        phone: '',
        code: ''
    });
    const validateConfirm = async (rule: string, value: string, callback: any) => {
        if (value !== modelRef.password) {
            return Promise.reject('两次密码输入不一致')
        }
        return Promise.resolve();
    };

    return {
        modelRef,
    };
}
