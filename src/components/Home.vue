<template>
    <div>
      <app-header></app-header>
      <div class="py-32 container mx-auto"> 
        <h2 class="text-2xl m-2 font-serif text-yellow-800">All Categories</h2>
        <div class="w-full flex flex-wrap">
          <div class="p-2 w-1/4" v-for="(item, key) in products" :key="key">
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
  methods:{
    ...mapActions({
      fetchData: 'fetchData'
    }),
  },
  computed: {
    ...mapGetters({
      products: 'products',
    }),
  },
  created(){
    this.fetchData();
  },
  beforeRouteEnter (to, from, next) {
    $cookies.get('local_login') ? next() : next({ name: 'login' })
  },
}
</script>