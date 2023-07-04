import { createStore } from 'vuex';

import axios from 'axios';

export default createStore({
  state: {
    loggedInUser: "",
    isLoggedIn: false,
    response: [],
    cartData: []
  },
  getters: {
    fullName: (_state: any) => {
      // return `${state.firstName} ${state.lastName}`
    }
  },
  mutations: {
    setLoggedInUser: (state: any, userDetails: any) => {
      state.loggedInUser = userDetails;
      state.isLoggedIn = true;
    },

    setData: (state: any, data: any) => {
      state.response = data;
    },

    logout: (state: any) => {
      state.isLoggedIn = false;
    },

    addToCart: (state: any, addRecored: any) => {
      const add = [...state.cartData,addRecored]
      state.cartData = add;
    },
    removeFromCart:(state: any, removeRecored: any)=>{
      const index = state.cartData.indexOf(removeRecored);
      if(index > -1){
        state.cartData.splice(index, 1); 
      }
    }

  },
  actions: {
    async fetchData({ commit }: any) {
      try {
        const data = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log("api response", data.data)
        commit("setData", data.data);
      } catch (error) {
        console.log(error)
      }
    }

  },
  modules: {
  }
})
