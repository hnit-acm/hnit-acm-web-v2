import {computed, ref, Ref, provide, inject, reactive} from "vue";
import {useRoute} from "vue-router";

type ListContext = {
    visible: Ref<boolean>;
    setVisible: (value: boolean) => void;
};

const ListSymbol = Symbol();

export function useListProvide(): ListContext {

    const visible = ref(true)

    const setVisible = (value: boolean) => {
        visible.value = value
    }

    provide(ListSymbol, {
        visible,
        setVisible,
    })
    return {
        visible,
        setVisible,
    }
}

export function useListInject(): ListContext {
    const context = inject<ListContext>(ListSymbol);

    if (!context) {
        throw new Error(`useBookListInject must be used after useBookListProvide`);
    }

    return context;
}
