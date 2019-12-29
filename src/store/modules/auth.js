import * as firebase from 'firebase/app';
import 'firebase/auth';

const state = {
  user: null,
  loading: true,
  error: null
};

const getters = {
  isLoggedIn: state => {
    return state.user ? true : false;
  },
  isLoading: () => {
    return state.loading ? true : false;
  }
};

const actions = {
  getLoggedInUser: ({ commit }) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        commit('setUser', user);
      } else {
        commit('setUser', null);
      }
    });
  },

  login: ({ commit }, { provider, email, password }) => {
    commit('loading', true);

    if (provider === 'password') {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
          commit('error', error);
        });
    } else {
      let authProvider;
      if (provider === 'google') {
        authProvider = new firebase.auth.GoogleAuthProvider();
      } else if (provider === 'facebook') {
        authProvider = new firebase.auth.FacebookAuthProvider();
      }

      firebase.auth().signInWithRedirect(authProvider);
    }
  },

  logout: ({ commit }) => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        commit('setUser', null);
      })
      .catch(function(error) {
        commit('setUser', null);
        commit('error', error);
      });
  }
};

const mutations = {
  // Auth mutations

  loading: state => {
    state.loading = true;
  },

  setUser: (state, user) => {
    state.user = user;
    state.loading = false;
  },

  setLoading: (state, loading) => {
    state.loading = loading;
  },

  setError: (state, error) => {
    state.error = error;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
