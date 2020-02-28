import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    products: [],
  },
  getters:{
    products(){
      return state.products
    },
  },
  actions: {
    fetchData({commit, state}) {
      axios
        .get('http://localhost:3000/products')
        .then(({ data }) => {
          commit('fetchProducts', data)
          // return state.products
        })
        .catch( error => console.log(error))
    },
  },
  mutations: {
    fetchProducts(state, data){
      state.products = data;
    }
  }
});