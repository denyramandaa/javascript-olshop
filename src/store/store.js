import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    products: [],
    categories: [],
    trolly: []
  },
  getters:{
    products(state){
      return state.products
    },
    categories(state){
      return state.categories
    },
    trolly(state){
      return state.trolly
    },
  },
  actions: {
    fetchData({commit}) {
      axios
        .get('http://localhost:3000/products')
        .then(({ data }) => {
          commit('fetchProducts', data)
        })
        .catch( error => console.log(error))
    },
    fetchDataByCategory({commit}, payload) {
      axios
        .get('http://localhost:3000/products')
        .then(({ data }) => {
          const result = data.filter(d => d.category == payload);
          commit('fetchProductsCategory', result)
        })
        .catch( error => console.log(error))
    },
    fetchCategory({commit}) {
      axios
        .get('http://localhost:3000/categories')
        .then(({ data }) => {
          commit('fetchCategory', data)
        })
        .catch( error => console.log(error))
    },
    addTrolly({commit}, payload) {
      commit('setTrolly', payload)
    },
  },
  mutations: {
    fetchProducts(state, payload){
      state.products = payload;
    },
    fetchProductsCategory(state, payload){
      state.products = payload;
    },
    fetchCategory(state, payload){
      state.categories = payload;
    },
    setTrolly(state, payload){
      state.trolly.push(payload);
    },
  }
});