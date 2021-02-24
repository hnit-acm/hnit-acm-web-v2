import {ref, Ref} from "vue";

interface StateButtonProps {
    loading: false | true
    type: 'primary' | 'success' | 'error' | 'warning'
    name: string
    icon: string
    interval: number
}

interface Context {
    data: Ref<StateButtonProps>
    reset: (ops: Options) => void
    loading: (ops: Options) => void
    error: (ops: Options) => void
    success: (ops: Options) => void
    warning: (ops: Options) => void
}

interface Options {
    name?: string
    interval?: number
    icon?: string
}

export function useStateButton(ctx: StateButtonProps): Context {
    const data = ref<StateButtonProps>(ctx)
    let opState = false;
    const op = () => {
        const interval = setInterval(() => {
            if (data.value.interval <= 0) {
                reset()
                opState = false
                clearInterval(interval)
                return
            }
            data.value.interval--
        }, 1000)
    }
    const reset = () => {
        data.value = ctx
    }
    const loading = (ops: Options) => {
        if (opState) {
            return
        }
        data.value = {
            loading: true,
            type: 'primary',
            name: ops.name ? ops.name : 'loading',
            icon: ops.icon ? ops.icon : 'loading',
            interval: ops.interval ? ops.interval : 0
        } as StateButtonProps
    }
    const warning = (ops: Options) => {
        if (opState) {
            return
        }
        opState = true
        data.value = {
            loading: false,
            type: 'warning',
            name: ops.name ? ops.name : 'warning',
            icon: ops.icon ? ops.icon : 'loading',
            interval: ops.interval ? ops.interval : 0
        } as StateButtonProps
        op()
    }
    const error = (ops: Options) => {
        if (opState) {
            return
        }
        opState = true
        data.value = {
            loading: false,
            type: 'error',
            name: ops.name ? ops.name : 'error',
            icon: ops.icon ? ops.icon : 'error',
            interval: ops.interval ? ops.interval : 0
        } as StateButtonProps
        op()
    }
    const success = (ops: Options) => {
        if (opState) {
            return
        }
        opState = true
        data.value = {
            loading: false,
            type: 'success',
            name: ops.name ? ops.name : 'success',
            icon: ops.icon ? ops.icon : 'loading',
            interval: ops.interval ? ops.interval : 0
        } as StateButtonProps
        op()
    }
    return {
        data,
        reset,
        loading,
        warning,
        error,
        success
    }
}