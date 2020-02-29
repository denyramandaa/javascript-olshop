<template>
    <div class="w-full w-full bg-orange-200 relative">   
        <router-view></router-view>
        <app-trolly></app-trolly>
    </div>
</template>

<script>
import AppTrolly from './components/Trolly.vue'
export default {
    components:{
        AppTrolly
    }
}
</script>

<style>
</style>
