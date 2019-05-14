<template>
  <div class="form-section">
    <h2>1. Votre Appréciation Générale</h2>
    <app-radio-input-satisfaction
      satisfactionType="satisfactionGlobal"
      @satisfactionChoice="globalSatisfaction = $event"
    >
      <p>Avez-vous été globalement satisfait de cette location?</p>
    </app-radio-input-satisfaction>
    <app-radio-input-numbers
      numberType="recommendationNumber"
      @numberChoice="recommendation = $event"
    >
      <p>En vous basant sur cette location, recommanderiez-vous la Location LECLERC à votre entourage?</p>
    </app-radio-input-numbers>
    <div class="continue">
      <button class="next-button" @click="goNextPart">Suivant</button>
    </div>
  </div>
</template>

<script>
import RadioInputSatisfaction from "./RadioInputSatisfaction.vue";
import RadioInputNumbers from "./RadioInputNumbers.vue";
export default {
  data() {
    return {
      globalSatisfaction: "",
      recommendation: ""
    };
  },
  components: {
    appRadioInputSatisfaction: RadioInputSatisfaction,
    appRadioInputNumbers: RadioInputNumbers
  },
  methods: {
    goNextPart() {
      this.$store.dispatch("getSecondPartQuestionnaire");
    }
  }
};
</script>

<style scoped>
p {
  font-weight: bold;
}
.continue {
  align-self: end;
}
.next-button {
  font-size: 20px;
  color: black;
  background: #fb7219;
  padding: 10px 25px 10px 25px;
  border-radius: 5px;
  border: none;
}
</style>
