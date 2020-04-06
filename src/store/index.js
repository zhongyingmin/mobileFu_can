import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user'
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    user
  },
  getters
});

export default store