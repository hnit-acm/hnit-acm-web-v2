import marked from "marked";
import {ref} from "vue";

export function useMarkdown(src: string) {
    const content = ref(marked(src))
    const refreshMd = (src: string) => {
        content.value = marked(src)
    }
    return {
        content,
        refreshMd
    }
}
