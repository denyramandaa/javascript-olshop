<template>
  <div>
    <div class="rounded overflow-hidden shadow-lg bg-orange-300">
      <img class="w-full" :src="item.image" :alt="item.name">
      <div class="px-6 py-4">
        <div class="font-bold text-xl text-yellow-800">{{ item.name }}</div>
        <div class="mb-2 text-yellow-700">Price: <span class="font-bold">{{ item.price | convertToRupiah }}</span></div>
        <p class="text-yellow-700 text-sm">
          {{ item.description }}
        </p>
      </div>
      <div class="px-6 py-4">
        <button class="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none" @click="send(item)">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    item : {
      type: Object,
      default: null
    }
  },
  methods:{
    ...mapActions({
      setTrolly: 'addTrolly'
    }),
    send(a){
      this.setTrolly(a);
    }
  }
}
</script>