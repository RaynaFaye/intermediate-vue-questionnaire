import Vue from "vue";
import Vuex from "vuex";
import FormFirstPart from "./components/FormFirstPart.vue";
import FormSecondPart from "./components/FormSecondPart.vue";
import FormThirdPart from "./components/FormThirdPart.vue";
import FormFourthPart from "./components/FormFourthPart.vue";
import FormFifthPart from "./components/FormFifthPart.vue";
import ThankYou from "./components/ThankYou.vue";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    componentLoaded: FormFirstPart,
    formData: {}
  },
  mutations: {
    updateFormData(state, formData) {
      state.formData = { ...state.formData, ...formData }
    },
    changeFormSecondPart(state) {
      state.componentLoaded = FormSecondPart
    },
    changeFormThirdPart(state) {
      state.componentLoaded = FormThirdPart
    },
    changeFormFourthPart(state) {
      state.componentLoaded = FormFourthPart
    },
    changeFormFifthPart(state) {
      state.componentLoaded = FormFifthPart
    },
    changeFormThankYou(state) {
      state.componentLoaded = ThankYou
    },
  },
  actions: {
    getSecondPartQuestionnaire({ commit }, formData) {
      commit('updateFormData', formData)
      commit('changeFormSecondPart')
    },
    getThirdPartQuestionnaire({ commit }, formData) {
      commit('updateFormData', formData)
      commit('changeFormThirdPart')
    },
    getFourthPartQuestionnaire({ commit }, formData) {
      commit('updateFormData', formData)
      commit('changeFormFourthPart')
    },
    getFifthPartQuestionnaire({ commit }, formData) {
      commit('updateFormData', formData)
      commit('changeFormFifthPart')
    },
    getThankYouPartQuestionnaire({ commit }, formData) {
      commit('updateFormData', formData)
      axios
        .post('http://localhost/locationquestionnaire/sendtodb.php', this.state.formData)
        .then(commit('changeFormThankYou'))
        .catch(error => alert(error))
    },
  }
});
