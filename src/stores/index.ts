import type { App } from 'vue'

import { createPinia } from 'pinia'
import { createLogger, reset } from './plugins'

const pinia = createPinia()

pinia.use(createLogger)
pinia.use(reset)

const setupStore = (app: App<Element>) => {
  app.use(pinia)
}

export { setupStore }
