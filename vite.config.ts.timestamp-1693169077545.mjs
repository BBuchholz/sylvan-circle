// vite.config.ts
import path from 'node:path'
import { defineConfig } from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/vite@4.2.1_@types+node@18.6.1/node_modules/vite/dist/node/index.js'
import Vue from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/@vitejs+plugin-vue@4.1.0_vite@4.2.1_vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs'
import Pages from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/vite-plugin-pages@0.29.0_vite@4.2.1/node_modules/vite-plugin-pages/dist/index.mjs'
import generateSitemap from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/vite-ssg-sitemap@0.4.3/node_modules/vite-ssg-sitemap/dist/index.js'
import Layouts from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/vite-plugin-vue-layouts@0.8.0_vite@4.2.1_vue-router@4.1.6_vue@3.2.47/node_modules/vite-plugin-vue-layouts/dist/index.mjs'
import Components from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/unplugin-vue-components@0.24.1_rollup@2.79.1_vue@3.2.47/node_modules/unplugin-vue-components/dist/vite.mjs'
import AutoImport from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/unplugin-auto-import@0.15.2_@vueuse+core@9.13.0_rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js'
import Markdown from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/vite-plugin-vue-markdown@0.22.4_rollup@2.79.1_vite@4.2.1/node_modules/vite-plugin-vue-markdown/dist/index.mjs'
import { VitePWA } from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/vite-plugin-pwa@0.14.7_vite@4.2.1_workbox-build@6.5.4_workbox-window@6.5.4/node_modules/vite-plugin-pwa/dist/index.mjs'
import VueI18n from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/@intlify+unplugin-vue-i18n@0.10.0_rollup@2.79.1_vue-i18n@9.2.2/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs'
import Inspect from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/vite-plugin-inspect@0.7.20_rollup@2.79.1_vite@4.2.1_vue@3.2.47/node_modules/vite-plugin-inspect/dist/index.mjs'
import Inspector from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/vite-plugin-vue-inspector@3.4.0_vite@4.2.1/node_modules/vite-plugin-vue-inspector/dist/index.mjs'
import LinkAttributes from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js'
import Unocss from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/unocss@0.51.4_postcss@8.4.21_rollup@2.79.1_vite@4.2.1/node_modules/unocss/dist/vite.mjs'
import Shiki from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/markdown-it-shiki@0.8.0/node_modules/markdown-it-shiki/dist/index.mjs'
import VueMacros from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/unplugin-vue-macros@2.0.0_@vueuse+core@9.13.0_rollup@2.79.1_vite@4.2.1_vue@3.2.47/node_modules/unplugin-vue-macros/dist/vite.mjs'
import WebfontDownload from 'file:///home/brent/sylvan-circle/node_modules/.pnpm/vite-plugin-webfont-dl@3.7.3_vite@4.2.1/node_modules/vite-plugin-webfont-dl/dist/index.mjs'

