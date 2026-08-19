import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { sitePages } from './src/site-pages'

// The router uses history mode, but GitHub Pages has no rewrite rules — a cold load of
// /privacy/ needs a real file. Emit one copy of the built index.html per route, with that
// page's title and description, so deep links (the URLs given to the app stores) return 200.
function staticRoutePages(): Plugin {
  return {
    name: 'static-route-pages',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const index = bundle['index.html']
      if (!index || index.type !== 'asset') {
        this.warn('index.html was not found in the bundle; no static route pages emitted')
        return
      }

      const html = index.source.toString()
      for (const page of sitePages) {
        if (page.path === '/') continue
        this.emitFile({
          type: 'asset',
          fileName: `${page.path.replace(/^\//, '')}/index.html`,
          source: html
            .replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`)
            .replace(/(<meta name="description" content=")[^"]*(")/, `$1${page.description}$2`)
        })
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    staticRoutePages()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
