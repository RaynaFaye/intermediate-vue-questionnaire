<template>
  <div class="form-section">
    <h2>3. Le Véhicule</h2>
    <h3>Avez-vous été satisfait du véhicule reçu?</h3>
    <app-radio-input-satisfaction
      satisfactionType="vehiculeClean"
      @satisfactionChoice="vehiculeClean = $event"
    >
      <p>Proprété intérieure et extérieure:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="vehiculeSatisfaction"
      @satisfactionChoice="vehiculeSatisfaction = $event"
    >
      <p>Satisfaction du véhicule loué par rapport au véhicule réservé:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="vehiculeBrand"
      @satisfactionChoice="vehiculeBrand = $event"
    >
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
      vehiculeClean: "",
      vehiculeSatisfaction: "",
      vehiculeBrand: ""
    };
  },
  components: {
    appRadioInputSatisfaction: RadioInputSatisfaction
  },
  methods: {
    goNextPart() {
      const formData = {
        vehiculeClean: this.vehiculeClean,
        vehiculeSatisfaction: this.vehiculeSatisfaction,
        vehiculeBrand: this.vehiculeBrand
      };
      this.$store.dispatch("getFourthPartQuestionnaire", formData);
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
