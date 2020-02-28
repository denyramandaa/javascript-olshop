<template>
    <div>
      <app-header></app-header>
      <p>Home</p>
    </div>
</template>
<script>
import AppHeader from './Header.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  components:{
      AppHeader
  },
  methods:{
    ...mapActions([
      'fetchData'
    ]),
  },
  computed: {
    ...mapGetters({
      products: 'products',
    }),
  },
  mounted(){
    console.log(this.$store.state.products);
  },
  created(){
    this.fetchData();
  },
  beforeRouteEnter (to, from, next) {
    $cookies.get('local_login') ? next() : next({ name: 'login' })
  }
}
</script>