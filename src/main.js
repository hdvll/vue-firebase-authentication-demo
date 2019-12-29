import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

import store from './store';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  created() {
    firebase.initializeApp(firebaseConfig);
  },
  store,
  router,
  render: h => h(App)
}).$mount('#app');
