import Vue from "vue";
import Vuex from "vuex";
import FormFirstPart from "./components/FormFirstPart.vue";
import FormSecondPart from "./components/FormSecondPart.vue";
import FormThirdPart from "./components/FormThirdPart.vue";
import FormFourthPart from "./components/FormFourthPart.vue";
import FormFifthPart from "./components/FormFifthPart.vue";
import ThankYou from "./components/ThankYou.vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    componentLoaded: FormFirstPart,
    formData: {}
  },
  mutations: {
    changeFormSecondPart(state, formData) {
      state.formData = { ...state.formData, ...formData }
      state.componentLoaded = FormSecondPart
    },
    changeFormThirdPart(state, formData) {
      state.formData = { ...state.formData, ...formData }
      state.componentLoaded = FormThirdPart
    },
    changeFormFourthPart(state, formData) {
      state.formData = { ...state.formData, ...formData }
      state.componentLoaded = FormFourthPart
    },
    changeFormFifthPart(state, formData) {
      state.formData = { ...state.formData, ...formData }
      state.componentLoaded = FormFifthPart
    },
    changeFormThankYou(state, formData) {
      state.formData = { ...state.formData, ...formData }
      state.componentLoaded = ThankYou
    }
  },
  actions: {
    getSecondPartQuestionnaire({ commit }, formData) {
      commit('changeFormSecondPart', formData)
    },
    getThirdPartQuestionnaire({ commit }, formData) {
      commit('changeFormThirdPart', formData)
    },
    getFourthPartQuestionnaire({ commit }, formData) {
      commit('changeFormFourthPart', formData)
    },
    getFifthPartQuestionnaire({ commit }, formData) {
      commit('changeFormFifthPart', formData)
    },
    getThankYouPartQuestionnaire({ commit }, formData) {
      commit('changeFormThankYou', formData)
    },
  }
});
