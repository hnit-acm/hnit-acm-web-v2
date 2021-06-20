import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";

export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, './src')
            }
        ]
    },
    server: {
        proxy: {
            '/api/v1/system_service': {
                target: 'http://127.0.0.1:3001',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    }
})
