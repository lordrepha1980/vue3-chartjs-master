import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        target: 'es2015',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'vue3-chartjs-master',
            fileName: (format) => `vue3-chartjs-master.${format}.js`,
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        },
    },
    plugins: [vue()],
})
