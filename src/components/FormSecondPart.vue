<template>
  <div class="form-section">
    <h2>2. Location Du Véhicule</h2>
    <h3>Lors de la location du véhicule, avez-vous été satisfait du personnel du service location dans les domaine suivant?</h3>
    <app-radio-input-satisfaction
      satisfactionType="rentalWait"
      @satisfactionChoice="rentalWait = $event"
    >
      <p>Attente au comptoir avant d'être servi:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="rentalCourtesy"
      @satisfactionChoice="rentalCourtesy = $event"
    >
      <p>Courtoisie:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="rentalHelpfulness"
      @satisfactionChoice="rentalHelpfulness = $event"
    >
      <p>Serviabilité:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="rentalProfessionalism"
      @satisfactionChoice="rentalProfessionalism = $event"
    >
      <p>Professionnalisme:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="rentalSpeed"
      @satisfactionChoice="rentalSpeed = $event"
    >
      <p>Rapidité de service au départ du véhicule:</p>
    </app-radio-input-satisfaction>
    <app-radio-input-satisfaction
      satisfactionType="rentalExplanation"
      @satisfactionChoice="rentalExplanation = $event"
    >
      <p>Explication des tarifs et des conditions de location au comptoir:</p>
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
      rentalWait: "",
      rentalCourtesy: "",
      rentalHelpfulness: "",
      rentalProfessionalism: "",
      rentalSpeed: "",
      rentalExplanation: ""
    };
  },
  components: {
    appRadioInputSatisfaction: RadioInputSatisfaction
  },
  methods: {
    goNextPart() {
      const formData = {
        rentalWait: this.rentalWait,
        rentalCourtesy: this.rentalCourtesy,
        rentalHelpfulness: this.rentalHelpfulness,
        rentalProfessionalism: this.rentalProfessionalism,
        rentalSpeed: this.rentalSpeed,
        rentalExplanation: this.rentalExplanation
      };
      this.$store.dispatch("getThirdPartQuestionnaire", formData);
      window.scrollTo(0, 0);
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
