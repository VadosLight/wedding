import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { qrcode } from 'vite-plugin-qrcode';
import { imagetools } from 'vite-imagetools'
import { URL, URLSearchParams } from 'url';

// https://vite.dev/config/
export default defineConfig({
  base: '/wedding/',
  plugins: [
    react(),
    qrcode(),
    imagetools({
      cache: {
        enabled: true,
      },
      defaultDirectives: (url: URL) => {
        if (url.searchParams.has('imagetools')) {
          return new URLSearchParams({
            format: 'webp',
            quality: '100',
          })
        }
        return new URLSearchParams()
      }
    })
  ],
})
