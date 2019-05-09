import Vue from "vue";
import Vuex from "vuex";
import FormFirstPart from "./components/FormFirstPart.vue";
import FormSecondPart from "./components/FormSecondPart.vue";
import FormThirdPart from "./components/FormThirdPart.vue";
import FormFourthPart from "./components/FormFourthPart.vue";
import ThankYou from "./components/ThankYou.vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    componentLoaded: FormFirstPart,
  },
  mutations: {
    changeFormSecondPart(state) {
      state.componentLoaded = FormSecondPart
    },
    changeFormThirdPart(state) {
      state.componentLoaded = FormThirdPart
    },
    changeFormFourthPart(state) {
      state.componentLoaded = FormFourthPart
    },
    changeFormThankYou(state) {
      state.componentLoaded = ThankYou
    }
  },
  actions: {
    getSecondPartQuestionnaire({ commit }) {
      commit('changeFormSecondPart')
    },
    getThirdPartQuestionnaire({ commit }) {
      commit('changeFormThirdPart')
    },
    getFourthPartQuestionnaire({ commit }) {
      commit('changeFormFourthPart')
    },
    getThankYouPartQuestionnaire({ commit }) {
      commit('changeFormThankYou')
    },
  }
});
