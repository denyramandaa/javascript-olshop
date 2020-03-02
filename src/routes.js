import Home from './components/Home.vue';
import Product from './components/Product.vue';
import Checkout from './components/Checkout.vue';
import Login from './components/Login.vue'

export const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/product/', component: Product, name: 'product' },
  { path: '/checkout/', component: Checkout, name: 'checkout' },
  { path: '*', redirect: '/', name: 'redirect'},
];