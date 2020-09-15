import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    phaseHistory: [
      {
        id: "first-day-3",
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
    },
    EARN_ITEM(state, item) {
      state.inventory.push(item);
    },
  },
  actions: {
    nextPhase(ctx, payload) {
      console.log(payload);
      ctx.commit("PUSH_PHASE", payload.next);
      if (payload.learn) {
        ctx.commit("LEARN_LANGUAGE", payload.language);
      }
      if (payload.item) {
        ctx.commit("EARN_ITEM", payload.item);
      }
    },
  },
  modules: {},
});
