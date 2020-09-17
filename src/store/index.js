import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    phaseHistory: [
      {
        id: "day-one-4",
        type: "",
      },
    ],
    languages: [],
    inventory: [],
    healthBar: {
      motivation: [],
      emotion: [],
      social: [],
    },
  },
  mutations: {
    PUSH_PHASE(state, id) {
      state.phaseHistory.push({
        id,
      });
    },
    LEARN_LANGUAGE(state, language) {
      state.languages.push(language);
      console.log(language);
    },
    EARN_ITEM(state, item) {
      state.inventory.push(item);
    },
  },
  actions: {
    nextPhase(ctx, payload) {
      console.assert(payload.next);
      console.log(payload);
      ctx.commit("PUSH_PHASE", payload.next);
      if (payload.language) {
        ctx.commit("LEARN_LANGUAGE", payload.language);
        console.log(payload.language);
      }
      if (payload.item) {
        ctx.commit("EARN_ITEM", payload.item);
      }
    },
  },
  modules: {},
});
