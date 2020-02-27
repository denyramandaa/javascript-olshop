<template>
  <nav class="flex items-center justify-between flex-wrap bg-yellow-800 p-6 fixed top-0 left-0 w-full">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <router-link to="/" tag="a" class="block font-semibold text-xl tracking-tight">Shopuru</router-link>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link to="/" tag="a" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">Semua Produk</router-link>
        <router-link to="/kategori/shounen" tag="a" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">Shounen</router-link>
        <router-link to="/kategori/shoujo" tag="a" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">Shoujo</router-link>
      </div>
      <div class="text-white" v-if="isLoggedIn">
        <span>Hi, {{ isLoggedIn }}</span> | <a class="block mt-4 lg:inline-block lg:mt-0 text-white underline cursor-pointer" @click.prevent="logOut()">Log Out</a>
      </div>
      <div class="text-white" v-else>
        <router-link to="/login" tag="a" class="block mt-4 lg:inline-block lg:mt-0 text-white underline">Log In</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
      data(){
        return{
          user: ''
        }
      },
      computed:{
        isLoggedIn(){
          this.user = this.$cookies.get('local_login') ? this.$cookies.get('local_login') : ''
          return this.$cookies.get('local_login') ? this.$cookies.get('local_login') : false;
        }
      },
      methods:{
        logOut(){
          this.$cookies.remove('local_login');
          this.$router.push('/login');
        }
      }
    }
</script>