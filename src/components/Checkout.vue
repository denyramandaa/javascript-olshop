<template>
    <div class="flex justify-center py-40">
    <div class="w-full max-w-sm">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <h1 class="text-3xl text-center">Payment</h1>
            </div>
            <div class="mb-4">
              <div class="font-mono" v-for="(item, key) in itemCounter" :key="key">
                  <div> {{ item.name }} </div>
                  <div class="flex justify-between">
                      <div>{{ item.price | convertToRupiah }} <span class="font-bold">x {{ itemLength(item) }}</span></div>
                      <div>{{ totalPrice(item) | convertToRupiah}}</div>
                  </div>
                  <hr class="border-dotted">
              </div>
            </div>
            <div class="mb-4"><div class="flex justify-between font-mono font-bold"><div>Total</div><div>{{ finalPrice(trolly) | convertToRupiah }}</div></div></div>
            <div class="flex items-center justify-center">
                <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" @click="pay()"> Print Bill </button>
            </div>
        </div>
        <div class="text-center">
            <button type="button" class="text-gray-600 font-bold py-2 px-4 rounded focus:outline-none" @click="cancel()"> Cancel </button>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data(){
    return{
    }
  },
  computed: {
    ...mapGetters({
      trolly: 'trolly',
    }),
    itemCounter(){
      return this.trolly.filter((v, i, a) => a.indexOf(v) === i);
    }
  },
  methods:{
    ...mapActions({
      printBill: 'printBill',
    }),
    cancel(){
      this.$router.push({ name: 'product' });
    },
    pay(){
      this.printBill();
      this.$router.push({ name: 'product' });
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
  }
}
</script>

<style>
</style>