const __vite_injected_original_dirname = '/home/brent/sylvan-circle'
const vite_config_default = defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__vite_injected_original_dirname, 'src')}/`,
    },
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/],
          reactivityTransform: true,
        }),
      },
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
    // https://github.com/antfu/vite-plugin-vue-markdown
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      wrapperClasses: 'prose prose-sm m-auto text-left',
      headEnabled: true,
      markdownItSetup(md) {
        md.use(Shiki, {
          theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
        })
        md.use(LinkAttributes, {
          matcher: link => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Myriad Central Node',
        short_name: 'MCN',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__vite_injected_original_dirname, 'locales/**')],
    }),
    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect(),
    // https://github.com/webfansplz/vite-plugin-vue-inspector
    Inspector({
      toggleButtonVisibility: 'never',
    }),
    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload(),
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
  },
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      reduceInlineStyles: false,
    },
    onFinished() {
      generateSitemap()
    },
  },
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', /vue-i18n/],
  },
})
export {
  vite_config_default as default,
}
// # sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9icmVudC9zeWx2YW4tY2lyY2xlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9icmVudC9zeWx2YW4tY2lyY2xlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2JyZW50L3N5bHZhbi1jaXJjbGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXG5pbXBvcnQgZ2VuZXJhdGVTaXRlbWFwIGZyb20gJ3ZpdGUtc3NnLXNpdGVtYXAnXG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cydcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1tYXJrZG93bidcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5pbXBvcnQgVnVlSTE4biBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJ1xuaW1wb3J0IEluc3BlY3QgZnJvbSAndml0ZS1wbHVnaW4taW5zcGVjdCdcbmltcG9ydCBJbnNwZWN0b3IgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWluc3BlY3RvcidcbmltcG9ydCBMaW5rQXR0cmlidXRlcyBmcm9tICdtYXJrZG93bi1pdC1saW5rLWF0dHJpYnV0ZXMnXG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IFNoaWtpIGZyb20gJ21hcmtkb3duLWl0LXNoaWtpJ1xuaW1wb3J0IFZ1ZU1hY3JvcyBmcm9tICd1bnBsdWdpbi12dWUtbWFjcm9zL3ZpdGUnXG5pbXBvcnQgV2ViZm9udERvd25sb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLXdlYmZvbnQtZGwnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ34vJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpfS9gLFxuICAgIH0sXG4gIH0sXG5cbiAgcGx1Z2luczogW1xuICAgIFZ1ZU1hY3Jvcyh7XG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgIHZ1ZTogVnVlKHtcbiAgICAgICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgICAgICAgcmVhY3Rpdml0eVRyYW5zZm9ybTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2hhbm5vZXJ1L3ZpdGUtcGx1Z2luLXBhZ2VzXG4gICAgUGFnZXMoe1xuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Kb2huQ2FtcGlvbkpyL3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzXG4gICAgTGF5b3V0cygpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgICd2dWUnLFxuICAgICAgICAndnVlLXJvdXRlcicsXG4gICAgICAgICd2dWUtaTE4bicsXG4gICAgICAgICd2dWUvbWFjcm9zJyxcbiAgICAgICAgJ0B2dWV1c2UvaGVhZCcsXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgICAgXSxcbiAgICAgIGR0czogJ3NyYy9hdXRvLWltcG9ydHMuZC50cycsXG4gICAgICBkaXJzOiBbXG4gICAgICAgICdzcmMvY29tcG9zYWJsZXMnLFxuICAgICAgICAnc3JjL3N0b3JlcycsXG4gICAgICBdLFxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIC8vIGFsbG93IGF1dG8gbG9hZCBtYXJrZG93biBjb21wb25lbnRzIHVuZGVyIGAuL3NyYy9jb21wb25lbnRzL2BcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXG4gICAgICAvLyBhbGxvdyBhdXRvIGltcG9ydCBhbmQgcmVnaXN0ZXIgY29tcG9uZW50cyB1c2VkIGluIG1hcmtkb3duXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxuICAgICAgZHRzOiAnc3JjL2NvbXBvbmVudHMuZC50cycsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5vY3NzXG4gICAgLy8gc2VlIHVub2Nzcy5jb25maWcudHMgZm9yIGNvbmZpZ1xuICAgIFVub2NzcygpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXZ1ZS1tYXJrZG93blxuICAgIC8vIERvbid0IG5lZWQgdGhpcz8gVHJ5IHZpdGVzc2UtbGl0ZTogaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGVzc2UtbGl0ZVxuICAgIE1hcmtkb3duKHtcbiAgICAgIHdyYXBwZXJDbGFzc2VzOiAncHJvc2UgcHJvc2Utc20gbS1hdXRvIHRleHQtbGVmdCcsXG4gICAgICBoZWFkRW5hYmxlZDogdHJ1ZSxcbiAgICAgIG1hcmtkb3duSXRTZXR1cChtZCkge1xuICAgICAgICAvLyBodHRwczovL3ByaXNtanMuY29tL1xuICAgICAgICBtZC51c2UoU2hpa2ksIHtcbiAgICAgICAgICB0aGVtZToge1xuICAgICAgICAgICAgbGlnaHQ6ICd2aXRlc3NlLWxpZ2h0JyxcbiAgICAgICAgICAgIGRhcms6ICd2aXRlc3NlLWRhcmsnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIG1kLnVzZShMaW5rQXR0cmlidXRlcywge1xuICAgICAgICAgIG1hdGNoZXI6IChsaW5rOiBzdHJpbmcpID0+IC9eaHR0cHM/OlxcL1xcLy8udGVzdChsaW5rKSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgICAgIHJlbDogJ25vb3BlbmVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1wd2FcbiAgICBWaXRlUFdBKHtcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLnN2ZycsICdzYWZhcmktcGlubmVkLXRhYi5zdmcnXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6ICdNeXJpYWQgQ2VudHJhbCBOb2RlJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ01DTicsXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaW50bGlmeS9idW5kbGUtdG9vbHMvdHJlZS9tYWluL3BhY2thZ2VzL3VucGx1Z2luLXZ1ZS1pMThuXG4gICAgVnVlSTE4bih7XG4gICAgICBydW50aW1lT25seTogdHJ1ZSxcbiAgICAgIGNvbXBvc2l0aW9uT25seTogdHJ1ZSxcbiAgICAgIGZ1bGxJbnN0YWxsOiB0cnVlLFxuICAgICAgaW5jbHVkZTogW3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdsb2NhbGVzLyoqJyldLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLWluc3BlY3RcbiAgICAvLyBWaXNpdCBodHRwOi8vbG9jYWxob3N0OjMzMzMvX19pbnNwZWN0LyB0byBzZWUgdGhlIGluc3BlY3RvclxuICAgIEluc3BlY3QoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJmYW5zcGx6L3ZpdGUtcGx1Z2luLXZ1ZS1pbnNwZWN0b3JcbiAgICBJbnNwZWN0b3Ioe1xuICAgICAgdG9nZ2xlQnV0dG9uVmlzaWJpbGl0eTogJ25ldmVyJyxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZWF0LWFnZW5jeS92aXRlLXBsdWdpbi13ZWJmb250LWRsXG4gICAgV2ViZm9udERvd25sb2FkKCksXG4gIF0sXG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVzdC1kZXYvdml0ZXN0XG4gIHRlc3Q6IHtcbiAgICBpbmNsdWRlOiBbJ3Rlc3QvKiovKi50ZXN0LnRzJ10sXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgZGVwczoge1xuICAgICAgaW5saW5lOiBbJ0B2dWUnLCAnQHZ1ZXVzZScsICd2dWUtZGVtaSddLFxuICAgIH0sXG4gIH0sXG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtc3NnXG4gIHNzZ09wdGlvbnM6IHtcbiAgICBzY3JpcHQ6ICdhc3luYycsXG4gICAgZm9ybWF0dGluZzogJ21pbmlmeScsXG4gICAgY3JpdHRlcnNPcHRpb25zOiB7XG4gICAgICByZWR1Y2VJbmxpbmVTdHlsZXM6IGZhbHNlLFxuICAgIH0sXG4gICAgb25GaW5pc2hlZCgpIHsgZ2VuZXJhdGVTaXRlbWFwKCkgfSxcbiAgfSxcblxuICBzc3I6IHtcbiAgICAvLyBUT0RPOiB3b3JrYXJvdW5kIHVudGlsIHRoZXkgc3VwcG9ydCBuYXRpdmUgRVNNXG4gICAgbm9FeHRlcm5hbDogWyd3b3JrYm94LXdpbmRvdycsIC92dWUtaTE4bi9dLFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlAsT0FBTyxVQUFVO0FBQzlRLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sY0FBYztBQUNyQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxvQkFBb0I7QUFDM0IsT0FBTyxZQUFZO0FBQ25CLE9BQU8sV0FBVztBQUNsQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxxQkFBcUI7QUFqQjVCLElBQU0sbUNBQW1DO0FBbUJ6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxNQUFNLEdBQUcsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUN4QztBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLFVBQVU7QUFBQSxNQUNSLFNBQVM7QUFBQSxRQUNQLEtBQUssSUFBSTtBQUFBLFVBQ1AsU0FBUyxDQUFDLFVBQVUsT0FBTztBQUFBLFVBQzNCLHFCQUFxQjtBQUFBLFFBQ3ZCLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxJQUdELE1BQU07QUFBQSxNQUNKLFlBQVksQ0FBQyxPQUFPLElBQUk7QUFBQSxJQUMxQixDQUFDO0FBQUE7QUFBQSxJQUdELFFBQVE7QUFBQTtBQUFBLElBR1IsV0FBVztBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxRQUNKO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQTtBQUFBLElBR0QsV0FBVztBQUFBO0FBQUEsTUFFVCxZQUFZLENBQUMsT0FBTyxJQUFJO0FBQUE7QUFBQSxNQUV4QixTQUFTLENBQUMsVUFBVSxjQUFjLE9BQU87QUFBQSxNQUN6QyxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUE7QUFBQTtBQUFBLElBSUQsT0FBTztBQUFBO0FBQUE7QUFBQSxJQUlQLFNBQVM7QUFBQSxNQUNQLGdCQUFnQjtBQUFBLE1BQ2hCLGFBQWE7QUFBQSxNQUNiLGdCQUFnQixJQUFJO0FBRWxCLFdBQUcsSUFBSSxPQUFPO0FBQUEsVUFDWixPQUFPO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0YsQ0FBQztBQUNELFdBQUcsSUFBSSxnQkFBZ0I7QUFBQSxVQUNyQixTQUFTLENBQUMsU0FBaUIsZUFBZSxLQUFLLElBQUk7QUFBQSxVQUNuRCxPQUFPO0FBQUEsWUFDTCxRQUFRO0FBQUEsWUFDUixLQUFLO0FBQUEsVUFDUDtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBLElBR0QsUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsZUFBZSxDQUFDLGVBQWUsdUJBQXVCO0FBQUEsTUFDdEQsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxJQUdELFFBQVE7QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGlCQUFpQjtBQUFBLE1BQ2pCLGFBQWE7QUFBQSxNQUNiLFNBQVMsQ0FBQyxLQUFLLFFBQVEsa0NBQVcsWUFBWSxDQUFDO0FBQUEsSUFDakQsQ0FBQztBQUFBO0FBQUE7QUFBQSxJQUlELFFBQVE7QUFBQTtBQUFBLElBR1IsVUFBVTtBQUFBLE1BQ1Isd0JBQXdCO0FBQUEsSUFDMUIsQ0FBQztBQUFBO0FBQUEsSUFHRCxnQkFBZ0I7QUFBQSxFQUNsQjtBQUFBO0FBQUEsRUFHQSxNQUFNO0FBQUEsSUFDSixTQUFTLENBQUMsbUJBQW1CO0FBQUEsSUFDN0IsYUFBYTtBQUFBLElBQ2IsTUFBTTtBQUFBLE1BQ0osUUFBUSxDQUFDLFFBQVEsV0FBVyxVQUFVO0FBQUEsSUFDeEM7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUdBLFlBQVk7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFlBQVk7QUFBQSxJQUNaLGlCQUFpQjtBQUFBLE1BQ2Ysb0JBQW9CO0FBQUEsSUFDdEI7QUFBQSxJQUNBLGFBQWE7QUFBRSxzQkFBZ0I7QUFBQSxJQUFFO0FBQUEsRUFDbkM7QUFBQSxFQUVBLEtBQUs7QUFBQTtBQUFBLElBRUgsWUFBWSxDQUFDLGtCQUFrQixVQUFVO0FBQUEsRUFDM0M7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
