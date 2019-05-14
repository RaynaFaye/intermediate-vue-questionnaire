<template>
  <div class="form-section">
    <h2>4. Restitution du Véhicule</h2>
    <h3>Lors de la restitution du véhicule avez-vous été satisfait des éléments suivants?</h3>
    <app-radio-input-satisfaction
      satisfactionType="returnParking"
      @satisfactionChoice="returnParking = $event"
    >
      <p>Accès et signalisation du parking:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="returnTime"
      @satisfactionChoice="returnTime = $event"
    >
      <p>Temps d'attente avant d'être servi:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="returnQuality"
      @satisfactionChoice="returnQuality = $event"
    >
      <p>Qualité de l'accueil et disponibilité du personnel:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="returnSpeed"
      @satisfactionChoice="returnSpeed = $event"
    >
      <p>Professionnalisme et rapidité:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="returnPrice"
      @satisfactionChoice="returnPrice = $event"
    >
      <p>Clarté de la facturation et conformité par rapport au tarif annoncé:</p>
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
      returnParking: "",
      returnTime: "",
      returnQuality: "",
      returnSpeed: "",
      returnPrice: ""
    };
  },
  components: {
    appRadioInputSatisfaction: RadioInputSatisfaction
  },
  methods: {
    goNextPart() {
      this.$store.dispatch("getFifthPartQuestionnaire");
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
