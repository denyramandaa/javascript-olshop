<template>
    <div class="w-full flex justify-center items-center min-h-screen">   
        <form class="bg-orange-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/4" @submit.prevent="logIn()">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-orange-100" id="username" type="text" placeholder="Username" v-model="user.username" value="admin" :class="{ 'border-red-600' : loginError }">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-orange-100" id="password" type="password" placeholder="Password" v-model="user.password" value="admin" :class="{ 'border-red-600' : loginError }">
            <p class="text-red-600 text-xs italic text-center" v-if="loginError">Account is not found</p>
          </div>
          <div class="flex items-center justify-center">
            <button class="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none" type="submit">Sign In</button>
          </div>
        </form>
        <div>{{ this.users.username }}</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return{
            user:{
              username: 'admin',
              password: 'admin'
            },
            loginError: false,
        }
    },
    methods: {
        ...mapActions({
          fetchUser: 'fetchUser'
        }),
        logIn(){
          var getIndexUser = this.users.findIndex(obj => obj.username === this.user.username && obj.password === this.user.password);
          var getRedircet = this.$route.query.hasOwnProperty('redirect') ? this.$route.query.redirect : 'home';
          if(getIndexUser == -1) {
            this.loginError = true;
            return
          }
          // if(this.$route.query.hasOwnProperty('redirect')){
          //   var productHasCategory = this.$route.query.redirect.includes("-") ? this.$route.query.redirect.split("-") : this.$route.query.redirect;
          //   this.$cookies.set('local_login',this.users[getIndexUser].username,'23h');
          //   if(this.$route.query.redirect.includes("-")){
          //     this.$router.push({ name: productHasCategory[0], query: { category: productHasCategory[1] } });
          //     return
          //   }
          //   this.$router.push({ name: productHasCategory });
          //   return
          // }

          

          this.$cookies.set('local_login',this.users[getIndexUser].username,'23h');
          this.$router.push({ name: getRedircet });
        }
    },
    computed: {
      ...mapGetters({
        users: 'users',
      }),
    },
    created(){
      this.fetchUser();
    },
    beforeRouteEnter (to, from, next) {
      $cookies.get('local_login') ? next({ name: 'home' }) : next()
    },
}
</script>

<style>
</style>
