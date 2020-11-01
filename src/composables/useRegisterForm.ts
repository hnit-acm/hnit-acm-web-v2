import {reactive} from 'vue'
import {useForm} from "@ant-design-vue/use";


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
    const {validate, validateInfos} = useForm(
        modelRef,
        reactive({
            schoolNumber: [
                {
                    required: true, trigger: ['change', 'blur'], message: '请输入学号',
                },
                {
                    len: 11, trigger: ['change', 'blur'], message: '学号长度不正确',
                },
            ],
            password: [
                {
                    required: true, trigger: ['change', 'blur'], message: '请输入密码',
                },
                {
                    pattern: '(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.{6,14})',
                    trigger: ['change', 'blur'],
                    message: '请输入至少包括字母和数字的组合',
                },
                {
                    validator: async (rule: string, value: string, callback: any) => {
                        if (value !== '') {
                            validate('confirm')
                        }
                        return Promise.resolve();
                    }, trigger: ['change', 'blur']
                },
            ],
            confirm: [
                {
                    required: true, trigger: ['change', 'blur'], message: '请再次输入密码',
                },
                {
                    validator: validateConfirm, trigger: ['change', 'blur']
                },
            ],
            phone: [
                {
                    required: true, trigger: ['change', 'blur'], message: '请输入手机号码',
                },
                {
                    pattern: '\\d{11}',
                    trigger: ['change', 'blur'],
                    message: '手机号码格式不正确',
                    transform: (val: number) => val.toString()
                },
            ],
            code: [
                {
                    required: true, trigger: ['change', 'blur'], message: '请输入验证码',
                },
            ],
        }),
    );
    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        return validate()
    };
    return {
        validateInfos,
        modelRef,
        onSubmit,
    };
}
