import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    products: [],
    categories: [],
    users: [],
    trolly: []
  },
  getters:{
    products(state){
      return state.products
    },
    categories(state){
      return state.categories
    },
    users(state){
      return state.users
    },
    trolly(state){
      return state.trolly
    },
    counterTrolly(state){
      if(!state.trolly.length) return
      const temp = []
      for(let i=0;i<state.trolly.length;i++){
        if(!temp.some(el => el.id === state.trolly[i].id)){
          temp.push(state.trolly[i])
        }
      }
      return temp
    }
  },
  actions: {
    addTrolly({commit}, payload) {
      commit('setTrolly', payload)
    },
    decreaseTrolly({commit, state}, payload) {
      const getTheItem = state.trolly.findIndex( ob => ob.id === payload.id )
      if ( getTheItem > -1 ) commit('unsetTrolly', getTheItem)
    },
    removeTrolly({commit, state}, payload){
      const getTheItem = state.trolly.filter( ob => ob.id !== payload.id )
      commit('removeTrolly', getTheItem)
    },
    printBill({commit}){
      commit('destroyTrolly')
    },
    fetchCategory({commit}) {
      axios
        .get('http://localhost:3000/categories')
        .then(({ data }) => {
          commit('fetchCategory', data)
        })
        .catch( error => console.log(error))
    },
    fetchData({commit}) {
      axios
        .get('http://localhost:3000/products')
        .then(({ data }) => {
          commit('fetchProducts', data)
        })
        .catch( error => console.log(error))
    },
    fetchUser({commit}) {
      axios
        .get('http://localhost:3000/users')
        .then(({ data }) => {
          commit('fetchUsers', data)
          console.log(data)
        })
        .catch( error => console.log(error))
    },
  },
  mutations: {
    fetchProducts(state, payload){
      state.products = payload;
    },
    fetchCategory(state, payload){
      state.categories = payload;
    },
    fetchUsers(state, payload){
      state.users = payload;
    },
    setTrolly(state, payload){
      state.trolly.push(payload);
    },
    unsetTrolly(state, payload){
      state.trolly.splice(payload, 1)
    },
    removeTrolly(state, payload){
      state.trolly = payload
    },
    destroyTrolly(state){
      state.trolly = [];
    }
  }
});