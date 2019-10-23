import axios from 'axios';
export const state = () => ({
  isLoading: false,
  message: '',
  parentData: [],
  childrenData: [],
})

export const mutations = {
  setLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
  setMessage (state, { message, isLoading}) {
    state.isLoading = isLoading
    state.message = message
  },
  fetchParentData(state, { parentData }) {
    state.parentData = parentData
  },
  fetchChildrenData(state, { childrenData }) {
    state.childrenData = childrenData
  },
  resetChildrenData(state) {
    state.childrenData = [];
  }
}

export const actions = {
  async setMessage ({ commit }) {
    commit('setLoading', true);
    const { data } = await axios.get('http://localhost:3004/post');
    commit('setMessage', { message: data.message, isLoading: false });
  },
  async fetchParentData ({ commit }) {
    const { data } = await axios.get('http://localhost:3004/parentData');
    commit('fetchParentData', { parentData: data });
  },
  async fetchChildrenData ({ commit }, { selectedParentId }) {
    commit('resetChildrenData');
    const { data } = await axios.get(`http://localhost:3004/childrenData?parentId=${selectedParentId}`);
    commit('fetchChildrenData', { childrenData: data[0].children });
  }
}
