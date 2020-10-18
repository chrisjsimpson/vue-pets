import Vue from 'vue'
import Vuex from 'vuex'

import cats from '../data/cats'
import dogs from '../data/dogs'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cats,
    dogs,
    pets: [...cats, ...dogs]
  },
  mutations: {
    appendPet: (state, { species, pet }) => {
      alert(species)
      state[species].push(pet)
    }
  },
  actions: {
    addPet: ({ commit }, payload) => {
      alert(payload)
      commit('appendPet', payload)
    }
  },
  modules: {
  },
  getters
})
