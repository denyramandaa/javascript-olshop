<template>
  <nav class="flex items-center justify-between flex-wrap bg-yellow-800 p-6 fixed top-0 left-0 w-full">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <router-link to="/" tag="a" class="block font-semibold text-xl tracking-tight">Shopuru</router-link>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link :to="{ name: 'home' }" tag="a" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">Semua Produk</router-link>
        <router-link :to="{ name: 'product', params: { id: 'shuonen' } }" tag="a" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">Shounen</router-link>
        <router-link :to="{ name: 'product', params: { id: 'shoujo' } }" tag="a" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">Shoujo</router-link>
      </div>
      <div class="text-white">
        <span>Hi, {{ isLoggedIn }}</span> | <a class="block mt-4 lg:inline-block lg:mt-0 text-white underline cursor-pointer" @click.prevent="logOut()">Log Out</a>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
      computed:{
        isLoggedIn(){
          return this.$cookies.get('local_login') ? this.$cookies.get('local_login') : '';
        }
      },
      methods:{
        logOut(){
          this.$cookies.remove('local_login');
          this.$router.push({ name: 'login' });
        }
      }
    }
</script>