import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";

export default defineConfig({
    plugins: [vue({}
    )],
    resolve: {
        alias: [
            {
                find: '/@',
                replacement: resolve(__dirname, './src')
            }
        ]
    },
    optimizeDeps: {
        include: [
            'ant-design-vue/es/form/utils/validateUtil',
            'ant-design-vue/es/form/utils/messages',
            'ant-design-vue/es/form/utils/asyncUtil'
        ]
    }
})
