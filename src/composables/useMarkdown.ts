import marked from "marked";
import {Ref, ref, readonly} from "vue";

interface Context {
    readonly content: Ref< string>
    refresh: (src: string) => void
}

export function useMarkdown(src: string): Context {
    const content = ref(marked(src))
    const refresh = (src: string) => {
        content.value = marked(src)
    }
    return {
        content: readonly(content),
        refresh
    }
}
