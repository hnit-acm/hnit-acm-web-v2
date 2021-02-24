import {ref, Ref} from "vue";

interface StateButtonProps {
    loading: false | true
    type?: 'primary' | 'success' | 'error' | 'warning'
    name: string
    icon?: string
    interval: number
    disabled?: boolean
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
    callback?: () => void
}

export function useStateButton(ctx: StateButtonProps): Context {
    const data = ref<StateButtonProps>(ctx)
    let opState = false;
    const op = (callback?: () => void) => {
        data.value.disabled = true
        const interval = setInterval(() => {
            if (data.value.interval <= 0) {
                reset()
                opState = false
                if (callback) {
                    callback()
                }
                clearInterval(interval)
                return
            }
            data.value.interval--
        }, 1000)
    }
    const reset = () => {
        data.value = ctx
    }
    const unionPropsSet = (ops: Options, type: 'primary' | 'success' | 'error' | 'warning'): StateButtonProps => {
        return {
            loading: false,
            type: type,
            name: ops.name ? ops.name : 'loading',
            icon: ops.icon ? ops.icon : '',
            interval: ops.interval ? ops.interval : 0
        } as StateButtonProps
    }
    const loading = (ops: Options) => {
        if (opState) {
            return
        }
        data.value = {
            loading: true,
            name: ops.name ? ops.name : 'loading',
            interval: ops.interval ? ops.interval : 0
        } as StateButtonProps
    }
    const warning = (ops: Options) => {
        if (opState) {
            return
        }
        opState = true
        data.value = unionPropsSet(ops, 'warning')
        op(ops.callback)
    }
    const error = (ops: Options) => {
        if (opState) {
            return
        }
        opState = true
        data.value = unionPropsSet(ops, 'error')
        op(ops.callback)
    }
    const success = (ops: Options) => {
        if (opState) {
            return
        }
        opState = true
        data.value = unionPropsSet(ops, 'success')
        op(ops.callback)
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
