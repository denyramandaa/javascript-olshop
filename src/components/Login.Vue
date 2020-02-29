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
    </div>
</template>

<script>
    export default {
        data(){
            return{
               user: {
                   username: 'admin',
                   password: 'admin'
               },
               loginError: false,
            }
        },
        methods: {
            logIn(){
              if(this.user.username !== 'admin' || this.user.password !== 'admin') {
                this.loginError = true;
                return
              }
              
              this.$cookies.set('local_login',this.user.username,'23h');
              this.$router.push({ name: 'home' });
            }
        },
        beforeRouteEnter (to, from, next) {
          $cookies.get('local_login') ? next({ name: 'home' }) : next()
        },
    }
</script>

<style>
</style>
