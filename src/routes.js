import Home from './components/Home.vue';
import Product from './components/Product.vue';
import Login from './components/Login.vue'

export const routes = [
  { path: '', component: Home, name: 'home' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/product/:id', component: Product, name: 'product' },
  { path: '*', redirect: '/', name: 'redirect'},
];