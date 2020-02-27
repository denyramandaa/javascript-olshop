<template>
    <div class="w-full">   
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>

    import AppHeader from './components/Header.vue'
    
    export default {
        components:{
            AppHeader
        },
        methods:{
            
        }
    }
</script>

<style>
</style>
