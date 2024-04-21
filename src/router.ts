import { createMemoryHistory, createRouter } from 'vue-router'

import Login from './sections/login/Login.vue'
import Dashboard from './sections/dashboard/Dashboard.vue'
import Menu01 from './sections/menu/Menu01.vue'
import Menu02 from './sections/menu/Menu02.vue'
import Menu03 from './sections/menu/Menu03.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/menu01', component: Menu01 },
  { path: '/menu02', component: Menu02 },
  { path: '/menu03', component: Menu03 },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
