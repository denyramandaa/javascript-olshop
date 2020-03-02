<template>
  <div class="fixed w-64 trolly top-0 right-0 bg-yellow-800" :class="{ show : trollyShow && !trollyIsEmpty }">
    <div class="relative min-h-screen py-16 px-2 flex justify-center items-center">
      <div class="trolly__wrapper w-full">
        <div class="w-full bg-orange-200 mb-2 p-2 rounded" v-for="(item, key) in counterTrolly" :key="key">
          <div class="pb-1 text-yellow-800">
            {{ item.name }}
          </div>
          <hr class="border-yellow-800">
          <div class="pt-1 flex justify-between text-yellow-800">
            <div>{{ item.price | convertToRupiah }} <span class="font-bold">x {{ itemLength(item) }}</span></div>
            <div class="font-bold">{{ totalPrice(item) | convertToRupiah}}</div>
          </div>
          <div class="flex justify-between pt-2">
            <div class="w-2/4">
              <button class="bg-orange-400 hover:bg-orange-500 text-white font-bold rounded focus:outline-none px-2" @click="removeItem(item)">Remove</button>
            </div>
            <div class="flex w-2/4 justify-end">
              <button class="bg-orange-400 hover:bg-orange-500 text-white font-bold mr-1 rounded focus:outline-none w-1/4" @click="increaseItem(item)">+</button>
              <button class="bg-orange-400 hover:bg-orange-500 text-white font-bold rounded focus:outline-none w-1/4" @click="decreaseItem(item)">-</button>
            </div>
          </div>
        </div>
        <div class="mb-2 text-white text-right">
          Total: Rp <span class="font-bold text-2xl">{{ finalPrice(trolly) | convertToRupiah }}</span>
        </div>
        <button class="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none w-full" @click="checkOut(itemCounter)">
          Checkout
        </button>
      </div>
      <transition name="fade">
        <div class="absolute trolly--button" @click="trollyShow =! trollyShow" v-if="!trollyIsEmpty"></div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data(){
    return{
      trollyShow: false,
      trollyIsEmpty: true
    }
  },
  computed: {
    ...mapGetters({
      trolly: 'trolly',
      counterTrolly: 'counterTrolly'
    }),
    itemCounter(){
      return [...new Set(this.trolly)]
      // return this.trolly.filter((v, i, a) => a.indexOf(v) === i);
    }
  },
  watch:{
    trolly(){
      if(this.trolly != ''){
        this.trollyIsEmpty = false
        this.trollyShow = true
      }else{
        this.trollyIsEmpty = true
        this.trollyShow = false
      }
    }
  },
  methods:{
    ...mapActions({
      setTrolly: 'addTrolly',
      decreaseTrolly: 'decreaseTrolly',
      removeTrolly: 'removeTrolly'
    }),
    checkOut(a){
      this.trollyShow = false;
      this.$router.push({ name: 'checkout', query: { back : this.$route.fullPath } });
    },
    itemLength(a){
      return this.trolly.filter(d => d.id === a.id).length;
    },
    totalPrice(a){
      return a.price * this.itemLength(a);
    },
    finalPrice(a){
      return a.reduce(function(total, num){
        return total + num.price
      }, 0);
    },
    increaseItem(a){
      this.setTrolly(a);
    },
    decreaseItem(a){
      this.decreaseTrolly(a);
    },
    removeItem(a){
      this.removeTrolly(a);
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .8s;
    will-change: opacity;
  }
  .fade-enter, .fade-leave-to {
      opacity: 0
  }
</style>