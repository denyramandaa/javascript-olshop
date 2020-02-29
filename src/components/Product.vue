<template>
    <div>
      <app-header></app-header>
      <div class="py-32 container mx-auto"> 
        <h2 class="text-2xl m-2 font-serif text-yellow-800">{{ cat }} Category</h2>
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
  data(){
    return{
      cat: this.$route.params.id,
    }
  },
  watch:{
    '$route'(to, from){
      this.cat = to.params.id;
      this.fetchData(this.cat);
    }
  },
  methods:{
    ...mapActions({
      fetchData: 'fetchDataByCategory'
    }),
  },
  computed: {
    ...mapGetters({
      products: 'products',
    }),
  },
  created(){
    this.fetchData(this.cat);
  },
  beforeRouteEnter (to, from, next) {
    $cookies.get('local_login') ? next() : next({ name: 'login' })
  },
}
</script>