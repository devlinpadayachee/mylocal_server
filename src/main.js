// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import VueGoodTable from 'vue-good-table'
import App from './App'
import Users from './components/Users'
import Suppliers from './components/Suppliers'
import Products from './components/Products'
import Orders from './components/Orders'
import './assets/css/styles.css'
import './assets/css/cardeffects.css'
import './assets/js/scripts.js'

Vue.use(VeeValidate)
Vue.use(VueFire)
Vue.use(VueRouter)
Vue.use(VueGoodTable)

Vue.config.productionTip = false

// const NotFound = { template: '<p>Page not found</p>' }
const routes = [
  { path: '/', component: App },
  { path: '/users', component: Users },
  { path: '/suppliers', component: Suppliers },
  { path: '/products', component: Products },
  { path: '/orders', component: Orders }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

/* eslint-disable no-new */
new Vue({
  router,
  components: { App, Users, Suppliers, Products, Orders }
}).$mount('#app')
