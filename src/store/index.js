import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import loginModal from './modules/loginModal';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    loginModal
  }
});
