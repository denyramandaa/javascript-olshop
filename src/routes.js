import Home from './components/Home.vue';
import Category from './components/Category.vue';
import Login from './components/Login.vue'

export const routes = [
  { path: '', component: Home },
  { path: '/login', component: Login },
  { path: '/kategori/:id', component: Category },
  { path: '/redirect', redirect: '/login'},
  { path: '*', redirect: '/'},
];