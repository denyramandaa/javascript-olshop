<template>
    <div class="flex justify-center items-center min-h-screen">
      <app-header></app-header>
      <div class="max-w-6xl mx-auto"> 
        <h1 class="block font-semibold text-xl tracking-tight text-5xl text-center text-yellow-800">DOta SHop</h1>
        <p class="text-yellow-700 text-lg text-center px-32 py-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
        <div class="flex justify-between p-2">
          <h2 class="block font-semibold text-xl tracking-tight text-3xl text-center text-yellow-800">Latest Item</h2>
          <router-link :to="{ name: 'product' }" tag="a" class="block lg:inline-block lg:mt-0 text-yellow-700 py-3 underline">See All Products</router-link>
        </div>
        <div class="w-full flex flex-wrap">
          <div class="p-2 w-1/4" v-for="(item, key) in getLatestItem" :key="key">
            <app-card :item="item"></app-card>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import AppHeader from './Header.vue'
import AppCard from './Card.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components:{
      AppHeader,
      AppCard
  },
  computed: {
    ...mapGetters({
      products: 'products',
    }),
    getLatestItem(){
      return this.products.slice(0,4);
    }
  },
  methods:{
    ...mapActions({
      fetchData: 'fetchData'
    })
  },
  created(){
    this.fetchData();
  },
  beforeRouteEnter (to, from, next) {
    $cookies.get('local_login') ? next() : next({ name: 'login', query: { redirect: 'home' } })
  },
}
</script>