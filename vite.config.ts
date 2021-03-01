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
    },
    server:{
        proxy:{
            '/api': {
                target: 'http://127.0.0.1:4523',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    }
})
