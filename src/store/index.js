import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    phaseHistory: [
      {
        id: "intro"
      }
    ],
    languages: [],
    inventory: [],
    healthBar: {
      motivation: [],
      emotion: [],
      social: []
    }
  },
  mutations: {
    PUSH_PHASE(state, id) {
      state.phaseHistory.push({
        id
      });
    }
  },
  actions: {
    nextPhase(ctx, payload) {
      ctx.commit("PUSH_PHASE", payload.next);
    }
  },
  modules: {}
});
