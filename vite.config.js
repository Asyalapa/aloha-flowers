import { defineConfig } from 'vite';
import path from 'path'; 

export const viteConfigObj = {
  base: '/aloha-flowers/',

  resolve: {
    alias: {
      // 📁 Корневые алиасы
      '@': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public'),

      // 📂 src/ 
      '@js': path.resolve(__dirname, './src/js'),
      '@components': path.resolve(__dirname, './src/components'),
      '@less': path.resolve(__dirname, './src/less'),

      // 📂 js/ 
      '@modules': path.resolve(__dirname, './src/js/modules'),
      '@utils': path.resolve(__dirname, './src/js/utils'),

      // 📂 less/ 
      '@base': path.resolve(__dirname, './src/less/base'),
      '@blocks': path.resolve(__dirname, './src/less/blocks'),
      '@layout': path.resolve(__dirname, './src/less/layout'),
      '@pages': path.resolve(__dirname, './src/less/pages'),
      '@utilities': path.resolve(__dirname, './src/less/utilities'),

      // 📂 public/ 
      '@fonts': path.resolve(__dirname, './public/fonts'),
      '@icons': path.resolve(__dirname, './public/icons'),
      '@images': path.resolve(__dirname, './public/images'),
      
      // 📂 public/images/ 
      '@banners': path.resolve(__dirname, './public/images/banners'),
      '@flowers': path.resolve(__dirname, './public/images/flowers'),
      '@reviews': path.resolve(__dirname, './public/images/reviews'),
      '@delivery': path.resolve(__dirname, './public/images/delivery'),

      // 📂 src/assets/  
      '@assets': path.resolve(__dirname, './src/assets'),
      '@svg': path.resolve(__dirname, './src/assets/svg'),
    },
  },

  server: {
    open: true,
  },

  publicDir: 'public',
};

export default defineConfig(viteConfigObj);