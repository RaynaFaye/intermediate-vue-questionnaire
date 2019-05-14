<template>
  <div class="form-section">
    <h2>3. Le Véhicule</h2>
    <h3>Avez-vous été satisfait du véhicule reçu?</h3>
    <app-radio-input-satisfaction
      satisfactionType="proprete"
      @satisfactionChoice="proprete = $event"
    >
      <p>Proprété intérieure et extérieure:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="satisfaction"
      @satisfactionChoice="satisfaction = $event"
    >
      <p>Satisfaction du véhicule loué par rapport au véhicule réservé:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction satisfactionType="marque" @satisfactionChoice="marque = $event">
      <p>Marque et modèle du véhicule:</p>
    </app-radio-input-satisfaction>
    <div class="continue">
      <button class="next-button" @click="goNextPart">Suivant</button>
    </div>
  </div>
</template>

<script>
import RadioInputSatisfaction from "./RadioInputSatisfaction.vue";
export default {
  data() {
    return {
      proprete: "",
      satisfaction: "",
      marque: ""
    };
  },
  components: {
    appRadioInputSatisfaction: RadioInputSatisfaction
  },
  methods: {
    goNextPart() {
      this.$store.dispatch("getFourthPartQuestionnaire");
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
