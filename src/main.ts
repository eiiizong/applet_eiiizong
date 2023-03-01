import { createSSRApp } from 'vue'
import App from './App.vue'
import { setupStore } from '@/stores'

export function createApp() {
  const app = createSSRApp(App)
  // pinia 仓库管理
  setupStore(app)
  return {
    app,
  }
}
