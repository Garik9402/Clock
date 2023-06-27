import { defineConfig } from 'vite'

const noAttr = () => {
   return {
      name: "no-attribute",
      transformIndexHtml(html) {
         return html.replace(`type="module" crossorigin`, "async");
      }
   }
}

export default defineConfig({
   plugins: [noAttr()],
   base: '',
   build: {
      outDir: 'docs'
   }
})