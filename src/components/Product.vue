<template>
  <div>
      <app-header></app-header>
      <div class="flex justify-center align-itemsflex justify-center items-center min-h-screen">
        <p>Kategory Index {{ $route.params.id }}</p>
      </div>
  </div>
</template>
<script>
import AppHeader from './Header.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  components:{
      AppHeader
  },
  data(){
    return{
      id: this.$route.params.id,
    }
  },
  watch:{
    '$route'(to, from){
      this.id = to.params.id;
    }
  },
  beforeRouteEnter (to, from, next) {
    $cookies.get('local_login') ? next() : next({ name: 'login' })
  }
}
</script>