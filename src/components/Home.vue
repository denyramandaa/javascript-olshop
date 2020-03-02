<template>
    <div class="flex justify-center items-center min-h-screen">
      <app-header></app-header>
      <div class="py-32 max-w-6xl mx-auto"> 
        <h1 class="block font-semibold text-xl tracking-tight text-5xl text-center text-yellow-800">DOta SHop</h1>
        <p class="text-yellow-700 text-lg text-center px-32 py-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
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
  beforeRouteEnter (to, from, next) {
    $cookies.get('local_login') ? next() : next({ name: 'login', query: { redirect: 'home' } })
  },
}
</script>