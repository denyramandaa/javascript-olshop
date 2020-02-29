<template>
  <div class="fixed w-64 trolly top-0 right-0 bg-yellow-800" :class="{ show : trollyShow }">
    <div class="relative min-h-screen py-16 px-2 flex justify-center items-center" v-if="trolly != ''">
      <div class="trolly__wrapper w-full">
        <div class="w-full bg-orange-200 mb-2 p-2 rounded" v-for="(item, key) in itemCounter" :key="key">
          <div class="pb-1 text-yellow-800">
            {{ item.name }}
          </div>
          <hr class="border-yellow-800">
          <div class="pt-1 flex justify-between text-yellow-800">
            <div>Rp {{ item.price }} <span class="font-bold">x {{ itemLength(item) }}</span></div>
            <div class="font-bold">Rp {{ totalPrice(item) }}</div>
          </div>
          <div class="flex justify-end pt-2">
            <button class="w-1/6 bg-orange-400 hover:bg-orange-500 text-white font-bold mr-1 rounded focus:outline-none">+</button>
            <button class="w-1/6 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded focus:outline-none">-</button>
          </div>
        </div>
        <div class="mb-2 text-white text-right">
          Total: <span class="font-bold">6700</span>
        </div>
        <button class="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none w-full">
          Checkout
        </button>
      </div>
      <div class="absolute trolly--button" @click="trollyShow =! trollyShow"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data(){
    return{
      trollyShow: false,
    }
  },
  computed: {
    ...mapGetters({
      trolly: 'trolly',
    }),
    itemCounter(){
      return this.trolly.filter((v, i, a) => a.indexOf(v) === i)
    }
  },
  methods:{
    itemLength(a){
      var res = this.trolly.filter(d => d.id === a.id).length
      return res;
    },
    totalPrice(a){
      var res = a.price * this.itemLength(a);
      return res;
    },
    finalPrice(a){
      // 
    }
  }
}
</script>
<style scoped>
  .trolly{
    transform: translateX(100%);
    transition: transform .4s cubic-bezier(.46,.54,.17,1);
  }
  .trolly.show{
    transform: translateX(0%);
  }
  .trolly--button{
    left: 0;
    top: 10%;
    transform: translateX(-90%);
    width: 50px;
    height: 50px;
    background: #11ad33;
    border-radius: 100%;
    cursor: pointer;
    background-image: url(/src/assets/cart.png);
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>