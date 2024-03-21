import path from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// 按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// 按需导入 ICON
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// 开发者工具 http://localhost:3000/__inspect
import Inspect from 'vite-plugin-inspect'

const pathSrc = path.resolve(__dirname, 'src')
export default defineConfig({
    resolve: {
        alias: {
            '@': pathSrc,
        },
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [
                ElementPlusResolver(),
                // 自动导入图标组件
                IconsResolver({
                    prefix: 'Icon',
                }),
            ],
            dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
        }),
        Components({
            resolvers: [
                // 自动注册图标组件
                IconsResolver({
                    enabledCollections: ['ep'],
                }),
                // 自动导入 Element Plus 组件
                ElementPlusResolver(),
            ],
            dts: path.resolve(pathSrc, 'components.d.ts'),
        }),
        Icons({
            compiler: 'vue3',
            autoInstall: true,
        }),
        Inspect(),
    ]
})
