<template>
    <div>
      <app-header></app-header>
      <div class="py-32 max-w-6xl mx-auto"> 
        <h2 class="text-2xl m-2 font-serif text-yellow-800 capitalize" v-if="cat">{{ cat }} Category</h2>
        <div class="w-full flex flex-wrap">
          <div class="p-2 w-1/4" v-for="(item, key) in itemCounter" :key="key">
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
  data(){
    return{
      cat: this.$route.query.category,
    }
  },
  watch:{
    '$route'(to, from){
      this.cat = to.query.category;
      this.fetchData();
    }
  },
  methods:{
    ...mapActions({
      fetchData: 'fetchData'
    })
  },
  computed: {
    ...mapGetters({
      products: 'products',
    }),
    itemCounter(){
      return this.cat === undefined ? this.products : this.products.filter(d => d.category == this.cat)
    }
  },
  created(){
    this.fetchData();
  },
  beforeRouteEnter (to, from, next) {
    // var getRedirect = to.query.hasOwnProperty('category') ? 'product-'+to.query.category : 'product';
    $cookies.get('local_login') ? next() : next({ name: 'login', query: { redirect: 'product' } })
  },
}
</script>