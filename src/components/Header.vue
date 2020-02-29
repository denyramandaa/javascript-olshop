<template>
  <nav class="flex items-center justify-between flex-wrap bg-yellow-800 p-6 fixed top-0 left-0 w-full">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <router-link to="/" tag="a" class="block font-semibold text-xl tracking-tight">DOta SHop</router-link>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link :to="{ name: 'home' }" tag="a" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">All Categories</router-link>
        <router-link  v-for="(a,key) in categories" :key="key" :to="{ name: 'product', params: { id: a } }" tag="a" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">{{ a }}</router-link>
      </div>
      <div class="text-white">
        <span>Hi, {{ isLoggedIn }}</span> | <a class="block mt-4 lg:inline-block lg:mt-0 text-white underline cursor-pointer" @click.prevent="logOut()">Log Out</a>
      </div>
    </div>
  </nav>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
      computed:{
        ...mapGetters({
          categories: 'categories',
        }),
        isLoggedIn(){
          return this.$cookies.get('local_login') ? this.$cookies.get('local_login') : '';
        }
      },
      methods:{
        ...mapActions({
          fetchCategory: 'fetchCategory',
        }),
        logOut(){
          this.$cookies.remove('local_login');
          this.$router.push({ name: 'login' });
        }
      },
      created(){
        this.fetchCategory();
      },
    }
</script>