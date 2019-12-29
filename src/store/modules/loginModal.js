const state = {
  show: false
};

const getters = {};

const actions = {
  toggleModal: ({ commit }, show) => {
    commit('toggle', show);
  }
};

const mutations = {
  toggle: (state, show) => {
    state.show = show;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
